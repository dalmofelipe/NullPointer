package com.dalmofelipe.ApiNullPointer.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dalmofelipe.ApiNullPointer.Entities.Comentario;
import com.dalmofelipe.ApiNullPointer.Entities.Resposta;
import com.dalmofelipe.ApiNullPointer.Mappers.ComentarioMappers;
import com.dalmofelipe.ApiNullPointer.Records.ComentarioRecord;
import com.dalmofelipe.ApiNullPointer.Repository.ComentarioRepository;
import com.dalmofelipe.ApiNullPointer.Repository.RespostaRepository;

@Service
public class ComentarioService {

    @Autowired
    private ComentarioRepository comentarioRepository;

    @Autowired
    private RespostaRepository respostaRepository;

    public Comentario save(ComentarioRecord record) {
        var comentario = ComentarioMappers.toEntity(record);
        
        Resposta resposta = respostaRepository.findById(record.respostaId())
            .orElseThrow(() -> new RuntimeException("resposta não encontrada"));
        
        comentario.setResposta(resposta);

        return comentarioRepository.save(comentario);
    }
}
