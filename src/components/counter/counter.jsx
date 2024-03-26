

import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { TfiPlus, TfiMinus, TfiReload } from "react-icons/tfi";
import { useStore } from "../../store";
import {
    counterDown,
    counterReset,
    counterUp,
} from "../../store/counter/actions";


const Counter = () => {
    const { stateCounter, dispatchCounter } = useStore();
    const { counter } = stateCounter;

    
    return (
        <ButtonGroup aria-label="Basic example">
            <Button
                variant="secondary"
                onClick={() => dispatchCounter(counterDown())}
            >
                <TfiMinus />
            </Button>
            <Button variant="secondary">{counter}</Button>
            <Button
                variant="secondary"
                onClick={() => dispatchCounter(counterUp())}
            >
                <TfiPlus />
            </Button>
            <Button
                variant="secondary"
                onClick={() => dispatchCounter(counterReset(0))}
            >
                <TfiReload />
            </Button>
        </ButtonGroup>
    );
};
export default Counter;
