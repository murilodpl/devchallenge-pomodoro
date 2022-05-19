import arrowDown from "../assets/img/arrow-down.svg"
import arrowUp from "../assets/img/arrow-up.svg"

export default function Home(props: any) {
    // Functions
    function runTimer() {
        props.setIsRunning(true)
    }

    function changeValue(e: any) {
        const config = e.target.getAttribute("data-config")
        const op = e.target.getAttribute("data-op")

        if (op == "+") {
            props.setTimer((prevTimer: any) => ({
                ...prevTimer,
                [config]: props.timer[config] + 1
            }))
        } else if (props.timer[config] > 0) {
            props.setTimer((prevTimer: any) => ({
                ...prevTimer,
                [config]: props.timer[config] - 1
            }))
        }
    }

    return (
        <section className="home">
            <h1>Pomodoro</h1>

            <div className="configTimer">
                <div className="config">
                    <div>
                        <button onClick={changeValue} type="button" data-config="workTime" data-op="+">
                            <img width="36px" height="36px" src={arrowUp} alt="Arrow Up" data-config="workTime" data-op="+" />
                        </button>
                        <button onClick={changeValue} type="button" data-config="workTime" data-op="-">
                            <img width="36px" height="36px" src={arrowDown} alt="Arrow Down" data-config="workTime" data-op="-" />
                        </button>
                    </div>

                    <div>
                        <span>{props.timer.workTime}</span>
                        <p>Trabalho</p>
                    </div>
                </div>

                <div className="config">
                    <div>
                        <button onClick={changeValue} type="button" data-config="breakTime" data-op="+">
                            <img width="36px" height="36px" src={arrowUp} alt="Arrow Up" data-config="breakTime" data-op="+" />
                        </button>
                        <button onClick={changeValue} type="button" data-config="breakTime" data-op="-">
                            <img width="36px" height="36px" src={arrowDown} alt="Arrow Down" data-config="breakTime" data-op="-" />
                        </button>
                    </div>

                    <div>
                        <span>{props.timer.breakTime}</span>
                        <p>Pausa</p>
                    </div>
                </div>

                <div className="config">
                    <div>
                        <button onClick={changeValue} type="button" data-config="repeatTime" data-op="+">
                            <img width="36px" height="36px" src={arrowUp} alt="Arrow Up" data-config="repeatTime" data-op="+" />
                        </button>
                        <button onClick={changeValue} type="button" data-config="repeatTime" data-op="-">
                            <img width="36px" height="36px" src={arrowDown} alt="Arrow Down" data-config="repeatTime" data-op="-" />
                        </button>
                    </div>

                    <div>
                        <span>{props.timer.repeatTime}</span>
                        <p>Sessões</p>
                    </div>
                </div>
            </div>

            <button className="runBtn" type="button" onClick={runTimer}>Continuar</button>
        </section>
    )
}