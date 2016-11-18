package servlets;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import dao.UserListDao;
import models.UserDetails;

/**
 * Servlet implementation class UserList
 */
@WebServlet("/UserList")
public class UserList extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UserList() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		UserListDao userListDao = new UserListDao();
		List<Object[]> fetchedData = userListDao.fetchData();
		List<UserDetails> userDetailsList = new ArrayList<UserDetails>();
		if(!fetchedData.isEmpty())
		{	
			for(Object[] data : fetchedData) {
				UserDetails userDetails = new UserDetails();
				userDetails.setUserId(Integer.parseInt(data[0].toString()));
				userDetails.setName(data[1].toString());
				userDetails.setPhone(data[2].toString());
				userDetails.setEmail(data[3].toString());
				userDetails.setMark1(Double.parseDouble(data[4].toString()));
				userDetails.setMark2(Double.parseDouble(data[5].toString()));
				userDetails.setAverage(Double.parseDouble(data[6].toString()));
				userDetailsList.add(userDetails);
			}

			String json = new Gson().toJson(userDetailsList);

			response.setContentType("application/json");
			response.getWriter().write(json);
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
