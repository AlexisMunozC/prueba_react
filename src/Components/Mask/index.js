/*
    *El componente Mask debe abrirse desde un componente externo
    *Debe renderizarse en el body del html
    *Debe ser obligatorio que se defina la prop "size", puede recibir las props adicionales que sean necesarias
    *El contenedor Mask puede mostrar cualquier contenido que se le pase como hijo
*/
import React, { forwardRef, useState, useImperativeHandle } from 'react'
import {createPortal} from 'react-dom'
import {shape, string} from 'prop-types'

const Mask = forwardRef(({children, size=styles.size}, ref) => {

    const [isOpen, setIsOpen] = useState(false)    

    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close: () => setIsOpen(false)
    }))

    if(!isOpen) return null    
    return createPortal(
        <div style={{...styles.container, ...size.s}}>
            {children}
        </div>,
        document.body
    )
})

const styles = {
    size: {
        s: {
            width: '70vw',
            height: '60vh'
        },
        l: {
            width: '90vw',
            height: '80vh'
        },
    },
    container: {
        margin: 'auto',
        top: 0,
        left: 0,
        background: '#000000aa',
        position: 'fixed',
        zIndex: 1000,
        padding: '20px',
    }
}

Mask.propTypes = {
    size: shape({
        s: shape({
            width: string.isRequired,
            height: string.isRequired
        }).isRequired,
        l: shape({
            width: string.isRequired,
            height: string.isRequired
        }).isRequired
    }).isRequired,
}

export default Mask