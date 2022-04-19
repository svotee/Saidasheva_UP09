export function CloseModal(){
    let modal = document.querySelector('.popup-call')

    let  modal_two=document.querySelector('.popup-discount')

    let disc_modal=document.querySelector('.popup-check')


    disc_modal.addEventListener('click',(e)=>{
        e.preventDefault()
        if(e.target.classList.contains('popup-check')||e.target.classList.contains('popup-close')){
            disc_modal.style.display='none'
        }

    })

    modal_two.addEventListener('click',(e)=>{
        e.preventDefault()
        if(e.target.classList.contains('popup-discount')||e.target.classList.contains('popup-close')){
            modal_two.style.display='none';

        }
    })

    modal.addEventListener('click',(e)=>{
        e.preventDefault();
        if(e.target.classList.contains('popup-call')|| e.target.classList.contains('popup-close')){
            modal.style.display='none';
        }
    })


}