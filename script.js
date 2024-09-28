// // Функсияе, ки ҳар 1 сония иҷро мешавад
// let intervalId = setInterval(() => {
//   console.log('Интервал кор мекунад');
// }, 1000);

// // Хомӯш кардани интервал пас аз 5 сония
// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log('Интервал хомӯш шуд');
// }, 4000);

let url = "https://66e8219eb17821a9d9db8120.mockapi.io/tableOfUser"

async function getData() {
  try {
    const response = await fetch(url)
    const data = await response.json();
    get(data)
    
  } catch (error) {
    
  }
}
getData()


function get(arr) {
  arr.forEach((e) => {
    let 
  })
}
// let a = fetch(url).then((d) => {
//   console.log(d.json().then((data) => console.log(data))
//   );
// })

// console.log(a);
