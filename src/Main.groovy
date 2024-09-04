import java.time.LocalDate
import CandidatoPF





static void main(String[] args) {

  List <CandidatoPF> candidatos = CandidatoPF.criarCandidatosDefault()
  candidatos.each {println it}
  print("\n \n \n")
  List <EmpresaPJ> empresas = EmpresaPJ.criarEmpresasDefault()
  empresas.each {println it}
}

//Juliana Nogueira Peixoto (juliananpeixoto01@ufrrj.br)