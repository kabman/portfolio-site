import React from "react";
import { ImPointRight } from "react-icons/im";

export default function AboutCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="text-gray-800">
        <blockquote className="mb-4">
          <p className="text-justify mb-6">
            Hi Everyone, I am <span className="font-bold">Kabiru Ibrahim Lamin</span> from <span className="text-purple-600">Abuja, Nigeria</span>.
            <br />
            I am currently looking for full-time employment as a software developer.
            <br />
            I recently completed an MSc in Computer Science at Nile University of Nigeria.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className="flex items-center">
              <ImPointRight className="text-purple-600 mr-2" /> Electronics Hobbyist
            </li>
            <li className="flex items-center">
              <ImPointRight className="text-purple-600 mr-2" /> Playing fps games
            </li>
            <li className="flex items-center">
              <ImPointRight className="text-purple-600 mr-2" /> Competitive programming
            </li>
          </ul>

          <p className="text-purple-600 font-medium mt-6">
            &ldquo;Strive to get 1% better every day!&rdquo;
          </p>
          <footer className="text-right text-gray-600 mt-2">- Kabir</footer>
        </blockquote>
      </div>
    </div>
  );
}

