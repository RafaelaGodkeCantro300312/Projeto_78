var images=
[
    "max-season-3.jpg", "eleven-season-3.jpg", "nancy-season-3.jpg", "robin-season-3.webp", "season-3.jpeg"
];
var names=
[
    "Max Mayfield", "Jane Hopper", "Nancy Wheeler", "Robin Buckley", "Melhores da temporada 3"
];
var i=0;
function update()
{
    numbersOffCharactersInArray=4
    if(i>numbersOffCharactersInArray)
    {
        i=0;
    }
    var updatedImage=images[i];
    var updatedName=names[i];
    document.getElementById("charactersImage").src=updatedImage;
    document.getElementById("charactersName").innerHTML=updatedName;
    i++;
}
