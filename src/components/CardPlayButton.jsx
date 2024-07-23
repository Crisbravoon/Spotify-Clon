
import { Pause, Play } from "./Player"
import { usePLayerStore } from "@/store/playerStore";

export function CardPlayButton({ id }) {

    const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePLayerStore(state => state);

    const handleClick = () => {
        setCurrentMusic({
            playlist: {
                id
            }
        });
        setIsPlaying(!isPlaying);
    };

    const isPlayingPlayList = isPlaying && currentMusic?.playlist.id == id;

    return (
        <button
            className="card-play-button rounded-full p-3 bg-green-500"
            onClick={handleClick}>

            {isPlayingPlayList ? <Pause /> : <Play />}
        </button>
    )
};
