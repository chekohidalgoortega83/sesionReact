import * as React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const Wrapper = styled.div`
    width: 50%;
    background-color: rgb(232,232,232);
    border-radius: 15px;
    height: 90vh;
    color: black;
    margin: 0 auto;
    padding: 20px 40px
`;



const Layout: React.FC = ({children}) => {
    return (
        <>
            <Nav />
            <Wrapper id="wrapper">{children}</Wrapper>
        </>
    );
}

export default Layout;