const textInput = document.getElementById('text-input');
const wordCount = document.getElementById('word-count');
const characterCount = document.getElementById('character-count');
const sentenceCount = document.getElementById('sentence-count');
const copyButton = document.getElementById('copy-button');
const clearButton = document.getElementById('clear-button');
const themeToggle = document.getElementById('theme-toggle');
const status = document.getElementById('status');

function updateCounts() {
  const text = textInput.value;
  const trimmed = text.trim();
  // Words are groups of non-whitespace characters.
  wordCount.textContent = trimmed ? trimmed.split(/\s+/).length : 0;
  // Count Unicode code points, including spaces and line breaks.
  characterCount.textContent = Array.from(text).length;
  // Each group of text ending in punctuation (or the end of the text) is a sentence.
  const sentences = text.match(/[^.!?\s][^.!?]*[.!?]+|[^.!?\s][^.!?]*$/g);
  sentenceCount.textContent = sentences ? sentences.length : 0;
}

textInput.addEventListener('input', updateCounts);
clearButton.addEventListener('click', () => {
  textInput.value = '';
  updateCounts();
  status.textContent = 'Text cleared.';
  textInput.focus();
});
copyButton.addEventListener('click', async () => {
  if (!textInput.value) {
    status.textContent = 'There is no text to copy.';
    return;
  }
  try {
    await navigator.clipboard.writeText(textInput.value);
    status.textContent = 'Text copied to clipboard.';
    copyButton.lastChild.textContent = ' Copied!';
    setTimeout(() => { copyButton.lastChild.textContent = ' Copy text'; }, 2000);
  } catch (error) {
    status.textContent = 'Could not copy text. Please select and copy it manually.';
    textInput.focus();
    textInput.select();
  }
});

themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.dataset.theme !== 'dark';
  document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  themeToggle.querySelector('.theme-icon').textContent = isDark ? '☀' : '☾';
  themeToggle.querySelector('.theme-label').textContent = isDark ? 'Light mode' : 'Dark mode';
});

