export default function Pomodoro(props: any) {
    // Functions
    function runTimer() {
        props.setIsRunning(false)
    }

    return (
        <section className="pomodoro">
            <nav>
                <h1>Pomodoro</h1>
                <button className="homeBtn" type="button" onClick={runTimer}>Início</button>
            </nav>
        </section>
    )
}