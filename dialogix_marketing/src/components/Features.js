/* eslint-disable react/display-name */
"use client";
import FadeIn from "./FadeIn";

/**
 * The original HTML referenced tab‑switching code but did not actually
 * include separate tab panes, so we present a single grid that fits both
 * classroom styles.  You can easily branch on `activeTab` if you add more
 * content later.
 */
const FeaturesSection = () => (
  <section
    id="features"
    className="py-16 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/10"
  >
    <div className="max-w-5xl mx-auto px-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative ">
          <img
            src="/demo_pic.png"
            alt="Dialogix Platform Interface"
            className="w-full h-full object-contain object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Dialogix Platform</h3>
              <p className="text-lg">
                Teacher interface for discussion-based classrooms. Request a
                demo to learn more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-6 mt-16">
      <FadeIn className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">
          Powerful Features for Modern Education
        </h2>
        <p className="text-xl text-gray-600">
          Whether your classroom is discussion‑based or traditional
          lecture‑style, Dialogix has the features to transform your classroom
          environment.
        </p>
      </FadeIn>

      {/* two hero cards (discussion / traditional) */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <FadeIn className="bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5 backdrop-blur-sm p-10 rounded-2xl  hover:shadow-lg transition-all duration-300">
          <div className="w-16 h-16 mb-6 flex items-center justify-center bg-white rounded-xl shadow-md">
            <i className="ri-team-line ri-2x text-[var(--color-primary)]"></i>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-[var(--color-primary)]">
            Discussion-based Learning
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <i className="ri-checkbox-circle-line text-[var(--color-secondary)] mt-1"></i>
              <span className="text-gray-600">
                Real-time participation tracking
              </span>
            </li>
            <li className="flex items-start gap-3">
              <i className="ri-checkbox-circle-line text-[var(--color-secondary)] mt-1"></i>
              <span className="text-gray-600">Smart discussion queues</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="ri-checkbox-circle-line text-[var(--color-secondary)] mt-1"></i>
              <span className="text-gray-600">
                Anonymous participation options
              </span>
            </li>
          </ul>
        </FadeIn>
        <FadeIn className="bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5 backdrop-blur-sm p-10 rounded-2xl  hover:shadow-lg transition-all duration-300">
          <div className="w-16 h-16 mb-6 flex items-center justify-center bg-white rounded-xl shadow-md">
            <i className="ri-presentation-line ri-2x text-[var(--color-primary)]"></i>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-[var(--color-primary)]">
            Traditional Learning
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <i className="ri-checkbox-circle-line text-[var(--color-secondary)] mt-1"></i>
              <span className="text-gray-600">Interactive polling system</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="ri-checkbox-circle-line text-[var(--color-secondary)] mt-1"></i>
              <span className="text-gray-600">Engagement analytics</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="ri-checkbox-circle-line text-[var(--color-secondary)] mt-1"></i>
              <span className="text-gray-600">Structured Q&A management</span>
            </li>
          </ul>
        </FadeIn>
      </div> */}

      {/* core feature grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: "user-location",
            title: "Attendance Tracking",
            desc: "Automatically tracks attendance by comparing nearby Wi-Fi routers from the teacher's and student's devices to verify they are in the same location.",
          },
          {
            icon: "lock",
            title: "Lockdown Mode",
            desc: "Instantly disable or restore student internet access during class to minimize distractions and boost engagement, all with a single click.",
          },
          {
            icon: "pie-chart-2",
            title: "Class Analytics",
            desc: "Automatically tracks key metrics like attendance, time in class, and participation. View data by student or session, and export it easily for grading or a quick class overview.",
          },
          {
            icon: "timer",
            title: "Engagement Tracking",
            desc: "Tracks how long each student stays connected to the class session, helping identify attempts to bypass lockdown mode and ensuring full participation.",
          },
          {
            icon: "survey",
            badge: "Participation",
            title: "Automated Participation",
            desc: "Algorithm automatically selects the least-participating student to encourage inclusive discussions and eliminate the need for teachers to manage raised hands.",
          },
          {
            icon: "remote-control",
            badge: "Participation",
            title: "Clicker Control",
            desc: "Set up clickers so the 'next slide' button selects the next student, and the 'previous slide' button resets the queue, so teachers can manage participation remotely.",
          },
        ].map((feature) => (
          <FadeIn
            key={feature.title}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[var(--color-tertiary)] rounded-full">
              <i
                className={`ri-${feature.icon}-line ri-lg text-[var(--color-primary)]`}
              />
            </div>

            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              {feature.badge && (
                <span className="bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-xs px-2 py-1 rounded-full">
                  {feature.badge}
                </span>
              )}
            </div>
            <p className="text-gray-600">{feature.desc}</p>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
