package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name="user_details")
public class UserDetails {
	@Id
	@Column(name = "user_id")
	private int userId;
	@Column(name = "name")
	private String name;
	@Column(name = "phone")
	private String phone;
	@Column(name = "email")
	private String email;
	@Column(name = "mark1")
	private double mark1;
	@Column(name = "mark2")
	private double mark2;
	@Column(name = "average")
	private double average;
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public double getMark1() {
		return mark1;
	}
	public void setMark1(double mark1) {
		this.mark1 = mark1;
	}
	public double getMark2() {
		return mark2;
	}
	public void setMark2(double mark2) {
		this.mark2 = mark2;
	}
	public double getAverage() {
		return average;
	}
	public void setAverage(double average) {
		this.average = average;
	}
}
