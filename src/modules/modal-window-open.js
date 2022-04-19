export function SeeModal(){
    let callbtn=document.querySelectorAll('.call-btn');
    let modal=document.querySelector('.popup-call')

    let modal_two=document.querySelector('.popup-discount')
    let callbtn_two=document.querySelectorAll('.discount-btn')

    let disc_btn=document.querySelector('.gauging-button')
    let disc_modal=document.querySelector('.popup-check')

    disc_btn.addEventListener('click',()=>{
        disc_modal.style.display='block'
    })


    callbtn_two.forEach((item)=>{
        item.addEventListener('click',()=>{
            modal_two.style.display='block'
        })
    })


    callbtn.forEach((item)=>
        item.addEventListener('click',()=>{
            modal.style.display='block';
    }))
    
}