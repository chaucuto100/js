function changeYThumbSize(id){
    var c = document.getElementById(id),
        d = c.getElementsByTagName("img");
    for (var a = 0; a < d.length; a++) {
        d[a].src = d[a].src.replace("default.jpg", "mqdefault.jpg");
    }
}
changeYThumbSize("random-posts"); 