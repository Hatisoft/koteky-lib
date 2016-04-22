# ![drawing 4](https://cloud.githubusercontent.com/assets/3071208/14739189/3753b184-0886-11e6-80cd-a3d9468a6d05.png)


This is a set of base classes to inherit from to help creating plugins for koteky crossplatform social network manager application based on electron.


##Usage

**This project is still on development and is not ready for public use**

add this package to your project
```
npm install koteky-lib --save
```

###Post
declare a variable to be used
```js
var post = require('koteky-lib').post;
```
instantiate posts by
```js
var localPost = new post(date, origin, owner, content);
```
the content of a post will be taken in count as markdown

##Roadmap

- [x] Implement post model
- [ ] Implement plugin model

####Credits

Social Network graphic by <a href="http://www.freepik.com">Freepik</a> from <a href="http://www.flaticon.com/">Flaticon</a> is licensed under <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a>.Dog graphic by <a href="http://www.freepik.com/">Freepik</a> and Folder graphic by <a href="http://www.finest.graphics">Designerz Base</a> from <a href="http://www.flaticon.com/">Flaticon</a> are licensed under <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a>. Made with <a href="http://logomakr.com" title="Logo Maker">Logo Maker</a>
