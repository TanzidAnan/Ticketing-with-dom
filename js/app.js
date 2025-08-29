// function hendleSelect() {
//     console.log(5455)
// }

const allBtn = document.getElementsByClassName('add-to-btn');

let count = 0;

for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        count = count + 1
        setInnerText('card-count', count)
        // console.log(count)
        const placeName = e.target.parentNode.parentNode.childNodes[1].childNodes[1].innerText;
        const placePrice = e.target.parentNode.parentNode.childNodes[1].childNodes[3].childNodes[1].innerText;
        const selectedContainer = document.getElementById('selected-place-container');
        const li = document.createElement('li');
        const p = document.createElement('p')
        p.innerText = placeName
        const p2 = document.createElement('p');
        p2.innerText = placePrice;
        li.appendChild(p)
        li.appendChild(p2);
        selectedContainer.appendChild(li)

        const totleCost = document.getElementById('totle-cost').innerText;
        const newTotleCost = parseFloat(totleCost);
        // ==============
        const sum =newTotleCost + parseFloat(placePrice)
        // document.getElementById('totle-cost').innerText = sum;
        setInnerText('totle-cost',sum)


        // =========================

        const grentTotle =document.getElementById('grand-totle').innerText;
        const convertedGrentTotle =parseFloat(grentTotle);
        const sum2 =convertedGrentTotle +parseFloat(placePrice);
        // document.getElementById('grand-totle').innerText=sum2
        setInnerText('grand-totle',sum2)


    })
};

