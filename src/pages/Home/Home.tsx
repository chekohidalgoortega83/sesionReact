import * as React from "react";
import Layout from "../../components/Layout/Layout";
import { useAppContext } from "../../context/AppContext";



const Home: React.FC = () => {
    const context = useAppContext();
   
    return (
        <Layout>
            <h1>Sesión de React/Cypress</h1>

            {
                context.brand === undefined && context.user === undefined &&
                <span data-e2e="Initial MSG">Registrate antes de hacer nada</span>
            } 

            {
                context.brand !== undefined && 
                <span data-e2e="Initial MSG">Bienvenido CEO de  {context.brand.company}</span>
            }

            {
                context.user !== undefined && 
                <span data-e2e="Initial MSG">Hola {context.user.name} {context.user.surname}</span>
            }
        </Layout>
    )
}

export default Home;