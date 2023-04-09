import { React, useState } from "react";
import { Link } from "react-router-dom";
import spotify from "../assets/spotify.png";

function Sidebar() {
  const [activeLink, setActiveLink] = useState("For You");
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleMenuClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Sidebar for larger screens */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 h-screen">
        <div className="px-4 py-4 flex items-center justify-between">
          <img src={spotify} />
        </div>
        <nav className="flex-grow">
          <ul className="flex flex-col py-4 space-y-2">
            <li>
              <Link
                to={"/"}
                className={`px-6 py-3 text-lg font-medium ${
                  activeLink === "For You" ? "text-green-500" : "text-gray-400"
                } hover:text-green-500 cursor-pointer`}
                onClick={() => handleLinkClick("For You")}
              >
                For You
              </Link>
            </li>
            <li>
              <Link
                to={"/toptrackspage"}
                className={`px-6 py-2 text-lg font-medium ${
                  activeLink === "Top Tracks"
                    ? "text-green-500"
                    : "text-gray-400"
                } hover:text-green-500 cursor-pointer`}
                onClick={() => handleLinkClick("Top Tracks")}
              >
                Top Tracks
              </Link>
            </li>
            <li>
              <Link
                to={"/favoritespage"}
                className={`px-6 py-2 text-lg font-medium ${
                  activeLink === "Favorites"
                    ? "text-green-500"
                    : "text-gray-400"
                } hover:text-green-500 cursor-pointer`}
                onClick={() => handleLinkClick("Favorites")}
              >
                Favorites
              </Link>
            </li>
            <li>
              <Link
                to={"/recentlyplayedpage"}
                className={`px-6 py-2 text-lg font-medium ${
                  activeLink === "Recently Played"
                    ? "text-green-500"
                    : "text-gray-400"
                } hover:text-green-500 cursor-pointer`}
                onClick={() => handleLinkClick("Recently Played")}
              >
                Recently Played
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Menu button for smaller screens */}
      <div className="lg:hidden">
        <div className="px-4 py-4 flex items-center justify-between">
          <img src={spotify} />
          <button
            className="text-white hover:text-white focus:outline-none focus:text-white"
            aria-label="menu"
            onClick={handleMenuClick}
          >
            <svg viewBox="0 0 20 20" className="w-6 h-6 fill-current">
              <path
                fillRule="evenodd"
                d="M2 4.5A1.5 1.5 0 013.5 3h13A1.5 1.5 0 0118 4.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 4.5zm0 7A1.5 1.5 0 013.5 10h13a1.5 1.5 0 110 3h-13A1.5 1.5 0 012 11.5zm0 6a1.5 1.5 0 011.5-1.5h13a1.5 1.5 0 110 3h-13A1.5 1.5 0 012 17.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <nav className="pb-4">
            <ul className="flex flex-col py-4 ">
              <li>
                <Link
                  to={"/"}
                  className={`px-6 py-3 text-md font-medium flex ${
                    activeLink === "For You"
                      ? "text-green-500"
                      : "text-gray-400"
                  } hover:text-green-500 cursor-pointer`}
                  onClick={() => {
                    handleMenuClick();
                    handleLinkClick("For You");
                  }}
                >
                  For You
                </Link>
              </li>
              <li>
                <Link
                  to={"/toptrackspage"}
                  className={`px-6 py-2 text-md font-medium flex ${
                    activeLink === "Top Tracks"
                      ? "text-green-500"
                      : "text-gray-400"
                  } hover:text-green-500 cursor-pointer`}
                  onClick={() => {
                    handleMenuClick();
                    handleLinkClick("Top Tracks");
                  }}
                >
                  Top Tracks
                </Link>
              </li>
              <li>
                <Link
                  to={"/favoritespage"}
                  className={`px-6 py-2 text-md font-medium flex ${
                    activeLink === "Favorites"
                      ? "text-green-500"
                      : "text-gray-400"
                  } hover:text-green-500 cursor-pointer`}
                  onClick={() => {
                    handleMenuClick();
                    handleLinkClick("Favorites");
                  }}
                >
                  Favorites
                </Link>
              </li>
              <li>
                <Link
                  to={"/recentlyplayedpage"}
                  className={`px-6 py-1 text-md font-medium flex ${
                    activeLink === "Recently Played"
                      ? "text-green-500"
                      : "text-gray-400"
                  } hover:text-green-500 cursor-pointer`}
                  onClick={() => {
                    handleMenuClick();
                    handleLinkClick("Recently Played");
                  }}
                >
                  Recently Played
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </>
  );
}

export default Sidebar;
