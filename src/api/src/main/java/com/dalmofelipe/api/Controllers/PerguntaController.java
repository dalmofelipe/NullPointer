package com.dalmofelipe.api.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dalmofelipe.api.Entities.Pergunta;
import com.dalmofelipe.api.Records.PerguntaRecord;
import com.dalmofelipe.api.Services.PerguntaService;

@RestController
@RequestMapping("/api/perguntas")
public class PerguntaController {

    @Autowired
    private PerguntaService perguntaService;

    @GetMapping("/{id}")
    public ResponseEntity<Pergunta> getOne(@PathVariable(name = "id") Long id) {
        return ResponseEntity.ok(perguntaService.getOne(id));
    }

    // TODO: implementar paginação
    @GetMapping
    public ResponseEntity<List<PerguntaRecord>> getAll() {
        return ResponseEntity.ok(perguntaService.getAll());
    }

    @PostMapping
    public ResponseEntity<Pergunta> save(@Validated @RequestBody PerguntaRecord input) {
        return ResponseEntity.ok(perguntaService.save(input));
    }
}
