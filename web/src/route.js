require('mmRouter');
require('./components/home/index.js');
module.exports = function (app) {
    avalon.router.add("/:a",function (path) {
        app.path = this.path;
        app.querys = this.query;
        switch(path){
            case "home":
                app.templates = "<ms-home></ms-home>";
                break;
        }
        return path;
    });
    avalon.router.add("/:a/:b",function (path) {
        app.path = this.path;
        app.querys = this.query;
        return path;
    });
    if(!location.hash){
        avalon.router.navigate('/home', 2)//默认打开
    }
    avalon.history.start({
        root: "/",
        hashPrefix: "#",
        html5: false,
        autoScroll: false
    });
}