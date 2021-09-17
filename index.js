const elTitle = document.querySelector('#title');
const elRed = document.querySelector('#red');
const elYellow = document.querySelector('#yellow');
const elGreen = document.querySelector('#green')
let rec = new webkitSpeechRecognition();

btn.addEventListener('click', function(){
    rec.start();

    rec.lang = 'ru-Ru';

    rec.onresult = function(e){
        if(e.results[0].isFinal){

            if(e.results[0][0].transcript == 'светофор'){
                elRed.classList.add('red');
                elYellow.classList.add('yellow')
                elGreen.classList.add('green');
                elTitle.style.color = ''
                elTitle.textContent = 'Светофо́р (от свет + греч. φορέας «несущий») — оптическое устройство, подающее световые сигналы для регулирования движения автомобильного, железнодорожного, водного и другого транспорта, а также пешеходов на пешеходных переходах.'
            }else if(e.results[0][0].transcript == 'красный'){
                elRed.classList.add('red');
                elTitle.style.color = 'red'
                elTitle.textContent = 'Красный сигнал - светофора запрещает проезд за стоп-линию (при её отсутствии за светофор) или впереди стоящее транспортное средство на охраняемый светофором участок.'
            }if(e.results[0][0].transcript == 'жёлтый'){
                elYellow.classList.add('yellow')
                elTitle.style.color = 'gold'
                elTitle.textContent = 'Жёлтый обязывает сбросить скорость и быть готовым к тому что светофор через 0,5 — 1 сек переключится на красный.'
                // document.body.style.backgroundColor = 'green'
            }if(e.results[0][0].transcript == 'зелёный'){
               elGreen.classList.add('green');
               elTitle.style.color = 'green'
               elTitle.textContent = 'Зелёный — разрешает движение со скоростью, не превышающей максимальный уровень для данной автотрассы.'
            }
        }
        
    }

})
console.log(rec);