<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="UTF-8">
        <title>diworksblog 掲示板</title>
        <link rel = "stylesheet" type = "text/css" href = "style.css">
    </head>
    
    <body>
        <?php
        
        mb_internal_encoding("utf8");
        $pdo = new PDO("mysql:dbname=lesson01;host=localhost;","root","");
        $stmt = $pdo -> query("select * from diworks_keijiban");
        
        ?>
        <img src="diblog_logo.jpg">
      <header>
        <ul>
            <li>トップ</li>
            <li>プロフィール</li>
            <li>D.I.Blogについて</li>
            <li>登録フォーム</li>
            <li>問い合わせ</li>
            <li>その他</li>
        
        </ul>
        </header>
          <main>
                <div class="main-container">
                    <div class="left">
                        <h2>プログラミングに役立つ掲示板</h2>
                        
                        <form method = "post" action = "insert.php">
                            <div class = "box1">
                                <h3>入力フォーム</h3>
                                <div>
                                    <label>ハンドルネーム</label>
                                    <br>
                                    <input required type = "text" class = "text" size = "35" name ="handlename">
                                </div>
                                
                                <div>
                                    <label>タイトル</label>
                                    <br>
                                    <input required type = "text" class ="text" size = "35" name = "title">
                                </div>
                                
                                <div>
                                    <label>コメント</label>
                                    <br>
                                    <textarea required cols = "50" rows = "10" name = "comments"></textarea>
                                    
                                </div>
                                
                                <div>
                                    <input type = "submit" class = "submit" value = "投稿する">
                                </div>
                            </div>
                            <?php
                            while($row = $stmt -> fetch()){
                                echo "<div class = 'box2'>";
                                echo "<h3>".$row['title']."</h3>";
                                echo "<div class = 'box3'>";
                                echo $row['comments'];
                                echo "<div class = 'handlename'>posted by   ".$row['handlename']."</div>";
                                echo "</div>";
                                echo "</div>";
                            }
                            ?>
                        </form>
                    </div>
                   
                    <div class="right">
                        <h3>人気の記事</h3>
                        <p>PHPオススメ本</p>
                        <p>PHP　MyAdminの使い方</p>
                        <p>いま人気のエディタTops</p>
                        <p>HTMLの基礎</p>
                
                        <h3>オススメリンク</h3>
                        <p>ﾃﾞｨｰｱｲﾜｰｸｽ株式会社</p>
                        <p>XAMPPのダウンロード</p>
                        <p>Eclipseのダウンロード</p>
                        <p>Braketsのダウンロード</p>
                        
                        <h3>カテゴリ</h3>
                        <p>HTML</p>
                        <p>PHP</p>
                        <p>MySQL</p>
                        <p>JavaScript</p>
                        
                    </div>
              </div>
        </main>
                    <footer>
                     Copyright D.I.blog is the one which provides A to Z about programming
                    </footer>
    </body>
</html>
