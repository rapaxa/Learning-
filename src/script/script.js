const modalButton = document.getElementById('header__btn')
const modalClose = document.getElementById('close__btn')
function modalHeader() {
    const modal = document.querySelector('.promo__modal')
    const stat = modal.style.display;
    if(stat === 'flex'){
        modal.style.display = 'none'
    }else{
        modal.style.display = 'flex'
    }

}
function modalOpen(name){
    name.addEventListener('click', (e) => {
        modalHeader()
    })
}


modalOpen(modalButton)
modalOpen(modalClose)
// modalButton.addEventListener('click', (e) => {
//     modalHeader()
// })
// modalClose.addEventListener('click', (e) => {
//     modalHeader()
// })

