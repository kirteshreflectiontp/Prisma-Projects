import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here
    await prisma.user.create({
        data:{
            id:1,
            name:'Krittesh',
            email:'kriteshgaikwad13@gmail.com'
        }
    })
    const allUsers = await prisma.user.findMany()
    const userOne = await prisma.user.findUnique({
where:{
    email:'kriteshgaikwad11@gmail.com'
}
    });
    console.log(allUsers)
    console.log(userOne)
  }

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })