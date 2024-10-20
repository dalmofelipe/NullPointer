package com.dalmofelipe.api.Entities;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "tb_perguntas")
public class Pergunta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;

    @Lob
    @Column(columnDefinition = "TEXT", length = 1000)
    private String mensagem;

    private Integer visualizacoes;
    private Integer votos;
    private LocalDateTime data;
    private String tags;

    @OneToMany(mappedBy = "pergunta", fetch = FetchType.EAGER)
    private List<Resposta> respostas;

    {
        this.data = LocalDateTime.now();
        this.votos = 0;
        this.visualizacoes = 0;
        this.tags = "";
    }

}
