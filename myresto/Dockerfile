FROM maven:3.8.3-openjdk-17

WORKDIR /myresto
COPY . .
RUN mvn clean install

EXPOSE 8000

CMD mvn spring-boot:run