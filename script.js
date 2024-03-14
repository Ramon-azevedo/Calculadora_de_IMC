// IMC DATA
const data = [
    {
      min: 0,
      max: 18.4,
      classification: "Menor que 18,5",
      info: "Magreza",
      obesity: "0",
    },
    {
      min: 18.5,
      max: 24.9,
      classification: "Entre 18,5 e 24,9",
      info: "Normal",
      obesity: "0",
    },
    {
      min: 25,
      max: 29.9,
      classification: "Entre 25,0 e 29,9",
      info: "Sobrepeso",
      obesity: "I",
    },
    {
      min: 30,
      max: 39.9,
      classification: "Entre 30,0 e 39,9",
      info: "Obesidade",
      obesity: "II",
    },
    {
      min: 40,
      max: 99,
      classification: "Maior que 40,0",
      info: "Obesidade grave",
      obesity: "III",
    },
  ];



const altura = document.getElementById('numaltura');
const peso = document.getElementById('numPeso');
const imcTable = document.getElementById('imcTable')

const apag = document.getElementById('apag')
const novo = document.getElementById('novo')
const calcular = document.getElementById('bot1');
const limpar = document.getElementById('bot2');

const p1 = document.querySelector('#p1 span')
const p2 = document.querySelector('#p2 span')
const voltar = document.getElementById('voltar')

calcular.addEventListener('click', () => {

    const numAltura = Number(+altura.value.replace(',','.'));
    const numPeso = Number(+peso.value.replace(',','.'));

    if (isNaN(numAltura) || isNaN(numPeso) || numAltura <= 0 || numPeso <= 0) {
        window.alert('Digite algo nos campos para continuar !')
    }else  {
        let imc = (numPeso / (numAltura * numAltura)).toFixed(1);

        apag.classList.add('apag')

        novo.classList.add('novo')


        let info;

        data.forEach((item) => {
            if (imc >= item.min && imc <= item.max) {
                info = item.info;
            }
        });


        

        if (!info) return;

        p1.innerText = imc;
        p2.innerText = info;


        switch(info) {
          case "Magreza":
            p1.classList.add('low');
            p2.classList.add('low');
            break;
          case "Normal":
            p1.classList.add('good');
            p2.classList.add('good');
            break;
          case "Sobrepeso":
            p1.classList.add('low');
            p2.classList.add('low')
            break;
          case "Obesidade":
            p1.classList.add('medium');
            p2.classList.add('medium');
            break;
          case "Obesidade grave":
            p1.classList.add('high');
            p2.classList.add('high');
            break;
        }




     }
});

function cleanInputs() {
    altura.value = ''
    peso.value = ''
}

limpar.addEventListener('click', (e) => {
    e.preventDefault();
    cleanInputs();
});

voltar.addEventListener('click', (e) => {
    e.preventDefault();
    novo.classList.remove('novo');
    apag.classList.remove('apag');
    cleanInputs();
    p1.classList = ''
    p2.classList = ''

})



function createTable(data) {
  data.forEach((item) => {
    const div = document.createElement('div')
    div.classList.add('tb_data');

    const classification = document.createElement('p')
    classification.innerText = item.classification;

    const info = document.createElement('p')
    info.innerText = item.info;

    const obesity = document.createElement('p')
    obesity.innerText = item.obesity;


    div.appendChild(classification);
    div.appendChild(info);
    div.appendChild(obesity);

    imcTable.appendChild(div)



  })
}

createTable(data);