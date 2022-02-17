import { userData } from "../pages/Register/User/UserRegisterForm";

export default async (data: userData): Promise<userData> => {
    const save = await new Promise((res) => setTimeout(() => {
        res(data)}, 
    2500));

    return save as userData;
}