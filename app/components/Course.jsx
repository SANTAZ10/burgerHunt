import Image from "next/image";
import ham1 from "@/public/images/ham1.jpg";
import ham2 from "@/public/images/ham2.jpg";
import ham3 from "@/public/images/ham3.jpg";

export default function Course() {
  const cardData = [
    {
      id: 1,
      title: "Hot Burger",
      description:
        "Three Italian Favorite : fried onions, garnished beef, armond bread and cheese.Spiced up with original quality pepper  to give the best feeling of a meaty burger ",
      image: ham1,
    },
    {
      id: 2,
      title: "Roast Burger",
      description:
        "Three African Favorite : fried onions, garnished beef, armond bread and cheese.A burger topped with sautéed mushrooms and melted Swiss cheese.",
      image: ham2,
    },
    {
      id: 3,
      title: "Spicy Burger",
      description:
        "Three French Favorite : fried onions, garnished beef, armond bread and cheese.A burger made from ground turkey meat, usually served as a healthier alternative to beef burgers.",
      image: ham3,
    },
  ];

  return (
    <div className="m-0 flex flex-col items-center justify-center p-4">
      <div className="mt-[2rem]">
        <h1 className="font-Playfair text-2xl md:text-3xl font-medium leading-normal">Popular main course</h1>
      </div>
      <div className="mt-[.8rem]">
        <h2 className="leading-normal md:text-2xl tracking-[0.06px] font-medium font-Inter text-orange-500">CHEF SELECTION</h2>
      </div>
      <div className="hidden sm:flex">&mdash;</div>
      <div className="mt-[1rem]">
        <h3 className="text-sm md:text-xl w-[70%] mx-auto leading-5 font-medium font-Inter">
          Lorem ipsum dolor sit amet consectetur. Sed amet consectetur varius
          turpis nunc ultricies.
        </h3>
      </div>
      <div className="md:flex gap-8">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="flex flex-col gap-4 items-center w-[14rem] mt-7  lg:w-[18.3rem]  text-center"
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
            <div className="md:flex items-center justify-between w-full">
              <h2 className="text-xl md:text-[1.5rem] lg:text-[2rem] font-Playfair leading-normal font-medium text-gray-900">
                {card.title}
              </h2>
              <h2 className="font-Crimson md:text-xl font-semibold leading-normal text-orange-500">$20.00</h2>
            </div>
            <p className="text-sm font-medium leading-normal md:text-[1rem] font-Roboto text-gray-700 text-justify">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
