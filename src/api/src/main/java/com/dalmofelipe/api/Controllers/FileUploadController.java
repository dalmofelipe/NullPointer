package com.dalmofelipe.api.Controllers;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/upload")
public class FileUploadController {

    private static String UPLOAD_DIR = "src/main/resources/static/uploads/";
    
    @PostMapping("/file")
    public ResponseEntity<?> uploadFiles(@RequestParam("file") MultipartFile file, 
            HttpServletRequest request) throws InterruptedException {

        if(file.isEmpty()) {
            return ResponseEntity.badRequest().body("nenhum arquivo selecionado.");
        }

        try {
            Path uploadPath = Paths.get(UPLOAD_DIR);
            if(!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            String fileName = file.getOriginalFilename();
            Path filePath = uploadPath.resolve(fileName);

            Files.write(filePath, file.getBytes());

            String fileUrl = request.getScheme() 
                + "://" + request.getServerName()
                + ":" + request.getServerPort()
                + "/uploads/" + fileName;

            Thread.sleep(500); // recurso tec - foi necessário para imagem aparecer no front
            return ResponseEntity.ok("{\"success\":1, \"file\": {\"url\": \"" + fileUrl + "\"}}");

        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("erro ao salvar o arquivo.");
        }
    }
}
