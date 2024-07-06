import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const newUser = await prisma.user.create({
    data: {
      email: 'nchallinger@gmail.com',
      name: 'admin',
    },
  })

  console.log('Created a new user:', newUser)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
