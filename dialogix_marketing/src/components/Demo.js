import FadeIn from "./FadeIn";

export default function DemoSection() {
  return (
    <section id="demo" className="py-20 bg-[var(--color-lightGrey)]">
      <div className="container mx-auto px-6">
        <FadeIn className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--color-primary)]">
            See Dialogix in Action
          </h2>
          <p className="text-xl text-gray-600">
            Watch how our platform transforms classroom dynamics in discussion
            based classes.
          </p>
        </FadeIn>

        <FadeIn className="relative rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto cursor-pointer group">
          <div className=" bg-gray-900">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/herovid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </FadeIn>

        <FadeIn className="max-w-2xl mx-auto mt-10 text-center"></FadeIn>
      </div>
    </section>
  );
}
