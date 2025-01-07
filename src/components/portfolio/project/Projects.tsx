"use client"
import Image from "next/image";
import styles from "./Project.module.css"
import {ProjectData} from "@/constant/ProjectData"
import {motion} from "framer-motion"
export default function Project(){
    return(
        <>
        {ProjectData.map((item)=>{return(

          <motion.div className={styles.workcard} key={item.id}
           initial={{opacity:0 , scale:0}}
           whileInView={{opacity:1, scale:1}}
           transition={{duration: 1}}
          
          
          >
          <div className={styles.cardimg}>
              <Image src={item.src} alt={"pic"} width={407} height={407}
              className={styles.img}/>
          </div>
          <div className={styles.cardtext}>{item.text}</div>
      </motion.div>

)})}

        </>
    )
}
         
        







