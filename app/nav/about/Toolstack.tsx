import React from "react";
import { SiPostman, SiLinux, SiVim, SiQt, SiCmake } from "react-icons/si";
import { DiGit, DiVisualstudio } from "react-icons/di";

type Tool = {
  icon: React.ReactNode; // Type for the icon component
  name: string;
};

const tools: Tool[] = [
  { icon: <DiGit />, name: "Git" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiLinux />, name: "Linux" },
  { icon: <SiQt />, name: "Qt" },
  { icon: <DiVisualstudio />, name: "Visual Studio " },
  { icon: <SiVim />, name: "Vim" },
  { icon: <SiCmake />, name: "CMake" },
];

const Toolstack: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-6">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center text-gray-700 hover:text-purple-600 transition duration-300"
        >
          <div className="text-4xl mb-2">{tool.icon}</div>
          <p className="text-sm font-medium">{tool.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Toolstack;
