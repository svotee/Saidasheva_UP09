export function CloseModal(){
    let modal = document.querySelector('.popup-call')
    modal.addEventListener('click',(e)=>{
        e.preventDefault();
        if(e.target.classList.contains('popup-call')|| e.target.classList.contains('popup-close')){
            e.preventDefault()
            modal.style.display='none';
        }
    })


}