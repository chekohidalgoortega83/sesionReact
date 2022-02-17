import * as React from "react";
import { userData } from "../../pages/Register/User/UserRegisterForm";
import { FormInput, InputLabel, FieldWrapper, ErrorLabel } from "./styledBasics";


interface PasswordFieldProps{
    userData: userData;
    setData: (val: userData) => void;
}

const PasswordField: React.FC<PasswordFieldProps> = (props) => {
    const {setData, userData} =  props;

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {       
        const newData = Object.assign({}, userData, {password: event.target.value})
        setData(newData);
    }

    return (
        <FieldWrapper>
            <InputLabel>Contraseña</InputLabel>
            <FormInput data-e2e="passwordInput" type="password" value={userData.password} onChange={handleOnChange}  />
        </FieldWrapper>
    )
    
}

export default PasswordField;