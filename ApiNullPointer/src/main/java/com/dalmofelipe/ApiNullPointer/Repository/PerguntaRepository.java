package com.dalmofelipe.ApiNullPointer.Repository;

import com.dalmofelipe.ApiNullPointer.Entities.Pergunta;
import com.dalmofelipe.ApiNullPointer.Records.PerguntaRecord;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PerguntaRepository extends JpaRepository<Pergunta, Long> {

    @Query("SELECT new com.dalmofelipe.ApiNullPointer.Records.PerguntaRecord(p.id, p.titulo, p.mensagem, p.visualizacoes, p.votos, p.tags) FROM Pergunta p")
    List<PerguntaRecord> findAllToRecord();

}
