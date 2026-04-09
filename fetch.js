async function fetchAndExtract() {
  const res = await fetch('https://imprince.me/assets/index-DyJtPFPH.js');
  const text = await res.text();
  // Find strings with spaces, at least 20 chars long, no weird symbols
  const matches = text.match(/(?:\"|\')([A-Z][a-zA-Z0-9\s,\.\-]{20,})(?:\"|\')/g);
  if (matches) {
    console.log(matches.slice(0, 100).join('\n'));
  }
}
fetchAndExtract();
