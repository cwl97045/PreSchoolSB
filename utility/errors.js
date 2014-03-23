exports.invalidFields = function (res){
	res.send({status : '300', error :'One or more fields were invalid'});
};

exports.invalidQuery = function (res){
	res.send({status : '300', error :'Not a valid search query'});
}