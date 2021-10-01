$('.bt-data').click(onGetData)

var token = null
let userid = 'mmaduu'
let apikey = 'd223d69f-29a9-4b30-874e-c4ba4b362bff'
let dataURL = 'http://127.0.0.1:3100/api2'


function onGetData () {
	axios.get(dataURL + '?apikey='+apikey, {withCredentials: true} )
	.then(getData)
	.catch(onError)

	function getData(r) {
		console.log(r.data)
	}
}

function onError (err) {
	console.log(err)
}