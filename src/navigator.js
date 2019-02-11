class Navigator {
  constructor(width) {
    this._list = [];
  }

  get layuotLength() {
    return this._list.length;
  }
  get activeLayout() {
    if (this.layuotLength === 0)
      throw new Error("There is no layouts, please add one!");

    return this._list[this.layuotLength - 1];
  }

  addLayout() {
    this._list.push(this.layuotLength);
  }

  get layouts() {
    return {};
  }
}

module.exports = Navigator;
