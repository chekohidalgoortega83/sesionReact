import * as React from "react";
import { BrandData } from "../../pages/Register/Brand/BrandRegisterForm";
import { FormInput, InputLabel, FieldWrapper } from "../UserRegister/styledBasics";


interface PasswordFieldProps{
    brandData: BrandData;
    setData: (key: string, val: string) => void
}

const PasswordField: React.FC<PasswordFieldProps> = (props) => {
    const {setData, brandData} =  props;
    const [password, setPassword] = React.useState(() => brandData.password); 

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {       
        setPassword(event.target.value);
    }

    const handleOnBlur = () => {
        setData("password", password);
    }

    return (
        <FieldWrapper>
            <InputLabel>Contraseña</InputLabel>
            <FormInput data-e2e="nameInput" type="password" value={password} onChange={handleOnChange} onBlur={handleOnBlur} />
        </FieldWrapper>
    )
    
}

export default PasswordField;