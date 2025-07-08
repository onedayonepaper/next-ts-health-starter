import { NextRequest, NextResponse } from 'next/server'
import { updateTaskSchema } from '@/lib/validations'
import { getTaskById, updateTask, deleteTask } from '@/lib/database'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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
    
    const task = getTaskById(params.id)
    if (!task) {
      return NextResponse.json(
        {
          success: false,
          message: 'Task not found',
        },
        { status: 404 }
      )
    }
    
    // Check if user owns the task
    if (task.userId !== userId) {
      return NextResponse.json(
        {
          success: false,
          message: 'Access denied',
        },
        { status: 403 }
      )
    }
    
    return NextResponse.json(
      {
        success: true,
        message: 'Task retrieved successfully',
        data: task,
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

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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
    
    const task = getTaskById(params.id)
    if (!task) {
      return NextResponse.json(
        {
          success: false,
          message: 'Task not found',
        },
        { status: 404 }
      )
    }
    
    // Check if user owns the task
    if (task.userId !== userId) {
      return NextResponse.json(
        {
          success: false,
          message: 'Access denied',
        },
        { status: 403 }
      )
    }
    
    const body = await request.json()
    
    // Validate request body
    const validationResult = updateTaskSchema.safeParse(body)
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
    
    // Update task
    const updatedTask = updateTask(params.id, validationResult.data)
    
    return NextResponse.json(
      {
        success: true,
        message: 'Task updated successfully',
        data: updatedTask,
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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
    
    const task = getTaskById(params.id)
    if (!task) {
      return NextResponse.json(
        {
          success: false,
          message: 'Task not found',
        },
        { status: 404 }
      )
    }
    
    // Check if user owns the task
    if (task.userId !== userId) {
      return NextResponse.json(
        {
          success: false,
          message: 'Access denied',
        },
        { status: 403 }
      )
    }
    
    // Delete task
    const deleted = deleteTask(params.id)
    if (!deleted) {
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to delete task',
        },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      {
        success: true,
        message: 'Task deleted successfully',
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