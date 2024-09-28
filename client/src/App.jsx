import './i18n';
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AllNews from "./components/AllNews";
import TopHeadlines from "./components/TopHeadlines";
import CountryNews from "./components/CountryNews";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [showVideo, setShowVideo] = useState(false); // State to control YouTube video modal

  const handleShowVideo = () => {
    setShowVideo(true); // Show the video when breaking news symbol is clicked
  };

  return (
    <div className="w-full">
      <BrowserRouter>
        <Header />

        {/* Breaking News Symbol */}
        <div className="breaking-news-container">
          <div
            onClick={handleShowVideo}
            className="breaking-news-symbol cursor-pointer"
          >
            Breaking News
          </div>
        </div>

        {/* YouTube Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/peO7CdDoVZ8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => setShowVideo(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Routes */}
        <div className="news-content-container">
          <Routes>
            <Route path="/" element={<AllNews />} />
            <Route path="/top-headlines/:category" element={<TopHeadlines />} />
            <Route path="/country/:iso" element={<CountryNews />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
