const letter = [
  "bici coche (balón) bici coche peluche", // -> ✅
  "(muñeca) consola bici", // ✅
  "bici coche (balón bici coche", // -> ❌
  "peluche (bici [coche) bici coche balón", // -> ❌
  "(peluche {) bici", // -> ❌
  "() bici", // ❌
  "(a() bici (a)" // ❌
  ]
  
  function isValid(letter) {
    let indexOpenFlag = letter.indexOf('(')
    let indexCloseFlag = letter.indexOf(')')   
    while (true) {
      // revisamos parentesis
      if (indexOpenFlag === -1 && indexCloseFlag === -1) return true // No hay parentesis    
      if (indexOpenFlag === -1 || indexCloseFlag === -1) return false // Cantidad de parentesis invalida     
      if (indexOpenFlag > indexCloseFlag) return false // Parentesis en orden inverso
      // revisamos contenido dentro de los parentesis
      const string = letter.substring(indexOpenFlag + 1, indexCloseFlag)        
      if (string === '') return false // si no hay contenido => () 
      if (string.match(/[(){}[\]]/)) return false // si contenido contiene '[' || '{'        
      // volvemos a revisar el string
      indexOpenFlag = letter.indexOf('(', indexCloseFlag + 1)
      indexCloseFlag = letter.indexOf(')', indexCloseFlag + 1)      
    }
  }
  
  const valid = isValid(letter[6])
  console.log(valid)