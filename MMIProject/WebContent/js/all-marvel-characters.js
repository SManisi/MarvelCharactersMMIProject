var marvel = {
	render: function() {
		var progress = document.getElementById("progress");
		var url = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=c595e70c18e11f4fc95f661ca42058bb&hash=59206b59009602a609233d8bd63dee6c';
		var footer = document.getElementById("footer");
		var box1 = document.getElementById("box1");
		var comicCount = [];
		var storyCount = [];
		var characterCount = [];
		box1.innerHTML = "";
		$.ajax ({
			url: url,
			type: "GET",
			beforeSend: function() {
				progress.innerHTML = "Loading Marvel Characters...";
			},
			complete: function() {
				progress.innerHTML = "Successfully Loaded Marvel Characters!!!";
				createChart(comicCount, storyCount, characterCount);
			},
			success: function(data) {
				footer.innerHTML = data.attributionHTML;
				var tempString = "<div class='row'>";
				 
				for (var i = 0; i < data.data.results.length; i++) { 
					var element = data.data.results[i];
					comicCount[i] = element.comics.items.length;
					storyCount[i] = element.stories.items.length;
					characterCount[i] = i;
					
					tempString += "<div class='col-md-12' style='text-align: left; color:blue' onclick='character.render(" + element.id + ")'>";
					tempString += " <h4>" + element.name + "</h4>";
					tempString += "</div>";
					tempString += "</div>";
					tempString += "<div class='row'>";
					box1.innerHTML = tempString;
				}
			},
			error: function() {
				progress.innerHTML = "There was an error loading the character list!!!";
			}
		});
	}	
};