"use client";

import logo from "../../assets/logo.png";
import Image from "next/image";
import style from "./navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";

export default function Navbar() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const session = supabase.auth.getSession().then(({ data }) => {
      //console.log(data.session.user.email)
      if (data?.session?.user) {
        setUserEmail(data.session.user.email);
      }else{
        router.push("/");
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUserEmail(session.user.email);
      } else {
        router.push("/");  
        setUserEmail(null);
      }

    });

    return () => listener.subscription.unsubscribe();
  }, []);

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (error) console.log("Logout error:", error);
    setUserEmail(null);
    router.push("/login");  
  }
  return (
    <nav className={style.nav}>
      <div className={style.brand}>
        <Image src={logo} alt="logo" className={style.logo} width={70} quality={100} />
        <Link className={style.navLink} href="/">
          <h3>Ticket Management</h3>
          <p className={style.branPara}>Software Company Portal</p>
        </Link>
      </div>

      {userEmail ? (
        <div className={style.user}>
          <div className={style.userData}>
            <p>Admin User</p>
            <p>{userEmail}</p>
          </div>
          <button className={style.logoutButton} onClick={handleLogout}>
            <FontAwesomeIcon icon={faRightToBracket} className={style.icon} />
            Logout
          </button>
        </div>
      ) : (
        <Link className="button" href="/login">
          Sign In
        </Link>
      )}
    </nav>
  );
}
