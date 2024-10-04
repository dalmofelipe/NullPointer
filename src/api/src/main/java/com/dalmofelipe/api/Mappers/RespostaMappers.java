package com.dalmofelipe.api.Mappers;

import org.springframework.beans.BeanUtils;

import com.dalmofelipe.api.Entities.Resposta;
import com.dalmofelipe.api.Records.RespostaRecord;

public class RespostaMappers {
    
    public static Resposta toEntity(RespostaRecord record) {
        var resposta = new Resposta();
        BeanUtils.copyProperties(record, resposta);
        return resposta;
    }

}
