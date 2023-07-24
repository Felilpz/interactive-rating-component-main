# interactive-rating-component-main


# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [FEM](https://www.frontendmentor.io/solutions/interactive-rating-component-SGLSAJdyRB)
- Live Site URL: [GITHUB](https://felilpz.github.io/interactive-rating-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

- Aprendi a utilizar de maneira correta e dominar certos eventos (onclick, principalmente) com o javascript. 
- Manipulação de eventos DOM
- Comando defer, que faz com que o navegador execute o script apenas quando a análise do html estiver finalizada.
- Função ternária
- Operador de negação (!)
- Operador "não igual/diferente"

To see how you can add code snippets, see below:


```js

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
        selectedButton = isSelected ? null : button;
        

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


```

## Author

- Github - [Felilpz](https://www.github.com/felilpz)
- Frontend Mentor - [@Felilpz](https://www.frontendmentor.io/profile/Felilpz)