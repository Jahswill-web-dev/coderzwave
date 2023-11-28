import Image from "next/image";
import heroImage from "../../../public/images/hero-image.png";
import logo from "../../../public/images/logo2.svg";
import secondImage from "../../../public/images/second-image.png";
const Hero = () => {
  return (
    <div>
      {/* section 1 */}
      <div className="relative">
        {/* text and image */}
        <div className="flex flex-col sm:flex-row sm:gap-3">
          <Image
            src={heroImage}
            alt="python codes saying Learn to code fast image"
            width={500}
            height={500}
            className=""
          />
          <div className="flex flex-col gap-1">
            <h1 className="text-primary text-[32px] font-bold">
              Learn to code the fastest way possible
            </h1>
            <p className="text-third text-xl font-semibold">
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
          className="absolute top-80 z-[-10] opacity-60"
        />
      </div>
      {/* section 1 ending */}
      {/* section 2 */}
      <div className="relative overflow-clip">
        <div className="mt-9 flex flex-col">
          {/* text */}
          <div className="flex flex-col gap-2 pb-5">
            <p className=" text-fourth text-2xl font-medium">
              Are you a beginner?
            </p>
            <h1 className="text-primary text-[32px] font-semibold">
              Go from beginner to advanced{" "}
            </h1>
            <p className="text-third text-xl font-semibold">
              Go from beginner to advanced in months with our coaching programms
            </p>
          </div>
          {/* Image */}
          <Image
            src={secondImage}
            alt="picture of a person coding with three desktops"
            width={500}
            height={500}
            className=""
          />
        </div>
        <Image
          src={logo}
          alt="coderz wave logo in the background"
          width={400}
          height={500}
          className="absolute top-20 left-36 z-[-10] opacity-60"
        />
      </div>
    </div>
  );
};

export default Hero;
