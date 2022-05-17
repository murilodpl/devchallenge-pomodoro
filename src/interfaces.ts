import { SetStateAction } from "react";

interface IPropsTimer {
    timer: { workTime: number, breakTime: number, repeatTime: number };
    setTimer: any;
}

export default IPropsTimer;