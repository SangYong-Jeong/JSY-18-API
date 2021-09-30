$('.bt-token').click(onGetToken)

function onGetToken () {
	let userid = 'mmaduu'
	let apikey = 'd223d69f-29a9-4b30-874e-c4ba4b362bff'
	let apiURL = 'http://127.0.0.1:3100/api/sign'
	var data = { userid: userid, apikey: apikey } 
	axios.post(apiURL, data)
	.then(onResult)
	.catch(onError)

	function onResult (r) {
		console.log(r.data)
	}
	function onError (err) {
		console.log(err)
	}
}