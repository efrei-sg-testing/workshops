export function niOuiNiNon(sentence) {
  const sentenceLower = sentence.toLowerCase();
  if (sentenceLower.includes('oui') || sentenceLower.includes('non')) {
    return false;
  }
  return true;
}
  