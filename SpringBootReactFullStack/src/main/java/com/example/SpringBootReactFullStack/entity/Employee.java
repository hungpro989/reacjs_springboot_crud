package com.example.SpringBootReactFullStack.entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;





@Entity
@Table(name="PRODUCT")
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long productId;
	 private String productName;
	 private String productCity;
	
	public Employee() {
		
	}


	public Employee(Long productId, String productName, String productCity) {
		
		this.productId = productId;
		this.productName = productName;
		this.productCity = productCity;
	}


	public Long getProductId() {
		return productId;
	}


	public void setProductId(Long productId) {
		this.productId = productId;
	}


	public String getProductName() {
		return productName;
	}


	public void setProductName(String productName) {
		this.productName = productName;
	}


	public String getProductCity() {
		return productCity;
	}


	public void setProductCity(String productCity) {
		this.productCity = productCity;
	}
	
	
	
	
	
}
