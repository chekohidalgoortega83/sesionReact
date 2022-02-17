import * as React from "react";
import { userData } from "../../pages/Register/User/UserRegisterForm";
import { InputLabel, FieldWrapper, FormSelector } from "./styledBasics";


interface CountrySelectorProps{
    userData: userData;
    setData: (val: userData) => void
}

const CountrySelector: React.FC<CountrySelectorProps> = (props) => {
    const {setData, userData} =  props;

    const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.target.value
        const newData = Object.assign({}, userData, {country: event.currentTarget.value})
        setData(newData);
    }

    return (
        <FieldWrapper>
            <InputLabel>Nombre</InputLabel>
            <FormSelector data-e2e="countruSelector" value={userData.country} onChange={handleOnChange} >
                <option disabled value="">Elige el pais</option>
                <option value="sp">España</option>
                <option value="usa">EEUU</option>
                <option value="moz">Mozambique</option>
            </FormSelector>
        </FieldWrapper>
    )
    
}

export default CountrySelector;