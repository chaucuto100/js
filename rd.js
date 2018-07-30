var rdp_numposts = 40;
var rdp_snippet_length = 0;
var rdp_info = 'no';
var rdp_comment = 'Nh?n xét';
var rdp_disable = 'T?t nh?n xét';
var rdp_current = [];
var rdp_total_posts = 0;
var rdp_current = new Array(rdp_numposts);

function totalposts(a){rdp_total_posts=a.feed.openSearch$totalResults.$t}document.write('<script type="text/javascript" src="http://whatthefuck.top/feeds/posts/default?alt=json-in-script&max-results=0&callback=totalposts"><\/script>');function getvalue(){for(var b=0;b<rdp_numposts;b++){var d=false;var c=get_random();for(var a=0;a<rdp_current.length;a++){if(rdp_current[a]==c){d=true;break}}if(d){b--}else{rdp_current[b]=c}}}function get_random(){var a=1+Math.round(Math.random()*(rdp_total_posts-1));return a};
