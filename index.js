function get_movie_details(display,title) 
{
	var result=null;
	title = title.split(' ').join('+')
	var xhr=new XMLHttpRequest();
	var url="http://www.omdbapi.com/?t="+title+"&apikey=87597966";
	xhr.open("GET",url);
	xhr.send();
	xhr.onload = function()
	{
		if(xhr.status == 200)
		{
			result = xhr.response;
			console.log(result)
			print_data(result);
		}
		else
		{
			console.log("Error Code is: " +xhr.status);
		}
	}
}

var print_data = function(input)
{
	var body=document.querySelector("body")
	var display=document.createElement("p")

	if(input==null)
	{
		display.textContent = "Error! No movie data Present";
	}
	else
	{
		// display.textContent=input;
		var json=JSON.parse(input);	
		var child1=document.createElement("h3");
		// var parent1=document.querySelector("#column1");
		//parent1.innerHTML="";
		var par=document.querySelector(".inner_right_box");
		par.innerHTML=""
		par.appendChild(child1);
		child1.textContent="TITLE :" +json.Title;


		var json=JSON.parse(input);	
		var child11=document.createElement("h3");
		// var parent1=document.querySelector("#column1");
		par.appendChild(child11);
		child11.textContent="IMDB ID :" +json.imdbID;


		var child2=document.createElement("h3")
		// var parent1=document.querySelector("#column1");
		par.appendChild(child2);
		child2.textContent="YEAR :" +json.Year;

		var child3=document.createElement("h3")
		// var parent1=document.querySelector("#column1");
		par.appendChild(child3);
		child3.textContent="RELEASED: " +json.Released;

		var child4=document.createElement("h3")
		// var parent1=document.querySelector("#column1");
		par.appendChild(child4);
		child4.textContent="RUNTIME: " +json.Runtime;

		var child5=document.createElement("h3")
		// var par=document.querySelector("#column1");
		par.appendChild(child5);
		child5.textContent="GENRE : " +json.Genre;

		var child6=document.createElement("h3")
		// var par=document.querySelector("#column1");
		par.appendChild(child6);
		child6.textContent="DIRECTOR :" +json.Director;  

		var child7=document.createElement("h3")
		// var par=document.querySelector("#column1");
		par.appendChild(child7);
		child7.textContent="WRITER :" +json.Writer;  
	
		var child8=document.createElement("h3")
		// var par=document.querySelector("#column1");
		par.appendChild(child8);
		child8.textContent="ACTORS :" +json.Actors;

		var child9=document.createElement("h3")
		// var par=document.querySelector("#column1");
		par.appendChild(child9);
		child9.textContent="LANGUAGES :" +json.Language;

		var child10=document.createElement("img")
		child10.setAttribute("src",json.Poster)
		// var par=document.querySelector(".inner_right_box");
		par.appendChild(child10);
		child10.textContent="POSTER :" +json.Poster;

	}
 	// body.append(display);
}

var display_btn=document.querySelector("#search");
display_btn.addEventListener("click",function()
{
	var movie1=document.getElementById("movie_name").value;
	get_movie_details(print_data,movie1);

});
