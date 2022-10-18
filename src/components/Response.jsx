import { useEffect } from 'react'

export default function Response({ changeState }) {
  useEffect(() => {
    document.body.style.backgroundImage = "url('./img/gifBackground.gif')"
    return () => document.body.style.backgroundImage = ""
  }, [])

  return (
    <>
        <div className="yRes">
            <h1>💖Eso pensé💖</h1>
            <div className="images">
                <img width="300px" src='./img/corazones.webp' alt="Amor"/>
                <img width="200px" src="./img/osito.webp" alt="Amor"/>
                <img width="300px" src="./img/amor.webp" alt="Amor"/>
            </div>
        </div>
        <button onClick={() => changeState(false)}>Regresar</button>
    </>
  )
}

