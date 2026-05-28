import { useRef, useState } from 'react'

export default function RadioPlayer() {

  const audioRef = useRef(null)

  const [playing, setPlaying] = useState(false)

  // STREAM TEST
  const streamUrl =
    'https://stream-ssl.zeno.fm/w4gz6pbzv8uvv'

  const toggleRadio = () => {

    if (!playing) {

      audioRef.current.play()
      setPlaying(true)

    } else {

      audioRef.current.pause()
      setPlaying(false)

    }

  }

  return (

    <section className="radio-player">

      <div className="player-card">

        <div className="live-badge">
          🔴 EN DIRECT
        </div>

        <div className="player-cover">
          🎧
        </div>

        <h2>GOGO FM LIVE</h2>

        <p>
          La radio digitale africaine premium
        </p>

        <div className="player-controls">

          <button
            className="play-btn"
            onClick={toggleRadio}
          >
            {playing ? '⏸' : '▶'}
          </button>

        </div>

        <div className="equalizer">

          <span></span>
          <span></span>
          <span></span>
          <span></span>

        </div>

        <audio
          ref={audioRef}
          src={streamUrl}
        />

      </div>

    </section>

  )
}