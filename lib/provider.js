"use strict";

module.exports = class provider{

    initialize(context){
        this.settings = context.settings.get("plugins." + this.constructor.name) || {};
        if (typeof this.settings.post_enalble === "undefined")
            this._post_enalble = true;
        else
            this._post_enalble = this.settings.post_enalble;
        this.onInitialize(context);
    }

    finalize(context){
        this.onFinalize();
        this.settings.post_enalble  = this._post_enalble;
        context.settings.set("plugins." + this.constructor.name, this.settings);
    }

    get name(){ return this.constructor.name; }

    get post_enalble(){
        return this._post_enalble;
    }

    set post_enalble(enable){
        this._post_enalble = enable;
    }

    onInitialize(context){ }
    onFinalize(){ }
    login(window) { }
    logout(){}
    hasAccess() {}
    subscribe() { }
    retrieve(number) { }
    unsubscribe() { }
    post(post) { }


};
