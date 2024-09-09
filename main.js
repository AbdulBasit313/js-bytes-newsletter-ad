function renderNewsletterAdCard() {
  // Create the container div
  const adContainer = document.createElement("div");
  adContainer.className = "ad-container";

  // Add the inner HTML content
  adContainer.innerHTML = `
      <a href="https://codevertiser.substack.com/" target="_blank">
        <h6>
          Become a better JavaScript developer by practicing only 10–20 minutes a week
        </h6>
      </a>
      <div>
        <p>Every Tuesday, you'll receive:</p>
        <ul>
          <li>A JavaScript problem-solving challenge</li>
          <li>Three conceptual JavaScript MCQs</li>
        </ul>
      </div>
      <a href="https://codevertiser.substack.com/" target="_blank">
        Subscribe to JS Bytes
      </a>
    `;

  // Append to the target container on the page
  const targetElement = document.getElementById("ad-container");
  if (targetElement) {
    targetElement.appendChild(adContainer);
  }
}

// renderNewsletterAdCard();
