<?php if(count($pronb)) { ?>
	<div class="wrap-product wrap-content">
		<div class="title-main"><span>Sản phẩm nổi bật</span></div>
		<div class="paging-product"></div>
	</div>
<?php } ?>

<?php if(count($splistnb)) { foreach($splistnb as $vlist) { ?>
	<div class="wrap-product wrap-content">
		<div class="title-main"><span><?=$vlist['ten'.$lang]?></span></div>
		<div class="paging-product-category paging-product-category-<?=$vlist['id']?>" data-list="<?=$vlist['id']?>"></div>
	</div>
<?php } } ?>

<section id="section-product">
	<div class="container">
		<div class="row-d" >
			<div class="global-title"><h2>Sản phẩm nổi bật</h2><div class="clearfix"></div></div><div class="clearfix"></div>
			<div class="row clearfix">
				<?php 

				$i=0;
				foreach($product_nb as $k=>$v){
					$i++;
					$func->showProduct($v,array(),$i);

				}

				?>
			</div>
		</div><!-- end row -->
	</div><!-- end container -->
	
</section>
<!-- end section section-block-envi -->