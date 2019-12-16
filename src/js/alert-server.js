const myUrl = {
	"server" : "http://localhost:9000",
	"path" : "/rec"
}

const alertServer = (data, url = myUrl.server + myUrl.path) => {
	console.log(data);
	fetch(url, {
		method : "post",
		body : data,
		headers: {
		'Content-Type': 'application/json'
		}
	}).then(res => {
		res.text().then(data => {
			alert(data);
		})
	})
}

module.exports = alertServer;