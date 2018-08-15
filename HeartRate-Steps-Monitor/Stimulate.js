   $(document).ready(function(e) {
    $("#getpercent").click(function(){
	$("#mycanvas").hide(500);
	$("#piechart").show(1000);
	
	$.ajax({
		
		url:"http://localhost:1234/luanvan/data.php",
		type:"GET",
		
		success: function(data)
		{
			console.log(data);
			var stepscount=[];
			var datetimecount=[];
			var setsteps=[];
			var len=data.length;
		    for (var i=0;i<len;i++)
			{
				datetimecount.push(data[i].datetime);
				stepscount.push(data[i].steps);
				setsteps.push(data[i].steps2);
			}
		
		var goal= setsteps[len-1];
				var actualsteps= stepscount[len-1];
				var percentage= (actualsteps/goal)*100;			
				var ctx = document.getElementById('piechart').getContext('2d');
				var al = 0;
				var start = 1.5*Math.PI;
				var cw = ctx.canvas.width;
				var ch = ctx.canvas.height; 
				var diff;
				function progressSim(){
					
					diff = ((al / 100) * Math.PI*2*10).toFixed(2);
					ctx.clearRect(0, 0, cw, ch);
					ctx.lineWidth =30;
					ctx.fillStyle = '#09F';
					ctx.strokeStyle = "#09F";
					ctx.textAlign = 'center';
					ctx.font="80px Arial";
					ctx.fillText(al+'%', cw*.5, ch*.5+20, cw);
					ctx.beginPath();
					ctx.arc(150,150, 100, start, diff/10+start, false);
					ctx.stroke();
					if(al >= percentage){
						clearTimeout(sim);
						// Add scripting here that will run when progress completes
					}
					al++;
				}
				var sim = setInterval(progressSim, 20);
		}
		});

});
	
});