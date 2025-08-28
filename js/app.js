function hendleSelect() {
    console.log(5455)
}

const allBtn = document.getElementsByClassName('add-to-btn');

let count = 0;

for (const btn of allBtn) {
    btn.addEventListener('click', function () {
        console.log(454)
        count = count + 1
        document.getElementById('card-count').innerText =count;
        console.log(count)
    })
}