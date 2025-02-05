'use client';

import Image from 'next/image';
import { GithubIcon, Globe } from 'lucide-react';

interface ProjectCardProps {
  imgPath: string;
  title: string;
  description: string;
  ghLink: string;
  demoLink?: string;
  isBlog?: boolean;
}

const ProjectCard = ({
  imgPath,
  title,
  description,
  ghLink,
  demoLink,
  isBlog = false
}: ProjectCardProps) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
      {/* Image Container */}
      <div className="relative h-48 w-full">
        <Image
          src={imgPath}
          alt={`${title} preview`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="mb-3 text-xl font-semibold text-gray-800">
          {title}
        </h3>
        
        <p className="mb-6 text-justify text-gray-600">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            <GithubIcon className="h-4 w-4" />
            {isBlog ? "Blog" : "GitHub"}
          </a>

          {!isBlog && demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              <Globe className="h-4 w-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;