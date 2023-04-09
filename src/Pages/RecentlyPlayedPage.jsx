import Search from "../components/Search";
import PlaylistSongs from "../PlaylistSongs";

function RecentlyPlayedPage() {
  return (
    <div>
      <h1 className="text-4xl ml-4 hidden lg:block">Recently Played</h1>
      <Search />
      <PlaylistSongs playlistId={4} />
    </div>
  );
}

export default RecentlyPlayedPage;
