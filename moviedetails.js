
$(document).ready(()=>{
  

	
	$("#btn1").click(()=>{

  
     if ($('.mov').val() == "") 
     {
     	alert("please enter the title")


     }
     else
     {
        $('#first').addClass('vision');
		getalldata();	
     }

		
	})
	$("#btn2").click(()=>{

		
		if($('.ide').val() == "")
		{
			alert("please enter the Id")
		}
		else
		{
			$('#first').addClass('vision');
		getalldata();

		}
	})
	$("#btn3").click(()=>{


		if($('.mov1').val()=="" )
		{
			alert("please enter the title")
		}
    else if($('.saal').val()=="")
    {
        alert("please enter the year")
    }
		else
		{
			$('#first').addClass('vision');
		getalldata();
		}

		
	})

	$("#btn1").click(()=>{
		 $('#a').hide() && $('#b').hide() && $('#c').hide() && $('#home').removeClass('vision') &&
    $(".b1").css("background-color","#CABDC7") && $(".b2").css("background-color","#03FBCA") && $(".b3").css("background-color","#03FBCA");
	})

	$("#btn2").click(()=>{
		$('#a').hide() && $('#b').hide() && $('#c').hide() &&$('#home').removeClass('vision')&&
    $(".b2").css("background-color","#CABDC7") && $(".b1").css("background-color","#03FBCA") && $(".b3").css("background-color","#03FBCA");
	})

	$("#btn3").click(()=>{
		$('#a').hide() && $('#b').hide() && $('#c').hide() && $('#home').removeClass('vision')&&
    $(".b3").css("background-color","#CABDC7") && $(".b1").css("background-color","#03FBCA") && $(".b2").css("background-color","#03FBCA");
	})

$('#1').click(()=>
{
  $('this').css("background-color","gray")
})

});



let getalldata = ()=>

{


	let title= $(".mov").val() || $(".mov1").val();
    let year = $(".saal").val();
    let ide = $(".ide").val();


//var link = 'http://www.omdbapi.com/?t='+title+'&y='+year+'&i='+ide+'&apikey=9127e66a'
   
            $.ajax({
     




     type: 'GET',
        dataType: "jsonp",
        async: true,
        url: 'https://www.omdbapi.com/?t='+title+'&y='+year+'&i='+ide+'&&apikey=f86a97f3',

        success: (response)=>
        {     
          
          console.log(response);

                
                    $('#moviedisplay').removeClass('vision') && $('#home').removeClass('vision');
                    
                  
                      if(undefined !== response.Title && null !== response.Title )
                      {
                  $('.name').append(response.Title);

                      }
                      else
                      {
          $('#errorhandle').removeClass('vision') && $('#home').removeClass('vision') && $('#moviedisplay').addClass('vision');  

                      }

                  $('.year').append(response.Year);
                  $('.plot').append(response.Plot);
                  $('.release').append(response.Released);
                   $('.runtime').append(response.Runtime);
                   $('.genre').append(response.Genre);
                   $('.directors').append(response.Director);
                   $('.actors').append(response.Actors);
                   $('.writers').append(response.Writer);
                   $('.imdbid').append(response.imdbID);
                        if ("N/A" || null || undefined == response.Ratings[0].Value) 
                        {
                          $('.rating').append("N/A");
                        }
                        else
                        {
                   $('.rating').append(response.Ratings[0].Value);

                        }

                   $('.voting').append(response.imdbVotes);
                   $('.metascore').append(response.Metascore);
                   $('.collection').append(response.BoxOffice);
                    $('.language').append(response.Language);
                     $('.awards').append(response.Awards);
                     $('.country').append(response.Country);






                   $('.img').append(()=>{ if( "N/A" == response.Poster)
                  {



                    $(".img").html('<img src="movie.jpg " class="img-fluid" style="border-style: solid;" >');
                  

                  }
                  else
                  {

                 
                  $(".img").html('<img src=" ' + response.Poster + ' " class="img-fluid" style="border-style: solid;">');

                  }});


                  

                 

                  
              
                   
                
                 
                   
        },
        timeout: 4000,

        error: (err)=>
        {
 console.log(err);
          $('#errorhandle').removeClass('vision') && $('#home').removeClass('vision');  

        },
       beforeSend: ()=>
       {
        $("#ldr").removeClass('vision')
       },
       complete:()=>
       {
         $("#ldr").addClass('vision')
       }

       



  }); 





  
}
