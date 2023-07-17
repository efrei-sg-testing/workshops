export function niOuiNiNon(sentence) {

  const lowercaseSentence = sentence.toLowerCase();

  if (lowercaseSentence.includes("oui") || lowercaseSentence.includes("non")) {

    return false;

  }else

  return true;

}