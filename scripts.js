fetch('https://fakestoreapi.com/products?limit=18')
            .then(res=>res.json())
            .then(json=>addToPage(json));

function addToPage(content){
    console.log(content);
    const container = document.getElementById("container");
    let colCounter = 1;
    let rowCounter = 1;
    let actualRow;

    content.forEach(element => {
        if((colCounter-1) % 3 == 0){
            rowCounter++;
            actualRow = newRow(rowCounter);
        }
        newCol(element, actualRow, colCounter);
        colCounter++;
    });
}

function newCol(element, destination, id){
    let col = document.createElement('div');
    col.classList.add('col-md-4');
    col.classList.add('p-5');
    col.setAttribute('id', 'product-' + id);
    col.setAttribute('style', 'height: 500px')

    let img = document.createElement('img');;
    img.src = element.image;
    img.classList.add('list-image');
    
    let imgContainer = document.createElement('div');
    imgContainer.classList.add('imgContainer');
    imgContainer.appendChild(img);

    let a = document.createElement('a');
    let textNode = document.createTextNode(element.title);
    a.appendChild(textNode);

    col.appendChild(imgContainer);
    col.appendChild(a);

    destination.appendChild(col);
}

function newRow(id){
    let row = document.createElement('div');
    row.classList.add('row');
    row.setAttribute('id', 'row-' + id)

    const container = document.getElementById('container');
    container.appendChild(row);
    
    return row;
}