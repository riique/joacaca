// Resoluções das questões - JoaquimCola
// Este arquivo é gerado automaticamente pelo painel administrativo
// Para adicionar resoluções:
// 1. Use o painel admin no site (botão ⚙️ Admin)
// 2. Adicione suas resoluções
// 3. Exporte em JavaScript
// 4. Cole o código aqui
// 5. Faça commit no GitHub

const resolutionsData = {
  // Exemplo:
  // "1": "Esta é a resolução da questão 1...",
  // "2": "Esta é a resolução da questão 2...",
  // Adicione suas resoluções aqui
};

// Carregar resoluções automaticamente
if (typeof window !== 'undefined') {
    // Mesclar com resoluções existentes no localStorage
    const existingResolutions = JSON.parse(localStorage.getItem('joaquimcola-resolutions') || '{}');
    const mergedResolutions = { ...resolutionsData, ...existingResolutions };
    localStorage.setItem('joaquimcola-resolutions', JSON.stringify(mergedResolutions));
    
    // Recarregar se a página já estiver carregada
    if (typeof loadResolutions === 'function') {
        loadResolutions();
        if (typeof updateDisplay === 'function') {
            updateDisplay();
        }
    }
}
