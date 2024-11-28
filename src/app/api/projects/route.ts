import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const projects = await prisma.project.findMany();
  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  const data = await request.json();
  const project = await prisma.project.create({ data });
  return NextResponse.json(project, { status: 201 });
}
