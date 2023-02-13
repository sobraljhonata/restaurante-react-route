import { Outlet } from 'react-router-dom'
import styles from './TemplateIndex.module.scss'
import StylesTema from 'styles/Tema.module.scss'
import React from 'react'

export default function TemplateIndex({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <div className={StylesTema.container}>
        <Outlet />
        {children}
      </div>
    </>
  )
}
