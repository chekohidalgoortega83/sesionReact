import * as React from "react";
import { BrandData } from "../../pages/Register/Brand/BrandRegisterForm";
import { FormInput, InputLabel, FieldWrapper } from "../UserRegister/styledBasics";


interface CeoFieldProps{
    brandData: BrandData;
    setData: (val: BrandData) => void
}

const CeoField: React.FC<CeoFieldProps> = (props) => {
    const {setData, brandData} =  props;
    const [CEO, setCEO] = React.useState(() => brandData.CEO); 

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {       
        console.log(event.target.value);
        setCEO(event.target.value);
    }

    const handleOnBlur = () => {
        const newData = Object.assign({}, brandData, {CEO: CEO})
        setData(newData);
    }

    return (
        <FieldWrapper>
            <InputLabel>CEO de la compañía</InputLabel>
            <FormInput data-e2e="nameInput" type="text" value={CEO} onChange={handleOnChange} onBlur={handleOnBlur} />
        </FieldWrapper>
    )
    
}

export default CeoField;