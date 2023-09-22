import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col text-white p-4 md:p-4 md:px-[6rem] lg:p-8 lg:px-[8rem]">
      <div className="  flex flex-col gap-[10px] items-start mt-12  h-auto">
        <h2 className="font-Inter tracking-[0.06px] md:text-[24px]">
          {" "}
          &mdash; WE ARE THE BEST
        </h2>
        <h1 className="font-bold font-Playfair text-4xl md:text-[57px] max-w-[447px] leading-normal">
          Forget Mediocre Burgers
        </h1>
        <div className="mt-[38px]">
        <h3 className="font-Crimson text-sm font-semibold md:text-[22px] max-w-[541px] leading-normal">
          When, while the lovely valley teems with vapour around me, and the
          meridian sun strikes the upper surface.
        </h3>
      </div>
      <div className="flex items-center justify-center">
        <Link
          href="/"
          className="mt-[65px] flex justify-start items-start bg-orange-500 hover:bg-transparent hover:border hover:border-white hover:text-orange-500 px-[30px] py-[10px]"
        >
          <h3>READ MORE</h3>
        </Link>
      </div>
      </div>
      
      
    </div>
  );
}
