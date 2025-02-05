import Link from 'next/link';
import { InitialsBox } from '@/app/ui/initialsbox';
import { User, FolderGit, FileText, Mail } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { name: 'About', href: '/nav/about', icon: <User size={20} /> },
    { name: 'Projects', href: '/nav/projects', icon: <FolderGit size={20} /> },
    { name: 'Resume', href: '/nav/resume', icon: <FileText size={20} /> },
    { name: 'Hire Me', href: '/nav/contact', icon: <Mail size={20} /> }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#faf6f1] shadow-md z-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          <div className="ml-4">
            <InitialsBox />
          </div>
          <div className="flex space-x-12 mr-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  text-gray-700 
                  hover:text-purple-600 
                  font-medium
                  transition-colors 
                  duration-300 
                  no-underline
                  flex
                  items-center
                  gap-2
                "
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;