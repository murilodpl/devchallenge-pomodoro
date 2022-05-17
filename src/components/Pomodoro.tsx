export default function Pomodoro(props: any) {
    // Functions
    function runTimer() {
        props.setIsRunning(false)
    }

    return (
        <>
            <h1>Pomodoro Running</h1>
            <button type="button" onClick={runTimer}>Início</button>
        </>
    )
}