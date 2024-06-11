const button = document.getElementById('click');
// クリックid取得を宣言
const type = document.getElementById('type');
// typeid取得を宣言

button.addEventListener('click', () => {
  // ボタンがクリックされたら
    let url = 'https://api.github.com/users/hfewcqocnq/repos';
    // Githubのユーザー名URLを宣言
    fetch(url)
    // URLにリクエストを送る
      .then((response) => {
        return response.json();
      })
      // JSONとはjs用データフォーマット
      // 取得した結果（response）をResponse オブジェクトの json() メソッドを使って解析
      // その結果（JSON オブジェクト）を return することで次の then() メソッドに渡す
      .then(data => {
      // 上記の結果の値を data として受け取る
        for(let i = 0; i < data.length; i++){
          newElement = document.createElement("div");
          newElement.innerHTML = data[i].name;
          // 動的（data.lengthによるリポジトリの数に応じて毎回生成）なdivを作成
          type.appendChild(newElement);
          // typeという親ノードの中に表示する
          console.log(data[i].name);
        }
    });
});