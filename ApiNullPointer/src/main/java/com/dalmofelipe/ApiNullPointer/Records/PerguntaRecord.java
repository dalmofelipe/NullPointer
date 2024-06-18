package com.dalmofelipe.ApiNullPointer.Records;

import java.util.List;

import jakarta.validation.constraints.NotEmpty;

public record PerguntaRecord(
    Long id,
    @NotEmpty String titulo,
    @NotEmpty String mensagem,
    Integer visualizacoes,
    Integer votos,
    List<String> tags
) {

    public PerguntaRecord {
        votos = 0;
        visualizacoes = 0;
    }

}
