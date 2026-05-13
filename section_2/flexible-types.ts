let age: any = 42 // avoid usage
age = '37'
age = false
age = {}
age = []

let ageOk: string | number = 43 // Union Type
ageOk = '37'

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let val: {} = 'some text' //não é um Object Type mas permite qualquer valor que não seja undefined ou null
//val = null      // erro
//val = undefined // erro
val = false
val = 'Texto'
val = ''
val = 0
val = 1
val = -1
val = {}
val = []

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//O Tipo Record permite instanciar um objeto mas sem ainda definir suas propriedades - é um Tipo Genérico
//let data: Record<tiposDasChaves, tiposDosValores>
let data: Record<string, string | number> // as chaves será string e os valores podem ser string ou number
//  data = {'string': 'string' ou number}
data = {entry1: 1, entry2: '2'}

let codigoCasoUso: Record<string, string>; // Ex: { USC_CERTIDAO_NEGATIVA: 'USC.04.149' }
let casoUso: Record<string, boolean>;