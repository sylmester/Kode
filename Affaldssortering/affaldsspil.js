//Kopi af DragandDrop3
var n = 4;
var svar=[2,0,1,1,3,1,3,2,3];
var billeder=["tlf.png","pap.png","plastikpose.png","plast_bakke.png","skrog.png","plast_emb.png","vandmelon.png","computer.png","majs.png"];
var score = 0;
var liv = 3

function allowDrop(ev)  // Gør det muligt at slippe et billede på kassen
{
ev.preventDefault();
}

function drag(ev)  // Gør det muligt at trække et billede
{ // billedet som trækkes får det midlertidige navn billede
ev.dataTransfer.setData("billede",ev.target.id);
}

function drop(ev,boxNr)  // Bruges til selve droppet af billedet
{
ev.preventDefault();
var data = ev.dataTransfer.getData("billede");
// target er div-boksen - childNodes er elementer inde i target-elementet
ev.target.appendChild(document.getElementById(data)); // set img-elementet ind i div-boksen
ev.target.childNodes[0].setAttribute("id","boxed"); // skift id-navn på billedet
ev.target.childNodes[0].setAttribute("draggable", "false")
if (boxNr==svar[n]){
  score++
  document.getElementById('svarForkert').innerHTML="";
  document.getElementById('svarRigtig').innerHTML="Rigtigt - prøv igen";
  nextImage();
  document.getElementById('score').innerHTML="Score: "+score

}
else{
  liv--
  document.getElementById('svarRigtig').innerHTML="";
  document.getElementById('svarForkert').innerHTML="Minus 1 liv";
  document.getElementById('liv').innerHTML="Liv: "+liv
  nextImage();
}
}

function nextImage() {

  if (liv>0) {
    // fjern forrige billede, hvis det findes og indsæt nyt
    var oldImage = document.getElementById("boxed");
     // test om boxed-billede var der
     oldImage.remove();
      // Returns a random integer from 0 to 5:
      n = Math.floor(Math.random() * 9);
      // indsæt nyt billede
      var newImage = document.createElement("IMG");
      newImage.setAttribute("src", "billeder/"+billeder[n]);
      newImage.setAttribute("id","drag1");
      newImage.setAttribute("width", "100%");
      newImage.setAttribute("height", "100%");
      newImage.setAttribute("draggable", "true");
      newImage.setAttribute("ondragstart", "drag(event)");
      document.getElementById('skrald').appendChild(newImage);

  } else {
    document.getElementById('div1').hidden = true;
    document.getElementById('div2').hidden = true;
    document.getElementById('div3').hidden = true;
    document.getElementById('div4').hidden = true;
    document.getElementById('svarForkert').innerHTML="game over"

  }


}




//Time control
