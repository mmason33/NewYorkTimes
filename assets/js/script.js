
function api(e) {

	e.preventDefault();
	$('.article-body').empty();
	$('.article-wrap').css('display', 'block');

	var name = $("#name-input").val();
	var startYear = $("#start-year").val() !== '' ? '&begin_date=' + $("#start-year").val() + '0101' : '';
	var endYear = $("#end-year").val() !== '' ? '&end_date=' + $("#end-year").val() +'0101' : '';
	var limit = $(".dropdown").val();


	$.ajax({
		url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${name}${startYear}${endYear}&api-key=081909de7f3f4ade9fc29924b332b672`,
		method: 'GET'
	}).done(function(res) {

		for (i = 0; i < limit; i++) {

			// I was running into issue with some properites of the response returning null
			// Made ternary conditionals to handle that
			var headline = res.response.docs[i].headline.main !== null ? `<h4>${res.response.docs[i].headline.main}</h4>` : '';
			var author = res.response.docs[i].byline !== null ? `<p>${res.response.docs[i].byline.original}</p>` : '';
			var section = res.response.docs[i].section_name !== null ? `<p>${res.response.docs[i].section_name}</p>` : '';
			var date = res.response.docs[i].pub_date !== null ? `<p>${res.response.docs[i].pub_date}</p>` : '';
			var url = res.response.docs[i].web_url !== null ? `<a href="${res.response.docs[i].web_url}" target="_blank">View</a>` : '';

			$('.article-body').append(

				'<div class="article">' +
					headline +
					author +
					section +
					date +
					url +
				'</div>'

			);

		}

	});
}

$(document).ready( function () {

	$('.search-btn').click( function (e) {

		if ($("#name-input").val() !== '') api(e);

	});

});