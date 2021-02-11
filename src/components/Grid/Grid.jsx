import React from 'react'
import styles from './Grid.module.scss'

import Center from '../Center/Center'

const Grid = () => (
	<div className={styles.grid}>
		<div className={styles.side}></div>
		<Center className={styles.center}></Center>
		<div className={styles.item}></div>
		<div className={styles.item}></div>
	</div>
)

export default Grid
