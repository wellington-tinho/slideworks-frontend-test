interface ISlideImageProps {
  slides: DMovies.IMovie[];
  activeSlide: number;
}

export function SlideImage({ slides, activeSlide }: ISlideImageProps) {
  return (
    <div className="h-[577px] ">
      <img
        className="h-full w-full object-cover brightness-50 bg-right-bottom xl:object-[0px_-15rem] object-top 
            
          "
        src={slides[activeSlide].image_url}
        alt={slides[activeSlide].title}
      />
    </div>
  );
}
