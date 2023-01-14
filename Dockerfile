# docker build -t portfolio/portfolioapp:latest -f Dockerfile --build-arg JAR_FILE=portfolio-1.2.0.jar .
FROM openjdk:19-jdk-alpine3.16
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring
ARG JAR_FILE
COPY ./target/${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","app.jar"]