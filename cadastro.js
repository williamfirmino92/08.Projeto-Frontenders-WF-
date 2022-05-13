$(document).ready(function(){

    // Variável que representa o produto escolhido pelo usuário
    var produto;

    // Esconde os cards com os detalhes e preços dos planos
   $(".card-plano-prata").hide();
   $(".card-plano-ouro").hide();
   $(".card-pacote-prata").hide();
   $(".card-pacote-ouro").hide();
   $("#botao-plano-prata").hide();
   $("#botao-plano-ouro").hide();
   $("#botao-pacote-prata").hide();
   $("#botao-pacote-ouro").hide();

   $(".botao-plano").on("click", function() {
    $("#botao-plano-prata").show();
    $("#botao-plano-ouro").show();
    $("#botao-pacote-prata").hide();
    $("#botao-pacote-ouro").hide();
   })

   $(".botao-pacote").on("click", function() {
    $("#botao-plano-prata").hide();
    $("#botao-plano-ouro").hide();
    $("#botao-pacote-prata").show();
    $("#botao-pacote-ouro").show();
   })
  
    // Exibe os cards ao clicar nos botões de cima   
   $("#botao-plano-prata").click(function() {
    $(".card-plano-prata").toggle(500);
    produto = "plano-prata";
    console.log(produto)

   })

   $("#botao-plano-ouro").click(function() {
    $(".card-plano-ouro").toggle(500);
    produto = "plano-ouro";
    console.log(produto)
   })

   $("#botao-pacote-prata").click(function() {
    $(".card-pacote-prata").toggle(500);
    produto = "pacote-prata";
    console.log(produto)
   })

   $("#botao-pacote-ouro").click(function() {
    $(".card-pacote-ouro").toggle(500);
    produto = "pacote-ouro";
    console.log(produto)
   })
  
  });

  