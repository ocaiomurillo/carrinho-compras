let totalGeral;
limpar();
function adicionar(){
  //recuperar os valores do nome do produto, qtd e valor
  let produto = document.getElementById('produto').value;
  let nomeProduto = produto.split('-')[0];
  let valorUnitario = produto.split('R$')[1];
  let qtd = document.getElementById('quantidade').value;
  //calcular o subtotal
  let preco = qtd * valorUnitario;
  //adicionar no carrinho
  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${qtd}x </span>${nomeProduto}<span class="texto-azul">R$${preco}</span></section>`
  //atualizar o valor total  
  totalGeral = totalGeral + preco;
  document.getElementById('valor-total').innerHTML = `R$ ${totalGeral}`
  document.getElementById('quantidade').value = 0
}
function  limpar(){
  totalGeral = 0
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$ 0';
}