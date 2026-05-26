import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  context: {
    params: Promise<{
      id: string;
    }>;
  }
) {

  const params = await context.params;

  const college =
    await prisma.college.findUnique({
      where: {
        id: params.id,
      },
    });

  if (!college) {
    return Response.json(
      { error: "College not found" },
      { status: 404 }
    );
  }

  return Response.json(college);
}