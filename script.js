const dino = document.querySelector('.dino')
let isJumping = false //saber se esta pulando ou n

//detecta botao space pressionado
function handleKeyUp(event){
    if(event.keyCode === 32){
        if(!isJumping){
            jump()
        }
    }
}

//faz o dinossauro pular
    function jump(){
        let position = 0

        isJumping = true

        let upInterval = setInterval(() => {  
            if(position >= 150){
                clearInterval(upInterval)

                //descendo
                let downInterval = setInterval(() => {
                    if(position <= 20){
                        clearInterval(downInterval)
                        isJumping = false
                    }
                    position -= 20
                    dino.style.bottom = position + 'px'
                },20)
            } else {
                //subindo
                position += 20
                dino.style.bottom = position + 'px'
            }
        },20)
}

document.addEventListener('keyup', handleKeyUp)

console.log(dino)