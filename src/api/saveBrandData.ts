import { BrandData } from "../pages/Register/Brand/BrandRegisterForm";

export default async (data: BrandData): Promise<BrandData> => {
    const save = await new Promise((res) => setTimeout(() => {
        res(data)}, 
    5000));

    return save as BrandData;
}