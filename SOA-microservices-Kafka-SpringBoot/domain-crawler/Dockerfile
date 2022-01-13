FROM openjdk:11

# Add app binary
ADD target/domain-crawler-0.0.1-SNAPSHOT.jar /domain-crawler.jar

# Expose HTTP
EXPOSE 8080

# Define default command.
CMD java $JAVA_OPTIONS -Dserver.port=8080 -jar /domain-crawler.jar