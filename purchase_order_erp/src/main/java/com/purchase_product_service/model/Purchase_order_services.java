package com.purchase_product_service.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Purchase_order_services {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int serial_no;
	
	private String po_number;
	private Date po_date;
	private Date service_start_date;
	private Date service_end_date;
	private String category_name;
	private String billing_cycle;
	private String epbg_adv_bank;
	private String epbg_per;
	
	
	public Purchase_order_services() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Purchase_order_services(int serial_no, String po_number, Date po_date, Date service_start_date,
			Date service_end_date, String category_name, String billing_cycle, String epbg_adv_bank, String epbg_per) {
		super();
		this.serial_no = serial_no;
		this.po_number = po_number;
		this.po_date = po_date;
		this.service_start_date = service_start_date;
		this.service_end_date = service_end_date;
		this.category_name = category_name;
		this.billing_cycle = billing_cycle;
		this.epbg_adv_bank = epbg_adv_bank;
		this.epbg_per = epbg_per;
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


	public Date getPo_date() {
		return po_date;
	}


	public void setPo_date(Date po_date) {
		this.po_date = po_date;
	}


	public Date getService_start_date() {
		return service_start_date;
	}


	public void setService_start_date(Date service_start_date) {
		this.service_start_date = service_start_date;
	}


	public Date getService_end_date() {
		return service_end_date;
	}


	public void setService_end_date(Date service_end_date) {
		this.service_end_date = service_end_date;
	}


	public String getCategory_name() {
		return category_name;
	}


	public void setCategory_name(String category_name) {
		this.category_name = category_name;
	}


	public String getBilling_cycle() {
		return billing_cycle;
	}


	public void setBilling_cycle(String billing_cycle) {
		this.billing_cycle = billing_cycle;
	}


	public String getEpbg_adv_bank() {
		return epbg_adv_bank;
	}


	public void setEpbg_adv_bank(String epbg_adv_bank) {
		this.epbg_adv_bank = epbg_adv_bank;
	}


	public String getEpbg_per() {
		return epbg_per;
	}


	public void setEpbg_per(String epbg_per) {
		this.epbg_per = epbg_per;
	}
	
	
	
	
	
}
