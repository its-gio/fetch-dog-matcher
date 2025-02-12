export default function Home() {
  return (
    <main id="homepage">
      <div className="hero relative h-screen flex text-center justify-center items-center overflow-hidden">
        <div>
          <h1 className="text-8xl font-barlow-condensed">
            Find your Best Friend!
          </h1>
          <h4 className="text-xl font-montserrat">
            For those tired of chasing their tails
          </h4>
        </div>

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
