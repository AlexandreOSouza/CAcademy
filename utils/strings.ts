export const shortAddress = (address: string) => {
  const first = address.slice(0, 4);
  const last = address.slice(-4, address.length);

  const shortAddress = `${first}...${last}`;

  return shortAddress;
};
