package com.purchase_product_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.purchase_product_service.model.Customer;

public interface Customer_Repository extends JpaRepository<Customer, Integer>{

}
