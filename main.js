// To hide the source code, we can disable the right-click menu
// and prevent the user from selecting the text on the page
// This can be done with the following code:

document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('selectstart', event => event.preventDefault());

// To forbid the console, we can use the following code:

Object.defineProperty(window, 'console', {
  get: function() {
    throw new Error('Console is disabled');
  }
});

// To remove the key that opens the source code, we can use the following code:

document.addEventListener('keydown', event => {
  if (event.keyCode === 83 && (event.ctrlKey || event.metaKey)) {
    event.preventDefault();
  }
});
