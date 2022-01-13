FROM openjdk:11

LABEL maintainer="Patricia Truta"

ENV KAFKA_BOOTSTRAP_SERVER ""
ENV KAFKA_GROUP_ID ""
ENV TOPICS ""

ADD target/domain-service-0.0.1-SNAPSHOT.jar /domain-service.jar

ENTRYPOINT java -jar /domain-service.jar $KAFKA_BOOTSTRAP_SERVER $KAFKA_GROUP_ID $TOPICS
