const sendform = () => {

    const btnOpelModal = document.querySelector('.card-details__button_delivery')
    const cardDetailsTitle = document.querySelector('.card-details__title')
    const modal = document.querySelector('.modal')
    const modalTittle = modal.querySelector('.modal__title')
    const modalClose = modal.querySelector('.modal__close')
    const modalForm = modal.querySelector('form')

    console.log(modalForm);


    btnOpelModal.addEventListener('click', () => {
        modal.style.display = 'flex'
        modalTittle.textContent = cardDetailsTitle.textContent
    })
    
    modalClose.addEventListener('click', () => {
        modal.style.display = 'none'
    })

    modalForm.addEventListener('submit', (event) => {
        event.preventDefault()

        const labels = modal.querySelectorAll('.modal__label')
        const sendMessage = {}

        labels.forEach(label => {
            const span = label.querySelector('span')
            const input = label.querySelector('input')

            sendMessage[span.textContent] = input.value
        }) 

            console.log(sendMessage);
    })

}

sendform()