package com.dalmofelipe.api.Mappers;

import org.springframework.beans.BeanUtils;

import com.dalmofelipe.api.Entities.Pergunta;
import com.dalmofelipe.api.Records.PerguntaRecord;

public class PerguntaMappers {

    public static Pergunta toEntity(PerguntaRecord record) {
        var pergunta = new Pergunta();        
        BeanUtils.copyProperties(record, pergunta);
        return pergunta;
    }

}
