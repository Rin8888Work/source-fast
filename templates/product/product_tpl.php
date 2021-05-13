
<div class="content-main w-clear">
    <div class="container">
        <div class="global-title"><h2><?=(@$title_cat!='')?$title_cat:@$title_crumb?></h2><div class="clearfix"></div></div><div class="clearfix"></div>
        <div class="row">
          
                <?php 

                $i=0;
                foreach($product as $k=>$v){
                    $i++;
                    $func->showProduct($v,array(),$i);

                }

                ?>
           
        </div>
        <div class="clear"></div>
        <div class="pagination-home"><?=(isset($paging) && $paging != '') ? $paging : ''?></div>
    </div>

    
</div>