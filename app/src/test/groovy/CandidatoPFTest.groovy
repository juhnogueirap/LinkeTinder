import org.junit.Ignore
import spock.lang.FailsWith
import spock.lang.Specification

class CandidatoPFTest extends Specification {

    def "deve criar candidato como extensão de Pessoa corretamente"() {

        // verificando se a entrada de dados está funcionando corretamente e também se candidato é uma instancia da classe Pessoa

        given:
        String nome = "Ana"
        String email = "ana@gmail.com"
        String pais = "Brasil"
        String estado = "SP"
        String cep = "12345-678"
        String descricao = "estudiosa e dedicada"
        List competencias = ["Java", "Groovy"]
        String cpf = "000.000.000-00"
        int idade = 30

        when:
        CandidatoPF candidato = new CandidatoPF()
        candidato.setNome(nome)
        candidato.setEmail(email)
        candidato.setPais(pais)
        candidato.setEstado(estado)
        candidato.setCep(cep)
        candidato.setDescricao(descricao)
        candidato.setCompetencias(competencias)
        candidato.setCpf(cpf)
        candidato.setIdade(idade)

        then:
        candidato instanceof Pessoa
        candidato.getNome() == nome
        candidato.getEmail() == email
        candidato.getPais() == pais
        candidato.getEstado() == estado
        candidato.getCep() == cep
        candidato.getDescricao() == descricao
        candidato.getCompetencias() == competencias
        candidato.getCpf() == cpf
        candidato.getIdade() == idade

    }

    def "deve criar candidatos pré-cadastrados corretamente"() {

        given:
        List<CandidatoPF> resultado = CandidatoPF.criarCandidatosDefault()
        expect:

        verificarCandidato(resultado[0], 'Aluisio', 'aluisio@gmail.com', 'Brasil', 'MG', '00.000.000', 'organizado e adaptável', ["Java", "Kotlin"], 36, '000.000.000.00')
        verificarCandidato(resultado[1], 'Beatriz', 'beatriz@gmail.com', 'Brasil', 'RJ', '11.111.111', 'analítica e extrovertida', ["C++", "Python"], 25, '000.000.000.01')
        verificarCandidato(resultado[2], 'Caio', 'caio@gmail.com', 'Brasil', 'RJ', '22.222.222', 'Criativo e comunicativo', ["Ruby", "Lua"], 28, '000.000.000.02')
        verificarCandidato(resultado[3], 'Daniela', 'daniela@gmail.com', 'Brasil', 'TO', '33.333.333', 'organizada e inovadora', ["Java", "Python"], 30, '000.000.000.03')
        verificarCandidato(resultado[4], 'Eduardo', 'eduardo@gmail.com', 'Brasil', 'CE', '44.444.444', 'organizado e inovador', ["Java", "Python"], 30, '000.000.000.04')
    }

    static void verificarCandidato(CandidatoPF candidato, String nome, String email, String pais, String estado, String cep, String descricao, List competencias, int idade, String cpf) {
        assert candidato.getNome() == nome
        assert candidato.getEmail() == email
        assert candidato.getPais() == pais
        assert candidato.getEstado() == estado
        assert candidato.getCep() == cep
        assert candidato.getDescricao() == descricao
        assert candidato.getCompetencias() == competencias
        assert candidato.getIdade() == idade
        assert candidato.getCpf() == cpf
    }

    def "deve adicionar candidato ao ArrayList corretamente"() {

        given:
        List<CandidatoPF> listaCandidatos = []
        CandidatoPF novoCandidato = new CandidatoPF(
                nome: 'lulu',
                email: 'lulu@gmail.com',
                pais: 'Brasil',
                estado: 'SP',
                cep: '11.111.111',
                descricao: 'Organizada e eficiente',
                competencias: ["Java", "Groovy"],
                idade: 28,
                cpf: '123.456.789-00'
        )
        when:
        listaCandidatos.add(novoCandidato)

        then:
        listaCandidatos.size() == 1
        listaCandidatos.contains(novoCandidato)

        and:
        listaCandidatos[0].getNome() == 'lulu'
        listaCandidatos[0].getEmail() == 'lulu@gmail.com'
        listaCandidatos[0].getPais() == 'Brasil'
        listaCandidatos[0].getEstado() == 'SP'
        listaCandidatos[0].getCep() == '11.111.111'
        listaCandidatos[0].getDescricao() == 'Organizada e eficiente'
        listaCandidatos[0].getCompetencias() == ["Java", "Groovy"]
        listaCandidatos[0].getIdade() == 28
        listaCandidatos[0].getCpf() == '123.456.789-00'


    }

    def "deve adicionar candidato válido ao ArrayList"() {

        given:
        List<CandidatoPF> listaCandidatos = []


        CandidatoPF candidatoValido = new CandidatoPF(
                nome: 'lulu',
                email: 'lulu@gmail.com',
                pais: 'Brasil',
                estado: 'SP',
                cep: '11.111.111',
                descricao: 'Organizada e eficiente',
                competencias: ["Java", "Groovy"],
                idade: 28,
                cpf: '123.456.789-00'
        )
        when:
        CandidatoPF.adicionarCandidato(candidatoValido, listaCandidatos)

        then:
        listaCandidatos.size() == 1
        listaCandidatos.contains(candidatoValido)

    }

    def "não deve adicionar candidato inválido"() {

        given:
        List<CandidatoPF> listaCandidatos = []
        CandidatoPF candidatoInvalido = new CandidatoPF(
                nome: null,
                email: 'lulu@gmail.com',
                pais: 'Brasil',
                estado: 'SP',
                cep: '11.111.111',
                descricao: 'Organizada e eficiente',
                competencias: ["Java", "Groovy"],
                idade: 28,
                cpf: '123.456.789-00'
        )

        when:
        CandidatoPF.adicionarCandidato(candidatoInvalido, listaCandidatos)

        then:
        def exception = thrown(IllegalArgumentException)
        exception.message == "Todos os campos devem ser preenchidos e competências não podem estar vazias."
    }

    }





