/*<><><><><><><><><><><><><><><><><><><><><><><><><><>
Jacopo Ottoboni
otto@insiberia.net

color wheel

quest è un esercizio nato per un compito di cromatilogia
mi èservito per ravvicinarmi a p5 e javaScript
in genrale.
si tratta di una rutoa dei colori formata da 3 colori,
inizialmente inizzializati casualmente poi l'utente può scegliere
i propi colori attraverso 9 slider
<><><><><><><><><><><><><><><><><><><><><><><><><><><> */

//seno e coseno
let  s,c;
// radianti inzio
let rad =0;
// raggio
let rag;
//incremento ovvero distanza fra ogni riga
let incremento =0.0009;
let sliderIncremento;
// colori
let colo = [9];
//slider per colori
let coloSlider = [9];
//centro
let x, y;
//delayTime
let del=1;
let sliderDel;
//pulsante export
let expButton, resetButton, backgroundButton;
// pulsanti per colore
let colButton =[3];
setInterval(ColPre,10);

function setup() {

// creo una finestra con largezza e altezza pari al browser
createCanvas(windowWidth, windowHeight+650);
// imposto il nero come basckground
//background(0);
// imposto il raggio prendendo la dimensione più  corte
// e distanzio la ciroconferenxa di 30 px dal bordo più corto
if (windowHeight<windowHeight){
rag = (windowHeight/2-50);
} else {rag=(windowHeight/2-50) ;}
//inizializzo 3 colori random
// dovrei usare forEach ?
for (let i =0 ; i<9;i++) {
   colo[i]=random(0,255);
 }
 //posizione e setto gli slider del colore
 for (let i =0; i<9;i++) {
    coloSlider[i]=createSlider(0,255,colo[i]);
      coloSlider[i].position(0,windowHeight+(i*50)+300);
  }
Valuename();
// posizioni pulsanti per sceglier i colori colori
for (let i=0;i<=2;i+=1){
colButton[i]= createButton('load color')
  colButton[i].position(300,windowHeight+400+(i*150));
}

//creo lo slider per selezionare la distanza fra i segmenti disegnati

sliderIncremento = createSlider(0.0009,0.09,0.0009,0);
sliderIncremento.position(300,windowHeight+150)

//creo lo slider per la velocità con cui si muovono i segmenti
/*text('velocity',325,windowHeight);
sliderDel= createSlider(1,1000,1,0);
sliderDel.position(300,windowHeight+ 90)*/

//creo il pulsante per pulire lo sfond
backgroundButton = createButton('clear canvas');
backgroundButton.position(0,windowHeight+50);
backgroundButton.mousePressed(resetBackground);
//creo il pulsante per cambiare i colori
resetButton= createButton ('random color');
resetButton.position(0,windowHeight+100);
resetButton.mousePressed(resetColor);
//creo il pulsante per esportare
expButton = createButton('export');
expButton.position(0,windowHeight+150);
expButton.mousePressed(salva);
//non uso draw per il limite dei 60 fps
setInterval(cerchio,del);

}

// funzion che crea il cerchio
function cerchio() {

  s=sin(rad)*rag;
  c=cos(rad)*rag;

  x=(windowWidth/2)+c;
  y= (windowHeight/2)+s;
  //  primo colore
 if(sin(rad)>=-0.5 && cos(rad)>=0){
  stroke(colo[0],colo[1],colo[2], map(sin(rad),-0.5,1,0,255));
     line(windowWidth/2, windowHeight/2,x, y);
   }
 if(sin(rad)>=-0.5 && cos(rad)<=0){
  stroke(colo[0],colo[1],colo[2], map(sin(rad),1,-0.5,255,0));
     line(windowWidth/2, windowHeight/2,x, y);
   }

   //secondo colore
     if(sin(rad)<= 1 && cos(rad)>= 0.5){
  stroke(colo[3],colo[4],colo[5], map(sin(rad),1,-1,0,255));
     line(windowWidth/2, windowHeight/2,x, y);
   }
 if(sin(rad)<= -0.5 && cos(rad)>=-0.5){ //controllare qui come primo 3 colore
  stroke(colo[3],colo[4],colo[5],map(cos(rad),0.5,-0.5,255,0));
     line(windowWidth/2, windowHeight/2,x, y);
   }


 // terzo colore blu
 if(sin(rad)<=-0.5 && cos(rad)<=0.5){
  stroke(colo[6],colo[7],colo[8], map(cos(rad),0.5,-0.5,0,255));
     line(windowWidth/2, windowHeight/2,x, y);
 }
 if(sin(rad)>=-0.5 && cos(rad)<= 0){
  stroke(colo[6],colo[7],colo[8], map(sin(rad),-0.5,1,255,0));
     line(windowWidth/2, windowHeight/2,x, y);
   }
   // faccimo muovere il segmento incrementanto i radianti
   rad+=incremento;
   incremento=sliderIncremento.value();
//del=sliderDel.value();
}
//preview e modifica dei colori
function ColPre() {

  noStroke();
  // creo gli slider che indicano il colore attualmente in uso
  //e permettono cliccando il bottono di caricarne un addImpulse(path,callback,errorCallback)
  fill(coloSlider[0].value(),coloSlider[1].value(),coloSlider[2].value());
square(225,windowHeight+300,50);
//faccio caricare il colore alla pressione del pulsante
colButton[0].mousePressed(a=>{colo[0]=coloSlider[0].value(); colo[1]=coloSlider[1].value();colo[2]=coloSlider[2].value();})
// secondo colore
fill(coloSlider[3].value(),coloSlider[4].value(),coloSlider[5].value());
square(225,windowHeight+450,50);
colButton[1].mousePressed(a=>{colo[3]=coloSlider[3].value(); colo[4]=coloSlider[4].value();colo[5]=coloSlider[5].value();})
//terzo colore
fill(coloSlider[6].value(),coloSlider[7].value(),coloSlider[8].value());
square(225,windowHeight+600,50);
colButton[2].mousePressed(a=>{colo[6]=coloSlider[6].value(); colo[7]=coloSlider[7].value();colo[8]=coloSlider[8].value();})

}
//salva le immagini
function salva() {
saveCanvas('colorCircle','png')

}
// cambia i 3 colori di base
function resetColor (){
  for (let i =0 ; i<9;i++) {
     colo[i]=int(random(0,255));

   }

}
// cancella tutto e risetta lo sfondo
function resetBackground (){
background(0);
 Valuename ();
}
//scrivo inomi delgi slider
function Valuename (){
  // scrivo red value
for (let i=0;i<3;i+=1){
fill(255,0,0);
text('red value',0, windowHeight+210+(150*i));
}
//scrivo green value
for (let i=0;i<3;i+=1){
fill(0,255,0);
text('green value',0, windowHeight+260+(150*i));
}
//scrivo blue value
for (let i=0;i<3;i+=1){
fill(0,0,255);
text('blue value',0, windowHeight+310+(150*i));
}
//scrivo l tag a valore del incremento
fill(255);
text('dispersion',325,windowHeight+55);
}
