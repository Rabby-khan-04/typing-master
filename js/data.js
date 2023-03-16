let questionText;
const loadQuote = async () => {
  try {
    const url = "https://api.quotable.io/random";
    const res = await fetch(url);
    const data = await res.json();
    showData(data.content);
  } catch (error) {
    console.log(error);
  }
};

const showData = (quote) => {
  let quoteText = "";
  questionText = quote.split("");
  questionText.forEach((letter) => {
    quoteText += `<span>${letter}</span>`;
  });
  document.getElementById("quote").innerHTML = quoteText;
};

loadQuote();
