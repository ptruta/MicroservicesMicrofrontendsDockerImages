package com.springBootKafkaMicroServices.domaincrawler;

import org.springframework.stereotype.Component;

public class StringResponse {
    
    String response;

    public StringResponse(String s) {
        this.response = s;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }

}
