import "./App.css";
import { useEffect, useContext } from "react";
import Sidebar from "./components/Sidebar";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import ForYouPage from "./Pages/ForYouPage";
import TopTracks from "./Pages/TopTracksPage";
import RecentlyPlayedPage from "./Pages/RecentlyPlayedPage";
import FavoritesPage from "./Pages/FavoritesPage";
import { SongContext } from "./SongContext";

function App() {
  const navigate = useNavigate();
  const { background } = useContext(SongContext);

  useEffect(() => {
    if (window.location.pathname !== "/") {
      navigate("/"); 
      
    }
  }, []);

  return (
    <>
      <div
        className="flex lg:flex-row min-h-screen"
        style={{ backgroundColor: background ? background : "#2d3748" }}
      >
        <div className="w-1/6">
          <Sidebar />
        </div>
        <div className="flex-1 lg:h-screen text-white py-5 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<ForYouPage />} />
              <Route path="/toptrackspage" element={<TopTracks />} />
              <Route
                path="/recentlyplayedpage"
                element={<RecentlyPlayedPage />}
              />
              <Route path="/favoritespage" element={<FavoritesPage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
