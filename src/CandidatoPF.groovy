import groovy.transform.ToString

@ToString
class CandidatoPF extends Pessoa{

    int idade;

    def setIdade(int idade) {
        this.idade = idade
    }
    def getIdade(CandidatoPF candidato) {
        int idade = candidato.idade
        return idade
    }
    void imprimirCandidato(CandidatoPF candidato) {

        print(candidato)
    }

    String toString() {
        return "${super.toString()}, Competências: ${competencias.join(', ')}, Idade: ${idade}"
    }

}