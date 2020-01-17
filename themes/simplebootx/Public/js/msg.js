/**
 * Created by Administrator on 2017/6/7 0007.
 */
$('#reset').click(function () {
    $("#tel").val('');
    $("#name").val('');
    $("#qq").val('');
    $("#num").val('');
    $("#realmname").val('');
    $("#company").val('');
    $("#verifyCode").val('');

});
$("#msg_submit").click(function () {
    var $company = $.trim($("#company").val());
    var $tel = $.trim($("#tel").val());
    var $name = $.trim($("#name").val());
    var $qq = $.trim($("#qq").val());
    var $num = $.trim($("#num").val());
    var $realmname = $.trim($("#realmname").val());
    var $verifyCode = $.trim($("#verifyCode").val());
    /*if($company==''||$tel==''||$name==''){
         layer.msg('必填项不能为空');
         return false;
     }*/
	 if($("#company").val()==""||$("#company").val()==null){
                alert("公司名称不能为空!");
                return false;
            }else if($("#company").val().length!=0 && !$("#company").val().match((/^[\u4E00-\u9FA5a-zA-Z0-9,，,。,？,,,.,?]{1,250}$/))){
                alert("请输入常规公司名称!");
                $("#company").val("");
                return false;
            }
	if($("#name").val()==""||$("#name").val()==null){
                alert("姓名不能为空!");
                return false;
            }else if($("#name").val().length!=0 && !$("#name").val().match((/^[\u4E00-\u9FA5a-zA-Z0-9,，,。,？,,,.,?]{1,250}$/))){
                alert("请输入常规姓名!");
                $("#name").val("");
                return false;
            }
	if($("#tel").val()==""||$("#tel").val()==null){
                alert("电话不能为空!");
                return false;
            }else if($("#tel").val().length!=0 && !$("#tel").val().match((/^[\u4E00-\u9FA5a-zA-Z0-9,，,。,？,,,.,?]{1,250}$/))){
                alert("请输入正确的电话号码!");
                $("#tel").val("");
                return false;
            } 
	if($("#qq").val().length!=0 && !$("#qq").val().match((/^[1-9][0-9]{1,9}$/))){
		alert("请输入正确的QQ号!");
		$("#qq").val("");
        	return false;
     } 
	if($("#num").val().length!=0 && !$("#num").val().match((/^[0-9]*$/))){
		alert("请输入正确的用户数!");
		$("#num").val("");
        	return false;
     } 
	if($("#realmname").val().length!=0 && !$("#realmname").val().match((/^[\u4E00-\u9FA5a-zA-Z0-9,，,。,？,,,.,?]{1,250}$/))){
		alert("请输入正确的邮箱域名!");
		$("#num").val("");
        	return false;
     }  
    if($verifyCode ==''){
        layer.msg('验证码不能为空!');

        return false;
    }
    $.ajax({
        data:{company:$company,name:$name,tel:$tel,qq:$qq,num:$num,realmname:$realmname,verify:$verifyCode,type:'addmsg'},
        dataType:'json',
        type:'post',
        url:msg_post_url,
        success:function (data) {
            if(data.code == 200){
                layer.msg('谢谢您联系我们，我们会尽快与您联系！');
                setTimeout(function () {
                    location.reload();
                },3000)
            }else{
                layer.msg(data.message+',您重新试试？');

                imageurl = vercode_post_url+"?"+Math.random();
                $(".verifyimg").attr('src',imageurl);
                $("#verifyCode").attr("value","");
            }
        }
    });
});
function verify(){
    imageurl = vercode_post_url+"?"+Math.random();
    $(".verifyimg").attr('src',imageurl);
}
