import React from "react";
import FadeIn from "./FadeIn"; // Ensure this component exists in your project

const version = "2.0.0";
const windowsDownload = `https://github.com/eobrien2002/Dialogix-Releases/releases/download/v${version}/Dialogix-Setup-${version}.exe`;
const macDownload = `https://github.com/eobrien2002/Dialogix-Releases/releases/download/v${version}/Dialogix-${version}.dmg`;

export default function Download() {
  return (
    <section id="download" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--color-primary)]">
            Download Dialogix
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Windows Download */}
          <FadeIn className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[var(--color-tertiary)] rounded-full">
              <i className="ri-windows-line ri-xl text-[var(--color-primary)]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Download for Windows</h3>
            <p className="text-gray-600 mb-4">
              Compatible with Windows 10 and above.
            </p>
            <a
              id="windows-download"
              href={windowsDownload}
              className="inline-block px-5 py-2 rounded-full bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary)]/80 transition-colors"
            >
              Download
            </a>
          </FadeIn>

          {/* MacOS Download */}
          <FadeIn className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[var(--color-tertiary)] rounded-full">
              <i className="ri-mac-line ri-xl text-[var(--color-primary)]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Download for macOS</h3>
            <p className="text-gray-600 mb-4">
              Compatible with macOS 11.0 (Big Sur) and above.
            </p>
            <a
              id="macos-download"
              href={macDownload}
              className="inline-block px-5 py-2 rounded-full bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary)]/80 transition-colors"
            >
              Download
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
