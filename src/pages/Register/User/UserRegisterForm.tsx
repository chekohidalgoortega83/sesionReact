import * as React from "react";
import styled from "styled-components";
import saveUserData from "../../../api/saveUserData";
import ActionButtons from "../../../components/UserRegister/ActionButtons";
import ConfirmEmailField from "../../../components/UserRegister/ConfirmEmailField";
import ConfirmPasswordField from "../../../components/UserRegister/ConfirmPassword";
import CountrySelector from "../../../components/UserRegister/CountrySelector";
import EmailField from "../../../components/UserRegister/EmailField";
import NameField from "../../../components/UserRegister/NameField";
import PasswordField from "../../../components/UserRegister/PasswordField";
import SurnameField from "../../../components/UserRegister/SurnameField";
import toast, { Toaster } from 'react-hot-toast';
import { useAppContext } from "../../../context/AppContext";

const FormTitleWrapper = styled.div`
    margin: 0 auto;
    width: fit-content;
`;

export type userData = {
    name: string;
    surname: string;
    country: string;
    password: string;
    confirmPassword: string;
    email: string;
    confirmEmail: string;
}

const UserRegisterForm: React.FC = () => {
    const {setUserInContext} = useAppContext();
    const defaultUserData = {
        name: "",
        surname:  "",
        email: "",
        country:  "",
        password:  "",
        confirmPassword: "",
        confirmEmail: "",
    }

    const [userData, setUserData] = React.useState<userData>(defaultUserData) 
    const [isEnabledSaveButton, setIsEnableSaveButton] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState<string | undefined>()
    const [emailError, setEmailError] = React.useState<string | undefined>()

    React.useEffect(() => {
        if(userData.email !== userData.confirmEmail){
            setEmailError("Los campos de confirmación de email y de email deben coincidir")
        } else {
            setEmailError(undefined);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userData.confirmEmail])

    React.useEffect(() => {
        if(userData.password !== userData.confirmPassword){
            setPasswordError("Los campos de confirmación de contraseña y de contraseña deben coincidir")
        }else {
            setPasswordError(undefined);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userData.confirmPassword])

    React.useEffect(() => {
        if(userData){
            if(!emailError && !passwordError && userData.name.length && userData.surname.length && userData.email.length && userData.password.length && userData.country.length ){
                setIsEnableSaveButton(true)
            } else {
                setIsEnableSaveButton(false)
            }
        }
    }, [emailError, passwordError, userData])

    const setData = (val: userData) => {
        setUserData(val)
    }

    const resetUser = () => {   
        setUserData(defaultUserData)
    }

    const saveUser = async () => {
        setIsEnableSaveButton(false)
        const save = await saveUserData(userData);
        toast.success(`El usuario ${save.name} ${save.surname} ha sido creado correctamente`,{
            duration: 4000,
            position: 'bottom-center',
        })
        setUserInContext(userData);
        resetUser();
    }

    

    return (
        <>
            <FormTitleWrapper>
                <h1>Registro de usuarios</h1>
            </FormTitleWrapper>
            <NameField userData={userData} setData={setData} />
            <SurnameField userData={userData} setData={setData} />
            <EmailField userData={userData} setData={setData} />
            <ConfirmEmailField  emailError={emailError} userData={userData} setData={setData} />
            <PasswordField userData={userData} setData={setData} />
            <ConfirmPasswordField passwordError={passwordError} userData={userData} setData={setData} />
            <CountrySelector  userData={userData} setData={setData} />
            <ActionButtons saveUser={saveUser} resetUser={resetUser} isEnableSaveButton={isEnabledSaveButton} />
            <Toaster />
        </>

    );
} 

export default UserRegisterForm;