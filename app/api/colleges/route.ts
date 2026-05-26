import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {

  const { searchParams } = new URL(req.url);

  const search =
    searchParams.get("search") || "";

  const colleges =
    await prisma.college.findMany({
      where: {
        OR: [
          {
            name: {
              contains: search,
              mode: "insensitive",
            },
          },

          {
            location: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      },
    });

  return Response.json(colleges);
}