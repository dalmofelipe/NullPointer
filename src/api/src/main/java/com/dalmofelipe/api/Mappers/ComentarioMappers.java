package com.dalmofelipe.api.Mappers;

import org.springframework.beans.BeanUtils;

import com.dalmofelipe.api.Entities.Comentario;
import com.dalmofelipe.api.Records.ComentarioRecord;

public class ComentarioMappers {

    public static Comentario toEntity(ComentarioRecord record) {
        var comentario = new Comentario();
        BeanUtils.copyProperties(record, comentario);
        return comentario;
    }

}
