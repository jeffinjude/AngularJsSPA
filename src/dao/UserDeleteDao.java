package dao;

import javax.persistence.EntityManager;

import jpamanager.JpaManager;
import models.UserDetails;

public class UserDeleteDao {
	
	public void deleteData(int id)
	{
		//create the entity manager
		EntityManager entityManager = JpaManager.getEntityManagerFactory().createEntityManager();
		
		//Begin entity manager transaction
		entityManager.getTransaction().begin();
		
		entityManager.remove(entityManager.find(UserDetails.class, id));
		
		//closing the entity manager transaction
		entityManager.getTransaction().commit();
		entityManager.close();
	}
}
