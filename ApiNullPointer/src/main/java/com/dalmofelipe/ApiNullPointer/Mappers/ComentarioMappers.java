package com.dalmofelipe.ApiNullPointer.Mappers;

import org.springframework.beans.BeanUtils;

import com.dalmofelipe.ApiNullPointer.Entities.Comentario;
import com.dalmofelipe.ApiNullPointer.Records.ComentarioRecord;

public class ComentarioMappers {

    public static Comentario toEntity(ComentarioRecord record) {
        var comentario = new Comentario();
        BeanUtils.copyProperties(record, comentario);
        return comentario;
    }

}
