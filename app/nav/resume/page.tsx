'use client'

import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';

const ResumeNew: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#faf6f1] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <a
              href="/kb_s_evolving_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-6 py-2 rounded-lg flex items-center justify-center hover:bg-purple-700 transition"
            >
              <AiOutlineDownload className="mr-2" /> Download CV
            </a>
          </div>

          <div className="w-full h-[800px] bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="/kabir_lamin_resume.pdf"
              className="w-full h-full"
              title="Resume PDF"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeNew;