
import { dancingFont } from "@/font"
import styles from "./Portfolio.module.css"
import Project from "./project/Projects"

export default function Portfolio(){
    return(
        <>
        <section id="portfo" className={styles.port}>
            <h2 className={dancingFont.className}>Projects I Made</h2>
            <p>I Developed many projects like simple-calculator, calucator,Countdown-Timer.<br/> 
               I like much  to build Resume-builder,Figma-Templete Website and Ecommerce Website.</p>
     <div className={styles.work}>
     <Project/>
     </div>
        </section>
        </>

)

}

        




    
     





