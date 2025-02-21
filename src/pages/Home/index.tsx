import AnimeList from "@components/AnimeList";
import Filter from "@components/Filter";
import SearchBar from "@components/SearchBar";

const Home: React.FC = () => {

  return (
    <>
      <Filter />
      <SearchBar />
      <AnimeList />
    </>
  );
};

export default Home;
