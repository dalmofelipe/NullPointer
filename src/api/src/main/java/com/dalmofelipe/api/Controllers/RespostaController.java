package com.dalmofelipe.api.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dalmofelipe.api.Entities.Resposta;
import com.dalmofelipe.api.Records.RespostaRecord;
import com.dalmofelipe.api.Services.RespostaService;

@RestController
@RequestMapping("/api/respostas")
public class RespostaController {

    @Autowired
    private RespostaService respostaService;

    @PostMapping
    public ResponseEntity<Resposta> save(@Validated @RequestBody RespostaRecord record) {
        return ResponseEntity.ok(respostaService.save(record));
    }
}
