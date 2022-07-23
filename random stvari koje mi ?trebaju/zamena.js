function zamena(){
    var temp;
var text = document.getElementById("text").value;
var za_zamenu = document.getElementById("za-zamenu").value;
var zamenjen = document.getElementById("zamenjen").value;

        document.getElementsByTagName("p")[0].innerHTML= text.replaceAll(za_zamenu, zamenjen);
}