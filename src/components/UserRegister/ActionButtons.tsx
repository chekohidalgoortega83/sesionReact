import * as React from "react";
import { AcceptButton, FieldWrapper, ResetButton } from "./styledBasics";


interface ActionButtonsProps{
    saveUser: () => void;
    resetUser: () => void;
    isEnableSaveButton: boolean
}

const ActionButtons: React.FC<ActionButtonsProps> = (props) => {
    const {saveUser, resetUser, isEnableSaveButton} =  props;

    return (
        <FieldWrapper>
            <ResetButton data-e2e="resetFormBtn" onClick={resetUser}>Reset</ResetButton>
            <AcceptButton data-e2e="saveFormBtn" disabled={!isEnableSaveButton} onClick={saveUser}>Guardar</AcceptButton>
        </FieldWrapper>
    )
    
}

export default ActionButtons;