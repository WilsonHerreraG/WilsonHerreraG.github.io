function mostrar(){
    document.getElementById('form1').style.display='block';
    document.getElementById('opcion1').style.display='none';   
}
function ocultar(){
    document.getElementById('form1').style.display='none';
    document.getElementById('opcion1').style.display='block';
}
function mostrar2(){
    document.getElementById('form1').style.display='block';
    document.getElementById('opcion2').style.display='none';   
}
function ocultar2(){
    document.getElementById('form1').style.display='none';
    document.getElementById('opcion2').style.display='block';
}
function mostrar3(){
    document.getElementById('form1').style.display='block';
    document.getElementById('opcion3').style.display='none';   
}
function ocultar3(){
    document.getElementById('form1').style.display='none';
    document.getElementById('opcion3').style.display='block';
}
function mostrar4(){
    document.getElementById('form1').style.display='block';
    document.getElementById('opcion4').style.display='none';   
}
function ocultar4(){
    document.getElementById('form1').style.display='none';
    document.getElementById('opcion4').style.display='block';
}
function mostrar5(){
    document.getElementById('form1').style.display='block';
    document.getElementById('opcion5').style.display='none';   
}
function ocultar5(){
    document.getElementById('form1').style.display='none';
    document.getElementById('opcion5').style.display='block';
}
function tri1(){
    document.getElementById('triangulo1').style.display='none';
    document.getElementById('triangulo2').style.display='block';
}
function tri2(){
    document.getElementById('triangulo2').style.display='none';
    document.getElementById('triangulo3').style.display='block';
}
function tri3(){
    document.getElementById('triangulo3').style.display='none';
    document.getElementById('triangulo4').style.display='block';
}


//Literal #1
function menor(){
   let num1= document.getElementById('num1').value;
   let num2= document.getElementById('num2').value;
   let num3= document.getElementById('num3').value;
   if( num1 < 0 || num2 < 0 || num3 < 0){
    document.getElementById('num').innerHTML="Solo ingrese numeros positivos, por favor ...";
   }else if (num1===num2 || num1=== num3 || num2===num3) {
    document.getElementById('num').innerHTML="Los numeros no se pueden repetir, cambielos por favor ...";
    }else{
        let mayor = num1;
        let menor = num1;
        if (num2 > num1 && num2 > num3) {
            mayor = num2;  
        }
        if (num3 > num1 && num3 > num2) {
            mayor = num3;  
        }
        if (num2 < num1 && num2 < num3) {
            menor = num2;  
        }
        if (num3 < num1 && num3 < num2) {
            menor = num3;  
        }
        document.getElementById('num').innerHTML="El numero menor es: "+menor;
        document.getElementById('nume').innerHTML="El numero mayor es: "+mayor;
        
}
}


//Literal #2
function primo (numero = document.getElementById('primo').value) {
        let contador=0, indice=1;
        while (indice<=numero) {
            if (numero % indice === 0) {
                contador++;
            }
            indice++;
        }
        if (contador<=2) {
            document.getElementById('tex_primo').innerHTML="Si es un numero primo"; 
        }
        else {
            document.getElementById('tex_primo').innerHTML="No es un numero primo";
            
        }
}


//Literal #3
function imc(){
    let  kilo =document.getElementById('kg').value; 
    let metro = document.getElementById('mt').value; 
    let total = kilo / (metro * metro);
    if(total<16){
        document.getElementById('indice').innerHTML="Su IMC es: "+total.toFixed(2)+" .Criterio de ingreso";
    }else if(total>=16 && total <= 16.9){
        document.getElementById('indice').innerHTML="Su IMC es: "+total.toFixed(2)+" .Infra peso";
    }else if(total>=17 && total <= 18.4){
        document.getElementById('indice').innerHTML="Su IMC es: "+total.toFixed(2)+" .Bajo peso";
    }else if(total>=18.5 && total <= 24.9){
        document.getElementById('indice').innerHTML="Su IMC es: "+total.toFixed(2)+" .Peso normal";
    }else if(total>=25 && total <= 29.9){
        document.getElementById('indice').innerHTML="Su IMC es: "+total.toFixed(2)+" .Sobrepeso";
    }else if(total>=30 && total <= 34.9){
        document.getElementById('indice').innerHTML="Su IMC es: "+total.toFixed(2)+" .Obesidad premórbida";
    }else if(total>=35 && total <= 39.9){
        document.getElementById('indice').innerHTML="Su IMC es: "+total.toFixed(2)+" .Obesidad II";
    }else if(total>=40 && total <= 45){
        document.getElementById('indice').innerHTML="Su IMC es: "+total.toFixed(2)+" .Obesidad mórbica";
    }else if(total>45){
        document.getElementById('indice').innerHTML="Su IMC es: "+total.toFixed(2)+" .Obesidad hipermórbida";
    }
}


