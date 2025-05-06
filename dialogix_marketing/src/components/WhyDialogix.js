import FadeIn from "./FadeIn";

export default function WhyDialogix() {
  return (
    <section id="problems" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--color-primary)]">
            Modern Classrooms, Outdated Tools
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: "device",
              title: "Tech Is Distracting, But Unavoidable",
              text: "Laptops consume students' attention. But with course materials, note-taking, and cases all digital, banning devices isn’t practical.",
            },
            {
              icon: "calendar-check",
              title: "Attendance Tracking Is Stuck in the Past",
              text: "Pen-and-paper sign-ins and QR codes  are slow, easy to manipulate, and drain TA time. Even so-called modern hardware systems are clunky and unreliable—it's time for a smarter solution.",
            },
            {
              icon: "group",
              title: "Participation Isn’t Always Equitable",
              text: "It can be challenging to track who has already contributed to class and subconscious biases affects who gets called on, especially when multiple hands are raised.",
            },
          ].map(({ icon, title, text }) => (
            <FadeIn
              key={title}
              className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-[var(--color-tertiary)] rounded-full flex items-center justify-center">
                <i
                  className={`ri-${icon}-line ri-xl text-[var(--color-primary)]`}
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">{title}</h3>
              <p className="text-gray-600">{text}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
