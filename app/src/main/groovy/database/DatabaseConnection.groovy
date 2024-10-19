package database

import java.sql.Connection
import java.sql.DriverManager
import java.sql.SQLException

class DatabaseConnection {
    private static final String URL = "jdbc:postgresql://localhost:5432/postgres"
    private static final String USER = "postgres"
    private static final String PASSWORD = "bobomax"

    static Connection conectar() throws SQLException {
        DriverManager.getConnection(URL, USER, PASSWORD)
    }

    static void main(String[] args) {
        Connection conexao = null
        try {
            conexao = conectar()
            println "Conexão estabelecida com sucesso!"
        } catch (SQLException e) {
            println "Falha na conexão: ${e.message}"
        } finally {
            if (conexao != null) {
                try {
                    conexao.close()
                } catch (SQLException e) {
                    println "Erro ao fechar a conexão: ${e.message}"
                }
            }
        }
    }
}
