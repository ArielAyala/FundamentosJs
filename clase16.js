var signo = prompt('¿Cual es tu signo?')

switch (signo) {

  case 'Acuario':
    case 'acuario':
    console.log('Es ' + signo)
    break;
  case 'Cancer':
    console.log('Es ' + signo)
    break;
  default:
    console.log('No se encontró su signo sodiacal')
}
