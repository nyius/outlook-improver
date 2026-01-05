// Remove "[EXTERNAL]" text from ESO13 divs
function removeExternalText() {
	const eso13Divs = document.querySelectorAll('div.ESO13');

	eso13Divs.forEach(div => {
		const spans = div.querySelectorAll('span');
		spans.forEach(span => {
			if (span.textContent.includes('[EXTERNAL]')) {
				span.textContent = span.textContent.replace(/\[EXTERNAL\]\s*/g, '');
			}
		});
	});
}

// Run on initial page load
removeExternalText();

// Observe for dynamically loaded content
const observer = new MutationObserver(() => {
	removeExternalText();
});

observer.observe(document.body, {
	childList: true,
	subtree: true,
});
