/*
    El componente Counter es un contador de clics, aumenta en uno cuando se hace clic en el boton + 
        y disminuye uno cuando se clickea el boton -, el boton "reset" es para regresar el valor a 0

    *Realiza las funciones necesarias para hacer funcionar el componente como se describe
    *Crea un componente igual que el que se describe haciendo uso de Redux
    *Crea un componente igual que el que se describe haciendo uso de useReducer
    *Utiliza diferentes rutas para los tres componentes
*/

import React, {useReducer} from 'react'

const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT': return state + 1
        case 'DECREMENT': return state - 1
        case 'RESET': return 0
        default: return state
    }
}

const Counter = () => {
    const [counter, setCounter] = useReducer(reducer, 0)
    const increment = () => setCounter({type: 'INCREMENT'})
    const decrement = () => setCounter({type: 'DECREMENT'})
    const reset = () => setCounter({type: 'RESET'})
    return (
        <div style={styles.container}>
            <h3 style={{...styles.resetButton}}>Counter</h3>

            <button onClick={increment}>+</button>
            <span style={styles.count}>{counter}</span>
            <button onClick={decrement}>-</button>

            <button style={styles.resetButton} onClick={reset}>Reset</button>
        </div>
    )
}

const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        gap: '0.25em'
    },
    resetButton: {
        gridColumnEnd: 'span 3'
    },
    count: {
        alignSelf: 'center',
        justifySelf: 'center'
    }
}

export default Counter;