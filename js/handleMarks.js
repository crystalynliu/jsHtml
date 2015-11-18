function handleMarks(){
	$("#searchkey").bind('input propertychange',function () {
		$.ajax({
			type:"GET",
			dataType:"json",
			url:"bookmarks.json",
			success:function(data){
				var key = $("#searchkey").val();
				var reg = new RegExp(key,'gi');
				if(key==""){
					createlist(data);
				}else{
					var matchData = data.filter(function(item){
							return item.title.match(reg);
						}).map(function(item){
						var keys = item.title.match(reg);
						var words = item.title.split(reg);
						var str = "";
						for(var i =0;i<words.length;i++){
							str+=words[i];
							if(i!=words.length-1){
								str+="<span>"+keys[i]+"</span>";
							}
						}
						item.title = str;
						return item;
					})
					createlist(matchData);
				}
			}
		})
	})
}

function createlist(data){
	var str = data.reduce(function(p,item){
		p+="<li class=\"list\"><div class=\"title\">"+item.title+"</div><div class=\"createDate\">Created@"+convertDate(item.created)+"</div></li>";
		return p;
	},"");
	$("ul").html(str);
}