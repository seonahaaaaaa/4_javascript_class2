
// window.onload = function(){	
		
  var list = document.getElementById('list');
  var pic = document.getElementById('pic');
  var del = document.getElementById('del');

  // 리스트에서 선택(클릭했을 때)
	list.onclick = function(evt){
		let isbn = evt.target.getAttribute('data-isbn');
		//alert(isbn);
		if(isbn){
			// <img src = '경로' height = '150' width = '100'
			let img = document.createElement('img');
			img.src = 'images/' + isbn + '.jpg';
			img.height = 150;
			img.width = 100;
			
			if(pic.getElementsByTagName('img').length == 0){
				pic.appendChild(img);
				del.disabled = false;
		
				//var btn = document.getElementById('del');   // 문서(document) 에서 btn 아이디를 찾아와서 value와 type 을 얻어와 btn 변수에 담음
				//btn.onclick = function(){					// onclick 이벤트 : 사용자가 요소를 클릭했을때 발생하는 이벤트
							//pic.removeChild(img);
							//}
				
				//pic.removeChild(img);
			}else{
				pic.replaceChild(img , pic.lastChild);	// 마지막으로 선택한 속성으로 이미지 전환
				
				//var btn = document.getElementById('del');  
			//	btn.onclick = function(){					
							//pic.removeChild(img);
						//	}
			
		}
	}
	
	
}
		del.onclick = function(){					
							pic.removeChild(pic.lastChild);
							}
  // 삭제 버튼 누르면 pic 아래 자식(img 태그)를 지운다

  	
  
  
//};
