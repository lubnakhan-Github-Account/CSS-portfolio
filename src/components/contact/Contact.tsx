
import { dancingFont } from "@/font";
import styles from "./Contact.module.css";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
// import { textarea } from "framer-motion/client";
export default function ContactUs(){
    return(
        <>
         <section id="cont" className={styles.contact}>
            <h2 className={dancingFont.className}>Contact Me</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Maxime velit repellat porro? Nihil,<br/> assumenda repellat pegalo kiarew .</p>
                 <div className={styles.main}>
                    <div className={styles.left}>
                        <div className={styles.icon} >
                        <IoIosMail size={24} color={"var(--logo-color)"} />
                        <div className={styles.text}>
                            <h4>Hava a Question</h4>
                            <h4>I am Here TO Help You</h4>
                            <h4>Email me at lubnakhan@gmail.com</h4>
                        </div>
                        </div>
                        <div className={styles.icon}>
                        <FaLocationDot size={24} color={"var(--logo-color)"} />
                        <div className={styles.text}>
                            <h4>Current Location </h4>
                            <h4>Karachi Pakistan</h4>
                            <h4>Serving Client Worldwide</h4>
                        </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <form>
                            <div className={styles.inputone}>
                                <input type="text" placeholder="Your Name" className={styles.inputall}/>
                                <input type="text" placeholder="Your Email" className={styles.inputall}/>

                            </div>
                            <input type="text" placeholder="Subject" className={styles.inputall}/>
                            <textarea placeholder="message" className={styles.inputall} style={{height:"224px"}}></textarea>
                            <input type="submit" className={styles.inputbtn} value={"send message"}></input>
                        </form>
                    </div>
                 </div>
         </section>

        </>
    )
}




