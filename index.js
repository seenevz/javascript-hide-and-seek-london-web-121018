function getFirstSelector(selector) {
    return document.querySelector(selector);
};

function nestedTarget() {
    
    return document.querySelector('#nested .target');
};

function deepestChild() {

    return document.querySelector('div#grand-node div div div div');

}

function increaseRankBy(n) {
    const ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li')

    Array.from(ranks).forEach( lis => {
        return lis.innerHTML = ((parseInt(lis.innerHTML) + n).toString())
    })
};
