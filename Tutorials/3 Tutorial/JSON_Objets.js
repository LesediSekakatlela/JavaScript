// function handleSubmit(event) {
//     event.preventDefault();

//     const data = new FormData(event.target);

//     const value = Object.fromEntries(data.entries());

//     value.topics = data.getAll("topics");

//     console.log({ value });
//   }

//   const form = document.querySelector("form");
//   form.addEventListener("submit", handleSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const formJSON = Object.fromEntries(data.entries());

    // for multi-selects, we need special handling
    formJSON.snacks = data.getAll('snacks');

    const results = document.querySelector('.results pre');
    results.innerText = JSON.stringify(formJSON, null, 2);
}

const form = document.querySelector('.contact-form');
form.addEventListener('submit', handleFormSubmit);
