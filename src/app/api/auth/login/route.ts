import { NextRequest, NextResponse } from 'next/server'
import { loginSchema } from '@/lib/validations'
import { getUserByEmail, updateUser } from '@/lib/database'
import { comparePassword, generateToken } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate request body
    const validationResult = loginSchema.safeParse(body)
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid input',
          error: validationResult.error.errors[0].message,
        },
        { status: 400 }
      )
    }
    
    const { email, password } = validationResult.data
    
    // Check if user exists
    const user = getUserByEmail(email)
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid credentials',
        },
        { status: 401 }
      )
    }
    
    // Verify password
    const isPasswordValid = await comparePassword(password, user.hashedPassword)
    if (!isPasswordValid) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid credentials',
        },
        { status: 401 }
      )
    }
    
    // Update last login
    updateUser(user.id, { lastLogin: new Date().toISOString() })
    
    // Generate JWT token
    const userForToken = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      createdAt: new Date(user.createdAt),
      lastLogin: new Date(),
    }
    
    const token = generateToken(userForToken)
    
    return NextResponse.json(
      {
        success: true,
        message: 'Login successful',
        data: {
          token,
          user: {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          },
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 }
    )
  }
}