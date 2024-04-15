

export default function Body({children}) {
  return (
    <div 
      className=" w-[clamp(16em,80vw,40em)] h-[clamp(30em,70vh,40rem)] m-auto text-center absolute top-[0] left-1/2 translate-x-[-50%] mt-4 lg:mt-12"
    >
      {children}
    </div>
  )
}
