function showRating(rating) {
  let ratings = "";
  for (let i = 0; i < Math.floor(rating); i++) {
    ratings += "*";
    if (i !== Math.floor(rating) - 1) {
      ratings += " ";
    }
  }
  if (!Number.isInteger(rating)) {
    ratings += " .";
  }
  return ratings;
}

console.log(showRating(4.5));

function sortLowToHigh(arr) {
  return (sortedArr = arr.toSorted((a, b) => a - b));
}

console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));

function sortHighToLow(obj) {
  return obj.toSorted((a, b) => b.price - a.price); 
}

console.log(sortHighToLow([
    { id: 1, price: 50 },
    { id: 2, price: 0 },
    { id: 3, price: 500 },
  ])
);

async function postsbyUser(uid) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
    
    const result = await promise.json();

    const post = result.filter(elem => elem.userId === uid);  

    console.log(post);
}

postsbyUser(4);

async function firstSixIncomplete() {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

    const result = await promise.json();

    const comp = result.filter(elem => !elem.completed).slice(0, 6);

    console.log(comp);
}
 
firstSixIncomplete();