import React from "react";
import Hero from "./Hero";
import Question from "./Question";
import Review from "./Review";
import Slider from "./Slider";
import Lorem from "./Lorem";
import Todo from "./Todo";
import Sidebar from "./Sidebar";
import { AppProvider } from "./context";
function App() {
  return (
    <>
      <main>
        <Hero />
      </main>
      <AppProvider>
        <Sidebar />
      </AppProvider>
      <main>
        <Lorem />
      </main>
      <main>
        <Todo />
      </main>
      <main>
        <section className="review-container">
          <div className="review-title">
            <h2>Our reviews</h2>
            <div className="underline"></div>
          </div>
          <Review />
        </section>
      </main>
      <main>
        <Question />
      </main>
      <main>
        <Slider />
      </main>
    </>
  );
}

export default App;
