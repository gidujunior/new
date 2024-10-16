document.getElementById('denuncia-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const descricao = document.getElementById('descricao').value;
    
    // Aqui você pode adicionar a lógica para enviar a denúncia para um servidor
    alert('Denúncia enviada com sucesso! Obrigado por sua contribuição.');
    
    // Limpar o formulário
    this.reset();
});
