'use client';
import React from 'react';
import ProjectCard from "./ProjectCard";

// Import images
// Note: In Next.js, we need to import images as static imports for Image component
import chatify from "@/public/chatify.png";
import bitsOfCode from "@/public/blog.png";
import editor from "@/public/codeEditor.png";
import leaf from "@/public/leaf.png";
import suicide from "@/public/suicide.png";
import emotion from "@/public/emotion.png";

export default function Projects() {
  return (
    <main className="min-h-screen bg-[#faf6f1] px-4 py-16">
      
      <div className="container mx-auto max-w-7xl">
        <h1 className="mb-4 text-center text-4xl font-bold text-gray-800">
          My Recent <span className="text-purple-600">Works</span>
        </h1>
        
        <p className="mb-12 text-center text-gray-600">
          Here are a few projects I've worked on recently.
        </p>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="transition-transform duration-300 hover:scale-105">
            <ProjectCard
              imgPath={chatify.src}
              isBlog={false}
              title="YarnIt"
              description="a full-stack Reddit clone with integrated voice input functionality, using TypeScript, React, and Node.js"
              ghLink="https://github.com/kabman/YarnIt"
              demoLink="https://github.com/kabman/YarnIt"
            />
          </div>

          <div className="transition-transform duration-300 hover:scale-105">
            <ProjectCard
              imgPath={bitsOfCode.src}
              isBlog={false}
              title="Momentos"
              description="a photo storage application using C++ at the backend and Next.js at the frontend, enabling users to securely store and manage pictures in one place"
              ghLink="https://github.com/kabman/Momentos"
              demoLink="https://github.com/kabman/Momentos"
            />
          </div>

          <div className="transition-transform duration-300 hover:scale-105">
            <ProjectCard
              imgPath={editor.src}
              isBlog={false}
              title="Read Mapper"
              description="Masters degree thesis project,which involved accelerating a critical step in genome analysis"
              ghLink="https://github.com/kabman/thesis-read-mapper"
              demoLink="https://github.com/kabman/thesis-read-mapper"
            />
          </div>

          <div className="transition-transform duration-300 hover:scale-105">
            <ProjectCard
              imgPath={leaf.src}
              isBlog={false}
              title="Web Crawler"
              description= "Implemented a web crawler with simple coroutines in Python using generator functions"
              ghLink="https://github.com/kabman/asynchronousWebCrawler"
              demoLink="https://github.com/kabman/asynchronousWebCrawler"
            />
          </div>

          
        </div>
      </div>
    </main>
  );
}