### Enunciado do trabalho prático módulo 2 - Desenvolvimento de APIs

_Baixar os arquivos Cidades.json e Estados.json do seguinte link: (https://github.com/felipefdl/cidades-estados-brasil-json) e coloca-los dentro do seu projeto. O arquivo Estados.json possui uma listagem com todos os estados do Brasil, cada um representado por um ID. No arquivo Cidades.json estão listadas todas ascidades do Brasil, com seu respectivo estado representando pelo ID fazendo referência ao arquivo Estados.json. Os alunos deverão desempenhar as seguintes atividades:_

1. _Criar uma função que irá criar um arquivo JSON para cada estado representado no arquivo Estados.json, e o seu conteúdo será um array das cidades pertencentes a aquele estado, de acordo com o arquivo Cidades.json. O nome do arquivo deve ser o UF do estado, por exemplo: MG.json._

2. _Criar uma função que recebe como parâmetro o UF do estado, realize a leitura do arquivo JSON correspondente e retorne a quantidade de cidades daquele estado._

3. _Criar um método que imprima no console um array com o UF dos cinco estados que mais possuem cidades, seguidos da quantidade, em ordem decrescente. Você pode usar a função criada no tópico 2. Exemplo de impressão: [“UF - 93”, “UF - 82”, “UF - 74”, “UF - 72”, “UF - 65”]_

4. _Criar um método que imprima no console um array com o UF dos cinco estados que menos possuem cidades, seguidos da quantidade, em ordem decrescente. Você pode usar a função criada no tópico 2. Exemplo de impressão: [“UF - 30”, “UF - 27”, “UF - 25”, “UF - 23”, “UF - 21”]_

5. _Criar um método que imprima no console um array com a cidade de maior nome de cada estado, seguida de seu UF. Por exemplo: [“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...]._

6. _Criar um método que imprima no console um array com a cidade de menor nome de cada estado, seguida de seu UF. Por exemplo: [“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...]._

7. _Criar um método que imprima no console a cidade de maior nome entre todos os estados, seguido do seu UF. Exemplo: “Nome da Cidade - UF"._

8. _Criar um método que imprima no console a cidade de menor nome entre todos os estados, seguido do seu UF. Exemplo: “Nome da Cidade - UF"._

###### Observações:

- Nos itens que tratam a respeito do tamanho do nome da cidade, em caso de empate no tamanho entre várias cidades, você deve considerar a ordem alfabética para ordenar as cidades pelo seu nome, e então retornar a primeira cidade.
- Você deve considerar os nomes das cidades da forma que estão no arquivo, mesmo que tenha observações no nome entre parênteses. Exemplo: Cidade X (antiga Cidade Y).
- Ao rodar o projeto, ele deve executar os métodos em sequência e depois finalizar a execução.
