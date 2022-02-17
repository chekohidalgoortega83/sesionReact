import * as React from "react";
import { userData } from "../../pages/Register/User/UserRegisterForm";
import { FormInput, InputLabel, FieldWrapper } from "./styledBasics";


interface NameFieldProps{
    userData: userData;
    setData: (val: userData) => void
}

const NameField: React.FC<NameFieldProps> = (props) => {
    const {setData, userData} =  props;

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {       
        const newData = Object.assign({}, userData, {name: event.target.value})
        setData(newData);
    }

    return (
        <FieldWrapper>
            <InputLabel>Nombre</InputLabel>
            <FormInput data-e2e="nameInput" type="text" value={userData.name} onChange={handleOnChange} />
        </FieldWrapper>
    )
    
}

export default NameField;