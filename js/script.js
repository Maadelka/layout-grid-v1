const dropd=document.getElementById('dropd')

const burger=document.getElementById('burger')
burger.addEventListener('click',function(){
    dropd.classList.toggle('muncul')
    burger.classList.toggle('putar')
})