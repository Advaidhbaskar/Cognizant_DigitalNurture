Exercise: Spring Data JPA Quick Example

Objective:
Demonstrate CRUD operations using Spring Data JPA and JpaRepository.

Technologies Used:
- Java 17
- Spring Boot 3.5.16
- Spring Data JPA
- H2 Database
- Maven

Operations Demonstrated:
1. save()
2. findById()
3. findAll()
4. deleteById()

Entity:
Student

Repository:
StudentRepository extends JpaRepository<Student, Long>

Result:
The application successfully performs CRUD operations on an H2 in-memory database and displays the output in the console.