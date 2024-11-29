import { Project } from "@/src/types/project";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

export default async function Dashboard() {
  const prisma = new PrismaClient();
  const projects = await prisma.project.findMany();

  return (
    <div>
      <h1>My Projects</h1>
      {projects.map((project: Project) => (
        <Link href={`/project/${project.id}`} key={project.id}>
          {project.name}
        </Link>
      ))}
    </div>
  );
}
