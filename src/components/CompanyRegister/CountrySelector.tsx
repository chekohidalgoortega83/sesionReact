import * as React from "react";
import { BrandData } from "../../pages/Register/Brand/BrandRegisterForm";
import { InputLabel, FieldWrapper, FormSelector } from "../UserRegister/styledBasics";


interface CountrySelectorProps{
    brandData: BrandData;
    setData: (key: string, val: string) => void
}

const CountrySelector: React.FC<CountrySelectorProps> = (props) => {
    const {setData, brandData} =  props;
    const [country, setCountry] = React.useState(() => brandData.country)

    const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {       
        const value = event.target.value;
        setCountry(value)
        setData("country", value);
    }

    return (
        <FieldWrapper>
            <InputLabel>Nombre</InputLabel>
            <FormSelector data-e2e="countruSelector" value={country} onChange={handleOnChange} >
                <option disabled value="">Elige el pais</option>
                <option value="sp">España</option>
                <option value="usa">EEUU</option>
                <option value="moz">Mozambique</option>
            </FormSelector>
        </FieldWrapper>
    )
    
}

export default CountrySelector;