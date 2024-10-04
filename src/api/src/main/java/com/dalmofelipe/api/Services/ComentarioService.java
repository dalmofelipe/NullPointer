package com.dalmofelipe.api.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dalmofelipe.api.Entities.Comentario;
import com.dalmofelipe.api.Entities.Resposta;
import com.dalmofelipe.api.Mappers.ComentarioMappers;
import com.dalmofelipe.api.Records.ComentarioRecord;
import com.dalmofelipe.api.Repository.ComentarioRepository;
import com.dalmofelipe.api.Repository.RespostaRepository;

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
