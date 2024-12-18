import blogHero from "../../assets/images/blog-hero.svg";

const BlogHeroSection = () => {
  return (
    <div>
      <div className="flex justify-around mt-8 ">
        <div className="w-[40%] ms-24 ">
          <h1 className="font-bold text-2xl mt-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, et!
          </h1>
          <h6 className="text-lg mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut rerum
            corrupti expedita eligendi officia porro quas doloribus, tempora
            voluptatibus blanditiis debitis laborum numquam corporis voluptate
            alias vitae sequi. Atque, rerum.
          </h6>
        </div>
        <div className="  w-[35%]">
          <img src={blogHero} alt="" className="h-96" />
        </div>
      </div>
    </div>
  );
};

export default BlogHeroSection;
