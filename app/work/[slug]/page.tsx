import { notFound } from 'next/navigation';
import { projects } from '@/lib/data';
import ProjectPageClient from './project-page-client';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export const dynamicParams = false;

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectPageClient project={project} />;
}
