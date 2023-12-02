import Image from "next/image";
import skilled from "../../../public/images/skilled-image.png";
import fastImage from "../../../public/images/fast-track.png";
import startImage from "../../../public/images/start.png";
import Link from "next/link";

function Pitch() {
  return (
    <div className="mt-20 flex flex-col gap-10 sm:gap-4 sm:grid sm:grid-cols-6 sm:grid-rows-2 sm:place-items-baseline sm:content-center">

      <div className="flex flex-col gap-3 sm:col-start-1 sm:col-end-4 items-center">
        {/* Image */}
        <Image
          src={skilled}
          alt="graphics of a skilled team of coders"
          width={200}
          height={200}
          className="mx-auto"
        />
        {/* text */}
        <div className="text-center text-lg w-[65%] lg:w-[50%] font-semibold">
          <p>
            Become skilled a developer by building real world projects and
            increase your learning speed
          </p>
        </div>
      </div>

      {/* block */}

      <div className="flex flex-col gap-3 col-start-4 col-end-7 sm:mt-4 items-center">
        {/* Image */}
        <Image
          src={fastImage}
          alt="graphics of a skilled team of coders"
          width={200}
          height={200}
          className="mx-auto"
        />
        {/* text */}
        <div className="text-center text-lg w-[65%] lg:w-[50%] font-semibold">
          <p>Fast track your learning with personalized coaching program</p>
        </div>
      </div>

      {/* block */}

      <div id="start" className="flex flex-col gap-3 items-center col-start-2 col-end-6">
        {/* Image */}
        <Image
          src={startImage}
          alt="graphics of a skilled team of coders"
          width={200}
          height={200}
          className="mx-auto"
        />
        {/* text */}
        <div className="text-center text-lg w-[65%] lg:w-[50%] font-semibold">
          <p>
            Start your journey to going from beginner to advanced by joining our
            coaching program
          </p>
        </div>
        <Link className="text-2xl bg-secondary text-primary rounded border-2 border-primary px-3 py-2" href="#programs">Start Now</Link>
      </div>
    </div>
  );
}

export default Pitch;
