import { SignIn } from './components/signIn'
import ActivityList from './list/ActivityList'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 pb-4 underline decoration-wavy">
          <svg viewBox="0 0 600 300">
            <symbol id="s-text">
              <text text-anchor="middle" x="50%" y="50%" dy=".35em">
                Do a thing
              </text>
            </symbol>
            <use className="text" xlinkHref="#s-text"></use>
            <use className="text" xlinkHref="#s-text"></use>
            <use className="text" xlinkHref="#s-text"></use>
            <use className="text" xlinkHref="#s-text"></use>
            <use className="text" xlinkHref="#s-text"></use>
          </svg>
        </h1>
        <p className="text-xl mt-4">
          Let's do a <span className="underline-magical">thing!</span>
        </p>
        <SignIn />
        <ActivityList />
      </div>
    </main>
  )
}
