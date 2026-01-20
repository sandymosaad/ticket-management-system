import style from "./input.module.css"

export default  function Input({input, formik , action }) {

    const { inputType, inputName, placeholder } = input;
    return <>   
            <input
                type={inputType}
                name={inputName}
                placeholder={placeholder}
                className={`${'formInput'} ${(action==='Edit'? style.boldTitle:"")}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[inputName]}
            />
    </>
}
