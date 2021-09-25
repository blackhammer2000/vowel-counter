window.addEventListener('load', () => {
    let button = document.querySelector('.count');
    let resetButton = document.querySelector('.reset');

    button.onclick = function countVowels() {
        let word = document.querySelector('input').value;
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        let resultsDisplay = document.querySelector('.display');
        let count = 0;

        for ( w of word) {
            for (v of vowels) {
                if(w.toLowerCase() === v){
                    count++;
                }
            }
            
        }
       
        if(count === 1){
            resultsDisplay.textContent = `'${word}' has ${count} vowel`
        }else{
            resultsDisplay.textContent = `'${word}' has ${count} vowels`
        }
    }

    resetButton.addEventListener('click', function(){
     document.querySelector('input').value = '';
     document.querySelector('.display').textContent = '';

    })
})