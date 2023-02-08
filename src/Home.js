
import Inputs from "./components/Inputs";
import SongList from "./components/SongsList";
import useFetch from "./components/useFetch";

const Home = () => {
    const { data: songs, isPending, error } = useFetch('http://localhost:8000/songs');

    
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <Inputs />
            {songs && <SongList songs={songs} />}
        </div>
    );
}

export default Home;
