import Image from "next/image";
import styles from  "./ServicesCd.module.css"
import { ServicesCd } from "@/constant/ServicesCd";
export default function ServicesCds(){
    return(
        <>
        {ServicesCd.map( (item, index) =>{return(
        <div className={styles.carddiv} key={index}>
        <div className={styles.scard}>
            <Image src={item.src} alt={"img"} width={60} height={60}></Image>
        </div>
        <h2>{item.title}</h2>
        <p>{item.para}</p>
    </div>
        )





        })}
          




        </>
    )
}

