function htmlspecialchars(formData) {
  let corrected = "";
  for (let i = 0; i < formData.length; i++) {
    if (formData[i] === "<") {
      corrected += "&lt;";
    } else if (formData[i] === ">") {
      corrected += "&gt;";
    } else if (formData[i] === `"`) {
      corrected += "&quot;";
    } else if (formData[i] === "&") {
      corrected += "&amp;";
    } else {
      corrected += formData[i];
    }
  }
  return corrected;
}
