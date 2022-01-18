let $btnCat = document.querySelector('#btnCat');

$btnCat.addEventListener('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(resp => resp.json()).then(data => {
            console.log(data);

            let catPic = document.createElement('img');
            catPic.src = data[0].url;
            document.body.appendChild(catPic);
        });
        
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json()).then(data => {
        console.log(data);

            let catPic = document.createElement('img');
            // catPic.src = data[0].url;
            catPic.src = data.message;
            document.body.appendChild(catPic);
        });
    // console.log('Miau');
});
