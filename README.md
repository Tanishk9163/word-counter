# Word Counter

A small, beginner-friendly website that counts words, characters, and sentences as you type. Your text stays in your browser.

## Run locally

1. Download or clone this repository.
2. Open `index.html` in your browser.
3. Type or paste text into the writing space.

You can also serve the folder with a local web server, for example `python -m http.server 8000`, and visit `http://localhost:8000`.

Words are separated by whitespace. Characters include spaces and line breaks. Sentences are separated by `.`, `!`, or `?`; unfinished text also counts as a sentence. These are simple estimates, so abbreviations may affect the sentence count.

Use **Copy text** to copy your writing, **Clear text** to start again, and the button in the top right to switch themes. Clipboard access requires a browser that supports it and a secure context such as HTTPS or localhost. If copying is unavailable, the text is selected so you can copy it manually.

## Publish with GitHub Pages

1. Push these files to a GitHub repository.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose your branch (usually `main`) and the `/ (root)` folder, then save.
5. Visit the address shown in the Pages settings once deployment finishes.

No build step or dependencies are needed.

## License

[MIT](LICENSE)
