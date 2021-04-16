function changeColor(){
  var color = document.getElementById("inputcolor").value;
  document.body.style.backgroundColor = color;
}; 
//var object crocodille en fonction des réponse la position du crocodile change soit happy soit sad
var croc={
  name:"crocodile",
  position:"no position"
}

$(".parentquiz").hide();
$(".parentquiz1").hide();//j'ai caché la div avec la methode Jquery hide
$(".parentquiz2").hide();
$(".parentquiz3").hide();
$(".parentquiz4").hide();



function showContent(){//j'ai crée une fonction pour afficher la div avec la méthode jquery show elle va étre appliqué au clique avec le boutton commencer
  $(".parentquiz").show();
}
function showContent1(){//fonction pour afficher la question 2
  $(".parentquiz").hide();
  $(".parentquiz1").show();
}
function showContent2(){//fonction pour afficher la question 3
  $(".parentquiz1").hide();
  $(".parentquiz2").show();
}
function showContent3(){//fonction pour afficher la question 4
  $(".parentquiz2").hide();
  $(".parentquiz3").show();
}
function showContent4(){//fonction pour afficher la question 5
  $(".parentquiz3").hide();
  $(".parentquiz4").show();
}


//function pur la bonne réponse;
function getAnsewer_1(){
   croc.position="sad";
   var modal2= document.getElementById("modal2");
   var modal3= document.getElementById("modal3");
   var modal4= document.getElementById("modal4");
   modal2.innerHTML="J'ai perdu!!! et tu as gagné" + "<br>tu mérites une récompense" + "<img src=\'images/croco-pleure.png\' width=\'40%\' height=\'80px\'>" ;
   modal2.style.backgroundColor="aqua";
   modal2.style.height="100px";
   modal2.style.width="80%";
   modal3.style.backgroundColor="blue";
   modal3.style.height="100px";
   modal3.style.width="80%";
   modal3.innerHTML= "<br><iframe class='embed-responsive-item' width=\'80%\' height=\'80px\' src=\'https://www.youtube.com/embed/3_LeOUlzjDo\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer\' autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe>";
   var dog1=document.getElementById("img4");
   dog1.style.border="5px solid green";
   modal4.innerHTML="<button class='btn btn-dark mt-4' type='button' onclick='showContent1();'>suivant</button>"
   
}
function getAnsewer_2(){
  croc.position="happy";
  var modal2= document.getElementById("modal2");
  var modal3= document.getElementById("modal3");
  modal2.innerHTML="J'ai gagné!!! et tu as perdu" + "<br>rejoue encore" + "<img src=\'images/croco-content.png\' width=\'40%\' height=\'80px\'>" ;
  modal2.style.backgroundColor="aqua";
  modal2.style.height="100px";
  modal2.style.width="80%";
  var camel1=document.getElementById("img2");
  camel1.style.border="5px solid red"; 
   
}
function getAnsewer_3(){
  croc.position="happy";
  var modal2= document.getElementById("modal2");
  var modal3= document.getElementById("modal3");
  modal2.innerHTML="J'ai gagné!!! et tu as perdu" + "<br>essaye encore" + "<img src=\'images/croco-content.png\' width=\'40%\' height=\'80px\'>" ;
  modal2.style.backgroundColor="aqua";
  modal2.style.height="100px";
  modal2.style.width="80%";
  var cow1=document.getElementById("img3");
  cow1.style.border="5px solid red";  
}
function getAnsewer_4(){
  croc.position="happy";
  var modal2= document.getElementById("modal2");
  var modal3= document.getElementById("modal3");
  modal2.innerHTML="J'ai gagné!!! et tu as perdu" + "<br>tu peux faire mieux" + "<img src=\'images/croco-content.png\' width=\'40%\' height=\'80px\'>" ;
  modal2.style.backgroundColor="aqua";
  modal2.style.height="100px";
  modal2.style.width="80%";
  var wolf1=document.getElementById("img5");
  wolf1.style.border="5px solid red";  
}
function getAnsewer_5(){
  croc.position="happy";
  var modal2= document.getElementById("modal2");
  var modal3= document.getElementById("modal3");
  modal2.innerHTML="J'ai gagné!!! et tu as perdu" + "<br>tente ta chance encore une fois" + "<img src=\'images/croco-content.png\' width=\'40%\' height=\'80px\'>" ;
  modal2.style.backgroundColor="aqua";
  modal2.style.height="100px";
  modal2.style.width="80%";
  var chiken1=document.getElementById("img6");
  chiken1.style.border="5px solid red";  
}
//fonctions pour deuxième question
function getAnsewer_6(){
  croc.position="sad";
  var modal5= document.getElementById("modal5");
  var modal6= document.getElementById("modal6");
  var modal7= document.getElementById("modal7");
  modal5.innerHTML="J'ai perdu!!! et tu as gagné" + "<br>tu mérites une récompense" + "<img src=\'images/croco-pleure.png\' width=\'40%\' height=\'80px\'>" ;
  modal5.style.backgroundColor="aqua";
  modal5.style.height="100px";
  modal5.style.width="80%";
  modal6.style.backgroundColor="blue";
  modal6.style.height="100px";
  modal6.style.width="80%";
  modal6.innerHTML= "<br><iframe class='embed-responsive-item' width=\'80%\' height=\'80px\' src=\'https://www.youtube.com/embed/0IWzN28yhL4\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer\' autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe>";
  var chiken2=document.getElementById("img11");
  chiken2.style.border="5px solid green";
  modal7.innerHTML="<button class='btn btn-dark mt-4' type='button' onclick='showContent2();'>suivant</button>"
}
function getAnsewer_7(){
  croc.position="happy";
  var modal5= document.getElementById("modal5");
  var modal6= document.getElementById("modal6");
  modal5.innerHTML="J'ai gagné!!! et tu as perdu" + "<br>tente ta chance encore une fois" + "<img src=\'images/croco-content.png\' width=\'40%\' height=\'80px\'>" ;
  modal5.style.backgroundColor="aqua";
  modal5.style.height="100px";
  modal5.style.width="80%";
  var wolf2=document.getElementById("img10");
  wolf2.style.border="5px solid red";  
}
function getAnsewer_8(){
  croc.position="happy";
  var modal5= document.getElementById("modal5");
  var modal6= document.getElementById("modal6");
  modal5.innerHTML="J'ai gagné!!! et tu as perdu" + "<br>tente ta chance encore une fois" + "<img src=\'images/croco-content.png\' width=\'40%\' height=\'80px\'>" ;
  modal5.style.backgroundColor="aqua";
  modal5.style.height="100px";
  modal5.style.width="80%";
  var camel2=document.getElementById("img7");
  camel2.style.border="5px solid red";  
}
function getAnsewer_9(){
  croc.position="happy";
  var modal5= document.getElementById("modal5");
  var modal6= document.getElementById("modal6");
  modal5.innerHTML="J'ai gagné!!! et tu as perdu" + "<br>tente ta chance encore une fois" + "<img src=\'images/croco-content.png\' width=\'40%\' height=\'80px\'>" ;
  modal5.style.backgroundColor="aqua";
  modal5.style.height="100px";
  modal5.style.width="80%";
  var cow2=document.getElementById("img8");
  cow2.style.border="5px solid red";  
}
function getAnsewer_10(){
  croc.position="happy";
  var modal5= document.getElementById("modal5");
  var modal6= document.getElementById("modal6");
  modal5.innerHTML="J'ai gagné!!! et tu as perdu" + "<br>tente ta chance encore une fois" + "<img src=\'images/croco-content.png\' width=\'40%\' height=\'80px\'>" ;
  modal5.style.backgroundColor="aqua";
  modal5.style.height="100px";
  modal5.style.width="80%";
  var dog2=document.getElementById("img9");
  dog2.style.border="5px solid red";  
}

