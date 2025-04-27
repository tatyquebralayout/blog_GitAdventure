/**
 * Formata uma data em um formato legível
 * @param {Date} date - A data a ser formatada
 * @returns {string} - A data formatada
 */
export function formatDate(date) {
  return date.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
} 