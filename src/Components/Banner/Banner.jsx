import React from "react";

export default function Banner() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-base-100">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-base-content">
          We Build <br />
          <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>

        {/* Description */}
        <p className="mt-6 text-base md:text-lg text-base-content/70">
          At <span className="font-semibold">HERO.IO</span>, we craft innovative
          apps designed to make everyday life simpler, smarter, and more
          exciting. Our goal is to turn your ideas into digital experiences that
          truly make an impact.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline gap-2"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-6"
            />
            Google Play
          </a>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline gap-2"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="App Store"
              className="h-5"
            />
            App Store
          </a>
        </div>
      </div>
    </section>
  );
}
