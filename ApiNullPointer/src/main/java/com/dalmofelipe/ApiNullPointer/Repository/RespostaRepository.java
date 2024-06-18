package com.dalmofelipe.ApiNullPointer.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dalmofelipe.ApiNullPointer.Entities.Resposta;

public interface RespostaRepository extends JpaRepository<Resposta, Long> {
    
}
