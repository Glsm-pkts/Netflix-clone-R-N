// Rastgele HEX renk üreten fonksiyon
function generateRandomColor() {
  // 16 tabanlı rastgele bir sayı oluştur ve 6 karakter uzunluğunda bir HEX kodu döndür
  const hexColor = `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, '0')}`;
  return hexColor;
}

export { generateRandomColor };
