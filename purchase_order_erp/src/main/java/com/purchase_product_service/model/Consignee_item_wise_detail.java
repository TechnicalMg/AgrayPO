package com.purchase_product_service.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Consignee_item_wise_detail {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int serial_no;
	
	private String consignee_id;
	private String bid_Number;
	private String item;
	private String lot_no;
	private String qty;
	private String del_start_date;
	private String del_end_date;
	private String serviceDescription;
	
	public Consignee_item_wise_detail()
	{
		
	}

	public Consignee_item_wise_detail(int serial_no, String consignee_id, String bid_Number, String item, String lot_no,
			String qty, String del_start_date, String del_end_date, String serviceDescription) {
		super();
		this.serial_no = serial_no;
		this.consignee_id = consignee_id;
		this.bid_Number = bid_Number;
		this.item = item;
		this.lot_no = lot_no;
		this.qty = qty;
		this.del_start_date = del_start_date;
		this.del_end_date = del_end_date;
		this.serviceDescription = serviceDescription;
	}

	public int getSerial_no() {
		return serial_no;
	}

	public void setSerial_no(int serial_no) {
		this.serial_no = serial_no;
	}

	public String getConsignee_id() {
		return consignee_id;
	}

	public void setConsignee_id(String consignee_id) {
		this.consignee_id = consignee_id;
	}

	public String getBid_Number() {
		return bid_Number;
	}

	public void setBid_Number(String bid_Number) {
		this.bid_Number = bid_Number;
	}

	public String getItem() {
		return item;
	}

	public void setItem(String item) {
		this.item = item;
	}

	public String getLot_no() {
		return lot_no;
	}

	public void setLot_no(String lot_no) {
		this.lot_no = lot_no;
	}

	public String getQty() {
		return qty;
	}

	public void setQty(String qty) {
		this.qty = qty;
	}

	public String getDel_start_date() {
		return del_start_date;
	}

	public void setDel_start_date(String del_start_date) {
		this.del_start_date = del_start_date;
	}

	public String getDel_end_date() {
		return del_end_date;
	}

	public void setDel_end_date(String del_end_date) {
		this.del_end_date = del_end_date;
	}

	public String getServiceDescription() {
		return serviceDescription;
	}

	public void setServiceDescription(String serviceDescription) {
		this.serviceDescription = serviceDescription;
	}
	
	
	
	
}
