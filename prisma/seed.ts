import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  await prisma.college.createMany({
    data: [
      {
        name: "IIT Delhi",
        location: "New Delhi",
        fees: 250000,
        rating: 4.8,
        placements: "25 LPA Average Package",
        description:
          "One of India's top engineering institutes.",
        image: "/colleges/iit-delhi.jpg",
      },

      {
        name: "NIT Trichy",
        location: "Tamil Nadu",
        fees: 180000,
        rating: 4.7,
        placements: "18 LPA Average Package",
        description:
          "Excellent placements and academics.",
        image: "/colleges/nit-trichy.jpg",
      },

      {
        name: "VIT Vellore",
        location: "Tamil Nadu",
        fees: 195000,
        rating: 4.5,
        placements: "12 LPA Average Package",
        description:
          "Popular private engineering college.",
        image: "/colleges/vit.jpg",
      },
    ],
  });

  console.log("Seed data inserted");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });