$(document).ready(function () {
	var itemlist ={};
	$.ajax({
		type:"GET",
		dataType:"json",
		async:false,
		url:"bookmarks.json",
		success:function(data){
			itemlist = data;
		}
	})
	createlist(itemlist);
	handleMarks(itemlist);


function handleMarks(itemlist){
	$("#searchkey").bind('input propertychange',function () {

		var key = $("#searchkey").val();
		var reg = new RegExp("("+key+")","gi");
		var list = itemlist.concat();
		if(key==""){
			createlist(itemlist);
		}else{
			var matchData = list.filter(function(item){
					return item.title.match(reg);
			})
			createlist(matchData,reg);
		}
	})
}

function createlist(data,reg){
	var str = data.reduce(function(p,item){
		p+="<li class=\"list\"><div class=\"title\">"+highlightkey(reg,item.title) +"</div><div class=\"createDate\">Created@"+convertDate(item.created)+"</div></li>";
		return p;
	},"");
	$("ul").html(str);
}

function highlightkey(reg,title){
	var str = title.replace(reg,"<span>$1</span>");
	return str;
}

})
