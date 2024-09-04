import CandidatoPF

static void main(String[] args) {

  CandidatoPF p1 = new CandidatoPF(nome: 'Aluisio', email: 'aluisio@gmail.com', pais: 'Brasil', estado: 'MG', cep: '00.000.000', descricao: 'organizado e adaptável', competencias: ["Java", "Kotlin"], idade: 36 )
  CandidatoPF p2 = new CandidatoPF(nome: 'Beatriz', email: 'beatriz@gmail.com', pais: 'Brasil', estado: 'RJ', cep: '11.111.111', descricao: 'analítica e extrovertida', competencias: ["C++", "Python"], idade: 25)
  CandidatoPF p3 = new CandidatoPF(nome: 'Caio', email: 'caio@gmail.com', pais: 'Brasil', estado: 'RJ', cep: '22.222.222', descricao: 'Criativo e comunicativo', competencias: ["Ruby", "Lua"], idade: 28)
  CandidatoPF p4 = new CandidatoPF(nome: 'Daniela', email: 'daniela@gmail.com', pais: 'Brasil', estado: 'TO', cep: '33.333.333', descricao: 'organizada e inovadora', competencias: ["Java", "Python"], idade: 30)
  CandidatoPF p5 = new CandidatoPF(nome: 'Eduardo', email: 'eduardo@gmail.com', pais: 'Brasil', estado: 'CE', cep: '33.333.333', descricao: 'organizada e inovadora', competencias: ["Java", "Python"], idade: 30)

  println p1
  println p2
  println p3


}

