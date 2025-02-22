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