"use client"
import { dancingFont } from "@/font"
import styles from "./testimonial.module.css"
import useEmblaCarousel from "embla-carousel-react"
import TestimonialCard from "./testimonial-card/TestimonialCd"
export default function Testimonials(){
    const [emblaref] =useEmblaCarousel()
    return(
        <>
    <section id="test" className={styles.testimonials}>
     <h2 className={dancingFont.className}>What Othar People Say</h2>

    <div className={styles.embla} ref={emblaref}>
        <div className={styles.embla_container} >

          <TestimonialCard/>
        </div>
    </div>
    </section>

        </>
    )
}










