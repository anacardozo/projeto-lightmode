function toggleMode(){
    const html = document.documentElement
    // o "toggle faz a mesma coisa que o if e else"
    html.classList.toggle('light')

    // pegar a tag img
    // querySelector - puxa pelo seletor
    const img = document.querySelector("#profile img")

    //substituir imagem

    if(html.classList.contains('light')){
        //se tiver light mode, adicionar a iamgem light
        // setAttribute - modificar um atributo
        img.setAttribute('src', './assets/avatar-light.png')

    }
    else{
        //se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/avatar.png')

    }
    
    

    
}