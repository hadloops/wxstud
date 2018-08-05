```txt
composer global require "fxp/composer-asset-plugin:~1.0.0"
composer create- project --prefer-dist yiisoft/yii2-app-basic basic

中文文档   https://www.yiichina.com/
根目录   web
asArray()  数组形式返回

```

```php
namespace app\controllers;
use \yii\base\Controller;

class HomeController extends Controller
{
	public function actionIndex()
	{
		$request = \Yii::$app->request();
		$request->get('id');
		$request->isGet;
		$ip = $request->useIP;
        
        //模板
        return $this->renderPartial();
	}
}
```

#### 优化

```php
foreach(Article::find()->batch(1) as $article){
    $data[] = $article;
}
//增加
$article = new Article();
$article->id = 1;
//$res = $article->insert();
//$res = $article->save();
$id = $article->attributes['id']; //获取自增主键
//修改
update();    //修改
```

