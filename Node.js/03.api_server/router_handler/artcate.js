const db=require('../db/index');

exports.getArticleCates=(req,res)=>{
    // 定义查询分类列表数据的sql语句
    const sql=`select * from ev_article_cate where is_delete=0 order by id asc`;
    db.query(sql,(err,result)=>{
        if(err){
            return res.cc(err);
        }
        res.send({
            status:0,
            message:'获取文章分类数据成功',
            data:result
        })
    })
}

exports.addArticleCates=(req,res)=>{
    const sql=`select * from ev_article_cate where name=? or alias=?`
    db.query(sql,[req.body.name,req.body.alias],(err,result)=>{
        if(err){
            return res.cc(err);
        }
        if(result.length>=2){
            return res.cc('分类名称或别名被占用，请更换后重试！');
        }
        if(result.length===1&&result[0].name===req.body.name&&result[0].alias===req.body.alias){
            return res.cc('分类名称和分类别名被占用');
        }
        if(result.length===1&&result[0].name===req.body.name){
            return res.cc('分类名称被占用');
        }
        if(result.length===1&&result[0].alias===req.body.alias){
            return res.cc('分类别名被占用');
        }
        const sql=`insert into ev_article_cate set ?`;
        db.query(sql,req.body,(err,result)=>{
            if(err){
                return res.cc(err);
            }
            if(result.affectedRows!==1){
                return res.cc('新增文章分类失败');
            }
            res.send({
                status:0,
                message:'新增文章分类成功',
                data:result
            })
        })
    })
}
exports.deleteCateById=(req,res)=>{
    const sql=`select * from ev_article_cate where is_delete=1 && id=?`;
    db.query(sql,req.params.id,(err,result)=>{
        if(err){
            return res.cc(err);
        }
        if(result.length===1){
            return res.cc('数据不存在');
        }
        const sql=`update ev_article_cate set is_delete=1 where id=?`;
        db.query(sql,req.params.id,(err,result)=>{
            if(err){
                return res.cc(err);
            }
            if(result.affectedRows!==1){
                return res.cc('删除文章分类失败');
            }
            res.cc('删除文章分类成功')
        })
    })
    
}
exports.getArtCateById=(req,res)=>{
    const sql=`select * from ev_article_cate where id=?`;
    db.query(sql,req.params.id,(err,result)=>{
        if(err){
            return res.cc(err);
        }
        if(result.length!==1){
            return res.cc('查找不到用户');
        }
        res.send({
            status:0,
            message:'查询成功',
            data:result[0]
        })
    })
}
exports.updateCateById=(req,res)=>{
    const sql=`select * from ev_article_cate where id!=? and (name=? or alias=?)`;
    db.query(sql,[req.params.id,req.body.name,req.body.alias],(err,result)=>{
        if(err){
            return res.cc(err);
        }
        if(result.length>=2){
            return res.cc('分类名称或别名被占用，请更换后重试！');
        }
        if(result.length===1&&result[0].name===req.body.name&&result[0].alias===req.body.alias){
            return res.cc('分类名称和分类别名被占用');
        }
        if(result.length===1&&result[0].name===req.body.name){
            return res.cc('分类名称被占用');
        }
        if(result.length===1&&result[0].alias===req.body.alias){
            return res.cc('分类别名被占用');
        }
        const sql=`update ev_article_cate set ? where id=?`;
        db.query(sql,[req.body,req.params.id],(err,result)=>{
            if(err){
                return res.cc(err);
            }
            if(result.affectedRows!==1){
                return res.cc('数据更新失败');
            }
            res.cc('数据更新成功');
        })
    })
}