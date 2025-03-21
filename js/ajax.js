const url = "https://jsonplaceholder.typicode.com/posts";
const button = document.getElementById("ajax-btn");
button.addEventListener("click", () => {
  const dummyData = { name: "侍太郎", age: 30 };
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dummyData),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("サーバからの応答：\n" + JSON.stringify(data, null, 2));
    });
});
