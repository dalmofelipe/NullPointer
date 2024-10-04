package com.dalmofelipe.api.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dalmofelipe.api.Entities.Pergunta;
import com.dalmofelipe.api.Entities.Resposta;
import com.dalmofelipe.api.Mappers.RespostaMappers;
import com.dalmofelipe.api.Records.RespostaRecord;
import com.dalmofelipe.api.Repository.PerguntaRepository;
import com.dalmofelipe.api.Repository.RespostaRepository;

@Service
public class RespostaService {

    @Autowired
    private RespostaRepository respostaRepository;

    @Autowired
    private PerguntaRepository perguntaRepository;

    public Resposta save(RespostaRecord record) {
        var resposta = RespostaMappers.toEntity(record);

        Pergunta pergunta = perguntaRepository.findById(record.perguntaId())
            .orElseThrow(() -> new RuntimeException("pergunta não encontrada"));
        
        resposta.setPergunta(pergunta);

        return respostaRepository.save(resposta);
    }
    
}
