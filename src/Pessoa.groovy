import groovy.transform.ToString

@ToString
class Pessoa implements IPessoa {

    String nome
    String email
    String pais
    String estado
    String cep
    String descricao
    List competencias


    def setNome(String nome) {
        this.nome = nome
        return null
    }

    def setEmail(String email) {
        this.email = email
        return null
    }

    def setPais(String pais) {
        this.pais = pais
        return null
    }

    def setEstado(String estado) {
        this.estado = estado
        return null
    }

    def setCep(String cep) {
        this.cep = cep
        return null
    }

    def setDescricao(String descricao) {
        this.descricao = descricao
        return null
    }

    def setCompetencias(List competencias) {
        this.competencias = competencias
        return null
    }

    String getNome() {
        return nome
    }

    String getEmail() {
        return email
    }

    String getPais() {
        return pais
    }

    String getEstado() {
        return estado
    }

    String getCep() {
        return cep
    }

    String getDescricao() {
        return descricao
    }

    List getCompetencias() {
        return competencias
    }

    String toString() {
        return "Nome: ${nome}, Email: ${email}, País: ${pais}, Estado: ${estado}, CEP: ${cep}, Descrição: ${descricao}"
    }
}
