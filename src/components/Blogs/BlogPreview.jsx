import Image from "next/image";
import blogImage from "../../../public/images/blog-image.png";
import styles from "./Blog.module.css";
function BlogPreview() {
  return (
    <div className="mt-10">
      <h2 className="text-primary text-3xl text-center pb-5">
        Recent blog posts(coming soon)
      </h2>
      {/* Cards */}
      <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2 md:grid-cols-3 md:p-10">
        {/* card */}
        <div
          className={` bg-white shadow-lg text-primary px-2 py-4 ${styles.customCardGrid}`}
        >
          <Image src={blogImage} className="place-self-center w-full" />
          <h2 className="text-2xl">Blog post title</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            eleifend dolor vitae nisi suscipit efficitur in at tortor. In dictum
            eu lectus quis fringilla. Nunc tempus lacus sed lorem
          </p>
        </div>
        {/* card */}
        <div
          className={`bg-white shadow-lg text-primary px-2 py-4 ${styles.customCardGrid}`}
        >
          <Image src={blogImage} className="place-self-center w-full" />
          <h2 className="text-2xl">Blog post title</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            eleifend dolor vitae nisi suscipit efficitur in at tortor. In dictum
            eu lectus quis fringilla. Nunc tempus lacus sed lorem
          </p>
        </div>
        {/* card */}
        <div
          className={` bg-white shadow-lg text-primary px-2 py-4 ${styles.customCardGrid}`}
        >
          <Image src={blogImage} className="place-self-center w-full" />
          <h2 className="text-2xl">Blog post title</h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            eleifend dolor vitae nisi suscipit efficitur in at tortor. In dictum
            eu lectus quis fringilla. Nunc tempus lacus sed lorem
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogPreview;
