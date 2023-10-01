import Image from "next/image";
import chef1 from "@/public/images/chef1.jpeg";
import chef2 from "@/public/images/chef2.jpeg";
import chef3 from "@/public/images/chef3.jpeg";

export default function Chefs() {
  const cardData = [
    {
      id: 1,
      title: "Noah Dominic",
      description:
        "GRILL CHEF",
      image: chef1,
    },
    {
      id: 2,
      title: "Van Ryder",
      description:
        "GRILL & NUN CHEF",
      image: chef2,
    },
    {
      id: 3,
      title: "August Nicholas",
      description:
        "HEAD CHEF",
      image: chef3,
    },
  ];

  return (
    <div className="m-0 flex flex-col items-center justify-center p-4">
      <div className="mt-[2rem]">
        <h1 className="font-Playfair text-2xl md:text-3xl font-medium leading-normal">Meet Our Chefs</h1>
      </div>
      <div className="mt-[.8rem]">
        <h2 className="leading-normal md:text-2xl tracking-[0.06px] font-medium font-Inter text-orange-500">PROFESSIONAL COOK TEAM</h2>
      </div>
      <div className="hidden sm:flex">&mdash;</div>
      <div className="mt-[1rem]">
        <h3 className="text-sm md:text-xl w-[70%] mx-auto leading-5 font-medium font-Inter">
        Lorem ipsum dolor sit amet consectetur. Sed amet consectetur varius turpis nunc ultricies. 
        </h3>
      </div>
      <div className="md:flex gap-8">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="flex flex-col gap-4  justify-start w-[14rem] lg:w-[18rem] mt-7   text-center md:text-left"
          >
            <div className="relative overflow-hidden w-full h-[12.5rem] md:w-full md:h-[14rem]  lg:w-full lg:h-[20.3rem] ">
              <Image
                src={card.image}
                alt={card.title}
                layout="fill"
                objectFit="cover"
                className="object-center transform transition-transform duration-200"
              />
            </div>

              <h2 className="text-xl text-left md:text-[1.5rem] lg:text-[2rem] font-Playfair leading-normal font-medium text-gray-900">
                {card.title}
              </h2>
              

            <p className="text-sm font-medium text-left leading-normal text-orange-500 md:text-lg lg:text-xl font-Inter tracking-[0.06px]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
