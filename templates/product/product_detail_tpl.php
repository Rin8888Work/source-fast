<div class="grid-pro-detail w-clear">
   <div class="container">
      <div class="row-d clearfix">
         <div class="clearfix">
            <div class="left-pro-detail w-clear overflow-hidden">
               <a id="Zoom-1 " class="MagicZoom mb-5" data-options="zoomMode: off; hint: off; rightClick: true; selectorTrigger: hover; expandCaption: false; history: false;" href="<?=WATERMARK?>/product/540x540x1/<?=UPLOAD_PRODUCT_L.$row_detail['photo']?>" title="<?=$row_detail['ten'.$lang]?>"><img onerror="this.src='<?=THUMBS?>/540x540x2/assets/images/noimage.png';" src="<?=WATERMARK?>/product/540x540x1/<?=UPLOAD_PRODUCT_L.$row_detail['photo']?>" alt="<?=$row_detail['ten'.$lang]?>"></a>
               <?php if($hinhanhsp) { if(count($hinhanhsp) > 0) { ?>
                  <div class="gallery-thumb-pro mt-2 d-inline-flex">
                     <div class="regular1 slider custom">
                        <p class="control-carousel prev-carousel prev-thumb-pro transition ">
                           <i class="fas fa-chevron-left"></i></p>
                           <div class="owl-carousel owl-theme owl-thumb-pro">
                              <a class="thumb-pro-detail" data-zoom-id="Zoom-1" href="<?=WATERMARK?>/product/540x540x1/<?=UPLOAD_PRODUCT_L.$row_detail['photo']?>" title="<?=$row_detail['ten'.$lang]?>"><img onerror="this.src='<?=THUMBS?>/540x540x2/assets/images/noimage.png';" src="<?=WATERMARK?>/product/540x540x1/<?=UPLOAD_PRODUCT_L.$row_detail['photo']?>" alt="<?=$row_detail['ten'.$lang]?>"></a>
                              <?php foreach($hinhanhsp as $v) { ?>
                                 <a class="thumb-pro-detail" data-zoom-id="Zoom-1" href="<?=WATERMARK?>/product/540x540x1/<?=UPLOAD_PRODUCT_L.$v['photo']?>" title="<?=$row_detail['ten'.$lang]?>">
                                    <img onerror="this.src='<?=THUMBS?>/540x540x2/assets/images/noimage.png';" src="<?=WATERMARK?>/product/540x540x1/<?=UPLOAD_PRODUCT_L.$v['photo']?>" alt="<?=$row_detail['ten'.$lang]?>">
                                 </a>
                              <?php } ?>
                           </div>
                           <p class="control-carousel next-carousel next-thumb-pro transition"><i class="fas fa-chevron-right"></i></p>
                        </div>
                     </div>
                  <?php } } ?>
               </div>
               <div class="right-pro-detail w-clear">
                  <p class="title-pro-detail"><?=$row_detail['ten'.$lang]?></p>
                  <div class="social-plugin social-plugin-pro-detail w-clear">
                     <div class="addthis_inline_share_toolbox_qj48"></div>
                     <div class="zalo-share-button" data-href="<?=$func->getCurrentPageURL()?>" data-oaid="<?=($optsetting['oaidzalo']!='')?$optsetting['oaidzalo']:'579745863508352884'?>" data-layout="1" data-color="blue" data-customize=false></div>
                  </div>
                  <div class="desc-pro-detail"><?=(isset($row_detail['mota'.$lang]) && $row_detail['mota'.$lang] != '') ? htmlspecialchars_decode($row_detail['mota'.$lang]) : ''?></div>
                  <ul class="attr-pro-detail">
                     <li class="w-clear">
                        <label class="attr-label-pro-detail"><?=masp?>:</label>
                        <div class="attr-content-pro-detail"><?=(isset($row_detail['masp']) && $row_detail['masp'] != '') ? $row_detail['masp'] : 0?></div>
                     </li>
                     <?php if(isset($pro_brand['id']) && $pro_brand['id'] > 0) { ?>
                        <li class="w-clear">
                           <label class="attr-label-pro-detail"><?=thuonghieu?>:</label>
                           <div class="attr-content-pro-detail"><a class="text-decoration-none" href="<?=$pro_brand[$sluglang]?>" title="<?=$pro_brand['ten'.$lang]?>"><?=$pro_brand['ten'.$lang]?></a></div>
                        </li>
                     <?php } ?>
                     <li class="w-clear">
                        <label class="attr-label-pro-detail"><?=gia?>:</label>
                        <div class="attr-content-pro-detail">
                           <?php if($row_detail['giamoi']) { ?>
                              <span class="price-new-pro-detail"><?=$func->format_money($row_detail['giamoi'])?></span>
                              <span class="price-old-pro-detail"><?=$func->format_money($row_detail['gia'])?></span>
                           <?php } else { ?>
                              <span class="price-new-pro-detail"><?=($row_detail['gia']) ? $func->format_money($row_detail['gia']) : lienhe?></span>
                           <?php } ?>
                        </div>
                     </li>
                     <li class="w-clear">
                        <label class="attr-label-pro-detail d-block"><?=mausac?>:</label>
                        <div class="attr-content-pro-detail d-block">
                           <?php for($i=0;$i<count($mau);$i++) { ?>
                              <?php if($mau[$i]['loaihienthi']==1) { ?>
                                 <a class="color-pro-detail text-decoration-none" data-idpro="<?=$row_detail['id']?>">
                                    <input style="background-image: url(<?=UPLOAD_COLOR_L.$mau[$i]['photo']?>)" type="radio" value="<?=$mau[$i]['id']?>" name="color-pro-detail">
                                 </a>
                              <?php } else { ?>
                                 <a class="color-pro-detail text-decoration-none" data-idpro="<?=$row_detail['id']?>">
                                    <input style="background-color: #<?=$mau[$i]['mau']?>" type="radio" value="<?=$mau[$i]['id']?>" name="color-pro-detail">
                                 </a>
                              <?php } ?>
                           <?php } ?>
                        </div>
                     </li>
                     <li class="w-clear">
                        <label class="attr-label-pro-detail d-block"><?=kichthuoc?>:</label>
                        <div class="attr-content-pro-detail d-block">
                           <?php for($i=0;$i<count($size);$i++) { ?>
                              <a class="size-pro-detail text-decoration-none">
                                 <input type="radio" value="<?=$size[$i]['id']?>" name="size-pro-detail">
                                 <?=$size[$i]['ten'.$lang]?>
                              </a>
                           <?php } ?>
                        </div>
                     </li>
                     <li class="w-clear">
                        <label class="attr-label-pro-detail d-block"><?=soluong?>:</label>
                        <div class="attr-content-pro-detail d-block">
                           <div class="quantity-pro-detail">
                              <span class="quantity-minus-pro-detail">-</span>
                              <input type="number" class="qty-pro" min="1" value="1" readonly />
                              <span class="quantity-plus-pro-detail">+</span>
                           </div>
                        </div>
                     </li>
                     <li class="w-clear">
                        <label class="attr-label-pro-detail"><?=luotxem?>:</label>
                        <div class="attr-content-pro-detail"><?=$row_detail['luotxem']?></div>
                     </li>
                  </ul>
                  <div class="cart-pro-detail flex-ct-sb">
                     <button class="transition addcart" id="add-cart" data-name="<?=$row_detail['ten'.$lang]?>" data-id="<?=$row_detail['id']?>" data-action="addnow">
                        <span>Thêm vào giỏ</span>
                        <strong>Thêm sản phẩm vào giỏ</strong>
                     </button>
                     <button class="transition addcart" id="add-cart-now" data-name="<?=$row_detail['ten'.$lang]?>" data-id="<?=$row_detail['id']?>" data-action="buynow">
                        <span>Mua ngay</span>
                        <strong>Thanh toán khi nhận hàng</strong>
                     </button>
                  </div>
               </div>
               <div class="clear"></div>
               <div class="tags-pro-detail w-clear">
                  <?php if(isset($pro_tags) && count($pro_tags) > 0) { foreach($pro_tags as $v) { ?>
                     <a class="transition text-decoration-none w-clear" href="<?=$v[$sluglang]?>" title="<?=$v['ten'.$lang]?>"><i class="fas fa-tags"></i><?=$v['ten'.$lang]?></a>
                  <?php } } ?>
               </div>
               <div class="tabs-pro-detail pt-2">
                  <ul class="ul-tabs-pro-detail w-clear">
                     <li class="active transition" data-tabs="info-pro-detail"><?=thongtinsanpham?></li>
                     <li class="transition" data-tabs="commentfb-pro-detail"><?=binhluan?></li>
                  </ul>
                  <div class="content-tabs-pro-detail info-pro-detail active"><?=(isset($row_detail['noidung'.$lang]) && $row_detail['noidung'.$lang] != '') ? htmlspecialchars_decode($row_detail['noidung'.$lang]) : ''?></div>
                  <div class="content-tabs-pro-detail commentfb-pro-detail">
                     <div class="fb-comments" data-href="<?=$func->getCurrentPageURL()?>" data-numposts="3" data-colorscheme="light" data-width="100%"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="content-main w-clear">
      <div class="container">
         <div class="row">
          <div class="global-title">
            <h2><?=sanphamcungloai?></h2>
            <div class="clearfix"></div>
         </div>
      </div>

      <div class="row">
         <div class="row">


            <div class="clearfix"></div>
            <?php if(count($product)>0){ ?>
               <?php 
               $i=0;
               foreach($product as $k=>$v){
                 $i++;
                 $func->showProduct($v,array(),$i);

              }

              ?>
           <?php }else{ ?>
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