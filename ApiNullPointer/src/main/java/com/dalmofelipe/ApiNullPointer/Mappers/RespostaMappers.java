package com.dalmofelipe.ApiNullPointer.Mappers;

import org.springframework.beans.BeanUtils;

import com.dalmofelipe.ApiNullPointer.Entities.Resposta;
import com.dalmofelipe.ApiNullPointer.Records.RespostaRecord;

public class RespostaMappers {
    
    public static Resposta toEntity(RespostaRecord record) {
        var resposta = new Resposta();
        BeanUtils.copyProperties(record, resposta);
        return resposta;
    }

}
