interface RadioButtonsProps {
  slides: DMovies.IMovie[];
  activeSlide: number;
  handleSlideChange: (index: number) => void;
}

export function RadioButtons({
  slides,
  activeSlide,
  handleSlideChange,
}: RadioButtonsProps) {
  return (
    <div className="absolute w-full bottom-0">
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
  );
}
