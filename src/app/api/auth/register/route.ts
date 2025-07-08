import { NextRequest, NextResponse } from 'next/server'
import { registerSchema } from '@/lib/validations'
import { getUserByEmail, createUser } from '@/lib/database'
import { hashPassword, generateToken } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate request body
    const validationResult = registerSchema.safeParse(body)
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
    
    const { name, email, password } = validationResult.data
    
    // Check if user already exists
    const existingUser = getUserByEmail(email)
    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: 'User with this email already exists',
        },
        { status: 409 }
      )
    }
    
    // Hash password
    const hashedPassword = await hashPassword(password)
    
    // Create user
    const newUser = createUser({
      name,
      email,
      hashedPassword,
      role: 'user',
    })
    
    // Generate JWT token
    const userForToken = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      role: newUser.role,
      createdAt: new Date(newUser.createdAt),
    }
    
    const token = generateToken(userForToken)
    
    return NextResponse.json(
      {
        success: true,
        message: 'User registered successfully',
        data: {
          token,
          user: {
            id: newUser.id,
            email: newUser.email,
            name: newUser.name,
            role: newUser.role,
          },
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 }
    )
  }
}