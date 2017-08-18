$(document).ready(function() {

	var quoteArr = [
		{
			quote: '"Whether you think you can or can\'t, you\'re right."',
			author: 'Henry Ford'
		},
		{
			quote: '"If we did all the things we are capable of, we would literally astound ourselves."',
			author: 'Thomas Edison'
		},
		{
			quote: '"You say this is a computer for ordinary people? Why would an ordinary person want a computer?"',
			author: 'Hewlett Packard executive to Steve Wozniak regarding Apple prototype'
		},
		{
			quote: '"The best way to predict the future is to invent it."',
			author: 'Alan Curtis Kay, Developer of Object Oriented Programming and the Windowing Graphical User Interface'
		},
		{
			quote: '"The best revenge is massive success."',
			author: 'Frank Sinatra'
		},
		{
			quote: '"Some birds aren\'t meant to be caged. Their feathers are just too bright."',
			author: 'Arnold Bennett, The Shawshank Redemption'
		},
		{
			quote: '"The past is just a story we tell ourselves."',
			author: 'Samantha, Her'
		},
		{
			quote: '"An idea is like a virus. Resilient. Highly contagious. And even the smallest seed of an idea can grow. It can grow to define you or destroy you."',
			author: 'Cobb, Inception'
		},
		{
			quote: '"Now you\'re looking for the secret, but you won\'t find it...because you\'re not really looking. You don\'t really want to know. You want to be fooled"',
			author: 'Christopher Nolan'
		},
		{
			quote: '"I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."',
			author: 'Maya Angelou'
		},
		{
			quote: '"The Internet is just a world passing around notes in a classroom."',
			author: 'Jon Stewart'
		},
		{
			quote: '"No pessimist ever discovered the secrets of the stars, or sailed to an uncharted land, or opened a new heaven to the horizon of the spirit."',
			author: 'Helen Keller'
		},
		{
			quote: '"I think I\'m cool. That\'s all that matters."',
			author:'Tyler, The Creator'
		}
	];

	var randomNum;
	var newQuote;
	var newAuthor;

	$('.button').on('click', function() {

		randomNum = Math.floor(Math.random()*quoteArr.length);
		newQuote = quoteArr[randomNum].quote;
		newAuthor = quoteArr[randomNum].author;
		$('#quote').text(newQuote);
		$('#author').text("-" + newAuthor);
	});

	$('#tweet').on('click', function() {

		window.open("https://twitter.com/intent/tweet?text=" + newQuote + ' - ' + newAuthor);

	});
});
