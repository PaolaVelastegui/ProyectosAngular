import { Component, } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  valor1=1;
  valor2=1;
  resultado=0;

  Suma(){
    this.resultado=this.valor1+this.valor2;
  }
  Resta(){
    this.resultado=this.valor1-this.valor2;
  }
  Multiplicacion(){
    this.resultado=this.valor1*this.valor2;
  }
  Division(){
    this.resultado=this.valor1/this.valor2;
  }
  Potencia(){
    this.resultado=Math.pow(this.valor1,this.valor2);
  }
  Raiz(){
    this.resultado=Math.sqrt(this.valor1);
  }
  Residuo(){
    this.resultado=this.valor1%this.valor2;
  }
  Permutacion(){
    var totalF1 = 1;
    var restaF; 
    var totalF2=1;
	for (var i=1; i<= this.valor1; i++) {
		totalF1 = totalF1 * i; 
  }
  var resp=totalF1;
  restaF = this.valor1-this.valor2;
	for (var j=1; j<=restaF; j++) {
		totalF2 = totalF2 * j; 
  }
  var resp2=totalF2;
  this.resultado=resp/resp2;
}
Combinacion(){
  var totalF3=1;
  var totalF1 = 1;
  var restaF; 
  var totalF2=1;
for (var i=1; i<= this.valor1; i++) {
  totalF1 = totalF1 * i; 
}
var resp=totalF1;
restaF = this.valor1-this.valor2;
for (var j=1; j<=restaF; j++) {
  totalF2 = totalF2 * j; 
}
var resp2=totalF2;
for (var k=1; k<= this.valor2; k++) {
  totalF3 = totalF3 * k; 
}
var resp3=totalF3;
this.resultado=resp/(resp2*resp3);
}
}
