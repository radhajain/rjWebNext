import { UserButton } from '@clerk/nextjs'
import { getServerAuthSession } from '~/server/auth'
import { api } from '~/trpc/server'

export default async function Home() {
  // const hello = await api.post.hello.query({ text: 'from tRPC' })
  // const session = await getServerAuthSession()

  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white'>
      <div className='container flex flex-col items-center justify-center gap-12 px-4 py-16 '>
        <h1 className='text-5xl font-extrabold tracking-tight sm:text-[5rem]'>
          Welcome to my app
        </h1>
        <div className='h-screen'>
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
    </main>
  )
}
