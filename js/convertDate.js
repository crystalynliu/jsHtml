function convertDate (createDate) {
	if (createDate == null || createDate == undefined) {
	return '';
	}
	var match;
	if (!(match = createDate.match(/\d+/))) {
	return false;
	}
	createDate = createDate *1000;
	var date = new Date(parseInt(createDate,10));
	return ChangeDateFormat(date);
}

function ChangeDateFormat(date) {
        var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        return date.getFullYear() + "-" + month + "-" + currentDate;
 };

