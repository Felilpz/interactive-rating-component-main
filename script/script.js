// const buttons = document.querySelectorAll('.buttons')

// buttons.forEach(btnEl => {
//     btnEl.addEventListener('click', () => {
//         document.querySelector('.special').classList.remove('special')
//         btnEl.classList.add('special')
//     })
// })

let selectedButton = null;

const buttons = document.querySelectorAll('.buttons');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // console.log(button.innerHTML);
        let buttonS = document.getElementById('numeracao')
        // se tiver um botão selecionado e não for o mesmo que foi clicado a classe special é removida
        if (selectedButton && selectedButton !== button) {
            selectedButton.classList.remove('special');
        }
        // armazena na variavel verificando se o botão contém a classe especial
        const isSelected = button.classList.contains('special');

        //adicione ou remova a classe "special" do botão clicado
        if (!isSelected) {
            button.classList.add('special');
        } else {
            button.classList.remove('special');
        }

        //Atualize a referência do botão selecionado 
        // selectedButton = isSelected ? null : button;
        

        const mainButton = document.getElementById('mainButton')
        mainButton.addEventListener('click', function() {
            if(button.innerHTML == 1) {
                buttonS.innerHTML = 1
                document.getElementById('thanks').style.display = 'flex'
                document.querySelector('.principal').style.display = 'none'
            } else if(button.innerHTML == 2) {
                buttonS.innerHTML = 2
                document.getElementById('thanks').style.display = 'flex'
                document.querySelector('.principal').style.display = 'none'
            } else if(button.innerHTML == 3) {
                buttonS.innerHTML = 3
                document.getElementById('thanks').style.display = 'flex'
                document.querySelector('.principal').style.display = 'none'
            } else if(button.innerHTML == 4) {
                buttonS.innerHTML = 4
                document.getElementById('thanks').style.display = 'flex'
                document.querySelector('.principal').style.display = 'none'
            } else {
                buttonS.innerHTML = 5
                document.getElementById('thanks').style.display = 'flex'
                document.querySelector('.principal').style.display = 'none'
            }
        })
    });
});

