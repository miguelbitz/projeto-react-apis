import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faPlay, faPause } from "@fortawesome/free-solid-svg-icons"
import { Player } from './AudioPlayerStyle'


export const AudioPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div>
      <audio ref={audioRef} src={src} />
      <Player onClick={togglePlay}>{isPlaying ?
        <>
          <FontAwesomeIcon icon={faMusic} size="xl" beat style={{ color: "#ffffff", }} />
          <FontAwesomeIcon icon={faPause} size="xl" style={{ color: "#ffffff", }} />
        </>
        :
        <>
          <FontAwesomeIcon icon={faMusic} size="xl" style={{ color: "#ffffff", }} />
          <FontAwesomeIcon icon={faPlay} size="xl" style={{ color: "#ffffff", }} />
        </>
      }
      </Player>

    </div>
  )
}
