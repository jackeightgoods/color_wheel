import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class cerchio_3_colori extends PApplet {

/*<><><><><><><><><><><><><><><><><><><><><>
jacopo ottoboni
cerchio dei colori 3 colori
otto@insiberia.net

Esercizio x cromatologia
scopo ricreare il cerchio deicolorima con 
colori randomici

prende tre punti della criconferenza  
gonometrica (spero si chaimi così l'ho imparato facendo questo lavoro):
a(1,0);
b(-0.5 , 0.5)
c(-0.5,-0.5)
 e intorno ci costruise i colori
<><><><><><><><><><><><><><><><><><><><><>*/
//x export
int c1=0;
String export= "cerchio";
//radianti iniziao
float rad =0;
// seno e coseno
float s,c;
//raggio
int rag =300;
//colori
int[] colo = new int[9];
public void setup(){
  frameRate(150);
  
  background(0);
//iniziallizzo casualmente i colori

 for (int i =0 ; i<9;i++) {
    colo[i]=PApplet.parseInt(random(0,255));
 }
 text("premi r per cambiale colori lasciando sotto quelli precedenti", 20, 20);
text("premi b per resettare completamente ", 20, 30);
text("premi c per salvare ", 20, 40);
}


public void draw(){
  //   creo le posizioni nel tempo della circonferenza moltiplicano * raggio
  s=sin(rad)*rag;
  c=cos(rad)*rag;

float x=(width/2)+c;
  float y=(height/2)+s;

  //  primo colore 
if(sin(rad)>=-0.5f && cos(rad)>=0){
 stroke(colo[0],colo[1],colo[2], map(sin(rad),-0.5f,1,0,255));
    line(width/2, height/2,x, y);
  }
if(sin(rad)>=-0.5f && cos(rad)<=0){
 stroke(colo[0],colo[1],colo[2], map(sin(rad),1,-0.5f,255,0));
    line(width/2, height/2,x, y);
  }

  //secondo colore 
    if(sin(rad)<= 1 && cos(rad)>= 0.5f){
 stroke(colo[3],colo[4],colo[5], map(sin(rad),1,-1,0,255));
    line(width/2, height/2,x, y);
  } 
if(sin(rad)<= -0.5f && cos(rad)>=-0.5f){ //controllare qui come primo 3 colore
 stroke(colo[3],colo[4],colo[5],map(cos(rad),0.5f,-0.5f,255,0));
    line(width/2, height/2,x, y); 
  }  


// terzo colore blu
if(sin(rad)<=-0.5f && cos(rad)<=0.5f){
 stroke(colo[6],colo[7],colo[8], map(cos(rad),0.5f,-0.5f,0,255));
    line(width/2, height/2,x, y);    
}
if(sin(rad)>=-0.5f && cos(rad)<= 0){
 stroke(colo[6],colo[7],colo[8], map(sin(rad),-0.5f,1,255,0));
    line(width/2, height/2,x, y);
  }
  rad+=0.0009f;
  println("seno",sin(rad),"coseno",cos(rad));
}


// eventi da tastiera

public void keyPressed(){
char press = key;
switch(press) {
  case 'r': 
    for (int i =0 ; i<9;i++) {
colo[i]=PApplet.parseInt(random(0,255));
    }
    break;
  case 'b': 
  background (0);
    for (int i =0 ; i<9;i++) {
    colo[i]=PApplet.parseInt(random(0,255));
    }
     text("premi r per cambiale colori lasciando sotto quelli precedenti", 20, 20);
text("premi b per resettare completamente ", 20, 30);
text("premi c per salvare ", 20, 40);
    break;
 
    case 'c':
   /* stroke (0);
    fill(0);
       rect(0, 0, width, 50);*/
    String add=str(c1);
   export= add + "png";
    save(export);
    /* non rimette le scritte
text("premi r per cambiale colori lasciando sotto quelli precedenti", 20, 20);
text("premi b per resettare completamente ", 20, 30);
text("premi c per salvare ", 20, 40);*/
    c1++;

    break;
    
    
  default:             // Default executes if the case labels
    println("None");   // don't match the switch parameter
    break;
}

}
  public void settings() {  size (800,800); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "cerchio_3_colori" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
