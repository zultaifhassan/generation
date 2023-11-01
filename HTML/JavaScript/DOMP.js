

// const title = document.getElementById('name')
// // const add = document.getElementById('addbutton')
// const remove = document.getElementById('removebutton')

// // title.classList.add('name')
// add.classList.add('button')
// remove.classList.add('button')


// const add = () => {
//     title.classList.add('name');
// }

// remove.addEventListener("click", ()=> {
//     title.classList.add('name1');
// })


// const heading = document.createElement('h1')
// heading.innerHTML = "Arsalan Akmal Wins"
// document.body.appendChild(heading)


// const butt = document.createElement('button')
// butt.innerHTML = "Result"
// document.body.appendChild(butt)
// butt.classList.add('button')


// butt.addEventListener("mouseover", ()=> {
//     heading.innerHTML = "Ooops! Ansar Lose"
//     heading.classList.add('titlelose')

// })





// const days = ["Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday", "Sunday"];

// days.forEach((day) => {
//     const li = document.createElement('li');
//     li.innerHTML = day;
//     document.body.appendChild(li)
// });









// const image = document.createElement('img')
// image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1s4yl2K2TkwwJ7-Oa4Y3WdxYwIPSnMD-MA&usqp=CAU"
// document.body.appendChild(image)

// image.addEventListener('mouseover', ()=> {
//     image.src = "https://cdn.mos.cms.futurecdn.net/HaPnm6P7TZhPQGGUxtDjAg-320-80.jpg"

// })

// image.addEventListener('mouseleave', ()=> {
//     image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1s4yl2K2TkwwJ7-Oa4Y3WdxYwIPSnMD-MA&usqp=CAU"

// })




// const image1 = document.createElement('img')
// image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1s4yl2K2TkwwJ7-Oa4Y3WdxYwIPSnMD-MA&usqp=CAU"
// document.body.appendChild(image1)

// image1.addEventListener('mouseover', ()=> {
//     image1.src = "https://cdn.mos.cms.futurecdn.net/HaPnm6P7TZhPQGGUxtDjAg-320-80.jpg"

// })

// image1.addEventListener('mouseleave', ()=> {
//     image1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1s4yl2K2TkwwJ7-Oa4Y3WdxYwIPSnMD-MA&usqp=CAU"

// })





// const image2 = document.createElement('img')
// image2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1s4yl2K2TkwwJ7-Oa4Y3WdxYwIPSnMD-MA&usqp=CAU"
// document.body.appendChild(image2)

// image2.addEventListener('mouseover', ()=> {
//     image2.src = "https://cdn.mos.cms.futurecdn.net/HaPnm6P7TZhPQGGUxtDjAg-320-80.jpg"

// })

// image2.addEventListener('mouseleave', ()=> {
//     image2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1s4yl2K2TkwwJ7-Oa4Y3WdxYwIPSnMD-MA&usqp=CAU"

// })



// const image3 = document.createElement('img')
// image3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1s4yl2K2TkwwJ7-Oa4Y3WdxYwIPSnMD-MA&usqp=CAU"
// document.body.appendChild(image3)

// image3.addEventListener('mouseover', ()=> {
//     image3.src = "https://cdn.mos.cms.futurecdn.net/HaPnm6P7TZhPQGGUxtDjAg-320-80.jpg"

// })

// image3.addEventListener('mouseleave', ()=> {
//     image3.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1s4yl2K2TkwwJ7-Oa4Y3WdxYwIPSnMD-MA&usqp=CAU"

// })


// const add = async() => {
//     const data = await fetch('https://fakestoreapi.com/products')
//     .then(res=>res.json())
//     .then(json=> {
//         return json;
//     })

//     data.forEach(element => {
//         const title = document.createElement('h2')
//         const img = document.createElement('img')
//         const price = document.createElement('h2')
//         const des = document.createElement('p')
//         title.innerHTML = element.title;
//         img.src = element.image;
//         price.innerHTML = `$ ${element.price}`;
//         des.innerHTML = element.description;
//         document.body.appendChild(title)
//         document.body.appendChild(img)
//         document.body.appendChild(price)
//         document.body.appendChild(des)

//     });
// }
// add();



// const table = () => {
    
//     for(let i=1; i<=10; i++){
//         return;
//         document.write = 2*i

//     }
// }

// const table1 = document.createElement('h2')
// table1.innerHTML = table();
// document.body.appendChild(table1)


function myDisplayer(output) {
    document.getElementById("para").innerHTML = output;
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let y  = 1;
  
  
    if (y == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );