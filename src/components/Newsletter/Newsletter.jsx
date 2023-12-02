import newsletter from "../../../public/images/newsletter.png";
import Image from "next/image";
function Newsletter() {
  return (
    <div id="newsletter" className="pt-20">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center items-center">
      <Image src={newsletter} width={400} height={400} className="sm:w-1/2  sm:p-10"/>
      <div className="sm:w-1/2">
        <h3 className="text-primary text-2xl mx-auto sm:mx-0 mb-3 sm:w-[70%] text-center sm:text-left">
          Get FREE weekly tips on going from beginner to expert
        </h3>
        <form className="flex flex-col gap-5 items-center sm:items-start">
          <input type="text" name="name" placeholder="Name" className="w-[20rem] text-xl border-solid focus:outline-none border-4 border-b-primary" />
          <input type="email" name="email" placeholder="Email"className="w-[20rem] text-xl border-solid focus:outline-none border-4 border-b-primary"/>
          <button type="submit" className="bg-primary text-xl text-white px-4 rounded w-auto py-2 ">Get Free Tips</button>
        </form>
      </div>
      
    </div>
    <footer className="p-10">
        <p className="text-center text-primary text-xl">©2023 coderzwave</p>
    </footer>
    </div>
  );
}

export default Newsletter;
