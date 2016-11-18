package dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import jpamanager.JpaManager;

public class UserListDao {
	
	public List<Object[]> fetchData()
	{	
		//create the entity manager
		EntityManager entityManager = JpaManager.getEntityManagerFactory().createEntityManager();
		
		//Begin entity manager transaction
		entityManager.getTransaction().begin();
		
		Query q = entityManager.createNativeQuery("SELECT users.user_id,users.name,users.phone,users.email,users.mark1,users.mark2,users.average FROM user_details users");
		List<Object[]> fetchedData = q.getResultList();
		
		//closing the entity manager transaction
		entityManager.getTransaction().commit();
		entityManager.close();
		
		return fetchedData;
	}
}
