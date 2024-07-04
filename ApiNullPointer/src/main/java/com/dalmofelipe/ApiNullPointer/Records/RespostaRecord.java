package com.dalmofelipe.ApiNullPointer.Records;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record RespostaRecord(
    @JsonProperty("perguntaId") @JsonAlias("pergunta_id") @NotNull Long perguntaId,
    @Size(min = 3, max =  1000, message = "mensagem deve ter entre {min} e {max} caracteres") 
    String mensagem,
    Integer votos,
    LocalDateTime data
) {

    public RespostaRecord {
        data = LocalDateTime.now();
        votos = 0;
    }

}
