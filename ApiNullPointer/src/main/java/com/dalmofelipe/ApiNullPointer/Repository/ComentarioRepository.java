package com.dalmofelipe.ApiNullPointer.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dalmofelipe.ApiNullPointer.Entities.Comentario;

public interface ComentarioRepository extends JpaRepository<Comentario, Long> {
    
}
