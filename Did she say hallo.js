function validateHello(greetings) {
  const greeting = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];

  return greeting.some((greeting) =>
    greetings.toLowerCase().includes(greeting)
  );
}
