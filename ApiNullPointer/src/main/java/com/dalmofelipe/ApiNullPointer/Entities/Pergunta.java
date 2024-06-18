package com.dalmofelipe.ApiNullPointer.Entities;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
    private String mensagem;
    private Integer visualizacoes;
    private Integer votos;
    private LocalDateTime data;
    private List<String> tags;

    @OneToMany(mappedBy = "pergunta", fetch = FetchType.EAGER)
    private List<Resposta> respostas;

    {
        this.data = LocalDateTime.now();
        this.votos = 0;
        this.visualizacoes = 0;
        this.tags = new ArrayList<String>();
    }

}
