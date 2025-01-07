"use client"
import React from 'react'
import styles from "./HeroSection.module.css"
import Button from '../button/Button'
import { FaFacebookF } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import { Typewriter } from 'react-simple-typewriter'
export default function HeroSection(){
    return (
        <>
          <section id="home" className={styles.herosec}>
               <h2 >Hey ! I m{" "}
                 <span>U</span>zma <span> K</span>han {" "} 

                 
             <br /> <span>I </span> m{" "}
             
                    <Typewriter
                 words={[' front end developer','UI UX designner']}
                 loop={Infinity}         
                cursor={true} 
                cursorStyle={'/'}
                typeSpeed={80} 
                deleteSpeed={50} 
                delaySpeed={1500} 

               /> 
                                    
                                </h2>
               <p>I can build user interface for website and applications with  {' '}
                 <span>React JS</span> and  {' '}
                 <span>Next JS</span>
                 <br/> 
                 I like web development.
                
                    </p>
                 <Button text={"Hire Me"}/>
                 {/* -------------------------------- */}
                 <div className={styles.icons}>
                 <FaFacebookF size={30}  color={"black"}/> 
                 <FaSquareTwitter size={30} color={"black"}/>
                 <FaSquareInstagram size={30}  color={"black"}/>
                 <FaWhatsapp size={30}  color={"black"}/>
                 <FaTelegramPlane size={30}  color={"black"}/>
                 </div>
              {/* -------------------------------------------------------------------------- */}
                 <div className={styles.bottom}>
                    <Image src={"/images/behance.png"} alt={"pic"} width={156} height={156}></Image>
                    <Image src={"/images/dribble.png"} alt={"pic"} width={156} height={156}></Image>
                    <Image src={"/images/freelance.png"} alt={"pic"} width={156} height={156}></Image>
                    <Image src={"/images/upwork.png"} alt={"pic"} width={156} height={156}></Image>
                 </div>
            </section>

        </>
    )

}



                 












