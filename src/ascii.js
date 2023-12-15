const logo=function(){
  
    
  return `
  
    \u001b[32m__________  ____  __________  ____  ____________
      ____   _______________ _______   ___________ ____ ___ __________    _____    _______________________________    ___ ___   
      \   \ /   /\_   _____/ \      \  \__    ___/|    |   \\______   \  /  _  \   \__    ___/\_   _____/\_   ___ \  /   |   \  
       \   Y   /  |    __)_  /   |   \   |    |   |    |   / |       _/ /  /_\  \    |    |    |    __)_ /    \  \/ /    ~    \ 
        \     /   |        \/    |    \  |    |   |    |  /  |    |   \/    |    \   |    |    |        \\     \____\    Y    /  1.0
         \___/   /_______  /\____|__  /  |____|   |______/   |____|_  /\____|__  /   |____|   /_______  / \______  / \___|_  /  
                         \/         \/                              \/         \/                     \/         \/        \/   

  \u001b[31m ~by Vinicius Ventura
    \u001b[0m
    `
}
const menu=function(){

  return` 
  \u001b[32m
_______whatsapp tools_________
|                            |
| [1]=>wa.me                 | 
| [2]=>gerador de menu       |
| [3]=>gerador de aviso      |
| [4]=>Desativar numero      |
| [5]=>Desbanir numero       |
|____________________________|

\u001b[0m
  [9]=> criador
  [0]=>sair
  \u001b[0m`
}
const warking=(aviso)=>{
let avisoc=aviso.replace('.','\n')
  return `
  \u001b[31m
  @________________Aviso_______________@
  
  ${avisoc}
  
  
  ~by VenturaTECH
       @_________________________@
  \u001b[0m
       `
}

module.exports={logo:logo,menu:menu,aviso:warking}