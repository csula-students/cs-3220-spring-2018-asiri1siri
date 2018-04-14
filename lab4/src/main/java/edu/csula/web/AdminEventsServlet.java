package edu.csula.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Collection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import edu.csula.storage.servlet.EventsDAOImpl;
import edu.csula.storage.EventsDAO;
import edu.csula.models.Event;

@WebServlet("/admin/events")
public class AdminEventsServlet extends HttpServlet 
{
	public void init()
	{
		EventsDAO dao = new EventsDAOImpl(getServletContext());
		Collection<Event> events = dao.getAll();
		dao.add(new Event(events.size(), "Grandma shows up","Lorem...", 10));
		dao.add(new Event(events.size(), "You can create a factory now!","Lorem...", 50));
		dao.add(new Event(events.size(), "We've found cookies in deep mountain...in the mine?","Lorem...", 200));
	}

	@Override
	public void doGet( HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		// TODO: render the events page HTML

		EventsDAO dao = new EventsDAOImpl(getServletContext());
		Collection<Event> events = dao.getAll();
		System.out.println(events);
		
		//out.println("<h1>Hello events servlet!</h1>");
		//render HTML
		String html = "<link rel='stylesheet' type='text/css\' href='" + request.getContextPath() + "/app.css' />";
		html += "<h1>Incremental Game Framework</h1>";

	}


	@Override
	public void doPost( HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		// TODO: handle upsert transaction
		EventsDAO dao = new EventsDAOImpl(getServletContext());
		Collection<Event> events = dao.getAll();
		
		//define Event class
		String name = request.getParameter("eventName");
		String description = request.getParameter("eventDescription");
		String triggerAt = request.getParameter("eventTriggeredAt");

		//define Event event
		Event event = new Event(events.size(), name, description, Integer.parseInt(triggerAt));
		dao.add(event);
	}
}
