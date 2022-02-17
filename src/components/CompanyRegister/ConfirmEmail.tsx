import * as React from "react";
import { BrandData } from "../../pages/Register/Brand/BrandRegisterForm";
import { FormInput, InputLabel, FieldWrapper } from "../UserRegister/styledBasics";


interface ConfirmEmailFieldProps{
    brandData: BrandData;
    setData: (key: string, val: string) => void
}

const ConfirmEmailField: React.FC<ConfirmEmailFieldProps> = (props) => {
    const {setData, brandData} =  props;
    const [email, setEmail] = React.useState(() => brandData.confirmEmail); 

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {       
        setEmail(event.target.value);
    }

    const handleOnBlur = () => {
        setData("confirmEmail", email);
    }

    return (
        <FieldWrapper>
            <InputLabel>Confirmar el email de la compañía</InputLabel>
            <FormInput data-e2e="nameInput" type="text" value={email} onChange={handleOnChange} onBlur={handleOnBlur} />
        </FieldWrapper>
    )
    
}

export default ConfirmEmailField;