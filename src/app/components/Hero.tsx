import React from "react";

const hero = () => {
  return (
    <>
      <div className=" relative z-0 w-full overflow-hidden bg-opacity-75 bg-[url('/bghouse.jpg')] bg-cover __className_092cb9">
        <div className=" absolute inset-0 -z-50 h-full w-full bg-zinc-100 bg-opacity-80"></div>
        <div className=" z-50 m-auto mt-6 block w-[95%] items-center   justify-between md:flex md:flex-row lg:w-[90%] xl:w-[1300px] ">
          <div className=" h-fit w-full pt-5 md:w-1/2 md:py-10">
            <h1 className="whitespace-nowrap text-center text-[2rem] font-extrabold leading-10 tracking-wider text-main sm:text-5xl sm:leading-none md:text-left lg:text-6xl text-[rgb(4,78,131)]">
              Governor Sindh
            </h1>
            <h1 className=" whitespace-nowrap text-center text-[1.5rem] font-normal leading-[2rem] tracking-wider  text-main sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem] text-[rgb(4,78,131)]">
              Kamran Khan Tessori
            </h1>
            <h1 className="mt-5 whitespace-nowrap text-center text-[1.5rem] font-semibold leading-[2rem] tracking-wider  text-sub sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem] text-[rgb(46,182,232)]">
              Certified Cloud
              <br />
              Applied Generative AI
              <br />
              Engineer (GenEng)
            </h1>
            <p className=" my-5 whitespace-nowrap text-center text-[1.25rem] font-extrabold text-main sm:text-2xl md:text-left text-[rgb(4,78,131)]">
              Earn up to $5,000 / month
            </p>
            <p className="my-5 w-full text-center text-[1.25rem] font-bold tracking-wider text-main sm:text-2xl md:w-[80%] md:text-left text-[rgb(4,78,131)]">
              Now admissions are open in Hyderabad
            </p>
            <div className="mb-7 mt-5 flex flex-col items-center sm:mt-10 sm:flex-row sm:gap-5 md:mb-0">
              <a className="w-full md:w-auto" href="/apply">
                <button className="w-full rounded-md bg-main py-3 text-center text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 sm:py-4 sm:text-base md:w-52 bg-[rgb(4,78,131)]">
                  APPLY NOW
                </button>
              </a>
              <div className="mt-4 flex w-full flex-col items-center sm:mt-0">
                <div className="flex-col text-center text-xl tracking-widest text-main sm:text-3xl">
                  <div className="w-40 font-extrabold text-[rgb(4,78,131)]">
                    562,143
                  </div>
                </div>
                <div className="text-center text-xs tracking-wider text-main sm:mb-0 sm:text-sm text-[rgb(4,78,131)]">
                  Accepted Applications
                </div>
              </div>
            </div>
          </div>
          <div className=" relative  mt-7 flex  w-full items-end justify-center md:m-auto md:justify-end">
            <img
              alt="piaic"
              loading="lazy"
              width="1600"
              height="1212"
              decoding="async"
              data-nimg="1"
              className=" md: ml-40 h-auto min-w-[900px] lg:w-[600px]"
              src="./gov-removebg-preview.png"
            />
          </div>
        </div>
      </div>

      <div className="xl:w-[1300px] lg:w-[90%] m-auto sm:mt-20 mt-10 border-b border-zinc-300 pb-10">
        <h1 className="text-center xl:text-[36px] sm:text-[32px] text-xl sm:leading-[2.5rem] leading-[1.75rem] text-main font-extrabold m-auto md:w-[95%] text-[rgb(4,78,131)]">
          Certified Cloud Applied Generative AI Engineer (GenEng) and
          Solopreneur Developing Billion-Dollar Valued Developers and
          Solopreneurs
        </h1>
        <p className="sm:mt-10 mt-7 mb-8 xl:text-[1.25rem] sm:text-[1.2rem] text-[1rem] text-zinc-800 sm:tracking-wider tracking-normal text-justify">
          The pace of technological change is accelerating, big players like
          Microsoft, Amazon, Google, and OpenAI are winning by providing
          infrastructure, large AI foundation models, frameworks, 3D Metaverse
          experiences, and massive distribution networks. Solopreneurs trained
          in this program will win by automating work typically outsourced to
          employees, by directly connecting to customers by eliminating the
          middleman, and by developing vertical metaverses, thus paving the way
          for the first billion-dollar valued solopreneur businesses. This
          program has the objective to train this new breed of billion-dollar
          solopreneurs. These solopreneurs will adopt the ultra-lean business
          model and work independently and will not need to hire employees or
          other&nbsp;team&nbsp;members.
        </p>
      </div>
      <div className="flex sm:flex-col-3 flex-cols-1 gap-5 mt-10 m-3 sm:m-0">
        <img
          src="./pic10.jpg"
          alt="solo1"
          width={1088}
          height={896}
          className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full "
        />
        <img
          src="./pic8.jpg"
          alt="solo2"
          width={500}
          height={375}
          className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full"
        />
        <img
          src="/pic9.jpg"
          alt="solo2"
          width={1088}
          height={896}
          className="shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full"
        />
      </div>
    </>
  );
};

export default hero;
