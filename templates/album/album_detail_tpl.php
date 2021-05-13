<div class="wrap-content clearfix">
	<div class="container">
		<div class="row">
			<div class="clearfix">
				 <div class="global-title"><h2><?=$row_detail['ten'.$lang]?></h2><div class="clearfix"></div></div><div class="clearfix"></div>
				
				<div class="content-main album-gallery w-clear">
					<?php if(count($hinhanhsp)>0) { for($i=0;$i<count($hinhanhsp);$i++) { ?>
						<a class="album text-decoration-none" rel="album-<?=$row_detail['id']?>" href="<?=UPLOAD_PRODUCT_L.$hinhanhsp[$i]['photo']?>" title="<?=$row_detail['ten'.$lang]?>">
							<p class="pic-album scale-img"><img onerror="this.src='<?=THUMBS?>/480x360x2/assets/images/noimage.png';" src="<?=THUMBS?>/480x360x1/<?=UPLOAD_PRODUCT_L.$hinhanhsp[$i]['photo']?>" alt="<?=$row_detail['ten'.$lang]?>"/></p>
						</a>
					<?php } } else { ?>
						<div class="alert alert-warning" role="alert">
							<strong><?=khongtimthayketqua?></strong>
						</div>
					<?php } ?>
				</div>
			</div>
		</div>
	</div>
</div>