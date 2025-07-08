import { NextRequest, NextResponse } from 'next/server'
import { createTaskSchema } from '@/lib/validations'
import { createTask, getTasksByUserId } from '@/lib/database'

export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id')
    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          message: 'User ID not found',
        },
        { status: 401 }
      )
    }
    
    const tasks = getTasksByUserId(userId)
    
    return NextResponse.json(
      {
        success: true,
        message: 'Tasks retrieved successfully',
        data: tasks,
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id')
    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          message: 'User ID not found',
        },
        { status: 401 }
      )
    }
    
    const body = await request.json()
    
    // Validate request body
    const validationResult = createTaskSchema.safeParse(body)
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
    
    const { title, description, completed } = validationResult.data
    
    // Create task
    const newTask = createTask({
      title,
      description: description || '',
      completed: completed || false,
      userId,
    })
    
    return NextResponse.json(
      {
        success: true,
        message: 'Task created successfully',
        data: newTask,
      },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 }
    )
  }
}