import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

export default function Page() {
  return (
    <div className="bg-[#faf6f1] min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              LEARN ABOUT <span className="text-purple-600">ME</span>
            </h1>
            <Aboutcard />
          </div>
          <div className="w-full md:w-1/3 mt-10">
            {/* Add an image or any content in this section */}
          </div>
        </div>
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Professional <span className="text-purple-600">Skillset</span>
          </h1>
          <Techstack />
        </div>
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
            <span className="text-purple-600">Tools</span> I Use
          </h1>
          <Toolstack />
        </div>
      </div>
    </div>
  );
}
