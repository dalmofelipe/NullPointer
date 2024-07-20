import React, { useState } from "react";
import PerguntaContext from "./PerguntaContext";
import { PerguntaDetailsType } from "../types/webapp.types";


export const PerguntaProvider = ({ children } : { children: React.ReactNode }) => {
    
    const [ pergunta, setPergunta ] = useState<PerguntaDetailsType>(
        {} as PerguntaDetailsType
    )

    const perguntaContext = { pergunta, setPergunta }

    return (
        <PerguntaContext.Provider value={perguntaContext}>
            {children}
        </PerguntaContext.Provider>
    );

};