/**
 * 
 */
$(function(){
	
	$("#liked-icon").click(function(){
				
		$.ajax({		
				url : "activelog.do",
				success : activeLogResult,
				
			});
		
		function activeLogResult(result){
			
			var datas = JSON.parse(result);
			var temp="";
			$('#active_feed').html("");
			console.log(datas);
			for(var i=0; i<datas.length; i++){
				//$('.ui.selection.list').append(
					var str = "<div class='item'>"+
			            "<div class='left floated content'>"+
			                "<img class='ui avatar image' src='images/avatar/small/daniel.jpg'>"+
			            "</div>"+
			            "<div class='right floated content'>"+
			                "<button class='ui tiny button violet btn_follow'>"+"팔로우</button>"+
			            "</div>"+
			            "<div class='middle aligned content'>"+
			                "<div class='description'>";
			         if(datas[i].like_id === ""){            
			              temp = "<a class='header'>"+datas[i].comment_id+"</a>"+
			                     "님이 회원님의 사진에 댓글을 남겼습니다.";
			         }else{
			        	  temp = "<a class='header'>"+datas[i].like_id+"</a>"+
			        	 		 "님이 회원님의 사진을 좋아합니다.";
			         }
			         str += temp;
			         str += "</div></div></div>";
			         $('#active_feed').append(str);
			}
		}
		$('#active-modal')
        .modal({
            closable: false,
            transition: 'fade',
            selector: {
				deny : '.close'
			}
        })
        .modal('show');		
	})
});