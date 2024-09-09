import org.apache.tools.ant.taskdefs.Local
import spock.lang.Specification

import java.time.LocalDate

class EmpresaPjTest extends Specification{


    def "deve criar empresa como extensão de Pessoa corretamente"() {

        // verificando se a entrada de dados está funcionando corretamente e também se empresa é uma instancia da classe Pessoa

        given:
        String nome = "Solutions"
        String email = "solutions.tech@gmail.com"
        String pais = "Brasil"
        String estado = "RJ"
        String cep = "12345-678"
        String descricao = "soluções tecnológicas"
        List competencias = ["Java", "Groovy"]
        String cnpj = "16.813.253/0001-14"
        LocalDate dataFundacao = LocalDate.of(1948, 8, 2)

        when:
        EmpresaPJ empresa = new EmpresaPJ()
        empresa.setNome(nome)
        empresa.setEmail(email)
        empresa.setPais(pais)
        empresa.setEstado(estado)
        empresa.setCep(cep)
        empresa.setDescricao(descricao)
        empresa.setCompetencias(competencias)
        empresa.setCnpj(cnpj)
        empresa.setDataFundacao(dataFundacao)

        then:
        empresa instanceof Pessoa
        empresa.getNome() == nome
        empresa.getEmail() == email
        empresa.getPais() == pais
        empresa.getEstado() == estado
        empresa.getCep() == cep
        empresa.getDescricao() == descricao
        empresa.getCompetencias() == competencias
        empresa.getCnpj() == cnpj
        empresa.getDataFundacao() == dataFundacao

    }

    def "deve criar empresas pré-cadastradas corretamente"() {

        given:
        List<EmpresaPJ> resultado = EmpresaPJ.criarEmpresasDefault()
        expect:

        verificarEmpresa(resultado[0], 'SOLUtions', 'solutions.solu@gmail.com', 'USA', 'Minnesota', '10.000.000', 'soluções tecnológicas', ["Python", "C#"], LocalDate.of(1948, 8, 2), '67.818.166/0001-90')
        verificarEmpresa(resultado[1], 'ObleSecurity', 'oblesecurity.oble@gmail.com', 'Canada', 'Vancouver', '11.000.000', 'técnicas de cybersecurity', ["Linux", "Compliance"], LocalDate.of(2000, 3, 17), '78.331.297/0001-65')
        verificarEmpresa(resultado[2], 'Cortello Tech', 'cortello.tellotech@gmail.com', 'Brasil', 'SP', '22.000.000', 'soluções de ERP', ["Engenharia de Software", "Modelagem de Software"], LocalDate.of(1990, 7, 20), '06.537.864/0001-23')
        verificarEmpresa(resultado[3], 'HealthTech', 'healthtech.htech@gmail.com', 'Brasil', 'RS', '33.000.000', 'soluções tecnológicas para clínicas e hospitais', ["Java", "POO", "PowerBI"], LocalDate.of(2015, 4, 26), '48.856.276/0001-00')
        verificarEmpresa(resultado[4], 'QualityAssistent', 'qualityassis.quality@gmail.com', 'Canada', 'Ontario', '44.000.000', 'assistentes tecnológicos personalizados para empresas', ["IA", "Python", "MachineLearning"], LocalDate.of(2015, 9, 16), '06.537.864/0001-23')
    }

    static void verificarEmpresa(EmpresaPJ empresa, String nome, String email, String pais, String estado, String cep, String descricao, List competencias, LocalDate dataFundacao, String cnpj) {
        assert empresa.getNome() == nome
        assert empresa.getEmail() == email
        assert empresa.getPais() == pais
        assert empresa.getEstado() == estado
        assert empresa.getCep() == cep
        assert empresa.getDescricao() == descricao
        assert empresa.getCompetencias() == competencias
        assert empresa.getCnpj() == cnpj
        assert empresa.getDataFundacao() == dataFundacao
    }

    def "deve adicionar empresas ao ArrayList corretamente"() {

        given:
        List<EmpresaPJ> listaEmpresas = []
        EmpresaPJ novaEmpresa = new EmpresaPJ(
                nome: 'lulu',
                email: 'lulu@gmail.com',
                pais: 'Brasil',
                estado: 'SP',
                cep: '11.111.111',
                descricao: 'Organizada e eficiente',
                competencias: ["Java", "Groovy"],
                dataFundacao: LocalDate.of(2015, 4, 26),
                cnpj: '48.856.276/0001-00'
        )
        when:
        listaEmpresas.add(novaEmpresa)

        then:
        listaEmpresas.size() == 1
        listaEmpresas.contains(novaEmpresa)

        and:
        listaEmpresas[0].getNome() == 'lulu'
        listaEmpresas[0].getEmail() == 'lulu@gmail.com'
        listaEmpresas[0].getPais() == 'Brasil'
        listaEmpresas[0].getEstado() == 'SP'
        listaEmpresas[0].getCep() == '11.111.111'
        listaEmpresas[0].getDescricao() == 'Organizada e eficiente'
        listaEmpresas[0].getCompetencias() == ["Java", "Groovy"]
        listaEmpresas[0].dataFundacao == LocalDate.of(2015, 4, 26)
        listaEmpresas[0].cnpj =='48.856.276/0001-00'


    }

    def "deve adicionar empresa válida ao ArrayList"() {

        given:
        List<EmpresaPJ> listaEmpresas = []


        EmpresaPJ empresaValida = new EmpresaPJ(
                nome: 'lulu',
                email: 'lulu@gmail.com',
                pais: 'Brasil',
                estado: 'SP',
                cep: '11.111.111',
                descricao: 'Organizada e eficiente',
                competencias: ["Java", "Groovy"],
                dataFundacao: LocalDate.of(2015, 4, 26),
                cnpj: '48.856.276/0001-00'
        )
        when:
        EmpresaPJ.adicionarEmpresa(empresaValida, listaEmpresas)

        then:
        listaEmpresas.size() == 1
        listaEmpresas.contains(empresaValida)

    }

    def "não deve adicionar empresa inválida"() {

        given:
        List<EmpresaPJ> listaEmpresas = []
        EmpresaPJ empresaInvalida = new EmpresaPJ(
                nome: null,
                email: 'lulu@gmail.com',
                pais: 'Brasil',
                estado: 'SP',
                cep: '11.111.111',
                descricao: 'Organizada e eficiente',
                competencias: ["Java", "Groovy"],
                dataFundacao: LocalDate.of(2015, 4, 26),
                cnpj: '48.856.276/0001-00'
        )

        when:
        EmpresaPJ.adicionarEmpresa(empresaInvalida, listaEmpresas)

        then:
        def exception = thrown(IllegalArgumentException)
        exception.message == "Todos os campos devem ser preenchidos e competências não podem estar vazias."
    }

}


