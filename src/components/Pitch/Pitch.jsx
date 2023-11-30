import Image from "next/image";
import skilled from "../../../public/images/skilled-image.png";
import fastImage from "../../../public/images/fast-track.png";
import startImage from "../../../public/images/start.png";
import Link from "next/link";

function Pitch() {
  return (
    <div className="mt-20 grid gap-20">
      <div className="flex flex-col gap-3">
        {/* Image */}
        <Image
          src={skilled}
          alt="graphics of a skilled team of coders"
          width={200}
          height={200}
          className="mx-auto"
        />
        {/* text */}
        <div className="text-center text-xl">
          <p>
            Become skilled a developer by building real world projects and
            increase your learning speed
          </p>
        </div>
      </div>

      {/* block */}

      <div className="flex flex-col gap-3 ">
        {/* Image */}
        <Image
          src={fastImage}
          alt="graphics of a skilled team of coders"
          width={200}
          height={200}
          className="mx-auto"
        />
        {/* text */}
        <div className="text-center text-xl">
          <p>Fast track your learning with personalized coaching program</p>
        </div>
      </div>

      {/* block */}

      <div className="flex flex-col gap-3 items-center">
        {/* Image */}
        <Image
          src={startImage}
          alt="graphics of a skilled team of coders"
          width={200}
          height={200}
          className="mx-auto"
        />
        {/* text */}
        <div className="text-center text-xl">
          <p>
            Start your journey to going from beginner to advanced by joining our
            coaching program
          </p>
        </div>
        <Link className="text-2xl bg-secondary text-primary rounded border-2 border-primary px-3 py-2" href="#">Start Now</Link>
      </div>
    </div>
  );
}

export default Pitch;
