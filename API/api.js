const container = document.getElementById("container");

fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((data) => {
    // O correto é data.results (no plural) e sem o ".array"
    data.results.forEach((character) => {
      const card = document.createElement("div");
      card.className = "box";

      // O HTML precisa ficar DENTRO das crases (` `)
      card.innerHTML = `
        <img src="${character.image}" alt="${character.name}" />
        <div class="info">
            <h2>${character.name}</h2>
            <p><span class="status ${character.status.toLowerCase()}"></span> ${character.status} - ${character.species}</p>
        </div>
      `;

      // Faltava adicionar o card criado dentro do container
      container.appendChild(card);
    });
  })
  .catch((error) => console.error("Erro ao buscar personagens:", error));




//   // ==========================================
// // 1. SELEÇÃO DO ELEMENTO NO DOM
// // ==========================================

// // O 'document' representa a página HTML inteira carregada no navegador.
// // O método 'getElementById("container")' busca no HTML o elemento que possui o ID "container".
// // Estamos guardando essa referência dentro da constante 'container' para podermos injetar os cards lá dentro mais tarde.
// const container = document.getElementById("container");


// // ==========================================
// // 2. REQUISIÇÃO DA API (FETCH)
// // ==========================================

// // A função global 'fetch()' faz uma requisição HTTP (do tipo GET por padrão) para o endereço (URL) passado entre parênteses.
// // Ela vai até o servidor da API do Rick and Morty buscar os dados dos personagens.
// fetch("https://rickandmortyapi.com/api/character")

//   // ==========================================
//   // 3. TRATAMENTO DA RESPOSTA (PRIMEIRO .then)
//   // ==========================================

//   // O fetch retorna uma "Promise" (promessa) que se resolve em um objeto de resposta crua (Response).
//   // Usamos '.then()' para capturar essa resposta quando ela chegar.
//   // '(res)' é o parâmetro que representa essa resposta bruta do servidor.
//   // 'res.json()' é um método que pega essa resposta bruta e a converte (faz o parse) de formato de texto/stream para um objeto JavaScript legível (JSON).
//   .then((res) => res.json())

//   // ==========================================
//   // 4. MANIPULAÇÃO DOS DADOS (SEGUNDO .then)
//   // ==========================================

//   // Este segundo '.then()' recebe o objeto JavaScript já convertido e pronto para uso, que apelidamos de 'data'.
//   .then((data) => {
//     // 'data' é o objeto principal retornado pela API. Ele possui propriedades como 'info' (paginação) e 'results' (a lista de personagens).
//     // Usamos 'data.results' (no plural, pois é a propriedade correta que a API fornece) para acessar o array (a lista) com os 20 primeiros personagens.

//     // O método '.forEach()' é um loop que percorre cada item (personagem) dentro do array 'data.results' um por um.
//     // 'character' é a variável que representa o personagem atual em cada volta do loop.
//     data.results.forEach((character) => {

//       // ==========================================
//       // 5. CRIAÇÃO DINÂMICA DOS ELEMENTOS HTML
//       // ==========================================

//       // 'document.createElement("div")' cria na memória do navegador uma nova tag HTML (neste caso, uma div).
//       // Ela ainda não aparece na tela porque não foi anexada ao HTML principal.
//       const card = document.createElement("div");

//       // 'card.className = "box"' atribui o valor "box" ao atributo 'class' dessa div recém-criada.
//       // Isso faz com que as regras de estilização definidas no arquivo CSS (.box) sejam aplicadas a ela.
//       card.className = "box";

//       // 'card.innerHTML' permite definir ou alterar o conteúdo HTML interno da nossa div 'card'.
//       // Usamos crases (``) para criar uma "Template Literal" (string avançada), o que nos permite injetar variáveis do JavaScript no meio do HTML usando a sintaxe ${...}.
//       card.innerHTML = `
//         <!-- Exibe a imagem do personagem usando a propriedade 'image' vinda do objeto character -->
//         <img src="${character.image}" alt="${character.name}" />

//         <div class="info">
//             <!-- Exibe o nome do personagem vindo da propriedade 'name' -->
//             <h2>${character.name}</h2>

//             <p>
//                 <!-- 
//                   Aqui usamos 'character.status.toLowerCase()' para transformar o status (ex: "Alive", "Dead") em letras minúsculas (ex: "alive", "dead").
//                   Isso serve para concatenar dinamicamente na classe CSS (ex: class="status alive"), mudando a cor da bolinha de acordo com o estado do personagem.
//                 -->
//                 <span class="status ${character.status.toLowerCase()}"></span> 
                
//                 <!-- Exibe o texto do status atual e a espécie do personagem -->
//                 ${character.status} - ${character.species}
//             </p>
//         </div>
//       `;

//       // ==========================================
//       // 6. INSERÇÃO DO ELEMENTO NA TELA
//       // ==========================================

//       // 'container.appendChild(card)' pega o elemento 'card' que acabamos de criar, estruturar e estilizar, 
//       // e o insere fisicamente como um "filho" dentro da div principal 'container' que está no nosso HTML.
//       // Como isso está dentro do loop forEach, essa ação se repete para cada um dos personagens retornados pela API.
//       container.appendChild(card);
//     });
//   })

//   // ==========================================
//   // 7. TRATAMENTO DE ERROS (CATCH)
//   // ==========================================

//   // O '.catch()' é executado caso ocorra algum erro durante o processo de requisição do fetch (por exemplo: sem internet, URL errada, servidor fora do ar).
//   // '(error)' captura o erro ocorrido e 'console.error()' exibe uma mensagem detalhada no console do navegador para facilitar a depuração.
//   .catch((error) => console.error("Erro ao buscar personagens:", error));