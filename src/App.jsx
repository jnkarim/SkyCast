import React from "react";
import Weather from "./components/Weather.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        {/* Background Gradient */}
        <div className="fixed top-0 left-0 z-[-2] h-screen w-screen bg-neutral-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center min-h-screen">
          {/* Title */}
          <p className="text-4xl text-center font-bold mb-6 my-8 text-blue-400 font-curly">SkyCast</p>

          {/* Middle Border */}
          <div className="w-2/4 border-t border-black mb-8"></div>

          {/* Content */}
          <div className="container mx-auto px-4">
            <Weather />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
