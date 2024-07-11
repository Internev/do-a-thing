import { signIn } from '@/auth'
import Button from './Button'

export function SignIn() {
  console.log('🤔 process.env.DATABASE_URL', process.env.DATABASE_URL)
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="container mx-auto w-2/5 h-2/5 bg-white rounded border-2 flex flex-col items-center justify-around drop-shadow-2xl">
        <p className="text-6xl font-bold">
          <svg viewBox="0 0 600 100" height="100">
            <symbol id="s-text">
              <text textAnchor="middle" x="50%" y="50%" dy=".35em">
                Do a thing
              </text>
            </symbol>
            <use className="animated-text-svg" xlinkHref="#s-text"></use>
            <use className="animated-text-svg" xlinkHref="#s-text"></use>
            <use className="animated-text-svg" xlinkHref="#s-text"></use>
            <use className="animated-text-svg" xlinkHref="#s-text"></use>
            <use className="animated-text-svg" xlinkHref="#s-text"></use>
          </svg>
        </p>
        <div className="flex flex-col items-center justify-around h-24">
          <form
            action={async () => {
              'use server'
              await signIn('github')
            }}
          >
            <Button type="submit" text="Sign in with github" />
          </form>
          <form
            action={async () => {
              'use server'
              await signIn('google')
            }}
          >
            <Button type="submit" text="Sign in with Google" />
          </form>
        </div>
      </div>
    </div>
  )
}
