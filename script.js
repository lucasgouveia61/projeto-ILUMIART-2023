function desativarJavascriptEm700px() {
  if (window.innerWidth <= 700) {
    // Desativar o JavaScript aqui

    // Por exemplo, você pode remover todos os event listeners
    // Você precisaria ter referências para todos os elementos e eventos que deseja remover.
    // Exemplo:
    // document.getElementById('meuElemento').removeEventListener('click', minhaFuncao);

    // Ou você pode simplesmente lançar um erro para interromper a execução do JavaScript
    throw new Error('JavaScript desativado em telas menores ou iguais a 700px');
  }
}

// Chame a função para verificar o tamanho da tela quando a página for carregada
desativarJavascriptEm700px();

// Você também pode adicionar um ouvinte de redimensionamento da janela para verificar continuamente
// o tamanho da tela quando a janela é redimensionada
window.addEventListener('resize', desativarJavascriptEm700px);
