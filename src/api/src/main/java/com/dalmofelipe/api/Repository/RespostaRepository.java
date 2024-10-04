package com.dalmofelipe.api.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dalmofelipe.api.Entities.Resposta;

public interface RespostaRepository extends JpaRepository<Resposta, Long> {
    
}
