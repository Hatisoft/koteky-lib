"use strict";

module.exports = class post{
    constructor(date, origin, owner,content){
        this.date_ = date;
        this.origin_ = origin;
        this.owner_ = owner;
        this.content_ = content;
    }

    get date() {
      return this.date_;
    }

    get origin() {
      return this.origin_;
    }

    get owner() {
      return this.owner_;
    }

    get content() {
      return this.content_;
    }
};
