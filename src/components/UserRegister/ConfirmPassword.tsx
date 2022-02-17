import * as React from "react";
import { userData } from "../../pages/Register/User/UserRegisterForm";
import { FormInput, InputLabel, FieldWrapper, ErrorLabel } from "./styledBasics";


interface ConfirmPasswordFieldProps{
    userData: userData;
    setData: (val: userData) => void
    passwordError: undefined | string
}

const ConfirmPasswordField: React.FC<ConfirmPasswordFieldProps> = (props) => {
    const {setData, userData, passwordError} =  props;

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {       
        const newData = Object.assign({}, userData, {confirmPassword: event.target.value})
        setData(newData);
    }

    return (
        <FieldWrapper>
            <InputLabel>Confirmar contraseña</InputLabel>
            <FormInput data-e2e="confirmPasswordInput" type="password" value={userData.confirmPassword} onChange={handleOnChange} />
            {passwordError && 
                <ErrorLabel data-e2e="passwordError">{passwordError}</ErrorLabel>
            }
        </FieldWrapper>
    )
    
}

export default ConfirmPasswordField;