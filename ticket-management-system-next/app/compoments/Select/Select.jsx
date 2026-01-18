import style from "./select.module.css"
export default function Select({input , formik}){
    const { inputName , options } = input;

    return <>
    <select
        name={inputName}
        className="formInput"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[inputName]}
    >
          <option value={""} disabled>Select</option>
          {options.map((option)=><option key={option} value={option}>{option}</option>)}

    </select>

    </>
}