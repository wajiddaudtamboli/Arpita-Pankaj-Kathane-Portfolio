const ACRONYM_CASE_MAP: Record<string, string> = {
  ycmou: 'YCMOU',
  mou: 'MOU',
  nep: 'NEP',
  g20: 'G20',
  ai: 'AI',
  pibm: 'PIBm',
  tzp: 'TZP',
  'e&tc': 'E&TC',
};

const MINOR_WORDS = new Set(['at', 'of', 'on', 'and', 'with', 'for', 'in', 'from']);

export function formatTitle(fileName: string): string {
  const base = fileName
    .replace(/\.png$/i, '')
    .replace(/(?<=\S)\d+$/, '')
    .replace(/@/g, ' at ')
    .replace(/-/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const words = base
    .toLowerCase()
    .split(' ')
    .map((word, idx) => {
      const acronym = ACRONYM_CASE_MAP[word];
      if (acronym) return acronym;
      if (idx > 0 && MINOR_WORDS.has(word)) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

  return words.join(' ');
}
