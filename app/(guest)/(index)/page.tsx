import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center justify-items-center bg-gray-50 text-gray-800 px-6 py-16 md:py-24 lg:py-32 gap-10 md:gap-12 lg:gap-16">
      <div className="flex justify-center md:justify-end w-full max-w-md">
        <img
          src="my-profile.jpg"
          alt="Jessie Francis Catubay"
          className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl object-cover shadow-2xl ring-4 ring-gray-100/80"
        />
      </div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl space-y-6 md:space-y-8 lg:space-y-10">
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Jessie Francis P. Catubay
          </h1>

          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p className="text-base sm:text-lg md:text-xl">
              Hi! I’m Jessie Francis Catubay, an aspiring web developer who
              loves designing and building websites. I know CSS, Tailwind, and
              Bootstrap, and I enjoy turning ideas into practical, interactive
              projects. I like working on both small projects and bigger
              systems, from Arduino builds to web applications, always finding
              ways to make them better and more user-friendly.
            </p>

            <p className="text-base sm:text-lg md:text-xl">
              I’m curious, hands-on, and always eager to learn new technologies.
              I enjoy solving problems and creating solutions that are both
              functional and creative. I’m excited to keep growing as a
              developer and bring my ideas to life.
            </p>
          </div>
        </div>

        <a href="mailto:catubayfrancis7@gmail.com">
          <Button
            size="lg"
            className="mt-2 sm:mt-4 text-base sm:text-lg px-8 py-6 font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </Button>
        </a>
      </div>
    </div>
  );
}
