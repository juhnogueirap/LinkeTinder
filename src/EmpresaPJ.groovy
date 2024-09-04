import java.time.LocalDate
import groovy.transform.ToString

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

    Date getDataFundacao() {
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
}