/**
 * validateEmail - Checks if a string is a valid email address
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

/**
 * validatePassword - Checks if password meets minimum requirements
 * (at least 8 chars, 1 uppercase, 1 number)
 */
export const validatePassword = (password: string): boolean => {
  return /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
};

/**
 * validateRequired - Checks if a string field is non-empty
 */
export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};
