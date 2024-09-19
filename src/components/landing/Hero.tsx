import { Button } from "../ui/button"

const Hero = () => {
  return (
    <main className="flex-1 h-full flex justify-center items-center flex-col space-y-4 z-40">
        <div className="text-4xl lg:text-6xl font-semibold max-w-screen-lg text-center">Turn your content into engaging podcasts.</div>
        <p className="text-base md:text-xl text-center max-w-screen-sm px-6 sm:px-0">Sonar Education helps you create high-quality podcasts from your existing content</p>
        <Button className="">Learn more</Button>
    </main>
  )
}

export default Hero