/*Il programma dovrà mostrare una form da compilare con cui chiedere
all'utente il numero di chilometri che vuole percorrere e
l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale
del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l'output del prezzo finale va stampato in pagina 
(formattato con massimo due decimali, 
per indicare centesimi sul prezzo).*/

const generateButton = document.getElementById('generate-ticket');
generateButton.addEventListener('click',
    function () {
        const userName = document.getElementById('user-name').value;
        const userKm = parseInt( document.getElementById('user-km').value );
        const userAge = document.getElementById('user-age').value;

        const price = userKm * 0.21;
        let discount = 0;
        
        if (userAge === 'minorenne') {
            discount = price * 20 / 100;
        } else if (userAge === 'over') {
            discount = price * 40 / 100;
        }

        const finalPrice = price - discount;

        const humanPrice = finalPrice.toFixed(2);
    
        
        document.getElementById('ticket-name').innerHTML = userName;
        document.getElementById('ticket-price').innerHTML = humanPrice + '€';
        document.getElementById('ticket').classList.add('active');
        document.getElementById('carriage').innerHTML = Math.floor(Math.random() * 9) + 1;
        document.getElementById('cp-code').innerHTML = Math.floor(Math.random() * 10000) + 1;

        if (userAge === 'minorenne') {
            document.getElementById('supply').innerHTML = 'Offerta Minorenni';
        } else if (userAge === 'over') {
            document.getElementById('supply').innerHTML = 'Offerta Over65';
        } else {
            document.getElementById('supply').innerHTML = 'Biglietto Standard';

        }
    }
)

const cancelTicket = document.getElementById('cancel-ticket')
cancelTicket.addEventListener('click',
    function () {
        document.getElementById('user-name').value = ' ';
        document.getElementById('user-km').value = ' ';
        document.getElementById('user-age').value = 'maggiorenne';
        document.getElementById('ticket').classList.remove('active');
    }
)