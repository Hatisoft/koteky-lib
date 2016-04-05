"use strict";

class post{
    constructor(date, origin, owner,content){
        this.date = date;
        this.origin = origin;
        this.owner = owner;
        this.content = content;
    }

    get date() {
      return this.date;
    }

    get origin() {
      return this.origin;
    }

    get owner() {
      return this.origin;
    }

    get content() {
      return this.content;
    }
}
