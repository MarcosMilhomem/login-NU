const inp = document.querySelector('#input-txt');
const lab = document.querySelector('#label-sad');


lab.addEventListener('blur', (toBlur) => {
    lab.innerHTML = "Este campo é obrigatório"
});

inp.addEventListener('input', (toInput) => {
    lab.innerHTML = "O valor deve ser superior a 8 digitos"
});
 function geral() { if ( inp >= 1) {
    toBlur;
    return toInput;
} else {
    inp.removeEventListener('blur', toBlur);
     toInput;
     return toInput
}};
