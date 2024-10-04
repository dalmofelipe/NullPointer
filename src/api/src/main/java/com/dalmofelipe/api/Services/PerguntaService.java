package com.dalmofelipe.api.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dalmofelipe.api.Entities.Pergunta;
import com.dalmofelipe.api.Mappers.PerguntaMappers;
import com.dalmofelipe.api.Records.PerguntaRecord;
import com.dalmofelipe.api.Repository.PerguntaRepository;

@Service
public class PerguntaService {

    @Autowired
    private PerguntaRepository perguntaRepository;

    public Pergunta getOne(Long id) {
        return perguntaRepository.findById(id)
            .orElseThrow(()-> new RuntimeException("pergunta não encontrada"));
    }

    public List<PerguntaRecord> getAll() {
        return perguntaRepository.findAllToRecord();
    }

    public Pergunta save(PerguntaRecord input) {
        var pergunta = PerguntaMappers.toEntity(input);

        return perguntaRepository.save(pergunta);
    }
}