//fonctions pour troisième question
function getAnsewer_11(){
 croc.position="sad";
 var modal8= document.getElementById("modal8");
 var modal9= document.getElementById("modal9");
 var modal10= document.getElementById("modal10");
 modal8.innerHTML="J'ai perdu!!! et tu as gagné" + "<br>tu mérites une récompense" + "<img src=\'images/croco-pleure.png\' width=\'40%\' height=\'80px\'>" ;
 modal8.style.backgroundColor="aqua";
 modal8.style.height="100px";
 modal8.style.width="80%";
 modal9.style.backgroundColor="blue";
 modal9.style.height="100px";
 modal9.style.width="80%";
 modal9.innerHTML= "<br><iframe class='embed-responsive-item' width=\'80%\' height=\'80px\' src=\'https://www.youtube.com/embed/biX0lobwGHA\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer\' autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe>";
 var camel3=document.getElementById("img13");
 camel3.style.border="5px solid green";
 modal10.innerHTML="<button class='btn btn-dark mt-4' type='button' onclick='showContent3();'>suivant</button>"
}
function getAnsewer_12(){
 croc.position="happy";
 var modal8= document.getElementById("modal8");
 var modal9= document.getElementById("modal9");
 modal8.innerHTML="J'ai gagné!!! et tu as perdu" + "<br>tente ta chance encore une fois" + "<img src=\'images/croco-content.png\' width=\'40%\' height=\'80px\'>" ;
 modal8.style.backgroundColor="aqua";
 modal8.style.height="100px";
 modal8.style.width="80%";
 var cow3=document.getElementById("img12");
 cow3.style.border="5px solid red";  
}
function getAnsewer_13(){
  croc.position="happy";
  var modal8= document.getElementById("modal8");
  var modal9= document.getElementById("modal9");
  modal8.innerHTML="J'ai gagné!!! et tu as perdu" + "<br>tente ta chance encore une fois" + "<img src=\'images/croco-content.png\' width=\'40%\' height=\'80px\'>" ;
  modal8.style.backgroundColor="aqua";
  modal8.style.height="100px";
  modal8.style.width="80%";
  var dog3=document.getElementById("img14");
  dog3.style.border="5px solid red";  
 }
 function getAnsewer_14(){
  croc.position="happy";
  var modal8= document.getElementById("modal8");
  var modal9= document.getElementById("modal9");
  modal8.innerHTML="J'ai gagné!!! et tu as perdu" + "<br>tente ta chance encore une fois" + "<img src=\'images/croco-content.png\' width=\'40%\' height=\'80px\'>" ;
  modal8.style.backgroundColor="aqua";
  modal8.style.height="100px";
  modal8.style.width="80%";
  var wolf3=document.getElementById("img15");
  wolf3.style.border="5px solid red";  
 }
 function getAnsewer_15(){
  croc.position="happy";
  var modal8= document.getElementById("modal8");
  var modal9= document.getElementById("modal9");
  modal8.innerHTML="J'ai gagné!!! et tu as perdu" + "<br>tente ta chance encore une fois" + "<img src=\'images/croco-content.png\' width=\'40%\' height=\'80px\'>" ;
  modal8.style.backgroundColor="aqua";
  modal8.style.height="100px";
  modal8.style.width="80%";
  var chiken3=document.getElementById("img16");
  chiken3.style.border="5px solid red";  
 }
