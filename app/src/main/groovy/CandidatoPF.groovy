import groovy.transform.ToString

@ToString
class CandidatoPF extends Pessoa{

    String cpf;
    int idade;

    String getCpf(CandidatoPF candidato) {
        String cpf = candidato.cpf
        return cpf
    }

    void setCpf(String cpf) {
        this.cpf = cpf
    }

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

    @Override
    String toString() {
        return "${super.toString()}, Competências: {${competencias.join(', ')}}, Idade: ${idade}, CPF: ${cpf}"
    }

    def static criarCandidatosDefault() {
        CandidatoPF p1 = new CandidatoPF(
                nome: 'Aluisio',
                email: 'aluisio@gmail.com',
                pais: 'Brasil',
                estado: 'MG',
                cep: '00.000.000',
                descricao: 'organizado e adaptável',
                competencias: ["Java", "Kotlin"],
                idade: 36,
                cpf: '000.000.000.00'
        )
        CandidatoPF p2 = new CandidatoPF(
                nome: 'Beatriz',
                email: 'beatriz@gmail.com',
                pais: 'Brasil',
                estado: 'RJ',
                cep: '11.111.111',
                descricao: 'analítica e extrovertida',
                competencias: ["C++", "Python"],
                idade: 25,
                cpf: '000.000.000.01'
        )
        CandidatoPF p3 = new CandidatoPF(
                nome: 'Caio',
                email: 'caio@gmail.com',
                pais: 'Brasil',
                estado: 'RJ',
                cep: '22.222.222',
                descricao: 'Criativo e comunicativo',
                competencias: ["Ruby", "Lua"],
                idade: 28,
                cpf: '000.000.000.02'
        )
        CandidatoPF p4 = new CandidatoPF(
                nome: 'Daniela',
                email: 'daniela@gmail.com',
                pais: 'Brasil',
                estado: 'TO',
                cep: '33.333.333',
                descricao: 'organizada e inovadora',
                competencias: ["Java", "Python"],
                idade: 30,
                cpf: '000.000.000.03'
        )
        CandidatoPF p5 = new CandidatoPF(
                nome: 'Eduardo',
                email: 'eduardo@gmail.com',
                pais: 'Brasil',
                estado: 'CE',
                cep: '44.444.444',
                descricao: 'organizado e inovador',
                competencias: ["Java", "Python"],
                idade: 30,
                cpf: '000.000.000.04'
        )

        List<CandidatoPF> candidatos = [p1, p2, p3, p4, p5]

        return candidatos
    }

}