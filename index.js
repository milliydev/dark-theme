function toggle(){
    let list = document.querySelector('.bi-list');
    let border = document.querySelector('.border');
    let by = document.querySelector('body');
    let h1 = document.querySelector('h1');
    let button = document.querySelector('button');

    if(border.style.marginLeft = '42px'){
        list.style.color = 'blue'
        h1.style.color = 'black'
        by.style.background = 'white'
        button.style.background = 'green'
        border.style.background = '#fff'

    }
     
     else  if (border.style.marginLeft = '-42px') {
        list.style.color = 'blue'
        h1.style.color = 'black'
        by.style.background = 'white'
        button.style.background = 'green'
        border.style.background = '#fff'

    }
    
}



