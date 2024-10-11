export const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
};

export const formatDate = (value) => {
  const date = new Date(value);
  return date.toLocaleDateString('pt-BR');
};
