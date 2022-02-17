import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Button =  styled.button`
    background: "palevioletred";
    color: "white";
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    border: none;
    cursor: pointer
`

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'black',
    width: "100%"
  };

const Nav: React.FC = () => {
    return <>
        <Button>
            <Link style={linkStyle} to="/">Home</Link>
        </Button>
        <Button>
            <Link style={linkStyle} to="/register/user">Registrar usuario</Link>
        </Button>
        <Button>
            <Link style={linkStyle} to="/register/brand">Registrar Marca</Link>
        </Button>
    </>
}

export default Nav;