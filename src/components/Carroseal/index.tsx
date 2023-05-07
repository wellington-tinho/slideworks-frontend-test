import { useCallback, useEffect, useState } from "react";
interface ICarroselProps {
  movies: DMovies.IMovie[];
}

export function Carrosel({ movies }: ICarroselProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      ...movies[8],
    },
    {
      ...movies[0],
    },
    {
      ...movies[1],
    },
  ];

  const handleSlideChange = useCallback(
    // useCallback is used to prevent the function from being recreated every time the component is rendered
    (index: number) => {
      if (index < 0) {
        index = slides.length - 1;
      } else if (index > slides.length - 1) {
        index = 0;
      }
      setActiveSlide(index);
    },
    [slides.length]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      // setInterval is used to change the slide every 5 seconds
      // handleSlideChange(activeSlide + 1);
    }, 5000);
    return () => clearInterval(interval); // clear interval when component unmount or when activeSlide change
  }, [activeSlide, handleSlideChange]);

  return (
    <div className="relative w-screen">
      <div className="h-[577px]">
        <img
          className="h-full w-full object-cover brightness-50 bg-right-bottom md:object-[0px_-14rem] object-top "
          src={slides[activeSlide].image_url}
          alt={slides[activeSlide].title}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex">
        <div className="my-auto w-full flex justify-between mx-10 md:mx-28">
          {/* buttons to change slide */}
          <button
            onClick={() => handleSlideChange(activeSlide - 1)}
            className="text-white text-3xl "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => handleSlideChange(activeSlide + 1)}
            className="text-white text-3xl "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="absolute md:top-1/2 left-0 w-full h-full flex md:-mt-8 items-center md:items-stretch">
          {/* Description slide */}
          <div className="mx-28 w-[559px] flex justify-between md:mx-[216px] max-h-[205px]">
            <div className="flex flex-col gap-2">
              <p className="font-montserrat font-bold text-white text-base">
                Destaque do mes
              </p>
              <h1 className="font-montserrat font-bold text-[40px] text-white">
                {slides[activeSlide].title}
              </h1>

              <div className="inline-flex items-center md:items-baseline gap-2">
                <div className="bg-[#716bead3] p-2 rounded-2xl py-2 px-4 flex items-center gap-1 w-[fit-content] min-w-[94px]">
                  <img
                    src="src/assets/icons/star.svg"
                    alt="Estrela"
                    className="inline w-4 h-4"
                  />
                  <span className="font-montserrat font-medium text-sm text-white">
                    {slides[activeSlide].rating}/10
                  </span>
                </div>
                <p className="font-montserrat font-semibold text-base mt-2 mb-4  text-white">
                  {slides[activeSlide].crew}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-full bottom-0">
          {/* radio buttons */}
          <div className="flex justify-center gap-2 absolute bottom-6 w-full">
            {slides.map((_, index) => (
              <div key={index}>
                <input
                  type="radio"
                  name="radio"
                  id={`radio${index}`}
                  checked={activeSlide === index}
                  onChange={() => handleSlideChange(index)}
                  className="hidden"
                />
                <label
                  htmlFor={`radio${index}`}
                  className={`inline-block w-4 h-4 mx-2 cursor-pointer rounded-full border border-white
                  ${activeSlide === index ? "bg-white" : "bg-[#ffffff8f]"}
                  `}
                ></label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
