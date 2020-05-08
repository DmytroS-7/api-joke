const button = document.querySelector(".myButton");
const jokeContainer = document.querySelector(".joke");

button.addEventListener("click", handleClick);

async function handleClick() {
  const { joke } = await getJoke();
  jokeContainer.textContent = joke;
  //   console.log(joke);
}

async function getJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  const data = await response.json();
  return data;
}
