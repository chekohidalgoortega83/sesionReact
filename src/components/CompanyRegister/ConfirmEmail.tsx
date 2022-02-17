import * as React from "react";
import { BrandData } from "../../pages/Register/Brand/BrandRegisterForm";
import { FormInput, InputLabel, FieldWrapper } from "../UserRegister/styledBasics";


interface ConfirmEmailFieldProps{
    brandData: BrandData;
    setData: (val: BrandData) => void;
}

const ConfirmEmailField: React.FC<ConfirmEmailFieldProps> = (props) => {
    const {setData, brandData} =  props;
    const [email, setEmail] = React.useState(() => brandData.confirmEmail); 

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {       
        setEmail(event.target.value);
    }

    const handleOnBlur = () => {
        const newData = Object.assign({}, brandData, {confirmEmail: email})
        setData(newData);
    }

    return (
        <FieldWrapper>
            <InputLabel>Confirmar el email de la compañía</InputLabel>
            <FormInput data-e2e="nameInput" type="text" value={email} onChange={handleOnChange} onBlur={handleOnBlur} />
        </FieldWrapper>
    )
    
}

export default ConfirmEmailField;