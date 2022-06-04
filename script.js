function notReadyAlert() {
    alert('Sorry, not ready yet! \n Извините, еще не готово!');
    return false;
}

function search() {
    let name = document.getElementById('search').value;
    let productNumber = null;
    if (name=='RELX') {
    productNumber = 0;
    } else if (name == 'Eleaf') {
    productNumber = 1;
    } else if (name == 'MYBLU') {
    productNumber = 2;
    } else {
    alert ('Товар не найден');
    }
    console.log('Товар номер:', productNumber);
    let cards = document.getElementsByClassName('card');
    let card = cards [productNumber];
    card.style.border = '1px dashed red';
    card.style.backgroundColor = 'yellow';

    setTimeout(function() {
    card.style.border = 'none';
    card.style.backgroundColor = '';
    }, 2000);
}

function loaded() {
    let searchbox = document.getElementById('search');
    searchbox.addEventListener('keydown', function (key) {
        if (key.key == 'Enter') 
            search();
        });

}
