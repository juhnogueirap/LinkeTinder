static void main(String[] args) {

  List <CandidatoPF> candidatos = CandidatoPF.criarCandidatosDefault()
  List <EmpresaPJ> empresas = EmpresaPJ.criarEmpresasDefault()

  int opcao = menu()
  RealizarOpcao(opcao, candidatos, empresas)

}

int menu() {
  Scanner scanner = new Scanner(System.in)
  println("Olá! Seja bem vindo ao MVP do LinkeTinder. Informe a opção desejada: " +
          "\n 1 - Imprimir todos os candidatos" +
          "\n 2 - Imprimir todas as empresas" +
          "\n 3 - Criar candidato " +
          "\n 4 - Criar empresa" +
          "\n 5 - Fechar")
  int opcao = scanner.nextInt()
  return opcao

}

void RealizarOpcao(int opcao, List <CandidatoPF> candidatos, List <EmpresaPJ> empresas) {
  switch (opcao)  {
    case 1:
      candidatos.each{println it}
      break

    case 2:
      empresas.each{println it}
      break

    case 3:
      CandidatoPF novoCandidato = CandidatoPF.criarCandidato()
      CandidatoPF.adicionarCandidato(novoCandidato, candidatos)
      candidatos.each{println it}
      break

    case 4:

      EmpresaPJ novaEmpresa = EmpresaPJ.criarEmpresa()
      EmpresaPJ.adicionarEmpresa(novaEmpresa, empresas)
      empresas.each {println it}
      break

    case 5:
         break
    default:
      println("Ops! Opção inválida, tente novamente: \n")
      break

  }
}


//Juliana Nogueira Peixoto (juliananpeixoto01@ufrrj.br)
