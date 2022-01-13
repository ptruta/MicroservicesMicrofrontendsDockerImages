FROM openjdk:11

LABEL maintainer="Patricia Truta"

ENV KAFKA_BOOTSTRAP_SERVER ""
ENV INITIAL_DELAY 0
ENV INTERVAL 3000
ENV TOPICS ""

ADD target/domain-processor-0.0.1-SNAPSHOT.jar /domain-processor.jar

ENTRYPOINT java -jar domain-processor.jar $KAFKA_BOOTSTRAP_SERVER $INITIAL_DELAY $INTERVAL $TOPICS