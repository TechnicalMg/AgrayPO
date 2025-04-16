package com.purchase_product_service.model;

import java.sql.Date;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Purchase_order {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int serial_no;
	
	private String po_number;
	private Date po_date;
	private String bid_Number;
	private String org_Type;
	private String org_ministry;
	private String org_department;
	private String org_name;
	private String org_office_zone;
	private String customer_id;
	private String ifd_concurrence;
	private String design_admin_approval;
	private String design_financial_approval;
	private String paying_role;
	private String payment_mode;
	private String payment_designation;
	private String payment_email;
	private String payment_gstin;
	private String payment_address;
	private String gem_seller_id;
	private String servicesCheck;
	private String mix_orders;
	private String mii_status;
	private String msme_verified;
	private String msme_registration_no;
	private String mse_gender;
	private String gstin;
	
	
	public Purchase_order()
	{
		
	}


	


	
	
	public Purchase_order(int serial_no, String po_number, Date po_date, String bid_Number, String org_Type,
			String org_ministry, String org_department, String org_name, String org_office_zone, String customer_id,
			String ifd_concurrence, String design_admin_approval, String design_financial_approval, String paying_role,
			String payment_mode, String payment_designation, String payment_email, String payment_gstin,
			String payment_address, String gem_seller_id, String servicesCheck, String mix_orders, String mii_status,
			String msme_verified, String msme_registration_no, String mse_gender, String gstin) {
		super();
		this.serial_no = serial_no;
		this.po_number = po_number;
		this.po_date = po_date;
		this.bid_Number = bid_Number;
		this.org_Type = org_Type;
		this.org_ministry = org_ministry;
		this.org_department = org_department;
		this.org_name = org_name;
		this.org_office_zone = org_office_zone;
		this.customer_id = customer_id;
		this.ifd_concurrence = ifd_concurrence;
		this.design_admin_approval = design_admin_approval;
		this.design_financial_approval = design_financial_approval;
		this.paying_role = paying_role;
		this.payment_mode = payment_mode;
		this.payment_designation = payment_designation;
		this.payment_email = payment_email;
		this.payment_gstin = payment_gstin;
		this.payment_address = payment_address;
		this.gem_seller_id = gem_seller_id;
		this.servicesCheck = servicesCheck;
		this.mix_orders = mix_orders;
		this.mii_status = mii_status;
		this.msme_verified = msme_verified;
		this.msme_registration_no = msme_registration_no;
		this.mse_gender = mse_gender;
		this.gstin = gstin;
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


	public String getBid_Number() {
		return bid_Number;
	}


	public void setBid_Number(String bid_Number) {
		this.bid_Number = bid_Number;
	}


	public String getOrg_Type() {
		return org_Type;
	}


	public void setOrg_Type(String org_Type) {
		this.org_Type = org_Type;
	}


	public String getOrg_ministry() {
		return org_ministry;
	}


	public void setOrg_ministry(String org_ministry) {
		this.org_ministry = org_ministry;
	}


	public String getOrg_department() {
		return org_department;
	}


	public void setOrg_department(String org_department) {
		this.org_department = org_department;
	}


	public String getOrg_name() {
		return org_name;
	}


	public void setOrg_name(String org_name) {
		this.org_name = org_name;
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


	public String getPayment_mode() {
		return payment_mode;
	}


	public void setPayment_mode(String payment_mode) {
		this.payment_mode = payment_mode;
	}


	public String getPayment_designation() {
		return payment_designation;
	}


	public void setPayment_designation(String payment_designation) {
		this.payment_designation = payment_designation;
	}


	public String getPayment_email() {
		return payment_email;
	}


	public void setPayment_email(String payment_email) {
		this.payment_email = payment_email;
	}


	public String getPayment_gstin() {
		return payment_gstin;
	}


	public void setPayment_gstin(String payment_gstin) {
		this.payment_gstin = payment_gstin;
	}


	public String getPayment_address() {
		return payment_address;
	}


	public void setPayment_address(String payment_address) {
		this.payment_address = payment_address;
	}


	public String getGem_seller_id() {
		return gem_seller_id;
	}


	public void setGem_seller_id(String gem_seller_id) {
		this.gem_seller_id = gem_seller_id;
	}


	public String getServicesCheck() {
		return servicesCheck;
	}


	public void setServicesCheck(String servicesCheck) {
		this.servicesCheck = servicesCheck;
	}


	


	public String getMix_orders() {
		return mix_orders;
	}


	public void setMix_orders(String mix_orders) {
		this.mix_orders = mix_orders;
	}


	public String getMii_status() {
		return mii_status;
	}


	public void setMii_status(String mii_status) {
		this.mii_status = mii_status;
	}


	public String getMsme_verified() {
		return msme_verified;
	}


	public void setMsme_verified(String msme_verified) {
		this.msme_verified = msme_verified;
	}


	public String getMsme_registration_no() {
		return msme_registration_no;
	}


	public void setMsme_registration_no(String msme_registration_no) {
		this.msme_registration_no = msme_registration_no;
	}


	public String getMse_gender() {
		return mse_gender;
	}


	public void setMse_gender(String mse_gender) {
		this.mse_gender = mse_gender;
	}


	public String getGstin() {
		return gstin;
	}


	public void setGstin(String gstin) {
		this.gstin = gstin;
	}
	
	
	
	
	

	
	
}
