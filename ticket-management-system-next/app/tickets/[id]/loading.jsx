import Spinner from "../../compoments/Spinner/Spinner";
import style from "./ticketDetails.module.css";

export default function Loading() {
  return (
      <div  className={style.spinnerContainer}>
        <Spinner/>
        <p className={style.loadingText}>Loading ticket data...</p>
      </div>
  );
}
