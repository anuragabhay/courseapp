FROM openjdk:17
EXPOSE 8080
ADD target/course_data-0.0.1-SNAPSHOT.jar course_data.jar
ENTRYPOINT [ "java", "-jar", "course_data.jar" ]