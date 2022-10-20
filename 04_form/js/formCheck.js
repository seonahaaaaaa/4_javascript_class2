window.onload = function(){

		var frm = document.getElementById('frm');
		// var inputs = document.querySelectorAll("input");
		
		frm.onsubmit = function(evt){
			evt.stopPropagation();	// 부모 태그로의 이벤트 전파를 중단하라는 의미
			evt.preventDefault();	
			
			//alert(frm.agree.checked);
			if(!frm.agree.checked){
				alert('반드시 체크해주셔야 합니다.')
				return;
			}
			frm.submit();		
			
		}


	}