//  f° pour qu°4
 function getAnsewer_16(){
  croc.position="sad";
  var modal11= document.getElementById("modal11");
  var modal12= document.getElementById("modal12");
  var modal13= document.getElementById("modal13");
  modal11.innerHTML="J'ai perdu!!! et tu as gagné" + "<br>tu mérites une récompense" + "<img src=\'images/croco-pleure.png\' width=\'40%\' height=\'80px\'>" ;
  modal11.style.backgroundColor="aqua";
  modal11.style.height="100px";
  modal11.style.width="80%";
  modal12.style.backgroundColor="blue";
  modal12.style.height="100px";
  modal12.style.width="80%";
  modal12.innerHTML= "<br><iframe class='embed-responsive-item' width=\'80%\' height=\'80px\' src=\'https://www.youtube.com/embed/AjYuK9cB8X8\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer\' autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe>";
  var wolf4=document.getElementById("img20");
  wolf4.style.border="5px solid green";
  modal13.innerHTML="<button class='btn btn-dark mt-4' type='button' onclick='showContent4();'>suivant</button>"
 }
 function getAnsewer_17(){
  croc.position="happy";
  var modal11= document.getElementById("modal11");
  var modal12= document.getElementById("modal12");
  modal11.innerHTML="J'ai gagné!!! et tu as perdu" + "<br>tente ta chance encore une fois" + "<img src=\'images/croco-content.png\' width=\'40%\' height=\'80px\'>" ;
  modal11.style.backgroundColor="aqua";
  modal11.style.height="100px";
  modal11.style.width="80%";
  var dog4=document.getElementById("img19");
  dog4.style.border="5px solid red";  
 }
 function getAnsewer_18(){
  croc.position="happy";
  var modal11= document.getElementById("modal11");
  var modal12= document.getElementById("modal12");
  modal11.innerHTML="J'ai gagné!!! et tu as perdu" + "<br>tente ta chance encore une fois" + "<img src=\'images/croco-content.png\' width=\'40%\' height=\'80px\'>" ;
  modal11.style.backgroundColor="aqua";
  modal11.style.height="100px";
  modal11.style.width="80%";
  var camel4=document.getElementById("img18");
  camel4.style.border="5px solid red";  
 }
 function getAnsewer_19(){
  croc.position="happy";
  var modal11= document.getElementById("modal11");
  var modal12= document.getElementById("modal12");
  modal11.innerHTML="J'ai gagné!!! et tu as perdu" + "<br>tente ta chance encore une fois" + "<img src=\'images/croco-content.png\' width=\'40%\' height=\'80px\'>" ;
  modal11.style.backgroundColor="aqua";
  modal11.style.height="100px";
  modal11.style.width="80%";
  var chiken4=document.getElementById("img21");
  chiken4.style.border="5px solid red";  
 }
 function getAnsewer_20(){
  croc.position="happy";
  var modal11= document.getElementById("modal11");
  var modal12= document.getElementById("modal12");
  modal11.innerHTML="J'ai gagné!!! et tu as perdu" + "<br>tente ta chance encore une fois" + "<img src=\'images/croco-content.png\' width=\'40%\' height=\'80px\'>" ;
  modal11.style.backgroundColor="aqua";
  modal11.style.height="100px";
  modal11.style.width="80%";
  var cow4=document.getElementById("img17");
  cow4.style.border="5px solid red";  
 }
 //  f° pour qu°5
 function getAnsewer_21(){
  croc.position="sad";
  var modal14= document.getElementById("modal14");
  var modal15= document.getElementById("modal15");
  var modal16= document.getElementById("modal16");
  modal14.innerHTML="J'ai perdu!!! et tu as gagné" + "<br>tu mérites une récompense" + "<img src=\'images/croco-pleure.png\' width=\'40%\' height=\'80px\'>" ;
  modal14.style.backgroundColor="aqua";
  modal14.style.height="100px";
  modal14.style.width="80%";
  modal15.style.backgroundColor="blue";
  modal15.style.height="100px";
  modal15.style.width="80%";
  modal15.innerHTML= "<br><iframe class='embed-responsive-item' width=\'80%\' height=\'80px\' src=\'https://www.youtube.com/embed/nYRE0ABkqso\' title=\'YouTube video player\' frameborder=\'0\' allow=\'accelerometer\' autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe>";
  var cow5=document.getElementById("img23");
  cow5.style.border="5px solid green";
  modal16.innerHTML="<button class='btn btn-danger mt-4' type='button'>Bravo! Tu as terminé le mini jeu! :)</button>"
 }
 function getAnsewer_22(){
    croc.position="happy";
    var modal14= document.getElementById("modal14");
    var modal15= document.getElementById("modal15");
    modal14.innerHTML="J'ai gagné!!! et tu as perdu" + "<br>tente ta chance encore une fois" + "<img src=\'images/croco-content.png\' width=\'40%\' height=\'80px\'>" ;
    modal14.style.backgroundColor="aqua";
    modal14.style.height="100px";
    modal14.style.width="80%";
    var dog5=document.getElementById("img24");
    dog5.style.border="5px solid red";  
   }
   function getAnsewer_23(){
    croc.position="happy";
    var modal14= document.getElementById("modal14");
    var modal15= document.getElementById("modal15");
    modal14.innerHTML="J'ai gagné!!! et tu as perdu" + "<br>tente ta chance encore une fois" + "<img src=\'images/croco-content.png\' width=\'40%\' height=\'80px\'>" ;
    modal14.style.backgroundColor="aqua";
    modal14.style.height="100px";
    modal14.style.width="80%";
    var camel5=document.getElementById("img22");
    camel5.style.border="5px solid red";  
   }
   function getAnsewer_24(){
    croc.position="happy";
    var modal14= document.getElementById("modal14");
    var modal15= document.getElementById("modal15");
    modal14.innerHTML="J'ai gagné!!! et tu as perdu" + "<br>tente ta chance encore une fois" + "<img src=\'images/croco-content.png\' width=\'40%\' height=\'80px\'>" ;
    modal14.style.backgroundColor="aqua";
    modal14.style.height="100px";
    modal14.style.width="80%";
    var wolf5=document.getElementById("img25");
    wolf5.style.border="5px solid red";  
   }
   function getAnsewer_25(){
    croc.position="happy";
    var modal14= document.getElementById("modal14");
    var modal15= document.getElementById("modal15");
    modal14.innerHTML="J'ai gagné!!! et tu as perdu" + "<br>tente ta chance encore une fois" + "<img src=\'images/croco-content.png\' width=\'40%\' height=\'80px\'>" ;
    modal14.style.backgroundColor="aqua";
    modal14.style.height="100px";
    modal14.style.width="80%";
    var chicken5=document.getElementById("img26");
    chicken5.style.border="5px solid red";  
   }
        

 
 
 