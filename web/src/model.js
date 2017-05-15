var avalon = require("avalon2");
module.exports = {
    App: function () {
        return avalon.define({
            $id: "app",
            querys: {},
            path: "",
            isLogin: "",
            userInfo: {},
            templates: "",
            data: {
                menu: [{
                    id: 1,
                    name: "服装管理",
                    icon: ""
                },{
                    id: 2,
                    name: "用户管理",
                    icon: ""
                },{
                    id: 3,
                    name: "订单管理",
                    icon: ""
                }]
            },
            method: {

            }
        })
    }
};