Difference between JPA, Hibernate and Spring Data JPA

1. JPA (Java Persistence API)

• JPA is a specification (standard) for object-relational mapping in Java.
• It defines interfaces and annotations for mapping Java objects to database tables.
• JPA itself does not perform database operations.
• It requires an implementation such as Hibernate.

Example:
@Entity
@Table
@Id

--------------------------------------------

2. Hibernate

• Hibernate is an ORM framework.
• It is one of the most popular implementations of JPA.
• Hibernate converts Java objects into database records automatically.
• It provides features like caching, lazy loading and HQL.

Hibernate implements JPA.

--------------------------------------------

3. Spring Data JPA

• Spring Data JPA is built on top of JPA.
• It reduces boilerplate code.
• It automatically provides CRUD operations through JpaRepository.
• Developers do not need to write SQL for basic operations.

Example methods:
save()
findById()
findAll()
deleteById()

--------------------------------------------

Comparison

JPA
• Type: Specification
• Purpose: Defines ORM standards

Hibernate
• Type: Framework
• Purpose: Implements JPA

Spring Data JPA
• Type: Spring Module
• Purpose: Simplifies JPA using repositories

Relationship

Spring Data JPA
        ↓
      uses JPA
        ↓
Hibernate implements JPA
        ↓
Database