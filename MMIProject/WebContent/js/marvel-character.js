var character = {
	render: function(characterId) {
		var url = 'https://gateway.marvel.com/v1/public/characters/'+ characterId + '?ts=1&apikey=c595e70c18e11f4fc95f661ca42058bb&hash=59206b59009602a609233d8bd63dee6c';
		var box1 = document.getElementById("box1");
		var progress = document.getElementById("progress");
		box2.innerHTML = "";
		
		$.ajax ({
			url: url,
			type: "GET",
			beforeSend: function() {
				progress.innerHTML = "Marvel Character Loading...";
			},
			complete: function() {
				progress.innerHTML = "Character successfully loaded!!!";
			},
			success: function(data) {
				var element = data.data.results[0];
				var tempString = "<div class='row'>";
				
				tempString += "<div class='col-md-12' style='text-align: center'>";
				tempString += " <h4>" + element.name + "</h4>";
				tempString += "</div>";
				
				tempString = " <div class='col-md-12' style='text-align: center'>"; 
				tempString += " <img src='" + element.thumbnail.path + "/portrait_fantastic." + element.thumbnail.extension + "' />";
				tempString += "</div>";
				tempString += "</div>";
				tempString += "<div class='row'>";
				if (element.stories.items.length > 0) {
					tempString += "<div class='col-md-12' style='text-align: left'>";
					tempString += " <h4><u>STORIES</u></h4>";
					tempString += "</div>";
				}
				for (var i =0; i < element.stories.items.length;i++) {
					var story = element.stories.items[i];
					tempString += "<div class='col-md-12' style='text-align: left'>";
					tempString += story.name
					tempString += "</div>";
				}
				if (element.comics.items.length > 0) {
					tempString += "<br><br><div class='col-md-12' style='text-align: left'>";
					tempString += " <h4><u>COMICS</u></h>";
					tempString += "</div>";
				}
				for (var i = 0; i < element.comics.items.length;i++) {
					var comic = element.comics.items[i];
					tempString += "<div class='col-md-12' style='text-align: left'>";
					tempString += comic.name;
					tempString += "</div>";
				}
				
				box2.innerHTML = tempString;
			},
			error: function() {
				progress.innerHTML = "There was an error loading the character!!!";
			}
		});
	}
};