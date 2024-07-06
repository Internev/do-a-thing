import ActivityList from './list/ActivityList'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-6xl font-bold">Do a thing</h1>
        <p className="text-xl mt-4">Let's do a thing!</p>
        <ActivityList />
      </div>
    </main>
  )
}
