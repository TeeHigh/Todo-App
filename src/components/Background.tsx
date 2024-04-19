export default function Background() {
  return (
    <>
      {/* --------------- light mode background images --------------- */}
      <div className="lightmode-bg">
        {/* mobile screen light background image */}
        <img
          className="md:hidden w-full dark:hidden"
          src="/assets/bg-mobile-light.jpg"
          alt="background image"
        />
        {/* desktop screen light background image */}
        <img
          className="hidden md:block dark:hidden w-full"
          src="/assets/bg-desktop-light.jpg"
          alt="background image"
        />
        {/* mobile screen dark background image */}

      </div>

      {/* --------------- darkmode background images --------------- */}
      <div className="hidden dark:block">
        <img
          className="lg:hidden  w-full"
          src="/assets/bg-mobile-dark.jpg"
          alt="background image"
        />
        {/* desktop screen dark background image */}
        <img
          className="hidden lg:block w-full"
          src="/assets/bg-desktop-dark.jpg"
          alt="background image"
        />
      </div>

    </>
  )
}

export { }