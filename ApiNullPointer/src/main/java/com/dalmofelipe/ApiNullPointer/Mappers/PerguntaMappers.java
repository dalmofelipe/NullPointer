package com.dalmofelipe.ApiNullPointer.Mappers;

import org.springframework.beans.BeanUtils;

import com.dalmofelipe.ApiNullPointer.Entities.Pergunta;
import com.dalmofelipe.ApiNullPointer.Records.PerguntaRecord;

public class PerguntaMappers {

    public static Pergunta toEntity(PerguntaRecord record) {
        var pergunta = new Pergunta();        
        BeanUtils.copyProperties(record, pergunta);
        return pergunta;
    }

}
