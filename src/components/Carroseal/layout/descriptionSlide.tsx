interface ISlideImageProps {
  slides: DMovies.IMovie[];
  activeSlide: number;
}

export function DescriptionSlide({ slides, activeSlide }: ISlideImageProps) {
  return (
    <div className="absolute h-full top-1/2 -mt-10 md:w-[559px] w-[80%]">
      <div className="my-auto w-full flex justify-between mx-20  md:ml-40 lg:mx-52 ">
        <div className="flex flex-col gap-4">
          <p className="font-montserrat font-bold text-white text-xs md:text-base">
            Destaque do mês
          </p>
          <h1 className="">
            <pre
              className="inline-block font-montserrat font-bold text-2xl md:text-[40px] md:leading-[60px] text-white 
                "
            >
              {slides[activeSlide].title}
            </pre>
          </h1>

          <div
            className="md:inline-flex items-center
                md:items-start gap-2"
          >
            <div className="bg-[#716bead3] p-2 rounded-2xl py-2 px-4 flex items-center gap-1 w-[fit-content] min-w-[94px]">
              <img
                src="https://raw.githubusercontent.com/wellington-tinho/slideworks-frontend-test/master/src/assets/icons/star.svg"
                alt="Estrela"
                className="inline w-4 h-4"
              />
              <span className="font-montserrat font-medium text-sm text-white">
                {slides[activeSlide].rating}/10
              </span>
            </div>
            <p className="font-montserrat font-semibold text-sm md:text-base mt-2 mb-4 text-white overflow-ellipsis flex-nowrap">
              {slides[activeSlide].crew}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
