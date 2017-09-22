# react-and-redux
《深入浅出react和redux》学习

用create-react-app脚手架生成的目录简单，没有多余的文件。

但是在打包的时候遇到一点小问题，npm run build　后该项目会生成一个build文件，但是我点击其中的index.html文件打开后浏览器是空白页面。

解决办法：在package.json配置文件中加一句：　"homepage": "./" ，

(vue项目时是在config文件下的index.js中：　改成　assetsPublicPath: ‘./‘,)

这是build之后的路径问题，改为相对路径后再次打开这个index.html文件就可以正常浏览了。

## 在github上生成预览演示

之后想在github生成该项目的预览，但是发现build 文件夹在push之后并没有上传到github上，原来是因为配置文件中对这个文件夹的上传进行了忽略，我们只需要加上-f 就可以确认添加该文件

#### git add -f build

按照正常步骤将本地库连接到远程库

#### git add .

#### git commit -m ‘描述’

#### git push -u origin master

此时点击build文件夹里的index.html文件只能看到源代码，不能产生效果预览

点击github上的你要进入的仓库，点击setteings

找到github Pages部分，点击none,让它切换成master branch,点击save保存none,让它切换成master branch,点击save保存
保存后页面出现了链接，这个链接点击后并不是网页效果，得修改地址，先复制这个地址
在你刚才复制的地址后面加上你要查看的html页面的名称，例如我的github地址是：　https://myadmin.github.io/某项目 ,要预览这个某项目下的index.html文件，则你最后应该预览的地址是：　https://myadmin.github.io/某项目/index.html
