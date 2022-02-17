import * as React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import BrandRegisterForm from "./Brand/BrandRegisterForm";
import UserRegisterForm from "./User/UserRegisterForm";

const Register: React.FC = () => {
    const { type } = useParams<{ type: "user" | "brand"; }>();   
    return (
        <Layout>
            {type === "user" && 
                <UserRegisterForm />
            }

            {type === "brand" && 
                <BrandRegisterForm />
            }
        </Layout>
    )
}

export default Register