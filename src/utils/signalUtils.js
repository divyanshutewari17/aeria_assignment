export const SIGNAL_STATES = {
    GREEN: "Green",
    YELLOW: "Yellow",
    RED: "Red"
}

export const DEFAULT_TIMINGS = {
    green: 30,
    yellow: 5
}

export const getNextState = (currentState)=>{
    switch(currentState){
        case SIGNAL_STATES.GREEN:
            return SIGNAL_STATES.YELLOW
        case SIGNAL_STATES.YELLOW:
            return SIGNAL_STATES.RED
        case SIGNAL_STATES.RED:
            return SIGNAL_STATES.GREEN
        default:
            return SIGNAL_STATES.RED
    }
}