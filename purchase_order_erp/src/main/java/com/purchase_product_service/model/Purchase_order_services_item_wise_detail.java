package com.purchase_product_service.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Purchase_order_services_item_wise_detail {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int serial_no;
	
	private String po_number;
	private String description;
	private String qty;
	private String cost;
	private String tot_val_without_addons;
	private String tot_addon_val;
	private String tot_val_with_addon;
	private String tot_contract_val;
	private boolean tax_bifurcation;
	public Purchase_order_services_item_wise_detail() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Purchase_order_services_item_wise_detail(int serial_no, String po_number, String description, String qty,
			String cost, String tot_val_without_addons, String tot_addon_val, String tot_val_with_addon,
			String tot_contract_val, boolean tax_bifurcation) {
		super();
		this.serial_no = serial_no;
		this.po_number = po_number;
		this.description = description;
		this.qty = qty;
		this.cost = cost;
		this.tot_val_without_addons = tot_val_without_addons;
		this.tot_addon_val = tot_addon_val;
		this.tot_val_with_addon = tot_val_with_addon;
		this.tot_contract_val = tot_contract_val;
		this.tax_bifurcation = tax_bifurcation;
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
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getQty() {
		return qty;
	}
	public void setQty(String qty) {
		this.qty = qty;
	}
	public String getCost() {
		return cost;
	}
	public void setCost(String cost) {
		this.cost = cost;
	}
	public String getTot_val_without_addons() {
		return tot_val_without_addons;
	}
	public void setTot_val_without_addons(String tot_val_without_addons) {
		this.tot_val_without_addons = tot_val_without_addons;
	}
	public String getTot_addon_val() {
		return tot_addon_val;
	}
	public void setTot_addon_val(String tot_addon_val) {
		this.tot_addon_val = tot_addon_val;
	}
	public String getTot_val_with_addon() {
		return tot_val_with_addon;
	}
	public void setTot_val_with_addon(String tot_val_with_addon) {
		this.tot_val_with_addon = tot_val_with_addon;
	}
	public String getTot_contract_val() {
		return tot_contract_val;
	}
	public void setTot_contract_val(String tot_contract_val) {
		this.tot_contract_val = tot_contract_val;
	}
	public boolean isTax_bifurcation() {
		return tax_bifurcation;
	}
	public void setTax_bifurcation(boolean tax_bifurcation) {
		this.tax_bifurcation = tax_bifurcation;
	}
	
	
	
	
	
}
