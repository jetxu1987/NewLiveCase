var tpl_area_toolbtn = [
'<a href="javascript:void(0);" class="u-toolBtn" type="{{ type }}" title="{{ title }}" style="display: block;">',
	'<div class="u-toolBtn-wrap"> <i class="icon-x20 com-img com-img-left" style="background-image: url(&quot;{{ icon }}&quot;);"></i>',
		'<p>{{ text }}</p>',
	'</div>',
	'{{ if list != null }}',
	'<ul class="u-toolBtn-list" style="display: none;">',
		'{{ each list as value i }}',
		'<li class="u-toolBtn-{{ value.type }}">{{ value.text }}</li>',
		'{{ /each }}',
	'</ul>',
	'{{ /if }}',
'</a>'
].join('');

mainModule.directive("navigationArea", ['$rootScope', '$compile', 'pageService', function ($rootScope, $compile, pageService) {
    return {
        restrict: "A",
        templateUrl: "tpls/navigationArea.html",
        replace: true,
        link: function (scope, element, attrs) {
        	var toolBottons = constants.navigationArea.toolBottons;
        	var toolBtnPanel = $(".c-toolBar>.c-toolPanel-left", element);
        	var $nav2Coms = $("#nav2Coms", element);
        	var $nav2effect = $(".u-toolBtn-effect", element);
        	var $nav2music = $(".u-tool-music", element);
        	var $btnSave = $(".c-toolPanel-right.c-nav-right .u-toolBtn:eq(0)", element);
        	var $btnPreview = $(".c-toolPanel-right.c-nav-right .u-toolBtn:eq(1)", element);
        	var $btnRelease = $(".c-toolPanel-right.c-nav-right .u-toolBtn:eq(2)", element);
        	var $btnUndo = $(".c-toolPanel-right:last .u-toolBtn:eq(0)", element);
        	var $btnRedo = $(".c-toolPanel-right:last .u-toolBtn:eq(1)", element);

        	function initView() {
        		angular.forEach(toolBottons, function (data, index, array) { 
	        		var $toolbtn = $(template.compile(tpl_area_toolbtn)(data));
	        		$toolbtn.insertBefore($nav2Coms);
	        	});
        	}

        	function initEvent() {
        		$(".u-toolBtn:eq(0)", toolBtnPanel).on('click', function (e) {
        			alert('');
        		});

        		$(".u-toolBtn:eq(1)", toolBtnPanel).on('click', function (e) {
        			alert('');
        		});

        		$(".u-toolBtn:eq(2)", toolBtnPanel).on('click', function (e) {
        			var $ul = $("ul", this);
        			$ul.toggle();
        		});

        		$(".u-toolBtn:eq(2) ul li", toolBtnPanel).on('click', function (e) {
        			var index = $(".u-toolBtn:eq(2) ul li", toolBtnPanel).index(this);
        			alert(index);
        		});

        		$nav2Coms.on('click', function (e) {
        			var dom = $("body>.g-coms");

        			if(dom.hasClass("z-hide")){ 
        				dom.removeClass();
        				dom.addClass("g-coms");
        			}else{
        				dom.removeClass();
        				dom.addClass("g-coms");
        				dom.addClass("z-hide");
        			}
        		});

        		$nav2effect.on('click', function (e) {
        			var dom = $("body>.g-coms");
        			alert('nav2effect');
        		});

        		$nav2music.on('click', function (e) { 
        			var $dlgAudio = $compile('<div audio-dialog></div>')(scope);
        			var $cover = $('<div class="g-cover"></div>');

        			$("body").append($cover);
        			$("body").append($dlgAudio);
        			$cover.on("click", function (e) {
        				$cover.remove();
        				$dlgAudio.remove();
        			});
        		});

        		$btnSave.on('click', function (e) {
        			alert('btnSave');
        		});

        		$btnPreview.on('click', function (e) {
        			var $dlgPreview = $compile('<div preview-dialog></div>')(scope);
        			var $cover = $('<div class="g-cover"></div>');

        			$("body").append($cover);
        			$("body").append($dlgPreview);
        			$cover.on("click", function (e) {
        				$cover.remove();
        				$dlgPreview.remove();
        			});
        		});

        		$btnRelease.on('click', function (e) {
        			alert('btnRelease');
        		});

        		$btnUndo.on('click', function (e) {
        			//icon-x30 x30-undo-hover icon-x30-undo-disabled x30-undo-disabled-hover
        			alert('btnUndo');
        		});

        		$btnRedo.on('click', function (e) {
        			//icon-x30 x30-redo-hover icon-x30-redo-disabled x30-redo-disabled-hover
        			alert('btnRedo');
        		});
        	}

        	initView();
        	initEvent();
        }
    }
}]);
