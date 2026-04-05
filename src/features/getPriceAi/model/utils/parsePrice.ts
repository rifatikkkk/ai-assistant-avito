export const parsePriceFromResponse = (response: string): string | null => {
  const patterns = [
    /Средняя цена:\s*(\d[\d\s]*)\s*₽/i,
    /Примерная цена:\s*(\d[\d\s]*)\s*₽/i,
    /Ориентировочная цена:\s*(\d[\d\s]*)\s*₽/i,
    /Цена:\s*(\d[\d\s]*)\s*₽/i,
  ];

  for (const pattern of patterns) {
    const match = response.match(pattern);
    if (match && match[1]) {
      const priceStr = match[1].replace(/\s/g, "");
      if (!isNaN(parseInt(priceStr, 10))) {
        return priceStr;
      }
    }
  }

  return null;
};
