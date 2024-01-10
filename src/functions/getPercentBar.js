export function getPercentBar(questionLength, indexBarCount) {
  if (indexBarCount <= questionLength) {
    const results = (indexBarCount / questionLength) * 100;
    return results;
  }
  return 10;
}
