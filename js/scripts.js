function get(element) {
    return document.getElementById(element);
}

//application functions
function openModal() {
    var modal = get('modal-dialog');
    var backdrop = get("modal-backdrop");

    modal.classList.add('visible');
    backdrop.classList.add('visible');
}

function closeModal() {
    var name = get('edit-name-text');
    var date = get('edit-date-text');
    var method = get('edit-method-text');
    var time = get('edit-time-text');
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    //clear text
    name.value = '';
    date.value = '';
    method.value = '';
    time.value = '';

    //hide modal
    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

function saveContent() {
    var name = get('edit-name-text');
    var date = get('edit-date-text');
    var method = get('edit-method-text');
    var time = get('edit-time-text');
    var content = get('display-content');

    //create content elements
    var newName = document.createElement('h2');
    var newNameText = document.createTextNode(name.value);
    var newDate = document.createElement('p');
    var newDateText = document.createTextNode(date.value);
    var newMethod = document.createElement('p');
    var newMethodText = document.createTextNode(method.value);
    var newTime = document.createElement('p');
    var newTimeText = document.createTextNode(time.value);

    //add elements
    newName.appendChild(newNameText);
    newDate.appendChild(newDateText);
    newMethod.appendChild(newMethodText);
    newTime.appendChild(newTimeText);
    content.appendChild(newName);
    content.appendChild(newDate);
    content.appendChild(newMethod);
    content.appendChild(newTime);

    closeModal();
}

//wire up event handlers
window.addEventListener('load', function () {
    var newButton = get('new-button');
    var cancelButton = get('cancel-button');
    var saveButton = get('save-button');
    var entryButton = get('entry-button');

    newButton.addEventListener('click', openModal);
    cancelButton.addEventListener('click', closeModal);
    saveButton.addEventListener('click', saveContent);
    entryButton.addEventListener('click', initEntries);
});

//key press handler to automatically click the save button
function clickButton(event) {
    if (event.keyCode === 13) {
        document.getElementById('save-button').click();
    }
}

var entries = [
    {
        id: 1,
        name: 'Kayden',
        date: '11/27/2019',
        method: 'read a book',
        time: '5 hours'
    },
    {
        id: 2,
        name: 'Kayden',
        date: '11/28/2019',
        method: 'aromatherapy',
        time: '6 hours'
    },
    {
        id: 3,
        name: 'Kayden',
        date: '11/29/2019',
        method: 'cuddled with lights out',
        time: '7 hours'
    },
    {
        id: 4,
        name: 'Kayden',
        date: '11/30/2019',
        method: 'none',
        time: '2 hours'
    }
];

//entry constructor function
function Entry(name, date, method, time) {
    this.name = name;
    this.date = date;
    this.method = method;
    this.time = time;
}

function initEntries() {
    for (i = 0; i < entries.length; i++) {
        // Create elements
        var entryId = 'entry-' + entries[i].id;
        var entryNameEl = document.createElement('h2');
        var entryNameText = document.createTextNode(entries[i].name);
        var entryDateEl = document.createElement('p');
        var entryDateText = document.createTextNode(entries[i].date);
        var entryMethodEl = document.createElement('p');
        var entryMethodText = document.createTextNode(entries[i].method);
        var entryTimeEl = document.createElement('p');
        var entryTimeText = document.createTextNode(entries[i].time);

        // Add entry data
        var content = get('intro-message');

        entryNameEl.appendChild(entryNameText);
        entryDateEl.appendChild(entryDateText);
        entryMethodEl.appendChild(entryMethodText);
        entryTimeEl.appendChild(entryTimeText);
        content.appendChild(entryNameEl);
        content.appendChild(entryDateEl);
        content.appendChild(entryMethodEl);
        content.appendChild(entryTimeEl);
    }    
}






