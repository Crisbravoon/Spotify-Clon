
import { Pause, Play } from "./Player"
import { usePlayerStore } from "@/store/playerStore";

export function CardPlayButton({ id }) {

    const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore(state => state);

    const isPlayingPlayList = isPlaying && currentMusic?.playlist.id == id;

    const handleClick = () => {

        //Parará la musica 
        if (isPlayingPlayList) {
            setIsPlaying(false);
            return
        }

        //Promise
        fetch(`/api/get-info-playlist.json?id=${id}`)
        .then(res => res.json())
        .then(data => {
          const { songs, playlist } = data
  
          setIsPlaying(true)
          setCurrentMusic({ songs, playlist, song: songs[0] })
        })
    };

    return (
        <button
            className="card-play-button rounded-full p-3 bg-green-500"
            onClick={handleClick}>

            {isPlayingPlayList ? <Pause /> : <Play />}
        </button>
    )
};
