'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus, CheckCircle, Circle, Trash2, Edit3, LogOut, User } from 'lucide-react'
import { CreateTaskInput, createTaskSchema } from '@/lib/validations'
import { Task } from '@/lib/database'

interface User {
  id: string
  name: string
  email: string
  role: string
}

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [tasks, setTasks] = useState<Task[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [isCreating, setIsCreating] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateTaskInput>({
    resolver: zodResolver(createTaskSchema),
  })

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')
    
    if (!token || !userData) {
      router.push('/login')
      return
    }

    try {
      const parsedUser = JSON.parse(userData)
      setUser(parsedUser)
      fetchTasks(token)
    } catch (error) {
      router.push('/login')
    }
  }, [router])

  const fetchTasks = async (token: string) => {
    try {
      const response = await fetch('/api/tasks', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })

      const result = await response.json()

      if (result.success) {
        setTasks(result.data)
      } else {
        toast.error(result.message || 'Failed to fetch tasks')
      }
    } catch (error) {
      toast.error('Failed to fetch tasks')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCreateTask = async (data: CreateTaskInput) => {
    setIsCreating(true)
    const token = localStorage.getItem('token')
    
    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        setTasks([...tasks, result.data])
        reset()
        setShowCreateForm(false)
        toast.success('Task created successfully!')
      } else {
        toast.error(result.message || 'Failed to create task')
      }
    } catch (error) {
      toast.error('Failed to create task')
    } finally {
      setIsCreating(false)
    }
  }

  const toggleTaskComplete = async (taskId: string, completed: boolean) => {
    const token = localStorage.getItem('token')
    
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ completed: !completed }),
      })

      const result = await response.json()

      if (result.success) {
        setTasks(tasks.map(task => 
          task.id === taskId ? { ...task, completed: !completed } : task
        ))
        toast.success(completed ? 'Task marked as incomplete' : 'Task completed!')
      } else {
        toast.error(result.message || 'Failed to update task')
      }
    } catch (error) {
      toast.error('Failed to update task')
    }
  }

  const deleteTask = async (taskId: string) => {
    if (!confirm('Are you sure you want to delete this task?')) return
    
    const token = localStorage.getItem('token')
    
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })

      const result = await response.json()

      if (result.success) {
        setTasks(tasks.filter(task => task.id !== taskId))
        toast.success('Task deleted successfully!')
      } else {
        toast.error(result.message || 'Failed to delete task')
      }
    } catch (error) {
      toast.error('Failed to delete task')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/login')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  const completedTasks = tasks.filter(task => task.completed).length
  const pendingTasks = tasks.filter(task => !task.completed).length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-700">{user?.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-3 py-2 text-sm text-red-600 hover:text-red-700"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold">{tasks.length}</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Tasks</p>
                <p className="text-2xl font-semibold text-gray-900">{tasks.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Completed</p>
                <p className="text-2xl font-semibold text-gray-900">{completedTasks}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Circle className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Pending</p>
                <p className="text-2xl font-semibold text-gray-900">{pendingTasks}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tasks Section */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Tasks</h2>
              <button
                onClick={() => setShowCreateForm(!showCreateForm)}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add Task</span>
              </button>
            </div>
          </div>

          {/* Create Task Form */}
          {showCreateForm && (
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <form onSubmit={handleSubmit(handleCreateTask)} className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Task Title
                  </label>
                  <input
                    {...register('title')}
                    type="text"
                    id="title"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter task title"
                  />
                  {errors.title && (
                    <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description (optional)
                  </label>
                  <textarea
                    {...register('description')}
                    id="description"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter task description"
                  />
                  {errors.description && (
                    <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
                  )}
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    type="submit"
                    disabled={isCreating}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isCreating ? 'Creating...' : 'Create Task'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowCreateForm(false)
                      reset()
                    }}
                    className="px-4 py-2 text-gray-600 hover:text-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Tasks List */}
          <div className="divide-y divide-gray-200">
            {tasks.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <p className="text-gray-500">No tasks yet. Create your first task!</p>
              </div>
            ) : (
              tasks.map((task) => (
                <div key={task.id} className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => toggleTaskComplete(task.id, task.completed)}
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          task.completed
                            ? 'bg-green-500 border-green-500 text-white'
                            : 'border-gray-300 hover:border-green-400'
                        }`}
                      >
                        {task.completed && <CheckCircle className="w-3 h-3" />}
                      </button>
                      <div>
                        <h3 className={`text-sm font-medium ${
                          task.completed ? 'text-gray-500 line-through' : 'text-gray-900'
                        }`}>
                          {task.title}
                        </h3>
                        {task.description && (
                          <p className={`text-sm ${
                            task.completed ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {task.description}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => deleteTask(task.id)}
                        className="p-1 text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  )
}