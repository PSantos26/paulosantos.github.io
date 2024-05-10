// Define a função showSection que aceita um argumento sectionId, o ID da seção que deve ser exibida.
function showSection(sectionId) {
    // Seleciona todos os elementos com a classe 'content' na página e os armazena na variável 'sections'.
    var sections = document.querySelectorAll('.content');

    // Utiliza o método forEach para iterar sobre cada seção encontrada.
    sections.forEach(section => {
        // Define o estilo de exibição de cada seção para 'none', ocultando-as.
        section.style.display = 'none';
    });

    // Seleciona o elemento com o ID fornecido em sectionId e muda seu estilo de exibição para 'block',
    // tornando essa seção visível.
    document.getElementById(sectionId).style.display = 'block';
}
