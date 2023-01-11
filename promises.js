const posts =[
    {title : 'Post One', body: 'This is Post One', createdAt: new Date().getTime()},
    {title : 'Post Two', body: 'This is Post Two', createdAt: new Date().getTime()}
];

function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post, index) => {
            output += `<li class='commonclass' onclick='deletePost(this.id)' id='${index}'>${post.title}-last updated ${(new Date().getTime() - post.createdAt)/1000} seconds ago</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

function createPost(post){
    return new Promise((resolve, reject)=>{
    setTimeout(() =>{
        posts.push(post);
        const error = false;

        if(!error){
            resolve();
        }else{
            reject('Error: Something went wrong');
        }
    }, 2000);
});
}

let seconds = new Date();
console.log(seconds.getSeconds());
createPost({title: 'Post Three', body: 'This is Post Three', createdAt: new Date().getTime()})
.then(getPosts)
.catch(error => console.log(err));

// Async /Await

async function init(){
   await createPost({title: 'Post Three', body: 'This is Post Three', createdAt: new Date().getTime()}) 

getPosts();
}
init();

//Async /Await/ Fetch
async function fetchUsers(){
   const res = await fetch('https://jsonplaceholder.typicode.com/users');

   const data = await res.json();
   console.log(data);
}
fetchUsers();

//Promises.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject)=>
setTimeout(resolve, 2000, 'GoodBye'));

const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res =>
 res.json()
);

Promise.all([promise1, promise2, promise3]).then(values => console.log(values));

function deletePost(props){
    return new Promise((resolve, reject) => {
     setTimeout(() => {
         if(posts.length > 0){
            let lastelement = posts.pop()
            console.log(lastelement);
            lastelement = createPost({title: '', body: '', createdAt: new Date().getTime()}) 
             resolve(lastelement);
             getPosts()
         }else{
             reject('Array is empty now');
         }
     }, 1000);
    }); 
 }