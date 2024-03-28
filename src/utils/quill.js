import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Import Quill's snow theme CSS

// Ensure that highlight.js is initialized before this point

const quill = new Quill('#editor', {
  theme: 'snow',
  modules: {
    syntax: true, // Enable Syntax module
  },
});
