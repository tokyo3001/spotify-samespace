import Search from "../components/Search";
import PlaylistSongs from "../PlaylistSongs";

function FavoritesPage() {
  return (
    <div>
      <h1 className="text-4xl ml-4 hidden lg:block">Favorites</h1>
      <Search />
      <PlaylistSongs playlistId={3} />
    </div>
  );
}

export default FavoritesPage;
