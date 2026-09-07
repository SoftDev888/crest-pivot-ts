export function longest(text: string): string {
  return text.split(/\s+/).reduce((a, b) => (b.length > a.length ? b : a), '');
}

console.log(longest('a longer sentence here'));
