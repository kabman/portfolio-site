import React from 'react';
import Image from 'next/image';
import { Github, Twitter, Linkedin} from 'lucide-react';
import Navbar from './ui/navbar';
import avatar from '@/public/myavatar.jpeg'
import Link from 'next/link';

const Home = () => {
  return (
    <main className="min-h-screen bg-[#faf6f1]">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* About Section */}
          <div className="md:col-span-8 space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">
              LET ME <span className="text-purple-600">INTRODUCE</span> MYSELF
            </h1>
            
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                I&apos;m a software engineer based in Abuja, Nigeria with a focus on backend development
              </p>
              
              <p>
                I am fluent in classics like{' '}
                <span className="text-purple-600 font-semibold">
                  C++, Javascript and Go.
                </span>
              </p>
              
              <p>
                I&apos;m an avid self-learner and my field of Interest&apos;s are in building new{' '}
                <span className="text-purple-600 font-semibold">
                  Web Technologies and Products
                </span>{' '}
                and also in areas related to backend devopment such as: {' '}
                <span className="text-purple-600 font-semibold">Data Engineering</span>,{' '}
                <span className="text-purple-600 font-semibold">Databases</span>,{' '}
                <span className="text-purple-600 font-semibold">Low level programming</span>.
              </p>
              
              <p>
                While i focus more on backend development, I am also skilled at frontend development which i use to build beautiful interfaces using{' '}
                <span className="text-purple-600 font-semibold">
                  Modern Javascript Library and Frameworks
                </span>{' '}
                like{' '}
                <span className="text-purple-600 font-semibold">
                  React.js and Next.js
                </span>
              </p>
            </div>
          </div>

          {/* Avatar Section */}
          <div className="md:col-span-4">
            <div className="relative w-full aspect-square transform transition-transform hover:scale-105">
              <Image
                src={avatar}
                alt="avatar"
                fill
                className="object-contain rounded-full border-4 border-purple-600"
                priority
              />
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="mt-16 text-center text-gray-800">
          <h2 className="text-3xl font-bold mb-4">FIND ME ON</h2>
          <br/>
          <div className="flex justify-center gap-6">
            <SocialLink href="https://github.com/kabman" icon={<Github size={24} />} />
            <SocialLink href="https://twitter.com/kb_lmn" icon={<Twitter size={24} />} />
            <SocialLink href="https://www.linkedin.com/in/kabirlamin/" icon={<Linkedin size={24} />} />
          </div>
          <br/>
          <p className="mb-6">
            Feel free to <Link href="/nav/contact" className="text-purple-600 hover:underline">connect</Link> with me
          </p>
        </div>
      </div>
    </main>
  );
};

const SocialLink = ({ href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="p-3 rounded-full bg-white text-purple-600 hover:bg-purple-600 hover:text-white transition-colors shadow-md"
    >
      {icon}
    </a>
  );
};

export default Home;