import style from "./Textarea.module.css"
export default function Textarea({input , formik}){
    const {  inputName, placeholder } = input;

    return <>
    <textarea
        name={inputName}
        placeholder={placeholder}
        className='formInput'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[inputName]}
         />
    </>
}