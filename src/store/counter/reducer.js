import {counterInitialState} from "./initial-state"
import {COUNTER_UP, COUNTER_DOWN, COUNTER_RESET} from "../types"
//state ona buradan gelecek
//dispatch ile çağırırken sadece action parametresini vereceğiz
//reduce 3 farklı şekilde çalışabilir
//if else yapısıyla da yapılabilir ben değişiklik olsun diye AI ın tavsiyesi ile switch kullandım
//string ifadelerle çalışmak hataya açık bir durum olduğu için types kullanıyoruz

export const counterReducer = (state = counterInitialState, action) => {
    //bu kısımda state güncellenir dönen değer aynen state aktarılır
    switch (action.type) {
        case COUNTER_UP:
            return {
                ...state,
                counter: state.counter + 1
            }
        case COUNTER_DOWN:
        if (state.counter > 0) {
        return {
            ...state,
            counter: state.counter - 1
        };}
        return state;
        case COUNTER_RESET:
            return {
                ...state,
                counter: action.payload
                //data lazımsa action içinde payload ile gönderiyoruz
                //0 gelirse sıfırlayacak,başka bir değer gelirse o değeri alacak
            }
        default:
            return state
            //hiç bir işlem yapılmazsa  bir tane return state yapıp mevcut state korunur
            //return state yapılmazsa ve eğer yanlış gönderilen bir değer olursa state null olur
    }
    
}


/*
dispatch({type:COUNTER_UP})
dispatch({type:COUNTER_DOWN})
dispatch({type:COUNTER_RESET, payload:0})*/