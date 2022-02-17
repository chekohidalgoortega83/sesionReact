import * as React from "react";
import { userData } from "../../pages/Register/User/UserRegisterForm";
import { FormInput, InputLabel,FieldWrapper } from "./styledBasics";


interface SurnameFieldProps{
    userData: userData;
    setData: (val: userData) => void
}

const SurnameField: React.FC<SurnameFieldProps> = (props) => {
    const {setData, userData} =  props;

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {       
        const newData = Object.assign({}, userData, {surname: event.target.value})
        setData(newData);
    }

    return (
        <FieldWrapper>
            <InputLabel>Apellidos</InputLabel>
            <FormInput data-e2e="surnameInput" type="text" value={userData.surname} onChange={handleOnChange} />
        </FieldWrapper>
    )
    
}

export default SurnameField;