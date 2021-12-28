document.getElementById("app").innerHTML = ``;

const STUDIENTS = [{
    img: "https://lms.ithillel.ua/uploads/images/885d3b77fc0d39a12aad31af709b9bd6.jpg",
    name: 'Антон',
    lastName: 'Чебикін',
    homework: 9,
    score: 898,
},
{
    img: "https://lms.ithillel.ua/uploads/images/e6ef3cc070c3d4c97a46f984b94e3436.jpg",
    name: 'Borys',
    lastName: 'Mukhatasov',
    homework: 7,
    score: 697,
},
{
    img: "https://lms.ithillel.ua/uploads/images/d1b3870e354c2d9668b8cd64e63bbf37.jpg",
    name: 'Oleksanra',
    lastName: 'Kushniruk',
    homework: 8,
    score: 687,
},
{
    img: "https://lms.ithillel.ua/uploads/images/7e0475ff04937622a8aa27a8d38be520.jpg",
    name: 'Oleksandr',
    lastName: 'Odintsov',
    homework: 7,
    score: 680,
},
{
    img: "https://lms.ithillel.ua/uploads/images/0fd3a6a4e07969f0dcb87452a6ba2d5f.jpg",
    name: 'David',
    lastName: 'Vashenko',
    homework: 7,
    score: 675,
},
{
    img: "https://lms.ithillel.ua/uploads/images/5d6a97aefe779d59786a11f9063d1ff0.jpg",
    name: 'Oleksandr',
    lastName: 'Yaremenko',
    homework: 7,
    score: 657,
},
{
    img: "https://lms.ithillel.ua/uploads/images/b86e405b95a95b5011f856ad81f4c6a5.jpg",
    name: 'Антон',
    lastName: 'Сквирский',
    homework: 7,
    score: 648,
},
{
    img: "https://lms.ithillel.ua/uploads/images/74ad3ec0535885ce0d279a4181b27760.jpg",
    name: 'Evheny',
    lastName: 'Shpaka',
    homework: 6,
    score: 578,
},
{
    img: "https://lms.ithillel.ua/uploads/images/a349ed2377b7f3b7b537b5b390727b40.jpg",
    name: 'Daryna',
    lastName: 'Kalynovska',
    homework: 6,
    score: 575,
},
{
    img: "https://lms.ithillel.ua/uploads/images/92b38913f9348e15174570b1d9024a81.jpg",
    name: 'Oksana',
    lastName: 'Zaitseva',
    homework: 5,
    score: 459,
},
{
    img: "https://lms.ithillel.ua/uploads/images/95affb1a84063b1ad2f427cf31d97a9f.jpg",
    name: 'Костянтин',
    lastName: 'Косоротов',
    homework: 3,
    score: 220,
}
];

 STUDIENTS.forEach(function (element) {
    document.getElementById("app").insertAdjacentHTML(
      "beforeend",
      `
        <tr>
            <td>
                <img src=${element.img} alt="">
            </td>
            <td>
            <div>${element.name}</div>
            <div>${element.lastName}</div>
            </td>
            <td>
            <div>${element.homework}</div>
            <div>${element.score}</div>
            </td>
        </tr>
      `
    );
  });
