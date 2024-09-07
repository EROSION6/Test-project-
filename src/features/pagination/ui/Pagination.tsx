import { NAVIGATION } from '@/shared/constants/navigation'
import { useState } from 'react'
import styles from './styles.module.css'

const Pagination = () => {
	const [isActive, setIsActive] = useState(0)
	return (
		<nav>
			{NAVIGATION.map((link, index) => {
				const isActiveLink = isActive === index
				return (
					<a
						key={index}
						href={link.href}
						className={isActiveLink ? styles.active : ''}
						onClick={() => setIsActive(index)}
					>
						{link.label}
					</a>
				)
			})}
		</nav>
	)
}

export default Pagination
