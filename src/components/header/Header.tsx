"use client"
import { dancingFont } from '@/font'
import styles from './Header.module.css'
import Link from 'next/link';
import { TiThMenu } from 'react-icons/ti';
import { useState } from 'react';

export default function Header(){

    const [isOpen, setisOpen] = useState()

    return (
        <>
         <header className={styles.header}>
            <nav className={styles.nav}>
                <TiThMenu size={30} className={styles.menu} onClick={()=>{setisOpen(isOpen)}} />
                
                { isOpen == true ?  ( <ul className={`${styles.navul} ${styles.active}`}>

                    <li><Link href="#/" >HOME</Link></li>
                    <li><Link href="#about" >ABOUT</Link></li>
                    <li><Link href="#portfo" >PORTFOLIO</Link></li>
                    <li><Link href="#pro" >SERVICES</Link></li>
                    <li><Link href="#test" >TESTIMONAL</Link></li>
                    <li><Link href="#cont" >CONTACT</Link></li>
                </ul>)    : 

                   ( <ul className={styles.navul}>

                    <li><Link href="#/" >HOME</Link></li>
                    <li><Link href="#about" >ABOUT</Link></li>
                    <li><Link href="#portfo" >PORTFOLIO</Link></li>
                    <li><Link href="#pro" >SERVICES</Link></li>
                    <li><Link href="#test" >TESTIMONAL</Link></li>
                    <li><Link href="#cont" >CONTACT</Link></li>
                </ul>)
                    }
                <h1 className={ dancingFont.className}><span>U</span>zma<span> K</span>HAN</h1>
            </nav>
         </header>
        </>
    )
}
           

        



