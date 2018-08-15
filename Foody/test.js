var aScroll=document.getElementById("first");
function showposition(){
		var scrollTop= window.scrollY;
		aScroll.style.top= scrollTop*.5+'px';
		}
window.addEventListener('scroll',showposition,false);

$(document).ready(function(){
	$('#nameInput').on('blur',function(){
		if(this.value.length <10){
			$('#name').html('Longer than 10 chars');
		}else{
			$('#name').html(' ');
		}
	})

	$('#numberInput').on('blur',function(){
		if(this.value.length <10){
			$('#number').html('Longer than 10 numbers');
		}else{
			$('#numer').html(' ');
		}
	})
})
$(window).scroll(function(){
		var wScroll=$(this).scrollTop();
		if (wScroll>$('.photoes').offset().top-($(window).height()/1.2)){
				$('.photoes').each(function(i){

					setTimeout(function(){
						$('.photoes').eq(i).addClass('isShowing');
					},100*(i+1));
				})
		}
	})

	

