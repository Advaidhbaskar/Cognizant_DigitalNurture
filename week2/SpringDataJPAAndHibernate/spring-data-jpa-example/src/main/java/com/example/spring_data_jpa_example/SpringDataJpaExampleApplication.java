package com.example.spring_data_jpa_example;


import com.example.spring_data_jpa_example.entity.Student;
import com.example.spring_data_jpa_example.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringDataJpaExampleApplication implements CommandLineRunner {

    @Autowired
    private StudentRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(SpringDataJpaExampleApplication.class, args);
    }

    @Override
    public void run(String... args) {

        // Save
        Student student = new Student("Advaidh", "Computer Science");
        repository.save(student);
        System.out.println("Student Saved");

        // Find By Id
        repository.findById(student.getId())
                .ifPresent(s -> System.out.println("Found: " + s.getName()));

        // Find All
        System.out.println("\nAll Students:");
        repository.findAll().forEach(s ->
                System.out.println(s.getId() + " " + s.getName() + " " + s.getCourse()));

        // Delete By Id
        repository.deleteById(student.getId());
        System.out.println("\nStudent Deleted");
    }
}