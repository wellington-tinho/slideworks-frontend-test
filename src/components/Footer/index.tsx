export function Footer() {
  return (
    <div className="flex flex-col md:items-start justify-between bg-[#726BEA] w-screen items-center h-[293px] mt-16 sm:px-16 md:px-28 ">
      <img
        src="https://raw.githubusercontent.com/wellington-tinho/slideworks-frontend-test/master/src/assets/logoipsum.svg"
        alt="logo com o none LogoIpsum"
        className="brightness-[10] h-[33px] w-[176px] mb-12 mt-16"
      />
      <hr className="w-full h-[1.4px] bg-[#FCFCFC] rounded" />
      <div className="w-full flex md:flex-row flex-col gap-4 md:justify-between items-center justify-center mt-14 mb-[72px]">
        <div className="flex gap-8 font-montserrat text-white text-regular text-[15px]">
          <span>Terms & Conditions </span>
          <span>Privacy Policy</span>
        </div>
        <div className="flex gap-6 pb-12 md:pb-0">
          <a href="https://www.facebook.com/slideworks.cc/">
            <img
              src="https://raw.githubusercontent.com/wellington-tinho/slideworks-frontend-test/master/src/assets/icons/facebook.svg"
              alt="logo do facebook"
              className="h-9 w-9"
            />
          </a>
          <a href="https://www.linkedin.com/company/slideworks/">
            <img
              src="https://raw.githubusercontent.com/wellington-tinho/slideworks-frontend-test/master/src/assets/icons/twitter.svg"
              alt="logo do twitter"
              className="h-9 w-9"
            />
          </a>
          <a href="https://www.instagram.com/slideworks.cc/">
            <img
              src="https://raw.githubusercontent.com/wellington-tinho/slideworks-frontend-test/master/src/assets/icons/instagram.svg"
              alt="logo do instagram"
              className="h-9 w-9"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
