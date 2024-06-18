package com.dalmofelipe.ApiNullPointer.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dalmofelipe.ApiNullPointer.Entities.Pergunta;
import com.dalmofelipe.ApiNullPointer.Entities.Resposta;
import com.dalmofelipe.ApiNullPointer.Mappers.RespostaMappers;
import com.dalmofelipe.ApiNullPointer.Records.RespostaRecord;
import com.dalmofelipe.ApiNullPointer.Repository.PerguntaRepository;
import com.dalmofelipe.ApiNullPointer.Repository.RespostaRepository;

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
