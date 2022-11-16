function htmlspecialchars(formData) {
  formData.replace("<", "&lt;");
  formData.replace(">", "&gt;");
  formData.replace(`"`, "&quot;");
  formData.replace("&", "&amp;");
}
