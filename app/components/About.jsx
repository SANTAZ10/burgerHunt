import ham1 from "@/public/images/ham1.jpg";
import ham2 from "@/public/images/ham2.jpg";
import ham3 from "@/public/images/ham3.jpg";
import aboutHam1 from "@/public/images/aboutHam1.jpg";
import aboutHam2 from "@/public/images/aboutHam2.jpg";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const cardData = [
    {
      id: 1,
      title: "Chili Beef Burger",
      description:
        "Spiced up with original quality pepper  to give the best feeling of a meaty burger ",
      image: ham1,
    },
    {
      id: 2,
      title: "Mushroom Swiss Burger",
      description:
        "A burger topped with sautéed mushrooms and melted Swiss cheese.",
      image: ham2,
    },
    {
      id: 3,
      title: "Turkey Burger",
      description:
        "A burger made from ground turkey meat, usually served as a healthier alternative to beef burgers.",
      image: ham3,
    },
  ];
  return (
    <div className="m-0">
      <div className=" w-full flex flex-col items-center justify-center my-24 pb-12">
        <div className="flex flex-col items-center justify-center gap-[0.7rem] md:12 md:mb-16">
          <h1 className="font-Playfair leading-normal text-2xl md:text-[2.5rem] font-medium">
            The Perfect Offer For You
          </h1>
          <h3 className="font-Inter text-base tracking-[0.06px] md:text-[24px] leading-normal font-medium text-orange-500">
            FROM OUR MASTER CHEF
          </h3>
        </div>
        <div className="md:flex gap-6 lg:gap-8 ">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="flex flex-col gap-4 items-center w-[14rem] mt-7  lg:w-[20.3rem]  text-center"
            >
              <div className="relative rounded-full overflow-hidden w-[12.5rem] h-[12.5rem] md:w-[14rem] md:h-[14rem]  lg:w-[20.3rem] lg:h-[20.3rem] ">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="object-center hover:scale-110 transform transition-transform duration-200"
                />
              </div>

              <h2 className="text-xl md:text-[2rem] font-Playfair leading-normal font-medium text-gray-900">
                {card.title}
              </h2>
              <p className="text-sm font-medium leading-normal md:text-[1rem] font-Roboto text-gray-700">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className=" flex flex-col gap-12 items-center justify-center">
        <div className="">
          <h1>Our Awesome Restaurant</h1>
          <h2>DISCOVER OUR STORY &mdash;</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Vulputate morbi etiam
            fringilla interdum integer. Convallis viverra sed erat quis felis
            ac. At velit a at fames convallis elementum pharetra volutpat eget.
            Dolor enim est pharetra arcu non viverra ipsum aliquet nulla. Eu.
          </p>

          <div className="flex items-center justify-center">
            <Link
              href="/"
              className="mt-[65px] flex justify-start items-start bg-transparent border border-gray-900  hover:border-white hover:text-orange-500 px-[30px] py-[10px]"
            >
              <h3 className="text-gray-900">READ MORE</h3>
            </Link>
          </div>
        </div>

        <div className="relative w-[13rem] h-[14rem] md:w-[27.5rem] md:h-[28.3rem]">
          <div className="absolute left-[20px] top-0 bg-[#E5E3E3] w-[7.5rem] h-[10rem] md:w-[15.3rem] md:h-[20.9rem]"></div>

          <div className="absolute left-0 bottom-0">
            <div className="relative w-[8rem] h-[6rem] md:w-[16.5rem] md:h-[12.5rem]">
              <Image
                src={aboutHam1}
                alt="coke and hamburger"
                objectFit="cover"
                layout="fill"
              />
            </div>
          </div>
          <div className="absolute top-[50%] right-0 -translate-y-[50%]">
            <div className="relative w-[8rem] h-[10rem] md:w-[16.5rem] md:h-[20.5rem]">
              <Image
                src={aboutHam2}
                alt="coke and hamburger"
                objectFit="cover"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
