const item = document.querySelector('.item'),
      placeholders = document.querySelectorAll('.placeholder');


placeholders.forEach(ph => {
    ph.addEventListener('dragover', dragover);
    ph.addEventListener('dragenter', dragenter);
    ph.addEventListener('dragleave', dragleave);
    ph.addEventListener('drop', drop);
});



item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

function dragStart(evt) {
    evt.target.classList.add('hold');
    setTimeout(() => 
        evt.target.classList.add('hide'), 0);
}

function dragEnd(evt) {
    evt.target.classList.remove('hold');
    evt.target.classList.remove('hide');

}

function dragenter(e) {
    e.target.classList.add('hovered');
}

function dragleave(e) {
    e.target.classList.remove('hovered');
}

function dragover(e) {
    e.preventDefault();
}

function drop(e) {
    e.target.append(item);
    e.target.classList.remove('hovered');
}