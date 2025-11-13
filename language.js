// Load footer.html into #footer-placeholder
fetch("footer.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("footer-placeholder").innerHTML = html;
    // Now the footer is in the DOM, so attach the event listener:
    attachLangToggle();
  });

