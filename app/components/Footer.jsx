import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col bg-black text-white w-screen shrink-0 p-8 md:pb-[7rem] lg:pb-[10rem]">


    <div className="flex lg:flex-row justify-center flex-wrap gap-[3.9rem] lg:gap-[4.9rem]">
    
      <div className="max-w-[20.8rem] gap-[1rem] md:gap-[1.87rem] flex flex-col items-start justify-center">
        <h1 className="font-Playfair text-xl  md:text-3xl font-semibold leading-normal">
          Follow
        </h1>
        <h2 className="hidden md:flex w-[57px]">&mdash;</h2>
        <h3 className="font-Roboto text-sm font-medium leading-normal">
          Lorem ipsum dolor sit amet consectetur. Non elit nulla rutrum et
          egestas. Iaculis dictum et in quam sem a nec gravida nam. Viverra quis
          quam interdum lacinia elit nunc arcu.
        </h3>

        <div className="bg-white relative rounded-full w-full">
          <input
            className=" p-[0.9rem] w-full outline-none rounded-full text-black opacity-90 placeholder:text-black placeholder:font-Roboto placeholder:text-sm"
            type="email"
            placeholder="Enter Your Email..."
          />
          <a
            href="/"
            className="absolute h-[80%] top-[10%] right-[5px] rounded-full bg-orange-500 flex items-center"
          >
            <h3 className="text-sm p-4 text-center uppercase">submit</h3>
          </a>
        </div>
      </div>
      <div className="items-start max-w-[20.8rem] flex flex-col gap-[1rem] md:gap-[1.87rem]">
        <h1 className="font-Playfair text-xl  md:text-3xl font-semibold leading-normal">
          Hours
        </h1>
        <h2 className="hidden md:flex w-[57px]">&mdash;</h2>
        <div className="flex flex-col gap-[0.625rem] font-Roboto leading-normal font-medium">
          <div className="flex gap-[3.1rem] justify-between">
            <h3>Monday</h3>
            <h3>9:00 - 18:00</h3>
          </div>
          <div className="flex gap-[3.1rem] justify-between">
            <h3>Tuesday</h3>
            <h3>9:00 - 18:00</h3>
          </div>
          <div className="flex gap-[3.1rem] justify-between">
            <h3>Wednesday</h3>
            <h3>9:00 - 18:00</h3>
          </div>
          <div className="flex gap-[3.1rem] justify-between">
            <h3>Thursday</h3>
            <h3>9:00 - 18:00</h3>
          </div>
          <div className="flex gap-[3.1rem] justify-between">
            <h3>Friday</h3>
            <h3>9:00 - 18:00</h3>
          </div>
          <div className="flex gap-[3.1rem] justify-between">
            <h3>Other days</h3>
            <h3>Closed</h3>
          </div>
        </div>
      </div>
      <div className="max-w-[20.8rem] flex flex-col gap-[.5rem] md:gap-[1.87rem]">
        <h1 className="font-Playfair text-xl  md:text-3xl font-semibold leading-normal">
          Contact
        </h1>
        <h2 className="hidden md:flex w-[57px]">&mdash;</h2>
        <div className="flex flex-col gap-4 font-Roboto font-medium">
          <h3>ADDRESS: <address>
          10A Avenue Street, St. Theresa Close, Palmgrove, Nigeria. 
          </address></h3>
          <h3>Phone: <a  href="tel:2348111211953">+234 8111211953</a></h3>
          <h3>Email: <a  href = "mailto: fagbolasamuel.sf@gmail.com">fagbolasamuel.sf@gmail.com</a></h3>
        </div>
      </div>
      </div>
    </div>
  );
}
