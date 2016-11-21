package dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import jpamanager.JpaManager;
import models.UserDetails;

public class UserDetailsDao {
	
	public UserDetails fetchUserDetails(int id)
	{
		//create the entity manager
		EntityManager entityManager = JpaManager.getEntityManagerFactory().createEntityManager();
		
		//Begin entity manager transaction
		entityManager.getTransaction().begin();
		
		UserDetails userDetails = entityManager.find(UserDetails.class, id);
		
		//closing the entity manager transaction
		entityManager.getTransaction().commit();
		entityManager.close();
		
		return userDetails;
	}
}
