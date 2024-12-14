const entry = document.querySelector('#button');
const old = document.querySelector('#old');
const news = document.querySelector('#new');
const entryCount = document.querySelector('#entryCount');
const journalDate = document.querySelector('#date');
const journalEntry = document.querySelector('#journalEntry');
const journalEntries = document.querySelector('#journalEntries');

let entries = []


let count = localStorage.getItem('entryCount') || 0;

function addEntries() {
    count++;
    entryCount.innerHTML = count;

    entries.push({ date: journalDate, content: entry });
}

entry.addEventListener('click', addEntries());

function displayEntries() {
    entries.forEach((entry) => {
        const date = entry.date;
        const content = entry.content;

        let d = document.createElement('h2');
        let c = document.createElement('p');
        let s = document.createElement('section');

        s.appendChild(d);
        s.appendChild(c);

        journalEntries.appendChild(s);
    })
};

displayEntries();
