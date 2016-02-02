var start_count=0;

function start()
{	
	if(start_count===0){
		var tile=document.getElementById('main');
		var image=document.getElementById('startImage');
		var i=0;
		function startAnim(){
			i++;
			//tile.style.marginTop=250-5*i+'px';
			
			image.style.height=650-5*i+'px';
			image.style.width=520-4*i+'px';
			tile.style.height=660-5*i+'px';
			if (i===108) {
				clearInterval(a);
				//$("#rest").slideDown(2000);
				$("#about").slideDown(2000);
				$("#topics").slideDown(2000);
			}
		}
		var a=setInterval(startAnim,20);
	}
	start_count++;
}


$(document).ready(function(){
	$("#name").click(function(){
		$("#about").slideToggle("slow");
	});
});


$(document).ready(function(){
	$("#trending").click(function(){
		$("#topics").slideToggle("slow");
	});
});








function change()
{
	var pic=document.getElementById('dp');
	if (pic.src.match("deepak.jpg")) {pic.src="deepak2.jpg"} else{pic.src="deepak.jpg"};
	//var i=0;
	// function animate()
	// {
	// //	alert(pic.style.left);
	// 	pic.style.left = (i*5) + 'px';
	// 	i++;
	// 	if(i===5)clearInterval(a);
	// }
	// var a=setInterval(animate,10);
	moveRight(pic);
}

function moveRight(elem){
	var i=0;
	function move(){
		i=i+5;
		elem.style.height=2*i+'px';
		elem.style.width=2*i+'px';
		elem.style.paddingLeft=150-i+'px';
		elem.style.paddingRight=150-i+'px';
		elem.style.paddingTop=150-i+'px';
		elem.style.paddingBottom=150-i+'px';
		if(i===150) clearInterval(a);
	}
	var a=setInterval(move,30);
}

