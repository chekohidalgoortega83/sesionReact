import * as React from "react";
import styled from "styled-components";
import toast, { Toaster } from 'react-hot-toast';
import EmailField from "../../../components/UserRegister/EmailField";
import ConfirmEmailField from "../../../components/UserRegister/ConfirmEmailField";
import PasswordField from "../../../components/UserRegister/PasswordField";
import ConfirmPasswordField from "../../../components/UserRegister/ConfirmPassword";
import CountrySelector from "../../../components/UserRegister/CountrySelector";
import ActionButtons from "../../../components/UserRegister/ActionButtons";
import saveBrandData from "../../../api/saveBrandData";
import CompanyField from "../../../components/CompanyRegister/CompanyField";
import CeoField from "../../../components/CompanyRegister/CeoField";

const FormTitleWrapper = styled.div`
    margin: 0 auto;
    width: fit-content;
`;

export type BrandData = {
    company: string;
    CEO: string;
    country: string;
    password: string;
    confirmPassword: string;
    email: string;
    confirmEmail: string;
}

const BrandRegisterForm: React.FC = () => {
    const defaultBrandData = {
        company: "",
        CEO:  "",
        email: "",
        country:  "",
        password:  "",
        confirmPassword: "",
        confirmEmail: "",
    };

    const [brandData, setUserData] = React.useState<BrandData>(defaultBrandData) 
    const [isEnabledSaveButton, setIsEnableSaveButton] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState<string | undefined>()
    const [emailError, setEmailError] = React.useState<string | undefined>()

    React.useEffect(() => {
        if(brandData.email !== brandData.confirmEmail){
            setEmailError("Los campos de confirmación de email y de email deben coincidir")
        } else {
            setEmailError(undefined);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [brandData.confirmEmail])

    React.useEffect(() => {
        if(brandData.password !== brandData.confirmPassword){
            setPasswordError("Los campos de confirmación de contraseña y de contraseña deben coincidir")
        }else {
            setPasswordError(undefined);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [brandData.confirmPassword])

    React.useEffect(() => {
        if(brandData){
            if(!emailError && !passwordError && brandData.company.length && brandData.CEO.length && brandData.email.length && brandData.password.length && brandData.country.length ){
                setIsEnableSaveButton(true)
            } else {
                setIsEnableSaveButton(false)
            }
        }
    }, [emailError, passwordError, brandData])

    const setData = (val: BrandData) => {
        setUserData(val)
    }

    const resetUser = () => {   
        setUserData(defaultBrandData)
    }

    const saveUser = async () => {
        setIsEnableSaveButton(false)
        const save = await saveBrandData(brandData);
        toast.success(`El usuario ${save.company} ha sido creado correctamente`,{
            duration: 4000,
            position: 'bottom-center',
        })
        resetUser();
    }

    return (
        <>
            <FormTitleWrapper>
                <h1>Registro de usuarios</h1>
            </FormTitleWrapper>
            <CompanyField userData={brandData} setData={setData} />
            <CeoField userData={brandData} setData={setData} />
            
            <ActionButtons saveUser={saveUser} resetUser={resetUser} isEnableSaveButton={isEnabledSaveButton} />
            <Toaster />
        </>
    )
} 

export default BrandRegisterForm;