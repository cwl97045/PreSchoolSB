var ajaxCall = function(method, url, data){
	var call = $.ajax({
		type: method,
		url : url,
		data : data,
		dataType : "json"
	});

	return call;
};