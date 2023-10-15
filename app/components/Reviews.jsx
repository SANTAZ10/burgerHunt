import Image from "next/image";
import review1 from "@/public/images/review1.jpeg";
import review2 from "@/public/images/review2.jpeg";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

export default function Reviews() {
  const divStyle = {
    backgroundImage: 'url("/images/reviewbg.jpeg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    width: "100%",
  };

  const cardData = [
    {
      id: 1,
      image: review1,
      name: "Vivian Audrey",
      role: "HEAD CHEF",
      review:
        "Lorem ipsum dolor sit amet consectetur. Aenean pellentesque arcu egestas dui sit nunc varius. Nec tempus nisl ullamcorper curabitur velit posuere aliquet. Tincidunt viverra velit commodo urna nulla vulputate. Est donec at nulla magna iaculis vestibulum tincidunt urna purus.",
    },
    {
      id: 2,
      image: review2,
      name: "Bello Salami",
      role: "HEAD CHEF",
      review:
        "Lorem ipsum dolor sit amet consectetur. Aenean pellentesque arcu egestas dui sit nunc varius. Nec tempus nisl ullamcorper curabitur velit posuere aliquet. Tincidunt viverra velit commodo urna nulla vulputate. Est donec at nulla magna iaculis vestibulum tincidunt urna purus.",
    },
  ];
  return (
    <div className="mt-[6.5rem] pb-[8rem]">
      <div
        style={divStyle}
        className="mb-[3.75rem] relative hidden md:flex w-screen h-[23.8rem] items-center justify-center"
      >
        <div class="absolute inset-0 bg-black opacity-[0.5]"></div>
        <div className=" absolute opacity-[0.9] flex flex-col gap-[2.4rem]">
          <h2 className="text-white font-Inter text-2xl leading-normal text-center tracking-[2.46px] font-medium">
            SIMPLY A DELICIOUS EXPERIENCE{" "}
          </h2>
          <h1 className="text-white font-Playfair text-4xl leading-normal max-w-[45rem] font-medium text-center">
            We <span className="text-orange-500">Created</span> Best Dinning
            Experience For You &{" "}
            <span className="text-orange-500">Your Family</span>
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-[3.75rem] items-center justify-center ">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="flex flex-col w-[15rem] sm:w-[35rem] md:w-[40rem] lg:w-[60rem] shadow-customShadow sm:p-[1.875rem] p-[0.5rem] gap-[1.875rem]"
          >
            <div className="flex  gap-[1.25rem]">
              <div
                style={{ borderRadius: "50%" }}
                className=" w-[7rem] h-[5rem] md:w-[7rem] md:h-[6rem] lg:w-[10rem] lg:h-[9rem]  relative overflow-hidden"
              >
                <Image
                  src={card.image}
                  alt={card.name}
                  objectFit="cover"
                  layout="fill"
                  className="object-top"
                />
              </div>
              <div className="w-full flex flex-col sm:flex-row items-center justify-between">
                <div>
                  <h1 className="font-Playfair text-lg sm:text-3xl font-medium leading-normal">
                    {card.name}
                  </h1>
                  <h3 className="font-Roboto text-xs sm:text-base font-normal leading-normal tracking-[2.96px]">
                    {card.role}
                  </h3>
                </div>
                <div className="flex">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
              </div>
            </div>
            <div>
              <svg
                width="35"
                height="31"
                viewBox="0 0 35 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M31.7188 15.5H26.25V11.0714C26.25 8.62879 28.2119 6.64286 30.625 6.64286H31.1719C32.0811 6.64286 32.8125 5.90246 32.8125 4.98214V1.66071C32.8125 0.740402 32.0811 0 31.1719 0H30.625C24.582 0 19.6875 4.95446 19.6875 11.0714V27.6786C19.6875 29.5123 21.1572 31 22.9688 31H31.7188C33.5303 31 35 29.5123 35 27.6786V18.8214C35 16.9877 33.5303 15.5 31.7188 15.5ZM12.0312 15.5H6.5625V11.0714C6.5625 8.62879 8.52441 6.64286 10.9375 6.64286H11.4844C12.3936 6.64286 13.125 5.90246 13.125 4.98214V1.66071C13.125 0.740402 12.3936 0 11.4844 0H10.9375C4.89453 0 0 4.95446 0 11.0714V27.6786C0 29.5123 1.46973 31 3.28125 31H12.0312C13.8428 31 15.3125 29.5123 15.3125 27.6786V18.8214C15.3125 16.9877 13.8428 15.5 12.0312 15.5Z"
                  fill="#FA5A00"
                  fill-opacity="0.9"
                />
              </svg>
            </div>
            <div className="text-left mb-[2.5rem] font-Roboto text-base font-normal tracking-[2.96px] leading-normal">
              {card.review}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
