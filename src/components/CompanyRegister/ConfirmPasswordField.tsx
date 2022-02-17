import * as React from "react";
import { BrandData } from "../../pages/Register/Brand/BrandRegisterForm";
import { FormInput, InputLabel, FieldWrapper } from "../UserRegister/styledBasics";


interface ConfirmPasswordFieldProps{
    brandData: BrandData;
    setData: (val: BrandData) => void
}

const ConfirmPasswordField: React.FC<ConfirmPasswordFieldProps> = (props) => {
    const {setData, brandData} =  props;
    const [password, setPassword] = React.useState(() => brandData.confirmPassword); 

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {       
        setPassword(event.target.value);
    }

    const handleOnBlur = () => {
        const newData = Object.assign({}, brandData, {confirmPassword: password})
        setData(newData);
    }

    return (
        <FieldWrapper>
            <InputLabel>Confirma la contraseña</InputLabel>
            <FormInput data-e2e="nameInput" type="password" value={password} onChange={handleOnChange} onBlur={handleOnBlur} />
        </FieldWrapper>
    )
    
}

export default ConfirmPasswordField;