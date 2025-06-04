# 📚 JoaquimCola - Questões e Resoluções

Uma página web otimizada para smartwatch Samsung Galaxy Watch 6 para visualizar resoluções de questões com suporte completo ao LaTeX/KaTeX.

## 🚀 Funcionalidades

- ✅ Suporte para 20 questões
- 🧮 Renderização completa de LaTeX/KaTeX
- 📱 Interface otimizada para smartwatch
- 🎯 Navegação touch-friendly
- 🌐 Carregamento automático do GitHub Pages
- ⚡ Interface limpa e focada na visualização

## 📁 Estrutura de Arquivos

```
/
├── index.html          # Página principal
├── resolutions.json    # Arquivo com resoluções (prioridade)
└── resolutions.js      # Arquivo alternativo (fallback)
```

## 🎮 Como Usar no Smartwatch

1. **Acesse o GitHub Pages** no navegador do smartwatch
2. **Navegue pelas questões** usando os botões ou grid numérica
3. **Visualize as resoluções** com LaTeX renderizado perfeitamente
4. **Use gestos de toque** para navegar facilmente

## 🌐 Carregamento Automático

A página carrega automaticamente as resoluções do GitHub:
- **Prioridade 1**: `resolutions.json`
- **Fallback**: `resolutions.js`
- **Indicador visual** mostra a origem dos dados (🌐 GitHub ou 📱 Local)

## 💻 Como Adicionar Resoluções

### **Método 1: Editar resolutions.json diretamente**

1. **Edite o arquivo `resolutions.json`** no seu editor favorito
2. **Adicione resoluções** no formato JSON:
```json
{
  "1": "Resolução da questão 1 com LaTeX: $x^2 + y^2 = z^2$",
  "2": "Resolução da questão 2 com fração: $\\frac{a}{b} = \\frac{c}{d}$"
}
```
3. **Faça commit no GitHub**
4. **As resoluções aparecerão automaticamente** no GitHub Pages!

### **Método 2: Usar interface local (para edição mais fácil)**

1. **Abra `index.html` localmente** no seu PC
2. **Adicione resoluções** usando a interface (salva no localStorage)
3. **Use ferramentas de desenvolvedor** para exportar o JSON
4. **Copie para `resolutions.json`** e faça commit

## 🧮 **Suporte Completo ao LaTeX/KaTeX:**

- **Fórmulas inline**: `$x^2 + y^2 = z^2$`
- **Fórmulas em bloco**: `$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$`
- **Frações**: `$\frac{a}{b}$`, `$\frac{\partial f}{\partial x}$`
- **Símbolos**: `$\alpha, \beta, \gamma, \sum, \prod, \int$`
- **Matrizes**: `$\begin{pmatrix} a & b \\ c & d \end{pmatrix}$`
- **Quebras de linha**: Use `\n` no JSON para quebras de linha

## ⌚ Otimizações para Smartwatch

- Interface responsiva para telas pequenas (450x450px)
- Botões grandes para facilitar o toque
- Texto legível em telas pequenas
- Navegação simplificada
- Cores contrastantes para melhor visibilidade

## 🌐 GitHub Pages

Esta página está configurada para funcionar perfeitamente no GitHub Pages.

---

Desenvolvido para facilitar o estudo e revisão de questões no smartwatch! 📚⌚
