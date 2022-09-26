import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';


const PlayPause = ({isPlaying, activeSong, song, handlePause, handlePlay}) => (isPlaying && activeSong?.
  title === song.title ? (
  <FaPauseCircle
  size={35}
    onClick={handlePause}
    className="text-4xl text-white cursor-pointer"
    />

) : ( 
  <FaPlayCircle
  size={35}
    onClick={handlePlay}
    className="text-4xl text-white cursor-pointer"
    />
)
)

export default PlayPause;
