<!-- Js Config -->
<script type="text/javascript">
    var NN_FRAMEWORK = NN_FRAMEWORK || {};
    var CONFIG_BASE = '<?=$config_base?>';
    var WEBSITE_NAME = '<?=(isset($setting['ten'.$lang]) && $setting['ten'.$lang] != '') ? $setting['ten'.$lang] : ''?>';
    var TIMENOW = '<?=date("d/m/Y",time())?>';
    var SHIP_CART = <?=(isset($config['order']['ship']) && $config['order']['ship'] == true) ? 'true' : 'false'?>;
    var GOTOP = 'assets/images/top.png';
    var LANG = {
        'no_keywords': '<?=chuanhaptukhoatimkiem?>',
        'delete_product_from_cart': '<?=banmuonxoasanphamnay?>',
        'no_products_in_cart': '<?=khongtontaisanphamtronggiohang?>',
        'wards': '<?=phuongxa?>',
        'back_to_home': '<?=vetrangchu?>',
    };
    var messages = {
        home_value:"Giá trị không được rỗng",
        login_email_empty:"Email không được để trống",
        login_email_sai_dinh_dang:"Email  sai định dạng",
        login_password_quy_dinh:"Mật khẩu chỉ có thể bao gồm bảng chữ cái, số và dấu gạch dưới",
        register_username:"Vui lòng nhập Họ và Tên",
        register_phone:"Số điện thoại không được rỗng",
        register_phone_Length:"Số điện thoại bắt buộc 10 số </br>",
        register_phone_quy_dinh:"Số điện thoại chỉ chứa các chữ số",
        register_email_empty:"Email không được để trống",
        register_email_sai_dinh_dang:"Email  sai định dạng",
        register_password_empty:"Mật khẩu là bắt buộc và không được để trống",
        register_password_different_email:"Mật khẩu không được giống với email người dùng",
        register_password_quy_dinh:"Mật khẩu phải có ít nhất 8 ký tự",
        change_password_old:"Vui lòng nhập mật khẩu cũ của bạn",
        change_password_new:"Vui lòng nhập mật khẩu mới",
        change_password_new_xn:"Vui lòng nhập xác nhận mật khẩu",
    };
    var messagesbds = {
        home_value:"Giá trị không được rỗng",
        bds_ten:"Vui lòng nhập tên sản phẩm",
        bds_ten_toida:"Tên sản phẩm phải lớn hơn 10 ký tự",
        bds_tinh:"Vui lòng chọn Tỉnh/Thành",
        bds_quan:"Vui lòng chọn Quận/Huyện",
        bds_xa:"Vui lòng chọn Phường/Xã",
        bds_sonha:"Vui lòng nhập số nhà",
        bds_diachi:"Vui lòng nhập địa chỉ",
        bds_dongy:"Vui lòng chọn điều khoản đăng ký",
        
    };
</script>

<!-- Js Files -->
<?php
    $js->setCache("cached");
    $js->setJs("./assets/js/jquery.min.js");
    $js->setJs("./assets/bootstrap/bootstrap.js");
    $js->setJs("./assets/js/wow.min.js");
    $js->setJs("./assets/simplyscroll/jquery.simplyscroll.min.js");
    $js->setJs("./assets/magiczoomplus/magiczoomplus.js");
    $js->setJs("./assets/bootstrapvalidator-0.5.2/dist/js/bootstrapValidator.min.js");
    $js->setJs("./assets/jQuery.filer-1.3.0/js/jquery.filer.min.js");
    //$js->setJs("./assets/slick/slick.js");
    
    $js->setJs("./assets/photobox/photobox.js");
    $js->setJs("./assets/owlcarousel2/owl.carousel.js");
    $js->setJs("./assets/fancybox3/jquery.fancybox.js");
    $js->setJs("./assets/toc/toc.js");
    $js->setJs("./assets/js/functions.js");
    $js->setJs("./assets/jssor/js/jssor.slider.min.js");
    $js->setJs("./assets/js/apps.js");
    echo $js->getJs();
?>

<?php if(isset($config['googleAPI']['recaptcha']['active']) && $config['googleAPI']['recaptcha']['active'] == true) { ?>
    <!-- Js Google Recaptcha V3 -->
    <script src="https://www.google.com/recaptcha/api.js?render=<?=$config['googleAPI']['recaptcha']['sitekey']?>"></script>
    <script type="text/javascript">
        grecaptcha.ready(function () {
            
            <?php if($source=='contact') { ?>
                grecaptcha.execute('<?=$config['googleAPI']['recaptcha']['sitekey']?>', { action: 'contact' }).then(function (token) {
                    var recaptchaResponseContact = document.getElementById('recaptchaResponseContact');
                    recaptchaResponseContact.value = token;
                });
            <?php } ?>
             <?php if($com=='the-chap') { ?>
                grecaptcha.execute('<?=$config['googleAPI']['recaptcha']['sitekey']?>', { action: 'TheChap' }).then(function (token) {
                var recaptchaResponsevaytien = document.getElementById('recaptchaResponsevaytien');
                recaptchaResponsevaytien.value = token;
            });
            <?php } ?>
        });
    </script>
<?php } ?>

<?php if(isset($config['oneSignal']['active']) && $config['oneSignal']['active'] == true) { ?>
    <!-- Js OneSignal -->
    <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
    <script type="text/javascript">
        var OneSignal = window.OneSignal || [];
        OneSignal.push(function() {
            OneSignal.init({
                appId: "<?=$config['oneSignal']['id']?>"
            });
        });
    </script>
<?php } ?>

<!-- Js Structdata -->
<?php include TEMPLATE.LAYOUT."strucdata.php"; ?>

<!-- Js Addons -->
<?=$addons->setAddons('script-main', 'script-main', 0.5);?>
<?=$addons->getAddons();?>

<!-- Js Body -->
<?=htmlspecialchars_decode($setting['bodyjs'])?>