package com.purchase_product_service.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Purchase_order_item_wise {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int serial_no;
	
	private String po_number;
	private String item_description;
	private String order_qty;
	private String order_unit;
	private String order_unit_price;
	private boolean tax_bifurcation;
	private String price;
	private String total;
	
	public Purchase_order_item_wise()
	{
		
	}

	public Purchase_order_item_wise(int serial_no, String po_number, String item_description, String order_qty,
			String order_unit, String order_unit_price, boolean tax_bifurcation, String price, String total) {
		super();
		this.serial_no = serial_no;
		this.po_number = po_number;
		this.item_description = item_description;
		this.order_qty = order_qty;
		this.order_unit = order_unit;
		this.order_unit_price = order_unit_price;
		this.tax_bifurcation = tax_bifurcation;
		this.price = price;
		this.total = total;
	}

	public int getSerial_no() {
		return serial_no;
	}

	public void setSerial_no(int serial_no) {
		this.serial_no = serial_no;
	}

	public String getPo_number() {
		return po_number;
	}

	public void setPo_number(String po_number) {
		this.po_number = po_number;
	}

	public String getItem_description() {
		return item_description;
	}

	public void setItem_description(String item_description) {
		this.item_description = item_description;
	}

	public String getOrder_qty() {
		return order_qty;
	}

	public void setOrder_qty(String order_qty) {
		this.order_qty = order_qty;
	}

	public String getOrder_unit() {
		return order_unit;
	}

	public void setOrder_unit(String order_unit) {
		this.order_unit = order_unit;
	}

	public String getOrder_unit_price() {
		return order_unit_price;
	}

	public void setOrder_unit_price(String order_unit_price) {
		this.order_unit_price = order_unit_price;
	}

	public boolean isTax_bifurcation() {
		return tax_bifurcation;
	}

	public void setTax_bifurcation(boolean tax_bifurcation) {
		this.tax_bifurcation = tax_bifurcation;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getTotal() {
		return total;
	}

	public void setTotal(String total) {
		this.total = total;
	}
	
	
	
	
	
}
