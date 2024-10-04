package com.dalmofelipe.api.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.dalmofelipe.api.Entities.Pergunta;
import com.dalmofelipe.api.Records.PerguntaRecord;

public interface PerguntaRepository extends JpaRepository<Pergunta, Long> {

    @Query("""
        SELECT new com.dalmofelipe.api.Records.PerguntaRecord(
            p.id, p.titulo, p.mensagem, p.visualizacoes, p.votos, p.tags
        )
        FROM Pergunta p
        """)
    List<PerguntaRecord> findAllToRecord();

}
