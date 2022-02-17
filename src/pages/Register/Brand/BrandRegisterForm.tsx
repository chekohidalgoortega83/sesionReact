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
import { useAppContext } from "../../../context/AppContext";

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

type keys = "company" | "CEO" | "email" | "country" | "password" |"confirmPassword" | "confirmEmail";

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
    const {setBrandInContext} = useAppContext();



    const setData = (key: string, val: string) => {   
        brandData.current[key as keys] = val;    
    }

    const resetUser = () => {   
        brandData.current = defaultBrandData;
        setFormKey(uuid())
    }

    const saveBrand = async () => {
        const data = brandData.current;   
        if(data.email !== data.confirmEmail){
            toast.error(`Los campos de email y confirmar email no coinciden`,{
                duration: 4000,
                position: 'top-center',
            })

            return;
        }

        if(data.password !==data.confirmPassword){
            toast.error(`Los campos de contraseña y confirmar contraseña no coinciden`,{
                duration: 4000,
                position: 'top-center',
            })

            return;
        }
        
        const save = await saveBrandData(data);
        toast.success(`La compañia ${save.company} ha sido creada correctamente`,{
            duration: 4000,
            position: 'bottom-center',
        })

        setBrandInContext(data);
        resetUser();
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