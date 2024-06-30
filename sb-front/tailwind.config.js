/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {},
    screens: {
      sm:'576px',
      md:'768px',
      lg:'992px',
      xl:'1200px',
      xxl:'1700px'
    },
    colors:{
      'cinza-claro': '#E5E5E5',
      'cinza-escuro': '#333333',
      'branco': '#FFFFFF',
      'verde': '#66D16A',
      'azul-claro': '#F0F4F8',
      'azul-escuro': '#007AFF',
      'vermelho-claro': '#F85B4D',
      'vermelho-escuro': '#C62828',
      'amarelo': '#F6CD4B'
    }
  },
  plugins: [],
}

