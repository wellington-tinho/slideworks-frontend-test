export default function Footer() {
  return (
    <div className="flex flex-col items-start justify-between bg-[#726BEA] w-screen h-[293px] mt-16 sm:px-16 md:px-28 ">
      <img
        src="src/assets/logoipsum.svg"
        alt="logo com o none LogoIpsum"
        className="brightness-[10] h-[33px] w-[176px] mb-12 mt-16"
      />
      <hr className="w-full h-[1.4px] bg-[#FCFCFC]  rounded" />
      <div className="w-full flex justify-between items-center mt-14 mb-[72px]">
        <div className="flex gap-8 font-montserrat text-white text-regular text-[15px]">
          <span>Terms & Conditions </span>
          <span>Privacy Policy</span>
        </div>
        <div className="flex gap-6">
          <img
            src="src/assets/icons/facebook.svg"
            alt="logo do facebook"
            className="h-9 w-9"
          />
          <img
            src="src/assets/icons/twitter.svg"
            alt="logo do twitter"
            className="h-9 w-9"
          />
          <img
            src="src/assets/icons/instagram.svg"
            alt="logo do instagram"
            className="h-9 w-9"
          />
        </div>
      </div>
    </div>
  );
}
