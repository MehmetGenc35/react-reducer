import { COUNTER_UP, COUNTER_DOWN, COUNTER_RESET } from "../types";


//ACTION GENERATOR             //ACTION
export const counterUp = () => ({ type: COUNTER_UP}) 

export const counterDown = () => ({ type: COUNTER_DOWN})

export const counterReset = (value) => ({type: COUNTER_RESET, payload:value})

