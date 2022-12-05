// PUNTO UNO

// let a,b=0
// a=parseFloat(prompt('Digite el primer valor '))
// b=parseFloat(prompt('Digite el segundo valor'))
// if(a>b){
//     console.log(b)
//     console.log(a)
// }else{
//     console.log(a)
//     console.log(b)
//}

// SEGUNDO PUNTO

// let a,v=0
// a=parseInt(prompt('Digite un numero entre 1 a 10 '))
// v=a%2
// if(a>=1 && a<=10){
//     switch(v){
//     case 0:
//     alert('Es par')
//     break;
//     case 1:
//     alert('Es impar')
//     break;
//    } 
// } else{
//     alert('El numero ingresado no es valido ')
// }

// TERCER PUNTO

// let a,v=0
// a=parseInt(prompt('Digite un numero entre 1 a 10 '))
// if(a>=1 && a<=10){
//     switch(a){
//     case 1:
//     alert('Uno')
//     break;
//     case 2:
//     alert('Dos')
//     break;
//     case 3:
//     alert('Tres')
//     break;
//     case 4:
//     alert('Cuatro')
//     break;
//     case 5:
//     alert('Cinco')
//     break;
//     case 6:
//     alert('Seis')
//     break;
//     case 7:
//     alert('Siete')
//     break;
//     case 8:
//     alert('Ocho')
//     break;
//     case 9:
//     alert('Nueve')
//     break;
//     case 10:
//     alert('Diez')
//     break;
//    } 
// } else{
//     alert('El numero ingresado no es valido ')
// }

// CUARTO PUNTO

// let min,cost=0
// min=parseFloat(prompt('Digite cuanto duro su llamada '))
// res=min-3
// cost=200
// if(min>0 && min<=3){
// alert('Usted debe pagar '+cost)
// } else if(min>3){
//  alert('Usted debe pagar '+((res*100)+cost))
// } else{
//     alert('No debe pagar nada')
// } 

// QUINTO PUNTO

// let conejosBlancos,conejosNegros,precioBlancos,precioNegros
// conejosNegros=parseInt(prompt('Ingrese cuantos conejos negros se vendieron ' ))
// conejosBlancos=parseInt(prompt('Ingrese cuantos conejos blancos se vendieron ' ))
// precioBlancos=parseInt(prompt('Ingrese el precio de venta de los conejos blancos ' ))
// precioNegros=parseInt(prompt('Ingrese el precio de venta de los conejos negros ' ))

// alert(`Se vendieron ${conejosBlancos+conejosNegros} conejos`)
// alert(`El precio total de los conejos es de $${(conejosBlancos*precioBlancos)+(conejosNegros*precioNegros)}`)
// if(conejosNegros>conejosNegros){
// alert(`Los conejos que mas se vendieron fueron de color negro`)
// }else{
//  print(`Los conejos que mas se vendieron fueron de color blanco`)
// }

//SEXTO PUNTO

// let e1,e2,e3,t1,t2,nf=0

// alert('Nota evaluaciones')
// e1=parseFloat(prompt('Digite la nota de la Evaluacion 1 '))
// while (e1<1 || e1>5){
// e1=parseFloat(prompt('Digite la nota de la Evaluacion 1 '))
// }   
// e2=parseFloat(prompt('Digite la nota de la Evaluacion 2 '))
// while (e2<1 || e2>5){
//     e2=parseFloat(prompt('Digite la nota de la Evaluacion 2 '))
// } 
// e3=parseFloat(prompt('Digite la nota de la Evaluacion 3 '))
// while (e3<1 ||e3>5){
// e3=parseFloat(prompt('Digite la nota de la Evaluacion 3 '))
//     }
// alert('Nota trabajos')
// t1=parseFloat(prompt('Digite la nota del trabajo 1 '))
// while (t1<1 || t1>5){
// t1=parseFloat(prompt('Digite la nota del trabajo 1 '))
// } 
// t2=parseFloat(prompt('Digite la nota del trabajo 2 '))
// while (t2<1 || t2>5){
// t2=parseFloat(prompt('Digite la nota del trabajo 2 '))
// } 
// nf=((((e1+e2+e3)/3)*0.60)+(((t1+t2)/2)*0.40))
// alert(`La nota final del estudiante es ${nf}`)

//SEPTIMO PUNTO

// let nombre,clave,preciOriginal,cantidad=0

// nombre=prompt('Digite el nombre del articulo ')
// clave=parseInt(prompt('Digite la clave para el descuento '))
// while (clave!=1 && clave!=2){
// clave=parseInt(prompt('Digite la clave para el descuento '))
//     } 
// preciOriginal=parseFloat(prompt('Digite su precio '))
// cantidad=parseInt(prompt('Digite la cantidad '))

// if(clave==1){
//     alert(`El articulo ${nombre}, con clave ${clave}, con precio ${preciOriginal}, cantidad ${cantidad}, su precio con descuento es ${((preciOriginal-(preciOriginal*0.10))*cantidad)} `)
// }else if (clave==2) {
//     alert(`El articulo ${nombre}, con clave ${clave}, con precio ${preciOriginal}, cantidad:${cantidad}, y su precio con descuento ${((preciOriginal-(preciOriginal*0.20))*cantidad)} `)
// }   

// OCTAVO PUNTO

// let pre,psi,ped,tra,por=0
// pre=parseFloat(prompt('Digite el presupuesto anual '))
// psi=parseFloat(prompt('Ingrese el porcentaje del presupuesto para Psiquiatria ' ))
// ped=parseFloat(prompt('Ingrese el porcentaje del presupuesto para Pediatria ' ))
// tra=parseFloat(prompt('Ingrese el porcentaje del presupuesto para Traumatologia ' ))
// por=psi+ped+tra

// while(por!=100){
// alert('Datos invalidos, volvere a pedir los datos ')
// psi=parseFloat(prompt('Ingrese el porcentaje del presupuesto para Psiquiatria ' ))
// ped=parseFloat(prompt('Ingrese el porcentaje del presupuesto para Pediatria ' ))
// tra=parseFloat(prompt('Ingrese el porcentaje del presupuesto para Traumatologia ' ))
// }   
//  if(por==100){
//     alert(`El porcentaje para Psiquiatria es de ${psi}% ,su presupuesto es de $${pre*(psi/100)}`)
//     alert(`El porcentaje para Pediatria es de ${ped}% ,su presupuesto es de $${pre*(ped/100)}`)
//     alert(`El porcentaje para Traumatologia es de ${tra}% ,su presupuesto es de $${pre*(tra/100)}`)
// }

//NOVENO PUNTO

// let dis,dias=0
// dis=parseFloat(prompt('Ingrese la distancia de su viaje en km ' ))
// dias=parseInt(prompt('Ingrese la cantidad de dias que se va a quedar ' ))

// if(dias>=7 && dis>800){
//     alert(`El valor de los tiquetes ida y vuelta es de $${((dis*2.5)-((dis*2.5)*0.3))} dolares`)
// }else{
//     alert(`El valor de los tiquetes ida y vuelta es de $${dis*2.5} dolares`)
// }






