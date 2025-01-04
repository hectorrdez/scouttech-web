export function getCsrfCode() {
  return "csrf_code";
}

export function closeSession() {
  localStorage.removeItem("token");
}
