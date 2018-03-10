

     function show_tab()
     {
     	var head=document.getElementsByClassName('head');
     	var btn1=document.getElementById('btn1');
     	var btn2=document.getElementById('btn2');
     	var div=document.getElementById('main_tab');
     	var div2=document.getElementById('main_prime');
     	div2.style.display = "none";
        div.style.display = "block";
        btn1.style.background = "darkblue";
        btn2.style.background = "#81D4FA";
        head[0].innerHTML='TABLE CALCULATION';

     }
     	
     	 function show_prime()
     {
     	var head=document.getElementsByClassName('head');
     	var btn1=document.getElementById('btn1');
     	var btn2=document.getElementById('btn2');
     		var div=document.getElementById('main_tab');
     	var div2=document.getElementById('main_prime');
     	div.style.display = "none";
        div2.style.display = "block";
        btn2.style.background = "darkblue";
        btn1.style.background = "#81D4FA";
        head[0].innerHTML='PRIME NUMBER CALCULATION';


     }
     	function cal() {
     		var div=document.getElementById('tab_div');
     		div.innerHTML= '';
     		
			var num=document.getElementById('tab').value;
			var error=document.getElementById('error_msg');

			if(isNaN(num) || num==0)
			{
				error.innerHTML='*Please enter valid data';
				document.getElementById('tab').focus();
			}
			
			else
			{
			error.innerHTML='';
     		
     		

     		for (var i = 1; i <=10; i++) {
     			var mul=num*i;
     			var str=num+'  *  '+i+'  =  '+mul+'<br>';
     			div.innerHTML += str;
     		}

     			 		}
     			 	}

     	function cal_prime() {

     		var div=document.getElementById('prime_div');
     		var error=document.getElementById('error_mesg');

     		div.innerHTML='';
     		error.innerHTML="";
     		
			var to=parseInt(document.getElementById('to').value);
			var from=parseInt(document.getElementById('from').value);

			var flag=1,str;

     		
			if( isNaN(to)  || isNaN(from))
			{
					
     				error.innerHTML='*Please enter valid data';
				    document.getElementById('to').focus();		
     		
     			}
     			else if(to>from)
     			{

				    error.innerHTML="*Please give valid range";
				document.getElementById('to').focus();

     			}
     			else
     			{
     				for (var i = to; i <=from; i++) {

     			flag=1;
     			
     			for (var j=2; j<= i/2; j++) {

     				if(i%j==0)
     				{
     				   flag=0;
     				    break;
     				 }	


     				    }

     				if(flag==1)
     				{
     					str='<li>'+i+'</li>'+'<br>';
     					div.innerHTML += str;
     				}
     			

     			 }
     				
     			}

     	}
