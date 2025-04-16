package com.purchase_product_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.purchase_product_service.model.Purchase_order;

public interface Purchase_Order_Repository extends JpaRepository<Purchase_order, Integer> {

}
