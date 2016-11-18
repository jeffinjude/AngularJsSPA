package dao;

import javax.persistence.EntityManager;

import jpamanager.JpaManager;
import models.UserDetails;

public class UserAddDao {
	
	public void insertData(String name,String phone,String email,double mark1,double mark2,double average)
	{
		//create the entity manager
		EntityManager entityManager = JpaManager.getEntityManagerFactory().createEntityManager();
		
		//Begin entity manager transaction
		entityManager.getTransaction().begin();
		
		UserDetails userDetails = new UserDetails();
		userDetails.setName(name);
		userDetails.setPhone(phone);
		userDetails.setEmail(email);
		userDetails.setMark1(mark1);
		userDetails.setMark2(mark2);
		userDetails.setAverage(average);
		
		entityManager.persist(userDetails);
		
		//closing the entity manager transaction
		entityManager.getTransaction().commit();
		entityManager.close();
	}
}
