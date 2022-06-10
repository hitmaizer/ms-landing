const HTML_FONT_SIZE = 16;

export function rem(px: number) {
  const x = HTML_FONT_SIZE || 16,
    rem = (1 / x) * px + 'rem';

  return rem;
}
