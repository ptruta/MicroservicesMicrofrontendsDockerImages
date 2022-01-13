package com.springBootKafkaMicroServices.domaincrawler;

import java.util.List;
import java.util.Objects;

public class DomainList {

    List<Domain> domains;

    public DomainList(List<Domain> domains) {
        this.domains = domains;
    }

    public DomainList() {
    }

    public void setDomains(List<Domain> domains) {
        this.domains = domains;
    }

    public List<Domain> getDomains() {
        return domains;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DomainList that = (DomainList) o;
        return Objects.equals(domains, that.domains);
    }

    @Override
    public int hashCode() {
        return Objects.hash(domains);
    }
}
