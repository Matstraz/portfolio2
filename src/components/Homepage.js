import { Typewriter } from "react-simple-typewriter";

export default function Homepage() {
  return (
    <div className=" h-screen bg-slate-800 flex flex-col justify-center items-center text-slate-200 gap-3 text-5xl">
      <h1>Hello, I'm Matteo</h1>
      <h1 className=" text-center">
        <Typewriter
          words={[
            "Web Developer",
            "Front-end Developer",
            "Back-end Developer",
            "Fullstack Developer",
          ]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={60}
          delaySpeed={1000}
        />
      </h1>

      <button className="border-2 px-3 py-1 text-3xl mt-5">Enter</button>
    </div>
  );
}
