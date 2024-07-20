import React from 'react';

import { createContext } from 'react';
import { PerguntaDetailsType } from '../types/webapp.types'

interface IPerguntaContext {
    pergunta: PerguntaDetailsType
    setPergunta: React.Dispatch<React.SetStateAction<PerguntaDetailsType>>
}

const PerguntaContext = createContext({} as IPerguntaContext)

export default PerguntaContext;
