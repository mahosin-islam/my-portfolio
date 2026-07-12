import Link from "next/link";
import { HiDownload } from "react-icons/hi";

const Hero = () => {
  return (
    <section className=" min-h-[calc(100vh-60px)] flex flex-col md:flex-row items-center justify-center pt-10 md:pt-0 px-2 gap-10">
      <div className="md:w-3/5 text-center md:text-left space-y-6">
        <h2 className="text-blue-400 font-mono tracking-widest uppercase text-sm">
          // Full Stack Developer
        </h2>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Scalable</span> <br />
          Web Solutions
        </h1>
        <p className="text-gray-400 text-lg max-w-xl">
          I build exceptional digital experiences that are fast, accessible, and visually stunning. Let's transform
          your ideas into reality
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Link href="#contact">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full font-bold hover:scale-105 transition flex items-center gap-2 text-white">
            Hire Me
          </button></Link>

<a 
    href="/Full Stack Developer.pdf" 
    download="YourName_Resume.pdf"
    className="no-underline"
  >
    <button className="border border-gray-700 px-8 py-3 rounded-full font-bold hover:bg-gray-400 transition flex items-center gap-2 text-foreground dark:text-white">
      <HiDownload size={20} /> Resume
    </button>
  </a>
        </div>
      </div>

      {/* Profile Image with Glow */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-gray-800">
          <img src="https://i.ibb.co.com/VYWsqrpS/beast.png" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};
export default Hero