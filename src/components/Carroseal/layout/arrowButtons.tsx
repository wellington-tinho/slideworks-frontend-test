interface ArrowButtonsProps {
  activeSlide: number;
  handleSlideChange: (index: number) => void;
}

export function ArrowButtons({
  activeSlide,
  handleSlideChange,
}: ArrowButtonsProps) {
  return (
    <div className="my-auto relative w-full flex justify-between mx-10 md:mx-28">
      <button
        onClick={() => handleSlideChange(activeSlide - 1)}
        className="text-white text-3xl z-10"
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
        className="text-white text-3xl z-10"
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
  );
}
