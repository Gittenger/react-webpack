import React from 'react'
import styles from './Grid.module.scss'

import Center from '../Center/Center'

const Grid = () => (
	<div className={styles.grid}>
		<div className={styles.side}></div>
		<Center className={styles.center}></Center>
		<div className={`${styles.item} ${styles.itemLeft}`}></div>
		<div className={`${styles.item} ${styles.itemRight}`}></div>
		<div className={styles.bottom}>BOTTOM CONTENT</div>
	</div>
)

export default Grid
