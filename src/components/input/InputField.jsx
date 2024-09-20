import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Controller} from "react-hook-form";
import './InputField.css';

export const InputField = ({name, placeholder, icon, type = "text", control, rules, errors}) => {
    return (
        <div className="input-group">
            <div className="input-with-icon">
                <FontAwesomeIcon icon={icon} className="input-icon"/>
                <Controller render={({field}) => <input {...field} type={type} placeholder={placeholder}/>}
                            name={name}
                            control={control}
                            defaultValue=""
                            rules={rules}
                />
            </div>
            {errors[name] && <span className="error-message">{errors[name]?.message}</span>}
        </div>
    )
}
export default InputField