package com.purchase_product_service.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Consignee_detail {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int serial_no;
	
	private String consignee_id;
	private String po_number;
	private String designation;
	private String email;
	private String contact;
	private String gstin;
	private String address;
	private String org_office_zone;
	private String customer_id;
	private String ifd_concurrence;
	private String design_admin_approval;
	private String design_financial_approval;
	private String paying_role;
	
	
	public Consignee_detail()
	{
		
	}


	public Consignee_detail(int serial_no, String consignee_id, String po_number, String designation, String email,
			String contact, String gstin, String address, String org_office_zone, String customer_id,
			String ifd_concurrence, String design_admin_approval, String design_financial_approval,
			String paying_role) {
		super();
		this.serial_no = serial_no;
		this.consignee_id = consignee_id;
		this.po_number = po_number;
		this.designation = designation;
		this.email = email;
		this.contact = contact;
		this.gstin = gstin;
		this.address = address;
		this.org_office_zone = org_office_zone;
		this.customer_id = customer_id;
		this.ifd_concurrence = ifd_concurrence;
		this.design_admin_approval = design_admin_approval;
		this.design_financial_approval = design_financial_approval;
		this.paying_role = paying_role;
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


	public String getPo_number() {
		return po_number;
	}


	public void setPo_number(String po_number) {
		this.po_number = po_number;
	}


	public String getDesignation() {
		return designation;
	}


	public void setDesignation(String designation) {
		this.designation = designation;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getContact() {
		return contact;
	}


	public void setContact(String contact) {
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


	public String getOrg_office_zone() {
		return org_office_zone;
	}


	public void setOrg_office_zone(String org_office_zone) {
		this.org_office_zone = org_office_zone;
	}


	public String getCustomer_id() {
		return customer_id;
	}


	public void setCustomer_id(String customer_id) {
		this.customer_id = customer_id;
	}


	public String getIfd_concurrence() {
		return ifd_concurrence;
	}


	public void setIfd_concurrence(String ifd_concurrence) {
		this.ifd_concurrence = ifd_concurrence;
	}


	public String getDesign_admin_approval() {
		return design_admin_approval;
	}


	public void setDesign_admin_approval(String design_admin_approval) {
		this.design_admin_approval = design_admin_approval;
	}


	public String getDesign_financial_approval() {
		return design_financial_approval;
	}


	public void setDesign_financial_approval(String design_financial_approval) {
		this.design_financial_approval = design_financial_approval;
	}


	public String getPaying_role() {
		return paying_role;
	}


	public void setPaying_role(String paying_role) {
		this.paying_role = paying_role;
	}
	
	
	
	
	
}