//Literal #4

function traducir(){
    if(document.getElementById('text_traducir').value =='casa'){
        document.getElementById('mensaje').innerHTML="-->House";
    }
    if (document.getElementById('text_traducir').value =='mesa') {
        document.getElementById('mensaje').innerHTML="-->Table";
    }
    if(document.getElementById('text_traducir').value =='perro'){
        document.getElementById('mensaje').innerHTML="-->Dog";
    }
    if(document.getElementById('text_traducir').value =='gato'){
        document.getElementById('mensaje').innerHTML="-->Cat";
    }
}


//Literal #5
function triCal(){
document.getElementById('triangulo4').style.display='none';
document.getElementById('resultados').style.display='block';
let equilatero=0, isosceles=0, escaleno=0, textMinimo, minimo;
let a1=document.getElementById('a1').value;
let a2=document.getElementById('a2').value;
let a3=document.getElementById('a3').value;
let a4=document.getElementById('a4').value;
let b1=document.getElementById('b1').value;
let b2=document.getElementById('b2').value;
let b3=document.getElementById('b3').value;
let b4=document.getElementById('b4').value;
let c1=document.getElementById('c1').value;
let c2=document.getElementById('c2').value;
let c3=document.getElementById('c3').value;
let c4=document.getElementById('c4').value;
//triangulo 1
    if (a1==b1 && a1==c1 && b1==c1) {
        document.getElementById('t1').innerHTML="Triangulo #1: El triangulo es equilatero";
        equilatero++;
    }else if (a1==b1 || a1==c1 || b1==c1) {
        document.getElementById('t1').innerHTML="Triangulo #1: El triangulo es isosceles";
        isosceles++;
    }else{
        document.getElementById('t1').innerHTML="Triangulo #1: El triangulo es escaleno";
        escaleno++;
    }
    //triangulo 2
    if (a2==b2 && a2==c2 && b2==c2) {
        document.getElementById('t2').innerHTML="Triangulo #2: El triangulo es equilatero";
        equilatero++;
    }else if (a2==b2 || a2==c2 || b2==c2) {
        document.getElementById('t2').innerHTML="Triangulo #2: El triangulo es isosceles";
        isosceles++;
    }else{
        document.getElementById('t2').innerHTML="Triangulo #2: El triangulo es escaleno";
        escaleno++;
    }
    //triangulo 3
    if (a3==b3 && a3==c3 && b3==c3) {
        document.getElementById('t3').innerHTML="Triangulo #3: El triangulo es equilatero";
        equilatero++;
    }else if (a3==b3 || a3==c3 || b3==c3) {
        document.getElementById('t3').innerHTML="Triangulo #3: El triangulo es isosceles";
        isosceles++;
    }else{
        document.getElementById('t3').innerHTML="Triangulo #3: El triangulo es escaleno";
        escaleno++;
    }
    //triandulo 4
    if (a4==b4 && a4==c4 && b4==c4) {
        document.getElementById('t4').innerHTML="Triangulo #4: El triangulo es equilatero";
        equilatero++;
    }else if (a4==b4 || a4==c4 || b4==c4) {
        document.getElementById('t4').innerHTML="Triangulo #4: El triangulo es isosceles";
        isosceles++;
    }else{
        document.getElementById('t4').innerHTML="Triangulo #4: El triangulo es escaleno";
        escaleno++;
    }
    document.getElementById('equi').innerHTML="Hay "+equilatero+" triangulos equilateros";
    document.getElementById('iso').innerHTML="Hay "+isosceles+" triangulos isosceles";
    document.getElementById('esca').innerHTML="Hay "+escaleno+" triangulos escalenos";
    minimo=equilatero;
    textMinimo="equilatero";

    if(isosceles<minimo){
        minimo=isosceles;
        textMinimo="isosceles";
    }
    if(escaleno<minimo){
        
        textMinimo="escaleno";
    }
    document.getElementById('trimen').innerHTML="El tipo de triangulos que en menor cantidad hay es: "+textMinimo;

}



