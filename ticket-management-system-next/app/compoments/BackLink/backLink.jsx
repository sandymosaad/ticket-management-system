import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import style from "./backLink.module.css"

export default function BackLink(){
    return<>
    
    <div className={style.backLink} >
    <Link href={'/'} className={style.color}>
    <FontAwesomeIcon icon={faArrowLeft} className={style.color} />
      Back to Tickets 
    </Link>

  </div>
    </>
}