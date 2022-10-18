export default function Osito({ yesOption }) {

    const noOption = (e) => {
        const posY = Math.random() * 100
        const posX = Math.random() * 100

        e.target.style.position = 'absolute'
        e.target.style.top = `${posY}%`
        e.target.style.left = `${posX}%`
    }

    return (
        <div>
            <p>¿Quieres ser mi novia?</p>
            <div className="botones">
                <button onClick={() => yesOption(true)}>Si</button>
                <button onMouseOver={noOption}>No</button>
            </div>
        </div>
    )

}