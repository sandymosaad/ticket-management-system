import style from './input.module.css'
export default  function Input({input, formik}) {
    const { label, type,inputType, inputName, placeholder } = input;
    return <>
    
        {/* <div className={style.inputContainer}> 
            <label className={style.formLabel}>{label} <span className={style.required}>*</span></label> */}
            <input
                type={inputType}
                name={inputName}
                placeholder={placeholder}
                className='formInput'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[inputName]}
            />


            {/* {formik.errors[inputName]&& formik.touched[inputName]&&(
            <p className="error">
                {formik.errors[inputName]}
            </p>
            )
            }
        </div> */}
    </>
}