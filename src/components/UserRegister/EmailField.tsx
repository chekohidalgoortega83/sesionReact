import * as React from "react";
import { userData } from "../../pages/Register/User/UserRegisterForm";
import { FormInput, InputLabel, FieldWrapper } from "./styledBasics";


interface EmailFieldProps{
    userData: userData;
    setData: (val: userData) => void
}

const EmailField: React.FC<EmailFieldProps> = (props) => {
    const {setData, userData} =  props;

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {       
        const newData = Object.assign({}, userData, {email: event.target.value})
        setData(newData);
    }

    return (
        <FieldWrapper>
            <InputLabel>Email</InputLabel>
            <FormInput data-e2e="emailInput"  type="email" value={userData.email} onChange={handleOnChange} />
        </FieldWrapper>
    )
    
}

export default EmailField;