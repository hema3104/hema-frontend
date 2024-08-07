import { GoSignOut } from 'react-icons/go';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-dark-blue min-h-screen text-white">
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center">
          <span className="text-2xl font-bold">LO</span>
          <span className="bg-blue-500 text-white px-2 ml-1 text-2xl font-bold">GO</span>
        </div>
        <div className="flex items-center text-blue-500 cursor-pointer">
          <GoSignOut size={20} />
          <span className="ml-2">Sign Out</span>
        </div>
      </header>
      <hr className="border-gray-500" />
      <div className="flex justify-end items-center py-2 px-6">
        <div className="flex space-x-2">
          <div className="border border-white p-2 rounded">
            <FaArrowLeft size={20} className="cursor-pointer" />
          </div>
          <div className="border border-white p-2 rounded">
            <FaArrowRight size={20} className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="mt-8">
          <h2 className="text-3xl font-semibold flex items-center">
            Popular Topics
            <span className="text-red-500 ml-2 text-2xl">🔥</span>
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-4 mt-4 space-y-4 md:space-y-0">
            <div className="bg-dark-blue p-4 rounded-lg flex flex-col border border-white w-full h-auto md:w-[400px] md:h-[400px]">
              <img src="/rocket.png" alt="Rocket" className="w-20 h-20 mx-auto md:mx-0 mb-4 md:mb-0" />
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-2xl font-semibold text-center md:text-left">Introduction to Rocket Science</h3>
                <p className="mt-1 mb-2 text-center md:text-left">Learn the basics of rocket science and explore the fundamentals of space exploration.</p>
              </div>
              <button className="mt-auto py-2 px-4 text-white border border-white rounded hover:text-dark-blue">
                Read
              </button>
            </div>
            <div className="bg-dark-blue p-4 rounded-lg flex flex-col border border-white w-full h-auto md:w-[400px] md:h-[400px]">
              <img src="/atom.png" alt="Atom" className="w-20 h-20 mx-auto md:mx-0 mb-4 md:mb-0" />
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-2xl font-semibold text-center md:text-left">Astro Physics</h3>
                <p className="mt-1 mb-2 text-center md:text-left">Covers fundamentals, design, construction, and programming of robots.</p>
              </div>
              <button className="mt-auto py-2 px-4 text-white border border-white rounded hover:text-dark-blue">
                Read
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
