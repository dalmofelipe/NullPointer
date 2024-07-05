package com.dalmofelipe.ApiNullPointer.Records;

import jakarta.validation.constraints.NotEmpty;

public record PerguntaRecord(
    Long id,
    @NotEmpty String titulo,
    @NotEmpty String mensagem,
    Integer visualizacoes,
    Integer votos,
    String tags
) {
    public PerguntaRecord {
        visualizacoes = 0;
        votos = 0;
    }
}
