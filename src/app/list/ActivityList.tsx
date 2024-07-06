'use client'

import { useEffect, useState } from 'react'

interface Activity {
  id: number
  title: string
  note?: string
  authorId: number
  createdAt: string
  updatedAt: string
}

export default function ActivityList() {
  const [data, setData] = useState<Activity[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api')
        const result = await response.json()
        console.log('Fetched data:', result)
        setData(result.activities)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    console.log('fetching data')
    fetchData()
  }, [])

  return (
    <div>
      {data &&
        data.map((act) => {
          return (
            <div key={act.id} className="border p-4 my-4">
              <h2 className="text-xl font-bold">{act.title}</h2>
              <p>{act.note}</p>
            </div>
          )
        })}
    </div>
  )
}
