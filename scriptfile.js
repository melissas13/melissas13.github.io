<!-- begin quiz script -->
<script>
function finish() {
	var ext = '.html';
	var results = new Array("none","Web Development / Web Content","Web Security","Research","Writing / Editing","Podcast","Analytics","Graphic Design / Motion Graphics","Human Resources","Department Head","External Affairs ","Accessibility","Social Media ","Photo Finders","Special Projects");
	var nums = new Array(15);
	for(var i = 0; i < nums.length; i++) nums[i] = 0;
	for(var i = 1; i <= 13; i++) {
		var q = document.forms['quiz'].elements['question_'+i];
		if(q[0].type=='checkbox') {
			var n = 0;
		}
		for(var j = 0; j < q.length; j++) {
			if(q[j].checked) {
				var a = q[j].value.split(',');
				for(var k = 0; k < a.length; k++) {
					nums[a[k]]++;
				}
				if(q[j].type=='radio') break;
				else n++;
			}
			if(j == q.length-1&&q[j].type=='radio') {nums[0]++;}
		}
		if(q[0].type=='checkbox'&&((document.forms['quiz'].elements['question_'+i+'_min']&&n<document.forms['quiz'].elements['question_'+i+'_min'].value)||(document.forms['quiz'].elements['question_'+i+'_max']&&n>document.forms['quiz'].elements['question_'+i+'_max'].value))) nums[0]++;
	}
	var j = new Array('0');
	for (i in nums) if(nums[i]>nums[j[0]]){j=new Array(''+i);} else if(nums[i]==nums[j[0]])j[j.length] = i;
	//var o = '';for(var i in results)o+=results[i]+'='+nums[i]+'\n';
	//alert(o);
	if(nums[0]!=0) {
		alert('You missed or incorrectly answered '+nums[0]+' questions!');
	}
	else if(j[0]==0) {
		alert('No result could be determined.');
	}
	else {
		location = results[j[0]]+ext;
	}
}
</script>
<!-- end quiz script -->          