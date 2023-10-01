import ing1 from "@/public/images/ing1.jpeg";
import ing2 from "@/public/images/ing2.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Ingredients() {
  return (
    <div className=" flex flex-col sm:flex-row sm:p-[2rem]  gap-12 items-center justify-center py-[5rem] md:py-[11rem] bg-[#f1f1f1e6]">
      <div className="flex flex-col gap-7 p-6 items-start sm:w-[40%]">
        <h1 className="font-Playfair leading-normal font-medium text-2xl sm:text-[1.8rem] md:text-[2rem] lg:text-[2.5rem] text-gray-900">
        Good Food Is Our Passion
        </h1>
        <h2 className="font-Inter text-base  md:text-[1.1rem] text-orange-500 leading-[0.06px] font-medium">
        INGREDIENTS &mdash;
        </h2>
        <p className="w-[90%]  font-Roboto text-sm sm:text-xs md:text-sm leading-normal font-medium text-gray-800">
        Lorem ipsum dolor sit amet consectetur. Vulputate morbi etiam fringilla interdum integer. Convallis viverra sed erat quis felis ac. At velit a at fames convallis elementum pharetra volutpat eget. Dolor enim est pharetra arcu non viverra ipsum aliquet nulla. Eu.
        </p>

        <div className="flex items-center justify-center">
          <Link
            href="/"
            className="mt-[3rem] flex justify-start items-start bg-transparent border hover:border-none text-gray-900 border-gray-900  hover:bg-orange-500 hover:text-white px-[30px] py-[10px]"
          >
            <h3 className=" font-Inter text-sm font-medium leading-normal">
              READ MORE
            </h3>
          </Link>
        </div>
      </div>

      <div className="relative w-[13rem] h-[14rem] md:w-[27.5rem] md:h-[28.3rem]">
        <div className="absolute right-0 bottom-0">
          <div className="relative w-[9rem] h-[10rem] md:w-[18.5rem] md:h-[20rem]">
            <Image
              src={ing2}
              alt="coke and hamburger"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>
        <div className="absolute top-0 left-0">
          <div className="relative w-[8rem] h-[12rem] md:w-[16.5rem] md:h-[24.5rem]">
            <Image
              src={ing1}
              alt="coke and hamburger"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
