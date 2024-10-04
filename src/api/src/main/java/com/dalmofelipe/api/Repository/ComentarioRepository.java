package com.dalmofelipe.api.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dalmofelipe.api.Entities.Comentario;

public interface ComentarioRepository extends JpaRepository<Comentario, Long> {
    
}
