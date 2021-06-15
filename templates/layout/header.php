<header class="rel">
	<div class="wrap-top">
		<div class="container  rel">
			<div class='row'>
				<div class=" col-12 col-md-3 col-sm-6 ">
					<a href="" title="Home"><img onerror="this.src='<?=THUMBS?>/120x100x2/assets/images/noimage.png';" src="<?=THUMBS?>/120x100x2/<?=UPLOAD_PHOTO_L.$logo['photo']?>"/></a>
				</div>
				<div class="col-md-6 col-sm-6 col-xs-12" >
					<div class="pull-right">
						<div id="lang-bar">
							<a href="ngon-ngu/vi/"><img src="assets/images/vi.jpg" alt="Tiếng Việt"></a>
							<a href="ngon-ngu/en/"><img src="assets/images/en.jpg" alt="Tiếng Anh"></a>
						</div>
						<div class="hotline-social">
							<div class="hotline">
								<span> 
									<?=$optsetting['hotline']?>
								</span>
								
							</div>
						</div>
					</div>
					
				</div>
				<div class="col-md-3 col-sm-6 col-xs-12" >
					<?php if(array_key_exists($login_member, $_SESSION) && $_SESSION[$login_member]['active'] == true) { ?>
						<div class="group-header">
							<a href="javascript:void(0);" id="dropdownMenuButton">
								<span>Hi, <?=$_SESSION[$login_member]['ten']?></span>
								<i class="fas fa-angle-down"></i>
							</a>
							<ul  class="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<li><a class="dropdown-item" href="account/tai-khoan">Tài khoản</a></li>
								<li><a class="dropdown-item" href="account/dang-tin">Đăng tin BĐS</a></li>
								<li><a class="dropdown-item" href="account/tin-dang">BĐS của tôi</a></li>
								<li><a class="dropdown-item" href="account/don-hang">Đơn hàng của tôi</a></li>
								
								<li><a class="dropdown-item" href="javascript:;" onclick="$('#popup-user-change-pass').modal('show');">Đổi mật khẩu</a></li>
								<li><a id="sign-out" class="dropdown-item" href="account/dang-xuat">Đăng xuất</a></li>
							</ul>
							
						</div>
					<?php } else { ?>
						<div class="user-header">
							<a href="javascript:void(0)" data-toggle="modal"  data-target="#popup-login">
								<i class="fas fa-sign-in-alt"></i>
								<span><?=dangnhap?></span>
							</a>
							<a href="javascript:void(0);" onclick="$('#popup-login').modal('hide'); $('#popup-signup').modal('show');">
								<i class="fas fa-user-plus"></i>
								<span><?=dangky?></span>
							</a>
						</div>
					<?php } ?>
				</div>
				
				<!-- reponsive -->

				<div class="clearfix"></div>
			</div>
		</div>
	</div>
	<div class="clearfix"></div>
	<?php include TEMPLATE . "layout/menu.php" ?>
</header>


