import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import style from "./backLink.module.css"

export default function BackLink(){
    return<>
    
    <Link href={'/'} className={`${style.color} ${style.backLink}`}>
      <FontAwesomeIcon 
        icon={faArrowLeft} 
        className={`${style.color} ${style.icon}`} 
        size="sm"
        />

      Back to Tickets 
    </Link>

    </>
}