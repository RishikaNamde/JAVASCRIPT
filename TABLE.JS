let aoo = [
    { name: "rishi", age: 21, city: "bhopal" },
    { name: "rishika", age: 21, city: "vidisha" },
    { name: "aarti", age: 22, city: "ajmer" },
    { name: "bhavna", age: 53, city: "delhi" },
    { name: "rani", age: 24, city: "pune" }
];

let show = document.querySelector("#show"); 


aoo.map((e) => {
    show.innerHTML += `
        <tr>
            <td>${e.name}</td>
            <td>${e.age}</td>
            <td>${e.city}</td>
        </tr>`;
});
