import { BrandData } from "../pages/Register/Brand/BrandRegisterForm";
import { userData } from "../pages/Register/User/UserRegisterForm";
import * as React from "react";




export interface AppContextInterface {
    user: userData | undefined;
    setUserInContext: (val: userData) => void;
    brand: BrandData | undefined;
    setBrandInContext: (val: BrandData) => void;
}

const AppContext = React.createContext<AppContextInterface>({
    user: {
        name: "",
        surname:  "",
        email: "",
        country:  "",
        password:  "",
        confirmPassword: "",
        confirmEmail: "",
    },
    setUserInContext: () => undefined,
    brand: {
        company: "",
        CEO:  "",
        email: "",
        country:  "",
        password:  "",
        confirmPassword: "",
        confirmEmail: "",
    },
    setBrandInContext: () => undefined,
});

export default AppContext;

export const AppContextProvider = AppContext.Provider;

export const useContextInApp = (): AppContextInterface => {
    const [user, setUserInContext] = React.useState(undefined);
    const [brand, setBrandInContext] = React.useState(undefined);

    const contextValues: AppContextInterface = { user,setUserInContext, brand,setBrandInContext };

  return contextValues;
};

export const useAppContext = (): AppContextInterface => React.useContext(AppContext);
