import * as React from "react";
import { BrandData } from "../../pages/Register/Brand/BrandRegisterForm";
import { FormInput, InputLabel, FieldWrapper } from "../UserRegister/styledBasics";


interface EmailFieldProps{
    brandData: BrandData;
    setData: (val: BrandData) => void
}

const EmailField: React.FC<EmailFieldProps> = (props) => {
    const {setData, brandData} =  props;
    const [email, setEmail] = React.useState(() => brandData.email); 

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {       
        setEmail(event.target.value);
    }

    const handleOnBlur = () => {
        const newData = Object.assign({}, brandData, {email: email})
        setData(newData);
    }

    return (
        <FieldWrapper>
            <InputLabel>Email de la compañía</InputLabel>
            <FormInput data-e2e="nameInput" type="text" value={email} onChange={handleOnChange} onBlur={handleOnBlur} />
        </FieldWrapper>
    )
    
}

export default EmailField;