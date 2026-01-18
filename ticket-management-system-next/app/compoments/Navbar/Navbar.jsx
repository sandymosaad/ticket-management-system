
import logo from "../../assets/logo.png";
import Image from "next/image";
import style from "./navbar.module.css";
import  Link  from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
//import { getLogedInUser } from "../../lib/data-service";

export default async function Navbar() {
  // const user = await getLogedInUser();
  //   console.log(user)
  return (
    <nav className={style.nav}>
      <div className={style.brand} >
          <Image 
          src={logo}
          alt="logo"
          width={70}
          quality={100}
          />
          <Link className={style.navLink} href="/">
            <h3>Ticket Management</h3>
            <p>Software Company Portal</p>
          </Link>
      </div>
      
      <div className={style.user}>
        <div className={style.userData}> 
          <p>Admin User</p>
          <p>email</p>
           {/* <p>{user['email']}</p> */}
        </div>
        <button className={style.logoutButton}>
          <FontAwesomeIcon icon={faRightToBracket} className={style.icon }/>
          Logout
        </button>
      </div>
    </nav>
  );
}
