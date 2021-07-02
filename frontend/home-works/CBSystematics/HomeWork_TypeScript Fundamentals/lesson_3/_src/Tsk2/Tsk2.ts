class KeyPair<TKey, TValue, TAuthor> {
  private _key: TKey;

  public set key(value: TKey) {
    if (value == null || value == undefined) {
      throw new Error("Значение не может быть пустым.");
    }
    this._key = value;
  }

  public get key(): TKey {
    return this._key;
  }

  private _value: TValue;

  public set value(value: TValue) {
    if (value == null || value == undefined) {
      throw new Error("Значение не может быть пустым.");
    }
    this._value = value;
  }

  public get value(): TValue {
    return this._value;
  }

  private _author: TAuthor;

  public set author(author: TAuthor) {
    if (author == null || author == undefined) {
      throw new Error("Значение не может быть пустым.");
    }
    this._author = author;
  }

  public get author(): TAuthor {
    return this._author;
  }
}

class Dictionary<TKey, TValue, TAuthor> {
  private data: KeyPair<TKey, TValue, TAuthor>[] = [];

  public add(key: TKey, value: TValue, author: TAuthor) {
    let entry = new KeyPair<TKey, TValue, TAuthor>();
    entry.key = key;
    entry.value = value;
    entry.author = author;
    this.data.push(entry);
  }

  public getValue(key: TKey): TValue | null {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].key == key) {
        return this.data[i].value;
      }
    }

    return null;
  }
  public getAuthor(key: TKey): TAuthor | null {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].key == key) {
        return this.data[i].author;
      }
    }

    return null;
  }
}

let dictionary = new Dictionary<string, number, string>();
dictionary.add("The God Delusion", 398, "Richard Dawkins");
dictionary.add("The wanderer and his shadow", 245, "Nietzsche");
dictionary.add("Human, All Too Human", 286, "Richard Dawkins");

console.log(dictionary.getValue("The God Delusion"));
console.log(dictionary.getAuthor("The God Delusion"));
console.log(dictionary.getValue("The wanderer and his shadow"));
console.log(dictionary.getAuthor("The wanderer and his shadow"));
console.log(dictionary.getValue("Human, All Too Human"));
console.log(dictionary.getAuthor("Human, All Too Human"));