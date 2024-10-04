package com.dalmofelipe.api.Records;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record ComentarioRecord(
    @JsonProperty("respostaId") @JsonAlias("resposta_id") @NotNull Long respostaId,
    @Size(min = 3, max = 500) String mensagem,
    LocalDateTime data
) {

    public ComentarioRecord {
        data = LocalDateTime.now();
    }

}
