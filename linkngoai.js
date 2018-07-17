//<![CDATA[       
function changetargetlink(x){       
var a = document.getElementsByTagName('a');       
var args = changetargetlink.arguments;       
for(var i in a){       
a[i].target = "_blank";       
a[i].rel = "_blank";       
for(var j=0;j<args.length;j++){       
if(a[i].href.match(args[j])){       
a[i].target = "";       
a[i].rel = "";       
}}}}       
  changetargetlink('whatthefuck.top','https://whatthefuck.top');       
//]]>  
