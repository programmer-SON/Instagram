package com.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.comment.*;

public class writeCommentCommand implements Command {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub
		String feed_id = request.getParameter("comment_feed_id");
		String user_id = request.getParameter("comment_user_id");
		String content = request.getParameter("comment_content");
	
		int check = 0;
		commentDTO dto = new commentDTO();
		commentDAO dao = new commentDAO();
		
		dto.setFeed_id(feed_id);
		dto.setUser_id(user_id);
		dto.setContent(content);
		check = dao.insertComment(dto);
		request.setAttribute("feed_id", feed_id);				
	}

}
