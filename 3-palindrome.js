const sentence = "A man a plan a canal Panama";

function isPalindrome(sentence) {
  const sent = sentence.replaceAll(" ", "").toLowerCase();
  const reversed = sent.split("").reverse().join("")
  return sent === reversed;
}

isPalindrome(sentence)