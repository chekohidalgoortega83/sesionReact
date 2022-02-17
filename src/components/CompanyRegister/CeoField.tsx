import * as React from "react";
import { BrandData } from "../../pages/Register/Brand/BrandRegisterForm";
import { FormInput, InputLabel, FieldWrapper } from "../UserRegister/styledBasics";


interface CeoFieldProps{
    userData: BrandData;
    setData: (val: BrandData) => void
}

const CeoField: React.FC<CeoFieldProps> = (props) => {
    const {setData, userData} =  props;

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {       
        const newData = Object.assign({}, userData, {CEO: event.target.value})
        setData(newData);
    }

    return (
        <FieldWrapper>
            <InputLabel>Nombre de la compañía</InputLabel>
            <FormInput data-e2e="nameInput" type="text" value={userData.CEO} onChange={handleOnChange} />
        </FieldWrapper>
    )
    
}

export default CeoField;