var boxes = document.querySelector('.boxes'),
    box = document.querySelectorAll('.box'),
    pagination = document.querySelector('.pagination'),
    limit = 6,
    active = 0;

count_p = parseInt((box.length / limit) + 0.9);

function none_boxes() {
    box.forEach(b => b.style.cssText = 'visibility: hidden;position: absolute;z-index: -1;');
}

none_boxes();

for (let i = 0; i < count_p; i++) {
    const p_btn = document.createElement('p');
    p_btn.textContent = i + 1;
    p_btn.setAttribute('data-index', i);
    pagination.append(p_btn);
}

function active_boxes() {
    for (let i = active; i < active + limit; i++) {
        box[i].style.cssText = 'visibility: visible;position: static;z-index: 0;';
    }
}

function del_btn() {
    p_btn.forEach(btn => {
        btn.classList = '';
    })
}


active_boxes();

p_btn = pagination.querySelectorAll('p');
p_btn[0].classList = 'active';


p_btn.forEach(btn => {
    btn.addEventListener('click', () => {
        del_btn();
        btn.classList = 'active';
        active = parseInt(btn.dataset.index) * limit;
        none_boxes();
        active_boxes();
    })
})

const name = document.querySelectorAll('#no-a');

function Mycontact() {
    name.forEach(item => {
        item.style.width = "150px";
    })
}

const menu = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const body = document.getElementById('body');
const section = document.getElementById('section');

function defined() {
    menu.style.transform = 'translateX(400px)';
    hamburger.style.display = 'none';
    body.style.overflowY = 'hidden';
    section.style.filter = 'blur(5px)'
}
function colose() {
    menu.style.transform = 'translateX(-50%)';
    hamburger.style.display = 'block';
    body.style.overflowY = 'auto';
    body.style.backdropFilter = 'none';
    section.style.filter = 'none'
}