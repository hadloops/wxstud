### Switch中多个默认值(PHP7不允许)

```php
switch(true)
{
    default:
        echo 'I am first one';
        break;
    default:
        echo 'I am second one';
    
}
```

