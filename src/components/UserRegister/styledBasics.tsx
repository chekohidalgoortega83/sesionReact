import styled from "styled-components";

export const InputLabel = styled.label`
    display: block;
`;

export const FormInput = styled.input`
    display: block;
    width: 95%;
    padding: 12px;
    border: none;
    border-radius: 8px;
    margin-top: 8px
`

export const FieldWrapper = styled.div`
    display: block;
    margin: 20px 0;
`

export const FormSelector = styled.select`
    display: block;
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 8px;
    margin-top: 8px;
    background-color: white
`

export const ResetButton = styled.button`
    padding: 12px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 8px;
    margin-right: 5px;
    cursor:pointer;
    font-weight: 700
`

export const AcceptButton = styled.button`
    padding: 12px;
    background-color: rgba(0, 108, 195, 1);
    color: white;
    border: none;
    border-radius: 8px;
    margin-left: 5px;
    cursor:pointer;
    font-weight: 700;
    &:disabled {
        color: #000;
        background: #ccc;
      }
`

export const ErrorLabel = styled.label`
    display:block;      
    color: red;
    font-size: 12px;
    font-weight: 700;
    margin-top: 6px;
    padding-left: 6px
`