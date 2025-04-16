package com.purchase_product_service.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int serial_no;
	
	private String custome_id;
	private Date contact;
	private String gstin;
	private String address;
	
	public Customer()
	{
		
	}

	public Customer(int serial_no, String custome_id, Date contact, String gstin, String address) {
		super();
		this.serial_no = serial_no;
		this.custome_id = custome_id;
		this.contact = contact;
		this.gstin = gstin;
		this.address = address;
	}

	public int getSerial_no() {
		return serial_no;
	}

	public void setSerial_no(int serial_no) {
		this.serial_no = serial_no;
	}

	public String getCustome_id() {
		return custome_id;
	}

	public void setCustome_id(String custome_id) {
		this.custome_id = custome_id;
	}

	public Date getContact() {
		return contact;
	}

	public void setContact(Date contact) {
		this.contact = contact;
	}

	public String getGstin() {
		return gstin;
	}

	public void setGstin(String gstin) {
		this.gstin = gstin;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
	
	
}
