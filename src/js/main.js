const input = document.querySelector('input')
const liItems = document.querySelectorAll('li')

const productSearch = (e) => {
    
    const inputtext = e.target.value.toLowerCase()


    liItems.forEach(el => {
        

        if(el.textContent.toLowerCase().indexOf(inputtext) !== -1){
            el.style.display = 'block'
        }else{
            el.style.display = 'none'
        }

    })

}

input.addEventListener('keyup', productSearch)