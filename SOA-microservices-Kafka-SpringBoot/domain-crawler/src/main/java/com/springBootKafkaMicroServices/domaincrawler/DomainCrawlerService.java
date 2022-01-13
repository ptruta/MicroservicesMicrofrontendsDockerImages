package com.springBootKafkaMicroServices.domaincrawler;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.MediaType;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.io.*;
import java.net.URL;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class DomainCrawlerService {

    private KafkaTemplate<String, Domain> kafkaTemplate;

    private final String KAFKA_TOPIC = "web-domains";

    private List<String> domainsResponse = new ArrayList<>();

    private List<String> statusResponse = new ArrayList<>();

    public DomainCrawlerService(KafkaTemplate<String, Domain> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public List<String> crawl(String name) {
        Mono<DomainList> domainListMono = WebClient.create()
                .get()
                .uri("https://api.domainsdb.info/v1/domains/search?domain=" + name + "-shops&zone=us")
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(DomainList.class);

        domainListMono.subscribe(domainList ->
                domainList.domains
                        .forEach(domain -> {
                            // the message got published
                            kafkaTemplate.send(KAFKA_TOPIC, domain);
                            System.out.println("Domain message" + domain.getDomain());
                        }));

        domainsResponse = new ArrayList<>();

        try {
            JSONObject jsonFromPage = readJsonFromUrl("https://api.domainsdb.info/v1/domains/search?domain=" + name + "-shops&zone=us");
            assert jsonFromPage != null;
            JSONArray domains = jsonFromPage.getJSONArray("domains");
            for (int i = 0; i < domains.length(); i++) {
                domainsResponse.add(domains.getJSONObject(i).getString("domain"));
            }

        } catch (JSONException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return domainsResponse;
    }

    public List<String> crawlStatus(String name) {

        statusResponse = new ArrayList<>();

        try {
            JSONObject jsonFromPage = readJsonFromUrl("https://api.domainsdb.info/v1/domains/search?domain=" + name + "-shops&zone=us");
            assert jsonFromPage != null;
            JSONArray domains = jsonFromPage.getJSONArray("domains");
            for (int i = 0; i < domains.length(); i++) {
                statusResponse.add(domains.getJSONObject(i).getString("isDead"));
            }

        } catch (JSONException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return statusResponse;
    }

    private JSONObject readJsonFromUrl(String link) throws IOException, JSONException {
        InputStream input = new URL(link).openStream();
        // Input Stream Object To Start Streaming.
        try {                                 // try catch for checked exception
            BufferedReader re = new BufferedReader(new InputStreamReader(input, Charset.forName("UTF-8")));
            // Buffer Reading In UTF-8
            String Text = Read(re);         // Handy Method To Read Data From BufferReader
            JSONObject json = new JSONObject(Text);    //Creating A JSON
            return json;    // Returning JSON
        } catch (Exception e) {
            return null;
        } finally {
            input.close();
        }
    }

    public String Read(Reader re) throws IOException {     // class Declaration
        StringBuilder str = new StringBuilder();     // To Store Url Data In String.
        int temp;
        do {

            temp = re.read();       //reading Charcter By Chracter.
            str.append((char) temp);

        } while (temp != -1);
        //  re.read() return -1 when there is end of buffer , data or end of file.

        return str.toString();

    }
}
