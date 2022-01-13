package com.springBootKafkaMicroServices.domaincrawler;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;


@RestController
@RequestMapping("domain")
public class DomainCrawlerController {

    private DomainCrawlerService domainCrawlerService;
    
    public DomainCrawlerController(DomainCrawlerService domainCrawlerService) {
        this.domainCrawlerService = domainCrawlerService;
    }

    @CrossOrigin(origins = "*",allowedHeaders = "*")
    @GetMapping(value="/lookup/{name}",produces="application/json")
    public ResponseEntity<List<String>> lookup(@PathVariable("name") final String name) {
        return getResponses(domainCrawlerService.crawl(name));
    }

    @CrossOrigin(origins = "*",allowedHeaders = "*")
    @PostMapping(value="/save/")
    public ResponseEntity<StringResponse> save(@RequestBody final List<String> domains) {
        try (FileWriter fstream = new FileWriter("domains.txt");
             BufferedWriter info = new BufferedWriter(fstream)) {
            for (int i = 0; i < domains.size(); i++) {
                info.write(domains.get(i)+"\n");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return getResponse(domains);
    }


    @CrossOrigin(origins = "*",allowedHeaders = "*")
    @GetMapping(value="/status/{name}",produces="application/json")
    public ResponseEntity<List<String>> status(@PathVariable("name") final String name) {
        return getResponses(domainCrawlerService.crawlStatus(name));
    }

    public ResponseEntity<List<String>> getResponses(List<String> domainList) {
        return ResponseEntity.accepted().body(domainList);
    }

    public ResponseEntity<StringResponse> getResponse(List<String> domains) {
        if (domains.size() > 0) {
            return ResponseEntity.accepted().body(new StringResponse("The domains were successfully saved to the domains.txt"));
        } else {
            return ResponseEntity.accepted().body(new StringResponse("No domains were successfully saved to the domains.txt"));
        }
    }
}
