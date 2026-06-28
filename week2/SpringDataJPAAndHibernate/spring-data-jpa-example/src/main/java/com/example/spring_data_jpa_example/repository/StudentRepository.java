package com.example.spring_data_jpa_example.repository;

import com.example.spring_data_jpa_example.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {

}