package com.dalmofelipe.api.Entities;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "tb_respostas")
public class Resposta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    @Column(columnDefinition = "TEXT", length = 1000)
    private String mensagem;
    
    private Integer votos;
    private LocalDateTime data;

    @OneToMany(mappedBy = "resposta", fetch = FetchType.EAGER)
    private List<Comentario> comentarios;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "pergunta_id")
    private Pergunta pergunta;

    {
        this.data = LocalDateTime.now();
    }

}
