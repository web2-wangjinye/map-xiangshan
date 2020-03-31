创建git连接仓库：https://blog.csdn.net/Lucky_LXG/article/details/77849212
Git 从master拉取代码创建新分支 并且再将修改合并到master:https://blog.csdn.net/ganghaodream/article/details/100136719
vscode的git使用：https://www.cnblogs.com/ashidamana/p/6122619.html


命令步骤：
建立本地仓库：git init
将代码提交到本地仓库：git add .
                    git commit -m "描述"
在本地仓库中建立一个与远程仓库的别名，以便之后提交代码而不是每次都要输入远程仓库地址：
                    git remote add origin git@XX.XX.XX.12:gyjia/hotcodeserver.git                  
查看本地分支：git branch
查看远端库的分支：git branch -r

创建分支：git branch hello_git_branch
切换分支：git checkout hello_git_branch
创建并切换：git checkout -b hello_git_branch
将分支push到远程仓库上：git push origin hello_git_branch

