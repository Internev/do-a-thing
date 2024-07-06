// Import necessary modules
import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import csvParser from 'csv-parser'

const prisma = new PrismaClient()

interface ISeedActivity {
  title: string
  note?: string
  authorId: number
}

async function seedDatabase() {
  const activities: ISeedActivity[] = []

  // Read and parse the .csv file
  fs.createReadStream('./scripts/act.csv')
    .pipe(csvParser())
    .on('data', (row) => {
      activities.push({
        title: row.title,
        note: row.note,
        authorId: 1,
      })
    })
    .on('end', async () => {
      // Insert each activity into the database
      for (const activity of activities) {
        console.log('seeding activity:', activity)
        await prisma.activity.create({
          data: activity,
        })
      }

      console.log('Successfully seeded the database.')
      await prisma.$disconnect()
    })
    .on('error', (err) => {
      console.error('Error while seeding the database:', err)
      process.exit(1)
    })
}

seedDatabase()
