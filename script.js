	e.preventDefault();
	var name = $("#name-input").val()
	var startYear = $("#start-year").val()
	var endYear = $("#end-year").val()
	var limit = $(".dropdown").val();

	var queryURL = "https://api.nytimes.com/svc/topstories/v2/home.json?q=" + name + "begin_date=" + startYear + "end_date=" + endYear + "&api-key=081909de7f3f4ade9fc29924b332b672";

$.ajax({
	url: queryURL,
	method: 'GET'
}).done(function(response) {

	console.log(response);

		for(i=0; i < limit; i++) {

			var article = $("<div>");
			var title = $("<h1>");
			var author = $("<h4>");
			var section = $("<h4>");
			var date = $("<h4>");
			var link = $("<h4>");

			title.html(response.results[i].title);
			console.log(response.results[i].title);
			author.html(response.results[i].byline);
			section.html(response.results[i].section);
			date.html(response.results[i].created_date);
			link.html(response.results[i].url);

			article.append(title).append(author).append(section).append(date).append(link);
			$(".article-wrap").append(article);

			console.log(article);

			// $('.article-wrap').append(

			// 	'<h1>' + response.results[i].title + '</h1>'

			// );


		}

})
})