### 一. `#!/usr/bin/env node`的作用

在类Unix系统上，告诉系统用什么解释器来执行脚本

### 二. package.json中使用`node build.js`而不使用`webpack`的好处

防止有人没有全局安装webpack之类的。尽量避免全局安装，因为不可见。

### 三. 开发过程中本地调试

执行`npm link`，就会把package.json中bin下面的目录在全局注册;

取消注册：`npm unlink`

### 三. gulp的模块化问题

gulp编译完js以后只是进行编译，不会自动进行打包。

```js
import * as $ from "jquery";

$("body").html("<p>Hello World</p>")
```

```js
//commonjs
"use strict";
exports.__esModule = true;
var $ = require("jquery");
$("body").html("<p>Hello World</p>");
```

```js
//amd
define(["require", "exports", "jquery"], function (require, exports, $) {
    "use strict";
    exports.__esModule = true;
    $("body").html("<p>Hello World</p>");
});
```

```js
//es6
import * as $ from "jquery";
$("body").html("<p>Hello World</p>");
```

如果想要进行打包有以下两种方案：

1. 第一种方案是引入gulp-webpack之类进行打包，不如直接使用webpack；还可能带入兼容性问题；
2. 第二种方案是使用requirejs之类的模块化工具，参照官方demo`https://github.com/Microsoft/TypeScriptSamples/tree/master/amd`

```js
//<script type="text/javascript" src="https://cdn.bootcss.com/require.js/2.3.5/require.js"></script>
requirejs.config(
        {
            paths:
                {
                    "Register/app": "script/dist/Register/output",
                    "jquery": "http://esf.js.soufunimg.com/esf/sfb/magentnew/scripts/jquery-1.8.2.min.Fixed",
                },
            shim: {
                'formValidator': ['jquery']
            }
        }
)
require(["formValidator", "Register/app"])
```