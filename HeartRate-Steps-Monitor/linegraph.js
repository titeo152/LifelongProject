
var ajax_trigger=(function() {
	$.ajax({
		url:"http://localhost:1234/luanvan/rawdata3.php",
		type:"GET",
		success:function(data){
			var teo=[];
			teo.push(data[0].teo);
			if (teo[0]=='not safe'){
			document.getElementById("heartbeat").className="new";
			document.getElementById("alert").setAttribute("autoplay","");
			document.getElementById("alert").setAttribute("loop","loop");
			document.getElementById("alert").load();
			}
			else{
			document.getElementById("heartbeat").className="p";
			var alert1= document.getElementById("alert");
			document.getElementById("alert").setAttribute("autoplay","false");
			alert1.pause();
			}
		}
	
	})
})

var ajax_call=(function() 
{
    $.ajax
	({
		url:"http://localhost:1234/luanvan/data.php",
		type:"GET",
		
		success: function(data)
		{
			console.log(data);
			var datetime2count=[];
			var heartbeatcount=[];
			var stepscount=[];
			var datetimecount=[];
			var setsteps=[];
			var len=data.length;
		    for (var i=0;i<len;i++)
			{
				datetime2count.push(data[i].datetime2);
				datetimecount.push(data[i].datetime);
				stepscount.push(data[i].steps);
				setsteps.push(data[i].steps2);
				heartbeatcount.push(data[i].heartbeat);
			}
			document.getElementById("heartbeat").innerHTML=heartbeatcount[len-1];
			document.getElementById("steps").innerHTML=stepscount[len-1];
			document.getElementById("datetime").innerHTML=datetime2count[len-1];
			var chartdata=
			{
				labels: datetimecount,
				
				datasets:
				[{
				label:"stepscount",
				data:stepscount,
				fill:false,
				lineTension:0,	
				backgroundColor: "rgba(59,89,152,0.75)",
				borderColor:"rgba(29,202,255,1)",
				pointHoverBackgroundColor:"rgba(211,72,54,1)",
				pointHoverBorderColor:"rgba(211,72,54,1)"
				},{	
				label:"setsteps",
				fontSize:"19",
				data:setsteps,
				fill:false,
				lineTension:0,
				borderColor:"red",
				backgroundColor: "lightblue",pointHoverBorderColor:"rgba(211,72,54,1)"
					}]
			}
			var ctx=$("#mycanvas");
			
			var linegrapgh= new Chart(ctx,{
				type:'line',
				steppedLine:true,
				data: chartdata,
				options: {
				animation:{
				duration: 0, // general animation time
				},
				hover: {
					animationDuration: 0, // duration of animations when hovering an item
				},
				responsiveAnimationDuration: 0, // animation duration after a resize
			}
						})
		},
		error:function(data)
		{
		}
	});
	});
	$.ajaxSetup(false);
setInterval(ajax_call, 100);
//setInterval(ajax_set, 200);
setInterval(ajax_trigger, 3000);
//setInterval(ajax_percent,1000);