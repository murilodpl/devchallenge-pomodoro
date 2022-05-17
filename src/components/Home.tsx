import arrowDown from "../assets/img/arrow-down.svg"
import arrowUp from "../assets/img/arrow-up.svg"

export default function Home(props: any) {
    // Functions
    function runTimer() {
        props.setIsRunning(true)
    }

    function changeValue(e: any) {
        const { value, name } = e.target

        if (value == "+") {
            props.setTimer((prevTimer: any) => ({
                ...prevTimer,
                [name]: props.timer[name] + 1
            }))
        } else if (props.timer[name] > 0) {
            props.setTimer((prevTimer: any) => ({
                ...prevTimer,
                [name]: props.timer[name] - 1
            }))
        }
    }


    return (
        <section className="home">
            <h1>Pomodoro</h1>

            <div className="configTimer">
                <div className="config">
                    <div>
                        <button type="button" name="workTime" value="+" onClick={changeValue}>
                            <img width="36px" height="36px" src={arrowUp} alt="Arrow Up" />
                        </button>
                        <button type="button" name="workTime" value="-" onClick={changeValue}>
                            <img width="36px" height="36px" src={arrowDown} alt="Arrow Down" />
                        </button>
                    </div>

                    <div>
                        <span>{props.timer.workTime}</span>
                        <p>Trabalho</p>
                    </div>
                </div>
            </div>

            <button type="button" onClick={runTimer}>Continuar</button>
        </section>
    )
}