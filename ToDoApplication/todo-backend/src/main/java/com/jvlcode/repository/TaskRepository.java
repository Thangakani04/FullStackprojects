package com.jvlcode.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jvlcode.model.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

}
