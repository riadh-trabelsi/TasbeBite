// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import { recipes, users } from './data';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {

await prisma.user.createMany({
    data : users
})
 await prisma.recipes.createMany({
    data : recipes
 })
  
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
