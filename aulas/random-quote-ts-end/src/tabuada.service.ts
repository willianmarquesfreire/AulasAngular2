export class TabuadaService {

  calcula(numero:number):Array<any> {
    let lista = []
    for (let i = 0; i <= 10; i++) {
      lista.push({
        calculo: `${numero} * ${i} = `,
        resultado: numero * i
      })
    }
    return lista;
  }
  
}
