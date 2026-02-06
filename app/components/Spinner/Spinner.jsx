import style from "./spinner.module.css"
function Spinner() {

  return <div className={style.SpinnerContainer}>
    <span className={style.loader}></span>
  </div> 
}

export default Spinner;
