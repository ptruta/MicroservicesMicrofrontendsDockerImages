package com.springBootKafkaMicroServices.domainservice;

import com.springBootKafkaMicroServices.domaincrawler.Domain;
import org.apache.kafka.streams.kstream.KStream;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.function.Consumer;

@Configuration
public class DomainKafkaConsumer {

    @Bean
    public Consumer<KStream<String, Domain>> domainService() {

        return kstream -> kstream.filter((key, domain) -> {
            if (domain.isDead()) {
                System.out.println(String.format("Domain consumed[%s] Status INACTIVE ", domain.getDomain()));
            }else {
                System.out.println(String.format("Domain consumed[%s] Status ACTIVE ", domain.getDomain()));
            }
            return false;
        });
    }
}
