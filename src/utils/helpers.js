export const genId = () => `reg_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;

export const formatDateTime = (isoString) => {
  try {
    return new Date(isoString).toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return isoString;
  }
};
