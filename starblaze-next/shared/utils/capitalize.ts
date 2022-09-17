function Capitalize(str: string) {
  return str.replace(/(^|[\s-])\S/g, (match) => match.toUpperCase());
}

export { Capitalize };
