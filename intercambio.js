function ingresar(){
    let n= parseInt(prompt("Numero de elementos"));
    let a=Array(n);
 
    for(let c=0;c<n; c++){
     a[c]=parseInt(prompt("Ingrese el elemento"+(c+1)));
     console.log(a[c]);
    }
    console.log("**lista original**")
    imprimir(a);
    ordIntercambio(a);

 }
 function imprimir(a){
    for(let c in a){
        
        console.log(a[c]);
       }

 }
 function ordIntercambio(a){
    let n=a.length;
     for(let i=0;i<n;i++){
         for(let j=i+1;j<n;j++){
             if(a[i]<a[j]){
                 let aux=a[i];
                 a[i]=a[j];
                 a[j]=aux;
             }

         }
     }
     console.log("****Lista ordenada****");
     imprimir(a);
 }