# AMIGO SECRETO | Sorteio online

## **Descrição**  

Este projeto foi desenvolvido como parte do meu programa de estudos com **Oracle Next Education**, em parceria com a **Alura**. Sua finalidade é facilitar a realização de sorteios de "Amigo Secreto" online, permitindo que os usuários insiram os nomes de seus amigos, sorteiem aleatoriamente e visualizem os resultados em tempo real. O sistema utiliza HTML, CSS e JavaScript para propiciar uma experiência simples e prática.

## Funcionalidades

- **Adicionar amigo(s)**: O usuário pode inserir os nomes dos amigos em um campo de entrada, e esses nomes serão armazenados em uma lista exibida na tela.
- **Exibir lista de amigo(s)**: A lista de amigos inseridos será mostrada em tempo real, facilitando o acompanhamento e a interação.
- **Sorteio do amigo secreto**: Ao clicar no botão "Sortear amigo", o sistema realiza o sorteio aleatório e exibe o resultado na tela.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página e elementos do formulário.
- **CSS**: Estilo e layout da página, tornando a interface mais amigável.
- **JavaScript**: Lógica para captura de entradas do usuário, validação de dados e realização do sorteio dos amigos secretos.

## Como usar

1.  Clone o repositório oferecido.
2.  Abra o arquivo `index.html` no seu navegador.
3.  Digite os nomes dos seus amigos no campo apropriado e clique em "Adicionar".
4.  Clique em "Sortear amigo" para descobrir o resultado.
5.  Recarregue a página para iniciar um novo sorteio.

## Código
```javascript
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputNome = document.getElementById('amigo').value;

    if (inputNome === "") {
        alert("Por favor, digite o nome de um amigo.");
        return;
    }

    amigos.push(inputNome);
    document.getElementById('amigo').value = "";
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach(function(amigo) {
        const novoAmigo = document.createElement('li');
        novoAmigo.textContent = amigo;
        listaAmigos.appendChild(novoAmigo);
    });
}

// Função para sortear um único amigo (individual)
function sortearIndividual() {
    if (amigos.length < 4) {
        alert("Por favor, adicione pelo menos 4 amigos para sortear.");
        return;
    }

    let amigosEmbaralhados = amigos.slice();

    for (let i = amigosEmbaralhados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosEmbaralhados[i], amigosEmbaralhados[j]] = [amigosEmbaralhados[j], amigosEmbaralhados[i]];
    }

    // Sorteio de um amigo único
    const amigoSorteado = amigosEmbaralhados[0];  // Sorteio do primeiro da lista embaralhada

    // Exibir o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}