import Search from "../components/Search";
import PlaylistSongs from "../PlaylistSongs";

function TopTracks() {
  return (
    <div>
      <h1 className="text-4xl ml-4 hidden lg:block">Top Tracks</h1>
      <Search />
      <PlaylistSongs playlistId={2} />
    </div>
  );
}

export default TopTracks;
