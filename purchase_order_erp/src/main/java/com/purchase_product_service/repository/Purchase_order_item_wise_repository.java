package com.purchase_product_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.purchase_product_service.model.Purchase_order_item_wise;

public interface Purchase_order_item_wise_repository extends JpaRepository<Purchase_order_item_wise, Integer>{

}
