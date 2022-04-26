package com.example.SpringBootReactFullStack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.SpringBootReactFullStack.entity.Employee;
import com.example.SpringBootReactFullStack.repository.EmployeeRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
	@Autowired
	private EmployeeRepository eRepo;
	
	@GetMapping("/products")
	public List<Employee> getAllEmployees(){
		return eRepo.findAll();
	}
	@PostMapping("/products")
	public Employee saveEmployeeDetails(@RequestBody Employee employee) {
		return eRepo.save(employee);
	}
	@GetMapping("/products/{id}")
	public Employee getProductDetail(@PathVariable Long id){
		return eRepo.findById(id).get();
	}
	@PutMapping("/products")
	public Employee updateProductDetail(@RequestBody Employee employee) {
		return eRepo.save(employee);
	}
	@DeleteMapping("/products/{id}")
	public ResponseEntity<HttpStatus> deleteProductDetail(@PathVariable Long id) {
		eRepo.deleteById(id);
		return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	}
}
