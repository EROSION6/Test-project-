import React from 'react'
import styles from './styles.module.css'

interface IButton {
	children: React.ReactNode
}

const Button = ({ children, ...props }: IButton) => {
	return (
		<button {...props} className={styles.btn}>
			{children}
		</button>
	)
}

export default Button
