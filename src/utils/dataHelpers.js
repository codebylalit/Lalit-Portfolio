export const generateId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;

export const setNestedValue = (obj, path, value) => {
  const keys = path.split(".");
  const result = { ...obj };
  let current = result;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    current[key] =
      typeof current[key] === "object" && current[key] !== null
        ? { ...current[key] }
        : {};
    current = current[key];
  }
  current[keys[keys.length - 1]] = value;
  return result;
};
