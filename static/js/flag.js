$(function(){

var clist=[
			["../static/flags/br","Brazil"],
			["../static/flags/fr","France"],
			["../static/flags/gr","Greece"],
			["../static/flags/za","South Africa"]
			];

$(function(){
	createOne();
})
function createOne(){
	var i =Math.floor(clist.length*Math.random());
	var code= clist[i][0];
	var name=clist[i][1];
	var qu=$('<div id="qu"/>');
	qu.append($('<div/>',{text:name,id:'ans'}).hide());
	qu.append($('<input/>',{id:'response'}));
	qu.append($('<img/>',{src:code+'.gif'}));
	$('body').append(qu);
	$('#response').keyup(function(){
	if($'#response'.val()==$('#ans').text()){
		alert("Well Done");
			$('#qu').hide('slow',function(){
			$('#qu').remove();
		createOne();
			})
		}
});