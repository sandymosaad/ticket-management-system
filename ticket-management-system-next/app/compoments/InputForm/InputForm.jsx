import Input from "../Input/page";
import Select from "../Select/Select";
import Textarea from "../Textarea/Textarea";
import style from "./inputForm.module.css"
export default function InputForm({input, formik}){
        const { label, type, inputName} = input;

 return <>    
        <div className='inputContainer'> 
            <label className='formLabel'>{label} <span className='required'>*</span></label>
            {type === "input" && <Input input={input} formik={formik} />}
            {type === "textarea" && <Textarea input={input} formik={formik} />}
            {type === "select" && <Select input={input} formik={formik} />}


            {formik.errors[inputName]&& formik.touched[inputName]&&(
            <p className="error">
                {formik.errors[inputName]}
            </p>
            )
            }
        </div>
    </>
}
