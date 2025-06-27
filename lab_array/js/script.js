let produtos = JSON.parse(localStorage.getItem('produtos')) || [
  { id: 1, nome: "Mouse", preco: 59.9, quantidade: 12 },
  { id: 2, nome: "Teclado", preco: 99.9, quantidade: 5 },
  { id: 3, nome: "Monitor", preco: 799.9, quantidade: 2 },
  { id: 4, nome: "Cabo HDMI", preco: 29.9, quantidade: 30 },
  { id: 5, nome: "Pen Drive", preco: 49.9, quantidade: 0 },
  { id: 6, nome: "Webcam", preco: 199.9, quantidade: 4 },
  { id: 7, nome: "SSD 240GB", preco: 299.9, quantidade: 6 },
  { id: 8, nome: "HD Externo", preco: 499.9, quantidade: 3 },
  { id: 9, nome: "Notebook", preco: 3499.9, quantidade: 1 },
  { id: 10, nome: "Suporte de Notebook", preco: 89.9, quantidade: 0 }
];

const salvar = () => {
  localStorage.setItem('produtos', JSON.stringify(produtos));
};

const mostrar = (mensagem) => {
  document.getElementById('resultado').textContent = mensagem;
};

// 1. Listar produtos com forEach
const listarProdutos = () => {
  let texto = "Lista de produtos:\n";
  produtos.forEach(p => {
    texto += `- ${p.nome}: R$ ${p.preco.toFixed(2)} | Quantidade: ${p.quantidade}\n`;
  });
  mostrar(texto);
};

// 2. Criar lista de nomes com map
const mostrarNomes = () => {
  const nomes = produtos.map(p => p.nome);
  mostrar("Nomes dos produtos:\n" + nomes.join("\n"));
};

// 3. Calcular valor total com reduce
const calcularTotal = () => {
  const total = produtos.reduce((soma, p) => soma + (p.preco * p.quantidade), 0);
  mostrar(`Valor total do estoque: R$ ${total.toFixed(2)}`);
};

// 4. Verificar esgotados com some
const verificarEsgotados = () => {
  const temEsgotado = produtos.some(p => p.quantidade === 0);
  mostrar(temEsgotado ? "Há produtos esgotados no estoque." : "Todos os produtos estão disponíveis.");
};

// 5. Verificar preços com every
const verificarPrecos = () => {
  const todosJustos = produtos.every(p => p.preco > 10);
  mostrar(todosJustos ? "Todos os produtos têm preço justo." : "Há produtos com preço muito baixo.");
};

// 6. Buscar produto com find
const buscarProduto = () => {
  const nomeBusca = document.getElementById('buscar').value.toLowerCase();
  const resultado = produtos.find(p => p.nome.toLowerCase() === nomeBusca);
  const div = document.getElementById('resultadoBusca');
  if (resultado) {
    div.textContent = `Produto encontrado:\nNome: ${resultado.nome}\nPreço: R$ ${resultado.preco.toFixed(2)}\nQuantidade: ${resultado.quantidade}`;
  } else {
    div.textContent = "Produto não encontrado.";
  }
};

// Evento do botão de busca
document.querySelector("button").addEventListener("click", buscarProduto);