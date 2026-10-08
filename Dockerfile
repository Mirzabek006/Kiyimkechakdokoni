# 1-bosqich: Loyihani yig'ish (Maven + Java 17)
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# 2-bosqich: Yengil JRE 17 da ishga tushirish (xotiradan kam yeydi)
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

ENV PORT=8080
EXPOSE 8080

ENTRYPOINT ["java", "-Xmx380m", "-jar", "app.jar"]
