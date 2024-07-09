import Image from 'next/image'
import { auth } from '@/auth'

export default async function Page() {
  const session = await auth()

  if (!session) {
    return <div>Not authenticated</div>
  }

  return (
    <div className="container">
      Session exists:
      <div>{session?.user?.name}</div>
      <div>{session?.user?.email}</div>
      <Image
        src={session?.user?.image || ''}
        alt={session?.user?.name || ''}
        width={100}
        height={100}
      />
    </div>
  )
}
