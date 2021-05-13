<div class="global-title"><h2><?=(@$title_cat!='')?$title_cat:@$title_crumb?></h2><div class="clearfix"></div></div>
<div class="clearfix"></div>
<div class="wrap-content w-clear">
    <div class="container">
     <div class="row">


       <div class="content-main w-clear">
        <?php if(count($news)>0){ ?>
            <?php foreach ($news as $k => $v) {
               ?>
               <a class="news text-decoration-none w-clear" href="<?=$v[$sluglang]?>" title="<?=$v['ten'.$lang]?>">
                <p class="pic-news scale-img"><img onerror="this.src='<?=THUMBS?>/160x120x2/assets/images/noimage.png';" src="<?=THUMBS?>/160x120x1/<?=UPLOAD_NEWS_L.$v['photo']?>" alt="<?=$v['ten'.$lang]?>"></p>
                <div class="info-news">
                    <h3 class="name-news"><?=$v['ten'.$lang]?></h3>
                    <p class="time-news"><?=ngaydang?>: <?=date("d/m/Y h:i A",$v['ngaytao'])?></p>
                    <div class="desc-news text-split"><?=$v['mota'.$lang]?></div>
                </div>
            </a>
        <?php } } else { ?>
            <div class="alert alert-warning" role="alert">
                <strong><?=khongtimthayketqua?></strong>
            </div>
        <?php } ?>
        <div class="clear"></div>
        <div class="pagination-home"><?=(isset($paging) && $paging != '') ? $paging : ''?></div>
    </div>
</div>
</div>

</div>