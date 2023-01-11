const posts =[
    {title : 'Post One', body: 'This is Post One', createdAt: new Date().getTime()},
    {title : 'Post Two', body: 'This is Post Two', createdAt: new Date().getTime()}
];

function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post, index) => {
            output += `<li class='commonclass' onclick='deleteItem(this.id)' id='${index}'>${post.title}-last updated ${(new Date().getTime() - post.createdAt)/1000} seconds ago</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            posts.push({...post, createdAt: new Date().getTime()});
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong')
            }
        },2000);
    })
}

const user = {
    username: 'Ganesh',
    lastActivityTime: '10th of January'
}
function updateLastActivityTime(){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            user.lastActivityTime = new Date().getTime();
            resolve(user.lastActivityTime)
        }, 1000)
    })
}

 function deletePost(){
        return new Promise((resolve, reject) => {
         setTimeout(() => {
             if(posts.length > 0){
                const lastelement = posts.pop()
                 resolve(lastelement);
             }else{
                 reject('Array is empty now');
             }
         }, 1000);
        }); 
     }
    createPost({title: 'Post Four', body: 'This is Post Four'})
    .then(() => {
     getPosts()
        deletePost().then((deleteelement)=>{
            console.log(deleteelement);
            getPosts()
                deletePost().then(()=>{
                    getPosts();
                deletePost().then(()=>{
                    getPosts();
                    deletePost().then(() => {})
                    .catch((err) =>{
                        console.log('Inside catch block', err)
                    })
                }).catch((err) => {})
           }).catch((err) => {})
        })
    })
    
    .catch(err => console.log(err))