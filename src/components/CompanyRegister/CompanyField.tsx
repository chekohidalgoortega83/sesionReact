import * as React from "react";
import { BrandData } from "../../pages/Register/Brand/BrandRegisterForm";
import { FormInput, InputLabel, FieldWrapper } from "../UserRegister/styledBasics";

interface CompanyFieldProps{
    brandData: BrandData;
    setData: (key: string, val: string) => void
}

const CompanyField: React.FC<CompanyFieldProps> = (props) => {
    const {setData, brandData} =  props;
    const [company, setCompany] = React.useState(() => brandData.company);

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {       
        setCompany(event.target.value);
        
    }

    const handleOnBlur = () => {
        setData("company", company);
    }

    return (
        <FieldWrapper>
            <InputLabel>Nombre de la compañía</InputLabel>
            <FormInput data-e2e="companyInput" type="text" value={company} onChange={handleOnChange} onBlur={handleOnBlur}/>
        </FieldWrapper>
    )
    
}

export default CompanyField;