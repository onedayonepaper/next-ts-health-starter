import fs from 'fs'
import path from 'path'
import { User } from './auth'
import { generateId } from './utils'

const DATA_DIR = path.join(process.cwd(), 'data')
const USERS_FILE = path.join(DATA_DIR, 'users.json')
const TASKS_FILE = path.join(DATA_DIR, 'tasks.json')

export interface Task {
  id: string
  title: string
  description: string
  completed: boolean
  userId: string
  createdAt: Date
  updatedAt: Date
}

export interface UserData extends Omit<User, 'createdAt' | 'lastLogin'> {
  hashedPassword: string
  createdAt: string
  lastLogin?: string
}

// Ensure data directory exists
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
}

// Generic file operations
function readJsonFile<T>(filePath: string, defaultValue: T): T {
  ensureDataDir()
  if (!fs.existsSync(filePath)) {
    writeJsonFile(filePath, defaultValue)
    return defaultValue
  }
  
  try {
    const data = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    return defaultValue
  }
}

function writeJsonFile<T>(filePath: string, data: T): void {
  ensureDataDir()
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
  } catch (error) {
    // Handle error silently or implement proper error handling
  }
}

// User operations
export function getAllUsers(): UserData[] {
  return readJsonFile(USERS_FILE, [])
}

export function getUserById(id: string): UserData | undefined {
  const users = getAllUsers()
  return users.find(user => user.id === id)
}

export function getUserByEmail(email: string): UserData | undefined {
  const users = getAllUsers()
  return users.find(user => user.email === email)
}

export function createUser(userData: Omit<UserData, 'id' | 'createdAt'>): UserData {
  const users = getAllUsers()
  const newUser: UserData = {
    ...userData,
    id: generateId(),
    createdAt: new Date().toISOString(),
  }
  
  users.push(newUser)
  writeJsonFile(USERS_FILE, users)
  return newUser
}

export function updateUser(id: string, updates: Partial<UserData>): UserData | null {
  const users = getAllUsers()
  const userIndex = users.findIndex(user => user.id === id)
  
  if (userIndex === -1) return null
  
  users[userIndex] = { ...users[userIndex], ...updates }
  writeJsonFile(USERS_FILE, users)
  return users[userIndex]
}

export function deleteUser(id: string): boolean {
  const users = getAllUsers()
  const filteredUsers = users.filter(user => user.id !== id)
  
  if (filteredUsers.length === users.length) return false
  
  writeJsonFile(USERS_FILE, filteredUsers)
  return true
}

// Task operations
export function getAllTasks(): Task[] {
  return readJsonFile(TASKS_FILE, [])
}

export function getTasksByUserId(userId: string): Task[] {
  const tasks = getAllTasks()
  return tasks.filter(task => task.userId === userId)
}

export function getTaskById(id: string): Task | undefined {
  const tasks = getAllTasks()
  return tasks.find(task => task.id === id)
}

export function createTask(taskData: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): Task {
  const tasks = getAllTasks()
  const newTask: Task = {
    ...taskData,
    id: generateId(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  
  tasks.push(newTask)
  writeJsonFile(TASKS_FILE, tasks)
  return newTask
}

export function updateTask(id: string, updates: Partial<Omit<Task, 'id' | 'createdAt'>>): Task | null {
  const tasks = getAllTasks()
  const taskIndex = tasks.findIndex(task => task.id === id)
  
  if (taskIndex === -1) return null
  
  tasks[taskIndex] = { 
    ...tasks[taskIndex], 
    ...updates,
    updatedAt: new Date(),
  }
  writeJsonFile(TASKS_FILE, tasks)
  return tasks[taskIndex]
}

export function deleteTask(id: string): boolean {
  const tasks = getAllTasks()
  const filteredTasks = tasks.filter(task => task.id !== id)
  
  if (filteredTasks.length === tasks.length) return false
  
  writeJsonFile(TASKS_FILE, filteredTasks)
  return true
}