import { useCallback, useEffect, useState } from "react";
import { ArrowButtons } from "./layout/arrowButtons";
import { DescriptionSlide } from "./layout/descriptionSlide";
import { RadioButtons } from "./layout/radioButtons";
import { SlideImage } from "./layout/slideImage";

interface ICarroselProps {
  movies: DMovies.IMovie[];
}

export function Carrosel({ movies }: ICarroselProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const splitTitle = movies[8].title.includes(":") // split the title to remove the ":" and add a line break
    ? `${movies[8].title.split(":")[0]}: \n${movies[8].title.split(":")[1]}`
    : movies[8].title;

  const slides = [
    {
      ...movies[8],
      title: splitTitle,
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
      handleSlideChange(activeSlide + 1);
    }, 5000);
    return () => clearInterval(interval); // clear interval when component unmount or when activeSlide change
  }, [activeSlide, handleSlideChange]);

  return (
    <div className="relative w-screen ">
      <SlideImage slides={slides} activeSlide={activeSlide} />
      <div className="absolute top-0 left-0 w-full h-full flex">
        <ArrowButtons
          activeSlide={activeSlide}
          handleSlideChange={handleSlideChange}
        />
        <DescriptionSlide slides={slides} activeSlide={activeSlide} />
        <RadioButtons
          slides={slides}
          activeSlide={activeSlide}
          handleSlideChange={handleSlideChange}
        />
      </div>
    </div>
  );
}
