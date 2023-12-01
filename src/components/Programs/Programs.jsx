import Image from "next/image";
import pythonImage from "../../../public/images/python.png";
import webdev from "../../../public/images/webdev.png";

function Programs() {
  return (
    <div className="mt-20">
      <div className="flex flex-col gap-2 items-center">
        <h3 className="text-center text-2xl font-semibold text-primary">
          Our Coaching Programs
        </h3>
        <div className="w-36 mx-auto h-2 rounded bg-secondary"></div>
        <p className="text-center text-xl text-primary">Choose your path </p>
      </div>
      {/* Programms */}
      <div className="grid gap-10 sm:gap-4 sm:grid  md:grid-cols-2  lg:px-20  md:place-items-start lg:place-items-center sm:place-content-center">
        {/* Python */}
        <div className="flex flex-col gap-2 items-center ">
            <Image  src={pythonImage} width={400} height={400} alt="python for beginners graphics design"/>
            <h3 className="text-2xl text-fourth underline">Python for beginners</h3>
        </div>
        {/* web dev */}
        <div className="flex flex-col gap-2 mt-10 items-center sm:mt-0">
            <Image  src={webdev} width={400} height={400} alt="web development for beginners graphics design"/>
            <h3 className="text-2xl text-primary underline">Web development for beginners </h3>
        </div>

      </div>
    </div>
  );
}

export default Programs;
