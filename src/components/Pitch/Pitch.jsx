import Image from "next/image";
import skilled from "../../../public/images/skilled-image.png";
import fastImage from "../../../public/images/fast-track.png";
import startImage from "../../../public/images/start.png";

function Pitch() {
    return ( 
        <div className="mt-20">
            <div className="flex flex-col gap-3">
                {/* Image */}
                <Image src={skilled} 
                alt="graphics of a skilled team of coders" 
                width={200} 
                height={200}
                className="mx-auto"
                />
                {/* text */}
                <div className="text-center text-xl">
                    <p>Become skilled a developer by building real world projects and increase your learning speed</p>
                </div>
            </div>

            {/* block */}

            <div className="flex flex-col gap-3">
                {/* Image */}
                <Image src={fastImage} 
                alt="graphics of a skilled team of coders" 
                width={200} 
                height={200}
                className="mx-auto"
                />
                {/* text */}
                <div className="text-center text-xl">
                    <p>Become skilled a developer by building real world projects and increase your learning speed</p>
                </div>
            </div>
            
            {/* block */}

            <div className="flex flex-col gap-3">
                {/* Image */}
                <Image src={startImage} 
                alt="graphics of a skilled team of coders" 
                width={200} 
                height={200}
                className="mx-auto"
                />
                {/* text */}
                <div className="text-center text-xl">
                    <p>Become skilled a developer by building real world projects and increase your learning speed</p>
                </div>
            </div>

        </div>
     );
}

export default Pitch;