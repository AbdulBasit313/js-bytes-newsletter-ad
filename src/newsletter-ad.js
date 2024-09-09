function renderNewsletterAdCard() {
  // Create the container div
  const adContainer = document.createElement("div");
  adContainer.className = "border border-[#10315926] rounded-xl p-4 mt-4";

  // Add the inner HTML content
  adContainer.innerHTML = `
      <a href="https://codevertiser.substack.com/" target="_blank">
        <h6 class="text-[#292a2c] leading-6 font-semibold">
          Become a better JavaScript developer by practicing only 10–20 minutes a week
        </h6>
      </a>
      <div class="mt-3 mb-3 leading-6">
        <p class="font-bold">Every Tuesday, you'll receive:</p>
        <ul class="mt-2 text-stone-600 list-decimal">
          <li class="ml-7">A JavaScript problem-solving challenge</li>
          <li class="ml-7">Three conceptual JavaScript MCQs</li>
        </ul>
      </div>
      <a
        class="border px-3 py-2 border-[#10315926] rounded-md hover:bg-gray-100 mt-1 inline-block"
        href="https://codevertiser.substack.com/"
        target="_blank">
        Subscribe to JS Bytes
      </a>
    `;

  // Append to the target container on the page
  const targetElement = document.getElementById("ad-container");
  if (targetElement) {
    targetElement.appendChild(adContainer);
  }
}
