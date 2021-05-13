<footer class="">
   <div id="content-footer">
      <div class="container">
         <div class="row">
            <div class="col-12 col-sm-12 col-md-3">
               <?=htmlspecialchars_decode($footer['noidung'.$lang])?>
            </div>
            <div class="col-12 col-sm-12 col-md-3">
               <div class="title">Chính sách</div>
               <div class="item-ft"><a>+ Hướng dẫn mua hàng</a></div>
               <div class="item-ft"><a>+ Hướng dẫn mua hàng</a></div>
               <div class="item-ft"><a>+ Hướng dẫn mua hàng</a></div>
            </div>
            <div class="col-12 col-sm-12 col-md-3">
               <h2 class="title-footer"><?=dangkynhantin?></h2>
               <p class="slogan-newsletter"><?=slogandangkynhantin?></p>
               <form class="form-newsletter validation-newsletter" novalidate method="post" action="" enctype="multipart/form-data">
                  <div class="newsletter-input">
                     <input type="email" class="form-control" id="email-newsletter" name="email-newsletter" placeholder="<?=nhapemail?>" required />
                     <div class="invalid-feedback"><?=vuilongnhapdiachiemail?></div>
                  </div>
                  <div class="newsletter-button">
                     <input type="submit" name="submit-newsletter" value="<?=gui?>" disabled>
                     <input type="hidden" name="recaptcha_response_newsletter" id="recaptchaResponseNewsletter">
                  </div>
               </form>
            </div>
            <div class="col-12 col-sm-12 col-md-3">
               <div class="title">Chính sách</div>
               <div class="item-ft"><a>+ Hướng dẫn mua hàng</a></div>
               <div class="item-ft"><a>+ Hướng dẫn mua hàng</a></div>
               <div class="item-ft"><a>+ Hướng dẫn mua hàng</a></div>
               <ul class="social social-header">
                  <?php for($i=0;$i<count($social1);$i++) { ?>
                     <li><a href="<?=$social1[$i]['link']?>" target="_blank"><img src="<?=UPLOAD_PHOTO_L.$social1[$i]['photo']?>" alt="<?=$social1[$i]['ten'.$lang]?>"></a></li>
                  <?php } ?>
               </ul>
            </div>
         </div>
      </div>
   </div>
   <?=$addons->setAddons('messages-facebook', 'messages-facebook', 10);?>
</footer>
<section class="copyright">
   <div class="container">
      <div class="row">
         <div class="col-12 col-md-7">
            <p class="copyright">2020 Copyright Sneaker Shoes. Design by Nina.vn</p>
         </div>
         <div class="col-12 col-md-5">
            <p class="statistic">
               <span>Online: <?=$online?></span>
               <span><?=homnay?>: <?=$counter['today']?></span>
               <span><?=homqua?>: <?=$counter['yesterday']?></span>
               <span><?=trongtuan?>: <?=$counter['week']?></span>
               <span><?=trongthang?>: <?=$counter['month']?></span>
               <span><?=tongtruycap?>: <?=$counter['total']?></span>
            </p>
         </div>
      </div>
   </div>
</section>
<?php if($com!='gio-hang') { ?>
<a class="cart-fixed text-decoration-none" href="gio-hang" title="Giỏ hàng">
<i class="fas fa-shopping-bag"></i>
<span class="count-cart"><?=(isset($_SESSION['cart'])) ? count($_SESSION['cart']) : 0?></span>
</a>
<?php } ?>
  <a class="btn-zalo btn-frame text-decoration-none" target="_blank" href="https://zalo.me/<?=preg_replace('/[^0-9]/','',$optsetting['zalo']);?>">
    <div class="animated infinite zoomIn kenit-alo-circle"></div>
    <div class="animated infinite pulse kenit-alo-circle-fill"></div>
    <i><img src="assets/images/zl.png" alt="Zalo"></i>
</a>
<a class="btn-phone btn-frame text-decoration-none" href="tel:<?=preg_replace('/[^0-9]/','',$optsetting['hotline']);?>">
    <div class="animated infinite zoomIn kenit-alo-circle"></div>
    <div class="animated infinite pulse kenit-alo-circle-fill"></div>
    <i><img src="assets/images/hl.png" alt="Hotline"></i>
</a>