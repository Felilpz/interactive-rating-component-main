const btn = document.querySelectorAll('.buttons')

btn.forEach(btnEl => {
    btnEl.addEventListener('click', () => {
        document.querySelector('.special')?.classList.remove('special')
        btnEl.classList.add('special')
    })
})