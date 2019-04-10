1.git bash here
        ls ：查看内容
        2.cd 项目目录
        3.git init ： git初始化 ==》就是给项目和git建立联系   有了.git文件了.
        //下面这两行是针对第一次使用.
        git config --global user.name "用户名"
        git config --global user.password "密码"
        touch .a  创建一.个a的内容
        git status : 查看文件状态    Untracked ：没有进行修改
        git add 文件名  ：   添加到暂存区，只是单个添加。
        4.git add .  全部都上传到暂存区
        5.git commit -m  "提示"  ：提交到服务端
        6.git remote add origin master （git仓库地址）  ：链接远程仓库
        7.git push -u origin master  ： 第一次提交
        git push ：除了第一次提交，后续提及都采用这个
        红色  没提交   绿色 已提交到暂存区  白色  git commit -m  "提示"  ：提交到服务端
