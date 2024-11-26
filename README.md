# Catálogo Musical MVC

Um sistema de gerenciamento de discos, artistas e gêneros musicais, 
arquitetura MVC

---

## Funcionalidades do Projeto

- **Gerenciamento de Discos**:
  - Adicionar, editar e excluir discos.
  - Associar discos a gêneros musicais.
  - Listar todos os discos cadastrados, com informações detalhadas (ano de lançamento, capa, faixas e gênero).

- **Gerenciamento de Artistas**:
  - Adicionar, editar e excluir artistas.
  - Associar artistas a discos existentes.
  - Listar artistas cadastrados, com informações detalhadas (nome, gênero musical, discos associados e foto).

- **Gerenciamento de Gêneros**:
  - Adicionar gêneros musicais.
  - Listar gêneros, exibindo discos e artistas associados.

- **Busca Dinâmica**:
  - Busca por discos, artistas e gêneros utilizando parâmetros como nome, título ou gênero.

---

## Tecnologias Utilizadas

 ### Back-end:
   - Node.js
   - Express
   - Sequelize

 ### Front-end:
  - HTML EJS
  - CSS

 ### Banco de Dados**:
   - PostgreSQL

---

## Rode na sua máquina

Certifique-se de ter os seguintes programas instalados em sua máquina:
1. Node.js
2. PostgreSQL
3. Git

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Pedrobarizon04/CatalogoMusical
   cd CatalogoMusical

2. **Instale as dependências:**
   ```bash
   npm install
   
3. **Configure o Banco de Dados:**
- Crie um banco de dados no PostgreSQL
	
- Coloque sua sua password, username e database no config.json

4. **Execute as migrações e seeds para popular o banco de dados:**
   ```bash
   npx sequelize db:migrate

5. **Inicie o servidor:**
   ```bash
   npm start

6. **Acesse a aplicação no navegador:**
- Acesse o endereço http://localhost:3000.

## Muito obrigado!
