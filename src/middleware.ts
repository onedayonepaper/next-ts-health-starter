import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken, extractTokenFromHeader } from './lib/auth'

// Protected routes that require authentication
const protectedRoutes = [
  '/dashboard',
  '/profile',
  '/api/user',
  '/api/tasks',
]

// Admin only routes
const adminRoutes = [
  '/admin',
  '/api/admin',
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Check if the route is protected
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  )
  
  // Check if the route is admin only
  const isAdminRoute = adminRoutes.some(route => 
    pathname.startsWith(route)
  )
  
  if (isProtectedRoute || isAdminRoute) {
    const authHeader = request.headers.get('authorization')
    const token = extractTokenFromHeader(authHeader)
    
    if (!token) {
      // Redirect to login for web routes, return 401 for API routes
      if (pathname.startsWith('/api/')) {
        return NextResponse.json(
          { success: false, message: 'Authentication required' },
          { status: 401 }
        )
      }
      return NextResponse.redirect(new URL('/login', request.url))
    }
    
    const payload = verifyToken(token)
    if (!payload) {
      // Redirect to login for web routes, return 401 for API routes
      if (pathname.startsWith('/api/')) {
        return NextResponse.json(
          { success: false, message: 'Invalid or expired token' },
          { status: 401 }
        )
      }
      return NextResponse.redirect(new URL('/login', request.url))
    }
    
    // Check admin access
    if (isAdminRoute && payload.role !== 'admin') {
      if (pathname.startsWith('/api/')) {
        return NextResponse.json(
          { success: false, message: 'Admin access required' },
          { status: 403 }
        )
      }
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
    
    // Add user info to request headers for API routes
    if (pathname.startsWith('/api/')) {
      const response = NextResponse.next()
      response.headers.set('x-user-id', payload.userId)
      response.headers.set('x-user-email', payload.email)
      response.headers.set('x-user-role', payload.role)
      return response
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/health (health check endpoint)
     * - api/auth (authentication endpoints)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    '/((?!api/health|api/auth|_next/static|_next/image|favicon.ico|public).*)',
  ],
}