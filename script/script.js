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
        let take = button.innerHTML

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

        //Atualize a referência do botão selecionado CHATGPT
        selectedButton = isSelected ? null : button;


        const mainButton = document.getElementById('mainButton')

        mainButton.addEventListener('click', function () {
            let rate = document.getElementById('numeracao') // rating
            if(take == 1) {
                rate.innerHTML = 1
                document.getElementById('thanks').style.display = 'flex'
                document.querySelector('.principal').style.display = 'none'
            } else if(take == 2) {
                rate.innerHTML = 2
                document.getElementById('thanks').style.display = 'flex'
                document.querySelector('.principal').style.display = 'none'
            } else if(take == 3) {
                rate.innerHTML = 3
                document.getElementById('thanks').style.display = 'flex'
                document.querySelector('.principal').style.display = 'none'
            } else if(take == 4) {
                rate.innerHTML = 4
                document.getElementById('thanks').style.display = 'flex'
                document.querySelector('.principal').style.display = 'none'
            } else {
                rate.innerHTML = 5
                document.getElementById('thanks').style.display = 'flex'
                document.querySelector('.principal').style.display = 'none'
            }
        })
    });
});
