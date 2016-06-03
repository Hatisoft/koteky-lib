"use strict";

module.exports = class provider{

    initialize(context){
        this.settings = context.settings.get("plugins." + this.constructor.name) || {};
        this.onInitialize(context);
    }



    finalize(context){
        this.onFinalize();
        context.settings.set("plugins." + this.constructor.name, this.settings);
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
