$(document).ready(function(){
    var headerHtml = "";
    headerHtml += "<div class=\"header\">";
headerHtml += "			<div class=\"shortcut clearfix\">";
headerHtml += "				<ul class=\"logRegister fl\">";
headerHtml += "					<li><span id=\"welcome\" class=\"welcome\">欢迎来到<a class=\"company\" href=\"./index.html\">万物互联!</a></span></li>";
headerHtml += "					<li>";
headerHtml += "						<a id=\"login\" class=\"login\" href=\"\">[登陆]</a>";
headerHtml += "					</li>";
headerHtml += "					<li>";
headerHtml += "						<a id=\"register\" class=\"register\" href=\"\">[注册]</a>";
headerHtml += "					</li>";
headerHtml += "				</ul>";
headerHtml += "				<ul class=\"language  fr\">";
headerHtml += "					<li class=\"language-zh\" style=\"margin-right: 18px;\">";
headerHtml += "						<a id=\"zh\" class=\"zh\" href=\"\"><i></i><span id=\"cnLang\" style=\"margin-left: 28px;\">中文</span></a>";
headerHtml += "					</li>";
headerHtml += "					<li class=\"language-en\">";
headerHtml += "						<a id=\"en\" class=\"en\" href=\"./en/index.html\"><i></i><span id=\"enLang\" style=\"margin-left: 28px;\">English</span></a>";
headerHtml += "					</li>";
headerHtml += "				</ul>";
headerHtml += "			</div>";
headerHtml += "		</div> ";
headerHtml += "		<div class=\"logoSearch clearfix\" >";
headerHtml += "			<div  class=\"fl logo\"><a href=\"./index.html\"><img src=\"./static/images/logo.png\"></a></div>";
headerHtml += "			<div class=\"searchBox fr\">";
headerHtml += "				<input type=\"text\" class=\"searchInput\" />";
headerHtml += "				<button type=\"submit\" name=\"\" class=\"searchBtn\" value=\"搜索\" />搜索</button>";
headerHtml += "			</div>";
headerHtml += "		</div>";
headerHtml += "		<div class=\"adBanner\" style=\"width:100%\">";
headerHtml += "			<div class=\"ad\">";
headerHtml += "				<div class=\"owl-carousel owl-theme\">";
headerHtml += "					<div class=\"item\">";
headerHtml += "						<picture>";
headerHtml += "							<source srcset=\"./static/images/slider/a1.png\" media=\"(min-width:50em)\">";
headerHtml += "							<source srcset=\"./static/images/slider/a1.png\" media=\"(min-width:30em)\">";
headerHtml += "							<img src=\"./static/images/slider/a1.png\" alt=\"\">";
headerHtml += "						</picture>";
headerHtml += "					</div>";
headerHtml += "					<div class=\"item\">";
headerHtml += "						<picture>";
headerHtml += "							<source srcset=\"./static/images/slider/a2.png\" media=\"(min-width: 50em)\">";
headerHtml += "							<source srcset=\"./static/images/slider/a2.png\" media=\"(min-width: 30em)\">";
headerHtml += "							<img srcset=\"./static/images/slider/a2.png\" alt=\"\">";
headerHtml += "						</picture>";
headerHtml += "					</div>";
headerHtml += "					<div class=\"item\">";
headerHtml += "						<picture>";
headerHtml += "							<source srcset=\"./static/images/slider/a3.png\" media=\"(min-width: 50em)\">";
headerHtml += "							<source srcset=\"./static/images/slider/a3.png\" media=\"(min-width: 30em)\">";
headerHtml += "							<img srcset=\"./static/images/slider/a3.png\" alt=\"\">";
headerHtml += "						</picture>";
headerHtml += "					</div>";
headerHtml += "					<div class=\"item\">";
headerHtml += "						<picture>";
headerHtml += "							<source srcset=\"./static/images/slider/a4.png\" media=\"(min-width: 50em)\">";
headerHtml += "							<source srcset=\"./static/images/slider/a4.png\" media=\"(min-width: 30em)\">";
headerHtml += "							<img srcset=\"./static/images/slider/a4.png\" alt=\"\">";
headerHtml += "						</picture>";
headerHtml += "					</div>";
headerHtml += "				</div>";
headerHtml += "			</div>";
headerHtml += "		</div>";
    var divObj = document.createElement("div"); 
    divObj.className = 'headerHtml';
    divObj.innerHTML = headerHtml;
    var first = document.body.firstChild;
    document.body.insertBefore(divObj, first);

    var footerHtml = 
    '<ul class="clearfix">' + '<li><span><i class="fa0 fa0-copyright0"></i></span></li>' +
    	 '<li><span id="year" class="year">Copyright &nbsp;&copy;&nbsp;2017&nbsp;-&nbsp;2020&nbsp;</span></li>' + 
    	 '<li><span id="companyName" class="companyName">深圳万物互联信息科技有限公司&nbsp;&nbsp;版权所有&nbsp;&nbsp;</span></li>'+
    '</ul>';
    
    var divObj = document.createElement("div");
    divObj.className = 'footer';
    divObj.innerHTML = footerHtml;
    var last = document.body.lastChild;
    document.body.insertBefore(divObj, last);
});