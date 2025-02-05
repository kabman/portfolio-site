import React from "react";
import {
  DiReact,
  DiNodejs,
  DiGo,
  DiPython
} from "react-icons/di";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

export default function Techstack() {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      <div className="flex flex-col items-center group">
        <SiTypescript className="text-5xl text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
        <span className="mt-2">TypeScript</span>
      </div>
      <div className="flex flex-col items-center group">
        <DiNodejs className="text-5xl text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
        <span className="mt-2">Node.js</span>
      </div>
      <div className="flex flex-col items-center group">
        <DiReact className="text-5xl text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
        <span className="mt-2">React</span>
      </div>
      <div className="flex flex-col items-center group">
        <SiNextdotjs className="text-5xl text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
        <span className="mt-2">Next.js</span>
      </div>
      <div className="flex flex-col items-center group">
        <DiGo className="text-5xl text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
        <span className="mt-2">Golang</span>
      </div>
      <div className="flex flex-col items-center group">
        <DiPython className="text-5xl text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
        <span className="mt-2">Python</span>
      </div>
    </div>
  );
}
