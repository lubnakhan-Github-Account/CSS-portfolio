
import Image from "next/image"
import styles from "./TestimonialCd.module.css"
import { testimonials } from "@/constant/testimonial"
export default function TestimonialCard(){
    return(  
        
         <>

            {testimonials.map((item,index)=>{return(



                <div className={styles.ecard} key={index}>
                <div className={styles.cardimg}>
                    <Image src={item.src} alt={"people"} width={128} height={150}></Image>
                </div>
                <h3>{item.text}</h3>
                <p>{item.para}</p>
                <p>{item.detail}</p>
            </div>
        )}) }
        </>
)
}





