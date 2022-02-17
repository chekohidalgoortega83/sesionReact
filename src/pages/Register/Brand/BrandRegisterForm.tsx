import * as React from "react";
import styled from "styled-components";
import toast, { Toaster } from 'react-hot-toast';
import ActionButtons from "../../../components/UserRegister/ActionButtons";
import saveBrandData from "../../../api/saveBrandData";
import CompanyField from "../../../components/CompanyRegister/CompanyField";
import CeoField from "../../../components/CompanyRegister/CeoField";
import { v4 as uuid } from 'uuid';
import EmailField from "../../../components/CompanyRegister/EmailField";
import ConfirmEmailField from "../../../components/CompanyRegister/ConfirmEmail";
import PasswordField from "../../../components/CompanyRegister/PasswordField";
import ConfirmPasswordField from "../../../components/CompanyRegister/ConfirmPasswordField";
import CountrySelector from "../../../components/CompanyRegister/CountrySelector";

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

    const brandData = React.useRef(defaultBrandData);
    const [formKey, setFormKey] = React.useState(uuid())


    // React.useEffect(() => {
    //     if(brandData.current.password !== brandData.current.confirmPassword){
    //         setPasswordError("Los campos de confirmación de contraseña y de contraseña deben coincidir")
    //     }else {
    //         setPasswordError(undefined);
    //     }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [brandData.current.confirmPassword])

    // React.useEffect(() => {
    //     if(brandData){
    //         if(!emailError && !passwordError && brandData.current.company.length && brandData.current.CEO.length && brandData.current.email.length && brandData.current.password.length && brandData.current.country.length ){
    //             setIsEnableSaveButton(true)
    //         } else {
    //             setIsEnableSaveButton(false)
    //         }
    //     }
    // }, [emailError, passwordError, brandData])

    const setData = (val: BrandData) => {   
        brandData.current = val;    
    }

    const resetUser = () => {   
        brandData.current = defaultBrandData;
        setFormKey(uuid())
    }

    const saveBrand = async () => {
        console.log(brandData.current);
        if(brandData.current.email !== brandData.current.confirmEmail){
            toast.error(`Los campos de email y confirmar email no coinciden`,{
                duration: 4000,
                position: 'top-center',
            })

            return;
        }

        if(brandData.current.password !== brandData.current.confirmPassword){
            toast.error(`Los campos de contraseña y confirmar contraseña no coinciden`,{
                duration: 4000,
                position: 'top-center',
            })

            return;
        }
        
        // setIsEnableSaveButton(false)
        // const save = await saveBrandData(brandData.current);
        // toast.success(`El usuario ${save.company} ha sido creado correctamente`,{
        //     duration: 4000,
        //     position: 'bottom-center',
        // })
        // resetUser();
    }

    return (
        <>
            <FormTitleWrapper>
                <h1>Registro de empresa</h1>
            </FormTitleWrapper>
            <div key={formKey}>
                <CompanyField brandData={brandData.current} setData={setData} />
                <CeoField brandData={brandData.current} setData={setData} />
                <EmailField brandData={brandData.current} setData={setData} />
                <ConfirmEmailField  brandData={brandData.current} setData={setData} />
                <PasswordField brandData={brandData.current} setData={setData} />
                <ConfirmPasswordField brandData={brandData.current} setData={setData} />
                <CountrySelector brandData={brandData.current} setData={setData} />
                <ActionButtons saveUser={saveBrand} resetUser={resetUser} isEnableSaveButton={true} />
            </div>
            <Toaster />
        </>
    )
} 

export default BrandRegisterForm;