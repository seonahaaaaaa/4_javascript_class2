window.onload = function(){
		
		// 합계 구하기
		let adult = document.getElementById('adult');
		let child = document.getElementById('child');
		let baby = document.getElementById('baby');
		
		adult.oninput = calc;
		child.oninput = calc;
		baby.oninput = calc;
		
		function calc(){
		let total = document.getElementById('total');
		total.value = adult.value * 39000 + child.value * 29000 + baby.value * 19000 ;
		

		}
		
			// 버튼 눌렀을때 약관 동의 필수
		let btn1 = document.getElementById('btn1');
		let btn2 = document.getElementById('btn2');
		
		btn1.onclick = agree;
		btn2.onclick = agree;
		
		let agree1 = document.getElementById('agree1');
		let agree2 = document.getElementById('agree2');
		
		function agree(evt){
			//alert(agree1.checked)
			//alert(agree2.checked)			
			
			if(!agree1.checked || !agree2.checked){
				alert('반드시 체크해주셔야 합니다.');
				return;
			}alert('확인')	
		
		}
		
	}