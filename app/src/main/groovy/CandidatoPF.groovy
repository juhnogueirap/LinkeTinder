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

    def static adicionarCandidato(CandidatoPF candidato, List<CandidatoPF> listaCandidatos) {
        if (!candidato.nome || !candidato.email || !candidato.pais || !candidato.estado || !candidato.cep || !candidato.cpf || candidato.competencias.isEmpty()) {
            throw new IllegalArgumentException("Todos os campos devem ser preenchidos e competências não podem estar vazias.")
        } else {
            listaCandidatos.add(candidato)
        }

    }

    def  static criarCandidato(){
        Scanner scanner = new Scanner(System.in)
        println("Informe o seu nome: ")
        String nome = scanner.nextLine()
        println("Informe o seu email: ")
        String email = scanner.nextLine()
        println("Informe seu país: ")
        String pais = scanner.nextLine()
        println("Informe seu Estado: ")
        String estado = scanner.nextLine()
        println("Informe seu CEP: ")
        String cep = scanner.nextLine()
        println("Informe uma descrição: ")
        String descricao = scanner.nextLine()
        println("Informe suas competências separadas por espaço (ou digite 'sair' para terminar):")
        def competencias = []
        while (true) {
            String input = scanner.nextLine()
            if (input.equalsIgnoreCase("sair")) {
                break
            }
            competencias.addAll(input.split("\\s+"))
        }
        println("Informe sua idade: ")
        int idade = scanner.nextInt()
        println("Informe seu CPF: ")
        String cpf = scanner.nextLine()

        CandidatoPF novoCandidato = new CandidatoPF(nome: nome, email: email, pais: pais,
                estado: estado, cep: cep, competencias: competencias, idade: idade, cpf: cpf)

        return novoCandidato
    }

}

