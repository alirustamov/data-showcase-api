export const validateDate = (dateString: string): boolean => {
  const dateReg = /^\d{2}.\d{2}.\d{4}$/;
  return dateString.match(dateReg) !== null;
};
