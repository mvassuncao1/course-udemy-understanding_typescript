// enum é um tipo que só aceita certos tipos de opções
enum Role {
    Admin,
    Editor,
    Guest = 5,
    Other, // recebe 6
    Other2 = 'podeUsarTexto'
}

let userRole1: Role = 0           // Admin
let userRole2: Role = Role.Admin  // 0

////////////////////////////////////////////////////////////////////////////////////

// Tipos Literais: amarra os valores que podem ser armazenados na variável
let userRole3: "Admin" = "Admin"
let userRole4: "Admin" = "Guest" // erro pois espera apenas "Admin"

let userRole5: "Admin" | "Guest" = "Guest"

let possibleResults: 1 | -1
possibleResults =  1
possibleResults = -1
possibleResults =  0 // erro pois só aceita 1 ou -1

////////////////////////////////////////////////////////////////////////////////////
//Custom Types - Tipos Personalizados
type Role2 = 'Admin' | 'Guest' | 'Editor'

let userRole6: Role2 = 'Admin';
let userRole7: Role2 = 'Reader' // erro: Reader não é uma das opções disponíveis para o tipo Role2 

type CriterioResolucaoId =
  | "id_certidao_debito"
  | "numero_certidao"
  | "id_sem_identificador"
  | "numero_sem_identificador";
let varCriterioResolucaoId: CriterioResolucaoId = 'id_certidao_debito' // só aceita os valores da lista

type ErrorResult = {
  error: number;
  status?: number;
  message?: string;
};
let erro: ErrorResult = {error: 1, status: 500, message: 'Erro'}