import { GeneralBtn } from "@/components/buttons";
import LoginForm from "@/components/login/LoginForm";

export default function Home() {
  return (
    <main id="homepage">
      <LoginForm />

      <div className="hero relative h-screen flex text-center flex-col gap-4 justify-center items-center overflow-hidden text-zinc-100">
        <h1 className="text-8xl font-bold">Find Your Best Friend!</h1>
        <h4 className="text-xl font-montserrat">
          For those tired of chasing their tails
        </h4>
        <GeneralBtn text={"Start Search!"} />
        <video
          autoPlay
          loop
          muted
          className="hero-bg-video z-[-1] object-cover absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full"
        >
          <source src="/video/homepage-background.mp4" />
        </video>
      </div>
    </main>
  );
}
