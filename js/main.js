
// About Section
// About Section Variables
let buttons = document.querySelectorAll('.about .links button')
let texts = document.querySelectorAll('.about .container .text')
let images = document.querySelectorAll('.about .container .image')
let links = document.querySelectorAll('.about .links button')

// Switch About Section content
buttons.forEach((button,id) =>{
    button.onclick = ()=>{
        // Switch Text
        texts.forEach(text=>{
            text.style.display='none'
        })
        texts[id].style.display='block'
        // Switch Image
        images.forEach(image=>{
            image.style.display='none'
        })
        images[id].style.display='block'
        // Switch class active on button
        links.forEach(link=>{
            link.classList.remove('active')
        })
        links[id].classList.add('active')
    }
})

// Footer Section
let year = document.querySelector(' .footer .copyright span:nth-child(1)')

year.textContent=new Date().getFullYear()