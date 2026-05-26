export const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error("No file"));
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      reject(new Error("Image must be under 2MB"));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Failed to read image"));
    reader.readAsDataURL(file);
  });

export const resolveImageSrc = (src) => src || "";
