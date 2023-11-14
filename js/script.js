let height = document.querySelector('#userInput')
let weight = document.querySelector('#userInput2')
let convert = document.querySelector('#buttons')
let output = document.querySelector('#output')
let reset = document.querySelector('#reset')

convert.addEventListener('click', () => {

    
    let results = eval(height.value * weight.value)
    
    output.textContent = `The results are ${results}`
})

reset.addEventListener('click', ()=>{
    if (height.value != '') {
        height.value = ''
    } else if (weight.value != '') {
        weight.value = ''
    }
})
