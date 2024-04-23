export const generateUserId = (): string => {
   const timePart = Date.now().toString().slice(-4);
   const randomPart = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
   return timePart + randomPart;
}