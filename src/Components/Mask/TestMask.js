
import {useRef} from 'react'
import Mask from '../Mask'

const TestMask = () => {
	
	const mask = useRef()
	const open = () => {
		mask.current.open()
	}
	const close = () => {
		mask.current.close()
	}

	const size = {
		s: {
			width: '100vw',
			height: '100vh'
		},
		l: {
			width: '100vw',
			height: '100vh'
		}
	}

	return (
		<div>
			<h1>Bienvenido</h1>
			<button onClick={open}>Abrir la mascara</button>
			<Mask ref={mask} size={size} >
				<h1>Mi Mascara</h1>
				<button onClick={close}>cerrar</button>
			</Mask>
		</div>
	)
}

export default TestMask