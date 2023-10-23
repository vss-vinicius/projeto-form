// Obtém a referência ao elemento HTML com o id 'mode_icon' e armazena-o na variável 'mode'.
const mode = document.getElementById('mode_icon');

// Adiciona um evento de clique ao elemento 'mode', que será executado quando o ícone for clicado.
mode.addEventListener('click', () => {
    // Obtém a referência ao elemento HTML com o id 'login_form' e armazena-o na variável 'form'.
    const form = document.getElementById('login_form');

    // Verifica se a classe 'fa-moon' está presente no elemento 'mode'.
    if (mode.classList.contains('fa-moon')) {
        // Se a classe 'fa-moon' estiver presente, remove-a e adiciona a classe 'fa-sun' ao ícone.
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        // Adiciona a classe 'dark' ao elemento 'form', o que provavelmente muda o estilo para um modo escuro.
        form.classList.add('dark');

        // Encerra a função e sai do evento de clique.
        return;
    }

    // Se a classe 'fa-moon' não estiver presente, adiciona a classe 'fa-moon' e remove a classe 'fa-sun' do ícone.
    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');

    // Remove a classe 'dark' do elemento 'form', o que provavelmente muda o estilo para um modo claro.
    form.classList.remove('dark');
});