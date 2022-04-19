export function Accardion(){
    let quest_acc=document.querySelector('#accordion-two');
    let all_quest_txt=document.querySelectorAll('.panel-collapse');

    quest_acc.addEventListener('click',(e)=>{
        e.preventDefault()
        if(e.target.closest('.panel-heading')){
            all_quest_txt.forEach((item)=>{
                item.style.display='none';
            })
        let panel = e.target.closest('.panel');
        let txt=panel.querySelector('.panel-collapse')
        txt.style.display='block';
        }
    })
}