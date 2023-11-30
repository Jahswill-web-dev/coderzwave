import newsletter from "../../../public/images/newsletter.png";
import Image from "next/image";
function Newsletter() {
  return (
    <div>
    <div>
      <Image src={newsletter} width={400} height={400} />
      <div>
        <h3 className="text-primary text-2xl mx-auto">
          Get FREE weekly tips on going from beginner to expert
        </h3>
        <form className="flex flex-col gap-5">
          <input type="text" name="name" placeholder="Name" className="text-xl border-solid focus:outline-none border-4 border-b-primary" />
          <input type="email" name="email" placeholder="Email"className="text-xl border-solid focus:outline-none border-4 border-b-primary"/>
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
