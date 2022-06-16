const getSpellIdFromName = (name: string): string => {
  return name.toLowerCase().replace(/\s/, '_');
}

export default getSpellIdFromName;