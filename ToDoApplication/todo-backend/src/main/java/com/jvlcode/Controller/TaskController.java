package com.jvlcode.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jvlcode.model.Task;
import com.jvlcode.repository.TaskRepository;

@RestController
@CrossOrigin
@RequestMapping("/api/tasks")
public class TaskController {
	
	@Autowired
	private TaskRepository taskRepository;
	
	@GetMapping("/hello-world")
	public String helloworld() {
		return "Hello world from kani !!";
	}
	
	@PostMapping
	public Task createTask(@RequestBody Task task) {
		/*
		 * List<String> users = new ArrayList<>(); users.add("Kani");
		 * users.add("Sweta"); users.add("Ajay"); users.add("Arun"); users.add("Nivi");
		 * users.add("Kayal"); //these data will be received as Json data with the help
		 * of @ResponseBody
		 */		
		//@RequestBody annotation is used to fetch the date from the post request, this annotation will get the data from the post request and assign it to this task object
		System.out.println(task.getDescription() + " - " + task.isCompleted()); // this print is to verify whether the request data is reached this task object
		//to store this task object to the database we need to use Repository
		taskRepository.save(task);
		return task;
	}
	
	@GetMapping
	public List<Task> getAllTasks() {
		return taskRepository.findAll();
	}
	
	@PutMapping("/{id}")
	public Task updateTask(@PathVariable Long id, @RequestBody Task task) {
		task.setId(id);
		return taskRepository.save(task);
	}
	
	@DeleteMapping("/{id}")
	public void deleteTask(@PathVariable Long id) {
		taskRepository.deleteById(id);
	}

}
