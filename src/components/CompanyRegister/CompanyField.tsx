import * as React from "react";
import { BrandData } from "../../pages/Register/Brand/BrandRegisterForm";
import { FormInput, InputLabel, FieldWrapper } from "../UserRegister/styledBasics";


interface CompanyFieldProps{
    userData: BrandData;
    setData: (val: BrandData) => void
}

const CompanyField: React.FC<CompanyFieldProps> = (props) => {
    const {setData, userData} =  props;

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {       
        const newData = Object.assign({}, userData, {company: event.target.value})
        setData(newData);
    }

    return (
        <FieldWrapper>
            <InputLabel>Nombre de la compañía</InputLabel>
            <FormInput data-e2e="nameInput" type="text" value={userData.company} onChange={handleOnChange} />
        </FieldWrapper>
    )
    
}

export default CompanyField;