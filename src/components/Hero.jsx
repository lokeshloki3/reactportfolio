import profilePic from "../assets/lokeshProfile-removebg-preview.png";
import { HERO_CONTENT } from "../constants";

const Hero = () => {
  // Function to handle the download click
  // const handleDownloadClick = (e) => {
  //     const userConfirmed = window.confirm("Want to download the resume?");
  //     if (!userConfirmed) {
  //         Prevent the download if user cancels
  //         e.preventDefault();
  //     }
  // };

  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <img
              src={profilePic}
              alt="Lokesh"
              className="border border-stone-900 rounded-3xl"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              Lokesh
            </h2>
            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              Frontend Developer
            </span>
            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              {HERO_CONTENT}
            </p>
            <a
              href="https://lokeshloki3.github.io/resume/Lokesh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-4 text-lg text-stone-800 mb-10"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
