package com.dalmofelipe.api.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dalmofelipe.api.Entities.Comentario;
import com.dalmofelipe.api.Records.ComentarioRecord;
import com.dalmofelipe.api.Services.ComentarioService;

@RestController
@RequestMapping("/api/comentarios")
public class ComentarioController {

    @Autowired
    private ComentarioService comentarioService;

    @PostMapping
    public ResponseEntity<Comentario> save(@Validated @RequestBody ComentarioRecord record) {
        return ResponseEntity.ok(comentarioService.save(record));
    }

}
