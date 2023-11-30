import Image from "next/image";
import Nav from "@/components/Nav/Nav.jsx";
import Head from "next/head";
import Hero from "@/components/Hero/Hero.jsx";
import Pitch from "@/components/Pitch/Pitch";
import Programs from "@/components/Programs/Programs";
import BlogPreview from "@/components/Blogs/BlogPreview";
import Newsletter from "@/components/Newsletter/Newsletter";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coderzwave:The fastes way to learn to code</title>
        <link rel="icon" href="icon.svg" sizes="180x180" type="image/svg+xml" />
      </Head>

      <Nav />
      <div className="w-[90%] mx-auto lg:max-w-6xl">
        <Hero />
        <Pitch/>
        <Programs/>
        <BlogPreview/>
        <Newsletter/>
      </div>
    </div>
  );
}
