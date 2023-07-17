export function niOuiNiNon(sentence) {
  if ((sentence.toLowerCase().includes('oui')) || (sentence.toLowerCase().includes('non'))) {
    return true
  }
  return false;
}
