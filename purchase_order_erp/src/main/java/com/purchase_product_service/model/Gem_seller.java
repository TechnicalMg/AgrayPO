package com.purchase_product_service.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Gem_seller {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int serial_no;
	
	private String gem_seller_id;
	private String company_name;
	private String contact;
	private String email;
	private String address;
	
	public Gem_seller()
	{
		
	}

	public Gem_seller(int serial_no, String gem_seller_id, String company_name, String contact, String email,
			String address) {
		super();
		this.serial_no = serial_no;
		this.gem_seller_id = gem_seller_id;
		this.company_name = company_name;
		this.contact = contact;
		this.email = email;
		this.address = address;
	}

	public int getSerial_no() {
		return serial_no;
	}

	public void setSerial_no(int serial_no) {
		this.serial_no = serial_no;
	}

	public String getGem_seller_id() {
		return gem_seller_id;
	}

	public void setGem_seller_id(String gem_seller_id) {
		this.gem_seller_id = gem_seller_id;
	}

	public String getCompany_name() {
		return company_name;
	}

	public void setCompany_name(String company_name) {
		this.company_name = company_name;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
	
	
}
