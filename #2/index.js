const carta = 'bici coche balón _playstation bici coche peluche'

function listGifts(letter) {
  return letter
    .trim() // limpio espacios.
    .split(' ') // recorto string -> obtengo array.
    .filter(gift => !gift.startsWith('_')) // filtro los que inician en _.
    .reduce((acc, gift) => { // obtengo objeto con contadores.
      acc[gift] = acc[gift] ? acc[gift] + 1 : 1
      return acc
    }, {})
}

const listaDeRegalos = listGifts(carta)

console.log(listaDeRegalos)