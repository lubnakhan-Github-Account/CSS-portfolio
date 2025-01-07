"use client"
import styles from "./BottomImages.module.css"
import Image from "next/image"
import {motion, } from "framer-motion"



// parent object
const contanierVarients ={
    hidden:{},
    show:{
      transition:{
        staggerChildren:0.2
      }
    }
}
// childern varient
const itemVariants ={
    hidden:{opacity:0, y:20},
    show:{opacity:1, y :0}
}







export default function Bottom(){
    return(
        <>
         <motion.section className={styles.bottomimg}
         variants = {contanierVarients}
         initial= "hidden"
         whileInView="show"
         
         >
       <motion.div variants={itemVariants}><Image src={"/images/html.png"} alt={"icon"} width={96} height={96}></Image></motion.div>
       <motion.div variants={itemVariants}><Image src={"/images/css.png"} alt={"icon"} width={96} height={96}></Image></motion.div>
       <motion.div variants={itemVariants}><Image src={"/images/next.png"} alt={"icon"} width={96} height={96}></Image></motion.div>
       <motion.div variants={itemVariants}><Image src={"/images/git.png"} alt={"icon"} width={96} height={96}></Image></motion.div>
       <motion.div variants={itemVariants}><Image src={"/images/typescript.png"} alt={"icon"} width={96} height={96}></Image></motion.div>
       <motion.div variants={itemVariants}><Image src={"/images/react.png"} alt={"icon"} width={96} height={96}></Image></motion.div>
      <motion.div variants={itemVariants}> <Image src={"/images/figma.png"} alt={"icon"} width={96} height={96}></Image></motion.div>
      <motion.div variants={itemVariants}><Image src={"/images/node.png"} alt={"icon"} width={96} height={96}></Image></motion.div>
              

            <div>

            </div>

         </motion.section>

        </>
    )
}





