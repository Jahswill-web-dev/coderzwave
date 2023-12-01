import Image from "next/image";
import heroImage from "../../../public/images/hero-image.png";
import logo from "../../../public/images/logo2.svg";
import secondImage from "../../../public/images/second-image.png";

const Hero = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* section 1 */}
      <div className="relative">
        {/* text and image */}
        <div className="flex flex-col sm:flex-row sm:gap-10 sm:items-center sm:justify-between">
          <Image
            src={heroImage}
            alt="python codes saying Learn to code fast image"
            width={700}
            height={700}
            className="sm:w-2/5 mx-auto"
          />
          <div className="flex flex-col gap-1 sm:w-1/2">
            <h1 className="text-primary text-[32px] font-semibold md:text-4xl lg:text-4xl">
              Learn to code the fastest way possible
            </h1>
            <p className="text-third text-xl md:text-2xl font-semibold">
              with our coaching program you will get access to personalized
              coaching, project-based learning and community support
            </p>
          </div>
        </div>
        {/* background images */}
        <Image
          src={logo}
          alt="coderz wave logo in the background"
          width={400}
          height={500}
          className="absolute top-80 z-[-10] opacity-60 sm:top-10 right-0"
        />
      </div>
      {/* section 1 ending */}
      {/* section 2 */}
      <div className="relative overflow-clip">
        <div className="mt-9 flex flex-col sm:flex-row gap-4 sm:items-center md:px-5 sm:justify-between">
          {/* text */}
          <div className="flex flex-col gap-2 pb-5 sm:w-1/2">
            <p className=" text-fourth text-2xl sm:text-3xl font-medium">
              Are you a beginner?
            </p>
            <h1 className="text-primary text-[32px] font-semibold sm:text-4xl">
              Go from beginner to advanced
            </h1>
            <p className="text-third text-2xl font-semibold sm:text-3xl">
              Go from beginner to advanced in months with our coaching programms
            </p>
          </div>
          {/* Image */}
          <Image
            src={secondImage}
            alt="picture of a person coding with three desktops"
            width={500}
            height={500}
            className="sm:w-[40%]"
          />
        </div>
        <Image
          src={logo}
          alt="coderz wave logo in the background"
          width={400}
          height={500}
          className="absolute top-20 left-36 z-[-10] opacity-60 sm:-left-[7rem]"
        />
      </div>
    </div>
  );
};

export default Hero;
