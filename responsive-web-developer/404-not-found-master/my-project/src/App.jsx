import { useState } from "react";
import scarecrow from "../../Scarecrow.png";

function App() {
  return (
    <main className="grid max-h-screen font-Inconsolata mx-6">
      <header className="font-bold text-2xl uppercase mt-5">
        <h2>404 Not Found</h2>
      </header>

      <section className="flex justify-center items-center my-24">
        <div className="flex flex-col justify-center items-center md:flex-row">
          <div className="h-[238px] w-[286px] md:mr-[119px] md:h-[447px] md:w-[539px]">
            <img src={scarecrow} alt="" />
          </div>

          <div className="my-[60px] mx-14">
            <h1 className="font-bold text-5xl leading-[71px] mb-7">
              I have bad news for you
            </h1>
            <p className="text-[#4f4f4f] mb-16">
              The page you are looking for might be removed or is temporarily
              unavailable
            </p>
            <button className="bg-black text-white py-4 px-8">
              Back To Homepage
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
