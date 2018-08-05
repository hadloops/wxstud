```sql

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `crest_article_cate_view` AS select `a`.`id` AS `art_id`,`a`.`title` AS `art_title`,`a`.`firstpic` AS `art_firstpic`,`a`.`twopic` AS `art_twopic`,`a`.`cate_id` AS `cate_id`,`a`.`content` AS `art_content`,`a`.`status` AS `art_status`,`a`.`create_time` AS `art_create_time`,`b`.`name` AS `cate_name`,`b`.`pid` AS `cate_pid`,`b`.`status` AS `cate_status`,`b`.`create_time` AS `cate_create_time`,`c`.`id` AS `author_id`,`c`.`name` AS `author_name`,`c`.`content_status` AS `author_content_status`,`c`.`status` AS `author_status` from ((`crest_article` `a` left join `crest_cate` `b` on((`a`.`cate_id` = `b`.`id`))) left join `crest_author` `c` on((`a`.`author_id` = `c`.`id`)));


CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `demo_user_view` AS select `a`.`uid` AS `user_id`,`a`.`username` AS `art_username`,`b`.`id` AS `art_id` from (`demo_user` `a` left join `demo_article` `b` on (`a`.`uid` = `b`.`uid`));
```

