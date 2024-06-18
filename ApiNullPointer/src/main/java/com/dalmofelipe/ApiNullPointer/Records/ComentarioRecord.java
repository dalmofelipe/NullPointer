package com.dalmofelipe.ApiNullPointer.Records;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record ComentarioRecord(
    @JsonProperty("resposta_id") @NotNull Long respostaId,
    @Size(min = 3, max = 500) String mensagem,
    LocalDateTime data
) {

    public ComentarioRecord {
        data = LocalDateTime.now();
    }

}
