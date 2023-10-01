import Link from "next/link";

export default function Menu() {
  const divStyle = {
    backgroundImage: 'url("/images/bgHam2.jpeg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    width: "100%",
  };

  return (
    <div className="m-0">
      <div className="md:hidden flex flex-col items-center justify-center gap-[.9rem] mt-[1rem] p-8">
        <div>
          <h1 className="font-Playfair text-2xl text-gray-900 leading-normal font-medium">
            Tasty Menu Today
          </h1>
        </div>
        <div>
          <h2 className="font-Inter text-base leading-normal font-medium text-orange-500">
            CHEF SELECTION
          </h2>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-lg text-gray-900 font-medium leading-normal tracking-[0.06px] font-Playfair">
            Dinner
          </h1>
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="flex w-full justify-between items-center">
              <h2 className="font-Crimson text-base font-semibold leading-normal">
                Irish Hot Burger
              </h2>
              <span className="text-orange-500 font-Roboto leading-normal font-medium text-base">
                $7.50
              </span>
            </div>
            <h3 className="text-justify text-sm">
              Irish Hot Recipe : Lettuce leaves, Tomato slices, Onion slices,
              Pickles, Cheese slices , Ketchup, Mustard and Mayonnaise
            </h3>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="flex w-full justify-between items-center">
              <h2 className="font-Crimson text-base font-semibold leading-normal">
                Irish Hot Burger
              </h2>
              <span className="text-orange-500 font-Roboto leading-normal font-medium text-base">
                $7.50
              </span>
            </div>
            <h3 className="text-justify text-sm">
              Irish Hot Recipe : Lettuce leaves, Tomato slices, Onion slices,
              Pickles, Cheese slices , Ketchup, Mustard and Mayonnaise
            </h3>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="flex w-full justify-between items-center">
              <h2 className="font-Crimson text-base font-semibold leading-normal">
                Irish Hot Burger
              </h2>
              <span className="text-orange-500 font-Roboto leading-normal font-medium text-base">
                $7.50
              </span>
            </div>
            <h3 className="text-justify text-sm">
              Irish Hot Recipe : Lettuce leaves, Tomato slices, Onion slices,
              Pickles, Cheese slices , Ketchup, Mustard and Mayonnaise
            </h3>
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center mt-8">
          <h1 className="text-lg text-gray-900 font-medium leading-normal tracking-[0.06px] font-Playfair">
            Breakfast
          </h1>
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="flex w-full justify-between items-center">
              <h2 className="font-Crimson text-base font-semibold leading-normal">
                Irish Hot Burger
              </h2>
              <span className="text-orange-500 font-Roboto leading-normal font-medium text-base">
                $6.25
              </span>
            </div>
            <h3 className="text-justify text-sm">
              Irish Hot Recipe : Lettuce leaves, Tomato slices, Onion slices,
              Pickles, Cheese slices , Ketchup, Mustard and Mayonnaise
            </h3>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="flex w-full justify-between items-center">
              <h2 className="font-Crimson text-base font-semibold leading-normal">
                Irish Hot Burger
              </h2>
              <span className="text-orange-500 font-Roboto leading-normal font-medium text-base">
                $6.25
              </span>
            </div>
            <h3 className="text-justify text-sm">
              Irish Hot Recipe : Lettuce leaves, Tomato slices, Onion slices,
              Pickles, Cheese slices , Ketchup, Mustard and Mayonnaise
            </h3>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="flex w-full justify-between items-center">
              <h2 className="font-Crimson text-base font-semibold leading-normal">
                Irish Hot Burger
              </h2>
              <span className="text-orange-500 font-Roboto leading-normal font-medium text-base">
                $6.25
              </span>
            </div>
            <h3 className="text-justify text-sm">
              Irish Hot Recipe : Lettuce leaves, Tomato slices, Onion slices,
              Pickles, Cheese slices , Ketchup, Mustard and Mayonnaise
            </h3>
          </div>
        </div>
        <div className="flex items-center justify-center">
                <Link
                  href="/"
                  className="mt-[3rem] flex justify-start items-start bg-black  text-white  hover:bg-transparent  px-[30px] py-[.62rem]"
                >
                  <h3 className=" font-Inter text-sm font-medium leading-normal">
                    FULL MENU
                  </h3>
                </Link>
              </div>
      </div>
      <div
        style={divStyle}
        className="relative  hidden md:flex w-full h-screen"
      >
        <div class="absolute inset-0 bg-black opacity-[0.65]"></div>
        <div className="absolute bg-white w-full h-[63.7%]  flex justify-center">
          <div className="absolute w-[85%] lg:w-[80%] h-[132%] bg-white">
            <div className="flex flex-col items-center justify-center gap-[.9rem] mt-[1rem] p-8">
              <div>
                <h1 className="font-Playfair text-4xl text-gray-900 leading-normal font-medium">
                  Tasty Menu Today
                </h1>
              </div>
              <div>
                <h2 className="font-Inter text-2xl leading-normal font-medium text-orange-500">
                  CHEF SELECTION
                </h2>
              </div>
              <div className="flex  items-center justify-between gap-[9.75rem]">
                <div className="flex flex-col gap-4 justify-center items-start">
                  <h1 className="text-3xl text-gray-900 font-medium leading-normal tracking-[0.06px] font-Playfair">
                    Dinner
                  </h1>
                  <div className="flex flex-col gap-2 justify-center items-center max-w-[22rem]">
                    <div className="flex w-full justify-between items-center">
                      <h2 className="font-Crimson text-[1.4rem] font-semibold leading-normal">
                        Irish Hot Burger
                      </h2>
                      <span className="text-orange-500 font-Roboto leading-normal font-medium text-[1.4rem]">
                        $7.50
                      </span>
                    </div>
                    <h3 className="text-justify text-sm">
                      Irish Hot Recipe : Lettuce leaves, Tomato slices, Onion
                      slices, Pickles, Cheese slices , Ketchup, Mustard and
                      Mayonnaise
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-center max-w-[22rem]">
                    <div className="flex w-full justify-between items-center">
                      <h2 className="font-Crimson text-[1.4rem] font-semibold leading-normal">
                        Irish Hot Burger
                      </h2>
                      <span className="text-orange-500 font-Roboto leading-normal font-medium text-[1.4rem]">
                        $7.50
                      </span>
                    </div>
                    <h3 className="text-justify text-sm">
                      Irish Hot Recipe : Lettuce leaves, Tomato slices, Onion
                      slices, Pickles, Cheese slices , Ketchup, Mustard and
                      Mayonnaise
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-center max-w-[22rem]">
                    <div className="flex w-full justify-between items-center">
                      <h2 className="font-Crimson text-[1.4rem] font-semibold leading-normal">
                        Irish Hot Burger
                      </h2>
                      <span className="text-orange-500 font-Roboto leading-normal font-medium text-[1.4rem]">
                        $7.50
                      </span>
                    </div>
                    <h3 className="text-justify text-sm">
                      Irish Hot Recipe : Lettuce leaves, Tomato slices, Onion
                      slices, Pickles, Cheese slices , Ketchup, Mustard and
                      Mayonnaise
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col gap-4 justify-center items-start ">
                  <h1 className="text-3xl text-gray-900 font-medium leading-normal tracking-[0.06px] font-Playfair">
                    Breakfast
                  </h1>
                  <div className="flex flex-col gap-2 justify-center items-center max-w-[22rem]">
                    <div className="flex w-full justify-between items-center">
                      <h2 className="font-Crimson text-[1.4rem] font-semibold leading-normal">
                        Irish Hot Burger
                      </h2>
                      <span className="text-orange-500 font-Roboto leading-normal font-medium text-[1.4rem]">
                        $6.25
                      </span>
                    </div>
                    <h3 className="text-justify text-sm">
                      Irish Hot Recipe : Lettuce leaves, Tomato slices, Onion
                      slices, Pickles, Cheese slices , Ketchup, Mustard and
                      Mayonnaise
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-center max-w-[22rem]">
                    <div className="flex w-full justify-between items-center">
                      <h2 className="font-Crimson text-[1.4rem] font-semibold leading-normal">
                        Irish Hot Burger
                      </h2>
                      <span className="text-orange-500 font-Roboto leading-normal font-medium text-[1.4rem]">
                        $6.25
                      </span>
                    </div>
                    <h3 className="text-justify text-sm">
                      Irish Hot Recipe : Lettuce leaves, Tomato slices, Onion
                      slices, Pickles, Cheese slices , Ketchup, Mustard and
                      Mayonnaise
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-center max-w-[22rem]">
                    <div className="flex w-full justify-between items-center">
                      <h2 className="font-Crimson text-[1.4rem] font-semibold leading-normal">
                        Irish Hot Burger
                      </h2>
                      <span className="text-orange-500 font-Roboto leading-normal font-medium text-[1.4rem]">
                        $6.25
                      </span>
                    </div>
                    <h3 className="text-justify text-sm">
                      Irish Hot Recipe : Lettuce leaves, Tomato slices, Onion
                      slices, Pickles, Cheese slices , Ketchup, Mustard and
                      Mayonnaise
                    </h3>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="absolute left-[50%] -translate-x-[50%]  flex items-center justify-center">
                <Link
                  href="/"
                  className=" flex justify-center items-center bg-black hover:border hover:border-black text-white  hover:bg-transparent hover:text-black md:px-[1.75rem] md:py-[.665rem] lg:px-[2.5rem] lg:py-[.95rem]"
                >
                  <h3 className=" font-Inter text-sm font-medium leading-normal">
                    FULL MENU
                  </h3>
                </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
