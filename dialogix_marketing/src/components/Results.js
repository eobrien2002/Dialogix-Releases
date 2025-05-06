import FadeIn from "./FadeIn";
import Counter from "./Counter";

export default function ResultsSection() {
  return (
    <section
      id="results"
      className="py-20 bg-[var(--color-primary)] text-white"
    >
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Results from Our Pilot Programs
          </h2>
        </FadeIn>

        {/* key metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          <FadeIn className="text-center">
            <Counter to={100} suffix="%" />
            <p className="text-xl">
              of students were more likely to participate in class when using
              Dialogix
            </p>
          </FadeIn>

          <FadeIn className="text-center">
            <Counter to={100} suffix="%" />
            <p className="text-xl">
              of students said Dialogix improved their classroom experience
            </p>
          </FadeIn>

          <FadeIn className="text-center">
            <Counter to={2} />
            <p className="text-xl">pilots completed in Winter 2025</p>
          </FadeIn>
        </div>

        {/* single testimonial slide (static for now) */}
        {/* <FadeIn className="max-w-4xl mx-auto">
          <div className="bg-white/10 p-8 rounded-lg">
            <div className="text-[var(--color-secondary)] text-4xl mb-4">"</div>
            <p className="text-lg mb-6">
              Dialogix transformed my classroom dynamics completely. Students
              who never spoke up are now actively participating, and our
              discussions have reached a depth I didn&apos;t think was possible
              with undergraduates. The analytics help me identify patterns and
              improve my teaching approach continuously.
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[var(--color-tertiary)] rounded-full flex items-center justify-center mr-4">
                <i className="ri-user-line ri-lg text-[var(--color-primary)]" />
              </div>
              <div>
                <h4 className="font-semibold">Dr. Rebecca Martinez</h4>
                <p className="text-[var(--color-tertiary)]">
                  Professor of Sociology, Stanford University
                </p>
              </div>
            </div>
          </div>
        </FadeIn> */}
      </div>
    </section>
  );
}
