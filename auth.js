const PASSWORD_HASH = "4943c31c1a355f121771fb9e0b469cc9cc73f0b774a59e4458cf8160df5373b0";

async function verify() {
    let pwd = prompt("请输入访问密码：");
    if (!pwd) {
        document.body.innerHTML = "<h2 style='color:red;margin-top:50px;'>访问被拒绝</h2>";
        return;
    }

    let hash = await sha256(pwd);

    if (hash === PASSWORD_HASH) {
        window.location.href = "content.html";
    } else {
        document.body.innerHTML = "<h2 style='color:red;margin-top:50px;'>访问被拒绝</h2>";
    }
}

verify();
