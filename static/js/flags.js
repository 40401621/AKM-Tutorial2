$(function(){
	var fr=$('<div/>');
	fr.append($('<div/>',{text:'France'}));
	fr.append($('<img/>',{src:'../static/flags/fr.gif'}));
	$('body').append(fr);
});

$(function(){
	var br=$('<div/>');
	br.append($('<div/>',{text:'Brazil'}));
	br.append($('<img/>',{src:'../static/flags/br.gif'}));
	$('body').append(br);
});

$(function(){
	var gr=$('<div/>');
	gr.append($('<div/>',{text:'Greece'}));
	gr.append($('<img/>',{src:'../static/flags/gr.gif'}));
	$('body').append(gr);
});

$(function(){
	$('img').css('border','solid 3px black');
	$('img').css('width',200);
	$('body').css('text-align','center');
	$('body').css('font-family','arial');
	$('body').css('font-size','x-large');
	$('div').css('width',206);

	$('body>div').css('padding','24px');
	$('div').css('display','inline-block');
	$('body>div').css('border','solid 2px black');
	$('div').css('margin','1ex');
});
$(function(){
	var clist=[
	["br","Brazil"],
	["fr","France"],
	["gr","Greece"],
	["za","South Africa"]
	];
$(function(){
	createOne();
});

function createOne(){
	var i = Math.floor(clist.length*Math.random());
	var code = clist[i][0];
	var name = clist[i][1];
	var qu = $('<div id="qu"/>');
	qu.append($('<div/>',{text:name,id:'ans'}).hide());
	qu.append($('<img/>',{src:'../static/flags/' + code +'.gif'}));
	$('body').append(qu);
	qu.append($('<input/>',{id:'response'}));
	$('#response').keyup(function(){
		if($('#response').val()==$('#ans').text()){
			alert("Well Done");
		}
	});
}
});



