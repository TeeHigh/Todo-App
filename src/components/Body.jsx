import Header from "./Header";

export default function Body() {
  return (
    <div 
      className=" w-[clamp(16em,80vw,40em)] h-[clamp(30em,70vh,40rem)] m-auto text-center absolute top-[50%] left-[50%] translate-y-[-62%] translate-x-[-50%] md:translate-y-[-50%] md:mt-4"
    >
      <Header/>
    </div>
  )
}
