import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request) {
  try {
    console.log('received request:', request)
    // Replace with your actual database access logic
    const activities = await prisma.activity.findMany()
    console.log('🥶🥶🥶🥶🥶🥶🥶🥶activities:', activities)
    return Response.json({ activities })
  } catch (error) {
    return { error: 'Failed to fetch data' }
  }
}
