<h1 align="center">Angular version of canvas editor </h1><br><br>
<!-- <p align="center">
<a href="https://www.npmjs.com/package/@mindfiredigital/react-canvas-editor"><img src="https://img.shields.io/npm/v/@mindfiredigital/react-canvas-editor.svg?sanitize=true" alt="Version"></a>
<a href="https://www.npmjs.com/package/@mindfiredigital/react-canvas-editor"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs"></a>
</p> -->

<br>

<p align="center"> Experience powerful document creation with our Angular-based editor. Craft and manage multi-page documents effortlessly </p>

The `angular-canvas-document-editor` is a tool that allows developers to integrate multi page document editors built on top of Canvas using React.

<br>

## Table of Contents

- [Why canvas over HTML Editor](#why-canvas-over-html-editor)
- [Features](#features)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

<br>

# Why canvas over HTML Editor

The canvas element in HTML serves as a versatile space for drawing graphics using JavaScript, enabling the creation of dynamic, interactive, and visually engaging content on web pages. Within this context, a Canvas editor emerges as a powerful tool or application that harnesses the capabilities of the canvas element. This editor facilitates the creation, editing, and manipulation of graphics or drawings directly within a web browser.

- **Fine-Grained Control**: Fine-Grained Control: Total freedom to manipulate pixels, dictate rendering, and create custom elements and interactivity beyond what HTML offers out of the box.

- **Scalable Performance**: Blazing fast rendering and lightweight data synchronization fueled by the raw power of canvas APIs rather than heavy HTML DOM reconciliation.

- **Easy Multiplayer Integration**: Canvas state using simple coordinate vectors flows seamlessly cross-device enabling effortless real-time collaborative editing at scale.

- **Unleashed Creativity**: No limits enforced by page markup frees imagination to run wild. Build beyond editor chrome right on the infinite canvas with total creative liberty.

- **Future Facing Setup**: Canvas as a technology continues rapid innovation, unlike stale HTML editors. What’s created today on canvas can easily harness tomorrow’s new features.

- **Skill Transferability**: Canvas skills open doors across cutting edge domains like metaverse experiences, game dev, 3D, generative art, and other growth areas.

<br>

## Features

- **Undo**: This feature allows you to reverse the most recent action you performed. It's particularly useful when you make a mistake and want to go back one step.
- **Redo**: Redo is the opposite of undo. It allows you to reapply an action that you've previously undone.
- **Bold**: When you apply bold formatting to text, it makes the selected text appear thicker and more prominent.
- **Italic**: Italic text is slanted to the right.
- **Underline**: Underlining text places a horizontal line beneath it.
- **Subscript**: Subscript lowers the selected text below the baseline.
- **Superscript**: Superscript raises the selected text above the baseline.
- **Strikethrough**: Text with a strikethrough line through it is used to indicate that the content should be deleted or is no longer valid.
- **Left Align**: This feature aligns text to the left margin, creating a straight left edge.
- **Center Align**: Center alignment places text in the middle of the page or text box.
- **Right Align**: Text is aligned to the right margin, creating a straight right edge.
- **Justify**: Justification spreads text evenly between both the left and right margins, creating a clean and straight appearance on both sides.
- **Bullet List**: Bullet lists present information as a series of items with bullets.
- **Numbered List**: Numbered lists provide a sequential order to items.
- **Font Type**: Font type refers to the specific style of text characters. Examples include Arial, Times New Roman, and Calibri.
- **Insert Table**: This feature allows you to create tables to organize data.
- **Text Color**: Text color lets you change the color of the text.
- **Highlight Color**: Highlighting text adds a background color.
- **Font Size**: Font size controls the size of the text characters.
- **Heading**: Headings are typically used to divide a document into sections or chapters. They are usually styled differently, such as with larger text or bold formatting.
- **Hyperlink**: A hyperlink is a clickable link that connects to a webpage or another location within the document.
- **Image**: This feature allows you to insert images or graphics into your document to enhance its visual appeal or convey additional information.
- **Customizable UI**: Easily customize the document editor's user interface to match your application's branding.

<br>

## Installation

To install the `angular-canvas-document-editor` npm package in your project, use the following command:

```bash
npm install angular-canvas-document-editor
```

<br>

## Getting Started

- **Initialization**: Initialize the canvas document editor in your project, specifying the container element where the editor will be embedded.


- **Customization**: Customize the editor's UI and behavior to match your application's requirements.

- **DOM handlers**:
  - **on_change**: The onchange event occurs when the value is changed.
  - **on_select**: The onSelect event occurs when the value is selected.
  - **value**: The value attribute on an tag sets the value of the page.

<br>

## Contributing

We welcome contributions from the community. If you'd like to contribute to the `react-document-editor` npm package, please follow our [Contributing Guidelines](CONTRIBUTING.md).
<br>

## License

Copyright (c) Mindfire Digital llp. All rights reserved.

Licensed under the MIT license.
