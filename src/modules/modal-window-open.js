export function SeeModal(){
    let callbtn=document.querySelector('.call-btn');
    let modal=document.querySelector('.popup-call')
    callbtn.addEventListener('click',()=>{
        modal.style.display='block';
        console.log(callbtn)
    })
    
}