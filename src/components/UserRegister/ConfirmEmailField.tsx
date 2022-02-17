import * as React from "react";
import { userData } from "../../pages/Register/User/UserRegisterForm";
import { FormInput, InputLabel, FieldWrapper, ErrorLabel } from "./styledBasics";


interface ConfirmEmailFieldProps{
    userData: userData;
    setData: (val: userData) => void
    emailError: undefined | string
}

const ConfirmEmailField: React.FC<ConfirmEmailFieldProps> = (props) => {
    const {setData, userData, emailError} =  props;

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {       
        const newData = Object.assign({}, userData, {confirmEmail: event.target.value})
        setData(newData);
    }

    return (
        <FieldWrapper>
            <InputLabel>Confirmacion del email</InputLabel>
            <FormInput data-e2e="confirmEmailInput"  type="email" value={userData.confirmEmail} onChange={handleOnChange} />
            {emailError && 
                <ErrorLabel data-e2e="emailError">{emailError}</ErrorLabel>
            }
        </FieldWrapper>
    )
    
}

export default ConfirmEmailField;