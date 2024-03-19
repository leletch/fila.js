export function criarFila(tamanho=5){
    return [...new Array(tamanho)]
}
console.log(criarFila(5))


export function inserirNaFila(fila, item){
   let espaco = fila.indexOf(undefined)

   if(espaco!==-1){ //se nao encontrar o undefined retorna -1, se sim retorna 1 
   fila[espaco] = item
return
   }
}


export function retirarDaFila(){

    }
