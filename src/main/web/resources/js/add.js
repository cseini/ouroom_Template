function addUI() {
	return '<div id="add_form" class="je_sign-in-form" >'
	+'<p id="je_font_2em" class="je_bold">회원가입</p>'
	+'        <section id="add_form_top" class="je_signup-form__social">'
	+'            <hr class="border-gray-light-more signup-form__divider">'
	+'            <p class="je_bold je_signup-form__social__title text-body-1">SNS계정으로 간편하게 회원가입</p>'
	+'            <a class="icon icon-sns-circle-md-kakao-talk je_signup-form__social__button" href="/users/auth/kakao">'
	+'					<img class="manImg" src='+$.img()+'/jieun/kakao.png ></img></a>'
	+'					<img class="manImg" src='+$.img()+'/jieun/naver.png ></img></a>'
	+'        </section>'
	+'        <hr class="border-gray-light-more">'
	+'        <section id="add_form_middle" class="signup-form__email">'
	            +'<form novalidate="novalidate" class="new_normal_user" id="new_normal_user" action="/normal_users" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="HLPM6R/2QK3v2K5H9wCB/J77MnkLmliCKOrL14WRMpimvC/ZD5cJzXEowL2QhhT1VzYlCL8Valy17QKIm45yDQ==">'
	+'                    <div class="add_email">'
	+'                        <label class="je_bold">이메일</label>'
	+'                        <div class="input-group">'
	+'							<input type="text" style="width:45%; float:right" size="7" class="form-control" id="post_email" autofocus="" autocomplete="off">'
    +'                           <span class="form-separator signup-form__email__email-at-mark" style="margin-left:5px">@&nbsp</span>'
                                +'<input type="text" style="width:45%" size="12" class="form-control" id="pre_email" autofocus="" autocomplete="off">'
	+'                        </div>'
	+'                    </div>'
	+'                    <div class="add_pass" style="padding-top:20px">'
	+'                        <label class="je_bold" for="pass">비밀번호</label>'
	+'                        <p class="p1">8자이상 영문 대 소문자, 숫자, 특수문자를 사용하세요.</p>'
	                        +'<input class="form-control" placeholder=""  required="required" type="password" id="pass">'
	+'                    </div>'
	+'                    <div class="add_pass_confirm" style="padding-top:20px">'
	+'                        <label class="je_bold" for="pass_confirm">비밀번호 확인</label></br>'
	                        +'<input class="form-control" required="required" type="password" id="pass_confirm">'
	+'                        <p class="error"></p>'
	+'                    </div>'
	+'                    <div class="add_nickname" style="padding-top:15px">'
	+'                        <label class="je_bold form-label" for="nickname">별명</label>'
	+'                        <p class="p1">'
	+'                            2~15자 자유롭게 입력해주세요.'
	+'                        </p>'
	                        +'<input class="form-control" required="required" type="text" id="nickname">'
	+'                    </div>'
	+'					</form></section>'
	+'        <button id="add_submit_btn" class="je_sign-in-form__form__submit btn je_btn-priority" type="submit" form="new_normal_user">'
	+'            회원가입하기'
	+'        </button>'
	+'        <p id="has-account">이미 아이디가 있으신가요?&nbsp<a class="je_bold underline" href="/users/sign_in">로그인</a></p>'
	+'    </section>'
	+'</section>'
	+'</div>'
}