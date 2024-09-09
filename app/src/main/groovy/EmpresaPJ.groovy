import java.time.LocalDate
import groovy.transform.ToString
import java.time.format.DateTimeParseException


@ToString
class EmpresaPJ extends Pessoa{

    String cnpj
    LocalDate dataFundacao

    String getCnpj(EmpresaPJ empresa) {
        String cnpj = empresa.cnpj
        return cnpj
    }

    void setCnpj(String cnpj) {
        this.cnpj = cnpj
    }

    LocalDate getDataFundacao() {
        return dataFundacao
    }

    void setDataFundacao(LocalDate dataFundacao) {
        this.dataFundacao = dataFundacao
    }

    @Override
    public String toString() {
        return "${super.toString()}, Competências: {${competencias.join(', ')}}, Fundação: ${dataFundacao}, CNPJ: ${cnpj}"
    }

    def static criarEmpresasDefault() {
        EmpresaPJ e1 = new EmpresaPJ(
                nome: 'SOLUtions',
                email: 'solutions.solu@gmail.com',
                pais: 'USA',
                estado: 'Minnesota',
                cep: '10.000.000',
                descricao: 'soluções tecnológicas',
                competencias: ["Python", "C#"],
                dataFundacao: LocalDate.of(1948, 8, 2),
                cnpj: '67.818.166/0001-90'
        )
        EmpresaPJ e2 = new EmpresaPJ(
                nome: 'ObleSecurity',
                email: 'oblesecurity.oble@gmail.com',
                pais: 'Canada',
                estado: 'Vancouver',
                cep: '11.000.000',
                descricao: 'técnicas de cybersecurity',
                competencias: ["Linux", "Compliance"],
                dataFundacao: LocalDate.of(2000, 3, 17),
                cnpj: '78.331.297/0001-65'
        )
        EmpresaPJ e3 = new EmpresaPJ(
                nome: 'Cortello Tech',
                email: 'cortello.tellotech@gmail.com',
                pais: 'Brasil',
                estado: 'SP',
                cep: '22.000.000',
                descricao: 'soluções de ERP',
                competencias: ["Engenharia de Software", "Modelagem de Software"],
                dataFundacao: LocalDate.of(1990, 7, 20),
                cnpj: '06.537.864/0001-23'
        )
        EmpresaPJ e4 = new EmpresaPJ(
                nome: 'HealthTech',
                email: 'healthtech.htech@gmail.com',
                pais: 'Brasil',
                estado: 'RS',
                cep: '33.000.000',
                descricao: 'soluções tecnológicas para clínicas e hospitais',
                competencias: ["Java", "POO", "PowerBI"],
                dataFundacao: LocalDate.of(2015, 4, 26),
                cnpj: '48.856.276/0001-00'
        )
        EmpresaPJ e5 = new EmpresaPJ(
                nome: 'QualityAssistent',
                email: 'qualityassis.quality@gmail.com',
                pais: 'Canada',
                estado: 'Ontario',
                cep: '44.000.000',
                descricao: 'assistentes tecnológicos personalizados para empresas',
                competencias: ["IA", "Python", "MachineLearning"],
                dataFundacao: LocalDate.of(2015, 9, 16),
                cnpj: '06.537.864/0001-23'
        )

        List<EmpresaPJ> empresas = [e1, e2, e3, e4, e5]

        return empresas
    }

    def static adicionarEmpresa(EmpresaPJ empresa, List<EmpresaPJ> listaEmpresas) {
        if (!empresa.nome || !empresa.email || !empresa.pais || !empresa.estado || !empresa.cep || !empresa.cnpj || empresa.competencias.isEmpty()) {
            throw new IllegalArgumentException("Todos os campos devem ser preenchidos e competências não podem estar vazias.")
        } else {
            listaEmpresas.add(empresa)
        }

    }

    def  static criarEmpresa(){
        Scanner scanner = new Scanner(System.in)
        println("Informe o nome da empresa: ")
        String nome = scanner.nextLine()
        println("Informe o seu email da empresa: ")
        String email = scanner.nextLine()
        println("Informe o país da empresa: ")
        String pais = scanner.nextLine()
        println("Informe o Estado da empresa: ")
        String estado = scanner.nextLine()
        println("Informe o CEP da empresa: ")
        String cep = scanner.nextLine()
        println("Informe uma descrição: ")
        String descricao = scanner.nextLine()
        println("Informe as competências esperadas pela empresa separadas por espaço (ou digite 'sair' para terminar):")
        def competencias = []
        while (true) {
            String input = scanner.nextLine()
            if (input.equalsIgnoreCase("sair")) {
                break
            }
            competencias.addAll(input.split("\\s+"))
        }
        println("Informe a data de fundação da empresa no formato yyyy-MM-dd: ")
        String input = scanner.nextLine()
        LocalDate dataFundacao = null
        try {
            dataFundacao = LocalDate.parse(input)
        } catch (DateTimeParseException e) {
            println("Data inválida. Por favor, use o formato yyyy-MM-dd.")
            return null
        }
        println("Informe o CNPJ da empresa: ")
        String cnpj = scanner.nextLine()

        EmpresaPJ novoEmpresa = new EmpresaPJ(nome: nome, email: email, pais: pais,
                estado: estado, cep: cep, competencias: competencias, dataFundacao: dataFundacao, cnpj: cnpj)

        return novoEmpresa
    }
}