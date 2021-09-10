function load(){

    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('image')

    let date = new Date()
    let hours = date.getHours()
    

    msg.innerHTML = `Now it's <strong>${hours}</strong> o'clock.`

    if (hours >= 0 && hours < 12) {
        //Bom dia!
        img.src = 'image/morning.png'
        document.body.style.background = '#d7b52c'
        
    } else if(hours >= 12 && hours < 18) {
        //Boa tarde!
        img.src = 'image/afternoon.png'
        document.body.style.background = '#854521'

    } else {
        //Boa noite!
        img.src = 'image/night.png'
        document.body.style.background = '#0b3d85'

    }
}
