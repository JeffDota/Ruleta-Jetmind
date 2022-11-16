const ruleta = document.querySelector('#ruleta');

ruleta.addEventListener('click', girar);
giros = 0;
function girar(){
  if (giros < 1) {
    let rand = Math.random() * 7200;
    calcular(rand);
    giros++;
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'sonido/ruleta.mp3');
    document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros; 
  }else{
    Swal.fire({   
  Width: 500,
  padding: '11.5em',
  color: '#716add',
  showConfirmButton: false,
  allowOutsideClick: true,
  allowEscapeKey: false,
  background: 'url(/juego-ruleta-main/image/Recurso6.png)',
  buttons: false,
  html: `

  <div class="btn" style="">
  <a href="https://walink.co/3baaa5" >
    <button type="button" 
     style="
     padding: 8px;
     position: absolute;
     width: 40%;
     margin: auto;
     display: inline-block;
     bottom: 40px;
     text-align: center;
     height: 60px;
     font-weight: bold;
     font-size: 15pt;
     color: #29235c;
     background-color: #f9b233;
     border-radius: 21px;
     border: 2px solid #29235c;
     ">ingresa tus datos aquí</button>
  </a>
  </div>
 
  `

     
    }).then((result)=>{
      if (result.value == true) {
        giros = 0;
         document.querySelector('.elije').innerHTML = '';
         document.querySelector('.contador').innerHTML = '' + giros;        
      }
    })
  }

function premio(premios){

  document.querySelector('.elije').innerHTML = '' + premios;

}


 function calcular(rand) {

  valor = rand / 360;
  valor = (valor - parseInt(valor.toString().split(".")[0]))* 360;
  ruleta.style.transform = "rotate("+rand+"deg)";
  
  console.log(valor);
  setTimeout(() => {
  switch (true) {
    case valor > 0 && valor <= 45:
     premio("");
     break;
     case valor > 45 && valor <= 90:
     premio("");
     break;
     case valor > 90 && valor <= 135:
     premio(""); 
     break; 
     case valor > 135 && valor <= 180:
     premio("");
     break;
     case valor > 180 && valor <= 225:
     premio("");
     break; 
     case valor > 225 && valor <= 270:
     premio("");
     break;
     case valor > 270 && valor <= 315:
     premio("");
     break;
     case valor > 315 && valor <= 360:
     premio(""); 
     break;
  }

 }, 5000);

}
}