import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <section className="w-full">
        <Image
          src="/bg-portfolio-town.jpg"
          layout="responsive"
          width={100}
          height={18}
          objectFit="cover"
          objectPosition="50% 50%"
        />
        <div className="w-full flex items-end justify-around -mt-10 sm:flex-col sm:items-center">
          <div className="flex items-end md:min-w-[300px]">
            <div className="min-w-[120px] border-white rounded-full border-4 md:min-w-[150px] z-[2]">
              <Image
                src="/me.jpg"
                width={10}
                height={10}
                layout="responsive"
                className="rounded-full "
                objectFit="cover"
              />
            </div>
            <h2 className="font-bold font-sans pl-4 pb-7 text-2xl ">
              Makar Lutskyi
            </h2>
          </div>
          <div className="sm:mt-5 flex justify-around w-1/6 min-w-[250px]">
            <div className="btn p-1 duration-200 min-w-[130px] mb-8 rounded-lg border-gray-300 border-2 hover:border-black cursor-pointer">
              <div className="flex items-center justify-evenly">
                <Image
                  className="btn-icon"
                  src="/message-icon.svg"
                  width={27}
                  height={27}
                />
                <button className="font-medium font-sans">Message</button>
              </div>
            </div>
            <div className="btn p-1 min-w-[100px] mb-8 rounded-lg border-gray-300 border-2 hover:border-black cursor-pointer">
              <div className="flex items-center justify-evenly">
                <Image
                  className="btn-icon"
                  src="/blog-icon.svg"
                  width={27}
                  height={27}
                />
                <button className="font-medium font-sans">Blog</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
