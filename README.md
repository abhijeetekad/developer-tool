Perfect 👍 You’re thinking of a **developer toolbox** (like JSON + JWT + HTML/JS/CSS utilities) that is **scalable, well-structured, and easy to extend**.

I’ll give you a **very detailed Cursor prompt** you can paste directly so Cursor generates a **clean, optimized project**.

---

# 🚀 Final Cursor Prompt (Copy-Paste This)

```
You are building a React + Tailwind Developer Toolbox web app.  
The app must be production-ready, optimized, and easy for other developers to extend.

## Project Requirements:
- Use **React + Vite + TailwindCSS** for the frontend.
- No backend required, everything must run in-browser.
- Code must be clean, modular, and easy to maintain.
- Use **functional components** with hooks, no class components.
- Each tool should be in its own React component inside `/src/tools/`.
- Use **Monaco Editor** for code input/output areas.
- Implement **dark/light mode toggle** using Tailwind’s dark mode.
- Follow a **clear folder structure**:

```

src/
components/
Navbar.jsx
Sidebar.jsx
ToolLayout.jsx
tools/
JsonFormatter.jsx
HtmlFormatter.jsx
JsMinifier.jsx
CssMinifier.jsx
JwtDecoder.jsx
Base64Encoder.jsx
UuidGenerator.jsx
App.jsx
main.jsx

```

## UI/UX:
- **Sidebar navigation** with categories: JSON Tools, Code Tools, Security Tools, Data Tools.
- Each tool loads inside a `ToolLayout` component.
- Navbar contains: App title, dark/light mode toggle.
- UI must be clean and responsive.

## Tools to Implement (MVP):
1. **JSON Formatter**
   - Input: raw JSON.
   - Buttons: Format, Minify, Validate, Copy.
   - Show validation errors in a styled alert.

2. **HTML Formatter**
   - Input: raw/minified HTML.
   - Buttons: Format, Minify, Copy.

3. **JS Minifier**
   - Input: raw JavaScript.
   - Buttons: Minify, Beautify, Copy.
   - Use a lightweight in-browser minifier library (like `terser`).

4. **CSS Minifier**
   - Input: raw CSS.
   - Buttons: Minify, Beautify, Copy.
   - Use an in-browser library (like `csso`).

5. **JWT Decoder**
   - Input: JWT token.
   - Output: Header + Payload (pretty-printed JSON).
   - Show validation errors if malformed.

6. **Base64 Encoder/Decoder**
   - Input: text or Base64 string.
   - Buttons: Encode, Decode, Copy.

7. **UUID Generator**
   - Button: Generate UUID v4.
   - Display result with copy option.

## Developer Guidelines:
- All formatting/minifying must happen client-side, no API calls.
- Wrap all core logic into separate **utility functions** inside `/src/utils/` for reusability.
- Each tool component must be self-contained but follow a consistent pattern (editor + buttons + output).
- Add clear comments in code explaining logic so that another developer can extend it easily.
- Use **error boundaries** or safe try/catch around parsing/minifying code.
- Optimize bundle size: only import libraries where required, lazy-load heavy dependencies.
- Maintain accessibility (ARIA labels for buttons, keyboard shortcuts for Format/Copy).
- Provide reusable button component (`<ToolButton />`) with consistent styles.

## Deliverables:
- A fully working multi-tool web app.
- Clean, optimized, modular React + Tailwind code.
- First working version should include: JSON Formatter, HTML Formatter, JS Minifier, CSS Minifier.
- Other tools (JWT, Base64, UUID) should have functional placeholder implementations.

```

---

✅ This prompt ensures Cursor will:

* Build **exact folder structure**
* Create **clean modular code**
* Add **scalable tools (easy to extend later)**
* Use **in-browser libraries** for minify/format

---

👉 Question for you:
Do you want me to also prepare the **utility function implementations** (e.g., JSON format/validate, HTML beautify, JS minify, CSS minify) so Cursor doesn’t mess it up, and you can just plug them in?



