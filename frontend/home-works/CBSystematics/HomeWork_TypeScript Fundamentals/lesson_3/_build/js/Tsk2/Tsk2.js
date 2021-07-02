class KeyPair {
    set key(value) {
        if (value == null || value == undefined) {
            throw new Error("Значение не может быть пустым.");
        }
        this._key = value;
    }
    get key() {
        return this._key;
    }
    set value(value) {
        if (value == null || value == undefined) {
            throw new Error("Значение не может быть пустым.");
        }
        this._value = value;
    }
    get value() {
        return this._value;
    }
    set author(author) {
        if (author == null || author == undefined) {
            throw new Error("Значение не может быть пустым.");
        }
        this._author = author;
    }
    get author() {
        return this._author;
    }
}
class Dictionary {
    constructor() {
        this.data = [];
    }
    add(key, value, author) {
        let entry = new KeyPair();
        entry.key = key;
        entry.value = value;
        entry.author = author;
        this.data.push(entry);
    }
    getValue(key) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].key == key) {
                return this.data[i].value;
            }
        }
        return null;
    }
    getAuthor(key) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].key == key) {
                return this.data[i].author;
            }
        }
        return null;
    }
}
let dictionary = new Dictionary();
dictionary.add("The God Delusion", 398, "Richard Dawkins");
dictionary.add("The wanderer and his shadow", 245, "Nietzsche");
dictionary.add("Human, All Too Human", 286, "Richard Dawkins");
console.log(dictionary.getValue("The God Delusion"));
console.log(dictionary.getAuthor("The God Delusion"));
console.log(dictionary.getValue("The wanderer and his shadow"));
console.log(dictionary.getAuthor("The wanderer and his shadow"));
console.log(dictionary.getValue("Human, All Too Human"));
console.log(dictionary.getAuthor("Human, All Too Human"));
//# sourceMappingURL=Tsk2.js.map