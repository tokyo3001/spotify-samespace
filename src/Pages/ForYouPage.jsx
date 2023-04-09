import Search from "../components/Search";

import PlaylistSongs from "../PlaylistSongs";

function ForYouPage() {
  return (
    <div>
      <h1 className="text-4xl ml-9 hidden lg:block">For You</h1>
      <Search />
      <PlaylistSongs playlistId={1} />
    </div>
  );
}

export default ForYouPage;
