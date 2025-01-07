import { dancingFont } from "@/font";
import styles from "./Services-section.module.css";
import ServicesCd from "./services-cd/ServicesCd";

export default function Services(){
    return(
        <>
        <section id="pro" className={styles.service}>
            <h2 className={dancingFont.className}> My SERVICES</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere deleniti
                <br/>
                 perspiciatis nisi animi nam velit dolorum quae fugit asperiores numquam!</p>

                 <div className={styles.sercard}>
                   <ServicesCd/>
                 </div>





        </section>









        </>
    )
}
