document.addEventListener('DOMContentLoaded', event => {
    const app = firebase.app();
    console.log(app);

    const db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true});

    const pandaPost = db.collection('pandas').doc('firstPanda');

    // pandaPost.get(result => {
    //     console.log(result);
    //     console.log(result.data());
    // });

    // pandaPost.onSnapshot(doc => {
    //     const data = doc.data();
    //     // document.write(data.name + '</br>');
    //     // document.write(data.age + '</br>');
    //     document.querySelector('#title').innerHTML = data.name;
    // });

    const productsRef = db.collection('products');
    // const query = productsRef.where('price', '>=', 100);
    // const query = productsRef.orderBy('price', 'desc');
    const query = productsRef.orderBy('price', 'desc');

    query.get().then(products => {
        products.forEach(doc => {
            const data = doc.data();
            document.write(`${data.name} at ${data.price} </br>`)
        });
    });
});

function googleLogin() {
    // This gives us access to the google OAuth
    const provider = new firebase.auth.GoogleAuthProvider();

    // This allows firebase to open a separate window for authentication. Passing in the provider
    // tells firebase auth to use Google specifically.
    firebase.auth().signInWithPopup(provider)
    // This return a promise with the user
        .then(result => {
            const user = result.user;
            document.write(`Hello ${user.displayName}`)
        })
        .catch(console.log)
}

function updatePost(e) {
    console.log(e);
    const db = firebase.firestore();
    const myPost = db.collection('pandas').doc('firstPanda');
    myPost.update({ name: e.target.value });
}