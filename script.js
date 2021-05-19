const buttons = Array.from(document.getElementsByClassName('button'));
const result = document.querySelector('.result');

buttons.map(button => {
    button.addEventListener('click', (e) => {
        
        switch(e.target.innerText) {
            case '=':
                try {
                    result.innerText = eval(result.innerText);
                } catch {
                    result.innerText = 'Error!';
                    
                }
                break;
            case 'C':
                result.innerText = '';
                break;
            case '←':
                if(e.target.innerText) {
                    result.innerText = result.innerText.slice(0, -1);
                }
                break;   
            default:
                 result.innerText += e.target.innerText;
        }
    })
})
