!function(e){e.fn.bizagiScrollbar=function(t){var i=t||{},r=void 0===i.autohide||i.autohide;e.browser.webkit&&(r=!1);var a=this;r?(a.css("overflow-y","hidden"),a.hover(function(){a.css("overflow-y","auto")},function(){a.css("overflow-y","hidden")})):a.css("overflow-y","auto")}}(jQuery),function(e){e.fn.bizagiPagination=function(t){t=t||{};var i={limInf:0,totalPages:1,actualPage:1,listElement:e("ul"),first:"&lt;&lt;",firstClass:"first",prev:"&lt;",prevClass:"prev",next:"&gt;",nextClass:"next",last:"&gt;&gt;",lastClass:"last",liClass:"bz-page",arrowClass:"bz-pageArrow",selectedFocus:!0,clickCallBack:function(){}};t.actualPage>t.totalPages&&(t.actualPage=t.totalPages),e.extend(i,i,t);var r={previousPage:Math.max(1,parseInt(i.actualPage)-1),nextPage:parseInt(i.actualPage)+1};function a(t,r){var a;if(t=t||1,(r=r||0)>0)a=t;else{if(!(r<0))return;a=t-2}e.each(e("li."+i.liClass,i.listElement),function(t,r){a++,e(this).data("page",a),e(this).find("span").html(a),e(this).attr("data-page",a),i.actualPage!=a||e(this).hasClass("active")?e(this).removeClass("active"):e(this).addClass("active")}),1==e(i.listElement).find(".active").length?e(i.listElement).parent().find("#tooltipPagination").css("visibility","hidden"):e(i.listElement).parent().find("#tooltipPagination").css("visibility","visible")}!function(){var t,o,s;if(i.totalElements=e("li."+i.liClass,i.listElement[0]).length,i.totalPages>i.totalElements&&i.totalElements>1&&(t=r.previousPage==i.actualPage,o=i.actualPage==i.totalPages,i.listElement.prepend("<li/>").find("li:first").addClass(i.prevClass).addClass(t?"pagination-disabled":"").data("page",r.previousPage).html(i.prev),i.listElement.prepend("<li/>").find("li:first").addClass(i.arrowClass+" "+i.firstClass).addClass(t?"pagination-disabled":"").data("page","1").html(i.first),i.listElement.append("<li/>").find("li:last").addClass(i.nextClass).addClass(o?"pagination-disabled":"").data("page",r.nextPage).html(i.next),i.listElement.append("<li/>").find("li:last").addClass(i.arrowClass+" "+i.lastClass).addClass(o?"pagination-disabled":"").data("page",i.totalPages).html(i.last)),s={},e("li:not(.pagination-disabled)",i.listElement).click(function(){s.page=e(this).hasClass(i.lastClass)?i.totalPages:e.trim(e(this).data("page")+" "),s.parent=e(this).parent(),s.self=e(this),i.clickCallBack(s)}),i.selectedFocus&&i.actualPage>=i.totalElements&&i.totalPages>i.totalElements){var n,l=i.actualPage-Math.round(i.totalElements/2);n=l<1?1:l+i.totalElements>i.totalPages?(n=i.totalPages-i.totalElements)<1?1:n:l,0==i.listElement.find("li.active").length&&a(n,1)}}()}}(jQuery),function($){if($.ui.timepicker=$.ui.timepicker||{},!$.ui.timepicker.version){$.extend($.ui,{timepicker:{version:"1.4"}});var Timepicker=function(){this.regional=[],this.regional[""]={currentText:"Now",closeText:"Done",amNames:["AM","A"],pmNames:["PM","P"],timeFormat:"HH:mm",timeSuffix:"",timeOnlyTitle:"Choose Time",timeText:"Time",hourText:"Hour",minuteText:"Minute",secondText:"Second",millisecText:"Millisecond",microsecText:"Microsecond",timezoneText:"Time Zone",isRTL:!1},this._defaults={showButtonPanel:!0,timeOnly:!1,showHour:null,showMinute:null,showSecond:null,showMillisec:null,showMicrosec:null,showTimezone:null,showTime:!0,stepHour:1,stepMinute:1,stepSecond:1,stepMillisec:1,stepMicrosec:1,hour:0,minute:0,second:0,millisec:0,microsec:0,timezone:null,hourMin:0,minuteMin:0,secondMin:0,millisecMin:0,microsecMin:0,hourMax:23,minuteMax:59,secondMax:59,millisecMax:999,microsecMax:999,minDateTime:null,maxDateTime:null,onSelect:null,hourGrid:0,minuteGrid:0,secondGrid:0,millisecGrid:0,microsecGrid:0,alwaysSetTime:!0,separator:" ",altFieldTimeOnly:!0,altTimeFormat:null,altSeparator:null,altTimeSuffix:null,pickerTimeFormat:null,pickerTimeSuffix:null,showTimepicker:!0,timezoneList:null,addSliderAccess:!1,sliderAccessArgs:null,controlType:"slider",defaultValue:null,parse:"strict"},$.extend(this._defaults,this.regional[""])};$.extend(Timepicker.prototype,{$input:null,$altInput:null,$timeObj:null,inst:null,hour_slider:null,minute_slider:null,second_slider:null,millisec_slider:null,microsec_slider:null,timezone_select:null,hour:0,minute:0,second:0,millisec:0,microsec:0,timezone:null,hourMinOriginal:null,minuteMinOriginal:null,secondMinOriginal:null,millisecMinOriginal:null,microsecMinOriginal:null,hourMaxOriginal:null,minuteMaxOriginal:null,secondMaxOriginal:null,millisecMaxOriginal:null,microsecMaxOriginal:null,ampm:"",formattedDate:"",formattedTime:"",formattedDateTime:"",timezoneList:null,units:["hour","minute","second","millisec","microsec"],support:{},control:null,setDefaults:function(e){return extendRemove(this._defaults,e||{}),this},_newInst:function($input,opts){var tp_inst=new Timepicker,inlineSettings={},fns={},overrides,i;for(var attrName in this._defaults)if(this._defaults.hasOwnProperty(attrName)){var attrValue=$input.attr("time:"+attrName);if(attrValue)try{inlineSettings[attrName]=eval(attrValue)}catch(e){inlineSettings[attrName]=attrValue}}for(i in overrides={beforeShow:function(e,t){if($.isFunction(tp_inst._defaults.evnts.beforeShow))return tp_inst._defaults.evnts.beforeShow.call($input[0],e,t,tp_inst)},onChangeMonthYear:function(e,t,i){tp_inst._updateDateTime(i),$.isFunction(tp_inst._defaults.evnts.onChangeMonthYear)&&tp_inst._defaults.evnts.onChangeMonthYear.call($input[0],e,t,i,tp_inst)},onClose:function(e,t){!0===tp_inst.timeDefined&&""!==$input.val()&&tp_inst._updateDateTime(t),$.isFunction(tp_inst._defaults.evnts.onClose)&&tp_inst._defaults.evnts.onClose.call($input[0],e,t,tp_inst)}},overrides)overrides.hasOwnProperty(i)&&(fns[i]=opts[i]||null);tp_inst._defaults=$.extend({},this._defaults,inlineSettings,opts,overrides,{evnts:fns,timepicker:tp_inst}),tp_inst.amNames=$.map(tp_inst._defaults.amNames,function(e){return e.toUpperCase()}),tp_inst.pmNames=$.map(tp_inst._defaults.pmNames,function(e){return e.toUpperCase()}),tp_inst.support=detectSupport(tp_inst._defaults.timeFormat+(tp_inst._defaults.pickerTimeFormat?tp_inst._defaults.pickerTimeFormat:"")+(tp_inst._defaults.altTimeFormat?tp_inst._defaults.altTimeFormat:"")),"string"==typeof tp_inst._defaults.controlType?("slider"===tp_inst._defaults.controlType&&void 0===$.ui.slider&&(tp_inst._defaults.controlType="select"),tp_inst.control=tp_inst._controls[tp_inst._defaults.controlType]):tp_inst.control=tp_inst._defaults.controlType;var timezoneList=[-720,-660,-600,-570,-540,-480,-420,-360,-300,-270,-240,-210,-180,-120,-60,0,60,120,180,210,240,270,300,330,345,360,390,420,480,525,540,570,600,630,660,690,720,765,780,840];null!==tp_inst._defaults.timezoneList&&(timezoneList=tp_inst._defaults.timezoneList);var tzl=timezoneList.length,tzi=0,tzv=null;if(tzl>0&&"object"!=typeof timezoneList[0])for(;tzi<tzl;tzi++)tzv=timezoneList[tzi],timezoneList[tzi]={value:tzv,label:$.timepicker.timezoneOffsetString(tzv,tp_inst.support.iso8601)};return tp_inst._defaults.timezoneList=timezoneList,tp_inst.timezone=null!==tp_inst._defaults.timezone?$.timepicker.timezoneOffsetNumber(tp_inst._defaults.timezone):-1*(new Date).getTimezoneOffset(),tp_inst.hour=tp_inst._defaults.hour<tp_inst._defaults.hourMin?tp_inst._defaults.hourMin:tp_inst._defaults.hour>tp_inst._defaults.hourMax?tp_inst._defaults.hourMax:tp_inst._defaults.hour,tp_inst.minute=tp_inst._defaults.minute<tp_inst._defaults.minuteMin?tp_inst._defaults.minuteMin:tp_inst._defaults.minute>tp_inst._defaults.minuteMax?tp_inst._defaults.minuteMax:tp_inst._defaults.minute,tp_inst.second=tp_inst._defaults.second<tp_inst._defaults.secondMin?tp_inst._defaults.secondMin:tp_inst._defaults.second>tp_inst._defaults.secondMax?tp_inst._defaults.secondMax:tp_inst._defaults.second,tp_inst.millisec=tp_inst._defaults.millisec<tp_inst._defaults.millisecMin?tp_inst._defaults.millisecMin:tp_inst._defaults.millisec>tp_inst._defaults.millisecMax?tp_inst._defaults.millisecMax:tp_inst._defaults.millisec,tp_inst.microsec=tp_inst._defaults.microsec<tp_inst._defaults.microsecMin?tp_inst._defaults.microsecMin:tp_inst._defaults.microsec>tp_inst._defaults.microsecMax?tp_inst._defaults.microsecMax:tp_inst._defaults.microsec,tp_inst.ampm="",tp_inst.$input=$input,tp_inst._defaults.altField&&(tp_inst.$altInput=$(tp_inst._defaults.altField).css({cursor:"pointer"}).focus(function(){$input.trigger("focus")})),0!==tp_inst._defaults.minDate&&0!==tp_inst._defaults.minDateTime||(tp_inst._defaults.minDate=new Date),0!==tp_inst._defaults.maxDate&&0!==tp_inst._defaults.maxDateTime||(tp_inst._defaults.maxDate=new Date),void 0!==tp_inst._defaults.minDate&&tp_inst._defaults.minDate instanceof Date&&(tp_inst._defaults.minDateTime=new Date(tp_inst._defaults.minDate.getTime())),void 0!==tp_inst._defaults.minDateTime&&tp_inst._defaults.minDateTime instanceof Date&&(tp_inst._defaults.minDate=new Date(tp_inst._defaults.minDateTime.getTime())),void 0!==tp_inst._defaults.maxDate&&tp_inst._defaults.maxDate instanceof Date&&(tp_inst._defaults.maxDateTime=new Date(tp_inst._defaults.maxDate.getTime())),void 0!==tp_inst._defaults.maxDateTime&&tp_inst._defaults.maxDateTime instanceof Date&&(tp_inst._defaults.maxDate=new Date(tp_inst._defaults.maxDateTime.getTime())),tp_inst.$input.bind("focus",function(){tp_inst._onFocus()}),tp_inst},_addTimePicker:function(e){var t=this.$altInput&&this._defaults.altFieldTimeOnly?this.$input.val()+" "+this.$altInput.val():this.$input.val();this.timeDefined=this._parseTime(t),this._limitMinMaxDateTime(e,!1),this._injectTimePicker()},_parseTime:function(e,t){if(this.inst||(this.inst=$.datepicker._getInst(this.$input[0])),t||!this._defaults.timeOnly){var i=$.datepicker._get(this.inst,"dateFormat");try{var r=parseDateTimeInternal(i,this._defaults.timeFormat,e,$.datepicker._getFormatConfig(this.inst),this._defaults);if(!r.timeObj)return!1;$.extend(this,r.timeObj)}catch(t){return $.timepicker.log("Error parsing the date/time string: "+t+"\ndate/time string = "+e+"\ntimeFormat = "+this._defaults.timeFormat+"\ndateFormat = "+i),!1}return!0}var a=$.datepicker.parseTime(this._defaults.timeFormat,e,this._defaults);return!!a&&($.extend(this,a),!0)},_injectTimePicker:function(){var e=this.inst.dpDiv,t=this.inst.settings,i=this,r="",a="",o=null,s={},n={},l=null,c=0,d=0;if(0===e.find("div.ui-timepicker-div").length&&t.showTimepicker){var u=' style="display:none;"',p='<div class="ui-timepicker-div'+(t.isRTL?" ui-timepicker-rtl":"")+'"><dl><dt class="ui_tpicker_time_label"'+(t.showTime?"":u)+">"+t.timeText+'</dt><dd class="ui_tpicker_time"'+(t.showTime?"":u)+"></dd>";for(c=0,d=this.units.length;c<d;c++){if(o=null!==t["show"+(a=(r=this.units[c]).substr(0,1).toUpperCase()+r.substr(1))]?t["show"+a]:this.support[r],s[r]=parseInt(t[r+"Max"]-(t[r+"Max"]-t[r+"Min"])%t["step"+a],10),n[r]=0,p+='<dt class="ui_tpicker_'+r+'_label"'+(o?"":u)+">"+t[r+"Text"]+'</dt><dd class="ui_tpicker_'+r+'"><div class="ui_tpicker_'+r+'_slider"'+(o?"":u)+"></div>",o&&t[r+"Grid"]>0){if(p+='<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>',"hour"===r)for(var m=t[r+"Min"];m<=s[r];m+=parseInt(t[r+"Grid"],10)){n[r]++;var g=$.datepicker.formatTime(this.support.ampm?"hht":"HH",{hour:m},t);p+='<td data-for="'+r+'">'+g+"</td>"}else for(var f=t[r+"Min"];f<=s[r];f+=parseInt(t[r+"Grid"],10))n[r]++,p+='<td data-for="'+r+'">'+(f<10?"0":"")+f+"</td>";p+="</tr></table></div>"}p+="</dd>"}var h=null!==t.showTimezone?t.showTimezone:this.support.timezone;p+='<dt class="ui_tpicker_timezone_label"'+(h?"":u)+">"+t.timezoneText+"</dt>",p+='<dd class="ui_tpicker_timezone" '+(h?"":u)+"></dd>";var v=$(p+="</dl></div>");for(!0===t.timeOnly&&(v.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all"><div class="ui-datepicker-title">'+t.timeOnlyTitle+"</div></div>"),e.find(".ui-datepicker-header, .ui-datepicker-calendar").hide()),c=0,d=i.units.length;c<d;c++)o=null!==t["show"+(a=(r=i.units[c]).substr(0,1).toUpperCase()+r.substr(1))]?t["show"+a]:this.support[r],i[r+"_slider"]=i.control.create(i,v.find(".ui_tpicker_"+r+"_slider"),r,i[r],t[r+"Min"],s[r],t["step"+a]),o&&t[r+"Grid"]>0&&(l=100*n[r]*t[r+"Grid"]/(s[r]-t[r+"Min"]),v.find(".ui_tpicker_"+r+" table").css({width:l+"%",marginLeft:t.isRTL?"0":l/(-2*n[r])+"%",marginRight:t.isRTL?l/(-2*n[r])+"%":"0",borderCollapse:"collapse"}).find("td").click(function(e){var t=$(this),a=t.html(),o=parseInt(a.replace(/[^0-9]/g),10),s=a.replace(/[^apm]/gi),n=t.data("for");"hour"===n&&(-1!==s.indexOf("p")&&o<12?o+=12:-1!==s.indexOf("a")&&12===o&&(o=0)),i.control.value(i,i[n+"_slider"],r,o),i._onTimeChange(),i._onSelectHandler()}).css({cursor:"pointer",width:100/n[r]+"%",textAlign:"center",overflow:"hidden"}));if(this.timezone_select=v.find(".ui_tpicker_timezone").append("<select></select>").find("select"),$.fn.append.apply(this.timezone_select,$.map(t.timezoneList,function(e,t){return $("<option />").val("object"==typeof e?e.value:e).text("object"==typeof e?e.label:e)})),void 0!==this.timezone&&null!==this.timezone&&""!==this.timezone)-1*new Date(this.inst.selectedYear,this.inst.selectedMonth,this.inst.selectedDay,12).getTimezoneOffset()===this.timezone?selectLocalTimezone(i):this.timezone_select.val(this.timezone);else void 0!==this.hour&&null!==this.hour&&""!==this.hour?this.timezone_select.val(t.timezone):selectLocalTimezone(i);this.timezone_select.change(function(){i._onTimeChange(),i._onSelectHandler()});var b=e.find(".ui-datepicker-buttonpane");if(b.length?b.before(v):e.append(v),this.$timeObj=v.find(".ui_tpicker_time"),null!==this.inst){var y=this.timeDefined;this._onTimeChange(),this.timeDefined=y}if(this._defaults.addSliderAccess){var w=this._defaults.sliderAccessArgs,x=this._defaults.isRTL;w.isRTL=x,setTimeout(function(){if(0===v.find(".ui-slider-access").length){v.find(".ui-slider:visible").sliderAccess(w);var e=v.find(".ui-slider-access:eq(0)").outerWidth(!0);e&&v.find("table:visible").each(function(){var t=$(this),i=t.outerWidth(),r=t.css(x?"marginRight":"marginLeft").toString().replace("%",""),a=i-e,o=r*a/i+"%",s={width:a,marginRight:0,marginLeft:0};s[x?"marginRight":"marginLeft"]=o,t.css(s)})}},10)}i._limitMinMaxDateTime(this.inst,!0)}},_limitMinMaxDateTime:function(e,t){var i=this._defaults,r=new Date(e.selectedYear,e.selectedMonth,e.selectedDay);if(this._defaults.showTimepicker){if(null!==$.datepicker._get(e,"minDateTime")&&void 0!==$.datepicker._get(e,"minDateTime")&&r){var a=$.datepicker._get(e,"minDateTime"),o=new Date(a.getFullYear(),a.getMonth(),a.getDate(),0,0,0,0);null!==this.hourMinOriginal&&null!==this.minuteMinOriginal&&null!==this.secondMinOriginal&&null!==this.millisecMinOriginal&&null!==this.microsecMinOriginal||(this.hourMinOriginal=i.hourMin,this.minuteMinOriginal=i.minuteMin,this.secondMinOriginal=i.secondMin,this.millisecMinOriginal=i.millisecMin,this.microsecMinOriginal=i.microsecMin),e.settings.timeOnly||o.getTime()===r.getTime()?(this._defaults.hourMin=a.getHours(),this.hour<=this._defaults.hourMin?(this.hour=this._defaults.hourMin,this._defaults.minuteMin=a.getMinutes(),this.minute<=this._defaults.minuteMin?(this.minute=this._defaults.minuteMin,this._defaults.secondMin=a.getSeconds(),this.second<=this._defaults.secondMin?(this.second=this._defaults.secondMin,this._defaults.millisecMin=a.getMilliseconds(),this.millisec<=this._defaults.millisecMin?(this.millisec=this._defaults.millisecMin,this._defaults.microsecMin=a.getMicroseconds()):(this.microsec<this._defaults.microsecMin&&(this.microsec=this._defaults.microsecMin),this._defaults.microsecMin=this.microsecMinOriginal)):(this._defaults.millisecMin=this.millisecMinOriginal,this._defaults.microsecMin=this.microsecMinOriginal)):(this._defaults.secondMin=this.secondMinOriginal,this._defaults.millisecMin=this.millisecMinOriginal,this._defaults.microsecMin=this.microsecMinOriginal)):(this._defaults.minuteMin=this.minuteMinOriginal,this._defaults.secondMin=this.secondMinOriginal,this._defaults.millisecMin=this.millisecMinOriginal,this._defaults.microsecMin=this.microsecMinOriginal)):(this._defaults.hourMin=this.hourMinOriginal,this._defaults.minuteMin=this.minuteMinOriginal,this._defaults.secondMin=this.secondMinOriginal,this._defaults.millisecMin=this.millisecMinOriginal,this._defaults.microsecMin=this.microsecMinOriginal)}if(null!==$.datepicker._get(e,"maxDateTime")&&void 0!==$.datepicker._get(e,"maxDateTime")&&r){var s=$.datepicker._get(e,"maxDateTime"),n=new Date(s.getFullYear(),s.getMonth(),s.getDate(),0,0,0,0);null!==this.hourMaxOriginal&&null!==this.minuteMaxOriginal&&null!==this.secondMaxOriginal&&null!==this.millisecMaxOriginal||(this.hourMaxOriginal=i.hourMax,this.minuteMaxOriginal=i.minuteMax,this.secondMaxOriginal=i.secondMax,this.millisecMaxOriginal=i.millisecMax,this.microsecMaxOriginal=i.microsecMax),e.settings.timeOnly||n.getTime()===r.getTime()?(this._defaults.hourMax=s.getHours(),this.hour>=this._defaults.hourMax?(this.hour=this._defaults.hourMax,this._defaults.minuteMax=s.getMinutes(),this.minute>=this._defaults.minuteMax?(this.minute=this._defaults.minuteMax,this._defaults.secondMax=s.getSeconds(),this.second>=this._defaults.secondMax?(this.second=this._defaults.secondMax,this._defaults.millisecMax=s.getMilliseconds(),this.millisec>=this._defaults.millisecMax?(this.millisec=this._defaults.millisecMax,this._defaults.microsecMax=s.getMicroseconds()):(this.microsec>this._defaults.microsecMax&&(this.microsec=this._defaults.microsecMax),this._defaults.microsecMax=this.microsecMaxOriginal)):(this._defaults.millisecMax=this.millisecMaxOriginal,this._defaults.microsecMax=this.microsecMaxOriginal)):(this._defaults.secondMax=this.secondMaxOriginal,this._defaults.millisecMax=this.millisecMaxOriginal,this._defaults.microsecMax=this.microsecMaxOriginal)):(this._defaults.minuteMax=this.minuteMaxOriginal,this._defaults.secondMax=this.secondMaxOriginal,this._defaults.millisecMax=this.millisecMaxOriginal,this._defaults.microsecMax=this.microsecMaxOriginal)):(this._defaults.hourMax=this.hourMaxOriginal,this._defaults.minuteMax=this.minuteMaxOriginal,this._defaults.secondMax=this.secondMaxOriginal,this._defaults.millisecMax=this.millisecMaxOriginal,this._defaults.microsecMax=this.microsecMaxOriginal)}if(void 0!==t&&!0===t){var l=parseInt(this._defaults.hourMax-(this._defaults.hourMax-this._defaults.hourMin)%this._defaults.stepHour,10),c=parseInt(this._defaults.minuteMax-(this._defaults.minuteMax-this._defaults.minuteMin)%this._defaults.stepMinute,10),d=parseInt(this._defaults.secondMax-(this._defaults.secondMax-this._defaults.secondMin)%this._defaults.stepSecond,10),u=parseInt(this._defaults.millisecMax-(this._defaults.millisecMax-this._defaults.millisecMin)%this._defaults.stepMillisec,10),p=parseInt(this._defaults.microsecMax-(this._defaults.microsecMax-this._defaults.microsecMin)%this._defaults.stepMicrosec,10);this.hour_slider&&(this.control.options(this,this.hour_slider,"hour",{min:this._defaults.hourMin,max:l}),this.control.value(this,this.hour_slider,"hour",this.hour-this.hour%this._defaults.stepHour)),this.minute_slider&&(this.control.options(this,this.minute_slider,"minute",{min:this._defaults.minuteMin,max:c}),this.control.value(this,this.minute_slider,"minute",this.minute-this.minute%this._defaults.stepMinute)),this.second_slider&&(this.control.options(this,this.second_slider,"second",{min:this._defaults.secondMin,max:d}),this.control.value(this,this.second_slider,"second",this.second-this.second%this._defaults.stepSecond)),this.millisec_slider&&(this.control.options(this,this.millisec_slider,"millisec",{min:this._defaults.millisecMin,max:u}),this.control.value(this,this.millisec_slider,"millisec",this.millisec-this.millisec%this._defaults.stepMillisec)),this.microsec_slider&&(this.control.options(this,this.microsec_slider,"microsec",{min:this._defaults.microsecMin,max:p}),this.control.value(this,this.microsec_slider,"microsec",this.microsec-this.microsec%this._defaults.stepMicrosec))}}},_onTimeChange:function(){if(this._defaults.showTimepicker){var e=!!this.hour_slider&&this.control.value(this,this.hour_slider,"hour"),t=!!this.minute_slider&&this.control.value(this,this.minute_slider,"minute"),i=!!this.second_slider&&this.control.value(this,this.second_slider,"second"),r=!!this.millisec_slider&&this.control.value(this,this.millisec_slider,"millisec"),a=!!this.microsec_slider&&this.control.value(this,this.microsec_slider,"microsec"),o=!!this.timezone_select&&this.timezone_select.val(),s=this._defaults,n=s.pickerTimeFormat||s.timeFormat,l=s.pickerTimeSuffix||s.timeSuffix;"object"==typeof e&&(e=!1),"object"==typeof t&&(t=!1),"object"==typeof i&&(i=!1),"object"==typeof r&&(r=!1),"object"==typeof a&&(a=!1),"object"==typeof o&&(o=!1),!1!==e&&(e=parseInt(e,10)),!1!==t&&(t=parseInt(t,10)),!1!==i&&(i=parseInt(i,10)),!1!==r&&(r=parseInt(r,10)),!1!==a&&(a=parseInt(a,10));var c=s[e<12?"amNames":"pmNames"][0],d=e!==this.hour||t!==this.minute||i!==this.second||r!==this.millisec||a!==this.microsec||this.ampm.length>0&&e<12!=(-1!==$.inArray(this.ampm.toUpperCase(),this.amNames))||null!==this.timezone&&o!==this.timezone;d&&(!1!==e&&(this.hour=e),!1!==t&&(this.minute=t),!1!==i&&(this.second=i),!1!==r&&(this.millisec=r),!1!==a&&(this.microsec=a),!1!==o&&(this.timezone=o),this.inst||(this.inst=$.datepicker._getInst(this.$input[0])),this._limitMinMaxDateTime(this.inst,!0)),this.support.ampm&&(this.ampm=c),this.formattedTime=$.datepicker.formatTime(s.timeFormat,this,s),this.$timeObj&&(n===s.timeFormat?this.$timeObj.text(this.formattedTime+l):this.$timeObj.text($.datepicker.formatTime(n,this,s)+l)),this.timeDefined=!0,d&&this._updateDateTime()}},_onSelectHandler:function(){var e=this._defaults.onSelect||this.inst.settings.onSelect,t=this.$input?this.$input[0]:null;e&&t&&e.apply(t,[this.formattedDateTime,this])},_updateDateTime:function(e){var t=(e=this.inst||e).currentYear>0?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(e.selectedYear,e.selectedMonth,e.selectedDay),i=$.datepicker._daylightSavingAdjust(t),r=$.datepicker._get(e,"dateFormat"),a=$.datepicker._getFormatConfig(e),o=null!==i&&this.timeDefined;this.formattedDate=$.datepicker.formatDate(r,null===i?new Date:i,a);var s=this.formattedDate;if(""===e.lastVa&&(e.currentYear=e.selectedYear,e.currentMonth=e.selectedMonth,e.currentDay=e.selectedDay),!0===this._defaults.timeOnly?s=this.formattedTime:!0!==this._defaults.timeOnly&&(this._defaults.alwaysSetTime||o)&&(s+=this._defaults.separator+this.formattedTime+this._defaults.timeSuffix),this.formattedDateTime=s,this._defaults.showTimepicker)if(this.$altInput&&!1===this._defaults.timeOnly&&!0===this._defaults.altFieldTimeOnly)this.$altInput.val(this.formattedTime),this.$input.val(this.formattedDate);else if(this.$altInput){this.$input.val(s);var n="",l=this._defaults.altSeparator?this._defaults.altSeparator:this._defaults.separator,c=this._defaults.altTimeSuffix?this._defaults.altTimeSuffix:this._defaults.timeSuffix;this._defaults.timeOnly||(n=this._defaults.altFormat?$.datepicker.formatDate(this._defaults.altFormat,null===i?new Date:i,a):this.formattedDate)&&(n+=l),this._defaults.altTimeFormat?n+=$.datepicker.formatTime(this._defaults.altTimeFormat,this,this._defaults)+c:n+=this.formattedTime+c,this.$altInput.val(n)}else this.$input.val(s);else this.$input.val(this.formattedDate);this.$input.trigger("change")},_onFocus:function(){if(!this.$input.val()&&this._defaults.defaultValue){this.$input.val(this._defaults.defaultValue);var e=$.datepicker._getInst(this.$input.get(0)),t=$.datepicker._get(e,"timepicker");if(t&&t._defaults.timeOnly&&e.input.val()!==e.lastVal)try{$.datepicker._updateDatepicker(e)}catch(e){$.timepicker.log(e)}}},_controls:{slider:{create:function(e,t,i,r,a,o,s){var n=e._defaults.isRTL;return t.prop("slide",null).slider({orientation:"horizontal",value:n?-1*r:r,min:n?-1*o:a,max:n?-1*a:o,step:s,slide:function(t,r){e.control.value(e,$(this),i,n?-1*r.value:r.value),e._onTimeChange()},stop:function(t,i){e._onSelectHandler()}})},options:function(e,t,i,r,a){if(e._defaults.isRTL){if("string"==typeof r)return"min"===r||"max"===r?void 0!==a?t.slider(r,-1*a):Math.abs(t.slider(r)):t.slider(r);var o=r.min,s=r.max;return r.min=r.max=null,void 0!==o&&(r.max=-1*o),void 0!==s&&(r.min=-1*s),t.slider(r)}return"string"==typeof r&&void 0!==a?t.slider(r,a):t.slider(r)},value:function(e,t,i,r){return e._defaults.isRTL?void 0!==r?t.slider("value",-1*r):Math.abs(t.slider("value")):void 0!==r?t.slider("value",r):t.slider("value")}},select:{create:function(e,t,i,r,a,o,s){for(var n='<select class="ui-timepicker-select" data-unit="'+i+'" data-min="'+a+'" data-max="'+o+'" data-step="'+s+'">',l=e._defaults.pickerTimeFormat||e._defaults.timeFormat,c=a;c<=o;c+=s)n+='<option value="'+c+'"'+(c===r?" selected":"")+">",n+="hour"===i?$.datepicker.formatTime($.trim(l.replace(/[^ht ]/gi,"")),{hour:c},e._defaults):"millisec"===i||"microsec"===i||c>=10?c:"0"+c.toString(),n+="</option>";return n+="</select>",t.children("select").remove(),$(n).appendTo(t).change(function(t){e._onTimeChange(),e._onSelectHandler()}),t},options:function(e,t,i,r,a){var o={},s=t.children("select");if("string"==typeof r){if(void 0===a)return s.data(r);o[r]=a}else o=r;return e.control.create(e,t,s.data("unit"),s.val(),o.min||s.data("min"),o.max||s.data("max"),o.step||s.data("step"))},value:function(e,t,i,r){var a=t.children("select");return void 0!==r?a.val(r):a.val()}}}}),$.fn.extend({timepicker:function(e){e=e||{};var t=Array.prototype.slice.call(arguments);return"object"==typeof e&&(t[0]=$.extend(e,{timeOnly:!0})),$(this).each(function(){$.fn.datetimepicker.apply($(this),t)})},datetimepicker:function(e){var t=arguments;return"string"==typeof(e=e||{})?"getDate"===e?$.fn.datepicker.apply($(this[0]),t):this.each(function(){var e=$(this);e.datepicker.apply(e,t)}):this.each(function(){var t=$(this);t.datepicker($.timepicker._newInst(t,e)._defaults)})}}),$.datepicker.parseDateTime=function(e,t,i,r,a){var o=parseDateTimeInternal(e,t,i,r,a);if(o.timeObj){var s=o.timeObj;o.date.setHours(s.hour,s.minute,s.second,s.millisec),o.date.setMicroseconds(s.microsec)}return o.date},$.datepicker.parseTime=function(e,t,i){var r=extendRemove(extendRemove({},$.timepicker._defaults),i||{}),a=(e.replace(/\'.*?\'/g,"").indexOf("Z"),function(e,t,i){var r,a="^"+e.toString().replace(/([hH]{1,2}|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g,function(e){var t,r,a,o=e.length;switch(e.charAt(0).toLowerCase()){case"h":case"m":case"s":return 1===o?"(\\d?\\d)":"(\\d{"+o+"})";case"l":case"c":return"(\\d?\\d?\\d)";case"z":return"(z|[-+]\\d\\d:?\\d\\d|\\S+)?";case"t":return t=i.amNames,r=i.pmNames,a=[],t&&$.merge(a,t),r&&$.merge(a,r),"("+(a=$.map(a,function(e){return e.replace(/[.*+?|()\[\]{}\\]/g,"\\$&")})).join("|")+")?";default:return"("+e.replace(/\'/g,"").replace(/(\.|\$|\^|\\|\/|\(|\)|\[|\]|\?|\+|\*)/g,function(e){return"\\"+e})+")?"}}).replace(/\s/g,"\\s?")+i.timeSuffix+"$",o=function(e){var t=e.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|c{1}|t{1,2}|z|'.*?')/g),i={h:-1,m:-1,s:-1,l:-1,c:-1,t:-1,z:-1};if(t)for(var r=0;r<t.length;r++)-1===i[t[r].toString().charAt(0)]&&(i[t[r].toString().charAt(0)]=r+1);return i}(e),s="",n={hour:0,minute:0,second:0,millisec:0,microsec:0};return!!(r=t.match(new RegExp(a,"i")))&&(-1!==o.t&&(void 0===r[o.t]||0===r[o.t].length?(s="",n.ampm=""):(s=-1!==$.inArray(r[o.t].toUpperCase(),i.amNames)?"AM":"PM",n.ampm=i["AM"===s?"amNames":"pmNames"][0])),-1!==o.h&&("AM"===s&&"12"===r[o.h]?n.hour=0:"PM"===s&&"12"!==r[o.h]?n.hour=parseInt(r[o.h],10)+12:n.hour=Number(r[o.h])),-1!==o.m&&(n.minute=Number(r[o.m])),-1!==o.s&&(n.second=Number(r[o.s])),-1!==o.l&&(n.millisec=Number(r[o.l])),-1!==o.c&&(n.microsec=Number(r[o.c])),-1!==o.z&&void 0!==r[o.z]&&(n.timezone=$.timepicker.timezoneOffsetNumber(r[o.z])),n)});return"function"==typeof r.parse?r.parse(e,t,r):"loose"===r.parse?function(e,t,i){try{var r=new Date("2012-01-01 "+t);if(isNaN(r.getTime())&&(r=new Date("2012-01-01T"+t),isNaN(r.getTime())&&(r=new Date("01/01/2012 "+t),isNaN(r.getTime()))))throw"Unable to parse time with native Date: "+t;return{hour:r.getHours(),minute:r.getMinutes(),second:r.getSeconds(),millisec:r.getMilliseconds(),microsec:r.getMicroseconds(),timezone:-1*r.getTimezoneOffset()}}catch(r){try{return a(e,t,i)}catch(i){$.timepicker.log("Unable to parse \ntimeString: "+t+"\ntimeFormat: "+e)}}return!1}(e,t,r):a(e,t,r)},$.datepicker.formatTime=function(e,t,i){i=i||{},i=$.extend({},$.timepicker._defaults,i),t=$.extend({hour:0,minute:0,second:0,millisec:0,microsec:0,timezone:null},t);var r=e,a=i.amNames[0],o=parseInt(t.hour,10);return o>11&&(a=i.pmNames[0]),r=r.replace(/(?:HH?|hh?|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g,function(e){switch(e){case"HH":return("0"+o).slice(-2);case"H":return o;case"hh":return("0"+convert24to12(o)).slice(-2);case"h":return convert24to12(o);case"mm":return("0"+t.minute).slice(-2);case"m":return t.minute;case"ss":return("0"+t.second).slice(-2);case"s":return t.second;case"l":return("00"+t.millisec).slice(-3);case"c":return("00"+t.microsec).slice(-3);case"z":return $.timepicker.timezoneOffsetString(null===t.timezone?i.timezone:t.timezone,!1);case"Z":return $.timepicker.timezoneOffsetString(null===t.timezone?i.timezone:t.timezone,!0);case"T":return a.charAt(0).toUpperCase();case"TT":return a.toUpperCase();case"t":return a.charAt(0).toLowerCase();case"tt":return a.toLowerCase();default:return e.replace(/'/g,"")}})},$.datepicker._base_selectDate=$.datepicker._selectDate,$.datepicker._selectDate=function(e,t){var i=this._getInst($(e)[0]),r=this._get(i,"timepicker");r?(r._limitMinMaxDateTime(i,!0),i.inline=i.stay_open=!0,this._base_selectDate(e,t),i.inline=i.stay_open=!1,this._notifyChange(i),this._updateDatepicker(i)):this._base_selectDate(e,t)},$.datepicker._base_updateDatepicker=$.datepicker._updateDatepicker,$.datepicker._updateDatepicker=function(e){var t=e.input[0];if(!($.datepicker._curInst&&$.datepicker._curInst!==e&&$.datepicker._datepickerShowing&&$.datepicker._lastInput!==t||"boolean"==typeof e.stay_open&&!1!==e.stay_open)){this._base_updateDatepicker(e);var i=this._get(e,"timepicker");i&&i._addTimePicker(e)}},$.datepicker._base_doKeyPress=$.datepicker._doKeyPress,$.datepicker._doKeyPress=function(e){var t=$.datepicker._getInst(e.target),i=$.datepicker._get(t,"timepicker");if(i&&$.datepicker._get(t,"constrainInput")){var r=i.support.ampm,a=null!==i._defaults.showTimezone?i._defaults.showTimezone:i.support.timezone,o=$.datepicker._possibleChars($.datepicker._get(t,"dateFormat")),s=i._defaults.timeFormat.toString().replace(/[hms]/g,"").replace(/TT/g,r?"APM":"").replace(/Tt/g,r?"AaPpMm":"").replace(/tT/g,r?"AaPpMm":"").replace(/T/g,r?"AP":"").replace(/tt/g,r?"apm":"").replace(/t/g,r?"ap":"")+" "+i._defaults.separator+i._defaults.timeSuffix+(a?i._defaults.timezoneList.join(""):"")+i._defaults.amNames.join("")+i._defaults.pmNames.join("")+o,n=String.fromCharCode(void 0===e.charCode?e.keyCode:e.charCode);return e.ctrlKey||n<" "||!o||s.indexOf(n)>-1}return $.datepicker._base_doKeyPress(e)},$.datepicker._base_updateAlternate=$.datepicker._updateAlternate,$.datepicker._updateAlternate=function(e){var t=this._get(e,"timepicker");if(t){var i=t._defaults.altField;if(i){t._defaults.altFormat||t._defaults.dateFormat;var r=this._getDate(e),a=$.datepicker._getFormatConfig(e),o="",s=t._defaults.altSeparator?t._defaults.altSeparator:t._defaults.separator,n=t._defaults.altTimeSuffix?t._defaults.altTimeSuffix:t._defaults.timeSuffix,l=null!==t._defaults.altTimeFormat?t._defaults.altTimeFormat:t._defaults.timeFormat;o+=$.datepicker.formatTime(l,t,t._defaults)+n,t._defaults.timeOnly||t._defaults.altFieldTimeOnly||null===r||(o=t._defaults.altFormat?$.datepicker.formatDate(t._defaults.altFormat,r,a)+s+o:t.formattedDate+s+o),$(i).val(o)}}else $.datepicker._base_updateAlternate(e)},$.datepicker._base_doKeyUp=$.datepicker._doKeyUp,$.datepicker._doKeyUp=function(e){var t=$.datepicker._getInst(e.target),i=$.datepicker._get(t,"timepicker");if(i&&i._defaults.timeOnly&&t.input.val()!==t.lastVal)try{$.datepicker._updateDatepicker(t)}catch(e){$.timepicker.log(e)}return $.datepicker._base_doKeyUp(e)},$.datepicker._base_gotoToday=$.datepicker._gotoToday,$.datepicker._gotoToday=function(e){var t=this._getInst($(e)[0]),i=t.dpDiv;this._base_gotoToday(e);var r=this._get(t,"timepicker");selectLocalTimezone(r);var a=new Date;this._setTime(t,a),$(".ui-datepicker-today",i).click()},$.datepicker._disableTimepickerDatepicker=function(e){var t=this._getInst(e);if(t){var i=this._get(t,"timepicker");$(e).datepicker("getDate"),i&&(t.settings.showTimepicker=!1,i._defaults.showTimepicker=!1,i._updateDateTime(t))}},$.datepicker._enableTimepickerDatepicker=function(e){var t=this._getInst(e);if(t){var i=this._get(t,"timepicker");$(e).datepicker("getDate"),i&&(t.settings.showTimepicker=!0,i._defaults.showTimepicker=!0,i._addTimePicker(t),i._updateDateTime(t))}},$.datepicker._setTime=function(e,t){var i=this._get(e,"timepicker");if(i){var r=i._defaults;i.hour=t?t.getHours():r.hour,i.minute=t?t.getMinutes():r.minute,i.second=t?t.getSeconds():r.second,i.millisec=t?t.getMilliseconds():r.millisec,i.microsec=t?t.getMicroseconds():r.microsec,i._limitMinMaxDateTime(e,!0),i._onTimeChange(),i._updateDateTime(e)}},$.datepicker._setTimeDatepicker=function(e,t,i){var r=this._getInst(e);if(r){var a,o=this._get(r,"timepicker");if(o)this._setDateFromField(r),t&&("string"==typeof t?(o._parseTime(t,i),(a=new Date).setHours(o.hour,o.minute,o.second,o.millisec),a.setMicroseconds(o.microsec)):(a=new Date(t.getTime())).setMicroseconds(t.getMicroseconds()),"Invalid Date"===a.toString()&&(a=void 0),this._setTime(r,a))}},$.datepicker._base_setDateDatepicker=$.datepicker._setDateDatepicker,$.datepicker._setDateDatepicker=function(e,t){var i=this._getInst(e);if(i){"string"==typeof t&&((t=new Date(t)).getTime()||$.timepicker.log("Error creating Date object from string."));var r,a=this._get(i,"timepicker");t instanceof Date?(r=new Date(t.getTime())).setMicroseconds(t.getMicroseconds()):r=t,a&&(a.support.timezone||null!==a._defaults.timezone||(a.timezone=-1*r.getTimezoneOffset()),t=$.timepicker.timezoneAdjust(t,a.timezone),r=$.timepicker.timezoneAdjust(r,a.timezone)),this._updateDatepicker(i),this._base_setDateDatepicker.apply(this,arguments),this._setTimeDatepicker(e,r,!0)}},$.datepicker._base_getDateDatepicker=$.datepicker._getDateDatepicker,$.datepicker._getDateDatepicker=function(e,t){var i=this._getInst(e);if(i){var r=this._get(i,"timepicker");if(r){void 0===i.lastVal&&this._setDateFromField(i,t);var a=this._getDate(i);return a&&r._parseTime($(e).val(),r.timeOnly)&&(a.setHours(r.hour,r.minute,r.second,r.millisec),a.setMicroseconds(r.microsec),null!=r.timezone&&(r.support.timezone||null!==r._defaults.timezone||(r.timezone=-1*a.getTimezoneOffset()),a=$.timepicker.timezoneAdjust(a,r.timezone))),a}return this._base_getDateDatepicker(e,t)}},$.datepicker._base_parseDate=$.datepicker.parseDate,$.datepicker.parseDate=function(e,t,i){var r;try{r=this._base_parseDate(e,t,i)}catch(a){if(!(a.indexOf(":")>=0))throw a;r=this._base_parseDate(e,t.substring(0,t.length-(a.length-a.indexOf(":")-2)),i),$.timepicker.log("Error parsing the date string: "+a+"\ndate string = "+t+"\ndate format = "+e)}return r},$.datepicker._base_formatDate=$.datepicker._formatDate,$.datepicker._formatDate=function(e,t,i,r){var a=this._get(e,"timepicker");return a?(a._updateDateTime(e),a.$input.val()):this._base_formatDate(e)},$.datepicker._base_optionDatepicker=$.datepicker._optionDatepicker,$.datepicker._optionDatepicker=function(e,t,i){var r,a=this._getInst(e);if(!a)return null;var o=this._get(a,"timepicker");if(o){var s,n=null,l=null,c=null,d=o._defaults.evnts,u={};if("string"==typeof t){if("minDate"===t||"minDateTime"===t)n=i;else if("maxDate"===t||"maxDateTime"===t)l=i;else if("onSelect"===t)c=i;else if(d.hasOwnProperty(t)){if(void 0===i)return d[t];u[t]=i,r={}}}else if("object"==typeof t)for(s in t.minDate?n=t.minDate:t.minDateTime?n=t.minDateTime:t.maxDate?l=t.maxDate:t.maxDateTime&&(l=t.maxDateTime),d)d.hasOwnProperty(s)&&t[s]&&(u[s]=t[s]);for(s in u)u.hasOwnProperty(s)&&(d[s]=u[s],r||(r=$.extend({},t)),delete r[s]);if(r&&isEmptyObject(r))return;n?(n=0===n?new Date:new Date(n),o._defaults.minDate=n,o._defaults.minDateTime=n):l?(l=0===l?new Date:new Date(l),o._defaults.maxDate=l,o._defaults.maxDateTime=l):c&&(o._defaults.onSelect=c)}return void 0===i?this._base_optionDatepicker.call($.datepicker,e,t):this._base_optionDatepicker.call($.datepicker,e,r||t,i)};var isEmptyObject=function(e){var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0},extendRemove=function(e,t){for(var i in $.extend(e,t),t)null!==t[i]&&void 0!==t[i]||(e[i]=t[i]);return e},detectSupport=function(e){var t=e.replace(/'.*?'/g,"").toLowerCase(),i=function(e,t){return-1!==e.indexOf(t)};return{hour:i(t,"h"),minute:i(t,"m"),second:i(t,"s"),millisec:i(t,"l"),microsec:i(t,"c"),timezone:i(t,"z"),ampm:i(t,"t")&&i(e,"h"),iso8601:i(e,"Z")}},convert24to12=function(e){return 0===(e%=12)&&(e=12),String(e)},computeEffectiveSetting=function(e,t){return e&&e[t]?e[t]:$.timepicker._defaults[t]},splitDateTime=function(e,t){var i=computeEffectiveSetting(t,"separator"),r=computeEffectiveSetting(t,"timeFormat").split(i).length,a=e.split(i),o=a.length;return o>1?{dateString:a.splice(0,o-r).join(i),timeString:a.splice(0,r).join(i)}:{dateString:e,timeString:""}},parseDateTimeInternal=function(e,t,i,r,a){var o,s,n;if(s=splitDateTime(i,a),o=$.datepicker._base_parseDate(e,s.dateString,r),""===s.timeString)return{date:o};if(!(n=$.datepicker.parseTime(t,s.timeString,a)))throw"Wrong time format";return{date:o,timeObj:n}},selectLocalTimezone=function(e,t){if(e&&e.timezone_select){var i=t||new Date;e.timezone_select.val(-i.getTimezoneOffset())}};$.timepicker=new Timepicker,$.timepicker.timezoneOffsetString=function(e,t){if(isNaN(e)||e>840||e<-720)return e;var i=e%60,r=(e-i)/60,a=t?":":"",o=(e>=0?"+":"-")+("0"+Math.abs(r)).slice(-2)+a+("0"+Math.abs(i)).slice(-2);return"+00:00"===o?"Z":o},$.timepicker.timezoneOffsetNumber=function(e){var t=e.toString().replace(":","");return"Z"===t.toUpperCase()?0:/^(\-|\+)\d{4}$/.test(t)?("-"===t.substr(0,1)?-1:1)*(60*parseInt(t.substr(1,2),10)+parseInt(t.substr(3,2),10)):e},$.timepicker.timezoneAdjust=function(e,t){var i=$.timepicker.timezoneOffsetNumber(t);return isNaN(i)||e.setMinutes(e.getMinutes()+-e.getTimezoneOffset()-i),e},$.timepicker.timeRange=function(e,t,i){return $.timepicker.handleRange("timepicker",e,t,i)},$.timepicker.datetimeRange=function(e,t,i){$.timepicker.handleRange("datetimepicker",e,t,i)},$.timepicker.dateRange=function(e,t,i){$.timepicker.handleRange("datepicker",e,t,i)},$.timepicker.handleRange=function(e,t,i,r){function a(a,o){var s=t[e]("getDate"),n=i[e]("getDate"),l=a[e]("getDate");if(null!==s){var c=new Date(s.getTime()),d=new Date(s.getTime());c.setMilliseconds(c.getMilliseconds()+r.minInterval),d.setMilliseconds(d.getMilliseconds()+r.maxInterval),r.minInterval>0&&c>n?i[e]("setDate",c):r.maxInterval>0&&d<n?i[e]("setDate",d):s>n&&o[e]("setDate",l)}}function o(t,i,a){if(t.val()){var o=t[e].call(t,"getDate");null!==o&&r.minInterval>0&&("minDate"===a&&o.setMilliseconds(o.getMilliseconds()+r.minInterval),"maxDate"===a&&o.setMilliseconds(o.getMilliseconds()-r.minInterval)),o.getTime&&i[e].call(i,"option",a,o)}}return r=$.extend({},{minInterval:0,maxInterval:0,start:{},end:{}},r),$.fn[e].call(t,$.extend({onClose:function(e,t){a($(this),i)},onSelect:function(e){o($(this),i,"minDate")}},r,r.start)),$.fn[e].call(i,$.extend({onClose:function(e,i){a($(this),t)},onSelect:function(e){o($(this),t,"maxDate")}},r,r.end)),a(t,i),o(t,i,"minDate"),o(i,t,"maxDate"),$([t.get(0),i.get(0)])},$.timepicker.log=function(e){window.console&&window.console.log(e)},$.timepicker._util={_extendRemove:extendRemove,_isEmptyObject:isEmptyObject,_convert24to12:convert24to12,_detectSupport:detectSupport,_selectLocalTimezone:selectLocalTimezone,_computeEffectiveSetting:computeEffectiveSetting,_splitDateTime:splitDateTime,_parseDateTimeInternal:parseDateTimeInternal},Date.prototype.getMicroseconds||(Date.prototype.microseconds=0,Date.prototype.getMicroseconds=function(){return this.microseconds},Date.prototype.setMicroseconds=function(e){return this.setMilliseconds(this.getMilliseconds()+Math.floor(e/1e3)),this.microseconds=e%1e3,this}),$.timepicker.version="1.4"}}(jQuery),function(e){e.fn.bizagiUpload=function(t){var i=this,r=this;t=t||{};var a={renderReference:{},dialogTemplate:{},properties:{},uploadedFiles:-1,maxAllowedFiles:-1,isECM:!1,isUpdatingECM:!1,onUploadFileCompletedCallback:function(){},onChangeFile:function(){},onCheckMaxSize:function(){var t=a.properties,i=this.dialogBox,r=e("input[type=file]",i).get(0)||{};return null!=r.files?r.files.length>0?!(r.files[0].size>t.maxSize)||(s(bizagi.localization.getResource("render-upload-alert-maxsize").replace("{0}",t.maxSize)),!1):(s(bizagi.localization.getResource("render-required-upload").replace("#label#","")),!1):!bizagi.util.isIE()||(!(""===r.value||!r.value)||(s(bizagi.localization.getResource("render-required-upload").replace("#label#","")),!1))},dialogTitle:""};function o(){var t=this,i=(window.document,t.dialogBox=e("<div class='ui-bizagi-component-loading'/>"));t.isClicked=!1;var o={};o[bizagi.localization.getResource("render-upload-dialog-select")]=function(o){var l=!1;if(!t.isClicked)if(t.isClicked=!0,a.onCheckMaxSize(a.renderReference)&&function(){var t=a.properties,i=this.dialogBox,r=e("input[type=file]",i).val();if(t.validExtensions&&t.validExtensions.length>0){var o=t.validExtensions.replaceAll("*.","").split(";");if(!function(e,t,i){if(0==i&&0==e.length)return!0;for(var r=0;r<t.length;r++){if("*"==t[r].toLowerCase())return!0;if(e.toLowerCase().endsWith(t[r].toLowerCase()))return!0}return!1}(r,o,!0))return s(bizagi.localization.getResource("render-upload-allowed-extensions")+t.validExtensions),!1}return!0}()){if(l=!(a.uploadedFiles>0&&a.maxAllowedFiles>0)||!(a.uploadedFiles>=a.maxfiles),a.isECM){var c=e("input[type=file]",i).val();if(c=c.substring(c.lastIndexOf("\\")+1,c.length),e("[name=Filename]",t.dialobBox).val(c),a.isUpdatingECM){var d="*"+c.substring(c.lastIndexOf("."),c.length);e("[name=fileext]",t.dialobBox).val(d)}}l&&e.when(function(){var t=new e.Deferred,i=this.dialogBox,r=e("form",i),a=e("iframe",r),o=function(){try{var i="";if(a[0].contentWindow){var r=bizagi.util.isIE8()?e(a[0].contentWindow.document.body):e(a[0].contentWindow.eval("document.body"));i=r.text()}i.length>0?t.resolve(i):setTimeout(o,50)}catch(e){null!=typeof Windows?t.resolve('{"type": "error","cause":"iframeW8"}'):(n(),bizagi.log(e.toString()))}};return o(),r.submit(),t.promise()}()).done(function(e){if(a.isECM){var t=JSON.parse(e);if(a.isUpdatingECM){t.xpath&&(l.xPath=l.xpath),t.idPageCache||(t.idPageCache=a.properties.idPageCache),t.filename=t.fileName;e={fileName:t.fileName,idAttrib:t.idAttrib,idFileUpload:t.idFileUpload,idPageCache:t.idPageCache,xPath:a.properties.xPath,xpathContext:a.properties.xpathContext};a.onUploadFileCompletedCallback(a.renderReference,e,r,t)}else a.onUploadFileCompletedCallback(a.renderReference,t)}else a.onUploadFileCompletedCallback(a.renderReference,e);n()})}else t.isClicked=!1},o[bizagi.localization.getResource("text-cancel")]=function(){n()},i.dialog({width:500,height:200,minHeight:200,minWidth:400,title:a.dialogTitle,modal:!0,buttons:o,close:function(){n()},maximize:function(){if(window.self!==window.top&&void 0!==i.parent()){var e=window,t=document,r=t.documentElement,a=t.getElementsByTagName("body")[0],o=e.innerHeight||r.clientHeight||a.clientHeight;i.parent().height(o-10)}}});var l=e.tmpl(a.dialogTemplate,a.properties);l.appendTo(i),e("input[type=file]",l).change(function(e){a.onChangeFile(e.target.files)}),e(".ui-bizagi-loading-message").remove(),window.self!==window.top&&window.setTimeout(function(){var t=parseInt(i.parent().css("top"))-parseInt(i.parent().css("height"))/.85;(e.browser.safari?e("body"):e("html,body")).scrollTop(t)},0)}function s(t){var i=e("#alert-file-upload",this.dialogBox);i.empty(),i.show(),i.html(t)}function n(){this.dialogBox.dialog("destroy"),this.dialogBox.remove()}return e.extend(a,a,t),i.opt=a,void 0===a.renderReference.enabled&&(a.renderReference.enabled=!0),a.isECM&&a.isUpdatingECM?e(".modal-ecm .ecm-options-upgrade",i).click(function(){a.renderReference.enabled&&(e(".modal-ecm",i).hide(),o())}):i.click(function(){a.renderReference.enabled&&o()}),function(){if(""!=a.properties.validExtensions){var e=a.properties.validExtensions.replaceAll("*","");e=e.replaceAll(";",","),a.properties.processedFileExtension=e}}(),i}}(jQuery),bizagi.workportal=void 0!==bizagi.workportal?bizagi.workportal:{},bizagi.workportal.services=void 0!==bizagi.workportal.services?bizagi.workportal.services:{},bizagi.workportal.services.endPoints=[],bizagi.workportal.services.getEndPoints=function(e){return"workportal"==e.context?(bizagi="undefined"!=typeof bizagi?bizagi:{},bizagi.localization=void 0!==bizagi.localization?bizagi.localization:{},bizagi.localization.language=void 0!==bizagi.localization.language?bizagi.localization.language:bizagi.language,{"user-handler":e.proxyPrefix+"RestServices/UserHandler.ashx","process-handler":e.proxyPrefix+"RestServices/ProcessHandler.ashx","query-handler":e.proxyPrefix+"Rest/Handlers/Query","case-handler":e.proxyPrefix+"RestServices/CaseHandler.ashx","query-form":e.proxyPrefix+"App/ListaDetalle/QueryForm.aspx","query-form-edit":e.proxyPrefix+"App/ListaDetalle/SaveQuery.aspx","query-form-delete":e.proxyPrefix+"App/ListaDetalle/QueryForm.aspx","query-form-delete-cube":e.proxyPrefix+"Rest/Queries/Cubes/{idCube}","favorites-handler":e.proxyPrefix+"RestServices/FavoritesHandler.ashx","file-handler":e.proxyPrefix+"RestServices/EntityHandler.ashx","login-handler":e.proxyPrefix+"Rest/Users/UserAuthentication","login-handlerv10":e.proxyPrefix+"RestServices/UserHandler.ashx?action=authenticateUser&userName={0}&password={1}&domain={2}","logoff-handler":e.proxyPrefix+"RestServices/UserHandler.ashx?action=logOff","logoff-handlerv1":e.proxyPrefix+"Rest/Users/LogOff",overrides:e.proxyPrefix+"Rest/Util/Overrides","authorization-handler-getMenuAuthorization":e.proxyPrefix+"Rest/Authorization/MenuAuthorization","authorization-handler-isCaseCreationAuthorized":e.proxyPrefix+"Rest/Authorization/Processes/{0}/IsCaseCreationAuthorized","case-handler-getCaseSummary":e.proxyPrefix+"Rest/Cases/{idCase}/SummaryGuid","case-handler-getCaseSummaryByGuid":e.proxyPrefix+"Rest/Cases/{guid}/SummaryByGuid","case-handler-releaseActivity":e.proxyPrefix+"Rest/Cases/{idCase}/ReleaseActivity","case-handler-takeOwnershipActivity":e.proxyPrefix+"Rest/Cases/TakeOwnership","case-handler-getCasesList":e.proxyPrefix+"Rest/Processes/GetCases","offline-getProcessTree":e.proxyPrefix+"Rest/Processes/OfflineProcessTree","offline-getForms":e.proxyPrefix+"Rest/RenderForm/offlineForms","offline-sendForm":e.proxyPrefix+"Rest/Cases/SaveAsynchWorkItemOffLine","case-handler-getCaseTasks":e.proxyPrefix+"Rest/Cases/{idCase}/Tasks","case-handler-getCaseEvents":e.proxyPrefix+"Rest/Cases/{idCase}/Events","case-handler-getCaseSubprocesses":e.proxyPrefix+"Rest/Cases/{idCase}/Subprocesses","case-handler-getTaskAssignees":e.proxyPrefix+"Rest/Cases/{idCase}/Tasks/{idTask}/AssigneesGuid","case-handler-getCaseAssignees":e.proxyPrefix+"Rest/Cases/{idCase}/AssigneesGuid","case-handler-getCaseAssigneesPreview":e.proxyPrefix+"Rest/Cases/{idCase}/AssigneesPreview","case-handler-getWorkItems":e.proxyPrefix+"Rest/Cases/{idCase}/WorkItems","case-handler-getWorkItemsByGuid":e.proxyPrefix+"Rest/Cases/{guid}/WorkItemsByGuid","case-handler-getAsynchExecutionState":e.proxyPrefix+"Rest/Cases/{idCase}/AsynchExecutionState","case-handler-addNewCase":e.proxyPrefix+"Rest/Cases","case-handler-startProcess":e.proxyPrefix+"Rest/Processes/StartProcess/{idProcess}","case-handler-supportedLogTypes":e.proxyPrefix+"Rest/Cases/SupportedLogsTypes","case-handler-getActivityLog":e.proxyPrefix+"Rest/Cases/{idCase}/ActivityLog","case-handler-getActivityDetailLog":e.proxyPrefix+"Rest/Cases/{idCase}/Workitem/{idWorkItemFrom}/ActivityDetailLog","case-handler-getEntityLog":e.proxyPrefix+"Rest/Cases/{idCase}/EntityLog","case-handler-getEntityDetailLog":e.proxyPrefix+"Rest/Cases/{idCase}/EntityDetailLog","case-handler-getUserLog":e.proxyPrefix+"Rest/Cases/{idCase}/UserLog","case-handler-getUserDetailLog":e.proxyPrefix+"Rest/Cases/{idCase}/{idUser}/UserDetailLog","case-handler-getAdminLog":e.proxyPrefix+"Rest/Cases/{idCase}/AdminLog","case-handler-getCaseFormsRenderVersion":e.proxyPrefix+"Rest/Cases/{idCase}/FormsRenderVersion","case-handler-getCaseFormsRenderVersionByGuid":e.proxyPrefix+"Rest/Cases/{guid}/FormsRenderVersionByGuid","favorites-handler-saveFavorite":e.proxyPrefix+"Rest/Favorites","favorites-handler-deleteFavorite":e.proxyPrefix+"Rest/Favorites/{guidFavorite}","bamAnalytics-handler-getAnalisysQueries":e.proxyPrefix+"Rest/BAMAnalytics/AnalisysQueries","bamAnalytics-handler-updateQuery":e.proxyPrefix+"Rest/BAMAnalytics/Reports/Ids/{idQuery}","inbox-handler-getInboxSummary":e.proxyPrefix+"Rest/Inbox/Summary","MessageHandler-NewComment":e.proxyPrefix+"Rest/Cases/Comments","MessageHandler-GetComments":e.proxyPrefix+"Rest/Cases/Comments","MessageHandler-SetCategoryToComment":e.proxyPrefix+"Rest/Cases/Comments/{idComment}","MessageHandler-RemoveComment":e.proxyPrefix+"Rest/Cases/Comments/{idComment}","MessageHandler-ReplyComment":e.proxyPrefix+"Rest/Cases/Comments/{idComment}/Replies","MessageHandler-RemoveReply":e.proxyPrefix+"Rest/Cases/Comments/{idComment}/Replies/{idReply}","MessageHandler-GetCategoryColors":e.proxyPrefix+"Rest/Cases/Comments/CategoryColors","MessageHandler-RenameCategoryColor":e.proxyPrefix+"Rest/Cases/Comments/CategoryColors/{idColorCategory}","MessageHandler-CountNewComments":e.proxyPrefix+"Rest/Cases/Comments/{idComment}/NewComments/Count","process-handler-getAllProcesses":e.proxyPrefix+"Rest/Processes","process-handler-getFavourites":e.proxyPrefix+"Rest/Home/MyFavorites/Count","process-handler-getMyStuff":e.proxyPrefix+"Rest/Home/MyStuff","process-handler-getFavouriteCases":e.proxyPrefix+"Rest/Home/MyFavorites","process-handler-getActions":e.proxyPrefix+"Rest/Home/Actions","process-handler-getCustomizedColumnsData":e.proxyPrefix+"Rest/Processes/CustomizedColumnsData","process-handler-getCategory":e.proxyPrefix+"Rest/Processes/Categories","process-handler-getRecentProcesses":e.proxyPrefix+"Rest/Processes/RecentProcesses","process-handler-getCustomizedColumnsDataInfo":e.proxyPrefix+"Rest/Processes/CustomizedColumnsDataInfo","process-handler-getOrganizations":e.proxyPrefix+"Rest/Profile/Organizations","process-handler-getOrganizationsByUser":e.proxyPrefix+"Rest/Profile/OrganizationsByUser","process-handler-getActivitiesData":e.proxyPrefix+"Api/Processes/CasesData/MyActivities","process-handler-getPendingsData":e.proxyPrefix+"Api/Processes/CasesData/MyPendings","process-handler-getUsersCases":e.proxyPrefix+"Api/Cases/{caseId}/UsersGuid","process-handler-getActionsEvents":e.proxyPrefix+"Api/Cases/{caseId}/CurrentEvents","query-handler-getqueries":e.proxyPrefix+"Rest/Queries","query-handler-getqueries-definitions":e.proxyPrefix+"Rest/Queries/Definitions","query-handler-getQueryFormResponse":e.proxyPrefix+"Rest/Queries/Search","query-handler-getQueryFormExportExcel":e.proxyPrefix+"Rest/Queries/ExportToExcel","query-handler-getQueryForm":e.proxyPrefix+"Rest/Handlers/Render","query-handler-storedQueryForm":e.proxyPrefix+"Rest/StoredQueryForms","query-handler-storedQueryForm-id":e.proxyPrefix+"Rest/StoredQueryForms/{idStoredQueryForm}","preferences-handler-getPreferencesForm":e.proxyPrefix+"Rest/Handlers/Render","user-handler-getCurrentUser":e.proxyPrefix+"Rest/Users/CurrentUserGuid","old-render":e.proxyPrefix+"App/ListaDetalle/Detalle.aspx",Reports:e.proxyPrefix+"RestServices/BAMAnalyticsHandler.ashx","reports-handler-deleteQueries":e.proxyPrefix+"Rest/BAMAnalytics/Reports/{QueryId}","folders-handler-getUserQueries":e.proxyPrefix+"Rest/SmartFolders","folders-associate-deleteSmartFolder":e.proxyPrefix+"Rest/SmartFolders/{idSmartFolder}","folders-handler":e.proxyPrefix+"RestServices/SmartFoldersHandler.ashx","folders-associate":e.proxyPrefix+"App/Ajax/AJAXGateway.aspx","smartfolders-integration":e.proxyPrefix+"App/WorkPortal/ConfigureFilteredFolder.aspx",AlarmAdmin:e.proxyPrefix+"App/Admin/AlarmsAdmin.aspx",AnalyticsProcess:e.proxyPrefix+"App/Cockpit/AnalyticsProcess.aspx",AnalyticsSensor:e.proxyPrefix+"App/Cockpit/AnalyticsSensor.aspx",AnalyticsTask:e.proxyPrefix+"App/Cockpit/AnalyticsTask.aspx",AsynchronousWorkitemRetries:e.proxyPrefix+"App/Admin/AsynchDisabledWorkitems.aspx",AuthenticationLogQuery:e.proxyPrefix+"App/Admin/AuthLogQuery.aspx",BAMProcess:e.proxyPrefix+"App/Cockpit/BAMProcess.aspx",BAMTask:e.proxyPrefix+"App/Cockpit/BAMTask.aspx",BusinessPolicies:e.proxyPrefix+"App/Admin/BusinessPolicies/BusinessPoliciesSelector.aspx",CaseAdmin:e.proxyPrefix+"App/Admin/CaseSearch.aspx",adminReassignCases:"CaseAdmin",asyncECMUpload:"asyncECMUpload",CasesMonitor:e.proxyPrefix+"App/Admin/CasesMonitor.aspx",Closed:e.proxyPrefix+"App/ListaDetalle/listaitems.aspx?h_Location=Cerrados&I_ProcessState=Completed",CurrentUser:e.proxyPrefix+"App/Admin/CurrentUser.aspx",EncryptionAdmin:e.proxyPrefix+"App/Admin/Encrypt.aspx",MobileUpdatesAdmin:e.proxyPrefix+"App/MobileUpdates/default.aspx",EntityAdmin:e.proxyPrefix+"App/Admin/Entity.aspx",LocationResources:e.proxyPrefix+"App/Admin/AdminLocResources.aspx",NewCase:e.proxyPrefix+"App/Radicar/application.aspx",Pending:e.proxyPrefix+"App/ListaDetalle/listaitems.aspx?h_Location=Pendientes&I_processState=Running",Profiles:e.proxyPrefix+"App/Admin/ProfilesAdminSearch.aspx",Search:e.proxyPrefix+"App/ListaDetalle/Search.aspx",UserAdmin:e.proxyPrefix+"App/Admin/ListUsers.aspx",UserDefaultAssignation:e.proxyPrefix+"App/Admin/DefaultAssignationUser.aspx?h_AdminDefaultAssign=1",UserPendingRequests:e.proxyPrefix+"App/Admin/UserPendingRequests.aspx",ListPreferences:""!=bizagi.UserPreferencesUrl?e.proxyPrefix+bizagi.UserPreferencesUrl:e.proxyPrefix+"App/Admin/CurrentUser.aspx",GRDimensionAdmin:e.proxyPrefix+"App/Cockpit/DimensionEdit.aspx",Licenses:e.proxyPrefix+"App/Admin/Licenses.aspx",AnalysisQueries:e.proxyPrefix+"App/Inicio/WPAnalysisQuery.aspx",DocumentTemplates:e.proxyPrefix+"App/Admin/AdminDocumentTemplates.aspx",ProcessAdmin:e.proxyPrefix+"App/Admin/AdminProcess.aspx",ResourceBAM:e.proxyPrefix+"App/Cockpit/BAMResourceMonitor.aspx",WorkPortalVersion:e.proxyPrefix+"Rest/Util/Version",PreferenceFormOld:e.proxyPrefix+"App/Admin/CurrentUserByForm.aspx","entities-administration":"RestServices/EntityHandler.ashx",logout:e.proxyPrefix+"Rest/Authentication/logout",logoutDotNet:e.proxyPrefix+"App/Inicio/LogOff.aspx",authenticationConfig:e.proxyPrefix+"Api/Authentication/BizagiConfig","logout-oauth2":e.proxyPrefix+"Api/Authentication/OAuth2/IdentityProvider/Server/Logout",FederateLogoffUrl:e.proxyPrefix+"Api/Authentication/FederateLogoffUrl",oauth2AuthenticationConfig:e.proxyPrefix+"Api/Authentication/OAuth2/OAuth2AuthenticationConfig","massive-activity-assignments-getOrganizationInfo":e.proxyPrefix+"Rest/Users/OrganizationInfo","massive-activity-assignments-getCasesByOrganization":e.proxyPrefix+"Rest/Queries/GetCasesByOrganization","massive-activity-assignments-reassignCases":e.proxyPrefix+"Rest/Cases/ReassignCases","massive-activity-assignments-searchUsers":e.proxyPrefix+"Rest/Users","massive-activity-assignments-searchUsersById":e.proxyPrefix+"Rest/Users/ByIds","async-ecm-upload-baseService":e.proxyPrefix+"Rest/Handlers/Metadata",domains:e.proxyPrefix+"Rest/Authentication/Domains",ThemeBuilder:e.proxyPrefix+"ThemeBuilder/index.html?language="+bizagi.localization.language,getCurrentTheme:e.proxyPrefix+"Api/Theme/Current","admin-getAuthenticationLog":e.proxyPrefix+"Rest/Users/AuthLog","admin-getAuthenticationDomains":e.proxyPrefix+"Rest/Users/Domains","admin-getAuthenticationEventsTypes":e.proxyPrefix+"Rest/Users/EventTypes","admin-getAuthenticationEventSubTypes":e.proxyPrefix+"Rest/Users/EventSubTypes","admin-EncryptString":e.proxyPrefix+"Rest/Util/EncryptString","admin-UserPendingRequests":e.proxyPrefix+"Rest/Users/UserPendingRequests","admin-UserAuthenticationInfo":e.proxyPrefix+"Rest/Users/UserAuthenticationInfo","admin-updateUserAuthenticationInfo":e.proxyPrefix+"Rest/Users/UpdateUserAuthenticationInfo","admin-generateRandomPassword":e.proxyPrefix+"Rest/Util/GenerateRandomPassword","admin-GenerateDataToSendByEmail":e.proxyPrefix+"Rest/Users/GenerateDataToSendByEmail","admin-sendEmail":e.proxyPrefix+"Rest/Util/SendEmail/","admin-sendUserEmail":e.proxyPrefix+"Rest/Users/SendUserEmail","admin-getApplicationList":e.proxyPrefix+"Rest/Application","admin-getCaseSecurityApplicationList":e.proxyPrefix+"Api/CaseSecurity/Applications?idUser={userId}","admin-getApplicationProcesses":e.proxyPrefix+"Rest/Application/{idApp}/Process","admin-getProcessVersion":e.proxyPrefix+"Rest/Processes/Version","admin-getProcessTasks":e.proxyPrefix+"Rest/Processes/Version/{version}/Tasks","admin-userGetPositions":e.proxyPrefix+"Rest/Users/GetPositions","admin-usersform":e.proxyPrefix+"Rest/Handlers/Render","admin-getTaskAlarms":e.proxyPrefix+"Rest/Alarm/TaskAlarms","admin-getLapseMode":e.proxyPrefix+"Rest/Alarm/LapseMode","admin-getRecurrMode":e.proxyPrefix+"Rest/Alarm/RecurrMode","admin-getScheduleType":e.proxyPrefix+"Rest/Alarm/ScheduleType","admin-getBossList":e.proxyPrefix+"Rest/Alarm/Boss","admin-addAlarm":e.proxyPrefix+"Rest/Alarm","admin-editAlarm":e.proxyPrefix+"Rest/Alarm/{idAlarm}","admin-deleteAlarm":e.proxyPrefix+"Rest/Alarm","admin-alarmRecipients":e.proxyPrefix+"Rest/Alarm/{idAlarm}/Recipient","admin-deleteAlarmRecipients":e.proxyPrefix+"Rest/Alarm/Recipient","admin-recipientToAlarm":e.proxyPrefix+"Rest/Alarm/{idAlarm}/Recipient/{idRecipient}","admin-enableAlarm":e.proxyPrefix+"Rest/Alarm/Task/{idTask}/ToggleAlarm","admin-getUsersForAssignation":e.proxyPrefix+"Rest/Users/UsersForAssignation","admin-getUsersList":e.proxyPrefix+"Rest/Users/SearchUsers","admin-getUsersListForPlans":e.proxyPrefix+"Rest/Users/SearchUsersForPlansGuid","admin-getCategoriesList":e.proxyPrefix+"Rest/Application/Category","admin-getCaseSecurityCategoriesList":e.proxyPrefix+"Api/CaseSecurity/Applications/{idApp}/Categories?idUser={userId}","admin-getCasesList":e.proxyPrefix+"Rest/Queries/SearchCases","admin-invalidateCases":e.proxyPrefix+"Rest/Cases/Invalidate","admin-getProcessRunningInvalidateCases":e.proxyPrefix+"Rest/Util/operationStatus?opType=InvalidateCases","admin-abortItems":e.proxyPrefix+"Rest/Cases/Abort","admin-reassignItems":e.proxyPrefix+"Rest/Cases/Reassign","admin-reassignCurrent":e.proxyPrefix+"Rest/Cases/ReassignCurrent","admin-getDefaultAssignationUserToAllProcess":e.proxyPrefix+"Rest/Users/{serviceAction}/","admin-getDefaultAssignationUserToProcess":e.proxyPrefix+"Rest/Users/Process/{process}/AssignationUser","admin-setDefaultAssignationUserToProcess":e.proxyPrefix+"Rest/Users/Process/{process}/AssignationUser","admin-transferAllCaseSecuritypermissions":e.proxyPrefix+"Api/CaseSecurity/Processes/Permissions/Transfer","admin-transferCaseSecuritypermissions":e.proxyPrefix+"Api/CaseSecurity/Processes/{idProcess}/Permissions/Transfer","admin-revokeAllCaseSecuritypermissions":e.proxyPrefix+"Api/CaseSecurity/Processes/Permissions/Revoke","admin-revokeCaseSecuritypermissions":e.proxyPrefix+"Api/CaseSecurity/Processes/{idProcess}/Permissions/Revoke","admin-statusTransferCaseSecuritypermissions":e.proxyPrefix+"Rest/Cases/StatusTransferCaseSecuritypermissions","admin-getProfilesTypes":e.proxyPrefix+"Rest/Profile/Types","admin-searchProfiles":e.proxyPrefix+"Rest/Profile","admin-getUsersByProfile":e.proxyPrefix+"Rest/Users/Profile/{type}/{id}","admin-getUsersByProfile-report":e.proxyPrefix+"Rest/Users/Profile/{filterType}/{guidValueFilter}/Report","admin-removeUserFromProfile":e.proxyPrefix+"Rest/Profile/{type}/{id}/User/{idUser}/","admin-addUserToProfile":e.proxyPrefix+"Rest/Profile/{type}/{id}/User/{idUser}/","admin-async-activities-get-activities":e.proxyPrefix+"Rest/Cases/Asynchronous/Activities","admin-async-activities-get-retry-now":e.proxyPrefix+"Rest/Cases/{idCase}/Workitem/{idworkItem}/{idAsynchWorkitem}/RetryNow","admin-async-activities-get-activities-by-task":e.proxyPrefix+"Rest/Cases/Asynchronous/Activities/Task","admin-async-activities-enable-execution":e.proxyPrefix+"Rest/Cases/Asynchronous/Enable","admin-async-activities-enable-multiple":e.proxyPrefix+"Rest/Cases/Asynchronous/EnableMultiple","admin-async-activities-async-execution":e.proxyPrefix+"Rest/Cases/{idCase}/Workitem/{idWorkitem}/AsynchExecution","admin-async-activities-async-execution-log":e.proxyPrefix+"Rest/Cases/{idCase}/Workitem/{idworkItem}/{idAsynchWorkitem}/AsynchExecutionLog","admin-Licenses":e.proxyPrefix+"Rest/Licenses","admin-audit-license":e.proxyPrefix+"Rest/Licenses/auditLicense","admin-GetDimensions":e.proxyPrefix+"Rest/Dimensions","admin-EditDimension":e.proxyPrefix+"Rest/Dimensions/{id}","admin-CreateAdministrableDimension":e.proxyPrefix+"Rest/Dimensions/Administrable","admin-DeleteDimension":e.proxyPrefix+"Rest/Dimensions/{id}?isAdministrable={administrable}","admin-EntityPathChildNodesAction":e.proxyPrefix+"Rest/Dimensions/EntityChildNodes","admin-GetActiveWFClasses":e.proxyPrefix+"Rest/Dimensions/ActiveProcess","admin-document-templates-storeDocumentTemplates":e.proxyPrefix+"Rest/DocumentTemplates/StoreDocumentTemplates","admin-document-templates-restoreDocumentTemplates":e.proxyPrefix+"Rest/DocumentTemplates/RestoreDocumentTemplate","admin-document-templates-uploadDocumentTemplate":e.proxyPrefix+"Rest/DocumentTemplates/UploadDocumentTemplate","admin-processes-workflowClasses":e.proxyPrefix+"Rest/Processes/WorkflowClasses","admin-processes-tasksByWorkflow":e.proxyPrefix+"Rest/Processes/TasksByWorkflow","admin-processes-modifyProcessDuration":e.proxyPrefix+"Rest/Processes/{idWorkflow}/Duration/","admin-processes-modifyTaskDuration":e.proxyPrefix+"Rest/Processes/Task/{idTask}/Duration/","admin-entities-list":e.proxyPrefix+"Api/Entities/Parametrics","admin-stakeholders-list":e.proxyPrefix+"Api/Entities/Stakeholders","admin-entities-row-data":e.proxyPrefix+"Api/Entities/{guidEntity}/Data","admin-user-stakeholders":e.proxyPrefix+"Api/Users/{idUser}/Stakeholders","admin-entities-migrated-entity":e.proxyPrefix+"Rest/Entities/migratedEntity","admin-entities-get-form":e.proxyPrefix+"Rest/Handlers/Render","render-multiaction":e.proxyPrefix+"Rest/Handlers/MultiAction","admin-entity-simpleData":e.proxyPrefix+"Rest/Entities/{idEntity}/Instances/{idAttribute}/Brief","admin-language-bizagi-objects":e.proxyPrefix+"Rest/Multilanguage/BizagiObjects","admin-language-entities":e.proxyPrefix+"Rest/Multilanguage/Entities?xsrf="+bizagi.cookie(".BIZCSRF"),"admin-language-resource":e.proxyPrefix+"Rest/Multilanguage/Resource?xsrf="+bizagi.cookie(".BIZCSRF"),"admin-language-resource-download":e.proxyPrefix+"Rest/Multilanguage/LanguageExcel","admin-language-entities-download":e.proxyPrefix+"Rest/Multilanguage/EntitiesExcel","admin-language-languages":e.proxyPrefix+"Rest/Multilanguage/Languages","admin-language-reset":e.proxyPrefix+"Rest/Multilanguage/ResetPersonalization","admin-holidays-schemas":e.proxyPrefix+"Api/WorkingTimeSchema/Holidays","admin-holidays-schema":e.proxyPrefix+"Api/WorkingTimeSchema/Holidays/{schema}","admin-projectname":e.proxyPrefix+"Api/Project/Name","bam-resourcemonitor-myteam":e.proxyPrefix+"Rest/Reports/BAM/Resources/MyTeam","reports-analysisquery":e.proxyPrefix+"Rest/Reports/AnalysisQueries","reports-analysisquery-update":e.proxyPrefix+"Rest/Reports/AnalysisQueries","reports-analysisquery-delete":e.proxyPrefix+"Rest/Reports/AnalysisQueries","processviewer-processdefinition":e.proxyPrefix+"Rest/Reports/Components/ProcessDefinition","processviewer-processgraphicinfo":e.proxyPrefix+"Rest/Reports/Components/ProcessGraphicInfo","processviewer-paths":e.proxyPrefix+"Rest/Reports/Analytics/Process/FrequentPaths","mobile-getLastUpdate":e.proxyPrefix+"Rest/Util/mobileUpdates","admin-userslog":e.proxyPrefix+"Rest/Users/UserAdminLog","admin-userslicenses":e.proxyPrefix+"Rest/Licenses/CanAddNewUser","admin-createuserform":e.proxyPrefix+"Rest/Users/CreateUserAdminForm","graphicquery-trailusers":e.proxyPrefix+"Rest/Cases/TrailUsersGuid","admin-userpreferenceform-isnew":e.proxyPrefix+"Rest/Authorization/UserPreferenceForm","time-schemas-effectiveduration":e.proxyPrefix+"Api/WorkingTimeSchema/EffectiveDurationGuid?idUser={idUser}&fromDate={fromDate}&toDate={toDate}","time-schemas-end-hour-working-by-date":e.proxyPrefix+"Api/WorkingTimeSchema/EndHourWorkingByDateGuid?idUser={idUser}&date={date}","project-resource-action":e.proxyPrefix+"Api/CaseResource/{typeResource}","project-resource-get":e.proxyPrefix+"Api/CaseResource/{typeResource}?globalParent={globalParent}","project-resource-delete":e.proxyPrefix+"Api/CaseResource/{typeResource}/{idResource}","project-users-get":e.proxyPrefix+"Rest/Users/UserPicturesGuid","project-comments-get":e.proxyPrefix+"Api/CaseResource/{idParent}/CommentGuid?dateTime={dateTime}&count={count}","project-comments-count-by-parent":e.proxyPrefix+"Api/CaseResource/{idParent}/Comment/Count","project-util-current-time":e.proxyPrefix+"Api/CaseResource/Util/CurrentTime","project-comments-uploadfiles":e.proxyPrefix+"Api/CaseResource/Attachment","project-attachment-download":e.proxyPrefix+"Api/CaseResource/Attachment/{Attachment}?xsrf="+bizagi.cookie(".BIZCSRF"),"project-files-upload":e.proxyPrefix+"Api/CaseResource/FileGuid","project-files-list":e.proxyPrefix+"Api/CaseResource/FileGuid?globalParent={globalParent}","project-files-thumbnails":e.proxyPrefix+"Api/CaseResource/File/Thumbnails","project-plan-createactivity":e.proxyPrefix+"Api/Plans/{idPlan}/ActivitiesGuid","project-plan-get":e.proxyPrefix+"Api/Plans/Guid/{idPlan}","project-plan-get-case":e.proxyPrefix+"Api/Plans/{idPlan}/IdCase","project-plan-get-by-parent":e.proxyPrefix+"Api/Plans/Guid?parentWorkItem={parentWorkItem}","project-plan-execute":e.proxyPrefix+"Api/Plans/Execute","project-plan-close":e.proxyPrefix+"Api/Plans/Close","project-plan-delete":e.proxyPrefix+"Api/Plans/{idPlan}","project-plan-activities":e.proxyPrefix+"Api/Plans/{idPlan}/ActivitiesGuid","project-plan-workitems":e.proxyPrefix+"Api/Plans/{idPlan}/WorkItemsGuid","project-plan-parent":e.proxyPrefix+"Api/Plans/{idPlan}/ParentCase","project-plan-first-parent-plan":e.proxyPrefix+"Api/Plans/{idPlan}/FirstParentPlanGuid","project-plan-first-parent":e.proxyPrefix+"Api/Plans/{idPlan}/FirstParentCase","project-activity-update-progress":e.proxyPrefix+"Api/Plans/Activity/{idActivity}/Progress","project-plan-update":e.proxyPrefix+"Api/Plans/Guid/{idPlan}","project-plan-activity-tasks-get":e.proxyPrefix+"Api/Plans/{idPlan}/Activities/{idActivity}/Items","project-plan-activity-get":e.proxyPrefix+"Api/Plans/{idPlan}/ActivitiesGuid/{idActivity}","project-plan-activity-delete":e.proxyPrefix+"Api/Plans/{idPlan}/Activities/{id}","project-plan-activity-edit":e.proxyPrefix+"Api/Plans/{idPlan}/ActivitiesGuid/{id}","project-plan-transitions-get":e.proxyPrefix+"Api/Plans/{idPlan}/Activities/Transitions","project-plan-transitions-put":e.proxyPrefix+"Api/Plans/{idPlan}/Activities/Transitions","project-plan-template-create-by-plan":e.proxyPrefix+"Api/Plans/Templates","project-plan-template-get":e.proxyPrefix+"Api/Templates","project-timeline-events-get":e.proxyPrefix+"Api/CaseResource/TimeLineGuid?{idCaseParamValue}","project-workitem-assignees":e.proxyPrefix+"Api/CaseResource/{idWorkitem}/Assignees","project-workitem-assignees-items":e.proxyPrefix+"Api/CaseResource/{idWorkitem}/ItemAssigneeWorkItem","project-plan-create":e.proxyPrefix+"Api/Plans/Guid","project-plan-create-by-template":e.proxyPrefix+"Api/Templates/{idTemplate}/PlansGuid","project-plan-get-all":e.proxyPrefix+"Api/Plans/Templates/get",plans:e.proxyPrefix+"Api/Plans/Guid","stuff-handler-getUserStuff":e.proxyPrefix+"Api/CurrentUser/Collections","get-current-theme":e.proxyPrefix+"Api/CurrentUser/GetCurrentTheme","process-handler-getIdCasesOfProcessEntities":e.proxyPrefix+"Api/Entities/Cases","handler-get-myShortcuts":e.proxyPrefix+"Api/CurrentUser/Shortcuts","handler-execute-action-start":e.proxyPrefix+"Api/Cases/{processId}/Start","handler-validate-action-has-start-form":e.proxyPrefix+"Api/Processes/{processId}/StartContext","process-getIcon":e.proxyPrefix+"Api/Processes/{processId}/Icon","collections-getIcon":e.proxyPrefix+"Api/CurrentUser/Collections/{collectionId}/Icon","data-navigation-handler-collection":e.proxyPrefix+"Api/CurrentUser/Collections/{reference}/Data/{surrogateKey}","data-navigation-handler-entity":e.proxyPrefix+"Api/CurrentUser/Entities/{reference}/Data/{surrogateKey}/{xpath}","data-navigation-handler-entity-filters":e.proxyPrefix+"Api/CurrentUser/Entities/{reference}/Filters/{surrogateKey}/{xpath}","action-handler-getProcessAddAction":e.proxyPrefix+"Api/CurrentUser/Collections/{reference}/{surrogateKey}/Actions","entities-handler-getMapping":e.proxyPrefix+"Rest/Entities/Mapping","entities-handler-getActions":e.proxyPrefix+"Api/Entities/{guidEntity}/{surrogateKey}/actions","actions-handler-getDataForm":e.proxyPrefix+"Rest/Handlers/Render","actions-handler-hasStartForm":e.proxyPrefix+"Rest/Processes/HasStartForm","actions-handler-executeRule-simple":e.proxyPrefix+"Api/Rules/{ruleId}/Execute","actions-handler-executeRule-multiple":e.proxyPrefix+"Api/Rules/{ruleId}/ExecuteMultiple","sort-bar-getMultipleInstancesActions":e.proxyPrefix+"Rest/Entities/multipleInstancesActions","sort-bar-getMapping":e.proxyPrefix+"Rest/Entities/Mapping","sort-bar-execute":e.proxyPrefix+"Api/Action/Execute","activity-map":e.proxyPrefix+"Rest/Processes/ActivityMap/","activity-map-getActivitySummary":e.proxyPrefix+"Rest/Processes/ActivitySummary","subprocess-map":e.proxyPrefix+"Rest/Processes/SubProcessMap","shorcuts-getStakeHolderShorcuts":e.proxyPrefix+"/Api/Stakeholder/Shortcuts","my-search-getSearchLists":e.proxyPrefix+"Api/CurrentUser/Searches","my-search-getFilters":e.proxyPrefix+"Api/CurrentUser/Searches/{guidSearch}/Filters","my-search-getFiltersData":e.proxyPrefix+"Api/CurrentUser/Searches/{guidSearch}/FilterData","my-search-getData":e.proxyPrefix+"Api/CurrentUser/Searches/{guidSearch}/Data","admin-getAdhocProcessesList":e.proxyPrefix+"Api/AdhocProcesses/Search","admin-createAdhocProcess":e.proxyPrefix+"Api/AdhocProcesses/Create","admin-updateAdhocProcess":e.proxyPrefix+"Api/AdhocProcesses/Update","admin-updateAdhocTask":e.proxyPrefix+"Api/AdhocProcesses/{processId}/Activity","admin-deleteAdhocTask":e.proxyPrefix+"Api/AdhocProcesses/{processId}/Activity/{taskId}","admin-deleteAdhocProcess":e.proxyPrefix+"Api/AdhocProcesses/{processId}","admin-publishAdhocProcess":e.proxyPrefix+"Api/AdhocProcesses/Publish","admin-cloneAdhocProcess":e.proxyPrefix+"Api/AdhocProcesses/Clone","admin-getAdhocTask":e.proxyPrefix+"Api/AdhocProcesses/{processId}/Task/{taskId}","admin-getAllEntities":e.proxyPrefix+"Api/AdhocProcesses/Entities","admin-getAllCategories":e.proxyPrefix+"Api/AdhocProcesses/Categories","admin-createNewAdhocProcess":e.proxyPrefix+"Api/LiveProcesses","admin-getAdhocDataSchema":e.proxyPrefix+"Api/LiveProcesses/{processId}/DataSchema","admin-getAdhocProcessDiagram":e.proxyPrefix+"Api/LiveProcesses/{processId}/Diagram","admin-saveAdhocProcessDiagram":e.proxyPrefix+"Api/LiveProcesses/{processId}/Diagram","admin-adhoc-entities-list":e.proxyPrefix+"Api/AdhocProcesses/AdhocEntity/All","admin-saveAdhocEntity":e.proxyPrefix+"Api/AdhocProcesses/AdhocEntity/Save","admin-saveAdhocEntityInstance":e.proxyPrefix+"Api/AdhocProcesses/AdhocEntity/{entityId}/Instance/{isNew}","admin-adhoc-entity-instances":e.proxyPrefix+"Api/AdhocProcesses/AdhocEntity/{entityId}/Instances","admin-entity-values":e.proxyPrefix+"Api/AdhocProcesses/{context}/{entityId}/Values","admin-adhoc-user-group-list":e.proxyPrefix+"Api/LiveProcesses/UserGroups","admin-adhoc-user-group-save":e.proxyPrefix+"Api/LiveProcesses/UserGroups","admin-adhoc-user-group-delete":e.proxyPrefix+"Api/LiveProcesses/UserGroups/{groupId}","admin-adhoc-user-group-data-get":e.proxyPrefix+"Api/LiveProcesses/UserGroups/{groupId}/Users","admin-adhoc-user-group-data-add":e.proxyPrefix+"Api/LiveProcesses/UserGroups/{groupId}/Users/{userId}","admin-adhoc-user-group-data-remove":e.proxyPrefix+"Api/LiveProcesses/UserGroups/{groupId}/Users/{userId}","admin-adhoc-authorization-data-get":e.proxyPrefix+"Api/AdhocProcesses/Authorization","admin-adhoc-authorization-data-save":e.proxyPrefix+"Api/AdhocProcesses/{processId}/{isAdhocTask}/Authorization/Save","oauth2-getApplications":e.proxyPrefix+"oauth2/server/application","oauth2-getApplication":e.proxyPrefix+"oauth2/server/application/id/{applicationId}","oauth2-createApplication":e.proxyPrefix+"oauth2/server/application","oauth2-deleteApplication":e.proxyPrefix+"oauth2/server/application/{applicationId}","oauth2-updateApplication":e.proxyPrefix+"oauth2/server/application/{applicationId}","oauth2-updateClientSecretKeysApplication":e.proxyPrefix+"oauth2/server/application/{applicationId}/updateClientSecretKeys","login-qr-image64":e.proxyPrefix+"Api/Authentication/AccessQRCode","user-gdpr-downloadReportUser":e.proxyPrefix+"rest/users/{idUser}/Report?xsrf="+bizagi.cookie(".BIZCSRF"),"user-gdpr-anonymizeUser":e.proxyPrefix+"rest/users/{idUser}/Report",userDelegation:e.proxyPrefix+"rest/UserDelegate",userFilterOptions:e.proxyPrefix+"rest/UserFilters",catalogQL:e.proxyPrefix+"rest/CatalogQL/Query",currentUser:e.proxyPrefix+"rest/Users/CurrentUserGuid",getUsersForDelegation:e.proxyPrefix+"rest/UserFilters",downloadBPUsReport:e.proxyPrefix+"rest/Reports/BPU"}):"sharepoint"==e.context||"portal"==e.context?(void 0===e.sharepointProxyPrefix&&alert("sharepointProxyPrefix param is requiered to build endpoints when context is 'sharepoint'"),{"user-handler":e.sharepointProxyPrefix+"RestServices/UserHandler.ashx","process-handler":e.sharepointProxyPrefix+"RestServices/ProcessHandler.ashx","query-handler":e.sharepointProxyPrefix+"Rest/Handlers/Query","case-handler":e.sharepointProxyPrefix+"RestServices/CaseHandler.ashx","query-form":e.sharepointProxyPrefix+"App/ListaDetalle/QueryForm.aspx","query-form-edit":e.sharepointProxyPrefix+"App/ListaDetalle/SaveQuery.aspx","query-form-delete":e.sharepointProxyPrefix+"App/ListaDetalle/QueryForm.aspx","query-form-delete-cube":e.sharepointProxyPrefix+"Rest/Queries/Cubes/{idCube}","favorites-handler":e.sharepointProxyPrefix+"RestServices/FavoritesHandler.ashx","file-handler":e.sharepointProxyPrefix+"RestServices/EntityHandler.ashx","login-handler":e.sharepointProxyPrefix+"RestServices/UserHandler.ashx?action=authenticateUser&userName={0}&password={1}&domain={2}","logoff-handler":e.sharepointProxyPrefix+"RestServices/UserHandler.ashx?action=logOff",overrides:e.sharepointProxyPrefix+"Rest/Util/Overrides","authorization-handler-getMenuAuthorization":e.sharepointProxyPrefix+"Rest/Authorization/MenuAuthorization","authorization-handler-isCaseCreationAuthorized":e.sharepointProxyPrefix+"Rest/Authorization/Processes/{0}/IsCaseCreationAuthorized","case-handler-getCaseSummary":e.sharepointProxyPrefix+"Rest/Cases/{idCase}/Summary","case-handler-getCaseSummaryByGuid":e.sharepointProxyPrefix+"Rest/Cases/{guid}/SummaryByGuid","case-handler-releaseActivity":e.proxyPrefix+"Rest/Cases/{idCase}/ReleaseActivity","case-handler-getCaseTasks":e.sharepointProxyPrefix+"Rest/Cases/{idCase}/Tasks","case-handler-getCaseEvents":e.sharepointProxyPrefix+"Rest/Cases/{idCase}/Events","case-handler-getCaseSubprocesses":e.sharepointProxyPrefix+"Rest/Cases/{idCase}/Subprocesses","case-handler-getTaskAssignees":e.sharepointProxyPrefix+"Rest/Cases/{idCase}/Tasks/{idTask}/AssigneesGuid","case-handler-getCaseAssignees":e.sharepointProxyPrefix+"Rest/Cases/{idCase}/Assignees","case-handler-getWorkItems":e.sharepointProxyPrefix+"Rest/Cases/{idCase}/WorkItems","case-handler-getWorkItemsByGuid":e.sharepointProxyPrefix+"Rest/Cases/{guid}/WorkItemsByGuid","case-handler-getAsynchExecutionState":e.sharepointProxyPrefix+"Rest/Cases/{idCase}/AsynchExecutionState","case-handler-addNewCase":e.sharepointProxyPrefix+"Rest/Cases","case-handler-startProcess":e.sharepointProxyPrefix+"Rest/Processes/StartProcess/{idProcess}","case-handler-getActivityLog":e.sharepointProxyPrefix+"Rest/Cases/{idCase}/ActivityLog","case-handler-getActivityDetailLog":e.sharepointProxyPrefix+"Rest/Cases/{idWorkItemFrom}/ActivityDetailLog","case-handler-getEntityLog":e.sharepointProxyPrefix+"Rest/Cases/{idCase}/EntityLog","case-handler-getEntityDetailLog":e.sharepointProxyPrefix+"Rest/Cases/{idCase}/EntityDetailLog","case-handler-getUserLog":e.sharepointProxyPrefix+"Rest/Cases/{idCase}/UserLog","case-handler-getUserDetailLog":e.sharepointProxyPrefix+"Rest/Cases/{idCase}/UserDetailLog","case-handler-getCaseFormsRenderVersion":e.sharepointProxyPrefix+"Rest/Cases/{idCase}/FormsRenderVersion","case-handler-getCaseFormsRenderVersionByGuid":e.sharepointProxyPrefix+"Rest/Cases/{guid}/FormsRenderVersionByGuid","offline-getProcessTree":e.proxyPrefix+"Rest/Processes/OfflineProcessTree","offline-getForms":e.proxyPrefix+"Rest/RenderForm/offlineForms","offline-sendForm":e.proxyPrefix+"Rest/Cases/SaveAsynchWorkItemOffLine","case-handler-getCasesList":e.proxyPrefix+"Rest/Processes/GetCases","favorites-handler-saveFavorite":e.sharepointProxyPrefix+"Rest/Favorites","favorites-handler-deleteFavorite":e.sharepointProxyPrefix+"Rest/Favorites/{guidFavorite}","bamAnalytics-handler-getAnalisysQueries":e.sharepointProxyPrefix+"Rest/BAMAnalytics/AnalisysQueries","bamAnalytics-handler-updateQuery":e.sharepointProxyPrefix+"Rest/BAMAnalytics/Reports/Ids/{idQuery}","inbox-handler-getInboxSummary":e.sharepointProxyPrefix+"Rest/Inbox/Summary","MessageHandler-NewComment":e.sharepointProxyPrefix+"Rest/Cases/{idCase}/Comments","MessageHandler-GetComments":e.sharepointProxyPrefix+"Rest/Cases/{idCase}/Comments","MessageHandler-SetCategoryToComment":e.sharepointProxyPrefix+"Rest/Cases/{idCase}/Comments/{idComment}","MessageHandler-RemoveComment":e.sharepointProxyPrefix+"Rest/Cases/{idCase}/Comments/{idComment}","MessageHandler-ReplyComment":e.sharepointProxyPrefix+"Rest/Cases/{idCase}/Comments/{idComment}/Replies","MessageHandler-RemoveReply":e.sharepointProxyPrefix+"Rest/Cases/{idCase}/Comments/{idComment}/Replies/{idReply}","MessageHandler-GetCategoryColors":e.sharepointProxyPrefix+"Rest/Cases/Comments/CategoryColors","MessageHandler-RenameCategoryColor":e.sharepointProxyPrefix+"Rest/Cases/Comments/CategoryColors/{idColorCategory}","MessageHandler-CountNewComments":e.sharepointProxyPrefix+"Rest/Cases/{idCase}/Comments/{idLastComment}","process-handler-getAllProcesses":e.sharepointProxyPrefix+"Rest/Processes","process-handler-getCustomizedColumnsData":e.sharepointProxyPrefix+"Rest/Processes/CustomizedColumnsData","process-handler-getCategory":e.sharepointProxyPrefix+"Rest/Processes/Categories","process-handler-getRecentProcesses":e.sharepointProxyPrefix+"Rest/Processes/RecentProcesses","process-handler-getCustomizedColumnsDataInfo":e.sharepointProxyPrefix+"Rest/Processes/CustomizedColumnsDataInfo","process-handler-getActivitiesData":e.sharepointProxyPrefix+"Rest/Processes/CasesData/MyActivities","process-handler-getPendingsData":e.proxyPrefix+"Rest/Processes/CasesData/MyPendings","query-handler-getqueries":e.sharepointProxyPrefix+"Rest/Queries","user-handler-getCurrentUser":e.sharepointProxyPrefix+"Rest/Users/CurrentUser","old-render":e.sharepointProxyPrefix+"App/ListaDetalle/Detalle.aspx",Reports:e.sharepointProxyPrefix+"RestServices/BAMAnalyticsHandler.ashx","reports-handler-deleteQueries":e.sharepointProxyPrefix+"Rest/BAMAnalytics/Reports/{QueryId}","folders-handler-getUserQueries":e.sharepointProxyPrefix+"Rest/SmartFolders","folders-associate-deleteSmartFolder":e.sharepointProxyPrefix+"Rest/SmartFolders/{idSmartFolder}","folders-handler":e.sharepointProxyPrefix+"RestServices/SmartFoldersHandler.ashx","folders-associate":e.sharepointProxyPrefix+"App/Ajax/AJAXGateway.aspx","smartfolders-integration":e.sharepointProxyPrefix+"App/WorkPortal/ConfigureFilteredFolder.aspx",AlarmAdmin:e.sharepointProxyPrefix+"App/Admin/AlarmsAdmin.aspx",AnalyticsProcess:e.sharepointProxyPrefix+"App/Cockpit/AnalyticsProcess.aspx",AnalyticsSensor:e.sharepointProxyPrefix+"App/Cockpit/AnalyticsSensor.aspx",AnalyticsTask:e.sharepointProxyPrefix+"App/Cockpit/AnalyticsTask.aspx",AsynchronousWorkitemRetries:e.sharepointProxyPrefix+"App/Admin/AsynchDisabledWorkitems.aspx",AuthenticationLogQuery:e.sharepointProxyPrefix+"App/Admin/AuthLogQuery.aspx",BAMProcess:e.sharepointProxyPrefix+"App/Cockpit/BAMProcess.aspx",BAMTask:e.sharepointProxyPrefix+"App/Cockpit/BAMTask.aspx",BusinessPolicies:e.sharepointProxyPrefix+"App/Admin/BusinessPolicies/BusinessPoliciesSelector.aspx",CaseAdmin:e.sharepointProxyPrefix+"App/Admin/CaseSearch.aspx",CasesMonitor:e.sharepointProxyPrefix+"App/Admin/CasesMonitor.aspx",Closed:e.sharepointProxyPrefix+"App/ListaDetalle/listaitems.aspx?h_Location=Cerrados&I_ProcessState=Completed",CurrentUser:e.sharepointProxyPrefix+"App/Admin/CurrentUser.aspx",EncryptionAdmin:e.sharepointProxyPrefix+"App/Admin/Encrypt.aspx",MobileUpdatesAdmin:e.sharepointProxyPrefix+"App/MobileUpdates/default.aspx",EntityAdmin:e.sharepointProxyPrefix+"App/Admin/Entity.aspx",LocationResources:e.sharepointProxyPrefix+"App/Admin/AdminLocResources.aspx",NewCase:e.sharepointProxyPrefix+"App/Radicar/application.aspx",Pending:e.sharepointProxyPrefix+"App/ListaDetalle/listaitems.aspx?h_Location=Pendientes&I_processState=Running",Profiles:e.sharepointProxyPrefix+"App/Admin/ProfilesAdminSearch.aspx",Search:e.sharepointProxyPrefix+"App/ListaDetalle/Search.aspx",UserAdmin:e.sharepointProxyPrefix+"App/Admin/ListUsers.aspx",UserDefaultAssignation:e.sharepointProxyPrefix+"App/Admin/DefaultAssignationUser.aspx?h_AdminDefaultAssign=1",UserPendingRequests:e.sharepointProxyPrefix+"App/Admin/UserPendingRequests.aspx",ListPreferences:e.sharepointProxyPrefix+"App/Admin/CurrentUser.aspx",GRDimensionAdmin:e.sharepointProxyPrefix+"App/Cockpit/DimensionEdit.aspx",Licenses:e.sharepointProxyPrefix+"App/Admin/Licenses.aspx",AnalysisQueries:e.sharepointProxyPrefix+"App/Inicio/WPAnalysisQuery.aspx",ProcessAdmin:e.sharepointProxyPrefix+"App/Admin/AdminProcess.aspx",ResourceBAM:e.sharepointProxyPrefix+"App/Cockpit/BAMResourceMonitor.aspx",WorkPortalVersion:e.sharepointProxyPrefix+"Rest/Util/Version","entities-administration":"RestServices/EntityHandler.ashx",getCurrentTheme:e.sharepointProxyPrefix+"Api/Theme/Current","process-handler-getFavourites":e.proxyPrefix+"Rest/Home/MyFavorites/Count","process-handler-getFavouriteCases":e.proxyPrefix+"Rest/Home/MyFavorites","stuff-handler-getUserStuff":e.sharepointProxyPrefix+"Rest/Stakeholder/Collections","stuff-handler-getUserStuff-v2":e.sharepointProxyPrefix+"Rest/Stakeholder/Collections/v2","templates-handler-getCollectionData":e.proxyPrefix+"Api/Collection/{idFact}/Data","templates-handler-getVirtualCollectionData":e.proxyPrefix+"Api/Collection/{guidVirtualCollection}/VirtualData","entities-handler-getMapping":e.sharepointProxyPrefix+"Rest/Entities/Mapping","entities-handler-getActions":e.sharepointProxyPrefix+"Rest/Entities/Actions","actions-handler-getDataForm":e.sharepointProxyPrefix+"Rest/Handlers/Render","actions-handler-hasStartForm":e.sharepointProxyPrefix+"Rest/Processes/HasStartForm","actions-handler-executeRule":e.sharepointProxyPrefix+"Rest/Action/Rule","process-handler-getUsersAndEvents":e.sharepointProxyPrefix+"Rest/Processes/CasesData/UsersAndEvents"}):{}},$.Class.extend("bizagi.workportal.services.context",{},{init:function(e){this.context=e.context,this.endPoints=bizagi.workportal.services.getEndPoints(e),this.proxyPrefix=bizagi.util.isEmpty(e.proxyPrefix)?"":e.proxyPrefix},getUrl:function(e){return null==this.endPoints[e]&&bizagi.log("Url not found","No endpoint defined for: "+e),this.endPoints[e]}}),$.Class.extend("bizagi.workportal.services.service",{BA_CONTEXT_PARAMETER_PREFIX:"h_",ENTITIES_QUERY_PAGE_SIZE:10},{init:function(e){(e="object"==typeof e?e:{}).context=bizagi.util.isEmpty(e.context)?"workportal":e.context,e.proxyPrefix=bizagi.util.isEmpty(e.proxyPrefix)?"":e.proxyPrefix,e.proxyPrefix=this.normalizeUrl(e.proxyPrefix),bizagi.RPproxyPrefix=e.proxyPrefix,e.sharepointProxyPrefix=bizagi.util.isEmpty(e.sharepointProxyPrefix)?"":e.sharepointProxyPrefix,e.sharepointProxyPrefix=this.normalizeUrl(e.sharepointProxyPrefix),this.serviceLocator=new bizagi.workportal.services.context(e),this.multiactionService=new bizagi.workportal.services.multiactionservice(this),this.pageSize=10,"undefined"!=typeof BIZAGI_INBOX_ROWS_PER_PAGE&&(this.pageSize=$.isNumeric(BIZAGI_INBOX_ROWS_PER_PAGE)?BIZAGI_INBOX_ROWS_PER_PAGE:this.pageSize),bizagi.injector.registerInstance("dataService",this)},multiaction:function(){return this.multiactionService},getUrl:function(e){return this.serviceLocator.getUrl(e.endPoint)},normalizeUrl:function(e){return""!=e&&("/"!=e[e.length-1]&&(e=e.concat("/")),-1==e.indexOf("http://")&&-1==e.indexOf("https://")&&(e="http://"+e)),e},getCurrentTheme:function(){var e=this.serviceLocator.getUrl("getCurrentTheme");return $.read(e)},getOverrides:function(){return $.ajax({url:this.serviceLocator.getUrl("overrides")}).pipe(function(e){return e=e||{},$.each(e,function(t,i){var r=i.toUpperCase();"TRUE"!=r&&"FALSE"!=r||(e[t]=bizagi.util.parseBoolean(i))}),e})},authenticatedUser:function(e){var t=this,i=t.serviceLocator.getUrl("login-handler");return $.read({url:i,data:{userName:BIZAGI_USER,password:BIZAGI_PASSWORD,domain:BIZAGI_DOMAIN}}).pipe(function(e){return e},function(e){return i=(i=(i=(i=t.serviceLocator.getUrl("login-handlerv10")).replace("{0}",BIZAGI_USER||"")).replace("{1}",BIZAGI_PASSWORD||"")).replace("{2}",BIZAGI_DOMAIN||""),$.ajax({url:i,type:"GET",dataType:"json"})})},logoutUser:function(e){var t=this.serviceLocator.getUrl("logoff-handlerv1");return $.read({url:t})},logOffUser:function(e){var t=this.serviceLocator.getUrl("logoff-handler");return $.read({url:t})},getCurrentUser:function(e){return $.read(this.serviceLocator.getUrl("user-handler-getCurrentUser"))},getInboxSummary:function(e){return $.read(this.serviceLocator.getUrl("inbox-handler-getInboxSummary")).pipe(function(e){return e.inboxSummary})},getAllProcesses:function(e){e=e||{};var t={},i=this.serviceLocator.getUrl("process-handler-getAllProcesses");return null!=e.taskState&&(t.taskState=e.taskState),null!=e.onlyFavorites&&""!=e.onlyFavorites&&(t.onlyFavorites=e.onlyFavorites),null!=e.myActivities&&""!=e.myActivities&&(t.myActivities=e.myActivities),null!=e.myPendings&&""!=e.myPendings&&(t.myPendings=e.myPendings),e.smartfoldersParameters&&(i=i+"?"+e.smartfoldersParameters),bizagi.isMobile()&&(t.mobileDevice=!0),$.read(i,t).pipe(function(t){if(e.skipAggrupate)return t;var i={},r={},a=bizagi.localization.getResource("workportal-widget-inbox-all-processes"),o={name:bizagi.localization.getResource("workportal-widget-inbox-all-cases"),path:"",category:a,isFavorite:e.onlyFavorites||!1,guidFavorite:"",idworkflow:"",guidWFClass:"",count:0};for(key in r[a]=[],r[a].workflows=[],r[a].workflows.push(o),t.workflows&&$.each(t.workflows.workflow,function(e,t){r[t.category]||(r[t.category]=[],r[t.category].workflows=[]),r[t.category].workflows.push(t),o.count+=Number(t.count)}),i.categories=[],r)i.categories.push({name:key,workflows:r[key].workflows});return i})},getProcessIcon:function(e){var t={processId:e.processId};return $.read({url:this.serviceLocator.getUrl("process-getIcon"),data:t,batchRequest:!0})},getCollectionIcon:function(e){var t={collectionId:e.collectionId};return $.read({url:this.serviceLocator.getUrl("collections-getIcon"),data:t,batchRequest:!0})},getFavourites:function(){var e=this.serviceLocator.getUrl("process-handler-getFavourites");return $.read(e,{}).pipe(function(e){return e})},getMyStuff:function(){var e=this.serviceLocator.getUrl("process-handler-getMyStuff");return $.read(e,{}).pipe(function(e){return e})},getFavouriteCases:function(e){var t={},i=this.serviceLocator.getUrl("process-handler-getFavouriteCases");return e=e||{},t.pageSize=e.pageSize||this.pageSize,t.page=e.page||1,bizagi.isMobile()&&(t.mobileDevice=!0),$.read(i,t).pipe(function(e){return e})},getActions:function(e){e=e||{};var t={},i=this.serviceLocator.getUrl("process-handler-getActions");return bizagi.isMobile()&&(t.mobileDevice=!0),$.read(i,t).pipe(function(e){return e})},getCasesList:function(e){e=e||{};var t={},i=this.serviceLocator.getUrl("case-handler-getCasesList");return t.pageSize=e.pageSize||10,t.page=e.page||1,t.numberOfFields=e.numberOfFields||"-1",t.idWfClass=e.idWfClass||"-1",$.read(i,t).pipe(function(e){for(var t={overdue:[],today:[],tomorrow:[],upcoming:[],page:e.page,totalPages:e.totalPages},i=new Date,r=i.getMonth(),a=i.getDate(),o=i.getYear(),s=0;e.elements.length>s;s++){var n=e.elements[s],l=new Date(n[3]),c=l.getDate(),d=l.getMonth(),u=l.getYear();a>c||r>d&&o>=u?(n[3]=bizagi.util.dateFormatter.formatDate(new Date(n[3]),"dd MMM"),t.overdue.push(n)):a==c?(n[3]=bizagi.util.dateFormatter.formatDate(new Date(n[3]),"hh:mm"),t.today.push(n)):a+1==c?(n[3]=bizagi.util.dateFormatter.formatDate(new Date(n[3]),"hh:mm"),t.tomorrow.push(n)):(n[3]=bizagi.util.dateFormatter.formatDate(new Date(n[3]),"dd MMM"),t.upcoming.push(n))}return t})},getAllAdministrableEntities:function(e){e=e||{};var t={action:"entitiesList",kind:"administrable"};return $.ajax({url:this.serviceLocator.getUrl("entities-administration"),data:t,type:"POST",dataType:"json"}).pipe(function(e){var t={entities:[]};return $.each(e,function(e,i){t.entities.push(i)}),t})},getEntitiesList:function(e){return(e=e||{}).action="entitiesList",e.kind="entitiesData",$.ajax({url:this.serviceLocator.getUrl("entities-administration"),data:e,type:"POST",dataType:"json"})},getCasesByWorkflow:function(e){e=e||{};var t={},i=this.serviceLocator.getUrl("process-handler-getCustomizedColumnsDataInfo");if(bizagi.util.isEmpty(e.taskState)||(t.taskState=e.taskState),bizagi.util.isEmpty(e.idWorkflow)||(t.idWorkflow=e.idWorkflow),1==e.onlyFavorites&&(t.onlyFavorites=!0,t.taskState="all"),t.pageSize=e.pageSize||this.pageSize,t.page=e.page||1,bizagi.isMobile()&&(t.mobileDevice=!0),e.smartfoldersParameters){var r=e.smartfoldersParameters.split("&");$.each(r,function(e,i){var r=i.split("=");t[r[0]]=r[1]})}return $.read(i,t).pipe(function(e){return $.each(e.cases.rows,function(t,i){var r=[];e.cases.rows[t].radnumber=i.id,$.each(i.fields,function(i,a){if(null!=a)try{null!=a.isRadNumber&&"true"==a.isRadNumber?e.cases.rows[t].radnumber=a.Value:null!=a.workitems?e.cases.rows[t].workitems=a.workitems:r.push(a)}catch(e){}}),e.cases.rows[t].fields=r}),e.cases})},getOrganizationsList:function(){var e=this.serviceLocator.getUrl("process-handler-getOrganizations"),t={type:12,name:""};return $.read(e,t)},getOrganizationsByUserList:function(){var e=this.serviceLocator.getUrl("process-handler-getOrganizationsByUser"),t={type:12,name:""};return $.read(e,t)},getCustomizedColumnsData:function(e){e=e||{};var t={},i=this.serviceLocator.getUrl("process-handler-getCustomizedColumnsData");t.pageSize=e.pageSize||this.pageSize,t.pageSize=t.pageSize<1?10:t.pageSize,t.page=e.page||1,t.orderFieldName=e.orderFieldName||"",t.orderType=e.orderType||"0",t.order=e.order||"",bizagi.isMobile()&&(t.mobileDevice=!0),e.taskState=e.taskState||"all";var r=e.taskState.toString().toLowerCase();if(""==r&&(e.taskState="all"),"red"==r&&(e.taskState="Red"),"yellow"==r&&(e.taskState="Yellow"),"green"==r&&(e.taskState="Green"),t.taskState=e.taskState,bizagi.util.isEmpty(e.idWorkflow)||(t.idWorkflow=e.idWorkflow),bizagi.util.isEmpty(e.idTask)||(t.idTask=e.idTask),bizagi.util.isEmpty(e.radNumber)||(t.radNumber=e.radNumber),1==e.onlyFavorites&&(t.onlyFavorites=!0,t.taskState="all"),e.smartfoldersParameters){var a=e.smartfoldersParameters.split("&");$.each(a,function(e,i){var r=i.split("=");t[r[0]]=r[1]})}return e.group&&(t.group=e.group),$.read(i,t)},getCategories:function(e){var t={};return(e=e||{}).idCategory&&(t.idCategory=e.idCategory),e.idApp&&(t.idApp=e.idApp),bizagi.isMobile()&&(t.mobileDevice=!0),t.groupByApp=e.groupByApp||!1,$.read(this.serviceLocator.getUrl("process-handler-getCategory"),t)},getRecentProcesses:function(e){return e=e||{},$.read(this.serviceLocator.getUrl("process-handler-getRecentProcesses"),e)},getCaseSummary:function(e){return void 0!==(e=e||{}).idCase?$.read({url:this.serviceLocator.getUrl("case-handler-getCaseSummary"),data:{idCase:e.idCase,eventAsTasks:e.eventAsTasks||"false",onlyUserWorkItems:e.onlyUserWorkItems||"true",mobileDevice:bizagi.isMobile()||"false"},serviceType:"GETSUMMARY"}).pipe(function(e){return e.isAborted&&(e.isAborted=bizagi.util.parseBoolean(e.isAborted)),e}):void 0!==e.guid?$.read({url:this.serviceLocator.getUrl("case-handler-getCaseSummaryByGuid"),data:{guid:e.guid,eventAsTasks:e.eventAsTasks||"false",onlyUserWorkItems:e.onlyUserWorkItems||"true",mobileDevice:bizagi.isMobile()||"false"},serviceType:"GETSUMMARY"}).pipe(function(e){return e}):void 0},getCaseAssignees:function(e){return e=e||{},$.read(this.serviceLocator.getUrl("case-handler-getCaseAssignees"),{idCase:e.idCase}).pipe(function(e){return e})},getCaseTasks:function(e){return e=e||{},$.read(this.serviceLocator.getUrl("case-handler-getCaseTasks"),{idCase:e.idCase})},getCaseEvents:function(e){return e=e||{},$.read({url:this.serviceLocator.getUrl("case-handler-getCaseEvents"),data:{idCase:e.idCase},serviceType:"GETEVENTS"}).pipe(function(e){return e})},getCaseSubprocesses:function(e){return e=e||{},$.read({url:this.serviceLocator.getUrl("case-handler-getCaseSubprocesses"),data:{idCase:e.idCase},serviceType:"GETSUBPROCESSES"}).pipe(function(e){return e})},getCaseFormsRenderVersion:function(e){return void 0!==(e=e||{}).guid?$.read(this.serviceLocator.getUrl("case-handler-getCaseFormsRenderVersionByGuid"),{guid:e.guid}):$.read(this.serviceLocator.getUrl("case-handler-getCaseFormsRenderVersion"),{idCase:e.idCase})},getCaseFormsRenderVersionDataContent:function(e){var t=new $.Deferred;return $.when(this.getCaseFormsRenderVersion(e)).done(function(e){t.resolve(e)}),t.promise()},getTaskAssignees:function(e){return e=e||{},$.read(this.serviceLocator.getUrl("case-handler-getTaskAssignees"),{idCase:e.idCase,idTask:e.idTask})},getWorkitems:function(e){var t={};void 0!==(e=e||{}).guid&&(t.guid=e.guid),t.idCase=e.idCase,"0"!=e.fromTask&&(t.fromTask=e.fromTask),""!=e.fromWorkItemId&&(t.fromWorkItemId=e.fromWorkItemId),t.mobileDevice=bizagi.isMobile(),e.eventAsTasks&&(t.eventAsTasks=e.eventAsTasks),void 0!==e.onlyUserWorkItems&&(t.onlyUserWorkItems=e.onlyUserWorkItems);var i=this.serviceLocator.getUrl("case-handler-getWorkItems");return void 0!==e.guid&&void 0===e.idCase&&(i=this.serviceLocator.getUrl("case-handler-getWorkItemsByGuid").replace("{guid}",e.guid)),$.read({url:i,data:t,serviceType:"GETWORKITEMS"})},getQueriesDefinitions:function(e){var t=this;if(t.hashQueriesDef&&e.idNode){if(bizagi.override.enableQueriesClassicMenu)return t.hashQueriesDef[e.idNode];if(-1==e.idNode||1!=t.hashQueriesDef[e.idNode].length||"00000000-0000-0000-0000-000000000000"!=t.hashQueriesDef[e.idNode][0].guidForm||t.hashQueriesDef[e.idNode][0].notMigratedUrl){if(-1!=e.idNode&&t.hashQueriesDef[e.idNode].length>1){var i=[];return $.each(t.hashQueriesDef[e.idNode],function(e,r){if(r.nodes.length>0){var a=t.getQueriesDefinitions({idNode:r.idNode});$.merge(i,a)}else i.push(r)}),i}return t.hashQueriesDef[e.idNode]}return t.getQueriesDefinitions({idNode:t.hashQueriesDef[e.idNode][0].idNode})}var r=new $.Deferred;return $.read(t.serviceLocator.getUrl("query-handler-getqueries-definitions")).done(function(e){t.hashQueriesDef={},t.hashQueriesDef[0]={},t.processQueriesDefinitions("-1",e.query),r.resolve(t.hashQueriesDef[-1])}),r.promise()},processQueriesDefinitions:function(e,t){var i=this;$.each(t,function(t,r){i.hashQueriesDef[e]||(i.hashQueriesDef[e]=[]),i.hashQueriesDef[e].push(r),r.nodes?i.processQueriesDefinitions(r.idNode,r.nodes):r.nodes={}})},getQueries:function(e){var t=this;if(t.hashQueries&&e.idElement)return t.hashQueries[e.idElement];var i=new $.Deferred;return $.read(t.serviceLocator.getUrl("query-handler-getqueries")).done(function(e){t.hashQueries={},t.hashQueries[0]={},t.processQueries(e.query),i.resolve(t.hashQueries[-1])}),i.promise()},processQueries:function(e){var t=this;$.each(e,function(e,i){t.hashQueries[i.idParent]||(t.hashQueries[i.idParent]=[]),t.hashQueries[i.idParent].push(i),i.nodes?t.processQueries(i.nodes):i.nodes={}})},createNewCase:function(e){var t={};return(e=e||{}).caseData&&(e.caseData=JSON.stringify(e.caseData)),e.idWfClass&&(t.idWfClass=e.idWfClass),e.idOrganization&&(t.idOrganization=e.idOrganization),$.create({url:this.serviceLocator.getUrl("case-handler-addNewCase"),data:t,serviceType:"NEWCASE"})},startProcess:function(e){var t;e=e||{},t=this.serviceLocator.getUrl("case-handler-startProcess");var i={};return e.idProcess&&(i.idProcess=e.idProcess),e.entityMapping&&(i.entityMapping=e.entityMapping),e.isAdhocProcess&&(i.isAdhocProcess=e.isAdhocProcess),e.idOrganization&&(i.idOrganization=e.idOrganization),$.create({url:t,data:i,serviceType:"STARTPROCESS"})},searchCases:function(e){e=e||{};var t={h_action:"SEARCHCASES",onlyUserCases:!1,active:!1};return t.page=e.page||1,e.radNumber&&(t.radNumber=$.trim(e.radNumber)),t.pageSize=e.pageSize||this.pageSize,$.ajax({url:this.serviceLocator.getUrl("query-handler"),data:t,type:"POST",dataType:"json"})},queryCases:function(e){e=e||{};var t={h_action:"QUERYCASES"};return t.onlyUserCases=e.onlyUserCases||!1,t.active=e.active&&!0,t.page=e.page||1,e.radNumber&&(t.radNumber=$.trim(e.radNumber)),t.pageSize=e.pageSize||this.pageSize,t.filter=e.filter,t.outputxpath=e.outputxpath,t.orderFieldName=e.orderFieldName||"",t.orderType="asc"==e.orderType||1==e.orderType?1:0,t.order=e.order||"",$.ajax({url:this.serviceLocator.getUrl("query-handler"),data:t,type:"POST",dataType:"json"})},queryEntities:function(e){e=e||{};var t={h_action:"QUERYENTITIES"};return t.page=e.page||1,t.pageSize=this.Class.ENTITIES_QUERY_PAGE_SIZE,t[this.Class.BA_CONTEXT_PARAMETER_PREFIX+"idEnt"]=e.idEntity,t.filter=e.filter,t.outputxpath=e.outputxpath,t.orderFieldName=e.orderFieldName||"",t.orderType=e.orderType||"",t.order=e.order||"",$.ajax({url:this.serviceLocator.getUrl("query-handler"),data:t,type:"POST",dataType:"json"})},getMenuAuthorization:function(){return $.read(this.serviceLocator.getUrl("authorization-handler-getMenuAuthorization"))},isCaseCreationAuthorized:function(e){var t=this.serviceLocator.getUrl("authorization-handler-isCaseCreationAuthorized");return t=t.replace("{0}",e.idWfClass||""),$.read({url:t})},getAsynchExecutionState:function(e){return(e=e||{}).idCase,$.read({url:this.serviceLocator.getUrl("case-handler-getAsynchExecutionState"),data:{idCase:e.idCase,idAsynchWorkitem:e.idAsynchWorkitem},serviceType:"ASYNCHEXECUTION"})},supportedLogTypes:function(){return $.read(this.serviceLocator.getUrl("case-handler-supportedLogTypes"))},getActivityLog:function(e){return e=e||{},$.read(this.serviceLocator.getUrl("case-handler-getActivityLog"),{idCase:e.idCase,orden:e.sort||0,idActualPage:e.idActualPage||1,pageSize:e.pageSize||10}).pipe(function(e){var t=0;e.rows&&e.rows.length&&(t=e.rows.length);for(var i,r=0;r<t;r++)i=new Date(e.rows[r][4]),e.rows[r][4]="Invalid Date"==i?e.rows[r][4]:bizagi.util.dateFormatter.formatDate(i,bizagi.localization.getResource("dateFormat")+" "+bizagi.localization.getResource("timeFormat"));return e})},getActivityDetailLog:function(e){return e=e||{},$.read(this.serviceLocator.getUrl("case-handler-getActivityDetailLog"),{idCase:e.idCase,idWorkItemFrom:e.idWorkItemFrom,idActualPage:e.idActualPage||1,pageSize:e.pageSize||10}).pipe(function(e){return e})},getEntityLog:function(e){return e=e||{},$.read(this.serviceLocator.getUrl("case-handler-getEntityLog"),{idCase:e.idCase,orden:e.sort||0,idActualPage:e.idActualPage||1,pageSize:e.pageSize||10}).pipe(function(e){return e})},getEntityDetailLog:function(e){return e=e||{},$.read(this.serviceLocator.getUrl("case-handler-getEntityDetailLog"),{idCase:e.idCase,idEntity:e.idEntity||-1,userFullName:e.userFullName||"",attribDisplayName:e.attribDisplayName||"",idActualPage:e.idActualPage||1,pageSize:e.pageSize||10}).pipe(function(e){return e})},getUserLog:function(e){return e=e||{},$.read(this.serviceLocator.getUrl("case-handler-getUserLog"),{idCase:e.idCase,orden:e.sort||0,idActualPage:e.idActualPage||1,pageSize:e.pageSize||10}).pipe(function(e){return e})},getUserDetailLog:function(e){return e=e||{},$.read(this.serviceLocator.getUrl("case-handler-getUserDetailLog"),{idCase:e.idCase,idUser:e.idUser,entDisplayName:e.entDisplayName||"",attribDisplayName:e.attribDisplayName||"",idActualPage:e.idActualPage||1,pageSize:e.pageSize||10}).pipe(function(e){return e})},getAdminLog:function(e){return e=e||{},$.read(this.serviceLocator.getUrl("case-handler-getAdminLog"),{idCase:e.idCase,orden:e.sort||0,idActualPage:e.idActualPage||1,pageSize:e.pageSize||10}).pipe(function(e){return e})},addFavorite:function(e){return e=e||{},$.create(this.serviceLocator.getUrl("favorites-handler-saveFavorite"),{idObject:e.idObject,favoriteType:e.favoriteType}).pipe(function(e){return e})},delFavorite:function(e){return e=e||{},$.destroy(this.serviceLocator.getUrl("favorites-handler-deleteFavorite"),{guidFavorite:e.idObject}).pipe(function(e){return e})},summaryAssigness:function(e){var t=new $.Deferred,i={idCase:e.idCase||""},r=e.preview?this.getCaseAssigneesPreview(i):this.getCaseAssignees(i);return $.when(r).done(function(e){for(var i=e.assignees||[],r=i.length,a={showAssignees:!!(bizagi.override.showAssignees&&i.length>0),assignees:{},events:"",activities:""},o="",s="",n=[],l=[],c=0;c<r;c++)bizagi.util.parseBoolean(i[c].isEvent)?-1==n.indexOf(i[c].idUser)&&(n.push(i[c].idUser),o+=i[c].Name+", "):-1==l.indexOf(i[c].idUser)&&(l.push(i[c].idUser),s+=i[c].Name+", ");a.events=o.substring(0,o.length-2),a.activities=s.substring(0,s.length-2),t.resolve(a)}),t.promise()},summarySubProcess:function(e){var t=$.Deferred(),i=e.idCase||"";return $.when(this.getCaseSubprocesses({idCase:i})).done(function(e){if(e.showSubProcess=e.subProcesses.length>=1,e.showSubProcesColumns=void 0!==e.CustFields[0]&&e.CustFields[0][0].length>=1,e.showSubProcesColumns){var i;e.subProcPersonalized={};for(var r=0;r<e.CustFields.length;r++){i=0;for(var a=0;a<e.subProcesses.length;a++)e.subProcesses[a].idCustData==r&&(e.subProcPersonalized[r]=e.subProcPersonalized[r]||{},e.subProcPersonalized[r].subProcesses=e.subProcPersonalized[r].subProcesses||{},e.subProcPersonalized[r].subProcesses[i++]=e.subProcesses[a]);-1!=e.subProcesses[r].idCustData&&null!=e.subProcPersonalized[r]&&(e.subProcPersonalized[r].CustFields={0:e.CustFields[r][r]},e.subProcPersonalized[r].idCase=e.idCase)}}t.resolve(e)}),t.promise()},summaryCaseEvents:function(e){var t=$.Deferred(),i=e.idCase||"";return $.when(this.getCaseEvents({idCase:i})).done(function(e){e.showEvents=e.events.length>=1,t.resolve(e)}),t.promise()},summaryCaseDetails:function(e){var t=new $.Deferred,r=e.idWorkitem||0;return $.when(this.getCaseSummaryDataContent(e)).done(function(e){e.currentState=e.currentState||[];var a=e.currentState.length;for(e.showEvents=e.countEvents>=1,e.showParentProcess=e.idParentCase>=1,e.parentProcess={displayName:e.parentDisplayName,idCase:e.idParentCase},e.isClosedForAllUsers=bizagi.util.parseBoolean(e.isClosed),e.isClosed=!bizagi.util.parseBoolean(e.isOpen),e.showAssignees=!!(bizagi.override.showAssignees&&e.countAssigness>0),e.showSubProcess=e.countSubProcesses>0,e.showForm=!!bizagi.util.parseBoolean(e.hasGlobalForm),e.allowsReassign="false",i=0;i<a;i++)e.currentState[i].idWorkItem==r&&(e.allowsReassign=e.currentState[i].allowsReassign);var o=[],s=0;for(i=0;i<a;i++)!bizagi.util.parseBoolean(e.currentState[i].isEvent)&&bizagi.util.parseBoolean(e.currentState[i].assignToCurrentUser)&&e.currentState[i].idWorkItem!=r&&(o[s++]=e.currentState[i]);e.currentStateTypes=o,e.showActivities=o.length>0,t.resolve(e)}).fail(function(e){t.reject(e)}),t.promise()},releaseActivity:function(e){var t=this.serviceLocator.getUrl("case-handler-releaseActivity");t=t.replace("{idCase}",e.idCase);var i={};return e&&(i.idCase=e.idCase,i.idWorkItem=e.idWorkItem),$.ajax({url:t,data:i,type:"POST",dataType:"json"})},takeOwnershipActivity:function(e){var t=this.serviceLocator.getUrl("case-handler-takeOwnershipActivity"),i={};return e&&(i.idCase=e.idCase,i.idWorkItem=e.idWorkItem),$.ajax({url:t,data:i,type:"POST",dataType:"json"})},summaryActivities:function(e){var t={},i=e.data||{},r=r||e.idWorkitem||0;try{t.showActivities=i.currentStateTypes.length>=1,t.currentState=i.currentStateTypes,t.globalIdWorkitem=r,t.creationDate=i.creationDate}catch(e){}return t},getCaseSummaryDataContent:function(e){var t=this,i=new $.Deferred;return $.when(t.getCaseSummary(e)).done(function(e){e.taskState=t.icoTaskState,e.createdBy&&(e.createdByName=e.createdBy.Name,e.createdByUserName=e.createdBy.userName,e.caseDescription=""==e.caseDescription?"":e.caseDescription,e.processPath=e.processPath.replace(/\//g," > ")+e.process,e.showWorkOnIt=!0),i.resolve(e)}).fail(function(e){i.reject(e)}),i.promise()},getSmartFolders:function(e){var t=this,i={};return i.idFolder=e||"",$.read(t.serviceLocator.getUrl("folders-handler-getUserQueries"),i).pipe(function(i){return-1==e||""==e?i:t.searchFolders(e,i)||[]})},deleteSmartFolder:function(e){var t={action:"6"};return e=e||{},t.idSmartFolder=e.idSmartFolder||"",t.idUser=e.idUser||"",$.destroy(this.serviceLocator.getUrl("folders-associate-deleteSmartFolder"),t)},getFolders:function(e){var t=this,i={action:"getUserFolder"};return i.idFolder=e||"",$.ajax({url:t.serviceLocator.getUrl("folders-handler"),type:"POST",data:i,dataType:"json"}).pipe(function(i){return""==e?{folders:[{name:bizagi.localization.getResource("workportal-widget-folders"),id:"-1",idParent:0,childs:i}]}:-1==e?i:t.searchFolders(e,i)||[]})},searchFolders:function(e,t){for(var i=0;i<t.folders.length;i++){if(t.folders[i].id==e)return t.folders[i].childs}},getCasesByFolder:function(e){return e=e||"",$.ajax({cache:!0,url:"RestServices/"+e,type:"GET",dataType:"json"})},makeFolder:function(e){var t={action:"CreateUpdateFolder"};return t.folderName=e.folderName||"No Name",null!=e.idParentFolder&&e.idParentFolder>1&&(t.idParentFolder=e.idParentFolder),$.ajax({url:this.serviceLocator.getUrl("folders-handler"),data:t,type:"POST",dataType:"json"})},updateFolder:function(e){var t={};return e=e||{},t.action="CreateUpdateFolder",t.idFolder=e.idFolder||"",e.folderName&&(t.folderName=e.folderName),e.idParentFolder&&(t.idParentFolder=e.idParentFolder),$.ajax({url:this.serviceLocator.getUrl("folders-handler"),data:t,type:"POST",dataType:"json"})},associateCaseToFolder:function(e){var t={action:"4"};return e=e||{},t.idCase=e.idCase||"",t.idCustomFolder=e.idCustomFolder,$.ajax({url:this.serviceLocator.getUrl("folders-associate"),data:t,type:"POST",dataType:"json"})},dissasociateCaseFromFolder:function(e){var t={action:"DeleteCaseFromFolder"};return e=e||{},t.idFolder=e.idFolder,t.idCase=e.idCase,$.ajax({url:this.serviceLocator.getUrl("folders-handler"),data:t,type:"POST",dataType:"json"})},deleteFolder:function(e){var t={action:"5"};return e=e||{},t.idCustomFolder=e.idCustomFolder||"",$.ajax({url:this.serviceLocator.getUrl("folders-associate"),data:t,type:"POST",dataType:"json"})},getFile:function(e){var t={},i=this.serviceLocator.getUrl("file-handler");return e=e||{},t.action="getFileContent",t.uploadId=e.uploadId||"",t.entityId=e.entityId||"",t.entityKey=e.entityKey||"",bizagi.services.ajax.pathToBase+i+"?"+jQuery.param(t)},getComments:function(e){var t=this;return e=e||{},$.read(encodeURI(t.serviceLocator.getUrl("MessageHandler-GetComments")),{idCase:e.idCase||"",idColorCategory:"number"==typeof e.idColorCategory?e.idColorCategory:"",pag:e.pag||1,pagSize:e.pagSize||10}).pipe(function(e){var i=new $.Deferred,r="iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABJwSURBVHhe7Vt5UJPnuj+ddvSqdcpotQougCyGRfY9QCQQwhKIrAqurUtbbbVV1KO2UrXH46lL1aOOdWvrcl3QuosIBUSGongA5bLXqLjCVbarrX/97vO8SSAieLRVJ86czPwmX0L8vve3PM/7vp/JX/7yn8d/FHhVCkykC+144403NL16vQ1TU1MtBpqiR48eoL8VE9YQnF/VgF7VdVLffPPNRkdHJ0SER0CpDIdCEYqQkBAtgvlZgdDQUHh5ecHMzIzFyCbIXtUAX9Z12MliN1c3JCcnIzkpGWp1jCBrSD6YBAgODoZczpALBMmCYGFhwULsIJi8rAG+zPM6s+vseGLiaMTFxSM2JlaQl8lkAoGBgQgMCERAQAD8/f0hlfrDz88Pfr5+8PX1FXByctKXxmslgiAfEqxAdFQ0VKooqCJVwnVvb1+Ct4i6l6cXPDw8CR5wd3OHm5sbXF1d4ezMcIYTlQwLYGNjoxfhZRr2ws7NTmm8vLwRSnWuIMelflK46kkRISbl6OAIB4K9vT3s7ewhkdgRJLC1sRWEra2tYWVlhWHDhonnPn36sAjcII3+kWplZQ0Pd08RYXt7Bx0pW0FKT8xqmBUsLYfB0sISFkMtMHToUAwZPASDBw8WTdDU1AwDBw4UGDBggAClikUwN2YFTLp37y5izvFlId7t+y4G9B8gSGmJaae9gQO0xPr3649+/fqJz/UlsNN9TPrAxMRE4J133hGf43RwEnRN0Wg1mMVR5q5vQc72pLl99sfj0b3bW3j77beJYF8t+vRtI9qjR0+80/sdIqoly8e9e/d+DJaWlrC1tRXlwn8z5lmh2MvTm2rYFt26dcOSeTNQnn8U2Ue2w8pyCHp076EjTwIIl/vgrbfeYkKCGAvQ+ykCcAq4VOjzE40xAiYm5CIvdvpRrHv26I6a8+nQXMxAbdFpFGcfxJTx8YIsk9fHnB3n9xicho7uc3K4D3ACGNxDjLUZyrh+hwwZSvXcD3J/T1wrPYNrJRkC10uzUPFLOnZvWQ13Zwf06tVL29yoPzBJqZc7fD2cRaN7913qG/Q3fuY+wKLwbMACGKwSjS4EsoHU3MzMBoOTwLVfV5pJOCNw41I2bpadxbVLubiUn46VyxZhYP9+QghujBx/pVyKr+d/goH9+gpRWAR2n4Xg1wwWmfcSRsee65IF4O7OdTxn+gTcvJyFm5cyBW6V5eB2xTncrvoFd2qKoLmcj5L8DHy37hsE+HmR828xMVgOMcWejcsw98MkSN3tRY/gBOgF4EToSsbo+oBMTG0UaRZg/fL5uFOWTcgSuFuRi7uV+aivKUTDlYtouFqKe9fLUVddgrLCLGQc/hGLPp+GQF83mPZ/F9tXzkPegfU4vHkJUmeOx9houSCuE4B3jWpjS4GMu3p/FuDtXqgsOIr6ihzUl2cLNFSeRUN1Ae7VXsD9qyVovH4JTTcq0XyrBo115bhbfQG1FzJQmrUfpWd24VbREdwpOoTrBftQkfk9StO3GApglCtCE65nruUFMz8gwrm4V0WozCHkorEmH02a82i5XoLWG5fx8E4VHt6txcP6q3hwuwotdaVovHIe96vO4l7ZGTSUHkd98WHUXzxEOIj6ojT4eziAF1rkfKqxuS/G06vHfzXy9HZo+2oikovmmjy01BKunEPr1UI8uF6EhzdK8dvtcvx2txq/37uKR/ev47f6WvHew7pitF4pQFNlFu5dOoF7JUcIh3Gv+BDukQiBXo7o2bMnkiOkvEU2rsepTYsmTklQigXQ0R/XoonIN1ZRCVzOQF3RUdy4eAI3S07jFs0It2hGaL5eSgJo8KhRJ8CtMjRQn7hRdBx1hRT9/L24lrcL1wm3C/eRAGmQ+7qKafIfcyfjxIZFxtUDTmxamHpwy3JRp0d/WIP6skxcPX8ENXn7tTiXhqqzB1CZewDl2VTXOQdwX1NCCbhGCagRopRn7iLsRGXWTlRR3ddkfY/abC2uZG+Hr6stYkOlyNi9Fic3LphlVBFgRzL3rINc6o7D36+ixpeJO5cycLs0nVxnZBDJLJoOc2k9kIfawpO4XpzZJoCm8DiuFaWjrphw4QjqqPnV5e/GDcJNwp3CvVi9YDLy9qxC5u7VOLVpocyoBDi1abH52X1ryZ3VKCMn66mRNVVlaxtaWQYayrNoVshFfRVNhdWFtCYowNWiDDy6RwmgfnC7/BzulucK0e4UH8edC2m4c36fQP2FfWgsPoCajC24eHQT8ug6P61ZbGJUAvBgzmxdqrlB7p3bv0643lKdQ6B6r8pCU3Uu9QWaCa4UounqRTReLUZFbppohCwAv3e/Oh/3K7Jx/3K6aH73i9MEGhkXqXRObsSVvL04tflLXgcY34PLoOjwP5Gz8x+4UXyCunkmWog8o5Vmg1bNLzQTXMRvNBM0XrlgIECVeO/htfNorTmLlvIMNJUeQWPJwTbyjRf345e934DPb3QN0NAKHtzhdXM1tef2o+HyaTSTCM1VmYJYq6YAD64VCbL1tCoUCWjQUAJ0AtBU2UpJaSk/TQIcfox8w/k9OLFxocaoyeuFOLouRV14aANulxwnAc4IEVprcmmOzycBLtB8X4o62iZX5OgEuFOpTYCGBchBc5lOAIo9O8+ozviOGt8io1v/d1mHxzYs1Fw7fwjNFRlCBCbWWnsOD66eJwFKUJ13SEyFIgFCgBI8oBJpocbZXJaOppJDbeRZgPzdf2/8aYcRNr6uFDi4NiW1NH0bLWlPCBFaqRlqBShEMy159WuB3xuuCAFYlAdUIkKAyydJAKp/nfvXcraT+18a5fq/ywTwNJW+dUljXeFBNFNTa9U1wgcU84fXi2lKzKOF0SFKAAlwu0IrAC2DW2gZ3HyZGqiBAOQ+Tu1Ybm58bf/fjIhTUHhwPRrJ0RbRB86KmD/kmeDmJXK+Cr/XswC0DyBRHlCP6CgAu396y1fGufl5FkfSVqdoNDR3t3AfoEbILrcLUEkC6DZCJEpHAbjzZ21bguzXqfY7inJk/bzU01uXUC84KRohk3yomwq59oUAtBFiUToKUHKI1vybv+D9xev7OLBqdmpe2gZcOLIJTRVZbQJot8UsQE2nAlRnbEPe7hU4s33p6y3AwbVzf6osPIHMXatQcnIbWmib/OAqrQWEABWdClCbsxOZ25eh/DSt/SkFp79b7PzaRuDExkXZdbQLrCg4JkS4cGwrmmupD9BiqDMBanL3kOvLaNOzgTZB+3Hp2Aac2rLYuHZ+z+PGqiUp2Q/qLtJuLwdVdJ/wwvFtyPh+BYpP78QN+r8C3gXepnsB1WfTkLNrJU5Sv/jl0HrcKNgjFkNHvluKxTMnvz4rQBYnOjraPDIycs1IpVrj6S9HQcY+tNISuJlmgJt0X6A0ay/O7F2Hw0Ru/7qF+OGbFPy4ai69XoJ8mjYr6WYI3wW6SSKMT1TDL3oilFHxGpVKlcrnfh4DXulnaYATw1SjsmWxk+GS/CXsx6+Ac9znUCpCsHPzSnFfkPcDfHOk/Ox+nDv8HY5uX4E9//wSaXT7+wwl4PyRjUIAvgs8LoHIK+NgN26FOBefk8/N1+BrvVJyXV2MHWFnFOrRjd6jZ8Nx3NdisIbwSPgMsuBQxKhV2LlpBUqz9wsBCqgfnPxxVZsAx7b9DdtWzkfK9IniuwU+ihjYJS974nx8Db5WaFR8oy4VJq9cDF3Md4SMGgv3pAVPDLKjCE5jl0AaMxUjQ1Xi+0BMcNzoWIyJi0K8OgKhIXLx/SD+3pBvRBJcEufDTgj5d9iPM8Ryek0Yuxx2BLfR8xE8KhlUcjteSXnQRUxY9Wcl3lEIJuSS9AU8ElPgE/shvEZNE3CLm0mk5wlSdmP/pkUy42sDLINdkh5L6ZgwZikkBNeEFMjVSS83EeHh4c4RqlGaJx0nh/6NU12SaiPExLSE9KQkY5YQOcJoxlftSEyFpA2LIUnQYjjBPXYm94hiHusLLQs+oUKd2OiYTAPUxe+FkUokck8hNTzhSwyPZ3zxOOIWYXgbFmJ4rBZ2sfMQokpofGEicOzDyXmHMam6CHblkoFTTyVFZDojFUcEuyBlG7sAAjGMvz6OUfNhKzBPC/U8SNRzKAnqF3PzlOd01/g5HVziGLZHTxB6UaRGEcFOSDExG/VcLaIZKe2IouOoOTrMpufZcFVNo+8oqv7cVppjFKQeB4lBBG05ap04xe936VQbocedsnkqKT0hfiZSqnZYqz6HdaQen9GxFlbhn8I6YlYbRqpG40/NDqRgtnM8RSquPX7Dwj/RRvAFkrImcl2RMiRkHTET1uHtYMJWYYxPBCxDpmFY6HRYKWfAOmwGHCI+FlPkH2qIERERsqBRE+AQvwCSmPlt8bMImdohfp07JQh15lTEZ1i3Ox38SJ6/ntzqQKgDKUFOyZhhACLJRHUYFvoxhik+hqV8MsxHTqLjj2BN7w0PnwGZaswfSwG5/5M71b5j7HxqKlRjOpcGS8c8GT+D2GkdezqpdbtOagWYu7ZTUoKQjhSTaUMIHYd82I5gcrwNU2FB5If4jSEhpsCa0jBc+RGcwqc9fwq4buRU+y7x8+EYkwJJ1OewIWIWwVMwyDtO1FrH+GmdMnSJjzu4pCO1dudxIUDSnNXwSpiDUdO/hrN6lpaYASnL4KkQkDOmtCOIjoMm6/ABLEdqMVSaDDP3aDp+H9aUBoliGhzCPoI8MuH5UsCd3yd2BlxiU+Co/hwSFblKNTVEmgQzrxhRaxy/rp0ycKkTUmt/OCoE+HHPfvz888/49ddf8ejRI6Sl58M5imo5qJ0UE7MgQhYyPSbRsQ6BE2HRhgkY4pOIAU6hsAycAOugSZCETIaDciq8wyfwjDDrmXtBuCpW4xGfApcY2uBEzYIk4hNRU4O8YmHmqYYFDdAweu0uGTj1mEvsVjupb78/IgRYunIjZi5eg282/zf+936TeC8j71+PkbIImAA9zAPGw9xfj3F0rIN0LMwJg73i8J6DHOa+o2EtmwCJfBIcFZPhpJwCZYT62b5ep5/6PGJnw4Vi6Rj5CSRhH8Oa4jTQOUxEjFXXRtDQKXKoM6cec4kdm4Bvd/wkyI7+dDn0pEaEfYjm1gfifWn8Z4JQO5Jh7qdHEob6EXwZY9rhMwaDPWLwnn0QhnrGwDpgLCQjJ8AxZBJclJMRGJaAZ1od8uJBGvMhPGJmwSXqUzjSVCIJnQZrqn8+uambSijfHj0iZeCSBbvUmVMGhNZsOyiITv3rah0xLamCf5WL9xOnL9ESI1JDfUa3wzsRQ9uQgCFeesTTcTwGuUXjPYkMg8goG/8xkMjGwlE+AS6KSfBUJD9TGXQjlU66Rc2Ah/pTuKimw5GcsVNQVw16H/1s/WDqEikGK+L3mEvkWJtL7JbepY5OjcZX3/4giBZc/J82QmHj5rYlwFc9XRAS8NQjjo518IjFkDbEYLC7FoNcVHhveCAGjQiBjV8iJAFJGBE0Fi4hE+AUNI6325upDwwjvNlVP3DkD/lEvg/P6OlwjfgII6iJ2AW/Dyv/JPRnAUhd4cpj8TNwif9m4NJQ7yedciBX6m7VCxH4mYVobvk/8XrrnmNErp3UYPdRRI7gxlAbIBqDXQ0RBTOncAwY7o+BBBvfOEj8EzFCRvcX5OMgVSbS75KkK4m4G0HSlQBu9J1+mUKhyB6pSoZb+GSMUHwAuyCqee8Y9LfxhamTUufO4/HTOmXgEh8buNSRlI9qKgqKLgvS/GABtu4++gSpQS5R5CxDpYUzI7IdThEYpIOZoxIDbKUYaOMDGxqvnV88nAMTEUi31pgTc9MJwCJ0+uiv/wD9tmeqUqnMDoqIp/qhxY831Red2NRRIZoNE3p+p6KIoJ6QISkDQkzOgNQgcpVhNoJBTZjhqIeSjnVwCIWZfQgG2PhhkK0PPGVqyJVq+p2iMpu5GBBn8n2fNiX21tUJf1AkwsfHJ5V+23csSBF5y1sWCSf/aEh89PH7g6QEoY6kDAgxMSbVBgURVMBUIKQddiGwdQuFs68SvrJwjJSH3eKx8pg7OM58zAndnnU9wI2CleJ/5KhXkE/KinKv4AvJFcoiaVDErYDgSHgERMKdYO8dgeGe4QJWbkRS79JzkDK1C4aVi0KQs3VTwM4jFO7SMAH/oHBIRypvyYNDi+iHlnt4LDymTgjzuHn8zKPLxvesgrByJgRTXUJsOsRKpIUHwmAHeGCG4DqkSBY9DSxqx39Hvy2crT9vJyRFUgk8Hu7wPD4e5zM7/awCdPU5VpbLhsE9hAdgKBIPTA/njqJ18Zo/Z/jvDMnxufk6+mv+qfH/Pz9r9qvYcZe2AAAAAElFTkSuQmCC";return e.comments?$.each(e.comments,function(t,i){e.comments[t].hasOwnProperty("CategoryColor")||(e.comments[t].CategoryColor="")}):e.comments=[],e.users?$.each(e.users,function(t,i){e.users[t].Picture=""===e.users[t].Picture?r:e.users[t].Picture}):$.when(t.getCurrentUser()).done(function(t){e.users=[],e.users.push({Id:t.idUser,Name:t.user,DisplayName:t.userName,Picture:r})}),i.resolve(e),i.promise()})},makeNewComment:function(e){return $.create(this.serviceLocator.getUrl("MessageHandler-NewComment"),{idCase:e.idCase||"",comment:e.comment.replace(/\n/g,"<br>")||""}).pipe(function(e){if(e.comments){var t=[e.comments];$.each(t,function(e,i){t[e].CategoryColor=""}),e.comments=t}if(e.users){var i=[e.users];$.each(i,function(e,t){i[e].Picture=""==i[e].Picture?"iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABJwSURBVHhe7Vt5UJPnuj+ddvSqdcpotQougCyGRfY9QCQQwhKIrAqurUtbbbVV1KO2UrXH46lL1aOOdWvrcl3QuosIBUSGongA5bLXqLjCVbarrX/97vO8SSAieLRVJ86czPwmX0L8vve3PM/7vp/JX/7yn8d/FHhVCkykC+144403NL16vQ1TU1MtBpqiR48eoL8VE9YQnF/VgF7VdVLffPPNRkdHJ0SER0CpDIdCEYqQkBAtgvlZgdDQUHh5ecHMzIzFyCbIXtUAX9Z12MliN1c3JCcnIzkpGWp1jCBrSD6YBAgODoZczpALBMmCYGFhwULsIJi8rAG+zPM6s+vseGLiaMTFxSM2JlaQl8lkAoGBgQgMCERAQAD8/f0hlfrDz88Pfr5+8PX1FXByctKXxmslgiAfEqxAdFQ0VKooqCJVwnVvb1+Ct4i6l6cXPDw8CR5wd3OHm5sbXF1d4ezMcIYTlQwLYGNjoxfhZRr2ws7NTmm8vLwRSnWuIMelflK46kkRISbl6OAIB4K9vT3s7ewhkdgRJLC1sRWEra2tYWVlhWHDhonnPn36sAjcII3+kWplZQ0Pd08RYXt7Bx0pW0FKT8xqmBUsLYfB0sISFkMtMHToUAwZPASDBw8WTdDU1AwDBw4UGDBggAClikUwN2YFTLp37y5izvFlId7t+y4G9B8gSGmJaae9gQO0xPr3649+/fqJz/UlsNN9TPrAxMRE4J133hGf43RwEnRN0Wg1mMVR5q5vQc72pLl99sfj0b3bW3j77beJYF8t+vRtI9qjR0+80/sdIqoly8e9e/d+DJaWlrC1tRXlwn8z5lmh2MvTm2rYFt26dcOSeTNQnn8U2Ue2w8pyCHp076EjTwIIl/vgrbfeYkKCGAvQ+ykCcAq4VOjzE40xAiYm5CIvdvpRrHv26I6a8+nQXMxAbdFpFGcfxJTx8YIsk9fHnB3n9xicho7uc3K4D3ACGNxDjLUZyrh+hwwZSvXcD3J/T1wrPYNrJRkC10uzUPFLOnZvWQ13Zwf06tVL29yoPzBJqZc7fD2cRaN7913qG/Q3fuY+wKLwbMACGKwSjS4EsoHU3MzMBoOTwLVfV5pJOCNw41I2bpadxbVLubiUn46VyxZhYP9+QghujBx/pVyKr+d/goH9+gpRWAR2n4Xg1wwWmfcSRsee65IF4O7OdTxn+gTcvJyFm5cyBW6V5eB2xTncrvoFd2qKoLmcj5L8DHy37hsE+HmR828xMVgOMcWejcsw98MkSN3tRY/gBOgF4EToSsbo+oBMTG0UaRZg/fL5uFOWTcgSuFuRi7uV+aivKUTDlYtouFqKe9fLUVddgrLCLGQc/hGLPp+GQF83mPZ/F9tXzkPegfU4vHkJUmeOx9houSCuE4B3jWpjS4GMu3p/FuDtXqgsOIr6ihzUl2cLNFSeRUN1Ae7VXsD9qyVovH4JTTcq0XyrBo115bhbfQG1FzJQmrUfpWd24VbREdwpOoTrBftQkfk9StO3GApglCtCE65nruUFMz8gwrm4V0WozCHkorEmH02a82i5XoLWG5fx8E4VHt6txcP6q3hwuwotdaVovHIe96vO4l7ZGTSUHkd98WHUXzxEOIj6ojT4eziAF1rkfKqxuS/G06vHfzXy9HZo+2oikovmmjy01BKunEPr1UI8uF6EhzdK8dvtcvx2txq/37uKR/ev47f6WvHew7pitF4pQFNlFu5dOoF7JUcIh3Gv+BDukQiBXo7o2bMnkiOkvEU2rsepTYsmTklQigXQ0R/XoonIN1ZRCVzOQF3RUdy4eAI3S07jFs0It2hGaL5eSgJo8KhRJ8CtMjRQn7hRdBx1hRT9/L24lrcL1wm3C/eRAGmQ+7qKafIfcyfjxIZFxtUDTmxamHpwy3JRp0d/WIP6skxcPX8ENXn7tTiXhqqzB1CZewDl2VTXOQdwX1NCCbhGCagRopRn7iLsRGXWTlRR3ddkfY/abC2uZG+Hr6stYkOlyNi9Fic3LphlVBFgRzL3rINc6o7D36+ixpeJO5cycLs0nVxnZBDJLJoOc2k9kIfawpO4XpzZJoCm8DiuFaWjrphw4QjqqPnV5e/GDcJNwp3CvVi9YDLy9qxC5u7VOLVpocyoBDi1abH52X1ryZ3VKCMn66mRNVVlaxtaWQYayrNoVshFfRVNhdWFtCYowNWiDDy6RwmgfnC7/BzulucK0e4UH8edC2m4c36fQP2FfWgsPoCajC24eHQT8ug6P61ZbGJUAvBgzmxdqrlB7p3bv0643lKdQ6B6r8pCU3Uu9QWaCa4UounqRTReLUZFbppohCwAv3e/Oh/3K7Jx/3K6aH73i9MEGhkXqXRObsSVvL04tflLXgcY34PLoOjwP5Gz8x+4UXyCunkmWog8o5Vmg1bNLzQTXMRvNBM0XrlgIECVeO/htfNorTmLlvIMNJUeQWPJwTbyjRf345e934DPb3QN0NAKHtzhdXM1tef2o+HyaTSTCM1VmYJYq6YAD64VCbL1tCoUCWjQUAJ0AtBU2UpJaSk/TQIcfox8w/k9OLFxocaoyeuFOLouRV14aANulxwnAc4IEVprcmmOzycBLtB8X4o62iZX5OgEuFOpTYCGBchBc5lOAIo9O8+ozviOGt8io1v/d1mHxzYs1Fw7fwjNFRlCBCbWWnsOD66eJwFKUJ13SEyFIgFCgBI8oBJpocbZXJaOppJDbeRZgPzdf2/8aYcRNr6uFDi4NiW1NH0bLWlPCBFaqRlqBShEMy159WuB3xuuCAFYlAdUIkKAyydJAKp/nfvXcraT+18a5fq/ywTwNJW+dUljXeFBNFNTa9U1wgcU84fXi2lKzKOF0SFKAAlwu0IrAC2DW2gZ3HyZGqiBAOQ+Tu1Ybm58bf/fjIhTUHhwPRrJ0RbRB86KmD/kmeDmJXK+Cr/XswC0DyBRHlCP6CgAu396y1fGufl5FkfSVqdoNDR3t3AfoEbILrcLUEkC6DZCJEpHAbjzZ21bguzXqfY7inJk/bzU01uXUC84KRohk3yomwq59oUAtBFiUToKUHKI1vybv+D9xev7OLBqdmpe2gZcOLIJTRVZbQJot8UsQE2nAlRnbEPe7hU4s33p6y3AwbVzf6osPIHMXatQcnIbWmib/OAqrQWEABWdClCbsxOZ25eh/DSt/SkFp79b7PzaRuDExkXZdbQLrCg4JkS4cGwrmmupD9BiqDMBanL3kOvLaNOzgTZB+3Hp2Aac2rLYuHZ+z+PGqiUp2Q/qLtJuLwdVdJ/wwvFtyPh+BYpP78QN+r8C3gXepnsB1WfTkLNrJU5Sv/jl0HrcKNgjFkNHvluKxTMnvz4rQBYnOjraPDIycs1IpVrj6S9HQcY+tNISuJlmgJt0X6A0ay/O7F2Hw0Ru/7qF+OGbFPy4ai69XoJ8mjYr6WYI3wW6SSKMT1TDL3oilFHxGpVKlcrnfh4DXulnaYATw1SjsmWxk+GS/CXsx6+Ac9znUCpCsHPzSnFfkPcDfHOk/Ox+nDv8HY5uX4E9//wSaXT7+wwl4PyRjUIAvgs8LoHIK+NgN26FOBefk8/N1+BrvVJyXV2MHWFnFOrRjd6jZ8Nx3NdisIbwSPgMsuBQxKhV2LlpBUqz9wsBCqgfnPxxVZsAx7b9DdtWzkfK9IniuwU+ihjYJS974nx8Db5WaFR8oy4VJq9cDF3Md4SMGgv3pAVPDLKjCE5jl0AaMxUjQ1Xi+0BMcNzoWIyJi0K8OgKhIXLx/SD+3pBvRBJcEufDTgj5d9iPM8Ryek0Yuxx2BLfR8xE8KhlUcjteSXnQRUxY9Wcl3lEIJuSS9AU8ElPgE/shvEZNE3CLm0mk5wlSdmP/pkUy42sDLINdkh5L6ZgwZikkBNeEFMjVSS83EeHh4c4RqlGaJx0nh/6NU12SaiPExLSE9KQkY5YQOcJoxlftSEyFpA2LIUnQYjjBPXYm94hiHusLLQs+oUKd2OiYTAPUxe+FkUokck8hNTzhSwyPZ3zxOOIWYXgbFmJ4rBZ2sfMQokpofGEicOzDyXmHMam6CHblkoFTTyVFZDojFUcEuyBlG7sAAjGMvz6OUfNhKzBPC/U8SNRzKAnqF3PzlOd01/g5HVziGLZHTxB6UaRGEcFOSDExG/VcLaIZKe2IouOoOTrMpufZcFVNo+8oqv7cVppjFKQeB4lBBG05ap04xe936VQbocedsnkqKT0hfiZSqnZYqz6HdaQen9GxFlbhn8I6YlYbRqpG40/NDqRgtnM8RSquPX7Dwj/RRvAFkrImcl2RMiRkHTET1uHtYMJWYYxPBCxDpmFY6HRYKWfAOmwGHCI+FlPkH2qIERERsqBRE+AQvwCSmPlt8bMImdohfp07JQh15lTEZ1i3Ox38SJ6/ntzqQKgDKUFOyZhhACLJRHUYFvoxhik+hqV8MsxHTqLjj2BN7w0PnwGZaswfSwG5/5M71b5j7HxqKlRjOpcGS8c8GT+D2GkdezqpdbtOagWYu7ZTUoKQjhSTaUMIHYd82I5gcrwNU2FB5If4jSEhpsCa0jBc+RGcwqc9fwq4buRU+y7x8+EYkwJJ1OewIWIWwVMwyDtO1FrH+GmdMnSJjzu4pCO1dudxIUDSnNXwSpiDUdO/hrN6lpaYASnL4KkQkDOmtCOIjoMm6/ABLEdqMVSaDDP3aDp+H9aUBoliGhzCPoI8MuH5UsCd3yd2BlxiU+Co/hwSFblKNTVEmgQzrxhRaxy/rp0ycKkTUmt/OCoE+HHPfvz888/49ddf8ejRI6Sl58M5imo5qJ0UE7MgQhYyPSbRsQ6BE2HRhgkY4pOIAU6hsAycAOugSZCETIaDciq8wyfwjDDrmXtBuCpW4xGfApcY2uBEzYIk4hNRU4O8YmHmqYYFDdAweu0uGTj1mEvsVjupb78/IgRYunIjZi5eg282/zf+936TeC8j71+PkbIImAA9zAPGw9xfj3F0rIN0LMwJg73i8J6DHOa+o2EtmwCJfBIcFZPhpJwCZYT62b5ep5/6PGJnw4Vi6Rj5CSRhH8Oa4jTQOUxEjFXXRtDQKXKoM6cec4kdm4Bvd/wkyI7+dDn0pEaEfYjm1gfifWn8Z4JQO5Jh7qdHEob6EXwZY9rhMwaDPWLwnn0QhnrGwDpgLCQjJ8AxZBJclJMRGJaAZ1od8uJBGvMhPGJmwSXqUzjSVCIJnQZrqn8+uambSijfHj0iZeCSBbvUmVMGhNZsOyiITv3rah0xLamCf5WL9xOnL9ESI1JDfUa3wzsRQ9uQgCFeesTTcTwGuUXjPYkMg8goG/8xkMjGwlE+AS6KSfBUJD9TGXQjlU66Rc2Ah/pTuKimw5GcsVNQVw16H/1s/WDqEikGK+L3mEvkWJtL7JbepY5OjcZX3/4giBZc/J82QmHj5rYlwFc9XRAS8NQjjo518IjFkDbEYLC7FoNcVHhveCAGjQiBjV8iJAFJGBE0Fi4hE+AUNI6325upDwwjvNlVP3DkD/lEvg/P6OlwjfgII6iJ2AW/Dyv/JPRnAUhd4cpj8TNwif9m4NJQ7yedciBX6m7VCxH4mYVobvk/8XrrnmNErp3UYPdRRI7gxlAbIBqDXQ0RBTOncAwY7o+BBBvfOEj8EzFCRvcX5OMgVSbS75KkK4m4G0HSlQBu9J1+mUKhyB6pSoZb+GSMUHwAuyCqee8Y9LfxhamTUufO4/HTOmXgEh8buNSRlI9qKgqKLgvS/GABtu4++gSpQS5R5CxDpYUzI7IdThEYpIOZoxIDbKUYaOMDGxqvnV88nAMTEUi31pgTc9MJwCJ0+uiv/wD9tmeqUqnMDoqIp/qhxY831Red2NRRIZoNE3p+p6KIoJ6QISkDQkzOgNQgcpVhNoJBTZjhqIeSjnVwCIWZfQgG2PhhkK0PPGVqyJVq+p2iMpu5GBBn8n2fNiX21tUJf1AkwsfHJ5V+23csSBF5y1sWCSf/aEh89PH7g6QEoY6kDAgxMSbVBgURVMBUIKQddiGwdQuFs68SvrJwjJSH3eKx8pg7OM58zAndnnU9wI2CleJ/5KhXkE/KinKv4AvJFcoiaVDErYDgSHgERMKdYO8dgeGe4QJWbkRS79JzkDK1C4aVi0KQs3VTwM4jFO7SMAH/oHBIRypvyYNDi+iHlnt4LDymTgjzuHn8zKPLxvesgrByJgRTXUJsOsRKpIUHwmAHeGCG4DqkSBY9DSxqx39Hvy2crT9vJyRFUgk8Hu7wPD4e5zM7/awCdPU5VpbLhsE9hAdgKBIPTA/njqJ18Zo/Z/jvDMnxufk6+mv+qfH/Pz9r9qvYcZe2AAAAAElFTkSuQmCC":i[e].Picture}),e.users=i}return e})},makeNewReply:function(e){return e=e||{},$.create(this.serviceLocator.getUrl("MessageHandler-ReplyComment"),{idCase:e.idCase||"",idComment:e.idComment||"",comment:e.comment.replace(/\n/g,"<br>")||""}).pipe(function(e){if(e.comments&&(e.Replies=[e.comments]),e.users){var t=[e.users];$.each(t,function(e,i){t[e].Picture=""==t[e].Picture?"iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABJwSURBVHhe7Vt5UJPnuj+ddvSqdcpotQougCyGRfY9QCQQwhKIrAqurUtbbbVV1KO2UrXH46lL1aOOdWvrcl3QuosIBUSGongA5bLXqLjCVbarrX/97vO8SSAieLRVJ86czPwmX0L8vve3PM/7vp/JX/7yn8d/FHhVCkykC+144403NL16vQ1TU1MtBpqiR48eoL8VE9YQnF/VgF7VdVLffPPNRkdHJ0SER0CpDIdCEYqQkBAtgvlZgdDQUHh5ecHMzIzFyCbIXtUAX9Z12MliN1c3JCcnIzkpGWp1jCBrSD6YBAgODoZczpALBMmCYGFhwULsIJi8rAG+zPM6s+vseGLiaMTFxSM2JlaQl8lkAoGBgQgMCERAQAD8/f0hlfrDz88Pfr5+8PX1FXByctKXxmslgiAfEqxAdFQ0VKooqCJVwnVvb1+Ct4i6l6cXPDw8CR5wd3OHm5sbXF1d4ezMcIYTlQwLYGNjoxfhZRr2ws7NTmm8vLwRSnWuIMelflK46kkRISbl6OAIB4K9vT3s7ewhkdgRJLC1sRWEra2tYWVlhWHDhonnPn36sAjcII3+kWplZQ0Pd08RYXt7Bx0pW0FKT8xqmBUsLYfB0sISFkMtMHToUAwZPASDBw8WTdDU1AwDBw4UGDBggAClikUwN2YFTLp37y5izvFlId7t+y4G9B8gSGmJaae9gQO0xPr3649+/fqJz/UlsNN9TPrAxMRE4J133hGf43RwEnRN0Wg1mMVR5q5vQc72pLl99sfj0b3bW3j77beJYF8t+vRtI9qjR0+80/sdIqoly8e9e/d+DJaWlrC1tRXlwn8z5lmh2MvTm2rYFt26dcOSeTNQnn8U2Ue2w8pyCHp076EjTwIIl/vgrbfeYkKCGAvQ+ykCcAq4VOjzE40xAiYm5CIvdvpRrHv26I6a8+nQXMxAbdFpFGcfxJTx8YIsk9fHnB3n9xicho7uc3K4D3ACGNxDjLUZyrh+hwwZSvXcD3J/T1wrPYNrJRkC10uzUPFLOnZvWQ13Zwf06tVL29yoPzBJqZc7fD2cRaN7913qG/Q3fuY+wKLwbMACGKwSjS4EsoHU3MzMBoOTwLVfV5pJOCNw41I2bpadxbVLubiUn46VyxZhYP9+QghujBx/pVyKr+d/goH9+gpRWAR2n4Xg1wwWmfcSRsee65IF4O7OdTxn+gTcvJyFm5cyBW6V5eB2xTncrvoFd2qKoLmcj5L8DHy37hsE+HmR828xMVgOMcWejcsw98MkSN3tRY/gBOgF4EToSsbo+oBMTG0UaRZg/fL5uFOWTcgSuFuRi7uV+aivKUTDlYtouFqKe9fLUVddgrLCLGQc/hGLPp+GQF83mPZ/F9tXzkPegfU4vHkJUmeOx9houSCuE4B3jWpjS4GMu3p/FuDtXqgsOIr6ihzUl2cLNFSeRUN1Ae7VXsD9qyVovH4JTTcq0XyrBo115bhbfQG1FzJQmrUfpWd24VbREdwpOoTrBftQkfk9StO3GApglCtCE65nruUFMz8gwrm4V0WozCHkorEmH02a82i5XoLWG5fx8E4VHt6txcP6q3hwuwotdaVovHIe96vO4l7ZGTSUHkd98WHUXzxEOIj6ojT4eziAF1rkfKqxuS/G06vHfzXy9HZo+2oikovmmjy01BKunEPr1UI8uF6EhzdK8dvtcvx2txq/37uKR/ev47f6WvHew7pitF4pQFNlFu5dOoF7JUcIh3Gv+BDukQiBXo7o2bMnkiOkvEU2rsepTYsmTklQigXQ0R/XoonIN1ZRCVzOQF3RUdy4eAI3S07jFs0It2hGaL5eSgJo8KhRJ8CtMjRQn7hRdBx1hRT9/L24lrcL1wm3C/eRAGmQ+7qKafIfcyfjxIZFxtUDTmxamHpwy3JRp0d/WIP6skxcPX8ENXn7tTiXhqqzB1CZewDl2VTXOQdwX1NCCbhGCagRopRn7iLsRGXWTlRR3ddkfY/abC2uZG+Hr6stYkOlyNi9Fic3LphlVBFgRzL3rINc6o7D36+ixpeJO5cycLs0nVxnZBDJLJoOc2k9kIfawpO4XpzZJoCm8DiuFaWjrphw4QjqqPnV5e/GDcJNwp3CvVi9YDLy9qxC5u7VOLVpocyoBDi1abH52X1ryZ3VKCMn66mRNVVlaxtaWQYayrNoVshFfRVNhdWFtCYowNWiDDy6RwmgfnC7/BzulucK0e4UH8edC2m4c36fQP2FfWgsPoCajC24eHQT8ug6P61ZbGJUAvBgzmxdqrlB7p3bv0643lKdQ6B6r8pCU3Uu9QWaCa4UounqRTReLUZFbppohCwAv3e/Oh/3K7Jx/3K6aH73i9MEGhkXqXRObsSVvL04tflLXgcY34PLoOjwP5Gz8x+4UXyCunkmWog8o5Vmg1bNLzQTXMRvNBM0XrlgIECVeO/htfNorTmLlvIMNJUeQWPJwTbyjRf345e934DPb3QN0NAKHtzhdXM1tef2o+HyaTSTCM1VmYJYq6YAD64VCbL1tCoUCWjQUAJ0AtBU2UpJaSk/TQIcfox8w/k9OLFxocaoyeuFOLouRV14aANulxwnAc4IEVprcmmOzycBLtB8X4o62iZX5OgEuFOpTYCGBchBc5lOAIo9O8+ozviOGt8io1v/d1mHxzYs1Fw7fwjNFRlCBCbWWnsOD66eJwFKUJ13SEyFIgFCgBI8oBJpocbZXJaOppJDbeRZgPzdf2/8aYcRNr6uFDi4NiW1NH0bLWlPCBFaqRlqBShEMy159WuB3xuuCAFYlAdUIkKAyydJAKp/nfvXcraT+18a5fq/ywTwNJW+dUljXeFBNFNTa9U1wgcU84fXi2lKzKOF0SFKAAlwu0IrAC2DW2gZ3HyZGqiBAOQ+Tu1Ybm58bf/fjIhTUHhwPRrJ0RbRB86KmD/kmeDmJXK+Cr/XswC0DyBRHlCP6CgAu396y1fGufl5FkfSVqdoNDR3t3AfoEbILrcLUEkC6DZCJEpHAbjzZ21bguzXqfY7inJk/bzU01uXUC84KRohk3yomwq59oUAtBFiUToKUHKI1vybv+D9xev7OLBqdmpe2gZcOLIJTRVZbQJot8UsQE2nAlRnbEPe7hU4s33p6y3AwbVzf6osPIHMXatQcnIbWmib/OAqrQWEABWdClCbsxOZ25eh/DSt/SkFp79b7PzaRuDExkXZdbQLrCg4JkS4cGwrmmupD9BiqDMBanL3kOvLaNOzgTZB+3Hp2Aac2rLYuHZ+z+PGqiUp2Q/qLtJuLwdVdJ/wwvFtyPh+BYpP78QN+r8C3gXepnsB1WfTkLNrJU5Sv/jl0HrcKNgjFkNHvluKxTMnvz4rQBYnOjraPDIycs1IpVrj6S9HQcY+tNISuJlmgJt0X6A0ay/O7F2Hw0Ru/7qF+OGbFPy4ai69XoJ8mjYr6WYI3wW6SSKMT1TDL3oilFHxGpVKlcrnfh4DXulnaYATw1SjsmWxk+GS/CXsx6+Ac9znUCpCsHPzSnFfkPcDfHOk/Ox+nDv8HY5uX4E9//wSaXT7+wwl4PyRjUIAvgs8LoHIK+NgN26FOBefk8/N1+BrvVJyXV2MHWFnFOrRjd6jZ8Nx3NdisIbwSPgMsuBQxKhV2LlpBUqz9wsBCqgfnPxxVZsAx7b9DdtWzkfK9IniuwU+ihjYJS974nx8Db5WaFR8oy4VJq9cDF3Md4SMGgv3pAVPDLKjCE5jl0AaMxUjQ1Xi+0BMcNzoWIyJi0K8OgKhIXLx/SD+3pBvRBJcEufDTgj5d9iPM8Ryek0Yuxx2BLfR8xE8KhlUcjteSXnQRUxY9Wcl3lEIJuSS9AU8ElPgE/shvEZNE3CLm0mk5wlSdmP/pkUy42sDLINdkh5L6ZgwZikkBNeEFMjVSS83EeHh4c4RqlGaJx0nh/6NU12SaiPExLSE9KQkY5YQOcJoxlftSEyFpA2LIUnQYjjBPXYm94hiHusLLQs+oUKd2OiYTAPUxe+FkUokck8hNTzhSwyPZ3zxOOIWYXgbFmJ4rBZ2sfMQokpofGEicOzDyXmHMam6CHblkoFTTyVFZDojFUcEuyBlG7sAAjGMvz6OUfNhKzBPC/U8SNRzKAnqF3PzlOd01/g5HVziGLZHTxB6UaRGEcFOSDExG/VcLaIZKe2IouOoOTrMpufZcFVNo+8oqv7cVppjFKQeB4lBBG05ap04xe936VQbocedsnkqKT0hfiZSqnZYqz6HdaQen9GxFlbhn8I6YlYbRqpG40/NDqRgtnM8RSquPX7Dwj/RRvAFkrImcl2RMiRkHTET1uHtYMJWYYxPBCxDpmFY6HRYKWfAOmwGHCI+FlPkH2qIERERsqBRE+AQvwCSmPlt8bMImdohfp07JQh15lTEZ1i3Ox38SJ6/ntzqQKgDKUFOyZhhACLJRHUYFvoxhik+hqV8MsxHTqLjj2BN7w0PnwGZaswfSwG5/5M71b5j7HxqKlRjOpcGS8c8GT+D2GkdezqpdbtOagWYu7ZTUoKQjhSTaUMIHYd82I5gcrwNU2FB5If4jSEhpsCa0jBc+RGcwqc9fwq4buRU+y7x8+EYkwJJ1OewIWIWwVMwyDtO1FrH+GmdMnSJjzu4pCO1dudxIUDSnNXwSpiDUdO/hrN6lpaYASnL4KkQkDOmtCOIjoMm6/ABLEdqMVSaDDP3aDp+H9aUBoliGhzCPoI8MuH5UsCd3yd2BlxiU+Co/hwSFblKNTVEmgQzrxhRaxy/rp0ycKkTUmt/OCoE+HHPfvz888/49ddf8ejRI6Sl58M5imo5qJ0UE7MgQhYyPSbRsQ6BE2HRhgkY4pOIAU6hsAycAOugSZCETIaDciq8wyfwjDDrmXtBuCpW4xGfApcY2uBEzYIk4hNRU4O8YmHmqYYFDdAweu0uGTj1mEvsVjupb78/IgRYunIjZi5eg282/zf+936TeC8j71+PkbIImAA9zAPGw9xfj3F0rIN0LMwJg73i8J6DHOa+o2EtmwCJfBIcFZPhpJwCZYT62b5ep5/6PGJnw4Vi6Rj5CSRhH8Oa4jTQOUxEjFXXRtDQKXKoM6cec4kdm4Bvd/wkyI7+dDn0pEaEfYjm1gfifWn8Z4JQO5Jh7qdHEob6EXwZY9rhMwaDPWLwnn0QhnrGwDpgLCQjJ8AxZBJclJMRGJaAZ1od8uJBGvMhPGJmwSXqUzjSVCIJnQZrqn8+uambSijfHj0iZeCSBbvUmVMGhNZsOyiITv3rah0xLamCf5WL9xOnL9ESI1JDfUa3wzsRQ9uQgCFeesTTcTwGuUXjPYkMg8goG/8xkMjGwlE+AS6KSfBUJD9TGXQjlU66Rc2Ah/pTuKimw5GcsVNQVw16H/1s/WDqEikGK+L3mEvkWJtL7JbepY5OjcZX3/4giBZc/J82QmHj5rYlwFc9XRAS8NQjjo518IjFkDbEYLC7FoNcVHhveCAGjQiBjV8iJAFJGBE0Fi4hE+AUNI6325upDwwjvNlVP3DkD/lEvg/P6OlwjfgII6iJ2AW/Dyv/JPRnAUhd4cpj8TNwif9m4NJQ7yedciBX6m7VCxH4mYVobvk/8XrrnmNErp3UYPdRRI7gxlAbIBqDXQ0RBTOncAwY7o+BBBvfOEj8EzFCRvcX5OMgVSbS75KkK4m4G0HSlQBu9J1+mUKhyB6pSoZb+GSMUHwAuyCqee8Y9LfxhamTUufO4/HTOmXgEh8buNSRlI9qKgqKLgvS/GABtu4++gSpQS5R5CxDpYUzI7IdThEYpIOZoxIDbKUYaOMDGxqvnV88nAMTEUi31pgTc9MJwCJ0+uiv/wD9tmeqUqnMDoqIp/qhxY831Red2NRRIZoNE3p+p6KIoJ6QISkDQkzOgNQgcpVhNoJBTZjhqIeSjnVwCIWZfQgG2PhhkK0PPGVqyJVq+p2iMpu5GBBn8n2fNiX21tUJf1AkwsfHJ5V+23csSBF5y1sWCSf/aEh89PH7g6QEoY6kDAgxMSbVBgURVMBUIKQddiGwdQuFs68SvrJwjJSH3eKx8pg7OM58zAndnnU9wI2CleJ/5KhXkE/KinKv4AvJFcoiaVDErYDgSHgERMKdYO8dgeGe4QJWbkRS79JzkDK1C4aVi0KQs3VTwM4jFO7SMAH/oHBIRypvyYNDi+iHlnt4LDymTgjzuHn8zKPLxvesgrByJgRTXUJsOsRKpIUHwmAHeGCG4DqkSBY9DSxqx39Hvy2crT9vJyRFUgk8Hu7wPD4e5zM7/awCdPU5VpbLhsE9hAdgKBIPTA/njqJ18Zo/Z/jvDMnxufk6+mv+qfH/Pz9r9qvYcZe2AAAAAElFTkSuQmCC":t[e].Picture}),e.users=t}return e})},removeComment:function(e){return e=e||{},$.destroy(this.serviceLocator.getUrl("MessageHandler-RemoveComment"),{idCase:e.idCase||"",idComment:e.idComment||""})},removeReply:function(e){return e=e||{},$.destroy(this.serviceLocator.getUrl("MessageHandler-RemoveReply"),{idCase:e.idCase||"",idComment:e.idComment||"",idReply:e.idReply||""})},renameCommentCategory:function(e){return e=e||{},$.update(this.serviceLocator.getUrl("MessageHandler-RenameCategoryColor"),{idColorCategory:e.idColorCategory>=0?e.idColorCategory:"",colorName:e.colorName||""})},setCommentCategory:function(e){return e=e||{},$.update(this.serviceLocator.getUrl("MessageHandler-SetCategoryToComment"),{idCase:e.idCase||"",idComment:e.idComment||"",idColorCategory:"number"==typeof e.idColorCategory?e.idColorCategory:""})},getCommentsCategories:function(){return $.read(this.serviceLocator.getUrl("MessageHandler-GetCategoryColors")).pipe(function(e){return e.length>1&&e[0].categories?e[0]:e})},getNewComments:function(e){var t={idCase:(e=e||{}).idCase||0,idComment:e.idComment||0};return $.read(this.serviceLocator.getUrl("MessageHandler-CountNewComments"),t)},getAnalisysQueries:function(){return $.read(this.serviceLocator.getUrl("bamAnalytics-handler-getAnalisysQueries"))},updateQueries:function(e){return $.update(this.serviceLocator.getUrl("bamAnalytics-handler-updateQuery"),{idQuery:e.idQuery>=0?e.idQuery:"",queryName:e.queryName||"",queryDescription:e.queryDescription||""})},deleteQueries:function(e){var t={action:"1612"};return t.QueryId=e||"",$.destroy(this.serviceLocator.getUrl("reports-handler-deleteQueries"),t)},getConfiguration:function(){var e=this.serviceLocator.getUrl("authenticationConfig");return $.read(e)},logout:function(e){var t=this,i={sourceLogout:"user"};sessionStorage.removeItem("bizagiAuthentication");try{$.when(t.getConfiguration()).done(function(r){if(r.redirectErrorPage)window.location.href=r.redirectErrorPage;else{var a=r.authenticationType,o=r.authenticationSubType;switch(a){case"Federate":var s=r.logOffURL,n=r.federationLogoutBindingProtocol;if("WSFederated"===o)$.when($.create(t.serviceLocator.getUrl("logout"),i)).done(function(){e&&""!=e&&(s=s.replace(/wreply=[^&]*/,"wreply="+e)),location.href=s}).fail(function(){bizagi.log("Error logging out")}).always(function(){location.href=r.logOffURL});else if("Saml"===o){$.when($.read(t.serviceLocator.getUrl("FederateLogoffUrl"),{})).done(function(e){e.federateLogoffUrl&&(s=e.federateLogoffUrl),$.when($.create(t.serviceLocator.getUrl("logout"),i)).done(function(){"POST"===n?(window.document.open("text/html"),window.document.write(s),window.document.close()):window.location.href=s}).fail(function(){bizagi.log("Error logging out")}).always(function(){})}).fail(function(){bizagi.log("Error logging out")}).always(function(){})}break;case"SAML":loader.nativeAjax(loader.getPathUrl(t.serviceLocator.getUrl("logout"),i),function(e){var t=JSON.parse(e.responseText);if(!0===t.logout)if(void 0!==t.samlUrlRedirect){var i=decodeURI(t.samlUrlRedirect),r=document.createElement("iframe");document.getElementsByTagName("body")[0].appendChild(r),$(r).on("load",function(){(bizagi.util.isIE8()?$(this.contentWindow.document.body):$(this.contentWindow.eval("document.body"))).text();location.reload()}),r.src=i}else location.reload();else bizagi.log("Error logging out")});break;case"OAuth2":$.when($.create(t.serviceLocator.getUrl("logout"),i)).done(function(i){$.when($.read(t.serviceLocator.getUrl("oauth2AuthenticationConfig"))).done(function(t){if(t.logoutUrl&&""!=t.logoutUrl){var r=t.logoutUrl;e&&(e.endsWith("/")||(e+="/"),r=r.replace(/post_logout_redirect_uri=[^&]*/,"post_logout_redirect_uri="+e)),i.invalidateAccessToken&&(r=r.replace(/invalidateAccessToken=[^&]*/,"invalidateAccessToken="+i.invalidateAccessToken)),i.idTokenHint&&r.indexOf("id_token_hint")>=0&&(r+=i.idTokenHint),location.href=r}else location.reload()}).fail(function(){bizagi.log("Error logging out")})}).fail(function(){bizagi.log("Error logging out")});break;default:$.when($.create(t.serviceLocator.getUrl("logout"),i)).done(function(){e?location.href=e:window.location=bizagi.services.ajax.loginPage}).fail(function(){bizagi.log("Error logging out")})}}}).fail(function(e){console.log(e)})}catch(e){console.log(e)}},logoutMobile:function(){sessionStorage.removeItem("bizagiAuthentication");var e=this.serviceLocator.getUrl("logout");return $.read(e)},logoutBeforeUnload:function(){sessionStorage.removeItem("bizagiAuthentication"),$.ajax({type:"POST",async:!1,data:{sourceLogout:"browser"},url:this.serviceLocator.getUrl("logout")})},getOrganizationInfo:function(e){var t={};return t.objectType=e,$.ajax({url:this.serviceLocator.getUrl("massive-activity-assignments-getOrganizationInfo"),data:t,type:"GET",dataType:"json"})},getCasesByOrganization:function(e){var t={};return t.roles=e.roles?"["+e.roles.toString()+"]":"[]",t.skills=e.skills?"["+e.skills.toString()+"]":"[]",t.locations=e.locations?"["+e.locations.toString()+"]":"[]",$.ajax({url:this.serviceLocator.getUrl("massive-activity-assignments-getCasesByOrganization"),data:t,type:"GET",dataType:"json"})},reassignCases:function(e){var t={};return t.users=e.user?"["+e.user.toString()+"]":"[]",t.roles=e.roles?"["+e.roles.toString()+"]":"[]",t.skills=e.skills?"["+e.skills.toString()+"]":"[]",t.locations=e.locations?"["+e.locations.toString()+"]":"[]",$.ajax({url:this.serviceLocator.getUrl("massive-activity-assignments-reassignCases"),data:t,type:"POST",dataType:"json"})},searchUsers:function(e){var t={};return t.userName=e.userName||"",t.fullName=e.fullName||"",t.domain=e.domain||"",$.ajax({url:this.serviceLocator.getUrl("massive-activity-assignments-searchUsers"),data:t,type:"GET",dataType:"json"})},searchUsersByID:function(e){var t={ids:"["+e.toString()+"]"};return $.ajax({url:this.serviceLocator.getUrl("massive-activity-assignments-searchUsersById"),data:t,type:"POST",dataType:"json"})},getUsersList:function(e){return $.read(this.serviceLocator.getUrl("admin-getUsersList"),e)},getUsersForAssignation:function(e){return $.read(this.serviceLocator.getUrl("admin-getUsersForAssignation"),e)},getOAuth2Applications:function(e){return $.read(this.serviceLocator.getUrl("admin-getUsersForAssignation"),e)},getAdhocProcessesList:function(e){return $.ajax({url:this.serviceLocator.getUrl("admin-getAdhocProcessesList"),data:e,type:"POST",dataType:"json"})},createAdhocProcess:function(e){return $.ajax({url:this.serviceLocator.getUrl("admin-createAdhocProcess"),data:e,type:"POST",dataType:"json"})},createNewAdhocProcess:function(e){return $.create({url:this.serviceLocator.getUrl("admin-createNewAdhocProcess"),data:JSON.stringify(e),dataType:"json",contentType:"application/json"})},updateAdhocProcess:function(e){return $.ajax({url:this.serviceLocator.getUrl("admin-updateAdhocProcess"),data:e,type:"POST",dataType:"json"})},publishAdhocProcess:function(e){return $.ajax({url:this.serviceLocator.getUrl("admin-publishAdhocProcess"),data:e,type:"POST",dataType:"json"})},deleteAdhocProcess:function(e){var t=this.serviceLocator.getUrl("admin-deleteAdhocProcess");return $.ajax({url:t.replace("{processId}",e),type:"DELETE",dataType:"json"})},cloneAdhocProcess:function(e){return $.ajax({url:this.serviceLocator.getUrl("admin-cloneAdhocProcess"),data:e,type:"POST",dataType:"json"})},deleteAdhocTask:function(e){var t=this.serviceLocator.getUrl("admin-deleteAdhocTask");return $.ajax({url:t.replace("{processId}",e.idProcess).replace("{taskId}",e.idTask),type:"DELETE",dataType:"json"})},updateAdhocTask:function(e){var t=this.serviceLocator.getUrl("admin-updateAdhocTask");return $.ajax({url:t.replace("{processId}",e.idProcess),data:e.task,type:"POST",dataType:"json"})},getAdhocDataSchema:function(e){var t=this.serviceLocator.getUrl("admin-getAdhocDataSchema");return $.ajax({url:t.replace("{processId}",e),type:"GET",dataType:"json"})},getAdhocProcessDiagram:function(e){var t=this.serviceLocator.getUrl("admin-getAdhocProcessDiagram");return $.ajax({url:t.replace("{processId}",e),type:"GET",dataType:"json"})},getAdhocTask:function(e,t){var i=this.serviceLocator.getUrl("admin-getAdhocTask");return $.ajax({url:i.replace("{processId}",e).replace("{taskId}",t),type:"GET",dataType:"json"})},saveAdhocProcessDiagram:function(e,t){var i=this.serviceLocator.getUrl("admin-saveAdhocProcessDiagram");return $.ajax({url:i.replace("{processId}",e),data:t,type:"POST",dataType:"json"})},getAdhocEntitiesList:function(){var e=this.serviceLocator.getUrl("admin-adhoc-entities-list");return $.read(e,{})},getAdhocUserGroupList:function(){var e=this.serviceLocator.getUrl("admin-adhoc-user-group-list");return $.read(e,{})},loadUsersByGroup:function(e){var t=this.serviceLocator.getUrl("admin-adhoc-user-group-data-get");return $.ajax({url:t.replace("{groupId}",e),type:"GET",dataType:"json"})},loadAuthItemInfoByInstance:function(e){return $.ajax({url:this.serviceLocator.getUrl("admin-adhoc-authorization-data-get"),data:e,type:"POST",dataType:"json"})},saveAdhocAuthorizationInfo:function(e){return $.ajax({url:this.serviceLocator.getUrl("admin-adhoc-authorization-data-save").replace("{processId}",e.processId).replace("{isAdhocTask}",e.isAdhocTask),data:e.auth,type:"POST",dataType:"json"})},deleteAdhocGroup:function(e){var t=this.serviceLocator.getUrl("admin-adhoc-user-group-delete");return $.ajax({url:t.replace("{groupId}",e),type:"DELETE",dataType:"json"})},saveAdhocGroup:function(e){return $.ajax({url:this.serviceLocator.getUrl("admin-adhoc-user-group-save"),data:e,type:"POST",dataType:"json"})},addUserToGroup:function(e){var t=this.serviceLocator.getUrl("admin-adhoc-user-group-data-add");return $.ajax({url:t.replace("{groupId}",e.groupId).replace("{userId}",e.userId),type:"POST",dataType:"json"})},removeUserFromGroup:function(e,t){var i=this.serviceLocator.getUrl("admin-adhoc-user-group-data-remove");return $.ajax({url:i.replace("{groupId}",e).replace("{userId}",t),type:"DELETE",dataType:"json"})},getAdhocEntityInstances:function(e){var t=this.serviceLocator.getUrl("admin-adhoc-entity-instances");return $.ajax({url:t.replace("{entityId}",e),type:"GET",dataType:"json"})},getEntityValues:function(e,t){var i=this.serviceLocator.getUrl("admin-entity-values");return $.ajax({url:i.replace("{context}",e).replace("{entityId}",t),type:"GET",dataType:"json"})},saveAdhocEntity:function(e){return $.ajax({url:this.serviceLocator.getUrl("admin-saveAdhocEntity"),data:e,type:"POST",dataType:"json"})},saveAdhocEntityInstance:function(e){return $.ajax({url:this.serviceLocator.getUrl("admin-saveAdhocEntityInstance").replace("{entityId}",e.entityId).replace("{isNew}",e.isNew),data:e.instance,type:"POST",dataType:"json"})},getAllEntities:function(){return $.ajax({url:this.serviceLocator.getUrl("admin-getAllEntities"),type:"GET",dataType:"json"})},getAllCategories:function(){return $.ajax({url:this.serviceLocator.getUrl("admin-getAllCategories"),type:"GET",dataType:"json"})},getDomainList:function(){var e=this.serviceLocator.getUrl("domains");return $.read(e)},getEcmAllScheduledJobs:function(){var e={action:"getEcmAllScheduledJobs"};return $.read(this.serviceLocator.getUrl("async-ecm-upload-baseService"),e)},retryECMPendingScheduledJob:function(e){var t={action:"retryECMPendingScheduledJob"};return t.idJob=e,$.read(this.serviceLocator.getUrl("async-ecm-upload-baseService"),t)},getWorkPortalVersion:function(){return $.ajax({url:this.serviceLocator.getUrl("WorkPortalVersion"),type:"GET",dataType:"json"}).always(function(e){return""==(e=e||{}).version&&(e.version=bizagi.loader.productBuild||""),e})},getAuthenticationLogData:function(e){var t="";return t="domains"==e.dataType?"admin-getAuthenticationDomains":"events"==e.dataType?"admin-getAuthenticationEventsTypes":"admin-getAuthenticationEventSubTypes",$.ajax({url:this.serviceLocator.getUrl(t),data:{},type:"GET",dataType:"json"})},getAuthenticationLogResult:function(e){var t={};return t.action=e.action,t.domain=e.domain,t.userName=e.userName,t.dtFrom=e.dtFrom,t.dtTo=e.dtTo,t.eventSubType=e.eventSubType,t.eventType=e.eventType,t.pag=e.pag,t.pagSize=e.pagSize,$.ajax({url:this.serviceLocator.getUrl("admin-getAuthenticationLog"),data:t,type:"GET",dataType:"json"}).pipe(function(e){for(var t=e.rows.length,i=0;i<t;i++){var r=e.rows[i][0],a=new Date(r),o=bizagi.util.dateFormatter.formatDate(a,bizagi.localization.getResource("dateFormat")+" "+bizagi.localization.getResource("timeFormat"));e.rows[i][0]="Invalid Date"==a?r:o}return e})},encryptString:function(e){var t={};return e=e||{},t.entry=e.entry,$.ajax({url:this.serviceLocator.getUrl("admin-EncryptString"),data:t,type:"POST",dataType:"json"})},userPendingRequests:function(e){var t={pag:e.pag,pagSize:e.pagSize};return $.read(this.serviceLocator.getUrl("admin-UserPendingRequests"),t)},userAuthenticationInfo:function(e){return $.read(this.serviceLocator.getUrl("admin-UserAuthenticationInfo"),{idUser:e.idUser})},updateUserAuthenticationInfo:function(e){return $.create(this.serviceLocator.getUrl("admin-updateUserAuthenticationInfo"),{idUser:e.idUser,password:e.password,enabled:e.enabled,expired:e.expired,locked:e.locked})},generateRandomPassword:function(e){return(e=e||{}).action="generateRandomPassword",$.ajax({url:this.serviceLocator.getUrl("admin-generateRandomPassword"),data:e,type:"POST",dataType:"json"})},generateDataToSendByEmail:function(e){e=e||{};var t={action:"GenerateDataToSendByEmail"};return t.idUser=e.idUser,t.password=e.password,$.ajax({url:this.serviceLocator.getUrl("admin-GenerateDataToSendByEmail"),data:e,type:"POST",dataType:"json"})},sendEmail:function(e){e=e||{};var t={action:"sendEmail"};return t.emailTo=e.emailTo,t.subject=e.subject,t.body=e.body,$.ajax({url:this.serviceLocator.getUrl("admin-sendEmail"),data:e,type:"POST",dataType:"json"})},sendUserEmail:function(e){e=e||{};var t={action:"SendUserEmail"};return t.emailTo=e.emailTo,t.subject=e.subject,t.body=e.body,$.ajax({url:this.serviceLocator.getUrl("admin-sendUserEmail"),data:e,type:"POST",dataType:"json"})},getApplicationCategoriesList:function(e){var t={},i="";if(e.userId&&(t.userId=e.userId),"Applications"==e.action&&e.userId){i=this.serviceLocator.getUrl("admin-getCaseSecurityApplicationList");return $.read(i,t)}if("Applications"==e.action&&!e.userId)return i="admin-getApplicationList",$.ajax({url:this.serviceLocator.getUrl(i),data:t,type:"GET",dataType:"json"});if("getCategories"==e.action&&e.userId){i=this.serviceLocator.getUrl("admin-getCaseSecurityCategoriesList");return t.idApp=e.idApp,t.idCategory=e.idCategory,e.authorizationContext&&(t.authorizationContext=e.authorizationContext),""==t.idCategory&&(t.idCategory=-1),void 0!==e.filterStartEvent&&(t.filterStartEvent=e.filterStartEvent),$.read(i,t)}return"getCategories"!=e.action||e.userId?void 0:(i="admin-getCategoriesList",t.idApp=e.idApp,t.idCategory=e.idCategory,e.authorizationContext&&(t.authorizationContext=e.authorizationContext),""==t.idCategory&&(t.idCategory=-1),void 0!==e.filterStartEvent&&(t.filterStartEvent=e.filterStartEvent),$.ajax({url:this.serviceLocator.getUrl(i),data:t,type:"GET",dataType:"json"}))},getAdminCasesList:function(e){var t=e||{};return $.ajax({cache:!0,url:this.serviceLocator.getUrl("admin-getCasesList"),data:t,type:"GET",dataType:"json"})},postAdminInvalidateCase:function(e){var t=e||{};return $.ajax({cache:!0,url:this.serviceLocator.getUrl("admin-invalidateCases"),data:t,type:"POST",dataType:"json"})},getResponseProcessRunningInvalidateCases:function(e){var t=e||{};return $.ajax({cache:!0,url:this.serviceLocator.getUrl("admin-getProcessRunningInvalidateCases"),data:t,type:"GET",dataType:"json"})},getApplicationProcesses:function(e){var t=this.serviceLocator.getUrl("admin-getApplicationProcesses"),i={};return i.idApp=e.idApp?e.idApp:-1,$.read(t,i)},getProcessVersion:function(e){var t=this.serviceLocator.getUrl("admin-getProcessVersion"),i={};return i.idWfClass=e.idWFClass,$.read(t,i)},getProcessTasks:function(e){var t=this.serviceLocator.getUrl("admin-getProcessTasks"),i={};return i.idWfClass=e.idWFClass,i.version=e.version?e.version:void 0,$.read(t,i)},getTaskAlarms:function(e){var t=this.serviceLocator.getUrl("admin-getTaskAlarms"),i={};return i.idTask=e.idTask,$.read(t,i)},getLapseMode:function(){var e=this.serviceLocator.getUrl("admin-getLapseMode");return $.read(e)},getRecurrMode:function(){var e=this.serviceLocator.getUrl("admin-getRecurrMode");return $.read(e)},getScheduleType:function(){var e=this.serviceLocator.getUrl("admin-getScheduleType");return $.read(e)},getBossList:function(e){var t=this.serviceLocator.getUrl("admin-getBossList");return $.read(t)},addAlarm:function(e){var t=this.serviceLocator.getUrl("admin-addAlarm"),i={};return i.idTask=e.idTask,i.idRecurrMode=e.idRecurrMode,i.idLapseMode=e.idLapseMode,i.scheduleType=e.scheduleType,i.alarmTime=e.alarmTime,i.alarmRecurrTime=e.alarmRecurrTime,i.sendToCurrentAssignee=e.sendToCurrentAssignee,$.update(t,i)},editAlarm:function(e){var t=this.serviceLocator.getUrl("admin-editAlarm"),i={};return i.idTask=e.idTask,i.idAlarm=e.idAlarm,i.idRecurrMode=e.idRecurrMode,i.idLapseMode=e.idLapseMode,i.scheduleType=e.scheduleType,i.alarmTime=e.alarmTime,i.alarmRecurrTime=e.alarmRecurrTime,i.sendToCurrentAssignee=e.sendToCurrentAssignee,$.update(t,i)},deleteAlarm:function(e){var t=this.serviceLocator.getUrl("admin-deleteAlarm");return e.idAlarm,$.destroy(t,e)},getAlarmRecipients:function(e){var t=this.serviceLocator.getUrl("admin-alarmRecipients"),i={};return i.idAlarm=e.idAlarm,$.read(t,i)},addRecipientToAlarm:function(e){var t=this.serviceLocator.getUrl("admin-recipientToAlarm"),i={};return i.idAlarm=e.idAlarm,i.idRecipient=e.idRecipient,$.update(t,i)},deleteRecipientsFromAlarm:function(e){var t=this.serviceLocator.getUrl("admin-deleteAlarmRecipients"),i={};return i.idRecipients=e.idRecipients,$.destroy(t,i)},enableAlarm:function(e){var t=this.serviceLocator.getUrl("admin-enableAlarm"),i={};return i.idTask=e.idTask,$.create(t,i)},abortReassignItems:function(e){var t=e||{},i="abort"==e.action?"admin-abortItems":"admin-reassignItems";return $.ajax({url:this.serviceLocator.getUrl(i),data:t,type:"POST",dataType:"json"})},reassignCurrent:function(e){var t=e||{};return $.ajax({url:this.serviceLocator.getUrl("admin-reassignCurrent"),data:t,type:"POST",dataType:"json"})},asyncActivitiesServices:function(e){var t=this,i=e,r="",a="GET";return"getActivities"==e.action?r=t.serviceLocator.getUrl("admin-async-activities-get-activities"):"retryNow"==e.action?(a="POST",r=(r=(r=(r=t.serviceLocator.getUrl("admin-async-activities-get-retry-now")).replace("{idCase}",e.idCase)).replace("{idworkItem}",e.idWorkitem)).replace("{idAsynchWorkitem}",e.idAsynchWorkitem)):"getActivitiesByTask"==e.action?r=t.serviceLocator.getUrl("admin-async-activities-get-activities-by-task"):"enableExecution"==e.action?(a="POST",r=t.serviceLocator.getUrl("admin-async-activities-enable-execution")):"enableMultiple"==e.action?(r=t.serviceLocator.getUrl("admin-async-activities-enable-multiple"),a="POST"):"asyncExecution"==e.action?r=t.serviceLocator.getUrl("admin-async-activities-async-execution"):"asyncExecutionLog"==e.action?r=(r=(r=(r=t.serviceLocator.getUrl("admin-async-activities-async-execution-log")).replace("{idCase}",e.idCase)).replace("{idworkItem}",e.idWorkItem)).replace("{idAsynchWorkitem}",e.idAsynchWorkitem):"getAsyncExecution"==e.action&&(r=t.serviceLocator.getUrl("admin-async-activities-async-get-current-execution-log")),$.ajax({url:r,data:i,type:a,dataType:"json"})},getDefaultAssignationUserToAllProcess:function(e){return $.read(this.serviceLocator.getUrl("admin-getDefaultAssignationUserToAllProcess"),{serviceAction:"getDefaultAssignationUserToAllProcess"})},getDefaultAssignationUserToProcess:function(e){var t;return t=""==e.idWFClass?-1:e.idWfClass,$.read(this.serviceLocator.getUrl("admin-getDefaultAssignationUserToProcess"),{serviceAction:"getDefaultAssignationUserToProcess",process:t})},setDefaultAssignationUserToProcess:function(e){return""==e.idWFClass?process=-1:process=e.idWfClass,$.create(this.serviceLocator.getUrl("admin-setDefaultAssignationUserToProcess"),{serviceAction:"setDefaultAssignationUserToProcess",process:process,idUser:e.idUser})},transferCaseSecuritypermissions:function(e){return e.allProcess?$.create(this.serviceLocator.getUrl("admin-transferAllCaseSecuritypermissions"),{serviceAction:"transferAllCaseSecuritypermissions",idUserSource:e.idUserSource,idUserTarget:e.idUserTarget}):$.create(this.serviceLocator.getUrl("admin-transferCaseSecuritypermissions"),{serviceAction:"transferCaseSecuritypermissions",idUserSource:e.idUserSource,idUserTarget:e.idUserTarget,idProcess:e.idProcess})},revokeCaseSecuritypermissions:function(e){return e.allProcess?$.create(this.serviceLocator.getUrl("admin-revokeAllCaseSecuritypermissions"),{serviceAction:"revokeAllCaseSecuritypermissions",idUserSource:e.idUserSource}):$.create(this.serviceLocator.getUrl("admin-revokeCaseSecuritypermissions"),{serviceAction:"revokeCaseSecuritypermissions",idUserSource:e.idUserSource,idProcess:e.idProcess})},statusTransferCaseSecuritypermissions:function(e){return $.create(this.serviceLocator.getUrl("admin-statusTransferCaseSecuritypermissions"),{serviceAction:"statusTransferCaseSecuritypermissions"})},getProfilesTypes:function(e){return $.read(this.serviceLocator.getUrl("admin-getProfilesTypes"))},searchProfiles:function(e){var t=this.serviceLocator.getUrl("admin-searchProfiles"),i={};return i.type=e.profileType,i.name=e.profileName,i.orgId=e.orgId?e.orgId:null,$.read(t,i)},getUsersByProfile:function(e){var t=this.serviceLocator.getUrl("admin-getUsersByProfile"),i={};return i.type=e.profileType,i.id=e.idProfile,$.read(t,i)},removeUserFromProfile:function(e){var t=this.serviceLocator.getUrl("admin-removeUserFromProfile"),i={};return i.type=e.profileType,i.id=e.idProfile,i.idUser=e.idUser,$.destroy(t,i)},addUserToProfile:function(e){var t=this.serviceLocator.getUrl("admin-addUserToProfile"),i={};return i.type=e.profileType,i.id=e.idProfile,i.idUser=e.idUser,$.update(t,i)},licenses:function(){var e=this.serviceLocator.getUrl("admin-Licenses");return $.read(e)},getDimensions:function(){var e=this.serviceLocator.getUrl("admin-GetDimensions");return $.read(e)},editDimension:function(e){e=e||{};var t={};t.id=e.id,t.displayName=e.displayName,t.name=e.name,t.idWfClass=e.idWfClass,t.entityPath=e.entityPath,t.description=e.description;var i=this.serviceLocator.getUrl("admin-EditDimension");return $.create(i,t)},createAdministrableDimension:function(e){e=e||{};var t={};return t.displayName=e.displayName,t.name=e.name,t.idWfClass=e.idWfClass,t.entityPath=e.entityPath,t.Description=e.description,$.ajax({url:this.serviceLocator.getUrl("admin-CreateAdministrableDimension"),data:e,type:"PUT",dataType:"json"})},deleteDimension:function(e){var t=this.serviceLocator.getUrl("admin-DeleteDimension");e=e||{};var i={};return i.id=e.id,i.idDimension=e.id,i.administrable=e.administrable,$.destroy(t,i)},entityPathChildNodesAction:function(e){e=e||{};var t={};return t.pathNodeType=e.nodeType,t.idNode=e.idNode,t.nodeDisplayPath=e.nodeDisplayPath,t.nodePath=e.nodePath,t.idWfClass=e.idWfClass,$.ajax({url:this.serviceLocator.getUrl("admin-EntityPathChildNodesAction"),data:e,type:"GET",dataType:"json"})},getActiveWFClasses:function(e){var t=e||{};return $.ajax({cache:!0,url:this.serviceLocator.getUrl("admin-GetActiveWFClasses"),data:t,type:"GET",dataType:"json"})},storeDocumentTemplates:function(){var e=this.serviceLocator.getUrl("admin-document-templates-storeDocumentTemplates");return $.read(e)},restoreDocumentTemplates:function(e){var t=this.serviceLocator.getUrl("admin-document-templates-restoreDocumentTemplates");return t+="?Guid="+e.Guid,$.read(t)},getWorkFlowClasses:function(){var e=this.serviceLocator.getUrl("admin-processes-workflowClasses");return $.read(e)},getTaskByWorkFlow:function(e){var t=this.serviceLocator.getUrl("admin-processes-tasksByWorkflow"),i={};return i.idWorkflow=e.idWorkflow,$.read(t,i)},modifyProcessDuration:function(e){var t=this.serviceLocator.getUrl("admin-processes-modifyProcessDuration"),i={};return i.idWorkflow=e.idWorkflow,i.duration=e.duration,$.create(t,i)},modifyTaskDuration:function(e){var t=this.serviceLocator.getUrl("admin-processes-modifyTaskDuration"),i={};return i.idTask=e.idTask,i.duration=e.duration,$.create(t,i)},processesHierarchy:function(){var e={removeOnlineItems:"true"};return $.ajax({url:this.serviceLocator.getUrl("offline-getProcessTree"),data:e,dataType:"json",type:"GET"})},syncOfflineCases:function(e){return $.ajax({url:this.serviceLocator.getUrl("offline-sendForm"),data:{idCase:e.idCase,idWFClass:e.idWfClass,awCaseCreationContext:JSON.stringify(e.objToSend),idWorkflow:e.idWfClass},type:"POST",dataType:"json",serviceType:"LOAD"})},processesHierarchyTofetchForms:function(e){var t={};return t.idChangeSet=e.changeSet,$.ajax({url:this.serviceLocator.getUrl("offline-getForms"),data:t,dataType:"json"})},getDataForMyTeam:function(){return $.ajax({url:this.serviceLocator.getUrl("bam-resourcemonitor-myteam"),type:"GET",dataType:"json"})},getReporstAnalysisQuery:function(){return $.read(this.serviceLocator.getUrl("reports-analysisquery"))},updateReportData:function(e){return $.update(this.serviceLocator.getUrl("reports-analysisquery-update"),e)},deleteReportData:function(e){return $.destroy(this.serviceLocator.getUrl("reports-analysisquery-delete")+"?"+e)},getAdminEntitiesList:function(){var e=this.serviceLocator.getUrl("admin-entities-list");return $.read(e,{})},getAdminStakeholdersList:function(){var e=this.serviceLocator.getUrl("admin-stakeholders-list");return $.read(e,{})},getAdminEntitiesRowData:function(e){var t=this.serviceLocator.getUrl("admin-entities-row-data"),i={guidEntity:e.guidEntity,pag:e.pag||1,pagSize:e.pagSize||10};return void 0!==e.orderField&&(i.orderField=e.orderField),void 0!==e.orderType&&(i.orderType=e.orderType),void 0!==e.filters&&$.isArray(e.filters)&&e.filters.length>0&&(i.filters=JSON.stringify(e.filters)),$.read(t,i)},getUserStakeholders:function(e){var t=this.serviceLocator.getUrl("admin-user-stakeholders"),i={idUser:e.idUser};return $.read(t,i)},getAdminEntityData:function(e){var t=this.serviceLocator.getUrl("admin-entity-simpleData"),i={};return i.idEntity=e.idEntity,i.idAttribute=e.idAttribute,$.read(t,i)},getAdminEntityMigrated:function(e){var t=this.serviceLocator.getUrl("admin-entities-migrated-entity"),i={};return i.guidEntity=e,$.read(t,i)},getAdminEntitiesForm:function(e){var t=this.serviceLocator.getUrl("admin-entities-get-form"),i={h_action:"LOADENTITYFORM",h_contexttype:"entity"};return void 0!==e.guid&&(i.h_guidEntity=e.guid),void 0!==e.guidForm&&(i.h_guidForm=e.guidForm),void 0!==e.idRow&&(i.h_surrogateKey=e.idRow),void 0!==e.idPageCache&&(i.h_pageCacheId=e.idPageCache,i.h_isRefresh=!0),void 0!==e.isStakeholder&&e.isStakeholder&&(i.h_showDisabled=!1,i.h_showAssociateUser=!0),e.prepare?i:$.ajax({url:t,data:i,type:"POST",dataType:"json"})},getBizagiObjects:function(){var e=this.serviceLocator.getUrl("admin-language-bizagi-objects");return $.read(e,{})},getEntitiesList:function(){var e=this.serviceLocator.getUrl("admin-language-entities");return $.read(e,{})},getStoreLanguageTemplates:function(){var e=this.serviceLocator.getUrl("admin-language-languages");return $.read(e,{})},setLanguages:function(e){var t=this.serviceLocator.getUrl("admin-language-languages"),i=e;return $.ajax({url:t,data:{languages:i},type:"POST",dataType:"json"})},resetPersonalization:function(){return $.ajax({url:this.serviceLocator.getUrl("admin-language-reset"),data:{},type:"DELETE",dataType:"json"})},getLanguageTemplate:function(e){var t,i="";e.elements?(t="admin-language-resource-download",i="&elements="+e.elements):e.entities?(t="admin-language-entities-download",i="&entities="+e.entities):t="admin-language-resource-download";var r="tablet_android"===this.device?"_system":"_self",a=encodeURI(this.serviceLocator.getUrl(t)+"?cultureName="+e.cultureName+i+"&xsrf="+bizagi.cookie(".BIZCSRF"));window.open(a,r,"location=yes")},getHolidaysSchemas:function(e){return $.read(this.serviceLocator.getUrl("admin-holidays-schemas"),e)},getHolidaysBySchema:function(e){return $.read(this.serviceLocator.getUrl("admin-holidays-schema"),e).pipe(function(e){e=e||{};return $.each(e,function(t,i){e[t].date=(i.date||"").split("T")[0]+"T00:00:00"}),e})},saveHolidaysBySchema:function(e){var t=this.serviceLocator.getUrl("admin-holidays-schema").replace("{schema}",e.schema);$.ajax({method:"POST",url:t,data:e.data,contentType:"application/json"})},getProjectName:function(){var e=this.serviceLocator.getUrl("admin-projectname");return $.read(e)},setProjectName:function(e){var t=this.serviceLocator.getUrl("admin-projectname"),i={projectName:e};return $.create(t,i)},downloadReportUser:function(e){var t=this,i=t.serviceLocator.getUrl("user-gdpr-downloadReportUser");bizagi.showErrorAlertDialog=!1,$.when(t.getDownloadReport(e,i)).done(function(t){0===$("#iframe-download").length?$("<iframe/>").attr({src:i.replace("{idUser}",e),style:"visibility:hidden;display:none",id:"iframe-download"}).appendTo("body"):$("#iframe-download").attr("src",i.replace("{idUser}",e))}).fail(function(e,i,r){var a=JSON.parse(e.responseText);t.notifier=bizagi.injector.get("notifier"),t.notifier.showErrorMessage(a.message)})},getDownloadReport:function(e,t){var i={idUser:e};return $.read(t,i)},anonymizeUser:function(e){var t=this.serviceLocator.getUrl("user-gdpr-anonymizeUser"),i={idUser:e};return $.destroy(t,i)},getAuditLicense:function(e){var t=$.Deferred(),i=this.serviceLocator.getUrl("admin-audit-license")+"?xsrf="+bizagi.cookie(".BIZCSRF");return t.resolve("OK"),document.location=i,t.promise()},processDefinition:function(e){return $.read(this.serviceLocator.getUrl("processviewer-processdefinition"),e)},graphicInfo:function(e){return $.read(this.serviceLocator.getUrl("processviewer-processgraphicinfo"),e)},getQueryFormResponse:function(e){return $.create(this.serviceLocator.getUrl("query-handler-getQueryFormResponse"),e)},exportToExcelProfiles:function(e){var t=encodeURI(this.serviceLocator.getUrl("admin-getUsersByProfile-report").replace("{filterType}",e.filterType).replace("{guidValueFilter}",e.guidValueFilter)+"?orgId="+e.orgId);window.location.assign(t)},getQueryFormExportExcel:function(e){var t=$.Deferred(),i="",r="_self";bizagi.util.isIE()&&(r="iframeExcel");var a=$("<form>",{action:this.serviceLocator.getUrl("query-handler-getQueryFormExportExcel")+"?xsrf="+bizagi.cookie(".BIZCSRF"),target:r,id:"formExportExcel",method:"POST",style:"display:none"});$(a).attr("enctype","application/x-www-form-urlencoded"),$(a).attr("accept-charset","UTF-8");var o=$("<iframe>",{name:"iframeExcel",id:"iframeExcel",style:"display:none"});return $.each(e,function(e,t){i=$("<input>",{name:e,value:t,type:"hidden"}),$(a).append(i)}),$("body").append(a),$("body").append(o),a.submit().remove(),o.submit().remove(),t.resolve("OK"),t.promise()},getQueryForm:function(e){return e=e||{},$.ajax({url:this.serviceLocator.getUrl("query-handler-getQueryForm"),data:e,type:"POST",dataType:e.dataType||"json"})},getPreferencesForm:function(e){return $.ajax({url:this.serviceLocator.getUrl("preferences-handler-getPreferencesForm"),data:e,type:"POST",dataType:"json"})},saveStoredQueryForm:function(e){return $.ajax({url:this.serviceLocator.getUrl("query-handler-storedQueryForm"),data:e,type:"POST",dataType:"json"})},updateStoredQueryForm:function(e){return $.ajax({url:this.serviceLocator.getUrl("query-handler-storedQueryForm"),data:e,type:"PUT",dataType:"json"})},deleteStoredQueryForm:function(e){var t=this.serviceLocator.getUrl("query-handler-storedQueryForm-id");return $.destroy(t,e)},getStoredQueryFormList:function(e){return $.ajax({url:this.serviceLocator.getUrl("query-handler-storedQueryForm"),data:e,type:"GET",dataType:"json"})},getStoredQueryFormResponse:function(e){var t=this.serviceLocator.getUrl("query-handler-storedQueryForm-id"),i={};return i.idStoredQueryForm=e,$.read(t,i)},getGraphicQueryInfo:function(e){return $.read("Rest/Cases/WorkitemsGuid",e)},getCasePath:function(e){return $.read("Rest/Cases/TransitionLog",e)},getUsersForm:function(e){return $.create(this.serviceLocator.getUrl("admin-usersform"),e)},getLastUpdateByMobile:function(){return $.read({url:this.serviceLocator.getUrl("mobile-getLastUpdate")})},getUsersAdministrationLog:function(e){return $.read({url:this.serviceLocator.getUrl("admin-userslog"),data:e})},queryUsersLicenses:function(){return $.read({url:this.serviceLocator.getUrl("admin-userslicenses")})},createUserAdministrationForm:function(){return $.get(this.serviceLocator.getUrl("admin-createuserform"))},getPreferenceFormParams:function(){return $.read(this.serviceLocator.getUrl("admin-userpreferenceform-isnew"))},getUserPositions:function(){return $.read(this.serviceLocator.getUrl("admin-userGetPositions"))},getAssignationQueues:function(){return $.read(this.serviceLocator.getUrl("admin-assignation-queues"))},getSegmentationQueues:function(){return $.read(this.serviceLocator.getUrl("admin-assignation-queues-segmentation"))},getQueueSuscribers:function(e){return $.read(this.serviceLocator.getUrl("admin-assignation-queues-suscribers"))},unsuscribeQueueUser:function(e){return $.destroy(this.serviceLocator.getUrl("admin-assignation-queues-unsuscribe"),{userId:e,segmentation:"x"})},getUserInfoByTask:function(e,t){var i={idCase:e,guidTask:t};return $.read(this.serviceLocator.getUrl("graphicquery-trailusers"),i)},getSearchLists:function(){return $.read(this.serviceLocator.getUrl("my-search-getSearchLists"),{})},defineFilterObject:function(e,t,i){var r=e.properties,a=r.xpath.split("@")[0],o=t.find(function(e){return e.xpath==a});if(o){if("from"==r.rangeQuery)o.value=o.value||{},o.searchType="range",o.value.min=e.value;else if("to"==r.rangeQuery)o.value=o.value||{},o.searchType="range",o.value.max=e.value;else{e.properties.typeSearch=o.searchType;var s=l(e);$.extend(o,s)}r.orderType&&(o.orderType=r.orderType),i&&i(bizagi.clone(o))}else{var n=r.defaultFilter||!1;o=l(e),r.orderType&&(o.orderType=r.orderType),"range"===o.searchType&&void 0===o.value&&(o.searchType="none"),(void 0!==o.value&&null!=o.value||o.orderType||n)&&(t.push(o),i&&i(bizagi.clone(o)))}function l(e){var t=e.properties,i=t.typeSearch,r=e.value;if("boolean"==t.type&&(void 0===r||"null"==typeof r?(r=null,i="Nullable"):(r=bizagi.util.parseBoolean(r),i="exact")),"number"!=t.type&&"money"!=t.type&&"date"!=t.type||(i="exact"),"object"==typeof e.value&&null!=e.value){if(r=[],Array.isArray(e.value))for(var o=0,s=e.value.length;o<s;o++){var n=parseInt(e.value[o].id);isNaN(n)||r.push(n)}else{n=parseInt(e.value.id);isNaN(n)||r.push(n)}i="exact",r=r.length>0?r:void 0}t.rangeQuery&&"none"!==t.rangeQuery&&(r={min:e.value,max:e.value},i="range");var l={xpath:a,searchType:i=i||"approx"};return"hidden"===t.type&&(l.isHidden=!0),void 0!==r&&(l.value=r),l}},serializeEntityData:function(e){var t=e;function i(e,t){var i={data:{},guid:t.guidEntity,timestamp:e.timestamp},r=e.columns,a=t.row;for(name in t)t.hasOwnProperty(name)&&"row"!==name.toString()&&"id"!==name.toString()&&(i[name]=t[name]);for(var o=0,s=r.length;o<s;o+=1)i.data[r[o]]=a[o];return i}t.entities=[];for(var r,a=-1;r=e.rows[++a];)for(var o,s=-1;o=e.cells[++s];)if(o.id===r.id){var n=i(o,r);t.entities.push(n);break}return t},getOAuth2Applications:function(){return $.ajax({url:this.serviceLocator.getUrl("oauth2-getApplications"),type:"GET",dataType:"json"})},getOAuth2Application:function(e){var t=this.serviceLocator.getUrl("oauth2-getApplication");return $.ajax({url:t.replace("{applicationId}",e),type:"GET",dataType:"json"})},createOAuth2Application:function(e){return $.ajax({url:this.serviceLocator.getUrl("oauth2-createApplication"),type:"POST",dataType:"json",data:e})},deleteOAuth2Application:function(e){var t=this.serviceLocator.getUrl("oauth2-deleteApplication");return $.ajax({url:t.replace("{applicationId}",e),type:"DELETE",dataType:"json"})},updateOAuth2Application:function(e,t){var i=this.serviceLocator.getUrl("oauth2-updateApplication");return $.ajax({url:i.replace("{applicationId}",t),data:e,type:"PUT",dataType:"json"})},updateClientSecretKeysOAuth2Application:function(e,t){var i=this.serviceLocator.getUrl("oauth2-updateClientSecretKeysApplication");return $.ajax({url:i.replace("{applicationId}",t),data:e,type:"PUT",dataType:"json"})},queryDelegations:function(e){var t=this.serviceLocator.getUrl("userDelegation")+"/"+e.idUser+"/delegates";return $.ajax({url:t,data:e,type:"GET",dataType:"json"})},saveDelegation:function(e){var t=this.serviceLocator.getUrl("userDelegation")+"/MultipleProcess";return $.ajax({url:t,data:e,type:"POST",dataType:"json",global:!1})},updateDelegation:function(e){var t=this.serviceLocator.getUrl("userDelegation")+"/"+e.idDelegation;return $.ajax({url:t,data:e,type:"PUT",dataType:"json",global:!1})},deleteDelegation:function(e){var t=this.serviceLocator.getUrl("userDelegation")+"/"+e.idDelegation;return $.ajax({url:t,data:e,type:"DELETE",dataType:"json"})},getUserFilterOptions:function(e){var t=this.serviceLocator.getUrl("userFilterOptions");return $.ajax({url:t,data:e,type:"GET",dataType:"json"})},getValuesFromCQL:function(e){var t=this.serviceLocator.getUrl("catalogQL");return $.ajax({url:t,data:JSON.stringify(e),processData:!1,type:"POST",contentType:"application/json"})},getPreferencesCurrentUser:function(){var e=this.serviceLocator.getUrl("currentUser");return $.ajax({url:e,type:"GET"})},getUsersForDelegation:function(e){var t=this.serviceLocator.getUrl("userFilterOptions")+"/SearchUser";return $.ajax({url:t,data:e,type:"GET",dataType:"json"})},getProcessToDelegate:function(e){var t=this.serviceLocator.getUrl("userFilterOptions")+"/"+e.idUser+"/process";return $.ajax({url:t,data:e,type:"GET",dataType:"json"})}}),$.Class.extend("bizagi.workportal.services.multiactionservice",{BA_CONTEXT_PARAMETER_PREFIX:"h_"},{init:function(e){this.service=e,this.batch={},this.batchTimer=50,this.replicateServiceMethods()},getService:function(){return this.service},replicateServiceMethods:function(){var self=this;self.getAdminEntitiesForm=eval("var tmp = function(){ return this.proxyMethod(this.getService().getAdminEntitiesForm, arguments);};tmp")},proxyMethod:function(e,arguments){var t=this.service;if(!arguments||1!=arguments.length)return e.apply(t,arguments);if("object"!=typeof arguments[0])return e.apply(t,arguments);var i=arguments[0];if(1==i.prepare)return e.apply(t,arguments);i.prepare=!0;var r=e.apply(t,arguments);return this.add(r)},add:function(e){var t=this,i=new $.Deferred;e.h_action;clearTimeout(t.batchTimeout);var r=e.tag=Math.guid(),a={action:e,deferred:i};return t.batch[r]=a,t.batchTimeout=setTimeout(function(){t.fire()},t.batchTimer),i.promise()},fire:function(){var e={},t=[];$.each(this.batch,function(i,r){t.push(r.action),e[i]=r}),this.batch={},$.when(this.execute({actions:t,rejectDeferreds:!1})).done(function(t){$.each(t,function(t,i){var r=i.tag;i.error?e[r].deferred.reject(i.error,i,i.error.message):e[r].deferred.resolve(i.result),delete e[r]}),$.each(e,function(e,t){t.deferred.reject({type:"not-processed",message:"Operation didn't executed"},"","Operation didn't executed")})}).fail(function(t,i,r){var a=void 0!==r?r.message:r||"Operation didn't executed";$.each(e,function(e,t){t.deferred.reject({type:"not-processed",message:a},"","Operation didn't executed")})})},execute:function(e){var t=this,r={},a=void 0===e.rejectDeferreds||e.rejectDeferreds;r[t.Class.BA_CONTEXT_PARAMETER_PREFIX+"action"]="multiaction",$.each(e.actions,function(e,i){i[t.Class.BA_CONTEXT_PARAMETER_PREFIX+"tag"]=i.tag||e,delete i.tag}),(e=e||{}).actions&&(r[t.Class.BA_CONTEXT_PARAMETER_PREFIX+"actions"]=JSON.encode(e.actions));var o=new $.Deferred;return $.ajax({url:t.getService().serviceLocator.getUrl("render-multiaction"),data:r,type:"POST",dataType:"json",serviceType:"MULTIACTION"}).done(function(e){for(i in e)if("function"!=typeof e[i]){var t=e[i];if(t.error&&a)return void o.reject(this,"servererror",t)}o.resolve(e)}).fail(function(e){var t,i=e.responseText||e;try{t=JSON.parse(i)}catch(e){}o.reject(e,"servererror",t)}),o.promise()}}),$.Class.extend("bizagi.workportal.services.routing",{},{init:function(e){var t=this;e=e||{},t.params=e.params||{},t.dataService=e.dataService||{},t.modules={projectDashboard:bizagi.util.isMobileDevice()?"activityform":"projectDashboard",oldRender:"oldrenderintegration",async:"async",activitySelector:"routing"},t.renderVersion=2,t.resetRouteInformation()},resetRouteInformation:function(){this.route={module:"",moduleParams:{}}},setRenderParams:function(e){this.params=this.getRenderParams(e)},getRenderParams:function(e){var t={idCase:parseInt(e.idCase||0),guid:e.guid,idWorkflow:parseInt(e.idWorkflow||0),idWorkitem:1==e.isOfflineForm?0:parseInt(e.idWorkItem||0),idTask:parseInt(e.idTask||0),eventAsTasks:e.eventAsTasks||!1,onlyUserWorkItems:e.onlyUserWorkItems||"true",formsRenderVersion:e.formsRenderVersion||0,referrer:e.referrer||"",isComplex:void 0!==e.isComplex,formsRenderVersion:2,onClose:e.onClose||"",isOfflineForm:e.isOfflineForm||!1,caseLink:e.caseLink};void 0!==t.guid&&0==t.idCase&&delete t.idCase;var i=!0;try{i=BIZAGI_SETTINGS.skipSubprocessGlobalForm||!0}catch(e){}return this.skipSubprocessGlobalForm="true"==i,t},getRoute:function(e){var t=this,i=new $.Deferred;if(t.params=e||t.params,e.data&&e.data.hasStartForm)i.resolve({module:bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_START_FORM,moduleParams:{widgetName:bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_START_FORM,data:e.data}});else{var r=e.fromTask||e.idTask||"",a=e.fromWorkItemId||e.idWorkItem||"";$.when(t.getRenderVersion(t.params)).done(function(e){t.renderVersion=e,t.route.moduleParams=t.getRenderParams(t.params);var o={};o=void 0!==t.params.guid?{guid:t.params.guid,onlyUserWorkItems:t.params.onlyUserWorkItems,isOfflineForm:t.params.isOfflineForm,fromTask:r,fromWorkItemId:a}:{idCase:t.params.idCase,onlyUserWorkItems:t.params.onlyUserWorkItems,isOfflineForm:t.params.isOfflineForm,fromTask:r,fromWorkItemId:a},$.when(t.dataService.getWorkitems(o)).done(function(r){if(t.route.moduleParams.assignationEveryone={currentUserIsCurrentAsignee:r.currentUserIsCurrentAsignee||!1,enabledReadOnlyForAsigneeToEveryone:r.enabledReadOnlyForAsigneeToEveryone||!1,isAssignationMethodEveryone:r.isAssignationMethodEveryone||!1,canWorkOnThisTask:r.canWorkOnThisTask||!1},t.route.moduleParams.hasWorkItems=!!r.workItems.length,t.route.moduleParams.hasGlobalForm=bizagi.util.parseBoolean(r.hasGlobalForm),t.route.moduleParams.idWorkitem>0)t.setRenderModuleName(t.getRenderModuleName(e)),0==t.route.moduleParams.idTask&&(t.route.moduleParams.idTask=t.searchIdTask(t.route.moduleParams.idWorkitem)),t.route.moduleParams.radNumber=r.radNumber||"",t.route.moduleParams.idWorkflow=r.idWorkFlow||"",i.resolve(t.route),t.resetRouteInformation();else{var a=t.checkAsyncWorkItems(r);if(0==r.workItems.length)t.route.moduleParams.idWorkflow=r.idWorkFlow||"",t.route.moduleParams.radNumber=r.radNumber||"",""!==$.trim(r.msgTask)?i.resolve(t.routeToMessageForm(r.msgTask)):bizagi.util.parseBoolean(r.hasGlobalForm)?i.resolve(t.routeToGlobalForm(r)):i.resolve(t.routeToGlobalFormWithoutData());else if(1==r.workItems.length||a.length>0){var o=0;if(a.length>0)for(var s=0;s<r.workItems.length;s++)if("true"==r.workItems[s].isAsynch){o=s;break}t.route.moduleParams.guid,void 0!==r.workItems[o].guid?t.route.moduleParams.guid=r.workItems[o].guid:(t.route.moduleParams.idCase,t.route.moduleParams.idCase=r.workItems[o].idCase),t.route.moduleParams.idTask=r.workItems[o].idTask,t.route.moduleParams.fromTask=r.workItems[o].idTask,t.route.moduleParams.idWorkitem=r.workItems[o].idWorkItem,t.route.moduleParams.idWorkflow=r.workItems[o].idWorkFlow,t.route.moduleParams.displayName=r.workItems[o].displayName?r.workItems[o].displayName:"",t.route.moduleParams.radNumber=r.radNumber||"",a.length>0?t.setRenderModuleName(t.modules.async):t.setRenderModuleName(t.getRenderModuleName(e)),i.resolve(t.route),t.resetRouteInformation()}else r.checkProcess=!!(r.subProcesses.length>0&&t.skipSubprocessGlobalForm),r.checkWorkItems=r.workItems.length>1,r.fromSearchWidget="search"==t.params.referrer,t.setRenderModuleName(t.modules.activitySelector),t.route.moduleParams.data=r,i.resolve(t.route),t.resetRouteInformation()}}).fail(function(e){var r=bizagi.localization.getResource("workportal-menu-search-found-no-cases");i.resolve(t.routeToMessageForm(r))})})}return i.promise()},setRenderModuleName:function(e){this.route.module=e,this.route.moduleParams.widgetName=e},getRenderModuleName:function(e){return 1==e?this.modules.oldRender:this.modules.projectDashboard},searchIdTask:function(e,t){var i=0;e=e||[];for(var r=0;r<e.length;r++)if(parseInt(e[r].idWorkItem)==parseInt(t)){i=parseInt(e[r].idTask);break}return i},checkAsyncWorkItems:function(e){var t=[];return $.each(e.workItems,function(i){"true"==e.workItems[i].isAsynch&&t.push({idCase:e.idCase,idWorkitem:e.workItems[i].idWorkItem,idTask:e.workItems[i].idTask})}),t},routeToGlobalForm:function(e){var t=this;if(t.route.moduleParams.idCaseForGraphicQuery=t.route.moduleParams.idCase,t.route.moduleParams.idCase=$.isNumeric(e.idCaseForGlobalForm)&&e.idCaseForGlobalForm>0?e.idCaseForGlobalForm:t.route.moduleParams.idCase,t.route.moduleParams.idWorkflow=parseInt(e.idWorkFlow||0),1==t.renderVersion){var i=t.dataService.serviceLocator.getUrl("old-render")+"?PostBack=1&idCase=%s&idWorkitem=%s&idTask=%s",r=t.route.moduleParams.idCase||"",a=t.route.moduleParams.idWorkitem||"",o=t.route.moduleParams.idTask||"",s=printf(i,r,a,o);t.route.moduleParams.onlyUserWorkItems=t.route.moduleParams.idCase||"",t.setRenderModuleName(t.modules.oldRender),t.route.moduleParams.url=s}else t.setRenderModuleName(t.modules.projectDashboard);return t.route},routeToGlobalFormWithoutData:function(){return this.setRenderModuleName(this.modules.projectDashboard),this.route.moduleParams.withOutGlobalForm=!0,this.route},routeToMessageForm:function(e){var t=this;return e=e||"",t.setRenderModuleName(t.modules.projectDashboard),t.route.moduleParams.withOutGlobalForm=!0,t.route.moduleParams.messageForm=e,t.route},getRenderVersion:function(e){var t=new $.Deferred,i=e.formsRenderVersion||0;return 0!=i?t.resolve(i):$.when(this.dataService.getCaseFormsRenderVersion({idCase:e.idCase,guid:e.guid})).done(function(e){i=parseInt(e.formsRenderVersion),t.resolve(i)}),t.promise()}}),bizagi.workportal.services.routing.extend("bizagi.workportal.services.routing",{},{init:function(e){this._super(e)},getRoute:function(e){new $.Deferred;if(this.params=e||this.params,void 0!==e.offlineAction&&"next"==e.offlineAction){var t=new $.Deferred;return t.resolve(this.routeToGlobalFormWithoutData()),t.promise()}return this._super(e)}}),bizagi.workportal.services.service.extend("bizagi.workportal.services.service",{},{init:function(e){this._super(e),this.database=void 0!==bizagi.workportal.services.db?new bizagi.workportal.services.db:null,this.enableOfflineEvents()},enableOfflineEvents:function(){var self=this;if("tablet"==bizagi.util.detectDevice()||"tablet_ios"==bizagi.util.detectDevice()||"tablet_android"==bizagi.util.detectDevice()){if(void 0!==navigator.connection)"undefined"==typeof Connection||navigator.connection.type!=Connection.NONE&&"unknown"!=navigator.connection.type?self.online=!0:self.online=!1;else{var queryString=bizagi.readQueryString(),queryoffline=!queryString||!queryString.online||eval(queryString.online);self.online=queryoffline}$(document).off("online.services"),$(document).off("offline.services"),$(document).on("online.services",function(){self.online=!0,bizagi.log("online.services"),self.returnOnlineStatus()}),$(document).on("offline.services",function(){bizagi.log("offline.services"),self.online=!1})}else"undefined"!=typeof Windows&&(self.online=winBizagi.network.isOnline(),document.addEventListener("networkStatusChange",function(e){self.online=e.detail.onLine,self.online&&self.returnOnlineStatus()}));$(document).off("tryPushData.offline").on("tryPushData.offline",function(e){self.online&&self.pushOfflineData()})},returnOnlineStatus:function(){var e=this;$.when(e.logoutUser()).always(function(){$.when(e.authenticatedUser()).always(function(){$.when(e.pushOfflineData()).always(function(){e.fetchOfflineData()})})})},fetchOfflineData:function(){var e=new bizagi.workportal.services.fetchWorker(this),t="";$.when(e.fetch()).done(function(e){bizagi.log("Sync Completed");bizagi.util.getItemLocalStorage("formChangesetadmon-http://localhost/bizagiR100x-domain");"tablet"!=bizagi.util.detectDevice()&&"tablet_ios"!=bizagi.util.detectDevice()&&"tablet_android"!=bizagi.util.detectDevice()&&"undefined"==typeof Windows||(t=bizagi.util.isValidResource("workportal-mobile-offline-sync-successful")?bizagi.localization.getResource("workportal-mobile-offline-sync-successful"):"Successful Synchronization",bizagi.util.showNotification({text:t}))}).fail(function(e){bizagi.log("Sync Failed"),"tablet"!=bizagi.util.detectDevice()&&"tablet_ios"!=bizagi.util.detectDevice()&&"tablet_android"!=bizagi.util.detectDevice()&&"undefined"==typeof Windows||0!==e&&(t=bizagi.util.isValidResource("workportal-mobile-offline-sync-fail")?bizagi.localization.getResource("workportal-mobile-offline-sync-fail"):"Failed Synchronization",bizagi.util.showNotification({text:t}))})},pushOfflineData:function(){bizagi.log("pushOfflineData");var e=new bizagi.workportal.services.pullWorker(this);return $.when(e.pull()).then(function(e){bizagi.log("Offline cases syncronized, all data sended")},function(e){bizagi.log("Error syncronizing cases")})},getCurrentUser:function(e){if(this.online)return this._super(e);var t=new $.Deferred,i={idUser:1,user:"undefined"!=typeof BIZAGI_USER?BIZAGI_USER:"admon",userName:"undefined"!=typeof BIZAGI_USER?BIZAGI_USER:"admon",domain:"undefined"!=typeof BIZAGI_DOMAIN?BIZAGI_DOMAIN:"domain",delegateUserName:"",idDelegateUser:-1,groupSeparator:",",language:"en-US",decimalSeparator:".",decimalDigits:"2",symbol:"$",ShortDateFormat:"M/d/yyyy",TimeFormat:"h:mm tt",LongDateFormat:"dddd, MMMM d, yyyy",twoDigitYearMax:2029,twoDigitYearMaxDelta:16,isMultiOrganization:"false"};return t.resolve(i),t.promise()},getAllProcesses:function(e){return"inbox"==e.inputtray?this._super(e):$.when(this.database.getAllProcesses(e)).pipe(function(t){if(t=JSON.parse(t),e.skipAggrupate)return t;var i={},r={},a=bizagi.localization.getResource("workportal-widget-inbox-all-processes"),o={name:bizagi.localization.getResource("workportal-widget-inbox-all-cases"),path:"",category:a,isFavorite:e.onlyFavorites||!1,guidFavorite:"",idworkflow:"",guidWFClass:"",count:0};for(key in r[a]=[],r[a].workflows=[],r[a].workflows.push(o),t.workflows&&$.each(t.workflows.workflow,function(e,t){r[t.category]||(r[t.category]=[],r[t.category].workflows=[]),r[t.category].workflows.push(t),o.count+=Number(t.count)}),i.categories=[],r)i.categories.push({name:key,workflows:r[key].workflows});return i})},getCasesByWorkflow:function(e){if("inbox"==e.inputtray)return this._super(e);var t=new $.Deferred;return $.when(this.database.getCustomizedColumnsData(e)).pipe(function(e){e=JSON.parse(e),$.each(e.cases.rows,function(t,i){var r=[];e.cases.rows[t].radnumber=i.id,$.each(i.fields,function(i,a){if(null!=a)try{null!=a.isRadNumber&&"true"==a.isRadNumber?e.cases.rows[t].radnumber=a.Value:null!=a.workitems?e.cases.rows[t].workitems=a.workitems:r.push(a)}catch(e){}}),e.cases.rows[t].fields=r}),t.resolve(e.cases)}),t.promise()},getMenuAuthorization:function(){if(this.online)return this._super();var e=new $.Deferred;return e.resolve(JSON.parse('{"permissions":[{"Cases":["NewCase","Pending","Closed","Search"]},{"AnalysisReports":["BAMProcess","BAMTask","AnalyticsProcess","AnalyticsTask","AnalyticsSensor","AnalysisQueries","BAMResourceMonitor"]},{"Admin":["UserAdmin","Licenses","EntityAdmin","CaseAdmin","AlarmAdmin","EncryptionAdmin","MobileUpdatesAdmin","AsynchronousWorkitemRetries","UserPendingRequests","AuthenticationLogQuery","BusinessPolicies","Profiles","UserDefaultAssignation","GRDimensionAdmin","ThemeBuilder"]},{"CurrentUserAdministration":["CurrentUser"]},{"LogOut":[]},{"Search":[]},{"SmartFolders":[]},{"CustomFolders":[]},{"BizagiQueries":[]},{"AnalysisQueries":[]},{"StateLog":[]},{"PrintableVersion":[]}]}')),e.promise()},getInboxSummary:function(e){var t=this.online;if(!e||"false"!=e.inputtray&&"true"!=e.inputtray||(t=!1),t)return this._super(e);var i=new $.Deferred;return $.when('{"inboxSummary":{"Red":7,"Yellow":0,"Green":0,"Black":0,"All":7}}').pipe(function(e){var t=JSON.parse(e);i.resolve(t.inboxSummary)}),i.promise()},getCategories:function(e){if(this.online)return this._super(e);var t={};return(e=e||{}).idCategory&&(t.idCategory=e.idCategory),e.idApp&&(t.idApp=e.idApp),t.groupByApp=e.groupByApp||!1,this.database.getCategories(t)},createNewCase:function(e){return(e=e||{}).isOfflineForm?this.database.createNewCase(e):this._super(e)},getWorkitems:function(e){return(e=e||{}).isOfflineForm?this.database.getWorkitems(e):this._super(e)},getCaseSummary:function(e){return(e=e||{}).isOfflineForm?this.database.getSummary(e):this._super(e)},deleteCase:function(e){return e=e||{},this.database.deleteCase(e)},getCaseSubprocesses:function(e){if((e=e||{}).isOfflineForm){var t=new $.Deferred;return t.resolve({subProcesses:[]}),t.promise()}return this._super(e)},getOverrides:function(){return{}},getFavourites:function(){return this._super()},getFavouriteCases:function(e){return this._super(e)}}),$.Class("bizagi.workportal.services.db",{},{init:function(){var self=this,queryString=bizagi.readQueryString();self.disabledb=!(!queryString||!queryString.disabledb)&&eval(queryString.disabledb),self.disabledb||(self.dbProcessHierarchy=new PouchDB("DataProcessesHierarchy"),self.dbForms=new PouchDB("DataRenderForms"),self.dbCases=new PouchDB("DataRenderCases")),self.globalId="undefined"!=typeof BIZAGI_USER?BIZAGI_USER.toLowerCase()+"-"+BIZAGI_PROXY_PREFIX.toLowerCase()+"-"+BIZAGI_DOMAIN.toLowerCase():"admon-http://localhost/bizagiR100x-domain"},_destroy:function(e){void 0===e&&(e=function(){}),PouchDB.destroy("DataRenderForms",e),PouchDB.destroy("DataRenderCases",e),PouchDB.destroy("DataProcessesHierarchy",e)},getHierarchyObjects:function(e,t,i){var r=[];for(var a in e)e.hasOwnProperty(a)&&("object"==typeof e[a]?r=r.concat(this.getHierarchyObjects(e[a],t,i)):a==t&&e[a]===i||a===t&&""===i?r.push(e):e[a]==i&&""===t&&-1==r.lastIndexOf(e)&&r.push(e));return r},getAllOpenCases:function(){var e=new $.Deferred;return this.dbCases.query({map:function(e){!1===e.closed&&"admon"===e.createdBy.userName&&emit(e,null)}},{reduce:!1},function(t,i){t||e.resolve(i)}),e.promise()}}),bizagi.workportal.services.db.extend("bizagi.workportal.services.db",{},{createNewCase:function(e){var t=e.idWfClass,i=(new Date).toISOString(),r=new $.Deferred,a={_id:i,idWfClass:t.toString(),idWorkFlow:t.toString(),idCase:i,isFavorite:!1,globalId:this.globalId,createdBy:{Name:"undefined"!=typeof BIZAGI_USER?BIZAGI_USER:"admon",userName:"undefined"!=typeof BIZAGI_USER?BIZAGI_USER:"admon"},creationDate:new Date,process:e.process||"Offline",radNumber:i,isOfflineForm:!0,formsRenderVersion:2,syncronized:!1,isOpen:!0,workItems:[{idWorkItem:PouchDB.uuids(),idTask:PouchDB.uuids(),idCase:i,colorState:"Green"}]};return this.dbCases.put(a,function(e,t){e?r.reject(e):r.resolve(a)}),r.promise()},deleteCase:function(e){var t=this,i=new $.Deferred;return t.dbCases.get(e.idCase,function(e,r){e?(bizagi.log("Error, the case do not exist"),i.reject(e)):t.dbCases.remove(r,function(t,r){t?(bizagi.log("Error erasing case"),i.reject(e)):i.resolve(r)})}),i.promise()},getWorkitems:function(e){var t=new $.Deferred;return this.dbCases.get(e.idCase,function(e,i){e?t.reject(e):t.resolve(i)}),t.promise()},getCategories:function(e){var t=this,i=new $.Deferred;if(t.categories)if(e.idApp||e.idCategory){var r=o(t.categories,e);i.resolve({category:r,totalApps:e.idApp?r.length:0})}else{for(var a=t.categories;1==a.length&&(a[0].categories||a[0].subCategories);)a=o(a,a[0].appId?{idApp:a[0].appId}:{idCategory:a[0].idCategory});i.resolve({category:a,totalApps:a[0]&&a[0].appId?a.length:0})}else t.dbProcessHierarchy.get(t.globalId,function(r,a){if(r)i.reject("could not extract this document");else if(t.categories=a.doc,e.idApp||e.idCategory){var s=o(t.categories,e);i.resolve({category:s,totalApps:e.idApp?s.length:0})}else{for(var n=t.categories;1==n.length&&(n[0].categories||n[0].subCategories);)n=o(n,n[0].appId?{idApp:n[0].appId}:{idCategory:n[0].idCategory});i.resolve({category:n,totalApps:n[0]&&n[0].appId?n.length:0})}});return i.promise();function o(e,t){for(var i=0,r=e.length;i<r;i++){if(e[i].appId&&e[i].appId==t.idApp)return e[i].categories;if(e[i].idCategory&&e[i].idCategory==t.idCategory)return e[i].subCategories;var a;if(e[i].categories&&(a=o(e[i].categories,t)))return a;if(e[i].subCategories&&(a=o(e[i].subCategories,t)))return a}}},getAllOpenCases:function(){var e=new $.Deferred;return this.dbCases.query({map:function(e){!1===e.closed&&"admon"===e.createdBy.userName&&emit(e,null)}},{reduce:!1},function(t,i){t||e.resolve(i)}),e.promise()},getCase:function(e){var t=new $.Deferred;return this.dbCases.get(e,function(e,i){e?t.reject(e):t.resolve(i)}),t.promise()},getCustomizedColumnsData:function(e){var t=new $.Deferred,i={cases:{rows:[]}},r="true"===e.inputtray,a={map:function(e){emit(e.globalId,e)}};return this.dbCases.query(a,{reduce:!1,key:this.globalId},function(a,o){if(a)bizagi.log("Error loading cases from local data base"),t.reject("Error loading cases from local data base");else{for(var s=0,n=o.total_rows;s<n;s++)if(r===o.rows[s].value.isOpen&&(void 0===e.idWorkflow||""===e.idWorkflow.toString()||e.idWorkflow.toString()===o.rows[s].value.idWorkFlow)){var l={id:o.rows[s].id,isFavorite:o.rows[s].value.isFavorite,isOpen:o.rows[s].value.isOpen,taskState:"",isOfflineForm:!0,fields:[{Value:o.rows[s].value.process,DisplayName:o.rows[s].value.process,DataType:"VarChar",isRadNumber:!1},{Value:o.rows[s].value.creationDate,DisplayName:"Process creation date",DataType:"DateTime",isRadNumber:!1}]};i.cases.rows.push(l)}t.resolve(JSON.stringify(i))}}),t.promise()},getAllProcesses:function(e){var t=this,i=new $.Deferred;void 0===e.inputtray&&(e.inputtray=!0);var r={workflows:{taskstate:"",workflow:[]}},a={map:function(e){e.idWfClass&&e.globalId&&emit({idWf:e.idWfClass,gId:e.globalId,isOpen:e.isOpen.toString()},1)},reduce:"_count"};return t.dbProcessHierarchy.get(t.globalId,function(o,s){o?i.reject("error"):t.dbCases.query(a,{reduce:!0},function(a,o){if(a)i.reject("error");else{for(var n=0,l=o.total_rows;n<l;n++)if(o.rows[n].key.gId==t.globalId&&o.rows[n].key.isOpen==e.inputtray.toString()){var c=t.getHierarchyObjects(s,"idCategory",o.rows[n].key.idWf);r.isOpen=e.inputtray,r.workflows.workflow.push({category:"Offline Procesess",name:c[0]?c[0].categoryName:"",idworkflow:o.rows[n].key.idWf,count:o.rows[n].value,isFavorite:!1})}i.resolve(JSON.stringify(r))}})}),i.promise()},getOutboxCases:function(){var e=new $.Deferred,t={map:function(e){e.isOpen||emit(e.globalId,e)}};return this.dbCases.query(t,{reduce:!1,key:this.globalId},function(t,i){t?(bizagi.log("Error loading data before syncronization"),e.reject(t)):e.resolve(i)}),e.promise()}}),bizagi.workportal.services.db.extend("bizagi.workportal.services.db",{},{getFormData:function(e){var t=new $.Deferred;return this.dbForms.get(e+"-"+e+"-"+this.globalId,function(e,i){if(e)t.reject(e);else if(void 0!==i.form)t.resolve({form:i.form,type:"form"});else{var r='{ "message": "'+bizagi.localization.getResource("workportal-offline-error-nonexisting-form-message")+'", "errorType": "'+bizagi.localization.getResource("workportal-offline-error-nonexisting-form")+'" }';t.reject(r)}}),t.promise()},mergeForm:function(e,t){var i=this,r=new $.Deferred;return $.when(t).done(function(t){if(e.data){for(prop in e.isOpen||(t.form.buttons=[]),e.data)a(t.form.elements,{key:prop,value:e.data[prop]});function a(t,r){if(t.length&&t.length>0)for(var o=0,s=t.length;o<s;o++)a(t[o],r);else t.container?a(t.container.elements,r):(e.isOpen||(t.render.properties.editable=!1),t.render.properties.xpath==r.key&&("grid"===t.render.properties.type&&i.setRenderGridValues(t.render),i.setRenderValues(t.render.properties,r.value)))}r.resolve(t)}else r.resolve(t)}).fail(function(e){e.responseText||(e.responseText='{ "message": "'+bizagi.localization.getResource("workportal-offline-error-nonexisting-form-message")+'", "errorType": "'+bizagi.localization.getResource("workportal-offline-error-nonexisting-form")+'" }'),r.reject(e)}),r.promise()},setRenderGridValues:function(e){e.properties.data.columns=[];for(var t=0,i=e.elements.length;t<i;t++)e.properties.data.columns.push(e.elements[t].render.properties.xpath)},setDataType:function(e,t){},setRenderValues:function(e,t){var i=e.type;i||(i="label");if(-1===["text","label","number","money","date","boolean","geolocation","hidden","upload"].indexOf(i))if(-1===["combo","cascadingCombo","radio","list"].indexOf(i))if("search"!==i){if("image"!==i){if("grid"===i){e.data.records=t.value.length,e.data.total=1,e.data.page=1;for(var r=e.data.columns.length,a=[],o=0,s=t.value.length;o<s;o++){var n=[],l=bizagi.util.randomNumber();n[n.length]=l;for(var c=[],d=0;d<r;d++){var u=void 0!==t.value[o][d]?e.data.columns.indexOf(t.value[o][d].xpath):-1;-1!=u&&(c[u]=t.value[o][d]),c[d]=void 0===c[d]?{}:c[d],n[n.length]="true"}e.data.rows.push($.merge([l],c)),a[a.length]=n}return e.data.editable=a,void(e.data.visible=a)}try{e.value=t.value}catch(e){}return bizagi.log(i+" not supported in render factory",t,"error"),null}e.value=t}else for(var p=0,m=e.data.length;p<m;p++)e.data[p].id==t.value.id&&(e.value=t.value);else for(var g=0,f=e.data.length;g<f;g++)e.data[g].id==t.value&&(e.value=[{id:t.value,value:e.data[g].value}]);else e.value=t.value},getSummary:function(e){var t=new $.Deferred;return this.dbCases.get(e.idCase,function(e,i){e?t.reject(e):t.resolve($.extend(i,{processPath:"/",currentState:i.workItems,countAssigness:0,countEvents:0,isOpen:i.isOpen.toString(),countSubProcesses:0}))}),t.promise()},saveFormInfo:function(e,t){var i=this,r=new $.Deferred;return i.dbCases.get(bizagi.context.idCase,function(e,a){e?r.reject(e):i.mergeDataDocument(t,a,i.getFormData(a.idWfClass.toString())).done(function(e){for(var o in"next"==t.h_action&&(a.isOpen=!1),a.data=a.data||{},e){var s=!1;for(var n in a.data)o==n&&(bizagi.util.isEmpty(e[o])||bizagi.util.isEmpty(e[o].value)?(delete a.data[n],s=!0):(a.data[n]=e[o],s=!0));s||(a.data[o]=e[o])}i.dbCases.put(a,function(e,t){e?r.reject(e):r.resolve(t)})})}),r.promise()},mergeDataDocument:function(e,t,i){var r=new $.Deferred,a={};return $.when(i).done(function(t){for(prop in e)"h_action"!=prop&&(a[prop]={},a[prop].value=e[prop],i(t.form.elements,{key:prop,value:e[prop]}));function i(e,t){if(e.length&&e.length>0)for(var r=0,o=e.length;r<o;r++)i(e[r],t);else if(e.container)i(e.container.elements,t);else if(e.render.properties.xpath==t.key&&(a[t.key].DataType=e.render.properties.dataType||"",a[t.key].type=e.render.properties.type||"",!bizagi.util.isEmpty(a[t.key])))for(var s=0,n=a[t.key].value.length;s<n;s++)if(!bizagi.util.isEmpty(a[t.key].value[s])){for(var l=[],c=0,d=a[t.key].value[s].length;c<d;c++)bizagi.util.isEmpty(a[t.key].value[s][c])||l.push(a[t.key].value[s][c]);a[t.key].value[s]=l}}r.resolve(a)}),r.promise()}}),$.Class.extend("bizagi.workportal.services.pullWorker",{},{init:function(params){var self=this;self.services=params,self.database=params.database;var queryString=bizagi.readQueryString();querydisable=!(!queryString||!queryString.disabledb)&&eval(queryString.disabledb),self.disabledb=querydisable,self.disabledb||(self.dbForms=new PouchDB("DataRenderForms"),self.dbCases=new PouchDB("DataRenderCases"),self.dbProcessHierarchy=new PouchDB("DataProcessesHierarchy")),self.globalId="undefined"!=typeof BIZAGI_USER?BIZAGI_USER.toLowerCase()+"-"+BIZAGI_PROXY_PREFIX.toLowerCase()+"-"+BIZAGI_DOMAIN.toLowerCase():"admon-http://localhost/bizagiR100x-domain"},pull:function(){return!this.disabledb&&$.when(this.syncOfflineCases()).done(function(){return!0})},syncOfflineCases:function(e){var t=this;if(void 0!==t.database&&(t.synchronizing=t.synchronizing||!1,!t.synchronizing))return t.synchronizing=!0,t.database.getOutboxCases().done(function(e){for(var i=[],r=0;r<e.total_rows;r++){var a=e.rows[r].value,o=[];for(var s in a.data)"h_action"!=s&&o.push({domain:"undefined"!=typeof BIZAGI_DOMAIN?BIZAGI_DOMAIN:"domain",user:"undefined"!=typeof BIZAGI_USER?BIZAGI_USER:"admon",xpath:s,value:t.processDataValues(a.data[s].value),DataType:a.data[s].DataType,type:a.data[s].type});a=$.extend(a,{objToSend:o}),bizagi.log(a),i.push(t.services.syncOfflineCases(a).pipe(function(e){for(var i=decodeURIComponent(this.data).split("&"),r=i.length-1;r>=0;r--){var a=i[r].split("=");if("idCase"==a[0])return t.database.deleteCase({idCase:a[1]})}},function(e){bizagi.log(e)}))}return $.when.apply($,i).pipe(function(){return t.synchronizing=!1,!0})})},processDataValues:function(e){return"object"==$.type(e)&&e.hasOwnProperty("id")&&(e=e.id),e}}),$.Class.extend("bizagi.workportal.services.fetchWorker",{},{init:function(params){var self=this;self.services=params;var queryString=bizagi.readQueryString();querydisable=!(!queryString||!queryString.disabledb)&&eval(queryString.disabledb),self.disabledb=querydisable,self.disabledb||(self.dbForms=new PouchDB("DataRenderForms"),self.dbCases=new PouchDB("DataRenderCases"),self.dbProcessHierarchy=new PouchDB("DataProcessesHierarchy")),self.globalId="undefined"!=typeof BIZAGI_USER?BIZAGI_USER.toLowerCase()+"-"+BIZAGI_PROXY_PREFIX.toLowerCase()+"-"+BIZAGI_DOMAIN.toLowerCase():"admon-http://localhost/bizagiR100x-domain"},fetch:function(e){var t=this,i=new $.Deferred;return t.disabledb?(i.reject("Disable Sync"),i.promise()):($.when(t.services.processesHierarchy()).done(function(e){$.when(t.saveProcessesHierarchy(e),t.processesHierarchyTofetchForms()).done(function(e,t){i.resolve("All data fecth")}).fail(function(e,t){"nothing"===e?i.reject(0):i.reject("error fectching data")})}),i.promise())},processesHierarchyTofetchForms:function(){var e=new $.Deferred,t=bizagi.util.getItemLocalStorage("formChangeset"+this.globalId);return null==t&&(t=0),this.callSyncForms({changeSet:t}).done(function(t){console.log(t,"sync forms"),e.resolve(t)}).fail(function(t){"nothing"===t?console.log("nothing to sync"):console.log(t,"error sync forms"),e.reject(t)}),e.promise()},callSyncForms:function(e){var t=this,i=new $.Deferred,r=e.changeSet;return t.services.processesHierarchyTofetchForms(e).done(function(e){if(e.changeSet>r){var a=null;1===e.changeSetType&&(a=t.saveProcessesHierarchyTofetchForms(e.result)),4===e.changeSetType&&(a=t.saveProcessInHierarchy(e.result)),$.when(a).done(function(){t.callSyncForms({changeSet:e.changeSet}).done(function(e){i.resolve(e)}).fail(function(e){i.reject(e)})}).fail(function(e){i.reject(e)})}else bizagi.util.setItemLocalStorage("formChangeset"+t.globalId,e.changeSet),r=parseInt(r),0===e.changeSet&&0===r?i.reject("nothing"):i.resolve("succesfully")}).fail(function(e){i.reject(e)}),i.promise()},saveProcessInHierarchy:function(e){var t=new $.Deferred;return t.resolve(""),t.promise()},getHierarchyObjects:function(e,t,i){var r=[];for(var a in e)e.hasOwnProperty(a)&&("object"==typeof e[a]?r=r.concat(this.getHierarchyObjects(e[a],t,i)):a==t&&e[a]==i||a==t&&""==i?r.push(e):e[a]==i&&""==t&&-1==r.lastIndexOf(e)&&r.push(e));return r},saveProcessesHierarchyTofetchForms:function(e){var t=this,i=new $.Deferred,r={_id:e.wfClass.toString()+"-"+e.wfClass.toString()+"-"+t.globalId,globalid:t.globalId,idWfClass:e.wfClass,idWorkFlow:e.workFlow,form:e.data.form};return t.dbForms.get(r._id,function(e,a){e?t.dbForms.put(r,function(e,t){e?i.reject("Could'not agregate the document"):i.resolve(t)}):t.dbForms.put({_rev:a._rev,_id:a._id,form:r.form},function(e,t){e?i.reject("Could'not updated the document"):i.resolve(t)})}),i.promise()},saveProcessesHierarchy:function(e){var t=this,i=new $.Deferred,r={_id:t.globalId,doc:e};return t.dbProcessHierarchy.get(r._id,function(a,o){a?t.dbProcessHierarchy.put(r,function(e,t){e?i.reject("Could'not agregate the document"):i.resolve(t)}):t.dbProcessHierarchy.put({_id:o._id,_rev:o._rev,doc:e},function(e,t){e?i.reject("Could'not updated the document"):i.resolve(t)})}),i.promise()}}),$.Class("bizagi.workportal.command.security",{},{init:function(e){this.dataService=e,this.rawData={}},getSecurity:function(){var e=this,t=new $.Deferred;return e.security={},e.jsonSecurityList={},bizagi.menuSecurity?t.resolve(bizagi.menuSecurity):$.when(e.dataService.getMenuAuthorization()).done(function(i){bizagi.currentUser.associatedStakeholders&&bizagi.currentUser.associatedStakeholders.length>0&&i.permissions.push({associatedStakeholders:[]}),e.rawData=i,bizagi.menuSecurity=e.convertSecurityData(i),e.jsonSecurityList=i,$.each(e.security,function(e,t){authMenu[e]=t}),$(document).trigger("securityLoaded",{}),t.resolve(bizagi.menuSecurity)}),t.promise()},convertSecurityData:function(e){var t={},i=function(e){$.each(e,function(e,r){"object"==typeof r?("number"!=typeof e&&(t[e]=!0),i(r)):t[r]=!0})};return i(e.permissions),t},checkSecurityPerm:function(e){e=e||"";var t=$.Deferred();return bizagi.menuSecurity?t.resolve(!!bizagi.menuSecurity[e]):$(document).bind("securityLoaded",function(){t.resolve(!!bizagi.menuSecurity[e])}),t.promise()},getRawData:function(){return this.rawData}}),$.Class.extend("bizagi.workportal.controllers.controller",{},{init:function(e,t){this.workportalFacade=e,this.dataService=t,this.resources=bizagi.localization,this.componentContainers={},this.subscribers=[],this.disposed=!1,this.tmpl={},this.templatesDeferred=null},getWorkportal:function(){return this.workportalFacade.workportal},publish:function(e,t){return this.disposed?null:$(document).triggerHandler(e,t)},subscribe:function(e,t){if(this.disposed)return null;$(document).bind(e,t),this.subscribers.push({event:e})},subscribeOneTime:function(e,t){if(this.disposed)return null;$(document).one(e,t),this.subscribers.push({event:e})},unsubscribe:function(e,t){if(this.disposed)return null;t?$(document).unbind(e,t):$(document).unbind(e)},render:function(){var e=this,t=new $.Deferred;return e.renderingDeferred=new $.Deferred,$.when(e.areTemplatedLoaded()).pipe(function(){return e.renderContent()}).done(function(){e.postRender(),t.resolve(e.getContent()),e.renderingDeferred.resolve()}),t.promise()},getContent:function(){return this.content},getResource:function(e){return this.resources.getResource(e)},renderContent:function(){return""},postRender:function(){},getComponentSelector:function(e){return"[data-bizagi-component="+e+"]"},getComponentContainer:function(e){var t=this.getContent();return t&&0!=t.length?$(this.getComponentSelector(e),t):null},resizeLayout:function(){this.publish("resizeLayout")},performResizeLayout:function(){},dispose:function(){var e=this;null!=e.subscribers&&$.each(e.subscribers,function(t,i){e.unsubscribe(i.event)}),setTimeout(function(){bizagi.util.dispose(e),e.disposed=!0},bizagi.override.disposeTime||50)},loadTemplates:function(e){var t=this.templatesDeferred=new $.Deferred,i=[],r=null==e.useNewEngine||e.useNewEngine;for(var a in e)"useNewEngine"!=a&&i.push(this.loadTemplate({name:a,path:e[a],useNewEngine:r}));return $.when.apply($,i).done(function(){t.resolve()}),t.promise()},loadTemplate:function(e){var t=this;return t.tmpl[e.name]?t.tmpl[e.name]:e.useNewEngine?bizagi.templateService.getTemplateWidget(e.path).done(function(i){t.tmpl[e.name]=i}):bizagi.templateService.getTemplate(e.path).done(function(i){t.tmpl[e.name]=i})},getTemplate:function(e){return this.tmpl.hasOwnProperty(e)?this.tmpl[e]:null},isRendered:function(){return!!this.renderingDeferred&&this.renderingDeferred.promise()},areTemplatedLoaded:function(){return this.templatesDeferred}}),bizagi.workportal.controllers.controller.extend("bizagi.workportal.controllers.controller",{},{getComponentContainer:function(e){var t=this,i=t.getContent();if(!i||0==i.length)return null;var r=t.componentContainers[e];return null==r&&(0==(r=$(t.getComponentSelector(e),i)).length&&i.is(t.getComponentSelector(e))&&(r=i),t.componentContainers[e]=r),t.componentContainers[e]},getTemplate:function(e){return this.workportalFacade.getTemplate(e)}}),bizagi.workportal.controllers.controller.extend("bizagi.workportal.controllers.main",{},{init:function(e,t){var i=this;i.componentRegex=/{{component (\w+)}}/g,this._super(e,t),this.subscribe("changeWidget",function(e,t){bizagi.currentWidget=t.widgetName;var r=new $.Deferred;return i.subscribeOneTime("onWidgetIncludedInDOM",function(e,t){r.resolve()}),$.when(bizagi.util.liveSave(t.widgetName),bizagi.util.autoSave()).done(function(){$(document).data("auto-save",""),bizagi.util.liveProcessesEvents.saveEvent.saveLivePromise=null,t.widgetName!=bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX_GRID&&t.widgetName!=bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX||bizagi.cookie("bizagiDefaultWidget",t.widgetName,{expires:30}),bizagi.util.setContext({widget:t.widgetName}),i.setWidget(t)}),r.promise()}),this.subscribe("addDialogToDialogStack",function(e,t){i.addDialogToDialogStack(t)}),this.subscribe("showDialogWidget",function(e,t){i.showDialogWidget(t)}),this.subscribe("closeCurrentDialog",function(e,t){return i.closeCurrentDialog(t)}),this.subscribe("closeAllDialogs",function(e,t){i.closeAllDialogs()}),this.subscribe("popupWidget",function(e,t){i.popupWidget(t)}),this.subscribe("popWidget",function(e,t){i.popWidget(t)}),this.subscribe("pushWidget",function(e,t){i.pushWidget(t)}),this.subscribe("executeAction",function(e,t){i.executeAction(t)}),this.subscribe("resizeLayout",function(){i.performResizeLayout()}),this.subscribe("disposeWidget",function(){i.disposeWidget()}),this.subscribe("appendWidgetTo",function(e,t){return i.appendWidgetTo(t)}),this.subscribe("notification",function(e,t){NotificationDispatcher.dispatch(t.notification,t.type)}),this.subscribe("refreshQueryFormShortCut",function(e,t){return i.refreshQueryFormShortCut(t)})},renderContent:function(){var e=this,t=e.workportalFacade.getTemplate("workportal"),i=e.content=$.tmpl(t,{});e.workarea=e.workportalFacade.getWorkareaController();var r=e.menu=e.workportalFacade.getMenuController();return $.when(r.render()).done(function(){r.getContent().appendTo(e.getComponentContainer("menu"))}),$(window).resize(function(){e.resizeLayout()}),i},setWidget:function(e){this.currentWidget=e.widgetName,this.currentWidgetParams=$.extend({},e,{menu:this.getMenu()}),bizagi.assert(!bizagi.util.isEmpty(e.widgetName),"No widget name defined for changeWidget call"),this.renderWorkarea()},executeAction:function(e){var t=this;e.action==bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_ROUTING?bizagi.loader.start("activity").then(function(){t.workportalFacade.getAction(e.action).execute(e)}):e.action==bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_SEARCH&&bizagi.loader.start("inbox").then(function(){t.workportalFacade.getAction(e.action).execute(e)})},renderWorkarea:function(){var e=this,t=e.workarea;if(t){var i=e.getComponentContainer("workarea");e.cleanWidgets(),i.empty(),bizagi.util.isEmpty(e.currentWidget)||"none"==e.currentWidget||(e.currentWidgetParams=$.extend({},e.currentWidgetParams,{menu:e.getMenu()}),e.currentWidget===bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX_GRID||e.currentWidget===bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX?bizagi.loader.start("inbox").then(function(){e.loadWidgetFromFacade(t,i)}):e.loadWidgetFromFacade(t,i))}},loadWidgetFromFacade:function(e,t){var i=this;$.when(i.workportalFacade.getWidget(i.currentWidget,i.currentWidgetParams)).pipe(function(t){return e.setWidget(t),e.render()}).done(function(){var r=e.getContent();r&&(r.appendTo(t),i.resizeLayout(),i.publish("onWidgetIncludedInDOM"))})},showDialogWidget:function(e){},closeCurrentDialog:function(e){},popupWidget:function(e){},addDialogToDialogStack:function(e){},closeAllDialogs:function(){},pushWidget:function(e){this.currentWidget=e.widgetName,this.currentWidgetParams=$.extend({},e,{menu:this.getMenu()}),bizagi.assert(!bizagi.util.isEmpty(e.widgetName),"No widget name defined for pushWidget call")},popWidget:function(e){this.currentWidget=e.widgetName,this.currentWidgetParams=$.extend({},e,{menu:this.getMenu()}),bizagi.assert(!bizagi.util.isEmpty(e.widgetName),"No widget name defined for popupWidget call")},disposeWidget:function(e){this.currentWidget=e.widgetName,this.currentWidgetParams=$.extend({},e,{menu:this.getMenu()}),bizagi.assert(!bizagi.util.isEmpty(e.widgetName),"No widget name defined for disposeWidget call")},appendWidgetTo:function(e){},performResizeLayout:function(){var e=this,t=e.getContent();e.resizeContainer(t,$(window).height()),e.menu&&e.menu.performResizeLayout(),e.workarea&&e.workarea.performResizeLayout()},resizeContainer:function(e,t){var i=this,r=e.children(".ui-bizagi-component-adjustable"),a=t;if(r.length>0){var o=0;$.each(e.children(),function(e,t){$(t).hasClass("ui-bizagi-component-adjustable")||"none"===$(t).css("display")||(o+=$(t).height())}),a=t-o;var s="";$.each(r,function(e,t){"visible"==(s=""!=$(t).css("overflow-y")?$(t).css("overflow-y"):"hidden")&&(s="hidden"),$(t).addClass("ui-bizagi-adjustable");var i="auto"===$(t).css("margin-top")?0:Number($(t).css("margin-top").replace("px","")),r=a-i;$(t).css({height:r,"overflow-y":s})})}$.each(e.children(),function(e,t){$(t).find(".ui-bizagi-component-adjustable").length>0&&($(t).addClass("ui-bizagi-component-adjustable"),i.resizeContainer($(t),a))})},getMenu:function(){return this.menu},refreshQueryFormShortCut:function(e){}}),bizagi.workportal.controllers.controller.extend("bizagi.workportal.controllers.menu",{},{init:function(e,t){var i=this;i._super(e,t),this.subscribe("showMainMenu",function(e,t){var r=new $.Deferred;return $(i.getContent()).closest("#ui-bizagi-wp-menu").show(),r.promise()})},renderContent:function(){var e=this,t=e.workportalFacade.getTemplate("menu"),i=new $.Deferred;return $.when(e.dataService.getCurrentUser()).done(function(r){var a=(new bizagi.services.preferences).getValues();bizagi.currentUser=r,$.datepicker.setDefaults(bizagi.localization.getResource("datePickerRegional"));var o=bizagi.localization.getResource("numericFormat");o&&(o.decimalSymbol=a.decimalSeparator||r.decimalSeparator||o.decimalSymbol,o.symbol=a.symbol||r.symbol||o.symbol,o.digitGroupSymbol=a.thousandSeparator||r.groupSeparator||o.digitGroupSymbol,bizagi.localization.setResource("numericFormat",o),BIZAGI_DEFAULT_CURRENCY_INFO&&(BIZAGI_DEFAULT_CURRENCY_INFO.decimalDigits=r.decimalDigits,BIZAGI_DEFAULT_CURRENCY_INFO.decimalSeparator=o.decimalSymbol,BIZAGI_DEFAULT_CURRENCY_INFO.symbol=o.symbol,BIZAGI_DEFAULT_CURRENCY_INFO.groupSeparator=o.digitGroupSymbol)),r.uploadMaxFileSize&&(BIZAGI_SETTINGS.UploadMaxFileSize=r.uploadMaxFileSize,bizagi.util.changeData({uploadMaxFileSize:BIZAGI_SETTINGS.UploadMaxFileSize})),e.overrideUserPreferences(),e.security=new bizagi.workportal.command.security(e.dataService),$.when(e.security.getSecurity()).done(function(a){!1===bizagi.override.enableFeatureDisplayOptions&&(a.DisplayOptions=!1);var o=e.content=$.tmpl(t,$.extend(r,{environment:bizagi.loader.environment||"",build:bizagi.loader.build,base64image:bizagi.themeLogo||"img/img/barra/logo-bizagi.svg",photo:"data:image/png;base64,"+(bizagi.currentUser.userPicture?bizagi.currentUser.userPicture:"iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRF////////VXz1bAAAAAJ0Uk5T/wDltzBKAAAA+0lEQVR42uzaSxLCMAwE0c79L82SFMXHJpKHhJ59at4utmS2cBAgQMCBT3dZDuBJ1gF4mSUA3qYfALUCauvnCZT3Twqo758T0NA/JaCjf0ZwIgC0COjpHxecBgBNAgF09Y8KBAgQIECAAAFnAXgiEiDAq5mA8wEuOCERIMBBpYAfAMTH9QLygPjOSEB+b5gHxFe3I4Lt4oD0+v4HAPEXFAIECBDw70+58oDw7zh7JMteTrPTcr5MDYBDOQqgIAcAFOU7AKWZBlCeKQAtGQXQmAEAzfkAYEHeAWC5gOX1DwQS/XsBkf6dgEz/XSBAgAABAgQIECBAQBxwE2AAjnkjnL/SDJsAAAAASUVORK5CYII="),hasPicture:!!bizagi.currentUser.userPicture,initials:bizagi.currentUser.userFullName?bizagi.currentUser.userFullName.getInitials():"",security:a}));i.resolve(o)})}).fail(function(){e.dataService.logout()}),i.promise()},overrideUserPreferences:function(){(new bizagi.services.preferences).overrideLocalization()},changeWidget:function(e){this.publish("changeWidget",e)},showDialogWidget:function(e){this.publish("showDialogWidget",e)},performResizeLayout:function(){var e=this;if(void 0!==jQuery.browser&&$.browser.msie&&parseInt($.browser.version,10)<=8)var t=window.setInterval(function(){if(null!==e.content){var i=$("#ui-bizagi-wp-app-menu-bt-container .text",e.content),r=$("#userprofile",e.content),a=$("#ui-bizagi-wp-menu-username",r),o=$(".text",a),s=$("#logout",r),n=$("#about",r);$(window).width()<1400?(i.css({"line-height":0,display:"block"}),$(window).width()<1195?(s.css({width:"20px"}),n.css({width:"24px"}),$(".ui-button-text",n).hide(),$(".ui-icon",s).css({top:"12px"}),$(".ui-button-text",s).hide(),o.css({display:"none"}),a.css({height:"19px"})):(n.removeAttr("style"),$(".ui-icon",n).removeAttr("style"),$(".ui-button-text",n).show(),s.removeAttr("style"),$(".ui-icon",s).removeAttr("style"),$(".ui-button-text",s).show())):(i.css({"line-height":"59px",display:"inline-block"}),a.removeAttr("style"),a.css({"padding-left":"25px",width:"auto"}),o.removeAttr("style"),n.removeAttr("style"),$(".ui-icon",n).removeAttr("style"),$(".ui-button-text",n).show(),s.removeAttr("style"),$(".ui-icon",s).removeAttr("style"),$(".ui-button-text",s).show()),window.clearInterval(t)}},300);e.adjustMenuWP()},adjustMenuWP:function(){if(1===$("#ui-bizagi-wp-app-menu-bt-container").length){var e=$("#ui-bizagi-wp-widget-searchContainer").outerWidth()+$("#user").outerWidth()+$("#ui-bizagi-wp-app-menu-logo-container").outerWidth()+70,t=$("#ui-bizagi-wp-app-menu-container").width()-e;$("#ui-bizagi-wp-app-menu-bt-container").width(t),$("span.text",i).show();for(var i=$("#ui-bizagi-wp-app-menu-bt-container li"),r=indexLastButton=i.length-1,a=!0;a&&!(r<0);)$("#ui-bizagi-wp-app-menu-bt-container").position().top>0||i.eq(indexLastButton).position().top>0?($("span.text",i).eq(r).hide(),r-=1):a=!1}}}),bizagi.workportal.controllers.controller.extend("bizagi.workportal.controllers.workarea",{},{setWidget:function(e){this.widget=e},disposeWidget:function(){this.widget&&(this.widget.dispose(),delete this.widget)},cleanWidgets:function(){this.widget&&this.widget.clean()},renderContent:function(){var e=this,t=new $.Deferred;return e.widget?$.when(e.widget.render()).done(function(){e.content=e.widget.getContent(),t.resolve(e.content)}):(e.content=$("<div/>"),t.resolve(e.content)),t.promise()},performResizeLayout:function(){this.widget&&this.widget.performResizeLayout()}}),bizagi.workportal.controllers.controller.extend("bizagi.workportal.actions.action",{BIZAGI_WORKPORTAL_ACTION_ROUTING:"routing",BIZAGI_WORKPORTAL_ACTION_SEARCH:"search"},{render:function(){bizagi.assert(!1,"An action can't be rendered because it has no view")},postRender:function(){bizagi.assert(!1,"An action can't be rendered because it has no view")},execute:function(){}}),bizagi.workportal.actions.action.extend("bizagi.workportal.actions.routing",{},{execute:function(e){var t=this;t.params=e||{},$.when(t.dataService.routing.getRoute(e)).done(function(i){var r=$.Deferred();switch(i=i||{},"undefined"!=t.params.isOfflineForm&&1==t.params.isOfflineForm?i.moduleParams=$.extend(i.moduleParams,{formsRenderVersion:t.params.formsRenderVersion,isOfflineForm:t.params.isOfflineForm,idCase:t.params.idCase,idWorkitem:t.params.idWorkitem,guid:t.params.guid})||{}:i.moduleParams=i.moduleParams||{},i.module){case bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_RENDER:case bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_OLDRENDERINTEGRATION:case bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_ASYNC:t.publish("changeWidget",i.moduleParams),t.publish("closeAllDialogs");break;case bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_PROJECT_DASHBOARD:bizagi.util.enableWorkPortalMenu();var a=$.extend(e,i.moduleParams);bizagi.util.setContext(a),t.publish("changeWidget",i.moduleParams),t.publish("closeAllDialogs");break;case bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_START_FORM:var o={title:t.getResource("workportal-widget-newcase-title"),width:850,height:750,refreshInbox:!1,onClose:i.moduleParams.onClose,dialogOpened:r};t.publish("showDialogWidget",{widgetName:i.module,data:i.moduleParams.data,modalParameters:o,closeVisible:!1,dialogClass:"ui-bizagi-start-form-dialog"}),r.promise().done(function(e){t.publish("onWidgetIncludedInDOM"),e.widgetReference.postRender()});break;case bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_ROUTING:o={title:t.getResource("workportal-widget-routing-window-selector"),width:670,height:450,refreshInbox:!1,onClose:i.moduleParams.onClose};t.isThereAsync(i.moduleParams.data)?t.asyncWidget(i.moduleParams):t.publish("showDialogWidget",{widgetName:i.module,data:i.moduleParams.data,modalParameters:o,onClose:o.onClose})}})},isThereAsync:function(e){var t,i=e.workItems,r=0,a=i.length,o=!1;if(a>0)for(;r<a;)"true"===(t=i[r++]).isAsynch&&(o=o||[]).push(t);return o},asyncWidget:function(e){e.widgetName="async",this.publish("changeWidget",e)}}),bizagi.workportal.actions.action.extend("bizagi.workportal.actions.search",{},{execute:function(e){var t=this;t.params=e;var i={radNumber:$.trim(e.radNumber),idWorkflow:"",taskState:"all",onlyFavorites:!1,order:e.order||"",orderFieldName:e.orderFieldName||"",orderType:e.orderType||"0",page:e.page||1,group:bizagiConfig.groupByCaseNumber?"T_RADNUMBER":null};$.when(t.dataService.getCustomizedColumnsData(i)).done(function(r){bizagi.lstIdCases=r.cases.lstIdCases;var a=0;$(r.cases.columnTitle).each(function(i,o){o.radNumber=$.trim(e.radNumber),"T_idTask"==o.order&&$(r.cases.rows).each(function(e,i){t.isArray(i.fields[a])||(r.cases.rows[e].fields[a]={workitems:[{TaskName:i.fields[a],State:r.cases.rows[e].taskState}]})}),a++}),bizagi.referrerParams=bizagi.referrerParams||{},bizagi.referrerParams.radNumber=e.radNumber,bizagi.referrerParams.page=e.page||1,r.IsFavorite=!1,r.IsOpen=!1,bizagi.referrerParams.referrer=bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_SEARCH,0==r.cases.lstIdCases.length?t.showNoResults(i):1==r.cases.rows.length?t.showSearch(r,e):r.cases.rows.length>=1&&t.showSearch(r,i)})},showSearch:function(e,t){bizagi.referrerParams.requestGlobalForm=!0,bizagi.referrerParams.referrerBackButton=bizagi.referrerParams.referrerBackButton||bizagi.context.widget||bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX_GRID,this.publish("changeWidget",{widgetName:bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_SEARCH,data:e,referrerParams:t}).done(function(){bizagi.util.isEmpty($("#footer #casesPagination").html().trim())&&$("#footer #casesPagination").hide()}),"tablet"!=bizagi.detectDevice()&&"tablet_ios"!=bizagi.detectDevice()&&"tablet_android"!=bizagi.detectDevice()||$("#menu-items #search").trigger("closePopUp")},showNoResults:function(e){var t=$("#menuQuery").css("color");$("#menuQuery").css("color","#f88f88"),setTimeout(function(){$("#menuQuery").css("color",t)},5e3),"smartphone_ios"!=bizagi.detectDevice()&&"smartphone_android"!=bizagi.detectDevice()||this.showSearch({noresults:e.radNumber},e)},redirectToProcess:function(e){this.publish("executeAction",{action:bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_ROUTING,idCase:e,onlyUserWorkItems:"false"})},formatRequest:function(e){return e},formatCategories:function(e){return e},isArray:function(e){return"object"==typeof e},isDate:function(e){var t=!1,i="string"==typeof(e=e||"")?e.split("/"):"";try{if(3==i.length)new Date(e).getYear()>0&&(t=!0)}catch(e){t=!1}return t}}),bizagi.workportal.controllers.controller.extend("bizagi.workportal.widgets.widget",{BIZAGI_WORKPORTAL_WIDGET_INTEGRATION:"widgetIntegration",BIZAGI_WORKPORTAL_WIDGET_WEBPART:"webpart",BIZAGI_WORKPORTAL_WIDGET_INBOX:"inbox",BIZAGI_WORKPORTAL_WIDGET_ADVANCE_SEARCH:"advanceSearch",BIZAGI_WORKPORTAL_WIDGET_HOMEPORTAL:"homeportal",BIZAGI_WORKPORTAL_WIDGET_ACTIVITY:"project.activity",BIZAGI_WORKPORTAL_WIDGET_PROJECT_DASHBOARD:"projectDashboard",BIZAGI_WORKPORTAL_WIDGET_INBOX_GRID:"inboxGrid",BIZAGI_WORKPORTAL_WIDGET_ROUTING:"routing",BIZAGI_WORKPORTAL_WIDGET_SEARCH:"search",BIZAGI_WORKPORTAL_WIDGET_RENDER:"activityform",BIZAGI_WORKPORTAL_WIDGET_START_FORM:"startForm",BIZAGI_WORKPORTAL_WIDGET_RENDERFORM:"renderform",BIZAGI_WORKPORTAL_WIDGET_NEWCASE:"newCase",BIZAGI_WORKPORTAL_WIDGET_QUERIES:"queries",BIZAGI_WORKPORTAL_WIDGET_QUERIES_DEFINITION:"queriesDefinition",BIZAGI_WORKPORTAL_WIDGET_QUERIES_SHORTCUT:"queriesShortcut",BIZAGI_WORKPORTAL_WIDGET_QUERYFORM:"queryform",BIZAGI_WORKPORTAL_WIDGET_LISTCASES:"listCases",BIZAGI_WORKPORTAL_WIDGET_ASYNC:"async",BIZAGI_WORKPORTAL_WIDGET_GENERICIFRAME:"genericiframe",BIZAGI_WORKPORTAL_WIDGET_SUBMENU:"subMenu",BIZAGI_WORKPORTAL_WIDGET_PRINT:"print",BIZAGI_WORKPORTAL_WIDGET_FONTSIZE:"fontsize",BIZAGI_WORKPORTAL_WIDGET_OLDRENDERINTEGRATION:"oldrenderintegration",BIZAGI_WORKPORTAL_WIDGET_PAGE:"page",BIZAGI_WORKPORTAL_WIDGET_ENTITIES:"entities",BIZAGI_WORKPORTAL_WIDGET_REPORTS:"reports",BIZAGI_WORKPORTAL_WIDGET_REPORTS_MENU:"reportsMenu",BIZAGI_WORKPORTAL_WIDGET_REPORTS_CHART:"reportsChart",BIZAGI_WORKPORTAL_WIDGET_SMARTFOLDERS:"smartfolders",BIZAGI_WORKPORTAL_WIDGET_ADMIN_CASES:"adminReassignCases",BIZAGI_WORKPORTAL_WIDGET_REASSIGN_CASE:"reassignCase",BIZAGI_WORKPORTAL_WIDGET_ASYNCECM_UPLOAD:"asyncECMUpload",BIZAGI_WORKPORTAL_WIDGET_PROCESS_TREE:"processTree",BIZAGI_WORKPORTAL_WIDGET_ENTITIES_TREE:"entitiesTree",BIZAGI_WORKPORTAL_WIDGET_USERS_TABLE:"usersTable",BIZAGI_WORKPORTAL_WIDGET_ACTIVITY_LOG:"activityLog",BIZAGI_WORKPORTAL_WIDGET_AUTHENTICATION_LOG:"authenticationLog",BIZAGI_WORKPORTAL_WIDGET_ADMIN_ENTITIES:"entityAdmin",BIZAGI_WORKPORTAL_WIDGET_ADMIN_ENCRYPT_PASSWORDS:"encryptPasswords",BIZAGI_WORKPORTAL_WIDGET_ADMIN_USERS_REQUESTS:"userPendingRequests",BIZAGI_WORKPORTAL_WIDGET_ADMIN_CASE_SEARCH:"adminCaseSearch",BIZAGI_WORKPORTAL_WIDGET_ADMIN_ASYNC_ACTIVITIES:"asyncActivities",BIZAGI_WORKPORTAL_WIDGET_ADMIN_DEFAULTS_ASSIGNATION_USER:"defaultsAssignUser",BIZAGI_WORKPORTAL_WIDGET_ADMIN_TRANSFER_CASE_SECURITY_PERMISSIONS:"transferCaseSecurityPermissions",BIZAGI_WORKPORTAL_WIDGET_ADMIN_USER_PROFILES:"userProfiles",BIZAGI_WORKPORTAL_WIDGET_ADMIN_ALARMS:"adminAlarms",BIZAGI_WORKPORTAL_WIDGET_ADMIN_USER_LICENSES:"userlicenses",BIZAGI_WORKPORTAL_WIDGET_ADMIN_DIMENSIONS:"dimensions",BIZAGI_WORKPORTAL_WIDGET_ADMIN_DOCUMENT_TEMPLATES:"documentTemplates",BIZAGI_WORKPORTAL_WIDGET_ADMIN_PROCESSES:"processes",BIZAGI_WORKPORTAL_WIDGET_START_PROCESS:"startProcess",BIZAGI_WORKPORTAL_WIDGET_ADMIN_BUSINESS_POLICIES:"businessPolicies",BIZAGI_WORKPORTAL_WIDGET_ADMIN_LANGUAGE:"languageAdmin",BIZAGI_WORKPORTAL_WIDGET_ADMIN_BUSINESS_POLICIES_DECISION_TABLE:"businessPoliciesDecisionTable",BIZAGI_WORKPORTAL_WIDGET_ADMIN_BUSINESS_POLICIES_POLITICS:"businessPoliciesPolitics",BIZAGI_WORKPORTAL_WIDGET_ADMIN_BUSINESS_POLICIES_RULES:"businessPoliciesRules",BIZAGI_WORKPORTAL_WIDGET_ADMIN_BUSINESS_POLICIES_TABS:"businessPoliciesTabs",BIZAGI_WORKPORTAL_WIDGET_ADMIN_BUSINESS_POLICIES_VOCABULARIES:"businessPoliciesVocabularies",BIZAGI_WORKPORTAL_WIDGET_ADMIN_PREFERENCES:"adminPreferences",BIZAGI_WORKPORTAL_WIDGET_ADMIN_DISPLAY_OPTIONS:"adminDisplayOptions",BIZAGI_WORKPORTAL_WIDGET_TREE:"tree",BIZAGI_WORKPORTAL_WIDGET_GRAPHIC_QUERY:"graphicquery",BIZAGI_WORKPORTAL_WIDGET_PROCESS_MODELER_VIEW:"processModeler",BIZAGI_WORKPORTAL_WIDGET_ADMIN_USERS_ADMINISTRATION:"adminUsers",BIZAGI_WORKPORTAL_WIDGET_ADMIN_USERS_DELEGATION:"usersDelegation",BIZAGI_WORKPORTAL_WIDGET_ADMIN_USERS_DELEGATION_SEARCH_USER:"usersDelegationSearchUser",BIZAGI_WORKPORTAL_WIDGET_ADMIN_STAKEHOLDERS:"adminStakeholders",BIZAGI_WORKPORTAL_WIDGET_BIZAGI_EVENTS:"events",BIZAGI_WORKPORTAL_WIDGET_BIZAGI_RELEASE:"release",BIZAGI_WORKPORTAL_WIDGET_PROJECT_PROCESS_DIAGRAM_HELPER:"processDiagramHelper",BIZAGI_WORKPORTAL_WIDGET_PROJECT_ACTIVITY_MAP_TOOLTIP:"activityMapTooltip",BIZAGI_WORKPORTAL_WIDGET_PROJECT_USERSUMMARY:"usersummary",BIZAGI_WORKPORTAL_WIDGET_MYSEARCHLIST:"mySearchList",BIZAGI_WORKPORTAL_WIDGET_LOADFORM:"loadForm",BIZAGI_WORKPORTAL_WIDGET_TEMPLATE_ENGINE:"templates",BIZAGI_WORKPORTAL_WIDGET_DIALOGNAV:"dialognav",BIZAGI_WORKPORTAL_WIDGET_ADMIN_HOLIDAYS:"holidays",BIZAGI_WORKPORTAL_WIDGET_ADMIN_PROJECTNAME:"projectName",BIZAGI_WORKPORTAL_WIDGET_ADMIN_OAUTH2APPLICATIONS:"oauth2Applications",BIZAGI_WORKPORTAL_WIDGET_ADMIN_ADHOC_PROCESSES:"adhocProcesses",BIZAGI_WORKPORTAL_WIDGET_TIMELINE:"timeline",BIZAGI_WORKPORTAL_WIDGET_ADHOC_PROCESS_MODELER:"adhocProcessModeler",BIZAGI_WORKPORTAL_WIDGET_ADMIN_ADHOC_ENTITIES:"adhocEntities",BIZAGI_WORKPORTAL_WIDGET_ADMIN_ADHOC_USER_GROUPS:"adhocUserGroups",BIZAGI_WORKPORTAL_WIDGET_ADMIN_ADHOC_CREATE_PROCESS:"adhocCreateProcess",BIZAGI_WORKPORTAL_WIDGET_ADMIN_ADHOC_BOOLEAN_EXP:"adhocBooleanExp",BIZAGI_WORKPORTAL_WIDGET_ADHOC_CREATE_PROCESS:"adhocCreateProcess",BIZAGI_WORKPORTAL_WIDGET_ADMIN_ADHOC_USER_GROUP_REPORT:"adhocUserGroupReport",BIZAGI_WORKPORTAL_WIDGET_PROFLY:"adhocprofly",BIZAGI_WORKPORTAL_WIDGET_SESSION_TIMEOUT:"sessionTimeOut",BIZAGI_WORKPORTAL_WIDGET_SESSION_TIMEOUT_EXPIRED:"sessionTimeOutExpired",BIZAGI_WORKPORTAL_WIDGET_USER_PRIVACY:"userPrivacy",BIZAGI_WORKPORTAL_WIDGET_ACCESS_DENIED:"accessDenied",BIZAGI_WORKPORTAL_WIDGET_ADMIN_BUSINESS_POLICES:"adminBusinessPolices",BIZAGI_WORKPORTAL_WIDGET_USERS_MODAL:"usersModal"},{init:function(e,t,i){this._super(e,t),this.params=i,i&&i.menu&&(this.menu=i.menu),this.observableElement=$({}),this.widgetReadyDeferred=new $.Deferred,this.isBlocked=!1},publish:function(e,t){if(this.disposed)return null;$(document).triggerHandler(e,$.extend(t,{referrer:this.getWidgetName()}))},changeWidget:function(e,t){t=t||{};var i=$.extend(t,{widgetName:e});this.publish("changeWidget",i)},executeAction:function(e,t){t=t||{};var i=$.extend(t,{action:e});this.publish("executeAction",i)},showGraphicQuery:function(e){var t=this;!0===e.isAdhoc?bizagi.loader.start("processmodelerview").then(function(){t.publish("showDialogWidget",{widgetName:bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_PROCESS_MODELER_VIEW,data:e,modalParameters:{title:"Process viewer",refreshInbox:!1},maximizeOnly:!0,onClose:function(){bizagi.workportal.desktop.dialogStack.pop()}})}):bizagi.loader.start("processviewer").then(function(){t.publish("showDialogWidget",{widgetName:bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_GRAPHIC_QUERY,data:e,modalParameters:{title:t.getResource("render-graphic-query"),refreshInbox:!1},maximizeOnly:!0,onClose:function(){bizagi.workportal.desktop.dialogStack.pop()}})})},isProcessOnTheFlyCase:function(){return!0},showTimeLine:function(e){var t=this;bizagi.loader.startAndThen("timeline").then(function(){t.publish("showDialogWidget",{widgetName:bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_TIMELINE,data:e,modalParameters:{title:t.getResource("workportal-project-casedashboard-timeline"),refreshInbox:!1},maximizeOnly:!0,onClose:function(){bizagi.workportal.desktop.dialogStack.pop()}})})},routingExecute:function(e){if(null==e)return!1;var t=e.find("#idCase").val()||this.params.idCase,i=e.find("#idWorkflow").val()||this.params.idWorkflow,r=e.find("#idWorkItem").val()||e.parent().find("#idWorkItem").val(),a=e.find("#idTask").val(),o=e.find("#eventAsTasks").val()||!1;return this.publish("executeAction",{action:bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_ROUTING,idCase:t,idWorkflow:i,idWorkItem:r,idTask:a,eventAsTasks:o}),!0},getWidgetName:function(){return this.Class.fullName},sub:function(e){this.observableElement.off.apply(this.observableElement,arguments),this.observableElement.on.apply(this.observableElement,arguments)},unsub:function(){this.observableElement.off.apply(this.observableElement,arguments)},pub:function(){return this.observableElement.triggerHandler.apply(this.observableElement,arguments)},pubDeadLockDetection:function(){var e=new $.Deferred;if(self.isBlocked)e.reject();else{self.isBlocked=!0;var t=this.pub.apply(this,arguments),i=Array.isArray(t)?t:[t];$.when.apply($,i).done(function(t){self.isBlocked=!1,e.resolve()})}return e.promise()},clean:function(){if(this.observableElement){var e=$._data(this.observableElement[0],"events");if(e)for(var t in e)"notify"!=t&&"showDialogWidget"!=t&&"showNotification"!=t&&this.unsub(t)}},isReady:function(){return this.widgetReadyDeferred.promise()},setWidgetReady:function(){this.widgetReadyDeferred.resolve()}}),bizagi.workportal.widgets.widget.extend("bizagi.workportal.widgets.oldrenderintegration",{},{getWidgetName:function(){return bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_OLDRENDERINTEGRATION},renderContent:function(){var e=this,t=e.getTemplate("integration-old-render"),i={};i.url=e.params.url||"App/ListaDetalle/Detalle.aspx?PostBack=1&idCase="+e.params.idCase+"&idWorkitem="+e.params.idWorkitem+"&idTask="+e.params.idTask;var r=e.content=$.tmpl(t,i);return bizagi.workportal.currentInboxView=e.getWidgetName(),r}}),bizagi.workportal.widgets.widget.extend("bizagi.workportal.widgets.inbox",{},{getWidgetName:function(){return bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX},renderContent:function(){var e=this.getTemplate("inbox"),t={};t.enableFolders=!(null==bizagi.override||!bizagi.override.enableFolder),t.enableSmartFolders=!(null==bizagi.override||!bizagi.override.enableSmartFolders);var i=this.content=$.tmpl(e,t);return bizagi.workportal.currentInboxView=this.getWidgetName(),i},renderSummaryForm:function(e){var t=this,i=new $.Deferred,r=void 0!==t.dataService.serviceLocator.proxyPrefix?t.dataService.serviceLocator.proxyPrefix:"";return bizagi.loader.start("rendering").then(function(){var a=new bizagi.rendering.facade({proxyPrefix:r});a.execute({canvas:e,summaryForm:!0,idCase:t.idCase}),t.renderingFacade=a,setTimeout(function(){t.resizeLayout()},1e3),$.when(a.ready()).done(function(){i.resolve()})}),i.promise()},routingExecute:function(e){if(null==e)return!1;var t=e.find("#idCase").val(),i=e.find("#idWorkflow").val(),r=e.find("#idWorkItem").val(),a=e.find("#idTask").val(),o=e.find("#eventAsTasks").val()||!1;this.publish("executeAction",{action:bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_ROUTING,idCase:t,idWorkflow:i,idWorkItem:r,idTask:a,eventAsTasks:o})}}),bizagi.workportal.widgets.listCases.extend("bizagi.workportal.widgets.inboxGrid",{},{getWidgetName:function(){return bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX_GRID},renderContent:function(){var e=this.getTemplate("inbox-grid"),t={};t.enableFolders=!(null==bizagi.override||!bizagi.override.enableFolder),t.enableSmartFolders=!(null==bizagi.override||!bizagi.override.enableSmartFolders);var i=this.content=$.tmpl(e,$.extend(t,{security:bizagi.menuSecurity}));return bizagi.workportal.currentInboxView=this.getWidgetName(),i},renderSummaryForm:function(e){var t=this,i=void 0!==t.dataService.serviceLocator.proxyPrefix?t.dataService.serviceLocator.proxyPrefix:"";bizagi.loader.start("rendering").then(function(){var r=new bizagi.rendering.facade({proxyPrefix:i});r.execute({canvas:e,summaryForm:!0,idCase:t.idCase}),t.renderingFacade=r,setTimeout(function(){t.resizeLayout()},1e3)})},routingExecute:function(e){if(null==e)return!1;var t=e.find("#idCase").val(),i=e.find("#idWorkItem").val(),r=e.find("#idTask").val(),a=e.find("#eventAsTasks").val()||!1;this.publish("executeAction",{action:bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_ROUTING,idCase:t,idWorkItem:i,idTask:r,eventAsTasks:a})}}),bizagi.workportal.widgets.widget.extend("bizagi.workportal.widgets.routing",{},{init:function(e,t,i){this._super(e,t,i)},getWidgetName:function(){return bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_ROUTING},renderContent:function(){var e=this,t=e.getTemplate("routing"),i=new $.Deferred;return(e.params.data.checkProcess||e.params.data.checkWorkItems)&&$.when(e.dataService.getCaseSubprocesses({idCase:e.params.data.idCase})).done(function(r){e.params.data.subProcessPersonalized=r.subProcesses,e.params.data.workItems.forEach(function(e){e.idTask||(e.idTask="")});var a=e.content=$.tmpl(t,e.params.data,{formatDate:e.formatDate});i.resolve(a)}),i.promise()},formatDate:function(e){return bizagi.util.formatDateFromInvariantStringDate(e.estimatedSolutionDate)}}),bizagi.workportal.widgets.widget.extend("bizagi.workportal.widgets.render",{},{getWidgetName:function(){return bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_RENDER},init:function(e,t,i){if(bizagi.util.isEmpty(i.idCase))if(bizagi.util.isEmpty(window.location.hash)){if(!bizagi.util.isEmpty(window.location.search)){var r=bizagi.util.getQueryString();r.idCase?(i.idCase=r.idCase,this.isConfiguredFromHash=!0):r.guid&&(i.guid=r.guid,this.isConfiguredFromHash=!0),r.idWorkitem&&(i.idWorkitem=r.idWorkitem)}}else{var a=bizagi.util.getHashParams();a.length>1&&(i.idCase=a[1],this.isConfiguredFromHash=!0),a.length>2&&(i.idWorkitem=a[2])}this._super(e,t,i)},renderContent:function(){var e,t=this,i=t.getTemplate("render"),r=new $.Deferred;return bizagi.util.isEmpty(t.params.idCase)&&bizagi.util.isEmpty(t.params.guid)?(t.changeWidget(bizagi.workportal.currentInboxView),null):(e=t.params.idCase?{idCase:t.params.idCase,eventAsTasks:t.params.eventAsTasks,onlyUserWorkItems:t.params.onlyUserWorkItems,idWorkitem:t.params.idWorkitem,isOfflineForm:t.params.isOfflineForm||!1}:{guid:t.params.guid,eventAsTasks:t.params.eventAsTasks,onlyUserWorkItems:t.params.onlyUserWorkItems,idWorkitem:t.params.idWorkitem,isOfflineForm:t.params.isOfflineForm||!1},bizagi.util.isEmpty(t.params.idWorkitem)&&t.isConfiguredFromHash?(bizagi.util.isEmpty(t.params.idCase)?bizagi.util.isEmpty(t.params.guid)||t.executeAction(bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_ROUTING,{guid:t.params.guid}):t.executeAction(bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_ROUTING,{idCase:t.params.idCase}),null):(t.content=$.tmpl(i),$.when(t.dataService.summaryCaseDetails(e)).done(function(e){if(bizagi.util.setContext({idCase:e.idCase||null,caseNumber:e.caseNumber||null,widget:t.getWidgetName(),idWorkitem:t.params.idWorkitem||null,idTask:t.params.idTask||null,isOfflineForm:t.params.isOfflineForm||!1}),e.params=t.params,e.countEvents>=1)for(var i=0;i<e.currentState.length;i++)"true"==e.currentState[i].isEvent&&e.currentState[i].idWorkItem==e.params.idWorkitem&&(e.countEvents=e.countEvents-1);e.showEvents=e.countEvents>=1;var a=$.grep(e.currentState,function(t){return t.idWorkItem===e.params.idWorkitem&&t.allowReleaseActivity});e.allowReleaseActivity=1===a.length&&a[0].allowReleaseActivity,r.resolve(t.renderSummary(e))}),t.content.parents("body").length>0?t.renderForm():t.subscribeOneTime("onWidgetIncludedInDOM",function(){t.renderForm({idCase:t.params.idCase,idWorkitem:t.params.idWorkitem,idTask:t.params.idTask,radNumber:t.params.radNumber,withOutGlobalForm:t.params.withOutGlobalForm||!1,isOfflineForm:t.params.isOfflineForm||!1,messageForm:t.params.messageForm||""})}),r.promise()))},renderSummary:function(e){var t=this,i=t.getContent(),r={},a="",o=new bizagi.workportal.command.security(t.dataService);e.showComments=!0,$.when(o.checkSecurityPerm("PrintableVersion"),o.checkSecurityPerm("StateLog"),o.checkSecurityPerm("GraphicQuery")).done(function(o,s,n){if(e.printableVersion=o,e.stateLog=s,e.graphicQuery=n,0!=e.idCase){var l=$.tmpl(t.caseSummaryTemplate,$.extend(e,{security:bizagi.menuSecurity})).appendTo(t.getComponentContainer("summary"));bizagi.util.formatInvariantDate(i,t.getResource("dateFormat")+" "+t.getResource("timeFormat")),$("#details",l).delegate(".summaryLink","click",function(){t.routingExecute($(this))}),$("#ui-bizagi-details-tabs",i).tabs({active:-1,create:function(e,t){$(this).tabs("option","active",0)},activate:function(i,o){switch(bizagi.util.setContext({commentsFocus:!1}),o.newPanel.prop("id")){case"comments":null==r.comments&&($.extend(t,{},bizagi.workportal.comments),e.canvas=$("#comments",t.getComponentContainer("summary")),e.readOnly=!!$(o.tab).data("isclosed"),$.when(t.renderComments(e)).done(function(e){r.comments=e})),bizagi.util.setContext({commentsFocus:!0});break;case"subprocess":null==r.subprocess&&$.when(t.dataService.summarySubProcess({idCase:t.params.idCase})).done(function(e){$.each(e.subProcesses,function(t,i){for(var r=e.subProcesses[t].custData,a=0;a<r.length;a++)null==r[a]&&(r[a]="")}),(a=$.tmpl(t.caseSummaryTemplateSubprocess,e)).appendTo($("#subprocess",t.getComponentContainer("summary"))),r.subprocess=a,a.delegate(".summaryLink","click",function(){t.routingExecute($(this))})});break;case"assignees":null==r.assignees&&$.when(t.dataService.summaryAssigness({idCase:t.params.idCase})).done(function(e){var i=[];$.each(e.events.split(", "),function(e,t){-1===$.inArray(t,i)&&i.push(t)}),e.events=i.join(", ");var o=[];$.each(e.activities.split(", "),function(e,t){-1===$.inArray(t,o)&&o.push(t)}),e.activities=o.join(", "),(a=$.tmpl(t.caseSummaryTemplateAssigness,e)).appendTo($("#assignees",t.getComponentContainer("summary"))),r.assignees=a});break;case"events":null==r.events&&$.when(t.dataService.summaryCaseEvents({idCase:t.params.idCase})).done(function(e){(a=$.tmpl(t.caseSummaryTemplateEvents,e)).appendTo($("#events",t.getComponentContainer("summary"))),r.events=a,a.delegate(".summaryLink","click",function(){t.routingExecute($(this))})});break;case"activities":null==r.activities&&$.when(t.dataService.summaryActivities({data:e,idWorkitem:t.params.idWorkitem})).done(function(e){e.idCase=t.params.idCase,e.idWorkflow=t.params.idWorkflow;var i=bizagi.localization.getResource("dateFormat")+" "+bizagi.localization.getResource("timeFormat");a=$.tmpl(t.caseSummaryTemplateActivities,e),bizagi.util.formatInvariantDate(a,i),a.appendTo($("#activities",t.getComponentContainer("summary"))),r.activities=a,a.delegate(".summaryLink","click",function(){t.routingExecute($(this))})})}}})}else setTimeout(function(){$("div.ui-bizagi-wp-app-inbox-description-container                     div.ui-bizagi-loading-message                     div.ui-bizagi-loading-message-center                     div.ui-bizagi-loading-icon").hide()},1e3)})},renderForm:function(e){var t,i=this,r=i.getComponentContainer("render");if(e.withOutGlobalForm){var a=i.workportalFacade.getTemplate("info-message"),o=""!==e.messageForm?e.messageForm:i.resources.getResource("render-without-globalform");void 0!==i.params&&void 0!==i.params.isOfflineForm&&1==i.params.isOfflineForm&&(o=bizagi.util.getMessageFromNetworkState(i.dataService.online)),$.tmpl(a,{message:o}).appendTo(r),(t=$.Deferred()).fail()}else{var s=null!=typeof i.dataService.serviceLocator.proxyPrefix?i.dataService.serviceLocator.proxyPrefix:"",n=null!=typeof i.dataService.database?i.dataService.database:"",l=i.rendering=new bizagi.rendering.facade({proxyPrefix:s,database:n});t=l.execute($.extend(e,{canvas:r,menu:i.menu})),r.bind("routing",function(e,t){var r={action:bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_ROUTING,idCase:i.params.idCase,fromTask:i.params.fromTask||i.params.idTask,fromWorkItemId:i.params.fromWorkItemId||i.params.idWorkitem,isOfflineForm:i.params.isOfflineForm,formsRenderVersion:i.params.formsRenderVersion,onClose:function(){i.publish("changeWidget",{widgetName:bizagi.workportal.currentInboxView})}};r=$.extend(r,t),i.publish("executeAction",r)}),r.bind("oldrenderintegration",function(){if(null==bizagi.oldrenderevent){bizagi.oldrenderevent=!0;var e=window.addEventListener?"addEventListener":"attachEvent";(0,window[e])("attachEvent"==e?"onmessage":"message",function(e){e.stopPropagation(),i.publish("executeAction",{action:bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_ROUTING,idCase:e.data})},!1)}i.publish("changeWidget",{widgetName:bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_OLDRENDERINTEGRATION,idCase:i.params.idCase,idWorkitem:i.params.idWorkitem,idTask:i.params.idTask,onlyUserWorkItems:i.params.onlyUserWorkItems,referrer:i.params.referrer,eventAsTasks:i.params.eventAsTasks})})}return i.renderingFacade=l,i.resizeLayout(),t},routingExecute:function(e){if(null==e)return!1;var t=e.find("#idCase").val()||this.params.idCase,i=e.find("#idWorkflow").val()||this.params.idWorkflow,r=e.find("#idWorkItem").val()||e.parent().find("#idWorkItem").val(),a=e.find("#idTask").val(),o=e.find("#eventAsTasks").val()||!1;return this.publish("executeAction",{action:bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_ROUTING,idCase:t,idWorkflow:i,idWorkItem:r,idTask:a,eventAsTasks:o}),!0},dispose:function(){var e=this;setTimeout(function(){e.rendering&&(e.rendering.canvas.off(),e.rendering.dispose())},bizagi.override.disposeTime||50),e._super()}}),bizagi.workportal.widgets.widget.extend("bizagi.workportal.widgets.startForm",{},{getWidgetName:function(){return bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_START_FORM},init:function(e,t,i){this.idProcess=i.data.idProcess,this._super(e,t,i),this.loadTemplates({startForm:bizagi.getTemplate("bizagi.workportal.desktop.widget.startForm").concat("#ui-bizagi-workportal-widget-start-form"),useNewEngine:!1})},renderContent:function(){var e=this,t=e.getTemplate("startForm");e.content=$.tmpl(t),e.content.parents("body").length>0?e.renderForm():e.subscribeOneTime("onWidgetIncludedInDOM",function(){e.renderForm({idCase:e.params.idCase,idWorkitem:e.params.idWorkitem,idTask:e.params.idTask,withOutGlobalForm:e.params.withOutGlobalForm||!1,isOfflineForm:e.params.isOfflineForm||!1,messageForm:e.params.messageForm||""})})},renderForm:function(e){var t,i=this,r=i.getComponentContainer("render");if(e.withOutGlobalForm){var a=i.workportalFacade.getTemplate("info-message"),o=""!==e.messageForm?e.messageForm:i.resources.getResource("render-without-globalform");void 0!==i.params&&void 0!==i.params.isOfflineForm&&!0===i.params.isOfflineForm&&(o=bizagi.util.getMessageFromNetworkState(i.dataService.online)),$.tmpl(a,{message:o}).appendTo(r),(t=$.Deferred()).fail()}else{var s=void 0!==i.dataService.serviceLocator.proxyPrefix?i.dataService.serviceLocator.proxyPrefix:"",n=void 0!==i.dataService.database?i.dataService.database:"",l=i.rendering=new bizagi.rendering.facade({proxyPrefix:s,database:n});e.action="LOADSTARTFORM",e.idProcess=i.idProcess,t=l.execute($.extend(e,{canvas:r,menu:i.menu})),r.bind("routing",function(e,t){i.publish("closeCurrentDialog");var r={action:bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_ROUTING,idCase:i.params.idCase||t.idCase,fromTask:i.params.fromTask||i.params.idTask,fromWorkItemId:i.params.fromWorkItemId||i.params.idWorkitem,isOfflineForm:i.params.isOfflineForm,formsRenderVersion:i.params.formsRenderVersion,onClose:function(){i.publish("changeWidget",{widgetName:bizagi.workportal.currentInboxView})}};r=$.extend(r,t),i.publish("executeAction",r)}),r.bind("oldrenderintegration",function(){if(void 0===bizagi.oldrenderevent){bizagi.oldrenderevent=!0;var e=window.addEventListener?"addEventListener":"attachEvent";(0,window[e])("attachEvent"==e?"onmessage":"message",function(e){e.stopPropagation(),i.publish("executeAction",{action:bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_ROUTING,idCase:e.data})},!1)}i.publish("changeWidget",{widgetName:bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_OLDRENDERINTEGRATION,idCase:i.params.idCase,idWorkitem:i.params.idWorkitem,idTask:i.params.idTask,onlyUserWorkItems:i.params.onlyUserWorkItems,referrer:i.params.referrer,eventAsTasks:i.params.eventAsTasks})})}return i.renderingFacade=l,i.resizeLayout(),t},routingExecute:function(e){if(void 0===e)return!1;var t=e.find("#idCase").val()||this.params.idCase,i=e.find("#idWorkflow").val()||this.params.idWorkflow,r=e.find("#idWorkItem").val()||e.parent().find("#idWorkItem").val(),a=e.find("#idTask").val(),o=e.find("#eventAsTasks").val()||!1;return this.publish("executeAction",{action:bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_ROUTING,idCase:t,idWorkflow:i,idWorkItem:r,idTask:a,eventAsTasks:o}),!0},dispose:function(){var e=this;if(e.rendering&&(e.rendering.canvas.off(),e.rendering.form&&e.rendering.form.dispose(),this.IsDisposed))return;e._super()}}),bizagi.workportal.widgets.widget.extend("bizagi.workportal.widgets.renderform",{},{getWidgetName:function(){return bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_RENDER_FORM},init:function(e,t,i){if(bizagi.util.isEmpty(i.idForm))if(bizagi.util.isEmpty(window.location.hash)){if(!bizagi.util.isEmpty(window.location.search)){var r=bizagi.util.getQueryString();r.idEntity&&(i.idEntity=r.idEntity,this.isConfiguredFromHash=!0),r.surrogateKey&&(i.surrogateKey=r.surrogateKey)}}else{var a=bizagi.util.getHashParams();a.length>1&&(i.idCase=a[1],this.isConfiguredFromHash=!0),a.length>2&&(i.idWorkitem=a[2])}this._super(e,t,i)},renderContent:function(){var e=this,t=e.getTemplate("renderform");new $.Deferred;if(bizagi.util.isEmpty(e.params.idForm))return e.changeWidget(bizagi.workportal.currentInboxView),null;e.content=$.tmpl(t),e.content.parents("body").length>0?e.renderForm():e.subscribeOneTime("onWidgetIncludedInDOM",function(){e.renderForm({idEntity:e.params.idEntity,surrogateKey:e.params.surrogateKey})})},renderForm:function(e){var t=this,i=null!=typeof t.dataService.serviceLocator.proxyPrefix?t.dataService.serviceLocator.proxyPrefix:"",r=new bizagi.rendering.facade({proxyPrefix:i}),a=t.getComponentContainer("render");r.execute($.extend(e,{canvas:a})),a.bind("routing",function(){t.publish("executeAction",{action:bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_ROUTING,idCase:t.params.idCase,onClose:function(){t.publish("changeWidget",{widgetName:bizagi.workportal.currentInboxView})}})}),t.renderingFacade=r,t.resizeLayout()}}),bizagi.workportal.widgets.widget.extend("bizagi.workportal.widgets.reportsMenu",{},{init:function(e,t,i){this._super(e,t,i),this.endPoint=["Reports","BAMProcess","BAMTask","AnalyticsProcess","AnalyticsTask","AnalyticsSensor","ResourceBAM"],this.reportsMenu=this.getRawReportsJSON()},getWidgetName:function(){return bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_REPORTS_MENU},renderContent:function(){var e=this.getTemplate("reportsMenu-container");return this.content=$.tmpl(e)},getRawReportsJSON:function(){var e=this;return{Reports:[{displayName:e.resources.getResource("workportal-menu-submenu-BAMMenu"),icon:"bz-icon-folder-outline",show:function(){return!!(bizagi.menuSecurity.BAMProcess||bizagi.menuSecurity.BAMTask||bizagi.menuSecurity.BAMResourceMonitor)},endPoint:"",subItems:"BAM"},{displayName:e.resources.getResource("workportal-menu-submenu-AnalyticsMenu"),icon:"bz-icon-folder-outline",show:function(){return!(!bizagi.menuSecurity.AnalyticsProcess&&!bizagi.menuSecurity.AnalyticsTask)},endPoint:"",subItems:"Analytics"},{displayName:e.resources.getResource("workportal-menu-submenu-AnalyticsSensor"),show:bizagi.menuSecurity.AnalyticsSensor,icon:"AnalyticsSensor bz-icon-rules",endPoint:"AnalyticsSensor",subItems:[]}],BAM:[{displayName:e.resources.getResource("workportal-menu-submenu-AnalyticsProcess"),show:bizagi.menuSecurity.BAMProcess,icon:"BAMProcess bz-icon-cogs",endPoint:"BAMProcess",subItems:[]},{displayName:e.resources.getResource("workportal-menu-submenu-AnalyticsTask"),show:bizagi.menuSecurity.BAMTask,icon:"BAMTask bz-icon-sheet-pencil",endPoint:"BAMTask",subItems:[]},{displayName:e.resources.getResource("workportal-menu-submenu-BAMResourceMonitor"),show:bizagi.menuSecurity.BAMResourceMonitor,icon:"BAMResourceMonitor bz-icon-user-manage",endPoint:"ResourceBAM",subItems:[]}],Analytics:[{displayName:e.resources.getResource("workportal-menu-submenu-AnalyticsProcess"),show:bizagi.menuSecurity.AnalyticsProcess,icon:"AnalyticsProcess bz-icon-cogs",endPoint:"AnalyticsProcess",subItems:[]},{displayName:e.resources.getResource("workportal-menu-submenu-AnalyticsTask"),show:bizagi.menuSecurity.AnalyticsTask,icon:"AnalyticsTask bz-icon-sheet-pencil",endPoint:"AnalyticsTask",subItems:[]}],AnalysisQuery:[]}}}),bizagi.workportal.widgets.widget.extend("bizagi.workportal.widgets.reportsChart",{},{init:function(e,t,i){var r=this;r._super(e,t,i),r.endPoint=bizagi.reporting[i.endPoint],r.endPoint.defaultReport=i.defaultReport||r.endPoint.defaultReport,r.filters=i.filters||{},r.myTeam=[]},getWidgetName:function(){return bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_REPORTS_CHART},renderContent:function(){var e=this,t=e.getTemplate("reportsChart"),i=e.content=$.tmpl(t,e.endPoint);return void 0!==e.endPoint.callBack&&e[e.endPoint.callBack](),i},loadReportingModule:function(){var e=this,t=bizagi.loader,i=new $.Deferred;return t.init(function(){t.start("reporting").then(function(){e.reportingModule=new bizagi.reporting.facade({proxyPrefix:void 0!==bizagi.proxyPrefix?bizagi.proxyPrefix:""}),i.resolve()})}),i},myTeamCallBack:function(){var e=this;return $.when(e.dataService.getDataForMyTeam()).done(function(t){var i=$("li[data-report='bamresourcemonitorworkinprogressteam']",e.content);t.items.length?e.myTeam=t:i.css("display","none")})}}),bizagi.workportal.widgets.widget.extend("bizagi.workportal.widgets.newCase",{},{getWidgetName:function(){return bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_NEWCASE},renderContent:function(){var e=this.getTemplate("newCase");return this.content=$.tmpl(e)},createNewCase:function(e,t){var i=this,r=new $.Deferred;return bizagi.loader.start("rendering").then(function(){bizagi.loader.start("plans-view").then(function(){$.when(i.dataService.startProcess({idProcess:e,isAdhocProcess:t})).then(function(e){i.onStartProcessDone(e),r.resolve(e)})})}),r.promise()},createNewCaseWithIdOrganization:function(e,t){var i=this,r=new $.Deferred;return bizagi.loader.start("rendering").then(function(){bizagi.loader.start("plans-view").then(function(){$.when(i.dataService.startProcess({idProcess:e,idOrganization:t})).then(function(e){i.onStartProcessDone(e),r.resolve(e)})})}),r.promise()},onStartProcessDone:function(e){this.publish("executeAction",{action:bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_ROUTING,idCase:e.caseInfo.idCase,radNumber:e.radNumber,formsRenderVersion:void 0!==e.caseInfo.isOfflineForm?e.caseInfo.formsRenderVersion:0,isOfflineForm:void 0!==e.caseInfo.isOfflineForm&&e.caseInfo.isOfflineForm,data:e})}}),bizagi.workportal.widgets.widget.extend("bizagi.workportal.widgets.subMenu",{},{getWidgetName:function(){return bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_SUBMENU},renderContent:function(){var e=this.workportalFacade.getTemplate("menu.submenu");return this.content=$.tmpl(e)}}),bizagi.workportal.widgets.widget.extend("bizagi.workportal.widgets.search",{},{getWidgetName:function(){return bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_SEARCH},renderContent:function(){var e=this.workportalFacade.getTemplate("search");return this.content=$.tmpl(e)},routingExecute:function(e){if(null==e)return!1;var t=e.find("#idCase").val(),i=e.find("#idWorkItem").val(),r=e.find("#idTask").val(),a=e.find("#eventAsTasks").val()||!1;this.publish("executeAction",{action:bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_ROUTING,idCase:t,idWorkItem:i,idTask:r,eventAsTasks:a})}}),bizagi.workportal.widgets.widget.extend("bizagi.workportal.widgets.queries",{},{getWidgetName:function(){return bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_QUERIES},renderContent:function(){var e=this.getTemplate("queries"),t=this.content=$.tmpl(e);return this.loadtemplates(),t},loadtemplates:function(){}}),bizagi.workportal.widgets.listCases.extend("bizagi.workportal.widgets.queryform",{},{getWidgetName:function(){return bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_QUERYFORM},renderContent:function(){bizagi.util.parseBoolean(bizagi.override.disableFrankensteinQueryForms)&&!this.params.notMigratedUrl?this.modifiedRender():this.frankensteinRenderContent()},modifiedRender:function(){var e,t=this.getTemplate("queryform-wrapper");return e=this.content=$.tmpl(t,{}),this.loadtemplates(),e},loadtemplates:function(){},frankensteinRenderContent:function(){var e=this,t=e.getTemplate("queryform"),i="",r=e.params.idQueryForm||"",a=e.params.idStoredQuery||"",o=e.params.idCube||"";switch(e.params.queryFormAction){case"edit":i=e.dataService.getUrl({endPoint:"query-form-edit"})+"?idStoredQuery="+a+"&idQueryForm="+r;break;case"loadPrevious":i="App/ListaDetalle/listaitems.aspx?"+e.dataService.lastQueryFullKey;break;default:i=e.dataService.getUrl({endPoint:"query-form"})+"?idQueryForm="+r,i=""!=a?i+"&idStoredQuery="+a:i,i=""!=o?i+"&idCube="+o:i}return e.params.notMigratedUrl&&(i="App/"+e.params.notMigratedUrl),e.content=$.tmpl(t,{queryFormURL:i})}}),bizagi.workportal.widgets.widget.extend("bizagi.workportal.widgets.genericiframe",{},{getWidgetName:function(){return bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_GENERICIFRAME},init:function(e,t,i){this._super(e,t,i),this.loadTemplates({genericiframe:bizagi.getTemplate("bizagi.workportal.desktop.widget.genericiframe"),useNewEngine:!1})},renderContent:function(){var e=this.getTemplate("genericiframe"),t={widgetURL:this.params.widgetURL};return this.content=$.tmpl(e,t)}}),bizagi.workportal.widgets.widget.extend("bizagi.workportal.widgets.async",{ASYNC_CHECK_TIMER:3e3},{init:function(e,t,i){this._super(e,t,i)},getWidgetName:function(){return bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_ASYNC},renderContent:function(){var e=new $.Deferred;return this.checkAsycnExecutionState(e),e.promise()},checkAsycnExecutionState:function(e){var t=this;$.when(t.dataService.getAsynchExecutionState({idCase:t.params.idCase})).done(function(i){var r=t.getTemplate("async");"Error"==i.state&&null!=i.errorMessage&&(i.errorMessage=bizagi.localization.getResource("render-async-error")),t.content=$.tmpl(r,i),"Processing"==i.state?0==i.errorMessage.length&&setTimeout(function(){t.publish("changeWidget",t.params)},t.Class.ASYNC_CHECK_TIMER):"Finished"==i.state&&t.publish("executeAction",{action:bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_ROUTING,idCase:t.params.idCase}),e.resolve(t.content)})}}),bizagi.workportal.controllers.main.extend("bizagi.workportal.controllers.main",{},{postRender:function(){var e=this,t=e.getContent();$(window).width()>1024?e.doResize():(0==t.width()&&t.width($(window).width()),0==t.height()&&t.height($(window).height()),e.doResize(),window.onorientationchange=function(){t.width($(window).width()),t.height($(window).height()),e.doResize(),$(".modal").remove()})},doResize:function(){var e=this,t=e.getContent(),i=t.height();0!=i&&(e.resizeContainer(t,i),e.menu&&e.menu.performResizeLayout(),e.workarea&&e.workarea.performResizeLayout())},performResizeLayout:function(){this.doResize()},renderContent:function(){return this._super()},showDialogWidget:function(e){var t=new bizagi.workportal.tablet.widgets.dialog(this.dataService,this.workportalFacade);return t.renderWidget(e),bizagi.workportal.tablet.dialogStack=bizagi.workportal.tablet.dialogStack||[],bizagi.workportal.tablet.dialogStack.push(t),t},closeCurrentDialog:function(e){(bizagi.workportal.tablet.dialogStack=bizagi.workportal.tablet.dialogStack||[],bizagi.workportal.tablet.dialogStack.length>0)&&bizagi.workportal.tablet.dialogStack.pop().close()},popupWidget:function(e){var t=new bizagi.workportal.tablet.widgets.popup(this.dataService,this.workportalFacade,e.options);t.renderWidget(e),e.options&&e.options.closed&&$.when(t.closed()).done(function(){e.options.closed()})},appendWidgetTo:function(e){var t;$.when(this.workportalFacade.getWidget(e.widgetName,e)).pipe(function(i){return(t=i).render(e)}).done(function(){var i=t.getContent();$(e.options.appendToElement).append(i)})},showAddToHomeScreenMsg:function(){var e=this.getResource("workportal-add-to-homescreen");$("<div>").addClass("add-to-homescreen").html(e).appendTo("body"),$("<span>").addClass("close-btn").appendTo(".add-to-homescreen"),$(".add-to-homescreen","body").click(function(){$(this).fadeOut()})},cleanWidgets:function(){if(bizagi.workportal.tablet.popup)if(bizagi.workportal.tablet.popup.instance)void 0!==bizagi.workportal.tablet.popup.instance.dontClose&&(bizagi.workportal.tablet.popup.instance.dontClose=!1,bizagi.workportal.tablet.popup.instance.close());else{var e=$(".modal .complex-frame");e.length>0&&e.closest(".modal").remove()}},executeAction:function(e){this.workportalFacade.getAction(e.action).execute(e)},renderWorkarea:function(){var e=this,t=e.workarea;if(t){var i=e.getComponentContainer("workarea");e.cleanWidgets(),i.empty(),bizagi.util.isEmpty(e.currentWidget)||"none"==e.currentWidget||(e.currentWidgetParams=$.extend({},e.currentWidgetParams,{menu:e.getMenu()}),e.loadWidgetFromFacade(t,i))}}}),bizagi.workportal.controllers.menu.extend("bizagi.workportal.controllers.menu",{DEVICE_TABLET_IOS:"tablet",DEVICE_TABLET_ANDROID:"tablet_android"},{renderContent:function(){var e=this,t=e.workportalFacade.getTemplate("menu"),i=new $.Deferred;return bizagi.util.hasOfflineFormsEnabled()?e.hasOfflineForm=!0:(BIZAGI_ENABLE_OFFLINE_FORMS=!1,e.hasOfflineForm=BIZAGI_ENABLE_OFFLINE_FORMS),e.modeInbox=e.dataService.online||!e.hasOfflineForm?"inbox":"true",null===bizagi.util.getItemLocalStorage("inputtray")&&bizagi.util.setItemLocalStorage("inputtray",e.modeInbox),$.when(e.dataService.getCurrentUser()).done(function(r){bizagi.currentUser=r;var a=e.content=$.tmpl(t,$.extend(r,{environment:bizagi.loader.environment||"",build:bizagi.loader.build,base64image:"",isOnline:e.dataService.online||!e.hasOfflineForm,hasOfflineForm:e.hasOfflineForm}));i.resolve(a)}),i.promise()},postRender:function(){var e=this,t=e.getContent();e.toggleMenuVisibility(),e.renderMenuItems(),e.toggleInboxViews(),$(t).delegate("#logout","click",function(){0==e.dataService.online?1==window.confirm(e.resources.getResource("confirmation-savebox-message3"))&&e.defaultLogout():$.when(e.dataService.logoutUser()).done(function(t){e.defaultLogout()}).fail(function(t){e.defaultLogout()})})},defaultLogout:function(){bizagi.util.isCordovaSupported()?window.location=bizagi.services.ajax.logoutPage:window.location.replace("")},toggleMenu:function(){var e=this,t=e.getContent();$(t).toggleClass("show-menu hide-menu"),$(t).hasClass("show-menu")?$(".ui-bizagi-workportal-workarea").bind("click.menu",function(){e.toggleMenu()}):($(".modal").remove(),$(".ui-bizagi-workportal-workarea").unbind("click.menu"))},toggleMenuVisibility:function(){var e=this,t=e.getContent();$("#menu-visible-bar",t).delegate("#menu-toggler","click",function(){e.toggleMenu()})},renderMenuItems:function(){var e=this,t=bizagi.detectDevice(),i=e.getContent(),r=e.workportalFacade.getTemplate("menu.items");e.security=new bizagi.workportal.command.security(e.dataService),$.when(e.security.getSecurity()).done(function(a){var o=bizagi.detectDevice()===e.Class.DEVICE_TABLET_ANDROID&&bizagi.util.isCordovaSupported();a.CurrentUserAdministration=!1,a.Admin=!1,a.enableSettings=o||!1,a.hasOfflineForm=e.hasOfflineForm;var s=$.tmpl(r,a,{reportsSecurity:function(){return!(!a.AnalysisReports&&!a.AnalysisQueries)}});$("#menu-items",i).append(s),$(i).delegate("#menu-reports","click",function(t){t.stopPropagation(),e.renderReportsMenu()}),$(i).delegate("#new-case","click",function(t){t.stopPropagation(),(e.dataService.online||e.hasOfflineForm)&&e.showNewCasePopup()}),e.hasOfflineForm?$(i).delegate("#inbox-shortcut","click",function(i){i.stopPropagation();var r=e.getCurrentWidget(),a=bizagi.util.getItemLocalStorage("inputtray");"inbox"!==a||e.dataService.online||(a="true"),e.publish("changeWidget",{widgetName:r,inputtray:a}),bizagi.workportal.tablet.popup.closePopupInstance(),t==e.Class.DEVICE_TABLET_ANDROID?$(".modal").remove():e.toggleMenu(),e.hideBackButton(),e.hideReportsIcon()}):$(i).delegate("#inbox-shortcut","click",function(i){i.stopPropagation();var r=e.getCurrentWidget();e.publish("changeWidget",{widgetName:r}),bizagi.workportal.tablet.popup.closePopupInstance(),t==e.Class.DEVICE_TABLET_ANDROID?$(".modal").remove():e.toggleMenu(),e.hideBackButton(),e.hideReportsIcon()}),$(i).delegate("#settings-shortcut","click",function(t){t.stopPropagation(),bizagi.detectDevice()==e.Class.DEVICE_TABLET_ANDROID&&bizagi.util.isCordovaSupported()&&window.Bizagi.showSettingsActivity()}),$(i).delegate("#search","click",function(t){t.stopPropagation(),e.showSearchPopup($(this))}),$(i).delegate("#preferences","click",function(e){e.preventDefault()})})},renderReportsMenu:function(){var e=this,t=e.getContent();$("#menu-items #menuListReports",t).addClass("active"),"subMenu"!=e.currentPopup?(e.currentPopup="subMenu",e.publish("popupWidget",{widgetName:bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_REPORTS_MENU,options:{sourceElement:"#menu-items #menuListReports",width:"339",height:"auto",offset:"10 25",activeScroll:!0,css_class:"bz-wp-menu-reports",closed:function(){e.currentPopup=null,$("#menu-items #menuListReports",t).removeClass("active")},menuData:e.getSubMenuData(e.jsonSecurityList,"AnalysisReports")}})):bizagi.workportal.tablet.popup.closePopupInstance()},getSubMenuData:function(e,t){var i=this,r=[];return e=e||i.security.getRawData()||{},i.checkRootCategory(e,t)&&$.each(i.getsRootCategory(e,t),function(e,t){r.push({categoryKey:t,categoryName:i.getResource("workportal-menu-submenu-"+t),categoryUrl:i.dataService.getUrl({endPoint:t})})}),r},checkRootCategory:function(e,t){if(null!=e.permissions)for(var i=0;i<e.permissions.length;i++)if(null!=e.permissions[i][t])return!0;return!1},getsRootCategory:function(e,t){for(var i=0;i<e.permissions.length;i++)if(null!=e.permissions[i][t])return e.permissions[i][t];return{}},showMenuPopup:function(e){var t=this,i=t.getContent(),r=new bizagi.workportal.tablet.popup(t.dataService,t.workportalFacade,{sourceElement:e.buttonSelector,my:e.my||"center top",at:e.at||"center bottom",offset:e.offset,height:e.height,width:e.width,css_class:"search-widget"});if(t.currentPopup!=e.buttonSelector){t.currentPopup=e.buttonSelector;r.render($.tmpl(t.workportalFacade.getTemplate(e.template)),{elmToAppend:i});$(e.buttonSelector,i).addClass("active"),$.when(r.closed()).done(function(){t.currentPopup=null,$(e.buttonSelector,i).removeClass("active")})}else bizagi.workportal.tablet.popup.closePopupInstance()},showSearchPopup:function(e){var t=this,i=this.getContent(),r=bizagi.detectDevice();$(".modal").remove();var a=function(){t.currentPopup=null,$("#menu-items #search",i).removeClass("active"),$("#inputSearchParent").remove(),$(document).unbind("click"),$("#menu-items button").unbind("click"),$("#menu-items #search").unbind("processClicked")};if("search"==t.currentPopup)return bizagi.log("close popup instance",t.currentPopup),void a();t.currentPopup="search";var o=$.tmpl(t.workportalFacade.getTemplate("search-field"));$("body").append(o);var s=$("#menuQuery");s.bind("click",function(e){e.stopPropagation(),e.preventDefault()}),r!=t.Class.DEVICE_TABLET_ANDROID?$("#inputSearchParent").position({my:"center top",at:"bottom top",of:"#search",collision:"none",delay:800}).offset({top:55,left:"55%"}):$("#inputSearchParent").position({my:"center top",at:"bottom top",of:"#search",collision:"flipfit",delay:800}).offset({top:48,left:"55%"}),$(document).click(function(e){0==$("#inputSearchParent").has(e.srcElement).length&&a()}),$("#menu-items button").click(function(){"search"!=this.id&&a()}),$("#menuQuery").bind("keypress",function(e){13==e.keyCode&&""!=s.val()&&s.val()!=t.getResource("workportal-menu-search")&&t.publish("executeAction",{action:bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_SEARCH,radNumber:s.val(),onlyUserWorkItems:!1})}),$("#menu-items #search").bind("closePopUp",function(){a()})},showNewCasePopup:function(){var e=this,t=e.getContent();$(".modal").remove(),$("#menu-items #new-case",t).addClass("active");var i=function(){e.currentPopup=null,$("#menu-items #new-case",t).removeClass("active"),$("#newCaseParent").remove(),$(document).unbind("click"),$("#menu-items button").unbind("click"),$("#menu-items #new-case").unbind("processClicked")};if("newCase"==e.currentPopup)return bizagi.log("close popup instance",e.currentPopup),void i();e.popupOpened=!0,e.currentPopup="newCase",e.publish("appendWidgetTo",{widgetName:bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_NEWCASE,options:{sourceElement:"#menu-items #new-case","max-height":"746",height:"auto",width:"339",offset:"10 25",activeScroll:!1,appendToElement:"body"}}),$("#newCaseParent").position({my:"center top",at:"bottom top",of:"#new-case",collision:"none",delay:800}).offset({top:55,left:"55%"}),$(document).click(function(e){0==$("#newCaseParent").has(e.srcElement).length&&i()}),$("#menu-items button").click(function(){"new-case"!=this.id&&i()}),$("#menu-items #new-case").bind("processClicked",function(){i()}),e.hideReportsIcon()},showBackButton:function(){var e=this.hasOwnProperty("getContent")?this.getContent():$("#menu-visible-bar");$("#submenu-button",e).hide(),$(".back-arrow-container",e).show()},hideBackButton:function(){var e=this.getContent();bizagi.detectDevice()!=this.Class.DEVICE_TABLET_ANDROID&&$("#submenu-button",e).show(),$(".back-arrow-container",e).hide()},showReportsIcon:function(){var e=this.hasOwnProperty("getContent")?this.getContent():$("#menu-visible-bar");$("#submenu-button",e).hide(),$(".back-arrow-container",e).hide(),$(".reports-icon-container",e).show(),bizagi.detectDevice()!=this.Class.DEVICE_TABLET_ANDROID&&this.toggleMenu()},hideReportsIcon:function(){var e=this.getContent();bizagi.detectDevice()!=this.Class.DEVICE_TABLET_ANDROID&&$("#submenu-button",e).show(),$(".reports-icon-container",e).hide(),$(".back-arrow-container",e).hide()},toggleInboxViews:function(){var e=this,t=e.getContent(),i=bizagi.detectDevice();$(t).delegate(".back-arrow-container","click",function(){var i=e.getCurrentWidget(),r=bizagi.util.getItemLocalStorage("inputtray");e.publish("changeWidget",{widgetName:i,inputtray:r}),$(t).hasClass("show-menu")&&e.toggleMenu(),e.hideBackButton()}),e.hasOfflineForm?$(t).delegate("#submenu-button","click",function(){var t=$(this);if($(".modal").remove(),"true"==t.data("open"))return bizagi.workportal.tablet.popup.closePopupInstance(),void t.data("open","false");$(this).data("open","true");var r=e.workportalFacade.getTemplate("menu.modal.input-tray"),a=new bizagi.workportal.tablet.popup(e.dataService,e.workportalFacade,{sourceElement:".page-title",offset:"40 35",css_class:"input-tray"}),o=$.tmpl(r,{isOnline:e.dataService.online});a.render(o);var s=$(".modal").offset();i!==e.Class.DEVICE_TABLET_ANDROID?($(".modal").offset({top:s.top+20,left:s.left}),$(".modal .selectarrow").css({left:"28px"})):$(".modal").offset({top:s.top+15,left:s.left-17}),$(".ui-bizagi-workportal-menu-input-tray-field",o).one("click",function(){var i=void 0!==$(this).data("tray")?$(this).data("tray"):$(".ui-bizagi-workportal-menu-input-tray-field",$(this)).data("tray");if(e.dataService.online||"inbox"!==i.trim()){$(".page-title",t).text($(this).text().trim()),$(".bz-cm-icon",t).replaceWith($(".bz-cm-icon",$(this))),bizagi.workportal.tablet.popup.closePopupInstance(),t.data("open","false");var r=e.modeInbox;switch(i){case"outbox":r="false";break;case"drafts":r="true";break;case"inbox":r="inbox"}bizagi.util.setItemLocalStorage("inputtray",r),e.publish("changeWidget",{widgetName:bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX,inputtray:r})}})}):($("#submenu-button .arrow-down",t).remove(),$("#submenu-button .page-title",t).css("left",40),$(t).delegate("#submenu-button","click",function(t){t.stopPropagation();var i=e.getCurrentWidget();$(".modal").remove(),e.publish("changeWidget",{widgetName:i})})),$("#inbox-view-toggler",t).click(function(){if($(".modal").remove(),$("#inbox-view-toggler",t).addClass("active"),"toggleInboxViews"!=e.currentPopup){var r=new bizagi.workportal.tablet.popup(e.dataService,e.workportalFacade,{sourceElement:"#inbox-view-toggler",offset:"-38 4",css_class:"eye-popup"});e.popupOpened=!0;var a=e.workportalFacade.getTemplate("menu.modal.items.inbox");r.render($.tmpl(a));var o=$(".modal").offset();i!==e.Class.DEVICE_TABLET_ANDROID?$(".modal").offset({top:o.top+10,left:o.left-30}):$(".modal").offset({top:o.top+5,left:o.left-40}),$(".modal .selectarrow").css({left:"85px"}),$(".modal .content").delegate(".change-to-default-view","click",function(){var i=bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX,a=bizagi.util.getItemLocalStorage("inputtray");"inbox"!==a||e.dataService.online||(a="true"),e.publish("changeWidget",{widgetName:i,inputtray:a}),r.close(),$(t).hasClass("show-menu")&&e.toggleMenu()}),$(".modal .content").delegate(".change-to-grid-view","click",function(){var i=bizagi.util.getItemLocalStorage("inputtray");!e.dataService.online||e.dataService.online&&"inbox"!==i?r.close():(e.publish("changeWidget",{widgetName:bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX_GRID}),r.close(),$(t).hasClass("show-menu")&&e.toggleMenu())})}else bizagi.workportal.tablet.popup.closePopupInstance()})},getCurrentWidget:function(){var e,t=bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX,i=bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX_GRID;switch(bizagi.cookie("bizagiDefaultWidget")){case t:e=t;break;case i:default:e=i}return e}}),bizagi.workportal.controllers.main.extend("bizagi.workportal.controllers.main",{},{performResizeLayout:function(){this._super();var e=this.getContent();"tablet_android"==bizagi.detectDevice()&&($(".render-form .column-footbar",e).hide(),setTimeout(function(){$(".render-form .column-footbar",e).show()},150))}}),$(window).bind("resize",function(){"tablet_android"!=bizagi.detectDevice()&&bizagi.workportal.tablet.popup.closePopupInstance()}),$.Class.extend("bizagi.workportal.tablet.popup",{closePopupInstance:function(){bizagi.workportal.tablet.popup.instance&&bizagi.workportal.tablet.popup.instance.close()}},{init:function(e,t,i){this.dataService=e,this.workportalFacade=t,i=i||{},this.sourceElement=i.sourceElement,this.my=i.my||"center top",this.at=i.at||"center bottom",this.css_class=i.css_class||"",this.offset=i.offset||"18 -20",this.activeScroll=i.activeScroll||!1,this.dontClose=i.dontClose||!1,this.scrollElement=i.scrollElement||".content",i.insertAfter&&(this.insertAfter=i.insertAfter)},render:function(e,t){var i=this,r=window.document,a=i.workportalFacade.getTemplate("popup"),o=0==(t=t||{}).length||null==t.elmToAppend?"body":t.elmToAppend;i.closeDeferred=new $.Deferred,i.Class.closePopupInstance(),bizagi.workportal.tablet.popup.instance=this,i.popup=$.tmpl(a,{activeScroll:i.activeScroll}),i.popup.addClass(i.css_class),$(".content",i.popup).append(e),i.insertAfter?$(i.insertAfter).after(i.popup):i.popup.appendTo(o,r),i.showPopup(i.popup)},showPopup:function(e){var t=window.document,i=this;i.popupWidth&&e.width(i.popupWidth),i.popupHeight&&e.height(i.popupHeight),i.sourceElement?i.insertAfter?(e.find(".selectarrow").hide(),e.css({display:"inline-block",float:"left",position:"relative",left:"50%",top:"20px","z-index":1})):e.position({my:i.my,at:i.at,of:$(i.sourceElement),collision:"none",offset:i.offset}):(e.css("left",($(window).width()-e.width())/2),e.css("top",($(window).height()-e.height())/2)),setTimeout(function(){e.click(function(e){e.stopPropagation()}),$(t).one("click",function(){i.close()})},100)},closed:function(){return this.closeDeferred},close:function(){var e=window.document;$(e).unbind("click"),this.dontClose||(this.popup.remove(),bizagi.workportal.tablet.popup.instance=null,this.closeDeferred.resolve())},getContent:function(){return this.popup}}),$.Class.extend("bizagi.workportal.tablet.widgets.dialog",{DIALOG_WIDTH:800,DIALOG_HEIGHT:550},{init:function(e,t){this.dataService=e,this.workportalFacade=t},renderWidget:function(e){var t,i=this,r=window.document,a=new $.Deferred;return $.when(i.workportalFacade.getWidget(e.widgetName,e)).pipe(function(e){return(t=e).render()}).done(function(){var o=t.getContent();i.dialogBox=$("<div />").append(o).appendTo("body",r),i.showDialogBox(i.dialogBox,e).done(function(e){a.resolve()})}),a.promise()},showDialogBox:function(e,t){var i=new $.Deferred;return i.resolve(),i.promise()},close:function(){}}),bizagi.workportal.tablet.popup.extend("bizagi.workportal.tablet.widgets.popup",{},{renderWidget:function(e){var t,i=this;$.when(i.workportalFacade.getWidget(e.widgetName,e)).pipe(function(e){return t=e,i.register(t),t.render()}).done(function(){var e=t.getContent();i.render(e)})},register:function(e){e.registerCallback&&e.registerCallback(this)}}),bizagi.workportal.widgets.inbox.extend("bizagi.workportal.widgets.inbox",{},{init:function(e,t,i){var r=this;r._super(e,t,i),r.dataService.online||void 0!==i.inputtray||(i.inputtray="true"),bizagi.workportal.state.inbox=bizagi.workportal.state.inbox||{},bizagi.workportal.state.inbox=$.extend(bizagi.workportal.state.inbox,{inputtray:i.inputtray}),r.params=$.extend(r.params,{inputtray:i.inputtray||"inbox"}),r.subscribe("toggleProcessesColumn",r.toggleProcessesColumn())},postRender:function(){var e=this,t=bizagi.workportal.state.inbox.taskState||"all";e.renderProcessesByTaskState(t),bizagi.referrerParams=e.params.restoreStatus&&bizagi.referrerParams||{},e.params.taskState=e.params.taskState||bizagi.referrerParams.taskState||t;var i=null;!e.params||"false"!=e.params.inputtray&&"true"!=e.params.inputtray||(i=e.params),$.when(e.dataService.getInboxSummary(i)).done(function(t){e.updateSummary(t),e.changeTaskState(e.taskState),e.taskStateFilterSelection(),e.configureSummaryColumnSlider(),e.subscribePagerActions()}),e.configureSlider();var r=bizagi.workportal.state.inbox.idWorkflow,a=bizagi.workportal.state.inbox.pageNumber||1;e.loadCasesList(r,a);var o=void 0===bizagi.workportal.state.inbox.showProcessesColumn||bizagi.workportal.state.inbox.showProcessesColumn;e.toggleProcessesColumn(o)},configureSlider:function(){var e=this,t=e.getContent();$("#summary-column-slider",t).bind("click",function(){e.toggleProcessesColumn(!e.showProcessesColumn)})},updateSummary:function(e){var t=this.getContent();$(".ui-bizagi-wp-app-inbox-tab#red",t).find(".toolTip").html(bizagi.util.shortNumber(e.Red)),$(".ui-bizagi-wp-app-inbox-tab#green",t).find(".toolTip").html(bizagi.util.shortNumber(e.Green)),$(".ui-bizagi-wp-app-inbox-tab#yellow",t).find(".toolTip").html(bizagi.util.shortNumber(e.Yellow))},renderProcessesByTaskState:function(e){var t=this,i=t.getContent();t.taskState="",t.onlyFavorites="";var r=t.workportalFacade.getTemplate("inbox.common.processes");"Favorites"==e?(t.taskState="all",t.onlyFavorites="true"):(t.taskState=e,t.onlyFavorites=""),$.when(t.dataService.getAllProcesses({taskState:t.taskState,onlyFavorites:t.onlyFavorites,inputtray:t.params.inputtray||"inbox"})).done(function(e){$("#process-column > div.scroll-content",i).empty(),$(".ui-bizagi-loading-icon",i).hide(),$("#process-column > div.scroll-content",i).append($.tmpl(r,e)),$(".workflows-list > li[data-id-workflow="+t.idWorkflow+"]",i).addClass("list-item-selected"),t.subscribeWorkflowSelection(),t.subscribeFavoritesProcesses()})},renderSummaryForm:function(e){var t=this,i=new $.Deferred,r=void 0!==t.dataService.serviceLocator.proxyPrefix?t.dataService.serviceLocator.proxyPrefix:"",a=new bizagi.rendering.facade({proxyPrefix:r});return a.execute({canvas:e,summaryForm:!0,idCase:t.idCase}),t.renderingFacade=a,setTimeout(function(){t.resizeLayout()},1e3),$.when(a.ready()).done(function(){i.resolve()}),i.promise()},taskStateFilterSelection:function(){var e=this,t=e.getContent();$("#process-filters",t).delegate("li","click",function(i){i.preventDefault(),$("#case-column .scroll-content, #summary-column .scroll-content",t).empty(),$(".pager-container",t).hide(),$(".ui-bizagi-loading-icon",t).hide();var r=$(this).attr("data-task-state");e.changeTaskState(r),e.loadCasesList("","1")})},changeTaskState:function(e){var t=this.getContent();bizagi.workportal.state.inbox.taskState=e,this.renderProcessesByTaskState(e),$("#process-filters li",t).removeClass("filter-active"),$("#process-filters li[data-task-state="+e+"]",t).addClass("filter-active")},subscribeWorkflowSelection:function(){var e=this,t=e.getContent();$(".workflows-list > li",t).bind("click",function(i){i.preventDefault(),i.stopPropagation(),$("#case-column div.scroll-content, #summary-column div.scroll-content",t).empty(),$("#summary-column .ui-bizagi-loading-icon",t).hide(),$(".workflows-list li",t).removeClass("list-item-selected");var r=$(this).data("id-workflow");e.loadCasesList(r,"1"),$(".pager-container",t).hide()})},loadCasesList:function(idWorkflow,pageNumber){var self=this,context=self.getContent(),taskState=self.taskState,casesTmpl=self.workportalFacade.getTemplate("inbox.common.case-list"),casesListContainer=$("#case-column > div.scroll-content",context);self.idWorkflow=idWorkflow,$(".workflows-list > li[data-id-workflow="+self.idWorkflow+"]",context).addClass("list-item-selected"),bizagi.workportal.state.inbox.idWorkflow=idWorkflow,bizagi.workportal.state.inbox.pageNumber=pageNumber;var params={taskState:taskState,idWorkflow:idWorkflow,page:pageNumber,onlyFavorites:eval(self.onlyFavorites),inputtray:self.params.inputtray||"inbox"};$.when(self.dataService.getCasesByWorkflow(params)).done(function(e){casesListContainer.empty(),$.tmpl(casesTmpl,e,{replaceLineBreak:bizagi.util.replaceLineBreak,formatMonetaryCell:bizagi.util.formatMonetaryCell,formatDecimalCell:bizagi.util.formatDecimalCell}).appendTo(casesListContainer),self.handleCaseSelection(),self.subscribeDeleteSelectedCase(idWorkflow,e.page,e.totalPages),self.subscribeFavoritesCases(),self.updatePager(idWorkflow,e.page,e.totalPages)})},subscribePagerActions:function(){var e=this,t=e.getContent(),i=$(".pager-container",t);i.delegate("button","click",function(){$("#case-column div.scroll-content, #summary-column .scroll-content",t).empty(),$("#summary-column .ui-bizagi-loading-icon",t).hide();var r=i.data("id-workflow"),a=$(this).prop("id");e.loadCasesList(r,a)})},updatePager:function(e,t,i){var r=this.getContent(),a=$(".pager-container",r);if(a.data("id-workflow",e),a.empty(),i>1){a.show();for(var o=1;o<=i;o++)o==t?a.append($("<button>").prop("id",o).prop("class","current-page").text(o)):a.append($("<button>").prop("id",o).text(o))}},handleCaseSelection:function(){var e=this,t=e.getContent();$("ul.cases-list > li",t).bind("click",function(){$("#summary-column .scroll-content",t).empty(),$("ul.cases-list > li",t).removeClass("list-item-selected"),$(this).closest("li").addClass("list-item-selected");var i={};i.idCase=$(this).closest("li").data("id-case"),i.isOfflineForm=$(this).closest("li").data("isofflineform"),e.loadCaseSummary(i),e.toggleProcessesColumn(!1)})},loadCaseSummary:function(e){var t=this,i=t.getContent(),r=t.workportalFacade.getTemplate("inbox.common.case-summary"),a=$("#summary-column .scroll-content",i);$.when(t.dataService.getCaseSummary(e)).done(function(o){a.empty(),e.isOfflineForm&&(o.caseNumber=o.caseNumber||e.idCase),$.tmpl(r,o).appendTo(a),$("#ui-bizagi-details-tabs",i).tabs({activate:function(e,r){switch(null==r?"formSummary":r.newPanel.selector.replace("#","")){case"tab-assignees":null==s.assignees&&$.when(t.dataService.summaryAssigness({idCase:t.idCase})).done(function(e){t.caseSummaryTemplateAssigness=t.workportalFacade.getTemplate("inbox-common-case-summary-assignees"),(n=$.tmpl(t.caseSummaryTemplateAssigness,e)).appendTo($("#tab-assignees",i)),s.assignees=n});break;case"tab-events":null==s.events&&$.when(t.dataService.summaryCaseEvents({idCase:t.idCase})).done(function(e){t.caseSummaryTemplateEvents=t.workportalFacade.getTemplate("inbox-common-case-summary-events"),(n=$.tmpl(t.caseSummaryTemplateEvents,e)).appendTo($("#tab-events",i)),s.events=n,n.delegate(".summaryLink","click",function(){t.routingExecute($(this))})})}}});var s={},n="";t.idCase=e.idCase,$("#ui-bizagi-details-tabs",i).trigger("tabsselect"),t.subscribeWorkOnItButtonClick()})},subscribeWorkOnItButtonClick:function(){var e=this,t=e.getContent();$(".activity-box",t).delegate('input[type="button"]',"click",function(){bizagi.workportal.controllers.menu.prototype.showBackButton.call(this);var t=$(this).data("is-offline");e.publish("executeAction",{action:bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_ROUTING,idCase:$(this).data("id-case"),idWorkItem:$(this).data("id-workitem"),isOfflineForm:t,formsRenderVersion:1==t?2:0})})},changeNetworkState:function(){var e=this,t=bizagi.util.getItemLocalStorage("inputtray");e.dataService.online?(e.status.removeClass("offline"),e.status.addClass("online"),e.status.text(e.getResource("workportal-offline-status-online")),null==t||"true"!==t&&"false"!==t||($("#submenu-button span.page-title").text(bizagi.localization.getResource("workportal-menu-inbox")),t="inbox",bizagi.util.setItemLocalStorage("inputtray",t),e.publish("changeWidget",{widgetName:bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX,inputtray:t}))):(e.status.removeClass("online"),e.status.addClass("offline"),e.status.text(e.getResource("workportal-offline-status-offline")),null!=t&&"inbox"===t&&($("#submenu-button span.page-title").text(bizagi.localization.getResource("workportal-menu-drafts")),t="true",bizagi.util.setItemLocalStorage("inputtray",t),e.publish("changeWidget",{widgetName:bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX,inputtray:t})))},configureSummaryColumnSlider:function(){var e=this,t=e.getContent();e.status=$(".bz-wp-status-notification",t),e.dataService.online||e.changeNetworkState(),$(document).off("online.inbox"),$(document).off("offline.inbox"),$(document).on("online.inbox",function(){e.dataService.online=!0,e.changeNetworkState()}),$(document).on("offline.inbox",function(){e.dataService.online=!1,e.changeNetworkState()})},toggleProcessesColumn:function(e){var t=this.getContent();this.showProcessesColumn=bizagi.workportal.state.inbox.showProcessesColumn=e,e?($("#case-column",t).removeClass("slide-case-column-to-left"),$("#summary-column",t).removeClass("slide-summary-column-to-left slide-summary-column-to-default")):($("#case-column",t).addClass("slide-case-column-to-left"),$("#summary-column",t).addClass("slide-summary-column-to-left slide-summary-column-to-default"))},subscribeFavoritesProcesses:function(){var e=this,t=e.getContent(),i=$("#process-column",t);$("li > .icon.favorite-true, li > .icon.favorite-false",i).click(function(t){t.stopPropagation();var i,r=$(this);"false"==r.closest("li").attr("data-isfavorite")?(i={idObject:r.closest("li").attr("data-guidwfclass"),favoriteType:"WFCLASS"},$.when(e.dataService.addFavorite(i)).done(function(e){r.attr("data-favorite-guidfavorite",e.idFavorites),r.closest("li").attr("data-isfavorite","true"),r.removeClass("favorite-false").addClass("favorite-true")})):(i={idObject:r.attr("data-favorite-guidfavorite"),favoriteType:"WFCLASS"},$.when(e.dataService.delFavorite(i)).done(function(e){r.attr("data-favorite-guidfavorite",""),r.closest("li").attr("data-isfavorite","false"),r.removeClass("favorite-true").addClass("favorite-false")}))})},subscribeFavoritesCases:function(){var e=this,t=e.getContent(),i=$("#case-column",t);$("li .favorite-false, li .favorite-true",i).click(function(t){t.stopPropagation();var i,r=$(this);"false"==r.closest("li").attr("data-isfavorite")?(i={idObject:r.closest("li").attr("data-id-case"),favoriteType:"CASES"},$.when(e.dataService.addFavorite(i)).done(function(e){r.closest("li").attr("data-favorite-guidfavorite",e.idFavorites),r.closest("li").attr("data-isfavorite","true"),r.removeClass("favorite-false").addClass("favorite-true")})):(i={idObject:r.closest("li").attr("data-favorite-guidfavorite"),favoriteType:"CASES"},$.when(e.dataService.delFavorite(i)).done(function(e){r.closest("li").attr("data-favorite-guidfavorite",""),r.closest("li").attr("data-isfavorite","false"),r.removeClass("favorite-true").addClass("favorite-false")}))})},subscribeDeleteSelectedCase:function(e,t,i){var r=this,a=r.getContent();$(".cases-list > li .erase-icon",a).unbind("click"),$(".cases-list > li .erase-icon",a).bind("click",function(o){o.preventDefault(),o.stopPropagation();var s=$(this).parent().parent().data("id-case"),n=bizagi.localization.getResource("workportal-widget-inbox-delete-case-title");$.when(bizagi.showConfirmationBox(n,"Bizagi","warning")).done(function(){var o={idCase:s};$.when(r.dataService.deleteCase(o)).done(function(){e=e||"",t=t||"1",i=i||"1";var o=bizagi.workportal.state.inbox.taskState||"all";$("#case-column").hasClass("slide-case-column-to-left")&&($("#summary-column-slider").click(),$("#case-column .scroll-content, #summary-column .scroll-content",a).empty()),r.renderProcessesByTaskState(o),r.loadCasesList(e,t)}).fail(function(e){bizagi.log(e)})})})}}),bizagi.workportal.widgets.inboxGrid.extend("bizagi.workportal.widgets.inboxGrid",{},{init:function(e,t,i){this._super(e,t,i),bizagi.workportal.state.inboxgrid=bizagi.workportal.state.inboxgrid||{}},renderSummaryForm:function(e){var t=this,i=void 0!==t.dataService.serviceLocator.proxyPrefix?t.dataService.serviceLocator.proxyPrefix:"",r=new bizagi.rendering.facade({proxyPrefix:i});r.execute({canvas:e,summaryForm:!0,idCase:t.idCase}),t.renderingFacade=r,setTimeout(function(){t.resizeLayout()},1e3)},postRender:function(){var e=this,t=(e.getContent(),bizagi.workportal.state.inboxgrid.taskState||"all"),i=bizagi.workportal.state.inboxgrid.idWorkflow,r=bizagi.workportal.state.inboxgrid.workflowName,a=bizagi.workportal.state.inboxgrid.pageNumber||1;e.taskState=t,e.icoTaskState="",e.idWorkflow=i,e.idCase=0,e.renderProcessesByTaskState(t),e.taskStateFilterSelection(),e.subscribePagerActions(),e.configureViewControl(),e.popupOpened=!1,bizagi.referrerParams=e.params.restoreStatus&&bizagi.referrerParams||{},e.params.taskState=e.params.taskState||bizagi.referrerParams.taskState||t,$.when(e.dataService.getInboxSummary()).done(function(t){e.updateSummary(t),e.changeTaskState(e.taskState),e.configureSummaryColumnSlider()}),e.configureSlider(),e.loadCasesGrid({idWorkflow:i,pageNumber:a,workflowName:r});var o=void 0===bizagi.workportal.state.inboxgrid.showProcessesColumn||bizagi.workportal.state.inboxgrid.showProcessesColumn;e.toggleProcessesColumn(o)},updateSummary:function(e){var t=this.getContent();$(".ui-bizagi-wp-app-inbox-tab#red",t).find(".toolTip").html(bizagi.util.shortNumber(e.Red)),$(".ui-bizagi-wp-app-inbox-tab#green",t).find(".toolTip").html(bizagi.util.shortNumber(e.Green)),$(".ui-bizagi-wp-app-inbox-tab#yellow",t).find(".toolTip").html(bizagi.util.shortNumber(e.Yellow))},renderProcessesByTaskState:function(e){var t=this,i=t.getContent();t.taskState="",t.onlyFavorites="";var r=t.workportalFacade.getTemplate("inbox.common.processes");"Favorites"==e?(t.taskState="all",t.onlyFavorites="true"):(t.taskState=e,t.onlyFavorites=""),$.when(t.dataService.getAllProcesses({taskState:t.taskState,onlyFavorites:t.onlyFavorites,inputtray:t.params.inputtray||"inbox"})).done(function(e){$("#process-column > div.scroll-content",i).empty(),$(".ui-bizagi-loading-icon",i).hide(),$.tmpl(r,e).appendTo("#process-column > div.scroll-content",i),$(".workflows-list > li[data-id-workflow="+t.idWorkflow+"]",i).addClass("list-item-selected"),t.subscribeWorkflowSelection(),t.subscribeFavoritesProcesses()})},taskStateFilterSelection:function(){var e=this,t=e.getContent();$("#process-filters",t).delegate("li","click",function(){$("#case-column-grid .scroll-content",t).empty(),$(".ui-bizagi-loading-icon",t).hide(),$("#process-filters li",t).removeClass("filter-active");var i=$(this).attr("data-task-state");e.changeTaskState(i),$(".pager-container",t).hide();e.loadCasesGrid({idWorkflow:"",workflowName:"",pageNumber:"1"})})},changeTaskState:function(e){var t=this.getContent();bizagi.workportal.state.inboxgrid.taskState=e,this.renderProcessesByTaskState(e),$("#process-filters li",t).removeClass("filter-active"),$("#process-filters li[data-task-state="+e+"]",t).addClass("filter-active")},getCurrentTaskState:function(){var e=this.getContent(),t=$(".filter-active button",e);return t.hasClass("filter-none")?"all":t.hasClass("filter-red")?"Red":t.hasClass("filter-yellow")?"Yellow":t.hasClass("filter-green")?"Green":t.hasClass("filter-starred")?"Favorites":void 0},subscribeFavoritesProcesses:function(){var e=this,t=e.getContent(),i=$("#process-column",t);$("li > .icon.favorite-true, li > .icon.favorite-false",i).click(function(t){t.stopPropagation();var i,r=$(this);"false"==r.closest("li").attr("data-isfavorite")?(i={idObject:r.closest("li").attr("data-guidwfclass"),favoriteType:"WFCLASS"},$.when(e.dataService.addFavorite(i)).done(function(e){r.attr("data-favorite-guidfavorite",e.idFavorites),r.closest("li").attr("data-isfavorite","true"),r.removeClass("favorite-false").addClass("favorite-true")})):(i={idObject:r.attr("data-favorite-guidfavorite"),favoriteType:"WFCLASS"},$.when(e.dataService.delFavorite(i)).done(function(e){r.attr("data-favorite-guidfavorite",""),r.closest("li").attr("data-isfavorite","false"),r.removeClass("favorite-true").addClass("favorite-false")}))})},subscribeWorkflowSelection:function(){var e=this,t=e.getContent();$(".workflows-list > li",t).bind("click",function(i){i.preventDefault(),i.stopPropagation(),$("#case-column-grid div.scroll-content",t).empty(),$(".workflows-list li",t).removeClass("list-item-selected"),$(this).addClass("list-item-selected");var r={idWorkflow:$(this).data("id-workflow"),workflowName:$(this).find(".workflow-name").text(),pageNumber:"1"};e.loadCasesGrid(r),$(".pager-container",t).hide(),e.toggleProcessesColumn(!1)})},updatePager:function(e,t,i,r){var a=this.getContent(),o=$(".pager-container",a);if(o.data("id-workflow",e),o.data("workflow-name",t),o.empty(),r>1){o.show();for(var s=1;s<=r;s++)s==i?o.append($("<button>").prop("id",s).prop("class","current-page").text(s)):o.append($("<button>").prop("id",s).text(s))}this.subscribePagerActions(),o.find(".current-page",a).focus()},loadCasesGrid:function(params){var self=this,context=self.getContent(),casesGridTmpl=self.workportalFacade.getTemplate("inbox-grid-cases"),casesGridContainer=$("#case-column-grid > div.scroll-content",context),params={taskState:self.getCurrentTaskState(),idWorkflow:params.idWorkflow,page:params.pageNumber,onlyFavorites:eval(self.onlyFavorites),workflowName:params.workflowName,order:params.order||"",orderFieldName:params.orderFieldName||"",orderType:params.orderType||"0"},idWorkflow=params.idWorkflow;bizagi.workportal.state.inboxgrid.idWorkflow=params.idWorkflow,bizagi.workportal.state.inboxgrid.workflowName=params.workflowName,bizagi.workportal.state.inboxgrid.pageNumber=params.pageNumber,$.when(self.dataService.getCustomizedColumnsData(params)).done(function(e){var t=0;$(e.cases.columnTitle).each(function(i,r){"T_idTask"==r.order&&$(e.cases.rows).each(function(i,r){self.isArray(r.fields[t])||(e.cases.rows[i].fields[t]={workitems:[{TaskName:r.fields[t],State:e.cases.rows[i].taskState}]})}),t++}),casesGridContainer.empty();var i=$("#pager-wrapper",context);i.empty(),0==i.children().size()&&$("<div>",{id:"cases-pager","data-id-workflow":params.idWorkflow}).appendTo(i),$("#cases-pager",context).empty(),e.cases=bizagi.util.formatDecimalAndMoneyCell(e.cases,BIZAGI_DEFAULT_CURRENCY_INFO);var r=bizagi.util.isEmpty(params.workflowName)?"":"&nbsp;&gt;&nbsp;"+params.workflowName;$.tmpl(casesGridTmpl,$.extend(e.cases,{processName:r}),{setFormat:self.formatValue,isArray:self.isArray,formatCategories:self.formatCategories,isDate:self.isDate,replaceLineBreak:bizagi.util.replaceLineBreak,formatMonetaryCell:bizagi.util.formatMonetaryCell,formatDecimalCell:bizagi.util.formatDecimalCell}).appendTo(casesGridContainer),self.updatePager(idWorkflow,params.workflowName,e.cases.page,e.cases.totalPages),$("#cases-pager",context).attr("data-id-workflow",params.idWorkflow),self.subscribeFavoritesCases(),$("#ui-bizagi-wp-app-inbox-grid-cases tr:nth-child(even)",context).addClass("event"),$(".ui-bizagi-wp-app-inbox-activity-name",context).click(function(){var e=$(this).find("#idCase").val(),t=$(this).find("#idTask").val(),i=$(this).find("#idWorkItem").val();$("#ui-bizagi-workportal-wrapper-back",context).show(),$("#ui-bizagi-workportal-widget-view-options",context).hide(),i&&(i=""),self.publish("executeAction",{action:bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_ROUTING,idCase:e,idWorkItem:i,idTask:t})}),$(".sortColumnsData",context).click(function(){self.loadCasesGrid({idWorkflow:idWorkflow,workflowName:params.workflowName,orderFieldName:$(this).find("#orderFieldName").val(),orderType:0==$(this).find("#orderType").val()?1:0,order:$(this).find("#order").val()})}),$(".workonitRow.showDesc",context).click(function(){$("#ui-bizagi-workportal-wrapper-back",context).show(),$("#ui-bizagi-workportal-widget-view-options",context).hide();var e=$(this).parents("tr").find(".gridListWorkItems li");1==e.length?e.find(".ui-bizagi-wp-app-inbox-activity-name").click():self.publish("executeAction",{action:bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_ROUTING,idCase:$(this).parents("td").first().find("#idCase").val()})}),$(".ui-bizagi-wp-app-inbox-processes-title",context).click(function(){self.toggleProcessesColumn(!0)})})},subscribePagerActions:function(){var e=this,t=e.getContent(),i=$(".pager-container",t);i.undelegate("button","click").delegate("button","click",function(){$("#case-column-grid div.scroll-content",t).empty(),$("#summary-column .ui-bizagi-loading-icon",t).hide();var r={idWorkflow:i.data("id-workflow"),pageNumber:$(this).prop("id"),workflowName:i.data("workflow-name")};e.loadCasesGrid(r)})},subscribeFavoritesCases:function(){var e=this,t=e.getContent();$("#case-column-grid",t).delegate(".ui-bizagi-wp-app-inbox-cases-start","click",function(t){var i;t.stopPropagation();var r=this;$(r).removeClass("ui-bizagi-wp-app-inbox-cases-start").addClass("ui-bizagi-wp-app-inbox-cases-start-wait"),"false"==$(r).parent().find("#isFavorite").val()?(i={idObject:$(r).parent().find("#idCase").val(),favoriteType:"CASES"},$.when(e.dataService.addFavorite(i)).done(function(e){$(r).parent().find("#guidFavorite").val(e.idFavorites),$(r).removeClass("off").addClass("on"),$(r).parent().find("#isFavorite").val("true"),$(r).removeClass("ui-bizagi-wp-app-inbox-cases-start-wait").addClass("ui-bizagi-wp-app-inbox-cases-start")})):(i={idObject:$(r).parent().find("#guidFavorite").val(),favoriteType:"CASES"},$.when(e.dataService.delFavorite(i)).done(function(e){"true"==e.deleted&&($(r).parent().find("#guidFavorite").val(""),$(r).removeClass("on").addClass("off"),$(r).parent().find("#isFavorite").val("false"),$(r).removeClass("ui-bizagi-wp-app-inbox-cases-start-wait").addClass("ui-bizagi-wp-app-inbox-cases-start"))}))})},configureSlider:function(){var e=this,t=e.getContent();$("#summary-column-slider",t).bind("click",function(){e.toggleProcessesColumn(!e.showProcessesColumn)})},toggleProcessesColumn:function(e){var t=this.getContent();this.showProcessesColumn=bizagi.workportal.state.inboxgrid.showProcessesColumn=e,e?($("#case-column-grid",t).removeClass("slide-render-column-to-left-grid"),$(".scroll-content",t).addClass("slide-render-column-to-right-grid"),$("#ui-bizagi-wp-app-inbox-grid-cases-container",t).addClass("slide-render-column-to-top-grid")):($("#case-column-grid",t).addClass("slide-render-column-to-left-grid"),$(".scroll-content",t).removeClass("slide-render-column-to-right-grid"),$("#ui-bizagi-wp-app-inbox-grid-cases-container",t).removeClass("slide-render-column-to-top-grid"))},configureViewControl:function(){var e=this,t=e.getContent(),i=$("#ui-bizagi-wp-app-inbox-bg-eye",t);$("#ui-bizagi-wp-app-inbox-bt-eye",t);$("#ui-bizagi-wp-app-inbox-bt-eye").bind("click",function(){if(e.popupOpened)bizagi.workportal.tablet.popup.closePopupInstance();else{e.popupOpened=!0,i.removeClass("eye-focus-off"),i.addClass("eye-focus-on");var r=new bizagi.workportal.tablet.popup(e.dataService,e.workportalFacade,{sourceElement:"#ui-bizagi-wp-app-inbox-bt-eye",offset:"-28 0",at:"left bottom",height:60,width:110}),a=e.workportalFacade.getTemplate("inbox-common-header-view");r.render($.tmpl(a)),$("#viewDetailsEvent",t).closest(".modal").find(".selectarrow").addClass("ui-bizagi-workportal-widget-view-options"),$.when(r.closed()).done(function(){e.popupOpened=!1,i.removeClass("eye-focus-on"),i.addClass("eye-focus-off")});var o=r.getContent();$("#viewDetailsEvent",o).click(function(){e.publish("changeWidget",{widgetName:bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX}),r.close()}),$("#viewGridEvent",o).click(function(){e.publish("changeWidget",{widgetName:bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX_GRID}),r.close()})}})},formatRequest:function(e){return e},formatCategories:function(e){return e},isArray:function(e){return"object"==typeof e},isDate:function(e){try{if(new Date(e).getYear()>0)return!0}catch(e){return!1}},configureSummaryColumnSlider:function(){var e=this,t=e.getContent();e.status=$(".bz-wp-status-notification",t),e.dataService.online||e.changeNetworkState(),$(document).off("online.inbox"),$(document).off("offline.inbox"),$(document).on("online.inbox",function(){e.dataService.online=!0,e.changeNetworkState()}),$(document).on("offline.inbox",function(){e.dataService.online=!1,e.changeNetworkState()})},changeNetworkState:function(){var e=this,t=bizagi.util.getItemLocalStorage("inputtray");e.dataService.online?(e.status.removeClass("offline"),e.status.addClass("online"),e.status.text(e.getResource("workportal-offline-status-online")),null==t||"true"!==t&&"false"!==t||($("#submenu-button span.page-title").text(bizagi.localization.getResource("workportal-menu-inbox")),t="inbox",bizagi.util.setItemLocalStorage("inputtray",t),e.publish("changeWidget",{widgetName:bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX,inputtray:t}))):(e.status.removeClass("online"),e.status.addClass("offline"),e.status.text(e.getResource("workportal-offline-status-offline")),null!=t&&"inbox"===t&&($("#submenu-button span.page-title").text(bizagi.localization.getResource("workportal-menu-drafts")),t="true",bizagi.util.setItemLocalStorage("inputtray",t),e.publish("changeWidget",{widgetName:bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX,inputtray:t})))}}),bizagi.workportal.widgets.routing.extend("bizagi.workportal.widgets.routing",{},{init:function(e,t,i){this._super(e,t,i)},postRender:function(){var e=this,t=e.getContent(),i=$("#ui-bizagi-wp-app-routing-activity-wf tbody tr",t),r=$("#ui-bizagi-wp-app-routing-process-wf tbody tr",t),a=e.params.data.fromSearchWidget?"false":"true",o=e.params.data.fromSearchWidget?"true":"false";$("tr:nth-child(even)",t).addClass("event"),$(".workonitRow",t).button(),$(i).click(function(){e.showWorkitem({idCase:$(this).children(":first").children("#idCase").val(),idWorkitem:$(this).children(":first").children("#idWorkItem").val(),idTask:$(this).children(":first").children("#idTask").val(),onlyUserWorkItems:a,eventAsTasks:o}),$("#ui-bizagi-wp-app-inbox-activities-routing-wrapper").closest("div").remove(),e.publish("closeCurrentDialog")}),$(r).click(function(){e.publish("executeAction",{action:bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_ROUTING,idCase:$(this).children(":first").children("#idCase").val(),onlyUserWorkItems:a,eventAsTasks:o}),$("#ui-bizagi-wp-app-inbox-activities-routing-wrapper").closest("div").remove(),e.publish("closeCurrentDialog")}),$(".wp-routing-container-fother button",t).click(function(){$("#ui-bizagi-wp-app-inbox-activities-routing-wrapper").closest("div").remove(),e.publish("closeCurrentDialog"),e.publish("changeWidget",{widgetName:bizagi.workportal.currentInboxView})})},showWorkitem:function(e){this.publish("changeWidget",{widgetName:bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_RENDER,idCase:e.idCase,idWorkitem:e.idWorkitem,idTask:e.idTask,referrer:this.params.referrer})},showAsyncWidget:function(e){this.publish("showDialogWidget",{widgetName:bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_ASYNC,data:data,modalParameters:parameters})}}),bizagi.workportal.widgets.render.extend("bizagi.workportal.widgets.render",{},{init:function(e,t,i){var r=this;this._super(e,t,i),r.caseSummaryTemplate=r.workportalFacade.getTemplate("render-case-summary"),r.caseSummaryTemplateSubprocess=r.workportalFacade.getTemplate("inbox-common-case-summary-subprocess"),r.caseSummaryTemplateAssigness=r.workportalFacade.getTemplate("inbox-common-case-summary-assignees"),r.caseSummaryTemplateActivities=r.workportalFacade.getTemplate("inbox-common-case-summary-activities"),r.caseSummaryTemplateEvents=r.workportalFacade.getTemplate("inbox-common-case-summary-events"),r.paginationTemplate=r.workportalFacade.getTemplate("inbox-common-pagination-inbox")},renderForm:function(e){var t,i=this;if(!e.withOutGlobalForm)return i._super(e);var r=i.workportalFacade.getTemplate("info-message"),a=""!==e.messageForm?e.messageForm:i.resources.getResource("render-without-globalform");void 0!==i.params&&void 0!==i.params.isOfflineForm&&1==i.params.isOfflineForm&&(a=bizagi.util.getMessageFromNetworkState(i.dataService.online));var o=$.tmpl(r,{message:a});return o.appendTo(i.getComponentContainer("render")),$(".ui-bizagi-info-message-button",o).click(function(){i.publish("changeWidget",{widgetName:bizagi.workportal.currentInboxView,inputtray:bizagi.util.getItemLocalStorage("inputtray")}),i.publish("toggleProcessesColumn",{show:!0})}),(t=$.Deferred()).fail(),i.resizeLayout(),t},renderContent:function(){var e=this;if(!bizagi.util.isEmpty(e.params.idCase)&&bizagi.util.isEmpty(e.params.idWorkitem)&&void 0!==bizagi.referrerParams&&!bizagi.referrerParams.requestGlobalForm&&(null==bizagi.util.getQueryString()||null==bizagi.util.getQueryString().idCase||0===bizagi.util.getQueryString().idCase)){e.changeWidget(bizagi.workportal.currentInboxView);var t=e.workportalFacade.getTemplate("info-message"),i=e.resources.getResource("render-without-globalform"),r=$.tmpl(t,{message:i});return $("#summary-column .scroll-content",e.getComponentSelector("workarea")).append(r),null}return e._super()},postRender:function(){var e=this,t=e.getContent();$(".render-form .column-footbar",t).delegate("#render-column-slider","click",function(e){e.preventDefault(),$("#contentFramework").toggleClass("hide-case-summary")}),$("#bt-case-action-release",t).click(function(t){var i=[{label:e.getResource("workportal-widget-dialog-box-release-ok"),action:"resolve"},{label:e.getResource("workportal-widget-dialog-box-release-cancel")}];$.when(bizagi.showConfirmationBox(e.getResource("workportal-widget-dialog-box-release"),e.getResource("render-actions-release"),"",i)).done(function(){bizagi.util.smartphone.startLoading(),$.when(e.dataService.releaseActivity({idCase:e.params.idCase,idWorkItem:e.params.idWorkitem})).done(function(t){switch(t&&t.status?t.status:"Error"){case"Success":e.publish("changeWidget",{widgetName:bizagi.workportal.currentInboxView});break;case"ConfigurationError":bizagi.showMessageBox(e.getResource("workportal-widget-dialog-box-release-configuration-error-message").replace("{0}",params.idWorkitem),e.getResource("workportal-widget-dialog-box-release-error"),"error",!1);break;case"Error":default:bizagi.showMessageBox(e.getResource("workportal-widget-dialog-box-release-error-message").replace("{0}",params.idWorkitem),e.getResource("workportal-widget-dialog-box-release-error"),"error",!1)}bizagi.util.smartphone.stopLoading()}).fail(function(){var t=e.getResource("workportal-widget-dialog-box-release-error-message").replace("{0}",params.idWorkitem);bizagi.showMessageBox(t,e.getResource("workportal-widget-dialog-box-release-error"),"error",!1),bizagi.util.smartphone.stopLoading()})})})},showMenuComplexGateway:function(e){var t=this;void 0===bizagi.cache&&(bizagi.cache={}),bizagi.cache[t.params.idCase]={idTask:t.params.idTask,idWorkitem:t.params.idWorkitem,isComplex:!0},void 0===bizagi.cache.idCaseObject&&(bizagi.cache.idCaseObject={}),bizagi.cache.idCaseObject.idCase=t.params.idCase,bizagi.cache.idCaseObject.isComplex=!0,t.currentPopup="complexgateway",t.publish("popupWidget",{widgetName:bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_COMPLEXGATEWAY,options:{transitions:e,sourceElement:".ui-bizagi-form",insertAfter:".ui-bizagi-form .ui-bizagi-button-container",height:"auto",offset:"8 0",activeScroll:!1,dontClose:!0,closed:function(){t.currentPopup=null}}})},renderSummary:function(e){var t=this,i=t.getContent(),r={},a="",o=new bizagi.workportal.command.security(t.dataService);e.showComments=!0,e.printableVersion=o.checkSecurityPerm("PrintableVersion"),e.stateLog=o.checkSecurityPerm("StateLog"),e.isOfflineForm&&(e.caseNumber=e.caseNumber||e.idCase);var s=$.tmpl(t.caseSummaryTemplate,e).appendTo(t.getComponentContainer("summary"));bizagi.util.formatInvariantDate(i,t.getResource("dateFormat")+" "+t.getResource("timeFormat")),$("#details",s).delegate(".summaryLink","click",function(){t.routingExecute($(this))}),$("#ui-bizagi-details-tabs",i).tabs({activate:function(i,o){switch(null==o?"formSummary":o.newPanel.selector.replace("#","")){case"comments":null==r.comments&&($.extend(t,{},bizagi.workportal.comments),e.canvas=$("#comments",t.getComponentContainer("summary")),e.readOnly=!!$(o.tab).data("isclosed"),$.when(t.renderComments(e)).done(function(e){r.comments=e})),bizagi.util.setContext({commentsFocus:!0});break;case"subprocess":null==r.subprocess&&$.when(t.dataService.summarySubProcess({idCase:t.params.idCase})).done(function(e){(a=$.tmpl(t.caseSummaryTemplateSubprocess,e)).appendTo($("#subprocess",t.getComponentContainer("summary"))),r.subprocess=a,a.delegate(".summaryLink","click",function(){t.routingExecute($(this))})});break;case"assignees":null==r.assignees&&$.when(t.dataService.summaryAssigness({idCase:t.params.idCase})).done(function(e){(a=$.tmpl(t.caseSummaryTemplateAssigness,e)).appendTo($("#assignees",t.getComponentContainer("summary"))),r.assignees=a});break;case"events":null==r.events&&$.when(t.dataService.summaryCaseEvents({idCase:t.params.idCase})).done(function(e){(a=$.tmpl(t.caseSummaryTemplateEvents,e)).appendTo($("#events",t.getComponentContainer("summary"))),r.events=a,a.delegate(".summaryLink","click",function(){t.routingExecute($(this))})});break;case"activities":null==r.activities&&$.when(t.dataService.summaryActivities({data:e,idWorkitem:t.params.idWorkitem})).done(function(e){e.idCase=t.params.idCase,(a=$.tmpl(t.caseSummaryTemplateActivities,e)).appendTo($("#activities",t.getComponentContainer("summary"))),r.activities=a,a.delegate(".summaryLink","click",function(){t.routingExecute($(this))})})}}})}}),bizagi.workportal.widgets.render.extend("bizagi.workportal.widgets.render",{},{renderForm:function(e){var t,i=this;if(!e.withOutGlobalForm)return i._super(e);var r=i.workportalFacade.getTemplate("info-message"),a=""!==e.messageForm?e.messageForm:i.resources.getResource("render-without-globalform");void 0!==i.params&&void 0!==i.params.isOfflineForm&&1==i.params.isOfflineForm&&(a=bizagi.util.getMessageFromNetworkState(i.dataService.online));var o=$.tmpl(r,{message:a});return o.appendTo(i.getComponentContainer("render")),$(".ui-bizagi-info-message-button",o).click(function(){i.publish("changeWidget",{widgetName:bizagi.workportal.currentInboxView,inputtray:bizagi.util.getItemLocalStorage("inputtray")}),i.publish("toggleProcessesColumn",{show:!0})}),(t=$.Deferred()).fail(),i.resizeLayout(),t},renderContent:function(){return this._super()},postRender:function(){return this._super()}}),bizagi.workportal.widgets.reportsMenu.extend("bizagi.workportal.widgets.reportsMenu",{},{init:function(e,t,i){this._super(e,t,i)},postRender:function(){var e=this;$.when(e.buildAnalysisJSON()).done(function(){e.renderReportsMenu("Reports")}),e.eventsHandler()},getAnalisysQueries:function(){var e=this,t=[],i=new $.Deferred;return $.when(e.dataService.getReporstAnalysisQuery()).done(function(r){$.each(r.queries,function(i,r){t.push({displayName:r.name||"",description:r.description||"",icon:"",show:!0,filters:r.filterParameters,endPoint:e.endPoint[r.reportSet],reportSet:r.reportSet,activeEdit:!0,id:r.id,subItems:[]})}),i.resolve(t)}),i.promise()},renderReportsMenu:function(e){var t=this.getContent(),i=this.workportalFacade.getTemplate("reportsMenu-items"),r=this.workportalFacade.getTemplate("reportsMenu-noitems"),a=$("#bz-wp-widget-reportsmenu-list",t),o=this.reportsMenu[e];o.length?a.html($.tmpl(i,{elements:o})):a.html($.tmpl(r,{elements:o}))},buildAnalysisJSON:function(){var e=this,t=$.Deferred();return $.when(e.getAnalisysQueries()).pipe(function(i){bizagi.menuSecurity.AnalysisQueries&&i.length>0&&(e.reportsMenu.AnalysisQuery=i,e.reportsMenu.Reports.push({displayName:e.resources.getResource("workportal-menu-submenu-AnalysisQueries"),show:!0,icon:"",endPoint:"",subItems:"AnalysisQuery"})),t.resolve()}),t.promise()},eventsHandler:function(){var e=this,t=e.getContent(),i=$("#bz-wp-widget-reportsmenu-list",t);i.on("click","li.bz-wp-widget-reportsmenu-readmode",function(t){t.stopPropagation();var i=$(this),r=i.data("subitems"),a=i.data("displayname"),o=i.data("endpoint"),s=i.find(".bz-wp-widget-reportsmenu-itemactions").data("id");e.execSelectedItem(s,r,o),e.buildNavTree(a,r)}),i.on("click",".bz-wp-widget-reportsmenu-action",function(t){t.stopPropagation(),t.preventDefault();var i=$(this).closest("li.bz-wp-widget-reportsmenu-item"),r=$(this).closest(".bz-wp-widget-reportsmenu-itemactions").data("id");$(this).hasClass("bz-wp-widget-reportsmenu-edit")?e.showReportEdition(r,i):$(this).hasClass("bz-wp-widget-reportsmenu-delete")?e.showDeleteForm(r,i):$(this).hasClass("bz-wp-widget-reportsmenu-cancel")?e.cancelReportAction(r,i):$(this).hasClass("bz-wp-widget-reportsmenu-applyedition")?e.applyReportEdition(r,i):$(this).hasClass("bz-wp-widget-reportsmenu-applydelete")&&e.deleteReport(r,i)}),$("#bz-wp-widget-reportsmenu-navtree",t).on("click","li",function(t){$(this).nextAll().remove();var i=$(this).data("path");e.renderReportsMenu(i)})},execSelectedItem:function(e,t,i){if(""===i)this.renderReportsMenu(t);else{var r=e?this.getFiltersById(e):{};this.publish("changeWidget",{widgetName:bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_REPORTS_CHART,endPoint:i,filters:r})}},showDeleteForm:function(e,t){var i=this.workportalFacade.getTemplate("reportsMenu-delete"),r=$.tmpl(i,{id:e});t.slideUp("fast",function(){$(this).removeClass("bz-wp-widget-reportsmenu-readmode").addClass("bz-wp-widget-reportsmenu-edition").html(r)}),t.slideDown("fast")},deleteReport:function(e,t){var i=this,r=i.getContent(),a="id="+e;$.when(i.dataService.deleteReportData(a)).done(function(a){if(!0===a.status){var o=t.nextAll();o.size()>0?(o.slideUp("fast",function(){t.remove()}),o.slideDown("fast")):t.fadeOut("fast",function(){$(this).remove()}),i.reportsMenu.AnalysisQuery=jQuery.grep(i.reportsMenu.AnalysisQuery,function(t){return t.id!==e}),i.reportsMenu.AnalysisQuery.length||(i.reportsMenu.Reports.pop(),$("#bz-wp-widget-reportsmenu-navtree li:nth-of-type(1)",r).trigger("click"))}})},buildNavTree:function(e,t){var i=this.getContent(),r=this.workportalFacade.getTemplate("reportsMenu-tree"),a=$.tmpl(r,{displayName:e,path:t});$("#bz-wp-widget-reportsmenu-navtree",i).append(a)},showReportEdition:function(e,t){var i=this.workportalFacade.getTemplate("reportsMenu-edition"),r=this.getReportsData(e),a=$.tmpl(i,{displayName:r[0].displayName,description:r[0].description,id:e});t.slideUp("fast",function(){$(this).removeClass("bz-wp-widget-reportsmenu-readmode").addClass("bz-wp-widget-reportsmenu-edition").html(a)}),t.slideDown("fast")},applyReportEdition:function(e,t){var i=this,r=t.find("input, textarea");if(i.validateFormElements(r)){var a=i.getReportsData(e),o=r[0].value,s=r[1].value,n="parameters="+JSON.stringify({id:e,name:o,description:s,reportSet:a[0].reportSet,filterParameters:a[0].filters});$.when(i.dataService.updateReportData(n)).done(function(n){if(!0!==n.status){var l=$(r[0]).siblings(".bz-wp-widget-reportmenu-messagecnt"),c=n.message;i.showValidationMessage(c,l)}else a[0].displayName=o,a[0].description=s,i.cancelReportAction(e,t)})}},validateFormElements:function(e){for(var t=this,i=!0,r=0,a=e.length;r<a;r++){var o=$(e[r]).siblings(".bz-wp-widget-reportmenu-messagecnt");t.validateRequired($(e[r]))?t.validateSpecialCharacters($(e[r]))?t.removeValidationMessage(o):(i=!1,t.showValidationMessage(t.getResource("bz-rp-components-customreports-invalidvalue"),o)):(i=!1,t.showValidationMessage(t.getResource("bz-rp-components-customreports-required"),o))}return i},showValidationMessage:function(e,t){var i=this.workportalFacade.getTemplate("reportsMenu-vldmessage");t.html($.tmpl(i,{message:e}))},removeValidationMessage:function(e){$(".bz-wp-widget-reportmenu-errormsg",e).remove()},validateRequired:function(e){var t=!0;return e.attr("required")&&""===e.val()&&(t=!1),t},validateSpecialCharacters:function(e){var t=!0;return new RegExp(/^[a-zA-Z0-9- ]*$/).test(e.val())||(t=!1),t},cancelReportAction:function(e,t){var i=this.workportalFacade.getTemplate("reportsMenu-itemsdata"),r=this.getReportsData(e),a=$.tmpl(i,{element:r[0]});t.slideUp("fast",function(){$(this).addClass("bz-wp-widget-reportsmenu-readmode").removeClass("bz-wp-widget-reportsmenu-edition").html(a)}),t.slideDown("fast")},getReportsData:function(e){return this.reportsMenu.AnalysisQuery.filter(function(t){return t.id===e})},getFiltersById:function(e){return this.getReportsData(e)[0].filters}}),bizagi.workportal.widgets.reportsChart.extend("bizagi.workportal.widgets.reportsChart",{},{init:function(e,t,i){this._super(e,t,i)},postRender:function(){var e=this;e.menu.showReportsIcon(),$.when(e.loadReportingModule()).done(function(){e.loadReport(e.endPoint.defaultReport,e.endPoint.info),e.eventsHandler()})},eventsHandler:function(){var e=this;e.getContent();$("#reports-menu, li",e.content).on("click",function(){var t=$(this),i=t.data("report");t.siblings().removeClass("ui-bizagi-wp-widget-reports-menu-active"),t.addClass("ui-bizagi-wp-widget-reports-menu-active"),e.loadReport(i,e.endPoint.info)})},loadReport:function(e,t){var i=this,r=i.endPoint.reports[e].components;$("#reports-canvas",i.content).empty(),$.when(i.reportingModule.render({canvas:$("#reports-canvas",i.content),report:e,info:t,components:r,filters:i.filters,myTeam:i.myTeam})).done(function(e){i.attachReportEvents.apply(i,[e])})},attachReportEvents:function(e){var t=this;e.bindWindowResize(),e.subscribe("filterChange",function(e,i){t.filters=i}),e.subscribe("opencase",function(e,i){t.menu.hideReportsIcon(),bizagi.workportal.controllers.menu.prototype.showBackButton.call(this),t.publish("executeAction",{action:bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_ROUTING,idCase:i.caseData.idCase,idWorkItem:i.caseData.idWorkItem,idTask:i.caseData.idTask})})}}),bizagi.workportal.widgets.newCase.extend("bizagi.workportal.widgets.newCase",{},{postRender:function(){var e=this,t=e.getContent();e.renderCategories(),e.configureBackButton(),bizagi.idCategory=void 0,e.scrollVertical(),e.configureTreeNavigation(),$("#frecuentCases",t).click(function(){$("#searchNewCase",t).hide(),e.renderRecentProcess(),$(this).addClass("frecuentCasesOn"),$("#casesList",t).removeClass("casesListOn")}),$("#casesList",t).click(function(){$("#searchNewCase",t).show(),$("#searchNewCase",t).focus(),$("#searchNewCase",t).val(""),e.renderCategories(),$(this).addClass("casesListOn"),$("#frecuentCases",t).removeClass("frecuentCasesOn")}),$("#search",t).click(function(){$(this).hasClass("searchOn")?$(this).removeClass("searchOn"):$(this).addClass("searchOn")})},renderCategories:function(e,t){var i,r=this,a=r.getContent(),o=r.workportalFacade.getTemplate("newCase-categories"),s=$("#categories",a),n=$("#categoryTree",a),l=!1,c={};bizagi.criticSection=1==bizagi.criticSection?1:0,$.when(r.dataService.getCategories({idCategory:e,idApp:t||""})).done(function(e){if(n.show(),e.totalApps>1){var t={category:[]};$.each(e.category,function(e,i){t.category.push({appId:i.appId,idCategory:"",categoryName:i.appName,isProcess:"false",description:" "})}),e=t}if(e.category.length>100){for(c.category={},u=0;u<=100;u++)c.category[u]=e.category[u];c.truncate=!0,(i=$.tmpl(o,c)).appendTo(s),r.loadAllElementEvent(e)}else c=e,(i=$.tmpl(o,c)).appendTo(s);r.scrollVertical();var d={category:[]},u=0;$.each(e.category,function(t,i){e.category[t].label=i.categoryName,e.category[t].value=i.idCategory}),$("#searchNewCase",a).focus(),$(a).delegate("#searchNewCase","keyup",function(t){t.stopPropagation(),0===$("#searchNewCase",a).val().length&&l&&((i=$.tmpl(o,c)).appendTo(s),r.assignEvent(),r.loadAllElementEvent(e),l=!1)}),$("#searchNewCase",a).autocomplete({minLength:3,source:e.category,autoFocus:!0,close:"close",position:{my:"left top",at:"left top",of:"body",offset:"-10 -10",collision:"none",delay:800},open:function(e,t){$(".ui-menu-item").hide(),d.category=[]},select:function(e,t){return 1==$("#categories ul").length&&$("#categories ul").trigger("click"),!1},response:function(t,a){return a.content.length>=15||($.each(a.content,function(e,t){d.category.push(t)}),(i=$.tmpl(o,d)).appendTo(s),l=!0,r.assignEvent(i),r.loadAllElementEvent(e),!0)}}),r.assignEvent(),r.scrollVertical()})},loadAllElementEvent:function(e){var t=this,i=t.getContent(),r=t.workportalFacade.getTemplate("newCase-categories"),a=$("#categories",i);$(".loadMoreElements",a).click(function(i){i.stopPropagation(),$(this).find("#loadMoreElementsIcon").removeClass("plus_load_icon").addClass("loading_icon"),a.empty(),$.tmpl(r,e).appendTo(a),t.assignEvent()})},assignEvent:function(e,t){var i=this,r=i.getContent(),a=$("#categories",r),o=$("#categoryTree",r),s=e||$("ul",a);$(s).click(function(e){e.stopPropagation();var t=$(this).children("#idCategory").val(),a=$(this).children("#isProcess").val(),s=$(this).children("#categoryName").val(),n=$(this).data("appid"),l=bizagi.util.parseBoolean($(this).children("#hasOfflineForm").val());if((1==bizagi.criticSection||t==bizagi.idCategory)&&!bizagi.util.parseBoolean(a))return!0;if(bizagi.idCategory=t,$("#searchNewCase",r).val(""),bizagi.criticSection=1,!0===bizagi.util.parseBoolean(a)){!bizagi.util.hasOfflineFormsEnabled()&&l&&(l=!1);var c=$(this).find(".processIco");$(c).addClass("wait"),$(this).prevAll("ul").fadeTo(650,0,"easeInOutCirc").slideUp({duration:300,easing:"easeInOutCirc"}),$(this).nextAll("ul").fadeTo(650,0,"easeInOutCirc").slideUp({duration:300,easing:"easeInOutCirc"}),$("#modalNewCaseOverlay",r).removeClass("modalNewCaseOverlay").addClass("modalNewCaseOverlayShow"),$("#modalNewCaseMessage",r).addClass("show"),$("#modalNewCaseMessage",r).css("left",$(document).width()/2-$("#modalNewCaseMessage",r).width()/2),$("#modalNewCaseMessage",r).css("top",$(document).height()/2-$("#modalNewCaseMessage",r).height()/2),$("#case",r).text(s),$("#menu-items #new-case").trigger("processClicked"),$.when(i.createNewCase(t,null,l)).done(function(e){var t={hasStartForm:e.hasStartForm,idProcess:e.idProcess};$.extend(t,e.caseInfo),bizagi.referrerParams.idWorkItem=(t.workitems&&t.workItems.length)>0?t.workItems[0].idWorkItem:"",bizagi.workportal.tablet.popup.closePopupInstance(),$("#modalNewCaseOverlay",r).addClass("modalNewCaseOverlay").removeClass("modalNewCaseOverlayShow"),$("#modalNewCaseMessage",r).removeClass("show"),$("#menu-toggler").trigger("click")}).fail(function(e){if(bizagi.workportal.tablet.popup.closePopupInstance(),$("#modalNewCaseOverlay",r).addClass("modalNewCaseOverlay").removeClass("modalNewCaseOverlayShow"),$("#modalNewCaseMessage",r).removeClass("show"),e.responseText){var t=$.parseJSON(e.responseText);bizagi.showMessageBox(t.message,"Bizagi")}$("#menu-toggler").trigger("click")})}else{var d=i.workportalFacade.getTemplate("newCase-categories-tree");$.tmpl(d,{idParentCategory:t,categoryName:s,appId:n}).appendTo(o),i.configureTreeNavigation(),i.renderCategories(t,n)}bizagi.criticSection=0})},renderRecentProcess:function(){var e=this,t=e.getContent(),i=$("#categories",t),r=$("#categoryTree",t),a=$("#bt-back",t),o=e.workportalFacade.getTemplate("newCase-categories-recent-process");i.empty(),$("li:first",r).nextAll().remove(),r.hide(),a.hide(),$.when(e.dataService.getRecentProcesses()).done(function(t){$.tmpl(o,t).appendTo(i),$("ul",i).click(function(){var t=$(this).children("#idWFClass").val(),i=$(this).find(".processIco");$(i).addClass("wait"),$(this).prevAll("ul").fadeTo(650,0,"easeInOutCirc").slideUp({duration:300,easing:"easeInOutCirc"}),$(this).nextAll("ul").fadeTo(650,0,"easeInOutCirc").slideUp({duration:300,easing:"easeInOutCirc"}),$.when(e.createNewCase(t)).done(function(e){var t={hasStartForm:e.hasStartForm,idProcess:e.idProcess};$.extend(t,e.caseInfo),bizagi.referrerParams.idWorkItem=t.workitems&&t.workitems.length>0?t.workItems[0].idWorkItem:"",bizagi.workportal.tablet.popup.closePopupInstance()}).fail(function(e){if(bizagi.workportal.tablet.popup.closePopupInstance(),e.responseText){var t=$.parseJSON(e.responseText);bizagi.showMessageBox(t.message,"Bizagi")}})})})},configureBackButton:function(){var e=this,t=e.getContent(),i=$("#bt-back",t),r=$("#categoryTree",t);i.click(function(){if(2==$("li",r).length&&i.hide(),$("li",r).length>1){$("li:last-child",r).remove();var t=$("li:last-child").children("#idParentCategory").val();e.renderCategories(t)}})},configureTreeNavigation:function(){var e=this,t=e.getContent(),i=$("#bt-back",t),r=$("#categoryTree",t);$("li",r).length<=1?i.hide():i.show(),$("li:last-child",r).click(function(){$(this).nextAll().remove();var t=$(this).children("#idParentCategory").val(),a=$(this).data("appid");1==$("li",r).length&&(bizagi.idCategory=void 0,i.hide()),a&&(bizagi.idCategory=void 0),e.renderCategories(t,a)})},scrollVertical:function(e){var t=this.getContent();e=e||{},$("#categories",t).css({"overflow-y":"scroll","-webkit-overflow-scrolling":"touch"})},createNewCase:function(e,t,i){var r=this,a=new $.Deferred;return $.when(r.dataService.createNewCase({idWfClass:e,idOrganization:t,isOfflineForm:i})).done(function(e){a.resolve(e),r.publish("executeAction",{action:bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_ROUTING,idCase:e.idCase,formsRenderVersion:void 0!==e.isOfflineForm?e.formsRenderVersion:0,isOfflineForm:void 0!==e.isOfflineForm&&e.isOfflineForm})}).fail(function(e){a.reject(e)}),a.promise()}}),bizagi.workportal.widgets.async.extend("bizagi.workportal.widgets.async",{},{init:function(e,t,i){this._super(e,t,i)},postRender:function(){var e=this,t=e.getContent();$(".ui-bizagi-wp-async-goToInbox a",t).click(function(){e.publish("changeWidget",{widgetName:bizagi.workportal.currentInboxView})})}}),bizagi.workportal.widgets.oldrenderintegration.extend("bizagi.workportal.widgets.oldrenderintegration",{},{init:function(e,t,i){var r=this;r._super(e,t,i),r.taskState="all",r.icoTaskState="",r.idWorkflow=0,r.idCase=0},postRender:function(){}}),bizagi.workportal.widgets.search.extend("bizagi.workportal.widgets.search",{},{init:function(e,t,i){var r=this;this._super(e,t,i),r.radNumber=i.radNumber||"",r.searchTemplate=r.workportalFacade.getTemplate("search"),r.casesGridTmpl=r.workportalFacade.getTemplate("inbox-grid-cases")},postRender:function(){var e=this,t=e.getContent();t.empty();bizagi.util.isEmpty(e.params.workflowName)||e.params.workflowName;for(i=0;i<e.params.data.cases.rows.length;i++)for(j=0;j<e.params.data.cases.rows[i].fields.length;j++)e.params.data.cases.rows[i].fields[j]=null==e.params.data.cases.rows[i].fields[j]?"":e.params.data.cases.rows[i].fields[j];$.tmpl(e.casesGridTmpl,$.extend(e.params.data.cases,{processName:e.params.data.processName}),{setFormat:e.formatValue,isArray:e.isArray,formatCategories:e.formatCategories,isDate:e.isDate}).appendTo(t),$("#ui-bizagi-workportal-wrapper-back").show(),$("#ui-bizagi-workportal-widget-view-options").hide(),null!=e.getMenu().getContent()&&e.getMenu().getContent().find("#menu-toggler").click(),$(".ui-bizagi-wp-app-inbox-activity-name",t).click(function(){var i=$(this).find("#idCase").val()||0,r=$(this).find("#idWorkItem").val()||0,a=$(this).find("#idTask").val()||0;$("#ui-bizagi-workportal-wrapper-back",t).show(),$("#ui-bizagi-workportal-widget-view-options",t).hide(),e.icoTaskState="",e.idCase=i,e.idWorkflow="",e.onlyFavorites="",e.popupOpened=!1,""!=r&&""!=a&&(void 0===bizagi.cache?bizagi.cache={}:void 0!==bizagi.cache[i]&&bizagi.cache[i].idWorkitem==parseInt(r)&&bizagi.cache[i].idTask==parseInt(a)&&void 0!==bizagi.cache[i].isComplex&&(r="")),e.publish("executeAction",{action:bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_ROUTING,idCase:i,idWorkItem:r,idTask:a,eventAsTasks:!0})}),$(".sortColumnsData",t).click(function(){e.loadCasesGrid({idWorkflow:idWorkflow,workflowName:params.workflowName,orderFieldName:$(this).find("#orderFieldName").val(),orderType:0==$(this).find("#orderType").val()?1:0,order:$(this).find("#order").val()})}),$(".sortColumnsData",t).click(function(){e.loadCasesGrid({idWorkflow:idWorkflow,workflowName:params.workflowName,orderFieldName:$(this).find("#orderFieldName").val(),orderType:0==$(this).find("#orderType").val()?1:0,order:$(this).find("#order").val()})}),$(".workonitRow.showDesc",t).click(function(){$("#ui-bizagi-workportal-wrapper-back",t).show(),$("#ui-bizagi-workportal-widget-view-options",t).hide(),e.publish("executeAction",{action:bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_ROUTING,idCase:$(this).parents("td").first().find("#idCase").val()})}),$(".ui-bizagi-wp-app-inbox-cases-start",t).click(function(){var t,i=$(this),r=i.closest("td"),a=$("#isFavorite",r),o=a.val(),s=$("#idCase",r).val();"false"==o?(t={idObject:s,favoriteType:"CASES"},$.when(e.dataService.addFavorite(t)).done(function(e){i.addClass("on").removeClass("off"),a.val("true"),$("#guidFavorite",r).val(e.idFavorites)})):(t={idObject:$("#guidFavorite",r).val(),favoriteType:"CASES"},$.when(e.dataService.delFavorite(t)).done(function(e){i.addClass("off").removeClass("on"),a.val("false")}))})},formatRequest:function(e){return e},formatCategories:function(e){return e},isArray:function(e){return"object"==typeof e},isDate:function(e){var t=!1;try{new Date(e).getYear()>0&&(t=!0)}catch(e){t=!1}return t},getMenu:function(){return this.params.menu||null}}),$.Class.extend("bizagi.workportal.tablet.facade",{getWidgetImplementation:function(e){return e==bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX?"bizagi.workportal.widgets.inbox":e==bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX_GRID?"bizagi.workportal.widgets.inboxGrid":e==bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_ROUTING?"bizagi.workportal.widgets.routing":e==bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_RENDER?"bizagi.workportal.widgets.render":e==bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_START_FORM?"bizagi.workportal.widgets.startForm":e==bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_REPORTS_MENU?"bizagi.workportal.widgets.reportsMenu":e==bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_REPORTS_CHART?"bizagi.workportal.widgets.reportsChart":e==bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_NEWCASE?"bizagi.workportal.widgets.newCase":e==bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_ASYNC?"bizagi.workportal.widgets.async":e==bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_SEARCH?"bizagi.workportal.widgets.search":e==bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_OLDRENDERINTEGRATION?"bizagi.workportal.widgets.oldrenderintegration":e==bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_COMPLEXGATEWAY?"bizagi.workportal.widgets.complexgateway":null}},{init:function(e,t){this.templates={},this.workportal=e,this.dataService=t,this.setIPadMetaTags(),this.getWorkPortalVersion()},getWorkportal:function(){return this.workportal},setIPadMetaTags:function(){$("<meta>",{name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"}).appendTo("head"),$("<link>",{rel:"apple-touch-icon-precomposed",href:"jquery/css/bizagi/tablet/images/BizAgi_logo.png"}).appendTo("head")},initAsyncStuff:function(){var e=this;return bizagi.enableCustomizations?$.when(bizagi.templateService.loadCustomTemplates().pipe(function(){return e.loadTemplates()}),bizagi.util.loadFile({src:bizagi.getStyleSheet("bizagi.overrides."+bizagi.detectDevice()+".custom.styles"),type:"css"}),bizagi.util.loadFile({src:bizagi.getJavaScript("bizagi.workportal."+bizagi.detectDevice()+".overrides"),type:"js"})):$.when(e.loadTemplates())},loadTemplates:function(){var e=this,t=new $.Deferred,i="tablet_android"==bizagi.detectDevice()?"bizagi.workportal.tablet.android.menu":"bizagi.workportal.tablet.ios.menu";return $.when(e.loadTemplate("workportal",bizagi.getTemplate("bizagi.workportal.tablet")),e.loadTemplate("menu",bizagi.getTemplate(i)+"#ui-bizagi-workportal-menu-content"),e.loadTemplate("menu.items",bizagi.getTemplate(i)+"#ui-bizagi-workportal-widget-menu-items"),e.loadTemplate("menu.modal.items.inbox",bizagi.getTemplate(i)+"#ui-bizagi-workportal-widget-menu-items-modal"),e.loadTemplate("menu.modal.input-tray",bizagi.getTemplate(i)+"#ui-bizagi-workportal-widget-menu-input-tray-modal"),e.loadTemplate("popup",bizagi.getTemplate("bizagi.workportal.tablet.popup")),e.loadTemplate("workportal.notCompatibleIOS",bizagi.getTemplate("bizagi.workportal.tablet.notCompatibleIOS")),e.loadTemplate("bizagi.workportal.tablet.unavailable",bizagi.getTemplate("bizagi.workportal.tablet.unavailable")),e.loadTemplate("inbox",bizagi.getTemplate("bizagi.workportal.tablet.widget.inbox")),e.loadTemplate("inbox.common.processes",bizagi.getTemplate("bizagi.workportal.tablet.widget.inbox.common")+"#ui-bizagi-workportal-widget-inbox-common-processes"),e.loadTemplate("inbox.common.case-list",bizagi.getTemplate("bizagi.workportal.tablet.widget.inbox.common")+"#ui-bizagi-workportal-widget-inbox-cases-personalized-list"),e.loadTemplate("inbox.common.case-summary",bizagi.getTemplate("bizagi.workportal.tablet.widget.inbox.common")+"#ui-bizagi-workportal-widget-inbox-common-case-summary"),e.loadTemplate("inbox-common-pagination-grid",bizagi.getTemplate("bizagi.workportal.tablet.widget.inbox.common")+"#ui-bizagi-workportal-widget-inbox-common-pagination-grid"),e.loadTemplate("inbox-common-pagination-inbox",bizagi.getTemplate("bizagi.workportal.tablet.widget.inbox.common")+"#ui-bizagi-workportal-widget-inbox-common-pagination-inbox"),e.loadTemplate("inbox-common-noresults",bizagi.getTemplate("bizagi.workportal.tablet.widget.inbox.common")+"#ui-bizagi-workportal-widget-inbox-common-noresults"),e.loadTemplate("inbox-common-header",bizagi.getTemplate("bizagi.workportal.tablet.widget.inbox.common")+"#ui-bizagi-workportal-widget-inbox-common-header"),e.loadTemplate("inbox-common-header-view",bizagi.getTemplate("bizagi.workportal.tablet.widget.inbox.common")+"#ui-bizagi-workportal-widget-inbox-common-header-view"),e.loadTemplate("inbox-common-case-summary-form",bizagi.getTemplate("bizagi.workportal.tablet.widget.inbox.common")+"#ui-bizagi-workportal-widget-inbox-common-case-description-form"),e.loadTemplate("inbox-common-case-summary-subprocess",bizagi.getTemplate("bizagi.workportal.tablet.widget.inbox.common")+"#ui-bizagi-workportal-widget-inbox-common-case-description-subprocess"),e.loadTemplate("inbox-common-case-summary-assignees",bizagi.getTemplate("bizagi.workportal.tablet.widget.inbox.common")+"#ui-bizagi-workportal-widget-inbox-common-case-description-assignees"),e.loadTemplate("inbox-common-case-summary-events",bizagi.getTemplate("bizagi.workportal.tablet.widget.inbox.common")+"#ui-bizagi-workportal-widget-inbox-common-case-description-events"),e.loadTemplate("inbox-common-case-summary-activities",bizagi.getTemplate("bizagi.workportal.tablet.widget.inbox.common")+"#ui-bizagi-workportal-widget-inbox-common-case-description-activities"),e.loadTemplate("inbox-grid",bizagi.getTemplate("bizagi.workportal.tablet.widget.inbox.grid")+"#ui-bizagi-workportal-widget-inbox-grid"),e.loadTemplate("inbox-grid-cases",bizagi.getTemplate("bizagi.workportal.tablet.widget.inbox.grid")+"#ui-bizagi-workportal-widget-inbox-grid-cases"),e.loadTemplate("reportsChart",bizagi.getTemplate("bizagi.workportal.tablet.widget.reportsChart")+"#ui-bizagi-workportal-widget-reports-chart"),e.loadTemplate("reportsMenu-container",bizagi.getTemplate("bizagi.workportal.tablet.widget.reportsMenu")+"#ui-bizagi-workportal-widget-reportsmenu-container"),e.loadTemplate("reportsMenu-items",bizagi.getTemplate("bizagi.workportal.tablet.widget.reportsMenu")+"#ui-bizagi-workportal-widget-reportsmenu-items"),e.loadTemplate("reportsMenu-itemsdata",bizagi.getTemplate("bizagi.workportal.tablet.widget.reportsMenu")+"#ui-bizagi-workportal-widget-reportsmenu-itemsdata"),e.loadTemplate("reportsMenu-tree",bizagi.getTemplate("bizagi.workportal.tablet.widget.reportsMenu")+"#ui-bizagi-workportal-widget-reportsmenu-tree"),e.loadTemplate("reportsMenu-noitems",bizagi.getTemplate("bizagi.workportal.tablet.widget.reportsMenu")+"#ui-bizagi-workportal-widget-reportsmenu-noitems"),e.loadTemplate("reportsMenu-edition",bizagi.getTemplate("bizagi.workportal.tablet.widget.reportsMenu")+"#ui-bizagi-workportal-widget-reportsmenu-edition"),e.loadTemplate("reportsMenu-vldmessage",bizagi.getTemplate("bizagi.workportal.tablet.widget.reportsMenu")+"#ui-bizagi-workportal-widget-reportsmenu-vldnmessage"),e.loadTemplate("reportsMenu-delete",bizagi.getTemplate("bizagi.workportal.tablet.widget.reportsMenu")+"#ui-bizagi-workportal-widget-reportsmenu-delete"),e.loadTemplate("routing",bizagi.getTemplate("bizagi.workportal.tablet.widget.routing")),e.loadTemplate("complex-gateway-frame",bizagi.getTemplate("bizagi.workportal.tablet.widget.complexgateway")+"#ui-bizagi-wp-app-complexgateway-frame"),e.loadTemplate("complex-gateway-header",bizagi.getTemplate("bizagi.workportal.tablet.widget.complexgateway")+"#ui-bizagi-wp-app-complexgateway-header"),e.loadTemplate("complex-gateway-row",bizagi.getTemplate("bizagi.workportal.tablet.widget.complexgateway")+"#ui-bizagi-wp-app-complexgateway-row"),e.loadTemplate("newCase",bizagi.getTemplate("bizagi.workportal.tablet.widget.newCase")+"#ui-bizagi-workportal-widget-newcase"),e.loadTemplate("newCase-categories",bizagi.getTemplate("bizagi.workportal.tablet.widget.newCase")+"#ui-bizagi-workportal-widget-newcase-categories"),e.loadTemplate("newCase-categories-tree",bizagi.getTemplate("bizagi.workportal.tablet.widget.newCase")+"#ui-bizagi-workportal-widget-newcase-categories-tree"),e.loadTemplate("newCase-categories-recent-process",bizagi.getTemplate("bizagi.workportal.tablet.widget.newCase")+"#ui-bizagi-workportal-widget-recent-process"),e.loadTemplate("async",bizagi.getTemplate("bizagi.workportal.tablet.widget.async")),e.loadTemplate("render",bizagi.getTemplate("bizagi.workportal.tablet.widget.render")+"#ui-bizagi-workportal-widget-render"),e.loadTemplate("startForm",bizagi.getTemplate("bizagi.workportal.tablet.widget.startForm")+"#ui-bizagi-workportal-widget-start-form"),e.loadTemplate("render-case-summary",bizagi.getTemplate("bizagi.workportal.tablet.widget.render")+"#ui-bizagi-workportal-widget-render-case-description"),e.loadTemplate("search",bizagi.getTemplate("bizagi.workportal.tablet.widget.search")+"#ui-bizagi-workportal-widget-search"),e.loadTemplate("search-field",bizagi.getTemplate("bizagi.workportal.tablet.widget.search")+"#ui-bizagi-workportal-widget-search-inputfield"),e.loadTemplate("info-message",bizagi.getTemplate("common.bizagi.tablet.info-message")),e.loadTemplate("integration-old-render",bizagi.getTemplate("bizagi.workportal.tablet.widget.oldrenderintegration")+"#ui-bizagi-workportal-widget-oldrender")).done(function(){t.resolve()}),t.promise()},loadTemplate:function(e,t){var i=this;return bizagi.templateService.getTemplate(t).done(function(t){i.templates[e]=t})},getTemplate:function(e){return this.templates[e]},getMainController:function(){return new bizagi.workportal.controllers.main(this,this.dataService)},getMenuController:function(){return new bizagi.workportal.controllers.menu(this,this.dataService)},getWorkareaController:function(){return new bizagi.workportal.controllers.workarea(this,this.dataService)},getWidget:function(widget,params){var widgetImplementation=this.Class.getWidgetImplementation(widget);if(widgetImplementation)try{var dynamicFunction="var baDynamicFn = function(facade, dataService, params){ \r\n";return dynamicFunction+="return new "+widgetImplementation+"(facade, dataService, params);\r\n",dynamicFunction+="}\r\n",dynamicFunction+="baDynamicFn",dynamicFunction=eval(dynamicFunction),dynamicFunction(this,this.dataService,params)}catch(e){}return bizagi.log(widget+" widget not supported",params,"error"),null},getAction:function(e,t){return e==bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_ROUTING?new bizagi.workportal.actions.routing(this,this.dataService,t):e==bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_SEARCH?new bizagi.workportal.actions.search(this,this.dataService,t):(bizagi.log(e+" action not supported",t,"error"),null)},getWorkPortalVersion:function(){$.when(this.dataService.getWorkPortalVersion()).done(function(e){bizagi.setWorkPortalVersion(e.version)})}}),bizagi="undefined"!=typeof bizagi?bizagi:{},bizagi.override=void 0!==bizagi.override?bizagi.override:{},bizagi.override.customWorkportalHandlers={},bizagi.override.customizeWorkportalHandler=function(e,t){bizagi.override.customWorkportalHandlers[e]=t},bizagi.workportal.services.context&&(bizagi.workportal.services.context.original=$.extend(!0,{},bizagi.workportal.services.context.prototype),$.extend(bizagi.workportal.services.context.prototype,{getUrl:function(e){return"workportal"==this.context&&bizagi.override.customWorkportalHandlers[e]?bizagi.override.customWorkportalHandlers[e]:bizagi.workportal.services.context.original.getUrl.apply(this,arguments)}})),bizagi.override.customizeWorkportalWidget=function(widget,extensionMethod){var widgetImplementation=bizagi.workportal.desktop.facade.getWidgetImplementation(widget);widgetImplementation&&eval(widgetImplementation).extend(widgetImplementation,{},{postRender:function(){this._super();var e=this.getContent();extensionMethod&&extensionMethod(this,e)}})},bizagi.override.customButtons=[],bizagi.override.addCustomMenuButton=function(e){bizagi.override.customButtons.push(e)},bizagi.workportal.controllers.menu&&(bizagi.workportal.controllers.menu.original=$.extend(!0,{},bizagi.workportal.controllers.menu.prototype),$.extend(bizagi.workportal.controllers.menu.prototype,{postRender:function(){var e=this,t=e.workportalFacade.getTemplate("menu.custom-button");return $.when(bizagi.workportal.controllers.menu.original.postRender.apply(this,arguments)).pipe(function(i){var r=$("[data-bizagi-component=menuItems]",i);return $.each(bizagi.override.customButtons,function(i,a){if("function"!=typeof a.isAvailable||a.isAvailable()){var o=$.tmpl(t,a);null==a.submenu?o.click(function(){a.click&&a.click(e)}):o.click(function(){e.renderSubMenu(o,a.submenu,a.click)}),r.append(o)}}),i})}})),bizagi.override.addDataService=function(e,t){if(bizagi.workportal.services.service){bizagi.workportal.services.service.original=$.extend(!0,{},bizagi.workportal.services.service.prototype);var i={};i[e]=t,$.extend(bizagi.workportal.services.service.prototype,i)}},$.Class.extend("bizagi.workportal.device.factory",{},{init:function(e){this.device=bizagi.util.detectDevice(),this.workportal=e,this.cachedFacade=null},getWorkportalFacade:function(e,t){var i=this,r=new $.Deferred;return t=void 0===t||t,null!=i.cachedFacade?r.resolve(i.cachedFacade):"desktop"==this.device?$.when(i.getDesktopWorkportalFacade(e,t)).done(function(e){i.cachedFacade=e,r.resolve(e)}):"tablet"==this.device||"tablet_ios"==this.device||"tablet_android"==this.device?$.when(i.getTabletWorkportalFacade(e,t)).done(function(e){i.cachedFacade=e,r.resolve(e)}):"smartphone_ios"==this.device||"smartphone_android"==this.device?$.when(i.getSmartphoneWorkportalFacade(e,t)).done(function(e){i.cachedFacade=e,r.resolve(e)}):(alert("Not supported device: "+this.device),r.resolve("")),r.promise()},getDesktopWorkportalFacade:function(e,t){var i=$.Deferred(),r=new bizagi.workportal.desktop.facade(this.workportal,e);return $.when(r.initAsyncStuff(t)).done(function(){i.resolve(r)}),i.promise()},getTabletWorkportalFacade:function(e){var t=new $.Deferred,i=new bizagi.workportal.tablet.facade(this.workportal,e);return i.initAsyncStuff().done(function(){t.resolve(i)}),t.promise()},getSmartphoneWorkportalFacade:function(e){var t=new $.Deferred,i=new bizagi.workportal.smartphone.facade(e);return i.initAsyncStuff().done(function(){t.resolve(i)}),t.promise()},getDataService:function(){return this.dataService}}),bizagi.workportal=bizagi.workportal||{},bizagi.workportal.currentInboxView||(bizagi.workportal.currentInboxView="inbox"),bizagi.workportal.state=bizagi.workportal.state||{},$.Class.extend("bizagi.workportal.facade",{},{init:function(e){this.deviceFactory=new bizagi.workportal.device.factory(this),this.dataService=new bizagi.workportal.services.service(e),this.dataService.routing=new bizagi.workportal.services.routing({dataService:this.dataService}),this.defaultParams=e||{},this.timeoutID},loadDefaultWidget:function(){if(!this.defaultWidget&&!bizagi.util.isEmpty(window.location.hash)){var e=bizagi.util.getHashParams();"/"!=e[0]&&(this.defaultWidget=e[0])}if(!this.defaultWidget&&!bizagi.util.isEmpty(window.location.search)){var t=bizagi.util.getQueryString();"activityform"!==t.widget&&"activityform"!==this.defaultParams.widget||bizagi.util.isMobileDevice()?this.defaultWidget=t.widget:(this.defaultWidget="projectDashboard",this.defaultParams.caseLink=!0)}this.defaultWidget||bizagi.util.isEmpty(this.defaultParams.widget)||(this.defaultWidget=this.defaultParams.widget),this.defaultWidget||"undefined"==typeof BIZAGI_DEFAULT_WIDGET||bizagi.util.isEmpty(BIZAGI_DEFAULT_WIDGET)||(this.defaultWidget=BIZAGI_DEFAULT_WIDGET),!this.defaultWidget&&bizagi.cookie("bizagiDefaultWidget")&&(this.defaultWidget=bizagi.cookie("bizagiDefaultWidget")),this.defaultWidget||(this.defaultWidget="smartphone_ios"==bizagi.util.detectDevice()||"smartphone_android"==bizagi.util.detectDevice()?bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX:bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX_GRID),"projectDashboard"!==this.defaultWidget&&"homeportal"!==this.defaultWidget&&bizagi.cookie("bizagiDefaultWidget",this.defaultWidget,{expires:30}),"homeportal"===this.defaultWidget&&bizagi.cookie("bizagiDefaultWidget",bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX_GRID,{expires:30}),this.dataService&&!this.dataService.online&&bizagi.util.isTabletDevice()&&bizagi.cookie("bizagiDefaultWidget",bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX,{expires:30})},execute:function(e){var t=this,i=this.ownerDocument,r=$("body",i);return e=e||$("<div/>").appendTo(r),t.loadDefaultWidget(),t.executionDeferred=new $.Deferred,t.process().done(function(i){bizagi.util.replaceSelector(r,e,i),t.executionDeferred.resolve()})},createWebpart:function(e){return this.executeWebpart($.extend(e,{creating:!0}))},testWebpartConfiguration:function(e){var t=e.webpartConfiguration,i=this.ownerDocument,r=$("body",i);e.canvas||$("<div/>").appendTo(r);return!(!t.url||""==t.url)||(bizagi.webparts.addConfigurationMessage(e,"bizagi-sharepoint-configuration-error"),!1)},executeWebpart:function(e){var t=this.ownerDocument,i=$("body",t),r=e.canvas||$("<div/>").appendTo(i),a=!0;if(e.webpartConfiguration&&(a=this.testWebpartConfiguration(e)),a)return this.processWebpart(e).done(function(e){r.append(e.content)})},ready:function(){return this.executionDeferred.promise()},process:function(){var e=this,t=new $.Deferred,i=this.deviceFactory.getWorkportalFacade(e.dataService);return e.processOfflineData(),$.when(i).pipe(function(t){return e.processWorkportal(t)}).done(function(e){t.resolve(e)}),t.promise()},processOfflineData:function(){var e=this;void 0!==e.dataService.fetchOfflineData&&1==e.dataService.online&&$.when(e.dataService.pushOfflineData()).always(function(){e.dataService.fetchOfflineData()})},processWebpart:function(e){var t,i,r=new $.Deferred;bizagi.detectRealDevice();return t=this.deviceFactory.getWorkportalFacade(this.dataService,!1),$.extend(e,this.defaultParams),$.when(t).pipe(function(t){var i=new $.Deferred;return $.when(t.loadWebpart(e)).done(function(){i.resolve(t)}),i.promise()}).pipe(function(t){return(i=t.getWebpart(e.webpart,e)).render(e)}).done(function(e){r.resolve({webpart:i,content:e})}),r.promise()},processWorkportal:function(e){var t=this,i=this.mainController=e.getMainController();new $.Deferred;return i.render().then(function(e){return $.when(i.menu.isRendered()).then(function(){var e=t.getWidgetByDataUser(t.defaultParams);if("projectDashboard"===e&&t.defaultParams.caseLink){var r={action:bizagi.workportal.actions.action.BIZAGI_WORKPORTAL_ACTION_ROUTING,idCase:bizagi.util.getQueryString().idCase,guid:bizagi.util.getQueryString().guid,caseLink:!0};void 0!==bizagi.util.getQueryString().idWorkitem&&(r.idWorkItem=bizagi.util.getQueryString().idWorkitem),i.publish("executeAction",r)}else i.setWidget($.extend(t.defaultParams,{widgetName:e},bizagi.util.getQueryString()));i.menu&&(i.menu.performResizeLayout(),e!==bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX&&e!==bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX_GRID||t.mainController.publish("showMainMenu"))}),e})},getWidgetByDataUser:function(){var e=this,t=bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX_GRID,i="projectDashboard"!==e.defaultWidget?bizagi.cookie("bizagiDefaultWidget"):"projectDashboard",r="",a=JSON.parse(bizagi.cookie("bizagiUserDisplayOptions"));if(a&&a.startPage)r={key:"userstartpage",value:a.startPage};else if(bizagi.currentUser.sUserProperties)for(var o=0,s=bizagi.currentUser.sUserProperties.length;o<s;o++)if("userstartpage"===bizagi.currentUser.sUserProperties[o].key){r=bizagi.currentUser.sUserProperties[o];break}return i!=bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX&&i!=bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX_GRID&&i!=bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_HOMEPORTAL?t=i:void 0===r||""===r||""===r.value||"1"===r.value?t=e.getWidgetByCookieAndStakeholders():"2"===r.value&&e.currentUserHaveStakeholderAssociated()?t=bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_HOMEPORTAL:"2"!==r.value||e.currentUserHaveStakeholderAssociated()?"3"===r.value&&(t=e.getWidgetByCookie(!0)):t=e.getWidgetByCookie(!0),t},getWidgetByCookieAndStakeholders:function(){return this.getWidgetByCookie(!1)},currentUserHaveStakeholderAssociated:function(){return bizagi.currentUser.associatedStakeholders&&bizagi.currentUser.associatedStakeholders.length>0},getWidgetByCookie:function(e){var t=bizagi.cookie("bizagiDefaultWidget");return e?t===bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX||t===bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX_GRID?t:bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX_GRID:this.currentUserHaveStakeholderAssociated()?bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_HOMEPORTAL:t&&t===bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX||t===bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX_GRID?t:bizagi.workportal.widgets.widget.BIZAGI_WORKPORTAL_WIDGET_INBOX_GRID},getMainController:function(){return this.mainController}}),$.Class.extend("bizagi.workportal.observable",{},{init:function(){this.observableElement=$({})},sub:function(e){var t=$._data(this.observableElement[0],"events");t&&t[e]||this.observableElement.on.apply(this.observableElement,arguments)},unsub:function(){this.observableElement.off.unbind?this.observableElement.off.unbind.apply(this.observableElement,arguments):this.observableElement.off.apply(this.observableElement,arguments)},pub:function(){return this.observableElement.triggerHandler.apply(this.observableElement,arguments)}}),$.bizagi||($.bizagi={ui:{}}),$.bizagi.ui={controls:{uitable:{namespace:"bizagi.ui.controls.uitable",availableComponents:["uicombo","uiradio","uicheckbox"],css:"biz-ui-controls-table",tmpl:"bizagi.ui.controls.table.template",tmpl2:"bizagi.ui.controls.table.tr.template",tmpl3:"bizagi.ui.controls.table.list.template"},uicombo:{namespace:"bizagi.ui.controls.uicombo",css:"biz-ui-controls-combo",tmpl:"bizagi.ui.controls.combo.template",tmpl2:"bizagi.ui.controls.combo.list.template"},uicheckbox:{namespace:"bizagi.ui.controls.uicheckbox",css:"biz-ui-controls-checkbox",tmpl:"bizagi.ui.controls.checkbox.template"},uiradio:{namespace:"bizagi.ui.controls.uiradio",css:"biz-ui-controls-radio",tmpl:"bizagi.ui.controls.radio.template"},uitreeview:{namespace:"bizagi.ui.controls.uitreeview",css:"biz-ui-controls-treeview",tmpl:"bizagi.ui.controls.treeview.template"},uimultiselect:{namespace:"bizagi.ui.controls.multiselect",css:"biz-ui-controls-multiselect",tmpl:"bizagi.ui.controls.multiselect.template"}}},function(e){e.widget("ui.treeview",{options:{list:[],defaults:[],_dataItems:[],_config:{_template:e.bizagi.ui.controls.uitreeview.tmpl,_cssClass:e.bizagi.ui.controls.uitreeview.css,_namespace:e.bizagi.ui.controls.uitreeview.namespace},SEARCH_MAX_LENGTH:1},_create:function(){var t=this,i=t.element,r=t.options._config._cssClass;t.options._dataItems=[],t.options.defaults.length&&t._setDefaults(),i.addClass(r),t.loader=new bizagi.ui.controls.tmplloader,e.when(t.loader.loadTemplates(t._initializeTemplates())).done(function(){i.append(t._renderContent()),t._eventHandlers()})},_eventHandlers:function(){var t=this;e(".biz-ui-controls-tree-item",t.element).on("click",".biz-ui-controls-treeview-row:first-child",function(i){var r=e(this),a=e(i.target);if(a.is("i.biz-ui-controls-treeview-subitems"))t._slideSubItems(r);else{if(!a.is("input[type=checkbox]")){var o=a.siblings("input[type=checkbox]");o.prop("checked")?o.prop("checked",!1):o.prop("checked",!0)}r.toggleClass("biz-ui-controls-uitreeview-items-active"),t._setValue(r)}i.stopPropagation()})},_slideSubItems:function(e){e.siblings("ul").slideToggle(300)},_setValue:function(t){var i=this.options._dataItems,r=t.data("value"),a=t.data("text");if(t.hasClass("biz-ui-controls-uitreeview-items-active"))i.push({text:a,value:r});else{var o=e.map(i,function(e,t){if(e.value==r)return t});i.splice(o[0],1)}this._trigger("checkItem")},getDataItems:function(){return this.options._dataItems},setList:function(e){this.options.list=e,this.options._dataItems=[],this._refresh()},getList:function(){return this.options.list},_refresh:function(){this.element.empty().append(this._renderContent()),this._eventHandlers()},_renderContent:function(){var t=this,i=t.options.list,r=t.loader.getTemplate("items");return e.tmpl(r,{list:i},{itemValue:e.proxy(t._itemValue,t),itemText:e.proxy(t._itemText,t),renderSubItems:e.proxy(t._renderSubItems,t),setDefaults:e.proxy(t._setDefaults,t)})},_initializeTemplates:function(){var e=this.options._config._template;return{items:bizagi.getTemplate(e)+"#bizagi-ui-controls-uitreeview-items",subitems:bizagi.getTemplate(e)+"#bizagi-ui-controls-uitreeview-subitems"}},_renderSubItems:function(t){var i=this,r=i.loader.getTemplate("subitems");return e.tmpl(r,t,{itemValue:e.proxy(i._itemValue,i),itemText:e.proxy(i._itemText,i),renderSubItems:e.proxy(i._renderSubItems,i),setDefaults:e.proxy(i._setDefaults,i)}).html()},_destroy:function(){this.options._dataItems=[]},_itemValue:function(e){var t="";return this.options.itemValue?t=this.options.itemValue(e):"string"!=typeof e.value&&"number"!=typeof e.value||(t=e.value),t},_itemText:function(e){var t="";return this.options.itemText?t=this.options.itemText(e):"string"==typeof e.text&&(t=e.text),t},_setDefaults:function(e){var t=this,i=(t.options.defaults,t.options.list,t._itemText(e)),r=t._itemValue(e);return t.options._dataItems.push({text:i,value:r}),""}})}(jQuery),function(e){e.widget("ui.multiSelect",{options:{list:[],label:"MyLabel",_dataItems:[],_config:{_template:e.bizagi.ui.controls.uimultiselect.tmpl,_cssClass:e.bizagi.ui.controls.uimultiselect.css,_namespace:e.bizagi.ui.controls.uimultiselect.namespace},SEARCH_MIN_LENGTH:3},_create:function(){var t=this,i=t.element;t.options._dataItems=[],e.when(t._renderContent()).done(function(r){i.append(r);var a=i.find("input[type=text]");a.autocomplete({source:t._getDataSource(),minLength:t.options.SEARCH_MIN_LENGTH,messages:{noResults:null},select:function(i,r){var a=e.grep(t.options.list,function(e){return t._itemValue(e)==r.item.id});t._prependElements(a[0])},close:function(){a.val("")}}),t._eventHandlers()})},getDataItems:function(){return this.options._dataItems},setList:function(e){this.options.list=e,this._refresh()},getList:function(){return this.options.list},_initializeTemplates:function(){var e=this.options._config._template;return{multiselect:bizagi.getTemplate(e)}},_renderContent:function(){var t=this,i=t.element,r=(t.options._config._template,t.options._config._cssClass),a=t.options.label;return i.addClass(r),t.loader=new bizagi.ui.controls.tmplloader,e.when(t.loader.loadTemplates(t._initializeTemplates())).pipe(function(){var i=t.loader.getTemplate("multiselect");return e.tmpl(i,{label:a})})},_refresh:function(){var e=this.element.find("input[type=text]");e.parent("li").siblings("li").remove(),this.options._dataItems=[],e.autocomplete("option","source",this._getDataSource())},_getDataSource:function(){var t=this,i=[];return e.each(t.options.list,function(e,r){i.push({label:t._itemText(r),value:t._itemText(r),id:t._itemValue(r)})}),i},_prependElements:function(t){var i=this,r=i.element,a=i.options._dataItems,o=r.find("input[type=text]");e.grep(a,function(e){return e.value==i._itemValue(t)}).length||(a.push({text:i._itemText(t),value:i._itemValue(t)}),o.parent().before('<li class="selected-item" data-value="'+i._itemValue(t)+'"><label>'+i._itemText(t)+'</label><a class="closebutton"></a></li>'),i._trigger("addItem"))},_itemValue:function(e){var t="";return this.options.itemValue?t=this.options.itemValue(e):"string"!=typeof e.value&&"number"!=typeof e.value||(t=e.value),t},_itemText:function(e){var t="";return this.options.itemText?t=this.options.itemText(e):"string"==typeof e.text&&(t=e.text),t},_destroy:function(){this.options._dataItems=[]},_eventHandlers:function(){var t=this,i=t.element,r=i.find("input[type=text]"),a=t.options._dataItems;e("ul",i).on("click","a.closebutton",function(i){i.preventDefault();var r=e(i.target).closest("li").data("value"),o=e.map(a,function(e,t){if(e.value==r)return t});a.splice(o[0],1),e(this).parent().remove(),t._trigger("removeItem")}),i.on("click",function(e){r.focus()}),r.on("keydown",function(e){13==e.keyCode&&e.preventDefault()})}})}(jQuery),function(e){"use strict";e.fn.uicombo=function(t,i){var r=this;return r.config={namespace:e.bizagi.ui.controls.uicombo.namespace,cssComponent:e.bizagi.ui.controls.uicombo.css,internalData:{}},r.settings={data:{},ascombo:!0,disabled:!1,isSearchable:!1,isEditable:!1,nameTemplate:e.bizagi.ui.controls.uicombo.tmpl,nameSubTemplate:e.bizagi.ui.controls.uicombo.tmpl2,initValue:null,itemValue:null,itemText:null,css:"",orientation:"biz-o-left",getTemplate:function(e){return bizagi.getTemplate(e)},initializeTemplates:function(){e.Deferred();var t=this.nameTemplate,i=this.nameSubTemplate;return{combo:bizagi.getTemplate(t),list:bizagi.getTemplate(i)}},onComplete:function(){},onChange:function(){},onComboDropDown:function(){}},r.methods={init:function(t){var i,a=e(this);t.getTemplate(t.nameTemplate),t.getTemplate(t.nameSubTemplate);t.IE=navigator.appName.indexOf("Internet Explorer")>0||(!(!navigator.userAgent.match(/Trident\/7.0/)||navigator.userAgent.match(/MSIE/i))||void 0),a.attr("role",t.namespace),a.addClass(t.cssComponent),a.addClass(t.css),a.loader=new bizagi.ui.controls.tmplloader,e.when(a.loader.loadTemplates(t.initializeTemplates())).done(function(){var o=a.loader.getTemplate("combo"),s=a.loader.getTemplate("list");r.config.internalData=i=t.data,i.isEditable=t.isEditable,i.disabled=t.disabled,r.config.subTemplateHTML=s;var n=e.tmpl(o,t.data,{itemValue:t.itemValue?t.itemValue:r.methods.itemValue,itemText:t.itemText?t.itemText:r.methods.itemText});if(a.append(n),r.config.inputCombo=e(".biz-wp-combo-input",a),n.find(".biz-wp-combo-option").each(function(i,r){t.data.combo[i].data&&e.extend(e(r).data(),t.data.combo[i].data)}),r.settings.onComplete.apply(a,[]),a.methods=r.methods,a.config=r.config,a.settings=r.settings,a.methods.configureHandlers.apply(a,[]),e.event.trigger({type:"comboCompleted",message:"combo is Completed",time:new Date,ui:a}),r.settings.initValue){var l="",c="";c=r.settings.itemText?r.settings.itemText(r.settings.initValue):r.settings.initValue.text,l=r.settings.itemValue?r.settings.itemValue(r.settings.initValue):r.settings.initValue.value,""===c?a.config.inputCombo.val(""):a.config.inputCombo.val(c),r.config.inputCombo.data("value",l)}})},getControl:function(){return e(".biz-wp-combo",this)},getData:function(){return r.config.internalData},findDataByValue:function(t){if(null!=t){var i="object"==typeof t?t.join(" - "):"boolean"==typeof t?t.toString():t;e.trim(i).substring(0,i.length).toLowerCase(),this.getData()}return-1},configureHandlers:function(){var t=this,i=t.methods.getControl.apply(t,[]);t.config.inputCombo.focus(function(){}),t.config.inputCombo.blur(function(){t.settings.isSearchable&&t.methods.validateValueInDatasource()}),t.config.inputCombo.click(function(){var r="dd-"+t.config.inputCombo.attr("id");0===e("#"+r,i).length?t.methods.comboDropDown.apply(t,[]):t.methods.dropDownDestroy.apply(t,[e(r)]),t.config.inputCombo.select()}),e(".biz-wp-combo-btn",i).bind("click.combo",function(){t.config.inputCombo.trigger("click").focus()}),t.config.inputCombo.keyup(function(e){t.methods.keyUpFunction.apply(t,[e])}),t.config.inputCombo.keydown(function(e){t.methods.keyDownFunction.apply(t,[e])})},comboDropDown:function(){var t=this;e.when(t.methods.getData()).done(function(e){t.methods.internalComboDropDown.apply(t,[e]),r.settings.onComboDropDown()})},internalComboDropDown:function(t){e(".ui-select-dropdown.open").detach();var i,a=this,o={},s=e("<div class='ui-select-dropdown open'></div>"),n=a.config.inputCombo.closest(".biz-wp-combo-data-container"),l=n.closest(".biz-wp-combo"),c="dd-"+a.config.inputCombo.attr("id"),d=a.methods.findDataByValue(a.config.inputCombo.val()),u=0;t=t||a.properties.data,a.repositionInterval;var p=l.css("height"),m=a.methods.getControl.apply(a,[]);l.addClass("ac-is-visible"),l.css("height",p),n.addClass("ac-is-visible ac-clear-floats"),s.attr("id",c),i=e.tmpl(r.config.subTemplateHTML,t,{itemValue:a.settings.itemValue?a.settings.itemValue:a.methods.itemValue,itemText:a.settings.itemText?a.settings.itemText:a.methods.itemText});var g=s.append(i);n.append(g),g.position({my:"left top",at:"left bottom",of:e(".biz-wp-combo-input",m),collision:"none"}).hide(),g.fadeIn(),g.width(m.width()),a.methods.recalculateComboOffset(g,m),g.data("formWidth",n.width()),g.data("parentCombo",m),g.addClass(a.settings.orientation),-1!==d&&((o=e("li[data-value='"+d.id+"']",g)).addClass("ui-selected"),o.addClass("active"),u=parseInt(o.position().top),g.scrollTop(u)),g.on("mouseup","li",function(t){t.stopPropagation();var i={value:e(this).data("value").toString()?e(this).data("value"):"",text:e(this).text()};a.methods.onComboItemSelected.apply(a,[i]),a.config.inputCombo.focus(),g.fadeOut("slow",function(){a.methods.dropDownDestroy.apply(a,[g])}),e(document).unbind("click.closecombo")}),e.makeArray(g,a.methods.getControl.apply(a,[])).bind("click",function(e){return e.preventDefault(),!1}),g.bind("mousedown.closecombo",function(){g.attr("md",!0)}),e(document).bind("mousedown.resizecombo",function(t){e(t.target).hasClass("ui-resizable-handle")&&(a.repositionInterval&&clearInterval(a.repositionInterval),a.repositionInterval=setInterval(function(){a.methods.dropDownReposition.apply(a,[g,n])},10))}),e(document).bind("mouseup.resizecombo",function(t){clearInterval(a.repositionInterval);var i=e(t.target);g.attr("md")?g.removeAttr("md"):i.hasClass("ui-select-dropdown")||a.methods.dropDownValidClose.apply(a,[i,g])}),e(document).on("mouseup.closecombo",function(t){var i;i=a.settings.IE&&t.currentTarget.activeElement?t.currentTarget.activeElement:t.target;var r=e(i);g.attr("md")?g.removeAttr("md"):r.hasClass("ui-select-dropdown")||a.methods.dropDownValidClose.apply(a,[r,g])}),e(window).bind("resize.resizecombo",function(){a.repositionInterval&&clearInterval(a.repositionInterval),a.methods.dropDownReposition.apply(a,[g,n])}),e(document).one("click.closecombo",function(t){var i=e(t.target);g.attr("md")?g.removeAttr("md"):a.methods.dropDownValidClose.apply(a,[i,g])})},dropDownValidClose:function(t,i){var r=this;i.fadeOut("slow",function(){r.methods.dropDownDestroy.apply(r,[i])}),e(document).unbind("click.closecombo")},dropDownReposition:function(t,i){var r=this.methods.getControl.apply(this,[]);i.width()!=t.data("formWidth")&&(t.width(r.width()<100?100:r.width()),t.position({my:"left top",at:"left bottom",of:e(".biz-wp-combo-input",r),collision:"none"}),t.data("formWidth",i.width()))},dropDownDestroy:function(t){var i=this.config.inputCombo.closest(".ui-bizagi-control"),r=i.closest(".ui-bizagi-render");i.hasClass("ac-is-visible")&&i.removeClass("ac-is-visible"),i.hasClass("ac-clear-floats")&&i.removeClass("ac-clear-floats"),r.css("height","auto"),r.hasClass("ac-is-visible")&&r.removeClass("ac-is-visible"),t.remove(),e(document).unbind("mousedown.closecombo"),e(document).unbind("mouseup.resizecombo"),e(window).unbind("resize.resizecombo"),e(window).unbind("mouseup.closecombo"),this.repositionInterval,clearInterval(this.repositionInterval)},validateValueInDatasource:function(){var e=this,t=r.config.inputCombo.val(),i=e.findDataByValue(t);e.value||(e.value={id:""}),i.id>0?(e.setValue({id:i.id},!1),e.setDisplayValue(i)):""==i.id?(e.value.id!=i.id&&e.setValue(i,!1),e.setDisplayValue(i)):e.setDisplayValue(e.selectedValue)},keyDownFunction:function(t){var i=this,a="dd-"+r.config.inputCombo.attr("id"),o=e("#"+a),s=e("li.active",o);return(t=t||window.event).altKey||t.ctrlKey||t.metaKey?1:(0===o.length&&(i.methods.comboDropDown.apply(i,[]),o=e("#"+a)),t.shiftKey&&t.keyCode?(o.remove(),0):(27==t.keyCode&&(i.methods.setDisplayValue.apply(i,[i.selectedValue]),o.remove()),9==t.keyCode||13==t.keyCode?(s.length>0&&i.config.inputCombo.val(s.text()),i.settings.isSearchable?i.methods.validateValueInDatasource():i.methods.setValue.apply(i,[s.data("value")]),o.remove(),1):"38"==t.keyCode||"37"==t.keyCode?(i.methods.selectPreviousElement.apply(i,[o]),0):"40"==t.keyCode||"39"==t.keyCode?(i.methods.selectNextElement.apply(i,[o]),0):36==t.keyCode?(i.methods.selectFirstElement.apply(i,[o]),0):35==t.keyCode?(i.methods.selectLastElement.apply(i,[o]),0):1))},keyUpFunction:function(t){var i="dd-"+r.config.inputCombo.attr("id"),a=e("#"+i);return(t=t||window.event).altKey||t.ctrlKey||t.metaKey||50==t.keyCode||13==t.keyCode||9==t.keyCode||27==t.keyCode||"38"==t.keyCode||"40"==t.keyCode||t.shiftKey&&t.keyCode||36==t.keyCode||35==t.keyCode||33==t.keyCode||34==t.keyCode?0:(0===a.length&&(this.methods.comboDropDown.apply(this,[]),a=e("#"+i)),this.methods.selectItemByKeyUp.apply(this,[]),1)},selectItemByKeyUp:function(){var t,i=this,a="dd-"+r.config.inputCombo.attr("id"),o=e("#"+a);e(".active",o).removeClass("active");var s=i.settings.isSearchable?i.methods.findDataByValue(r.config.inputCombo.val()):-1;-1!==s?(t=e("li[data-value='"+s.id+"']",o)).addClass("active"):t=e("li.ui-selected",o),o.length>0&&t.length>0?(scrollPosition=parseInt(t.position().top),o.scrollTop(scrollPosition)):i.methods.setValue.apply(i,[i.selectedValue])},selectFirstElement:function(t){var i=e("li:first",t);e("li",t).removeClass("active"),i.addClass("active"),scrollPosition=i.position().top,t.scrollTop(scrollPosition),r.config.inputCombo.val(e(i).text())},selectLastElement:function(t){var i=e("li:last",t);e("li",t).removeClass("active"),i.addClass("active"),scrollPosition=i.position().top,t.scrollTop(scrollPosition),r.config.inputCombo.val(e(i).text())},selectPreviousElement:function(t){var i=0,a=e("li.active",t);0===a.length&&(a=e("li:first",t));var o=a.prev();0!=o.length&&(a.removeClass("active"),e(o).addClass("active"),i=e(o).position().top,t.scrollTop(i),r.config.inputCombo.val(e(o).text()))},selectNextElement:function(t){var i=0,a=e("li.active",t);0===a.length&&(a=e("li:first",t));var o=a.next();0!=o.length&&(a.removeClass("active"),e(o).addClass("active"),i=e(o).position().top,t.scrollTop(i),r.config.inputCombo.val(e(o).text()))},onComboItemSelected:function(e){var t=e.value.toString(),i=e.text||"";this.config.inputCombo.val(i),this.methods.setValue.apply(this,[t])},setValue:function(t){this.config.inputCombo.data("value",t);var i=this.config.inputCombo,a={type:"comboChange",message:"combo change",time:new Date,ui:i};r.settings.onChange(a),e.event.trigger(a)},setDisplayValue:function(e){null!==(e=r.settings.itemValue?r.settings.itemValue:r.methods.itemValue)?r.config.inputCombo.val(""):null===e&&r.config.inputCombo.val("")},clearDisplayValue:function(){r.config.inputCombo.val(""),this.value=this.properties.value=this.selectedValue},getSelectedValue:function(){return this.selectedValue},recalculateComboOffset:function(e,t){if(bizagi.util.isIE()&&9==bizagi.util.getInternetExplorerVersion()&&e.width()!==t.width()){var i=t.width()-e.width();e.width(t.width()+i)}},itemValue:function(e){var t="";return e.itemValue?t=e.itemValue(e):"string"!=typeof e.value&&"number"!=typeof e.value||(t=e.value),t},itemText:function(e){var t="";return e.itemValue?t=e.itemText(e):"string"==typeof e.text&&(t=e.text),t},destroy:function(t){var i=e(this);i.attr("role")===t.namespace?i.empty():e.error("No es posible eliminar un control con un namespace diferente: [role: "+t.namespace+"]")},selectItem:function(t){var i=e(".biz-wp-combo-input",this);i.val(t.text),i.data("value",t.value)}},"object"!=typeof t&&t?(e.extend(r.settings,i,r.config),r.methods[t].apply(this,[r.settings])):"object"!=typeof t&&t&&void 0!==t?void e.error("Method "+t+" does not exist on jQuery.combo"):(e.extend(r.settings,t,r.config),this.each(function(){r.methods.init.apply(this,[r.settings])}))},e.bizagi.ui.controls.uicombo.plugin=e.fn.uicombo}(jQuery),$.Class.extend("bizagi.ui.controls.tmplloader",{},{init:function(){this.templates=[]},loadTemplates:function(e){var t=this,i=e||{},r=new $.Deferred,a=[];return $.each(i,function(e,i){var r=t.loadTemplate(e,i);a.push(r)}),$.when.apply($,a).done(function(){r.resolve()}),r.promise()},loadTemplate:function(e,t){var i=this.templates,r=new $.Deferred;return i[e]?(r.resolve(),r.promise()):bizagi.templateService.getTemplate(t).done(function(t){i[e]=t})},getTemplate:function(e){var t=this.templates;return t[e]?t[e]:null}}),bizagi.reporting||(bizagi.reporting={}),bizagi.reporting={BAMProcess:{defaultReport:"bamprocessloadanalysis",info:{reportSet:1},reports:{bamprocessloadanalysis:{components:["filters-processversion","filters-dimension"],resource:"bz-rp-loadanalysis-tab"},bamprocessworkinprogress:{components:["filters-processversion","filters-dimension"],resource:"bz-rp-workinprogress-tab"}}},BAMTask:{defaultReport:"bamtasksworkinprogress",info:{reportSet:2},reports:{bamtasksworkinprogress:{components:["filters-processversion","filters-dimension"],resource:"bz-rp-workinprogress-tab"},bamtaskloadanalysis:{components:["filters-processversion","filters-dimension"],resource:"bz-rp-loadanalysis-tab"}}},AnalyticsProcess:{defaultReport:"analyticsprocesscycletime",info:{reportSet:3},reports:{analyticsprocesscycletime:{components:["filters-processversion","filters-dimension","filters-time"],resource:"bz-rp-cycletime-tab"},analyticsprocessdurationhistogram:{components:["filters-processversion","filters-dimension","filters-time"],resource:"bz-rp-durationhistogram-tab"},analyticsprocessactivity:{components:["filters-processversion","filters-dimension","filters-time"],resource:"bz-rp-processactivity-tab"},analyticsprocessactivationranking:{components:["filters-dimension","filters-time"],resource:"bz-rp-activationranking-tab"},analyticsprocessfrequentspaths:{components:["filters-processversion","filters-dimension","filters-time"],resource:"bz-rp-frequentspaths-tab"}}},AnalyticsTask:{defaultReport:"analyticstaskcycletime",info:{reportSet:4},reports:{analyticstaskcycletime:{components:["filters-processversion","filters-dimension","filters-time"],resource:"bz-rp-cycletime-tab"}}},ResourceBAM:{callBack:"myTeamCallBack",defaultReport:"bamresourcemonitorworkinprogress",info:{reportSet:6},reports:{bamresourcemonitorworkinprogress:{components:["filters-processversion","filters-dimension","filters-time"],resource:"bz-rp-workinprogress-tab"},bamresourcemonitorworkinprogressuser:{components:["filters-processversion","filters-dimension","filters-time"],resource:"bz-rp-workinprogressuser-tab"},bamresourcemonitorworkinprogressteam:{components:["filters-processversion","filters-dimension","filters-time"],resource:"bz-rp-workinprogressteam-tab"}}},AnalyticsSensor:{defaultReport:"sensors",reports:{sensors:{components:["filters-dimension","filters-time"]}},info:{reportSet:5}}};
//# sourceMappingURL=../../../../Maps/tablet_android/workportal.tablet.production.js.map
// pouchdb.nightly - 2013-11-15T17:22:49

(function() {
 // BEGIN Math.uuid.js

/*!
Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com

Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/

/*
 * Generate a random uuid.
 *
 * USAGE: Math.uuid(length, radix)
 *   length - the desired number of characters
 *   radix  - the number of allowable values for each character.
 *
 * EXAMPLES:
 *   // No arguments  - returns RFC4122, version 4 ID
 *   >>> Math.uuid()
 *   "92329D39-6F5C-4520-ABFC-AAB64544E172"
 *
 *   // One argument - returns ID of the specified length
 *   >>> Math.uuid(15)     // 15 character ID (default base=62)
 *   "VcydxgltxrVZSTV"
 *
 *   // Two arguments - returns ID of the specified length, and radix. (Radix must be <= 62)
 *   >>> Math.uuid(8, 2)  // 8 character ID (base=2)
 *   "01001010"
 *   >>> Math.uuid(8, 10) // 8 character ID (base=10)
 *   "47473046"
 *   >>> Math.uuid(8, 16) // 8 character ID (base=16)
 *   "098F4D35"
 */
var uuid;

(function() {

  var CHARS = (
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    'abcdefghijklmnopqrstuvwxyz'
    ).split('');

  uuid = function uuid_inner(len, radix) {
    var chars = CHARS;
    var uuidInner = [];
    var i;

    radix = radix || chars.length;

    if (len) {
      // Compact form
      for (i = 0; i < len; i++) uuidInner[i] = chars[0 | Math.random()*radix];
    } else {
      // rfc4122, version 4 form
      var r;

      // rfc4122 requires these characters
      uuidInner[8] = uuidInner[13] = uuidInner[18] = uuidInner[23] = '-';
      uuidInner[14] = '4';

      // Fill in random data.  At i==19 set the high bits of clock sequence as
      // per rfc4122, sec. 4.1.5
      for (i = 0; i < 36; i++) {
        if (!uuidInner[i]) {
          r = 0 | Math.random()*16;
          uuidInner[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }

    return uuidInner.join('');
  };

})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = uuid;
}

/**
*
*  MD5 (Message-Digest Algorithm)
*
*  For original source see http://www.webtoolkit.info/
*  Download: 15.02.2009 from http://www.webtoolkit.info/javascript-md5.html
*
*  Licensed under CC-BY 2.0 License
*  (http://creativecommons.org/licenses/by/2.0/uk/)
*
**/

var Crypto = {};

(function() {
  Crypto.MD5 = function(string) {

    function RotateLeft(lValue, iShiftBits) {
      return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
    }

    function AddUnsigned(lX,lY) {
      var lX4,lY4,lX8,lY8,lResult;
      lX8 = (lX & 0x80000000);
      lY8 = (lY & 0x80000000);
      lX4 = (lX & 0x40000000);
      lY4 = (lY & 0x40000000);
      lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
      if (lX4 & lY4) {
        return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
      }
      if (lX4 | lY4) {
        if (lResult & 0x40000000) {
          return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
        } else {
          return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
        }
      } else {
        return (lResult ^ lX8 ^ lY8);
      }
    }

    function F(x,y,z) { return (x & y) | ((~x) & z); }
    function G(x,y,z) { return (x & z) | (y & (~z)); }
    function H(x,y,z) { return (x ^ y ^ z); }
    function I(x,y,z) { return (y ^ (x | (~z))); }

    function FF(a,b,c,d,x,s,ac) {
      a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
      return AddUnsigned(RotateLeft(a, s), b);
    };

    function GG(a,b,c,d,x,s,ac) {
      a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
      return AddUnsigned(RotateLeft(a, s), b);
    };

    function HH(a,b,c,d,x,s,ac) {
      a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
      return AddUnsigned(RotateLeft(a, s), b);
    };

    function II(a,b,c,d,x,s,ac) {
      a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
      return AddUnsigned(RotateLeft(a, s), b);
    };

    function ConvertToWordArray(string) {
      var lWordCount;
      var lMessageLength = string.length;
      var lNumberOfWords_temp1=lMessageLength + 8;
      var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
      var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
      var lWordArray=Array(lNumberOfWords-1);
      var lBytePosition = 0;
      var lByteCount = 0;
      while ( lByteCount < lMessageLength ) {
        lWordCount = (lByteCount-(lByteCount % 4))/4;
        lBytePosition = (lByteCount % 4)*8;
        lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
        lByteCount++;
      }
      lWordCount = (lByteCount-(lByteCount % 4))/4;
      lBytePosition = (lByteCount % 4)*8;
      lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
      lWordArray[lNumberOfWords-2] = lMessageLength<<3;
      lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
      return lWordArray;
    };

    function WordToHex(lValue) {
      var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
      for (lCount = 0;lCount<=3;lCount++) {
        lByte = (lValue>>>(lCount*8)) & 255;
        WordToHexValue_temp = "0" + lByte.toString(16);
        WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
      }
      return WordToHexValue;
    };

    //**	function Utf8Encode(string) removed. Aready defined in pidcrypt_utils.js

    var x=Array();
    var k,AA,BB,CC,DD,a,b,c,d;
    var S11=7, S12=12, S13=17, S14=22;
    var S21=5, S22=9 , S23=14, S24=20;
    var S31=4, S32=11, S33=16, S34=23;
    var S41=6, S42=10, S43=15, S44=21;

    //	string = Utf8Encode(string); #function call removed

    x = ConvertToWordArray(string);

    a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;

    for (k=0;k<x.length;k+=16) {
      AA=a; BB=b; CC=c; DD=d;
      a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
      d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
      c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
      b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
      a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
      d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
      c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
      b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
      a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
      d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
      c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
      b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
      a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
      d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
      c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
      b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
      a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
      d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
      c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
      b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
      a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
      d=GG(d,a,b,c,x[k+10],S22,0x2441453);
      c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
      b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
      a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
      d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
      c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
      b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
      a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
      d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
      c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
      b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
      a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
      d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
      c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
      b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
      a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
      d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
      c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
      b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
      a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
      d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
      c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
      b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
      a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
      d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
      c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
      b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
      a=II(a,b,c,d,x[k+0], S41,0xF4292244);
      d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
      c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
      b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
      a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
      d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
      c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
      b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
      a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
      d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
      c=II(c,d,a,b,x[k+6], S43,0xA3014314);
      b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
      a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
      d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
      c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
      b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
      a=AddUnsigned(a,AA);
      b=AddUnsigned(b,BB);
      c=AddUnsigned(c,CC);
      d=AddUnsigned(d,DD);
    }
    var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);
    return temp.toLowerCase();
  }
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Crypto;
}
//Abstracts constructing a Blob object, so it also works in older
//browsers that don't support the native Blob constructor. (i.e.
//old QtWebKit versions, at least).
function createBlob(parts, properties) {
  parts = parts || [];
  properties = properties || {};
  try {
    return new Blob(parts, properties);
  } catch (e) {
    if (e.name !== "TypeError") {
      throw(e);
    }
    var BlobBuilder = window.BlobBuilder || window.MSBlobBuilder || window.MozBlobBuilder || window.WebKitBlobBuilder;
    var builder = new BlobBuilder();
    for (var i = 0; i < parts.length; i += 1) {
      builder.append(parts[i]);
    }
    return builder.getBlob(properties.type);
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = createBlob;
}

//----------------------------------------------------------------------
//
// ECMAScript 5 Polyfills
//  from www.calocomrmen./polyfill/
//
//----------------------------------------------------------------------

//----------------------------------------------------------------------
// ES5 15.2 Object Objects
//----------------------------------------------------------------------



// ES 15.2.3.6 Object.defineProperty ( O, P, Attributes )
// Partial support for most common case - getters, setters, and values
(function() {
  if (!Object.defineProperty ||
      !(function () { try { Object.defineProperty({}, 'x', {}); return true; } catch (e) { return false; } } ())) {
    var orig = Object.defineProperty;
    Object.defineProperty = function (o, prop, desc) {
      "use strict";

      // In IE8 try built-in implementation for defining properties on DOM prototypes.
      if (orig) { try { return orig(o, prop, desc); } catch (e) {} }

      if (o !== Object(o)) { throw new TypeError("Object.defineProperty called on non-object"); }
      if (Object.prototype.__defineGetter__ && ('get' in desc)) {
        Object.prototype.__defineGetter__.call(o, prop, desc.get);
      }
      if (Object.prototype.__defineSetter__ && ('set' in desc)) {
        Object.prototype.__defineSetter__.call(o, prop, desc.set);
      }
      if ('value' in desc) {
        o[prop] = desc.value;
      }
      return o;
    };
  }
}());



// ES5 15.2.3.14 Object.keys ( O )
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = function (o) {
    if (o !== Object(o)) { throw new TypeError('Object.keys called on non-object'); }
    var ret = [], p;
    for (p in o) {
      if (Object.prototype.hasOwnProperty.call(o, p)) {
        ret.push(p);
      }
    }
    return ret;
  };
}

//----------------------------------------------------------------------
// ES5 15.4 Array Objects
//----------------------------------------------------------------------



// ES5 15.4.4.18 Array.prototype.forEach ( callbackfn [ , thisArg ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEach
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (fun /*, thisp */) {
    "use strict";

    if (this === void 0 || this === null) { throw new TypeError(); }

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== "function") { throw new TypeError(); }

    var thisp = arguments[1], i;
    for (i = 0; i < len; i++) {
      if (i in t) {
        fun.call(thisp, t[i], i, t);
      }
    }
  };
}


// ES5 15.4.4.19 Array.prototype.map ( callbackfn [ , thisArg ] )
// From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/Map
if (!Array.prototype.map) {
  Array.prototype.map = function (fun /*, thisp */) {
    "use strict";

    if (this === void 0 || this === null) { throw new TypeError(); }

    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== "function") { throw new TypeError(); }

    var res = []; res.length = len;
    var thisp = arguments[1], i;
    for (i = 0; i < len; i++) {
      if (i in t) {
        res[i] = fun.call(thisp, t[i], i, t);
      }
    }

    return res;
  };
}


// Extends method
// (taken from http://code.jquery.com/jquery-1.9.0.js)
// Populate the class2type map
var class2type = {};

var types = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error"];
for (var i = 0; i < types.length; i++) {
  var typename = types[i];
  class2type[ "[object " + typename + "]" ] = typename.toLowerCase();
}

var core_toString = class2type.toString;
var core_hasOwn = class2type.hasOwnProperty;

var type = function(obj) {
  if (obj === null) {
    return String( obj );
  }
  return typeof obj === "object" || typeof obj === "function" ?
    class2type[core_toString.call(obj)] || "object" :
    typeof obj;
};

var isWindow = function(obj) {
  return obj !== null && obj === obj.window;
};

var isPlainObject = function( obj ) {
  // Must be an Object.
  // Because of IE, we also have to check the presence of the constructor property.
  // Make sure that DOM nodes and window objects don't pass through, as well
  if ( !obj || type(obj) !== "object" || obj.nodeType || isWindow( obj ) ) {
    return false;
  }

  try {
    // Not own constructor property must be Object
    if ( obj.constructor &&
      !core_hasOwn.call(obj, "constructor") &&
      !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
      return false;
    }
  } catch ( e ) {
    // IE8,9 Will throw exceptions on certain host objects #9897
    return false;
  }

  // Own properties are enumerated firstly, so to speed up,
  // if last one is own, then all properties are own.

  var key;
  for ( key in obj ) {}

  return key === undefined || core_hasOwn.call( obj, key );
};

var isFunction = function(obj) {
  return type(obj) === "function";
};

var isArray = Array.isArray || function(obj) {
  return type(obj) === "array";
};

var extend = function() {
  var options, name, src, copy, copyIsArray, clone,
    target = arguments[0] || {},
    i = 1,
    length = arguments.length,
    deep = false;

  // Handle a deep copy situation
  if ( typeof target === "boolean" ) {
    deep = target;
    target = arguments[1] || {};
    // skip the boolean and the target
    i = 2;
  }

  // Handle case when target is a string or something (possible in deep copy)
  if ( typeof target !== "object" && !isFunction(target) ) {
    target = {};
  }

  // extend jQuery itself if only one argument is passed
  if ( length === i ) {
    target = this;
    --i;
  }

  for ( ; i < length; i++ ) {
    // Only deal with non-null/undefined values
    if ((options = arguments[ i ]) != null) {
      // Extend the base object
      for ( name in options ) {
        src = target[ name ];
        copy = options[ name ];

        // Prevent never-ending loop
        if ( target === copy ) {
          continue;
        }

        // Recurse if we're merging plain objects or arrays
        if ( deep && copy && ( isPlainObject(copy) || (copyIsArray = isArray(copy)) ) ) {
          if ( copyIsArray ) {
            copyIsArray = false;
            clone = src && isArray(src) ? src : [];

          } else {
            clone = src && isPlainObject(src) ? src : {};
          }

          // Never move original objects, clone them
          target[ name ] = extend( deep, clone, copy );

        // Don't bring in undefined values
        } else if ( copy !== undefined ) {
          if (!(isArray(options) && isFunction(copy))) {
            target[ name ] = copy;
          }
        }
      }
    }
  }

  // Return the modified object
  return target;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = extend;
}

var request;
var extend;
var createBlob;

if (typeof module !== 'undefined' && module.exports) {
  request = require('request');
  extend = require('./extend.js');
  createBlob = require('./blob.js');
}

var ajax = function ajax(options, callback) {

  if (typeof options === "function") {
    callback = options;
    options = {};
  }

  var call = function(fun) {
    var args = Array.prototype.slice.call(arguments, 1);
    if (typeof fun === typeof Function) {
      fun.apply(this, args);
    }
  };

  var defaultOptions = {
    method : "GET",
    headers: {},
    json: true,
    processData: true,
    timeout: 10000
  };

  options = extend(true, defaultOptions, options);

  var onSuccess = function(obj, resp, cb){
    if (!options.binary && !options.json && options.processData &&
        typeof obj !== 'string') {
      obj = JSON.stringify(obj);
    } else if (!options.binary && options.json && typeof obj === 'string') {
      try {
        obj = JSON.parse(obj);
      } catch (e) {
        // Probably a malformed JSON from server
        call(cb, e);
        return;
      }
    }
    call(cb, null, obj, resp);
  };

  var onError = function(err, cb){
    var errParsed;
    var errObj = {status: err.status};
    try {
      errParsed = JSON.parse(err.responseText);
      //would prefer not to have a try/catch clause
      errObj = extend(true, {}, errObj, errParsed);
    } catch(e) {}
    call(cb, errObj);
  };

  if (typeof window !== 'undefined' && window.XMLHttpRequest) {
    var timer, timedout = false;
    var xhr = new XMLHttpRequest();

    xhr.open(options.method, options.url);
    xhr.withCredentials = true;

    if (options.json) {
      options.headers.Accept = 'application/json';
      options.headers['Content-Type'] = options.headers['Content-Type'] ||
        'application/json';
      if (options.body && options.processData && typeof options.body !== "string") {
        options.body = JSON.stringify(options.body);
      }
    }

    if (options.binary) {
      xhr.responseType = 'arraybuffer';
    }

    function createCookie(name,value,days) {
      if (days) {
	var date = new Date();
	date.setTime(date.getTime()+(days*24*60*60*1000));
	var expires = "; expires="+date.toGMTString();
      } else {
        var expires = "";
      }
      document.cookie = name+"="+value+expires+"; path=/";
    }

    for (var key in options.headers) {
      if (key === 'Cookie') {
        var cookie = options.headers[key].split('=');
        createCookie(cookie[0], cookie[1], 10);
      } else {
        xhr.setRequestHeader(key, options.headers[key]);
      }
    }

    if (!("body" in options)) {
      options.body = null;
    }

    var abortReq = function() {
      timedout=true;
      xhr.abort();
      call(onError, xhr, callback);
    };

    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4 || timedout) {
        return;
      }
      clearTimeout(timer);
      if (xhr.status >= 200 && xhr.status < 300) {
        var data;
        if (options.binary) {
          data = createBlob([xhr.response || ''], {
            type: xhr.getResponseHeader('Content-Type')
          });
        } else {
          data = xhr.responseText;
        }
        call(onSuccess, data, xhr, callback);
      } else {
         call(onError, xhr, callback);
      }
    };

    if (options.timeout > 0) {
      timer = setTimeout(abortReq, options.timeout);
    }
    xhr.send(options.body);
    return {abort:abortReq};

  } else {

    if (options.json) {
      if (!options.binary) {
        options.headers.Accept = 'application/json';
      }
      options.headers['Content-Type'] = options.headers['Content-Type'] ||
        'application/json';
    }

    if (options.binary) {
      options.encoding = null;
      options.json = false;
    }

    if (!options.processData) {
      options.json = false;
    }

    return request(options, function(err, response, body) {
      if (err) {
        err.status = response ? response.statusCode : 400;
        return call(onError, err, callback);
      }

      var content_type = response.headers['content-type'];
      var data = (body || '');

      // CouchDB doesn't always return the right content-type for JSON data, so
      // we check for ^{ and }$ (ignoring leading/trailing whitespace)
      if (!options.binary && (options.json || !options.processData) &&
          typeof data !== 'object' &&
          (/json/.test(content_type) ||
           (/^[\s]*\{/.test(data) && /\}[\s]*$/.test(data)))) {
        data = JSON.parse(data);
      }

      if (response.statusCode >= 200 && response.statusCode < 300) {
        call(onSuccess, data, response, callback);
      }
      else {
        if (options.binary) {
          data = JSON.parse(data.toString());
        }
        data.status = response.statusCode;
        call(callback, data);
      }
    });
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ajax;
}

/*globals PouchAdapter: true, PouchUtils: true */

"use strict";

var PouchUtils;

if (typeof module !== 'undefined' && module.exports) {
  PouchUtils = require('./pouch.utils.js');
}

var Pouch = function Pouch(name, opts, callback) {

  if (!(this instanceof Pouch)) {
    return new Pouch(name, opts, callback);
  }

  if (typeof opts === 'function' || typeof opts === 'undefined') {
    callback = opts;
    opts = {};
  }

  if (typeof name === 'object') {
    opts = name;
    name = undefined;
  }

  if (typeof callback === 'undefined') {
    callback = function() {};
  }

  var backend = Pouch.parseAdapter(opts.name || name);
  opts.originalName = name;
  opts.name = opts.name || backend.name;
  opts.adapter = opts.adapter || backend.adapter;

  if (!Pouch.adapters[opts.adapter]) {
    throw 'Adapter is missing';
  }

  if (!Pouch.adapters[opts.adapter].valid()) {
    throw 'Invalid Adapter';
  }

  var adapter = new PouchAdapter(opts, function(err, db) {
    if (err) {
      if (callback) {
        callback(err);
      }
      return;
    }

    for (var plugin in Pouch.plugins) {
      // In future these will likely need to be async to allow the plugin
      // to initialise
      var pluginObj = Pouch.plugins[plugin](db);
      for (var api in pluginObj) {
        // We let things like the http adapter use its own implementation
        // as it shares a lot of code
        if (!(api in db)) {
          db[api] = pluginObj[api];
        }
      }
    }
    db.taskqueue.ready(true);
    db.taskqueue.execute(db);
    callback(null, db);
  });
  for (var j in adapter) {
    this[j] = adapter[j];
  }
  for (var plugin in Pouch.plugins) {
    // In future these will likely need to be async to allow the plugin
    // to initialise
    var pluginObj = Pouch.plugins[plugin](this);
    for (var api in pluginObj) {
      // We let things like the http adapter use its own implementation
      // as it shares a lot of code
      if (!(api in this)) {
        this[api] = pluginObj[api];
      }
    }
  }
};

Pouch.DEBUG = false;
Pouch.openReqList = {};
Pouch.adapters = {};
Pouch.plugins = {};

Pouch.prefix = '_pouch_';

Pouch.parseAdapter = function(name) {
  var match = name.match(/([a-z\-]*):\/\/(.*)/);
  var adapter;
  if (match) {
    // the http adapter expects the fully qualified name
    name = /http(s?)/.test(match[1]) ? match[1] + '://' + match[2] : match[2];
    adapter = match[1];
    if (!Pouch.adapters[adapter].valid()) {
      throw 'Invalid adapter';
    }
    return {name: name, adapter: match[1]};
  }

  var preferredAdapters = ['idb', 'leveldb', 'websql'];
  for (var i = 0; i < preferredAdapters.length; ++i) {
    if (preferredAdapters[i] in Pouch.adapters) {
      adapter = Pouch.adapters[preferredAdapters[i]];
      var use_prefix = 'use_prefix' in adapter ? adapter.use_prefix : true;

      return {
        name: use_prefix ? Pouch.prefix + name : name,
        adapter: preferredAdapters[i]
      };
    }
  }

  throw 'No valid adapter found';
};

Pouch.destroy = function(name, opts, callback) {
  if (typeof opts === 'function' || typeof opts === 'undefined') {
    callback = opts;
    opts = {};
  }

  if (typeof name === 'object') {
    opts = name;
    name = undefined;
  }

  if (typeof callback === 'undefined') {
    callback = function() {};
  }
  var backend = Pouch.parseAdapter(opts.name || name);

  var cb = function(err, response) {
    if (err) {
      callback(err);
      return;
    }

    for (var plugin in Pouch.plugins) {
      Pouch.plugins[plugin]._delete(backend.name);
    }
    if (Pouch.DEBUG) {
      console.log(backend.name + ': Delete Database');
    }

    // call destroy method of the particular adaptor
    Pouch.adapters[backend.adapter].destroy(backend.name, opts, callback);
  };

  // remove Pouch from allDBs
  Pouch.removeFromAllDbs(backend, cb);
};

Pouch.removeFromAllDbs = function(opts, callback) {
  // Only execute function if flag is enabled
  if (!Pouch.enableAllDbs) {
    callback();
    return;
  }

  // skip http and https adaptors for allDbs
  var adapter = opts.adapter;
  if (adapter === "http" || adapter === "https") {
    callback();
    return;
  }

  // remove db from Pouch.ALL_DBS
  new Pouch(Pouch.allDBName(opts.adapter), function(err, db) {
    if (err) {
      // don't fail when allDbs fail
      console.error(err);
      callback();
      return;
    }
    // check if db has been registered in Pouch.ALL_DBS
    var dbname = Pouch.dbName(opts.adapter, opts.name);
    db.get(dbname, function(err, doc) {
      if (err) {
        callback();
      } else {
        db.remove(doc, function(err, response) {
          if (err) {
            console.error(err);
          }
          callback();
        });
      }
    });
  });

};

Pouch.adapter = function (id, obj) {
  if (obj.valid()) {
    Pouch.adapters[id] = obj;
  }
};

Pouch.plugin = function(id, obj) {
  Pouch.plugins[id] = obj;
};

// flag to toggle allDbs (off by default)
Pouch.enableAllDbs = false;

// name of database used to keep track of databases
Pouch.ALL_DBS = "_allDbs";
Pouch.dbName = function(adapter, name) {
  return [adapter, "-", name].join('');
};
Pouch.realDBName = function(adapter, name) {
  return [adapter, "://", name].join('');
};
Pouch.allDBName = function(adapter) {
  return [adapter, "://", Pouch.prefix + Pouch.ALL_DBS].join('');
};

Pouch.open = function(opts, callback) {
  // Only register pouch with allDbs if flag is enabled
  if (!Pouch.enableAllDbs) {
    callback();
    return;
  }

  var adapter = opts.adapter;
  // skip http and https adaptors for allDbs
  if (adapter === "http" || adapter === "https") {
    callback();
    return;
  }

  new Pouch(Pouch.allDBName(adapter), function(err, db) {
    if (err) {
      // don't fail when allDb registration fails
      console.error(err);
      callback();
      return;
    }

    // check if db has been registered in Pouch.ALL_DBS
    var dbname = Pouch.dbName(adapter, opts.name);
    db.get(dbname, function(err, response) {
      if (err && err.status === 404) {
        db.put({
          _id: dbname,
          dbname: opts.originalName
        }, function(err) {
            if (err) {
                console.error(err);
            }

            callback();
        });
      } else {
        callback();
      }
    });
  });
};

Pouch.allDbs = function(callback) {
  var accumulate = function(adapters, all_dbs) {
    if (adapters.length === 0) {
      // remove duplicates
      var result = [];
      all_dbs.forEach(function(doc) {
        var exists = result.some(function(db) {
          return db.id === doc.id;
        });

        if (!exists) {
          result.push(doc);
        }
      });

      // return an array of dbname
      callback(null, result.map(function(row) {
          return row.doc.dbname;
      }));
      return;
    }

    var adapter = adapters.shift();

    // skip http and https adaptors for allDbs
    if (adapter === "http" || adapter === "https") {
      accumulate(adapters, all_dbs);
      return;
    }

    new Pouch(Pouch.allDBName(adapter), function(err, db) {
      if (err) {
        callback(err);
        return;
      }
      db.allDocs({include_docs: true}, function(err, response) {
        if (err) {
          callback(err);
          return;
        }

        // append from current adapter rows
        all_dbs.unshift.apply(all_dbs, response.rows);

        // code to clear allDbs.
        // response.rows.forEach(function(row) {
        //   db.remove(row.doc, function() {
        //     console.log(arguments);
        //   });
        // });

        // recurse
        accumulate(adapters, all_dbs);
      });
    });
  };
  var adapters = Object.keys(Pouch.adapters);
  accumulate(adapters, []);
};

/*
  Examples:

  >>> Pouch.uuids()
  "92329D39-6F5C-4520-ABFC-AAB64544E172"]

  >>> Pouch.uuids(10, {length: 32, radix: 5})
  [ '04422200002240221333300140323100',
    '02304411022101001312440440020110',
    '41432430322114143303343433433030',
    '21234330022303431304443100330401',
    '23044133434242034101422131301213',
    '43142032223224403322031032232041',
    '41121132424023141101403324200330',
    '00341042023103204342124004122342',
    '01001141433040113422403034004214',
    '30221232324132303123433131020020' ]
 */
Pouch.uuids = function (count, options) {

  if (typeof(options) !== 'object') {
    options = {};
  }

  var length = options.length;
  var radix = options.radix;
  var uuids = [];

  while (uuids.push(PouchUtils.uuid(length, radix)) < count) { }

  return uuids;
};

// Give back one UUID
Pouch.uuid = function (options) {
  return Pouch.uuids(1, options)[0];
};

// Enumerate errors, add the status code so we can reflect the HTTP api
// in future
Pouch.Errors = {
  MISSING_BULK_DOCS: {
    status: 400,
    error: 'bad_request',
    reason: "Missing JSON list of 'docs'"
  },
  MISSING_DOC: {
    status: 404,
    error: 'not_found',
    reason: 'missing'
  },
  REV_CONFLICT: {
    status: 409,
    error: 'conflict',
    reason: 'Document update conflict'
  },
  INVALID_ID: {
    status: 400,
    error: 'invalid_id',
    reason: '_id field must contain a string'
  },
  MISSING_ID: {
    status: 412,
    error: 'missing_id',
    reason: '_id is required for puts'
  },
  RESERVED_ID: {
    status: 400,
    error: 'bad_request',
    reason: 'Only reserved document ids may start with underscore.'
  },
  NOT_OPEN: {
    status: 412,
    error: 'precondition_failed',
    reason: 'Database not open so cannot close'
  },
  UNKNOWN_ERROR: {
    status: 500,
    error: 'unknown_error',
    reason: 'Database encountered an unknown error'
  },
  BAD_ARG: {
    status: 500,
    error: 'badarg',
    reason: 'Some query argument is invalid'
  },
  INVALID_REQUEST: {
    status: 400,
    error: 'invalid_request',
    reason: 'Request was invalid'
  },
  QUERY_PARSE_ERROR: {
    status: 400,
    error: 'query_parse_error',
    reason: 'Some query parameter is invalid'
  },
  DOC_VALIDATION: {
    status: 500,
    error: 'doc_validation',
    reason: 'Bad special document member'
  },
  BAD_REQUEST: {
    status: 400,
    error: 'bad_request',
    reason: 'Something wrong with the request'
  },
  NOT_AN_OBJECT: {
    status: 400,
    error: 'bad_request',
    reason: 'Document must be a JSON object'
  },
  DB_MISSING: {
    status: 404,
    error: 'not_found',
    reason: 'Database not found'
  }
};

Pouch.error = function(error, reason) {
  return PouchUtils.extend({}, error, {reason: reason});
};

if (typeof module !== 'undefined' && module.exports) {
  global.Pouch = Pouch;
  global.PouchDB = Pouch;
  module.exports = Pouch;
  Pouch.replicate = require('./pouch.replicate.js').replicate;
  var PouchAdapter = require('./pouch.adapter.js');
  require('./adapters/pouch.http.js');
  require('./adapters/pouch.idb.js');
  require('./adapters/pouch.websql.js');
  require('./adapters/pouch.leveldb.js');
  require('./plugins/pouchdb.mapreduce.js');
} else {
  window.Pouch = Pouch;
  window.PouchDB = Pouch;
}

'use strict';

var pouchCollate = function(a, b) {
  var ai = collationIndex(a);
  var bi = collationIndex(b);
  if ((ai - bi) !== 0) {
    return ai - bi;
  }
  if (a === null) {
    return 0;
  }
  if (typeof a === 'number') {
    return a - b;
  }
  if (typeof a === 'boolean') {
    return a < b ? -1 : 1;
  }
  if (typeof a === 'string') {
    return stringCollate(a, b);
  }
  if (Array.isArray(a)) {
    return arrayCollate(a, b);
  }
  if (typeof a === 'object') {
    return objectCollate(a, b);
  }
};

var stringCollate = function(a, b) {
  // See: https://github.com/daleharvey/pouchdb/issues/40
  // This is incompatible with the CouchDB implementation, but its the
  // best we can do for now
  return (a === b) ? 0 : ((a > b) ? 1 : -1);
};

var objectCollate = function(a, b) {
  var ak = Object.keys(a), bk = Object.keys(b);
  var len = Math.min(ak.length, bk.length);
  for (var i = 0; i < len; i++) {
    // First sort the keys
    var sort = pouchCollate(ak[i], bk[i]);
    if (sort !== 0) {
      return sort;
    }
    // if the keys are equal sort the values
    sort = pouchCollate(a[ak[i]], b[bk[i]]);
    if (sort !== 0) {
      return sort;
    }

  }
  return (ak.length === bk.length) ? 0 :
    (ak.length > bk.length) ? 1 : -1;
};

var arrayCollate = function(a, b) {
  var len = Math.min(a.length, b.length);
  for (var i = 0; i < len; i++) {
    var sort = pouchCollate(a[i], b[i]);
    if (sort !== 0) {
      return sort;
    }
  }
  return (a.length === b.length) ? 0 :
    (a.length > b.length) ? 1 : -1;
};

// The collation is defined by erlangs ordered terms
// the atoms null, true, false come first, then numbers, strings,
// arrays, then objects
var collationIndex = function(x) {
  var id = ['boolean', 'number', 'string', 'object'];
  if (id.indexOf(typeof x) !== -1) {
    if (x === null) {
      return 1;
    }
    return id.indexOf(typeof x) + 2;
  }
  if (Array.isArray(x)) {
    return 4.5;
  }
};

// a few hacks to get things in the right place for node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = pouchCollate;
}


'use strict';

var extend;
if (typeof module !== 'undefined' && module.exports) {
  extend = require('./deps/extend');
}


// for a better overview of what this is doing, read:
// https://github.com/apache/couchdb/blob/master/src/couchdb/couch_key_tree.erl
//
// But for a quick intro, CouchDB uses a revision tree to store a documents
// history, A -> B -> C, when a document has conflicts, that is a branch in the
// tree, A -> (B1 | B2 -> C), We store these as a nested array in the format
//
// KeyTree = [Path ... ]
// Path = {pos: position_from_root, ids: Tree}
// Tree = [Key, Opts, [Tree, ...]], in particular single node: [Key, []]

// Turn a path as a flat array into a tree with a single branch
function pathToTree(path) {
  var doc = path.shift();
  var root = [doc.id, doc.opts, []];
  var leaf = root;
  var nleaf;

  while (path.length) {
    doc = path.shift();
    nleaf = [doc.id, doc.opts, []];
    leaf[2].push(nleaf);
    leaf = nleaf;
  }
  return root;
}

// Merge two trees together
// The roots of tree1 and tree2 must be the same revision
function mergeTree(in_tree1, in_tree2) {
  var queue = [{tree1: in_tree1, tree2: in_tree2}];
  var conflicts = false;
  while (queue.length > 0) {
    var item = queue.pop();
    var tree1 = item.tree1;
    var tree2 = item.tree2;

    if (tree1[1].status || tree2[1].status) {
      tree1[1].status = (tree1[1].status ===  'available' ||
                         tree2[1].status === 'available') ? 'available' : 'missing';
    }

    for (var i = 0; i < tree2[2].length; i++) {
      if (!tree1[2][0]) {
        conflicts = 'new_leaf';
        tree1[2][0] = tree2[2][i];
        continue;
      }

      var merged = false;
      for (var j = 0; j < tree1[2].length; j++) {
        if (tree1[2][j][0] === tree2[2][i][0]) {
          queue.push({tree1: tree1[2][j], tree2: tree2[2][i]});
          merged = true;
        }
      }
      if (!merged) {
        conflicts = 'new_branch';
        tree1[2].push(tree2[2][i]);
        tree1[2].sort();
      }
    }
  }
  return {conflicts: conflicts, tree: in_tree1};
}

function doMerge(tree, path, dontExpand) {
  var restree = [];
  var conflicts = false;
  var merged = false;
  var res, branch;

  if (!tree.length) {
    return {tree: [path], conflicts: 'new_leaf'};
  }

  tree.forEach(function(branch) {
    if (branch.pos === path.pos && branch.ids[0] === path.ids[0]) {
      // Paths start at the same position and have the same root, so they need
      // merged
      res = mergeTree(branch.ids, path.ids);
      restree.push({pos: branch.pos, ids: res.tree});
      conflicts = conflicts || res.conflicts;
      merged = true;
    } else if (dontExpand !== true) {
      // The paths start at a different position, take the earliest path and
      // traverse up until it as at the same point from root as the path we want to
      // merge.  If the keys match we return the longer path with the other merged
      // After stemming we dont want to expand the trees

      var t1 = branch.pos < path.pos ? branch : path;
      var t2 = branch.pos < path.pos ? path : branch;
      var diff = t2.pos - t1.pos;

      var candidateParents = [];

      var trees = [];
      trees.push({ids: t1.ids, diff: diff, parent: null, parentIdx: null});
      while (trees.length > 0) {
        var item = trees.pop();
        if (item.diff === 0) {
          if (item.ids[0] === t2.ids[0]) {
            candidateParents.push(item);
          }
          continue;
        }
        if (!item.ids) {
          continue;
        }
        /*jshint loopfunc:true */
        item.ids[2].forEach(function(el, idx) {
          trees.push({ids: el, diff: item.diff-1, parent: item.ids, parentIdx: idx});
        });
      }

      var el = candidateParents[0];

      if (!el) {
        restree.push(branch);
      } else {
        res = mergeTree(el.ids, t2.ids);
        el.parent[2][el.parentIdx] = res.tree;
        restree.push({pos: t1.pos, ids: t1.ids});
        conflicts = conflicts || res.conflicts;
        merged = true;
      }
    } else {
      restree.push(branch);
    }
  });

  // We didnt find
  if (!merged) {
    restree.push(path);
  }

  restree.sort(function(a, b) {
    return a.pos - b.pos;
  });

  return {
    tree: restree,
    conflicts: conflicts || 'internal_node'
  };
}

// To ensure we dont grow the revision tree infinitely, we stem old revisions
function stem(tree, depth) {
  // First we break out the tree into a complete list of root to leaf paths,
  // we cut off the start of the path and generate a new set of flat trees
  var stemmedPaths = PouchMerge.rootToLeaf(tree).map(function(path) {
    var stemmed = path.ids.slice(-depth);
    return {
      pos: path.pos + (path.ids.length - stemmed.length),
      ids: pathToTree(stemmed)
    };
  });
  // Then we remerge all those flat trees together, ensuring that we dont
  // connect trees that would go beyond the depth limit
  return stemmedPaths.reduce(function(prev, current, i, arr) {
    return doMerge(prev, current, true).tree;
  }, [stemmedPaths.shift()]);
}

var PouchMerge = {};

PouchMerge.merge = function(tree, path, depth) {
  // Ugh, nicer way to not modify arguments in place?
  tree = extend(true, [], tree);
  path = extend(true, {}, path);
  var newTree = doMerge(tree, path);
  return {
    tree: stem(newTree.tree, depth),
    conflicts: newTree.conflicts
  };
};

// We fetch all leafs of the revision tree, and sort them based on tree length
// and whether they were deleted, undeleted documents with the longest revision
// tree (most edits) win
// The final sort algorithm is slightly documented in a sidebar here:
// http://guide.couchdb.org/draft/conflicts.html
PouchMerge.winningRev = function(metadata) {
  var leafs = [];
  PouchMerge.traverseRevTree(metadata.rev_tree,
                              function(isLeaf, pos, id, something, opts) {
    if (isLeaf) {
      leafs.push({pos: pos, id: id, deleted: !!opts.deleted});
    }
  });
  leafs.sort(function(a, b) {
    if (a.deleted !== b.deleted) {
      return a.deleted > b.deleted ? 1 : -1;
    }
    if (a.pos !== b.pos) {
      return b.pos - a.pos;
    }
    return a.id < b.id ? 1 : -1;
  });

  return leafs[0].pos + '-' + leafs[0].id;
};

// Pretty much all below can be combined into a higher order function to
// traverse revisions
// The return value from the callback will be passed as context to all
// children of that node
PouchMerge.traverseRevTree = function(revs, callback) {
  var toVisit = [];

  revs.forEach(function(tree) {
    toVisit.push({pos: tree.pos, ids: tree.ids});
  });
  while (toVisit.length > 0) {
    var node = toVisit.pop();
    var pos = node.pos;
    var tree = node.ids;
    var newCtx = callback(tree[2].length === 0, pos, tree[0], node.ctx, tree[1]);
    /*jshint loopfunc: true */
    tree[2].forEach(function(branch) {
      toVisit.push({pos: pos+1, ids: branch, ctx: newCtx});
    });
  }
};

PouchMerge.collectLeaves = function(revs) {
  var leaves = [];
  PouchMerge.traverseRevTree(revs, function(isLeaf, pos, id, acc, opts) {
    if (isLeaf) {
      leaves.unshift({rev: pos + "-" + id, pos: pos, opts: opts});
    }
  });
  leaves.sort(function(a, b) {
    return b.pos - a.pos;
  });
  leaves.map(function(leaf) { delete leaf.pos; });
  return leaves;
};

// returns revs of all conflicts that is leaves such that
// 1. are not deleted and
// 2. are different than winning revision
PouchMerge.collectConflicts = function(metadata) {
  var win = PouchMerge.winningRev(metadata);
  var leaves = PouchMerge.collectLeaves(metadata.rev_tree);
  var conflicts = [];
  leaves.forEach(function(leaf) {
    if (leaf.rev !== win && !leaf.opts.deleted) {
      conflicts.push(leaf.rev);
    }
  });
  return conflicts;
};

PouchMerge.rootToLeaf = function(tree) {
  var paths = [];
  PouchMerge.traverseRevTree(tree, function(isLeaf, pos, id, history, opts) {
    history = history ? history.slice(0) : [];
    history.push({id: id, opts: opts});
    if (isLeaf) {
      var rootPos = pos + 1 - history.length;
      paths.unshift({pos: rootPos, ids: history});
    }
    return history;
  });
  return paths;
};

// a few hacks to get things in the right place for node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PouchMerge;
}
/*globals PouchUtils: true */

'use strict';

var PouchUtils;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Pouch;
  PouchUtils = require('./pouch.utils.js');
}

// We create a basic promise so the caller can cancel the replication possibly
// before we have actually started listening to changes etc
var Promise = function() {
  var that = this;
  this.cancelled = false;
  this.cancel = function() {
    that.cancelled = true;
  };
};

// The RequestManager ensures that only one database request is active at
// at time, it ensures we dont max out simultaneous HTTP requests and makes
// the replication process easier to reason about
var RequestManager = function(promise) {

  var queue = [];
  var api = {};
  var processing = false;

  // Add a new request to the queue, if we arent currently processing anything
  // then process it immediately
  api.enqueue = function(fun, args) {
    queue.push({fun: fun, args: args});
    if (!processing) {
      api.process();
    }
  };

  // Process the next request
  api.process = function() {
    if (processing || !queue.length || promise.cancelled) {
      return;
    }
    processing = true;
    var task = queue.shift();
    task.fun.apply(null, task.args);
  };

  // We need to be notified whenever a request is complete to process
  // the next request
  api.notifyRequestComplete = function() {
    processing = false;
    api.process();
  };

  return api;
};

// TODO: check CouchDB's replication id generation, generate a unique id particular
// to this replication
var genReplicationId = function(src, target, opts) {
  var filterFun = opts.filter ? opts.filter.toString() : '';
  return '_local/' + PouchUtils.Crypto.MD5(src.id() + target.id() + filterFun);
};

// A checkpoint lets us restart replications from when they were last cancelled
var fetchCheckpoint = function(src, target, id, callback) {
  target.get(id, function(err, targetDoc) {
    if (err && err.status === 404) {
      callback(null, 0);
    } else {
      src.get(id, function(err, sourceDoc) {
        if (err && err.status === 404 || targetDoc.last_seq !== sourceDoc.last_seq) {
          callback(null, 0);
        } else {
          callback(null, sourceDoc.last_seq);
        }
      });
    }
  });
};

var writeCheckpoint = function(src, target, id, checkpoint, callback) {
  var updateCheckpoint = function (db, callback) {
    db.get(id, function(err, doc) {
      if (err && err.status === 404) {
          doc = {_id: id};
      }
      doc.last_seq = checkpoint;
      db.put(doc, callback);
    });
  };
  updateCheckpoint(target, function(err, doc) {
    updateCheckpoint(src, function(err, doc) {
      callback();
    });
  });
};

function replicate(src, target, opts, promise) {

  var requests = new RequestManager(promise);
  var writeQueue = [];
  var repId = genReplicationId(src, target, opts);
  var results = [];
  var completed = false;
  var pendingRevs = 0;
  var last_seq = 0;
  var continuous = opts.continuous || false;
  var doc_ids = opts.doc_ids;
  var result = {
    ok: true,
    start_time: new Date(),
    docs_read: 0,
    docs_written: 0
  };

  function docsWritten(err, res, len) {
    if (opts.onChange) {
      for (var i = 0; i < len; i++) {
        /*jshint validthis:true */
        opts.onChange.apply(this, [result]);
      }
    }
    pendingRevs -= len;
    result.docs_written += len;

    writeCheckpoint(src, target, repId, last_seq, function(err, res) {
      requests.notifyRequestComplete();
      isCompleted();
    });
  }

  function writeDocs() {
    if (!writeQueue.length) {
      return requests.notifyRequestComplete();
    }
    var len = writeQueue.length;
    target.bulkDocs({docs: writeQueue}, {new_edits: false}, function(err, res) {
      docsWritten(err, res, len);
    });
    writeQueue = [];
  }

  function eachRev(id, rev) {
    src.get(id, {revs: true, rev: rev, attachments: true}, function(err, doc) {
      result.docs_read++;
      requests.notifyRequestComplete();
      writeQueue.push(doc);
      requests.enqueue(writeDocs);
    });
  }

  function onRevsDiff(diffCounts) {
    return function (err, diffs) {
      requests.notifyRequestComplete();
      if (err) {
        if (continuous) {
          promise.cancel();
        }
        PouchUtils.call(opts.complete, err, null);
        return;
      }

      // We already have all diffs passed in `diffCounts`
      if (Object.keys(diffs).length === 0) {
        for (var docid in diffCounts) {
          pendingRevs -= diffCounts[docid];
        }
        isCompleted();
        return;
      }

      var _enqueuer = function (rev) {
        requests.enqueue(eachRev, [id, rev]);
      };

      for (var id in diffs) {
        var diffsAlreadyHere = diffCounts[id] - diffs[id].missing.length;
        pendingRevs -= diffsAlreadyHere;
        diffs[id].missing.forEach(_enqueuer);
      }
    };
  }

  function fetchRevsDiff(diff, diffCounts) {
    target.revsDiff(diff, onRevsDiff(diffCounts));
  }

  function onChange(change) {
    last_seq = change.seq;
    results.push(change);
    var diff = {};
    diff[change.id] = change.changes.map(function(x) { return x.rev; });
    var counts = {};
    counts[change.id] = change.changes.length;
    pendingRevs += change.changes.length;
    requests.enqueue(fetchRevsDiff, [diff, counts]);
  }

  function complete() {
    completed = true;
    isCompleted();
  }

  function isCompleted() {
    if (completed && pendingRevs === 0) {
      result.end_time = new Date();
      PouchUtils.call(opts.complete, null, result);
    }
  }

  fetchCheckpoint(src, target, repId, function(err, checkpoint) {

    if (err) {
      return PouchUtils.call(opts.complete, err);
    }

    last_seq = checkpoint;

    // Was the replication cancelled by the caller before it had a chance
    // to start. Shouldnt we be calling complete?
    if (promise.cancelled) {
      return;
    }

    var repOpts = {
      continuous: continuous,
      since: last_seq,
      style: 'all_docs',
      onChange: onChange,
      complete: complete,
      doc_ids: doc_ids
    };

    if (opts.filter) {
      repOpts.filter = opts.filter;
    }

    if (opts.query_params) {
      repOpts.query_params = opts.query_params;
    }

    var changes = src.changes(repOpts);

    if (opts.continuous) {
      var cancel = promise.cancel;
      promise.cancel = function() {
        cancel();
        changes.cancel();
      };
    }
  });

}

function toPouch(db, callback) {
  if (typeof db === 'string') {
    return new Pouch(db, callback);
  }
  callback(null, db);
}

Pouch.replicate = function(src, target, opts, callback) {
  if (opts instanceof Function) {
    callback = opts;
    opts = {};
  }
  if (opts === undefined) {
    opts = {};
  }
  if (!opts.complete) {
    opts.complete = callback;
  }
  var replicateRet = new Promise();
  toPouch(src, function(err, src) {
    if (err) {
      return PouchUtils.call(callback, err);
    }
    toPouch(target, function(err, target) {
      if (err) {
        return PouchUtils.call(callback, err);
      }
      if (opts.server) {
        if (typeof src.replicateOnServer !== 'function') {
          return PouchUtils.call(callback, { error: 'Server replication not supported for ' + src.type() + ' adapter' });
        }
        if (src.type() !== target.type()) {
          return PouchUtils.call(callback, { error: 'Server replication for different adapter types (' + src.type() + ' and ' + target.type() + ') is not supported' });
        }
        src.replicateOnServer(target, opts, replicateRet);
      } else {
        replicate(src, target, opts, replicateRet);
      }
    });
  });
  return replicateRet;
};

/*jshint strict: false */
/*global Buffer: true, escape: true, module, window, Crypto */
/*global chrome, extend, ajax, createBlob, btoa, atob, uuid, require, PouchMerge: true */

var PouchUtils = {};

if (typeof module !== 'undefined' && module.exports) {
  PouchMerge = require('./pouch.merge.js');
  PouchUtils.extend = require('./deps/extend');
  PouchUtils.ajax = require('./deps/ajax');
  PouchUtils.createBlob = require('./deps/blob');
  PouchUtils.uuid = require('./deps/uuid');
  PouchUtils.Crypto = require('./deps/md5.js');
} else {
  PouchUtils.Crypto = Crypto;
  PouchUtils.extend = extend;
  PouchUtils.ajax = ajax;
  PouchUtils.createBlob = createBlob;
  PouchUtils.uuid = uuid;
}

// List of top level reserved words for doc
var reservedWords = [
  '_id',
  '_rev',
  '_attachments',
  '_deleted',
  '_revisions',
  '_revs_info',
  '_conflicts',
  '_deleted_conflicts',
  '_local_seq',
  '_rev_tree'
];

// Determine id an ID is valid
//   - invalid IDs begin with an underescore that does not begin '_design' or '_local'
//   - any other string value is a valid id
var isValidId = function(id) {
  if (/^_/.test(id)) {
    return (/^_(design|local)/).test(id);
  }
  return true;
};

var isChromeApp = function(){
  return (typeof chrome !== "undefined" &&
          typeof chrome.storage !== "undefined" &&
          typeof chrome.storage.local !== "undefined");
};

// Pretty dumb name for a function, just wraps callback calls so we dont
// to if (callback) callback() everywhere
PouchUtils.call = function(fun) {
  if (typeof fun === typeof Function) {
    var args = Array.prototype.slice.call(arguments, 1);
    fun.apply(this, args);
  }
};

PouchUtils.isLocalId = function(id) {
  return (/^_local/).test(id);
};

// check if a specific revision of a doc has been deleted
//  - metadata: the metadata object from the doc store
//  - rev: (optional) the revision to check. defaults to winning revision
PouchUtils.isDeleted = function(metadata, rev) {
  if (!rev) {
    rev = PouchMerge.winningRev(metadata);
  }
  if (rev.indexOf('-') >= 0) {
    rev = rev.split('-')[1];
  }
  var deleted = false;
  PouchMerge.traverseRevTree(metadata.rev_tree, function(isLeaf, pos, id, acc, opts) {
    if (id === rev) {
      deleted = !!opts.deleted;
    }
  });

  return deleted;
};

PouchUtils.filterChange = function(opts) {
  return function(change) {
    var req = {};
    var hasFilter = opts.filter && typeof opts.filter === 'function';

    req.query = opts.query_params;
    if (opts.filter && hasFilter && !opts.filter.call(this, change.doc, req)) {
      return false;
    }
    if (opts.doc_ids && opts.doc_ids.indexOf(change.id) === -1) {
      return false;
    }
    if (!opts.include_docs) {
      delete change.doc;
    } else {
      for (var att in change.doc._attachments) {
        change.doc._attachments[att].stub = true;
      }
    }
    return true;
  };
};

PouchUtils.processChanges = function(opts, changes, last_seq) {
  // TODO: we should try to filter and limit as soon as possible
  changes = changes.filter(PouchUtils.filterChange(opts));
  if (opts.limit) {
    if (opts.limit < changes.length) {
      changes.length = opts.limit;
    }
  }
  changes.forEach(function(change){
    PouchUtils.call(opts.onChange, change);
  });
  PouchUtils.call(opts.complete, null, {results: changes, last_seq: last_seq});
};

// Preprocess documents, parse their revisions, assign an id and a
// revision for new writes that are missing them, etc
PouchUtils.parseDoc = function(doc, newEdits) {
  var error = null;
  var nRevNum;
  var newRevId;
  var revInfo;
  var opts = {status: 'available'};
  if (doc._deleted) {
    opts.deleted = true;
  }

  if (newEdits) {
    if (!doc._id) {
      doc._id = Pouch.uuid();
    }
    newRevId = Pouch.uuid({length: 32, radix: 16}).toLowerCase();
    if (doc._rev) {
      revInfo = /^(\d+)-(.+)$/.exec(doc._rev);
      if (!revInfo) {
        throw "invalid value for property '_rev'";
      }
      doc._rev_tree = [{
        pos: parseInt(revInfo[1], 10),
        ids: [revInfo[2], {status: 'missing'}, [[newRevId, opts, []]]]
      }];
      nRevNum = parseInt(revInfo[1], 10) + 1;
    } else {
      doc._rev_tree = [{
        pos: 1,
        ids : [newRevId, opts, []]
      }];
      nRevNum = 1;
    }
  } else {
    if (doc._revisions) {
      doc._rev_tree = [{
        pos: doc._revisions.start - doc._revisions.ids.length + 1,
        ids: doc._revisions.ids.reduce(function(acc, x) {
          if (acc === null) {
            return [x, opts, []];
          } else {
            return [x, {status: 'missing'}, [acc]];
          }
        }, null)
      }];
      nRevNum = doc._revisions.start;
      newRevId = doc._revisions.ids[0];
    }
    if (!doc._rev_tree) {
      revInfo = /^(\d+)-(.+)$/.exec(doc._rev);
      if (!revInfo) {
        return Pouch.Errors.BAD_ARG;
      }
      nRevNum = parseInt(revInfo[1], 10);
      newRevId = revInfo[2];
      doc._rev_tree = [{
        pos: parseInt(revInfo[1], 10),
        ids: [revInfo[2], opts, []]
      }];
    }
  }

  if (typeof doc._id !== 'string') {
    error = Pouch.Errors.INVALID_ID;
  }
  else if (!isValidId(doc._id)) {
    error = Pouch.Errors.RESERVED_ID;
  }

  for (var key in doc) {
    if (doc.hasOwnProperty(key) && key[0] === '_' && reservedWords.indexOf(key) === -1) {
      error = PouchUtils.extend({}, Pouch.Errors.DOC_VALIDATION);
      error.reason += ': ' + key;
    }
  }

  doc._id = decodeURIComponent(doc._id);
  doc._rev = [nRevNum, newRevId].join('-');

  if (error) {
    return error;
  }

  return Object.keys(doc).reduce(function(acc, key) {
    if (/^_/.test(key) && key !== '_attachments') {
      acc.metadata[key.slice(1)] = doc[key];
    } else {
      acc.data[key] = doc[key];
    }
    return acc;
  }, {metadata : {}, data : {}});
};

PouchUtils.isCordova = function(){
  return (typeof cordova !== "undefined" ||
          typeof PhoneGap !== "undefined" ||
          typeof phonegap !== "undefined");
};

PouchUtils.Changes = function() {

  var api = {};
  var listeners = {};

  if (isChromeApp()){
    chrome.storage.onChanged.addListener(function(e){
      // make sure it's event addressed to us
      if (e.db_name != null) {
        api.notify(e.db_name.newValue);//object only has oldValue, newValue members
      }
    });
  } else if (typeof window !== 'undefined') {
    window.addEventListener("storage", function(e) {
      api.notify(e.key);
    });
  }

  api.addListener = function(db_name, id, db, opts) {
    if (!listeners[db_name]) {
      listeners[db_name] = {};
    }
    listeners[db_name][id] = {
      db: db,
      opts: opts
    };
  };

  api.removeListener = function(db_name, id) {
    if (listeners[db_name]) {
      delete listeners[db_name][id];
    }
  };

  api.clearListeners = function(db_name) {
    delete listeners[db_name];
  };

  api.notifyLocalWindows = function(db_name){
    //do a useless change on a storage thing
    //in order to get other windows's listeners to activate
    if (!isChromeApp()){
      localStorage[db_name] = (localStorage[db_name] === "a") ? "b" : "a";
    } else {
      chrome.storage.local.set({db_name: db_name});
    }
  };

  api.notify = function(db_name) {
    if (!listeners[db_name]) { return; }

    Object.keys(listeners[db_name]).forEach(function (i) {
      var opts = listeners[db_name][i].opts;
      listeners[db_name][i].db.changes({
        include_docs: opts.include_docs,
        conflicts: opts.conflicts,
        continuous: false,
        descending: false,
        filter: opts.filter,
        since: opts.since,
        query_params: opts.query_params,
        onChange: function(c) {
          if (c.seq > opts.since && !opts.cancelled) {
            opts.since = c.seq;
            PouchUtils.call(opts.onChange, c);
          }
        }
      });
    });
  };

  return api;
};

if (typeof window === 'undefined' || !('atob' in window)) {
  PouchUtils.atob = function(str) {
    var base64 = new Buffer(str, 'base64');
    // Node.js will just skip the characters it can't encode instead of
    // throwing and exception
    if (base64.toString('base64') !== str) {
      throw("Cannot base64 encode full string");
    }
    return base64.toString('binary');
  };
} else {
  PouchUtils.atob = function(str) {
    return atob(str);
  };
}

if (typeof window === 'undefined' || !('btoa' in window)) {
  PouchUtils.btoa = function(str) {
    return new Buffer(str, 'binary').toString('base64');
  };
} else {
  PouchUtils.btoa = function(str) {
    return btoa(str);
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PouchUtils;
}

/*globals Pouch: true, cordova, PouchUtils: true, PouchMerge */

"use strict";

var PouchAdapter;
var PouchUtils;

if (typeof module !== 'undefined' && module.exports) {
  PouchUtils = require('./pouch.utils.js');
}

var call = PouchUtils.call;

/*
 * A generic pouch adapter
 */

// returns first element of arr satisfying callback predicate
function arrayFirst(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i) === true) {
      return arr[i];
    }
  }
  return false;
}

// Wrapper for functions that call the bulkdocs api with a single doc,
// if the first result is an error, return an error
function yankError(callback) {
  return function(err, results) {
    if (err || results[0].error) {
      call(callback, err || results[0]);
    } else {
      call(callback, null, results[0]);
    }
  };
}

// for every node in a revision tree computes its distance from the closest
// leaf
function computeHeight(revs) {
  var height = {};
  var edges = [];
  PouchMerge.traverseRevTree(revs, function(isLeaf, pos, id, prnt) {
    var rev = pos + "-" + id;
    if (isLeaf) {
      height[rev] = 0;
    }
    if (prnt !== undefined) {
      edges.push({from: prnt, to: rev});
    }
    return rev;
  });

  edges.reverse();
  edges.forEach(function(edge) {
    if (height[edge.from] === undefined) {
      height[edge.from] = 1 + height[edge.to];
    } else {
      height[edge.from] = Math.min(height[edge.from], 1 + height[edge.to]);
    }
  });
  return height;
}

PouchAdapter = function(opts, callback) {

  var api = {};

  var customApi = Pouch.adapters[opts.adapter](opts, function(err, db) {
    if (err) {
      if (callback) {
        callback(err);
      }
      return;
    }

    for (var j in api) {
      if (!db.hasOwnProperty(j)) {
        db[j] = api[j];
      }
    }

    // Don't call Pouch.open for ALL_DBS
    // Pouch.open saves the db's name into ALL_DBS
    if (opts.name === Pouch.prefix + Pouch.ALL_DBS) {
      callback(err, db);
    } else {
      Pouch.open(opts, function(err) {
        callback(err, db);
      });
    }
  });

  var auto_compaction = (opts.auto_compaction === true);

  // wraps a callback with a function that runs compaction after each edit
  var autoCompact = function(callback) {
    if (!auto_compaction) {
      return callback;
    }
    return function(err, res) {
      if (err) {
        call(callback, err);
      } else {
        var count = res.length;
        var decCount = function() {
          count--;
          if (!count) {
            call(callback, null, res);
          }
        };
        res.forEach(function(doc) {
          if (doc.ok) {
            // TODO: we need better error handling
            compactDocument(doc.id, 1, decCount);
          } else {
            decCount();
          }
        });
      }
    };
  };

  api.post = function (doc, opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    if (typeof doc !== 'object' || Array.isArray(doc)) {
      return call(callback, Pouch.Errors.NOT_AN_OBJECT);
    }
    return customApi.bulkDocs({docs: [doc]}, opts,
        autoCompact(yankError(callback)));
  };

  api.put = function(doc, opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    if (typeof doc !== 'object') {
      return call(callback, Pouch.Errors.NOT_AN_OBJECT);
    }
    if (!('_id' in doc)) {
      return call(callback, Pouch.Errors.MISSING_ID);
    }
    return customApi.bulkDocs({docs: [doc]}, opts,
        autoCompact(yankError(callback)));
  };

  api.putAttachment = function (docId, attachmentId, rev, blob, type, callback) {
    if (!api.taskqueue.ready()) {
      api.taskqueue.addTask('putAttachment', arguments);
      return;
    }
    if (typeof type === 'function') {
      callback = type;
      type = blob;
      blob = rev;
      rev = null;
    }
    if (typeof type === 'undefined') {
      type = blob;
      blob = rev;
      rev = null;
    }

    function createAttachment(doc) {
      doc._attachments = doc._attachments || {};
      doc._attachments[attachmentId] = {
        content_type: type,
        data: blob
      };
      api.put(doc, callback);
    }

    api.get(docId, function(err, doc) {
      // create new doc
      if (err && err.error === Pouch.Errors.MISSING_DOC.error) {
        createAttachment({_id: docId});
        return;
      }
      if (err) {
        call(callback, err);
        return;
      }

      if (doc._rev !== rev) {
        call(callback, Pouch.Errors.REV_CONFLICT);
        return;
      }

      createAttachment(doc);
    });
  };

  api.removeAttachment = function (docId, attachmentId, rev, callback) {
    api.get(docId, function(err, obj) {
      if (err) {
        call(callback, err);
        return;
      }
      if (obj._rev !== rev) {
        call(callback, Pouch.Errors.REV_CONFLICT);
        return;
      }
      if (!obj._attachments) {
        return call(callback, null);
      }
      delete obj._attachments[attachmentId];
      if (Object.keys(obj._attachments).length === 0){
        delete obj._attachments;
      }
      api.put(obj, callback);
    });
  };

  api.remove = function (doc, opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    if (opts === undefined) {
      opts = {};
    }
    opts.was_delete = true;
    var newDoc = {_id: doc._id, _rev: doc._rev};
    newDoc._deleted = true;
    return customApi.bulkDocs({docs: [newDoc]}, opts, yankError(callback));
  };

  api.revsDiff = function (req, opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    var ids = Object.keys(req);
    var count = 0;
    var missing = {};

    function addToMissing(id, revId) {
      if (!missing[id]) {
        missing[id] = {missing: []};
      }
      missing[id].missing.push(revId);
    }

    function processDoc(id, rev_tree) {
      // Is this fast enough? Maybe we should switch to a set simulated by a map
      var missingForId = req[id].slice(0);
      PouchMerge.traverseRevTree(rev_tree, function(isLeaf, pos, revHash, ctx,
        opts) {
          var rev = pos + '-' + revHash;
          var idx = missingForId.indexOf(rev);
          if (idx === -1) {
            return;
          }

          missingForId.splice(idx, 1);
          if (opts.status !== 'available') {
            addToMissing(id, rev);
          }
      });

      // Traversing the tree is synchronous, so now `missingForId` contains
      // revisions that were not found in the tree
      missingForId.forEach(function(rev) {
        addToMissing(id, rev);
      });
    }

    ids.map(function(id) {
      customApi._getRevisionTree(id, function(err, rev_tree) {
        if (err && err.error === 'not_found' && err.reason === 'missing') {
          missing[id] = {missing: req[id]};
        } else if (err) {
          return call(callback, err);
        } else {
          processDoc(id, rev_tree);
        }

        if (++count === ids.length) {
          return call(callback, null, missing);
        }
      });
    });
  };

  // compact one document and fire callback
  // by compacting we mean removing all revisions which
  // are further from the leaf in revision tree than max_height
  var compactDocument = function(docId, max_height, callback) {
    customApi._getRevisionTree(docId, function(err, rev_tree){
      if (err) {
        return call(callback);
      }
      var height = computeHeight(rev_tree);
      var candidates = [];
      var revs = [];
      Object.keys(height).forEach(function(rev) {
        if (height[rev] > max_height) {
          candidates.push(rev);
        }
      });

      PouchMerge.traverseRevTree(rev_tree, function(isLeaf, pos, revHash, ctx, opts) {
        var rev = pos + '-' + revHash;
        if (opts.status === 'available' && candidates.indexOf(rev) !== -1) {
          opts.status = 'missing';
          revs.push(rev);
        }
      });
      customApi._doCompaction(docId, rev_tree, revs, callback);
    });
  };

  // compact the whole database using single document
  // compaction
  api.compact = function(opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    api.changes({complete: function(err, res) {
      if (err) {
        call(callback); // TODO: silently fail
        return;
      }
      var count = res.results.length;
      if (!count) {
        call(callback);
        return;
      }
      res.results.forEach(function(row) {
        compactDocument(row.id, 0, function() {
          count--;
          if (!count) {
            call(callback);
          }
        });
      });
    }});
  };

  /* Begin api wrappers. Specific functionality to storage belongs in the _[method] */
  api.get = function (id, opts, callback) {
    if (!api.taskqueue.ready()) {
      api.taskqueue.addTask('get', arguments);
      return;
    }
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }

    var leaves = [];
    function finishOpenRevs() {
      var result = [];
      var count = leaves.length;
      if (!count) {
        return call(callback, null, result);
      }
      // order with open_revs is unspecified
      leaves.forEach(function(leaf){
        api.get(id, {rev: leaf, revs: opts.revs}, function(err, doc){
          if (!err) {
            result.push({ok: doc});
          } else {
            result.push({missing: leaf});
          }
          count--;
          if(!count) {
            call(callback, null, result);
          }
        });
      });
    }

    if (opts.open_revs) {
      if (opts.open_revs === "all") {
        customApi._getRevisionTree(id, function(err, rev_tree){
          if (err) {
            // if there's no such document we should treat this
            // situation the same way as if revision tree was empty
            rev_tree = [];
          }
          leaves = PouchMerge.collectLeaves(rev_tree).map(function(leaf){
            return leaf.rev;
          });
          finishOpenRevs();
        });
      } else {
        if (Array.isArray(opts.open_revs)) {
          leaves = opts.open_revs;
          for (var i = 0; i < leaves.length; i++) {
            var l = leaves[i];
            // looks like it's the only thing couchdb checks
            if (!(typeof(l) === "string" && /^\d+-/.test(l))) {
              return call(callback, Pouch.error(Pouch.Errors.BAD_REQUEST,
                "Invalid rev format" ));
            }
          }
          finishOpenRevs();
        } else {
          return call(callback, Pouch.error(Pouch.Errors.UNKNOWN_ERROR,
            'function_clause'));
        }
      }
      return; // open_revs does not like other options
    }

    return customApi._get(id, opts, function(err, result) {
      if (err) {
        return call(callback, err);
      }

      var doc = result.doc;
      var metadata = result.metadata;
      var ctx = result.ctx;

      if (opts.conflicts) {
        var conflicts = PouchMerge.collectConflicts(metadata);
        if (conflicts.length) {
          doc._conflicts = conflicts;
        }
      }

      if (opts.revs || opts.revs_info) {
        var paths = PouchMerge.rootToLeaf(metadata.rev_tree);
        var path = arrayFirst(paths, function(arr) {
          return arr.ids.map(function(x) { return x.id; })
            .indexOf(doc._rev.split('-')[1]) !== -1;
        });

        path.ids.splice(path.ids.map(function(x) {return x.id;})
                        .indexOf(doc._rev.split('-')[1]) + 1);
        path.ids.reverse();

        if (opts.revs) {
          doc._revisions = {
            start: (path.pos + path.ids.length) - 1,
            ids: path.ids.map(function(rev) {
              return rev.id;
            })
          };
        }
        if (opts.revs_info) {
          var pos =  path.pos + path.ids.length;
          doc._revs_info = path.ids.map(function(rev) {
            pos--;
            return {
              rev: pos + '-' + rev.id,
              status: rev.opts.status
            };
          });
        }
      }

      if (opts.local_seq) {
        doc._local_seq = result.metadata.seq;
      }

      if (opts.attachments && doc._attachments) {
        var attachments = doc._attachments;
        var count = Object.keys(attachments).length;
        if (count === 0) {
          return call(callback, null, doc);
        }
        Object.keys(attachments).forEach(function(key) {
          customApi._getAttachment(attachments[key], {encode: true, ctx: ctx}, function(err, data) {
            doc._attachments[key].data = data;
            if (!--count){
              call(callback, null, doc);
            }
          });
        });
      } else {
        if (doc._attachments){
          for (var key in doc._attachments) {
            doc._attachments[key].stub = true;
          }
        }
        call(callback, null, doc);
      }
    });
  };

  api.getAttachment = function(docId, attachmentId, opts, callback) {
    if (!api.taskqueue.ready()) {
      api.taskqueue.addTask('getAttachment', arguments);
      return;
    }
    if (opts instanceof Function) {
      callback = opts;
      opts = {};
    }
    customApi._get(docId, opts, function(err, res) {
      if (err) {
        return call(callback, err);
      }
      if (res.doc._attachments && res.doc._attachments[attachmentId]) {
        opts.ctx = res.ctx;
        customApi._getAttachment(res.doc._attachments[attachmentId], opts, callback);
      } else {
        return call(callback, Pouch.Errors.MISSING_DOC);
      }
    });
  };

  api.allDocs = function(opts, callback) {
    if (!api.taskqueue.ready()) {
      api.taskqueue.addTask('allDocs', arguments);
      return;
    }
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    if ('keys' in opts) {
      if ('startkey' in opts) {
        call(callback, Pouch.error(Pouch.Errors.QUERY_PARSE_ERROR,
          'Query parameter `start_key` is not compatible with multi-get'
        ));
        return;
      }
      if ('endkey' in opts) {
        call(callback, Pouch.error(Pouch.Errors.QUERY_PARSE_ERROR,
          'Query parameter `end_key` is not compatible with multi-get'
        ));
        return;
      }
    }
    if (typeof opts.skip === 'undefined') {
      opts.skip = 0;
    }

    return customApi._allDocs(opts, callback);
  };

  api.changes = function(opts) {
    if (!api.taskqueue.ready()) {
      var task = api.taskqueue.addTask('changes', arguments);
      return {
        cancel: function() {
          if (task.task) {
            return task.task.cancel();
          }
          if (Pouch.DEBUG) {
            console.log('Cancel Changes Feed');
          }
          task.parameters[0].aborted = true;
        }
      };
    }
    opts = PouchUtils.extend(true, {}, opts);

    if (!opts.since) {
      opts.since = 0;
    }
    if (opts.since === 'latest') {
      var changes;
      api.info(function (err, info) {
        if (!opts.aborted) {
          opts.since = info.update_seq  - 1;
          api.changes(opts);
        }
      });
      // Return a method to cancel this method from processing any more
      return {
        cancel: function() {
          if (changes) {
            return changes.cancel();
          }
          if (Pouch.DEBUG) {
            console.log('Cancel Changes Feed');
          }
          opts.aborted = true;
        }
      };
    }

    if (!('descending' in opts)) {
      opts.descending = false;
    }

    // 0 and 1 should return 1 document
    opts.limit = opts.limit === 0 ? 1 : opts.limit;
    return customApi._changes(opts);
  };

  api.close = function(callback) {
    if (!api.taskqueue.ready()) {
      api.taskqueue.addTask('close', arguments);
      return;
    }
    return customApi._close(callback);
  };

  api.info = function(callback) {
    if (!api.taskqueue.ready()) {
      api.taskqueue.addTask('info', arguments);
      return;
    }
    return customApi._info(callback);
  };

  api.id = function() {
    return customApi._id();
  };

  api.type = function() {
    return (typeof customApi._type === 'function') ? customApi._type() : opts.adapter;
  };

  api.bulkDocs = function(req, opts, callback) {
    if (!api.taskqueue.ready()) {
      api.taskqueue.addTask('bulkDocs', arguments);
      return;
    }
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    if (!opts) {
      opts = {};
    } else {
      opts = PouchUtils.extend(true, {}, opts);
    }

    if (!req || !req.docs || req.docs.length < 1) {
      return call(callback, Pouch.Errors.MISSING_BULK_DOCS);
    }

    if (!Array.isArray(req.docs)) {
      return call(callback, Pouch.Errors.QUERY_PARSE_ERROR);
    }

    for (var i = 0; i < req.docs.length; ++i) {
      if (typeof req.docs[i] !== 'object' || Array.isArray(req.docs[i])) {
        return call(callback, Pouch.Errors.NOT_AN_OBJECT);
      }
    }

    req = PouchUtils.extend(true, {}, req);
    if (!('new_edits' in opts)) {
      opts.new_edits = true;
    }

    return customApi._bulkDocs(req, opts, autoCompact(callback));
  };

  /* End Wrappers */
  var taskqueue = {};

  taskqueue.ready = false;
  taskqueue.queue = [];

  api.taskqueue = {};

  api.taskqueue.execute = function (db) {
    if (taskqueue.ready) {
      taskqueue.queue.forEach(function(d) {
        d.task = db[d.name].apply(null, d.parameters);
      });
    }
  };

  api.taskqueue.ready = function() {
    if (arguments.length === 0) {
      return taskqueue.ready;
    }
    taskqueue.ready = arguments[0];
  };

  api.taskqueue.addTask = function(name, parameters) {
    var task = { name: name, parameters: parameters };
    taskqueue.queue.push(task);
    return task;
  };

  api.replicate = {};

  api.replicate.from = function (url, opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    return Pouch.replicate(url, customApi, opts, callback);
  };

  api.replicate.to = function (dbName, opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    return Pouch.replicate(customApi, dbName, opts, callback);
  };

  for (var j in api) {
    if (!customApi.hasOwnProperty(j)) {
      customApi[j] = api[j];
    }
  }

  // Http adapter can skip setup so we force the db to be ready and execute any jobs
  if (opts.skipSetup) {
    api.taskqueue.ready(true);
    api.taskqueue.execute(api);
  }

  if (PouchUtils.isCordova()) {
    //to inform websql adapter that we can use api
    cordova.fireWindowEvent(opts.name + "_pouch", {});
  }
  return customApi;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PouchAdapter;
}

/*globals Pouch: true, PouchUtils: true, require, console */

"use strict";

var PouchUtils;

if (typeof module !== 'undefined' && module.exports) {
  Pouch = require('../pouch.js');
  PouchUtils = require('../pouch.utils.js');
}



var HTTP_TIMEOUT = 10000;

// parseUri 1.2.2
// (c) Steven Levithan <stevenlevithan.com>
// MIT License
function parseUri (str) {
  var o = parseUri.options;
  var m = o.parser[o.strictMode ? "strict" : "loose"].exec(str);
  var uri = {};
  var i = 14;

  while (i--) {
    uri[o.key[i]] = m[i] || "";
  }

  uri[o.q.name] = {};
  uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
    if ($1) {
      uri[o.q.name][$1] = $2;
    }
  });

  return uri;
}

function encodeDocId(id) {
  if (/^_design/.test(id)) {
    return id;
  }
  return encodeURIComponent(id);
}

parseUri.options = {
  strictMode: false,
  key: ["source","protocol","authority","userInfo","user","password","host",
        "port","relative","path","directory","file","query","anchor"],
  q:   {
    name:   "queryKey",
    parser: /(?:^|&)([^&=]*)=?([^&]*)/g
  },
  parser: {
    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
    loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
  }
};

// Get all the information you possibly can about the URI given by name and
// return it as a suitable object.
function getHost(name, opts) {
  // If the given name contains "http:"
  if (/http(s?):/.test(name)) {
    // Prase the URI into all its little bits
    var uri = parseUri(name);

    // Store the fact that it is a remote URI
    uri.remote = true;

    // Store the user and password as a separate auth object
    if (uri.user || uri.password) {
      uri.auth = {username: uri.user, password: uri.password};
    }

    // Split the path part of the URI into parts using '/' as the delimiter
    // after removing any leading '/' and any trailing '/'
    var parts = uri.path.replace(/(^\/|\/$)/g, '').split('/');

    // Store the first part as the database name and remove it from the parts
    // array
    uri.db = parts.pop();

    // Restore the path by joining all the remaining parts (all the parts
    // except for the database name) with '/'s
    uri.path = parts.join('/');
    opts = opts || {};
    uri.headers = opts.headers || {};
    
    if (opts.auth || uri.auth) { 
      var nAuth = opts.auth || uri.auth;
      var token = PouchUtils.btoa(nAuth.username + ':' + nAuth.password);
      uri.headers.Authorization = 'Basic ' + token; 
    }

    if (opts.headers) {
      uri.headers = opts.headers;
    }

    return uri;
  }

  // If the given name does not contain 'http:' then return a very basic object
  // with no host, the current path, the given name as the database name and no
  // username/password
  return {host: '', path: '/', db: name, auth: false};
}

// Generate a URL with the host data given by opts and the given path
function genDBUrl(opts, path) {
  // If the host is remote
  if (opts.remote) {
    // If the host already has a path, then we need to have a path delimiter
    // Otherwise, the path delimiter is the empty string
    var pathDel = !opts.path ? '' : '/';

    // Return the URL made up of all the host's information and the given path
    return opts.protocol + '://' + opts.host + ':' + opts.port + '/' +
      opts.path + pathDel + opts.db + '/' + path;
  }

  // If the host is not remote, then return the URL made up of just the
  // database name and the given path
  return '/' + opts.db + '/' + path;
}

// Generate a URL with the host data given by opts and the given path
function genUrl(opts, path) {
  if (opts.remote) {
    // If the host already has a path, then we need to have a path delimiter
    // Otherwise, the path delimiter is the empty string
    var pathDel = !opts.path ? '' : '/';

    // If the host already has a path, then we need to have a path delimiter
    // Otherwise, the path delimiter is the empty string
    return opts.protocol + '://' + opts.host + ':' + opts.port + '/' + opts.path + pathDel + path;
  }

  return '/' + path;
}

// Implements the PouchDB API for dealing with CouchDB instances over HTTP
function HttpPouch(opts, callback) {

  // Parse the URI given by opts.name into an easy-to-use object
  var host = getHost(opts.name, opts);

  // Generate the database URL based on the host
  var db_url = genDBUrl(host, '');

  // The functions that will be publically available for HttpPouch
  var api = {};
  var ajaxOpts = opts.ajax || {};
  function ajax(options, callback) {
    return PouchUtils.ajax(PouchUtils.extend({}, ajaxOpts, options), callback);
  }
  var uuids = {
    list: [],
    get: function(opts, callback) {
      if (typeof opts === 'function') {
        callback = opts;
        opts = {count: 10};
      }
      var cb = function(err, body) {
        if (err || !('uuids' in body)) {
          PouchUtils.call(callback, err || Pouch.Errors.UNKNOWN_ERROR);
        } else {
          uuids.list = uuids.list.concat(body.uuids);
          PouchUtils.call(callback, null, "OK");
        }
      };
      var params = '?count=' + opts.count;
      ajax({
        headers: host.headers,
        method: 'GET',
        url: genUrl(host, '_uuids') + params
      }, cb);
    }
  };

  // Create a new CouchDB database based on the given opts
  var createDB = function(){
    ajax({headers: host.headers, method: 'PUT', url: db_url}, function(err, ret) {
      // If we get an "Unauthorized" error
      if (err && err.status === 401) {
        // Test if the database already exists
        ajax({headers: host.headers, method: 'HEAD', url: db_url}, function (err, ret) {
          // If there is still an error
          if (err) {
            // Give the error to the callback to deal with
            PouchUtils.call(callback, err);
          } else {
            // Continue as if there had been no errors
            PouchUtils.call(callback, null, api);
          }
        });
        // If there were no errros or if the only error is "Precondition Failed"
        // (note: "Precondition Failed" occurs when we try to create a database
        // that already exists)
      } else if (!err || err.status === 412) {
        // Continue as if there had been no errors
        PouchUtils.call(callback, null, api);
      } else {
        PouchUtils.call(callback, Pouch.Errors.UNKNOWN_ERROR);
      }
    });
  };
  if (!opts.skipSetup) {
    ajax({headers: host.headers, method: 'GET', url: db_url}, function(err, ret) {
      //check if the db exists
      if (err) {
        if (err.status === 404) {
          //if it doesn't, create it
          createDB();
        } else {
          PouchUtils.call(callback, err);
        }
      } else {
        //go do stuff with the db
        PouchUtils.call(callback, null, api);
      }
    });
  }

  api.type = function() {
    return 'http';
  };

  // The HttpPouch's ID is its URL
  api.id = function() {
    return genDBUrl(host, '');
  };

  api.request = function(options, callback) {
    if (!api.taskqueue.ready()) {
      api.taskqueue.addTask('request', arguments);
      return;
    }
    options.headers = host.headers;
    options.url = genDBUrl(host, options.url);
    ajax(options, callback);
  };

  // Sends a POST request to the host calling the couchdb _compact function
  //    version: The version of CouchDB it is running
  api.compact = function(opts, callback) {
    if (!api.taskqueue.ready()) {
      api.taskqueue.addTask('compact', arguments);
      return;
    }
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    ajax({
      headers: host.headers,
      url: genDBUrl(host, '_compact'),
      method: 'POST'
    }, function() {
      function ping() {
        api.info(function(err, res) {
          if (!res.compact_running) {
            PouchUtils.call(callback, null);
          } else {
            setTimeout(ping, opts.interval || 200);
          }
        });
      }
      // Ping the http if it's finished compaction
      if (typeof callback === "function") {
        ping();
      }
    });
  };

  // Calls GET on the host, which gets back a JSON string containing
  //    couchdb: A welcome string
  //    version: The version of CouchDB it is running
  api.info = function(callback) {
    if (!api.taskqueue.ready()) {
      api.taskqueue.addTask('info', arguments);
      return;
    }
    ajax({
      headers: host.headers,
      method:'GET',
      url: genDBUrl(host, '')
    }, callback);
  };

  // Get the document with the given id from the database given by host.
  // The id could be solely the _id in the database, or it may be a
  // _design/ID or _local/ID path
  api.get = function(id, opts, callback) {
    if (!api.taskqueue.ready()) {
      api.taskqueue.addTask('get', arguments);
      return;
    }
    // If no options were given, set the callback to the second parameter
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }

    if (opts.auto_encode === undefined) {
      opts.auto_encode = true;
    }

    // List of parameters to add to the GET request
    var params = [];

    // If it exists, add the opts.revs value to the list of parameters.
    // If revs=true then the resulting JSON will include a field
    // _revisions containing an array of the revision IDs.
    if (opts.revs) {
      params.push('revs=true');
    }

    // If it exists, add the opts.revs_info value to the list of parameters.
    // If revs_info=true then the resulting JSON will include the field
    // _revs_info containing an array of objects in which each object
    // representing an available revision.
    if (opts.revs_info) {
      params.push('revs_info=true');
    }

    if (opts.local_seq) {
      params.push('local_seq=true');
    }
    // If it exists, add the opts.open_revs value to the list of parameters.
    // If open_revs=all then the resulting JSON will include all the leaf
    // revisions. If open_revs=["rev1", "rev2",...] then the resulting JSON
    // will contain an array of objects containing data of all revisions
    if (opts.open_revs) {
      if (opts.open_revs !== "all") {
        opts.open_revs = JSON.stringify(opts.open_revs);
      }
      params.push('open_revs=' + opts.open_revs);
    }

    // If it exists, add the opts.attachments value to the list of parameters.
    // If attachments=true the resulting JSON will include the base64-encoded
    // contents in the "data" property of each attachment.
    if (opts.attachments) {
      params.push('attachments=true');
    }

    // If it exists, add the opts.rev value to the list of parameters.
    // If rev is given a revision number then get the specified revision.
    if (opts.rev) {
      params.push('rev=' + opts.rev);
    }

    // If it exists, add the opts.conflicts value to the list of parameters.
    // If conflicts=true then the resulting JSON will include the field
    // _conflicts containing all the conflicting revisions.
    if (opts.conflicts) {
      params.push('conflicts=' + opts.conflicts);
    }

    // Format the list of parameters into a valid URI query string
    params = params.join('&');
    params = params === '' ? '' : '?' + params;

    if (opts.auto_encode) {
      id = encodeDocId(id);
    }

    // Set the options for the ajax call
    var options = {
      headers: host.headers,
      method: 'GET',
      url: genDBUrl(host, id + params)
    };

    // If the given id contains at least one '/' and the part before the '/'
    // is NOT "_design" and is NOT "_local"
    // OR
    // If the given id contains at least two '/' and the part before the first
    // '/' is "_design".
    // TODO This second condition seems strange since if parts[0] === '_design'
    // then we already know that parts[0] !== '_local'.
    var parts = id.split('/');
    if ((parts.length > 1 && parts[0] !== '_design' && parts[0] !== '_local') ||
        (parts.length > 2 && parts[0] === '_design' && parts[0] !== '_local')) {
      // Binary is expected back from the server
      options.binary = true;
    }

    // Get the document
    ajax(options, function(err, doc, xhr) {
      // If the document does not exist, send an error to the callback
      if (err) {
        return PouchUtils.call(callback, err);
      }

      // Send the document to the callback
      PouchUtils.call(callback, null, doc, xhr);
    });
  };

  // Delete the document given by doc from the database given by host.
  api.remove = function(doc, opts, callback) {
    if (!api.taskqueue.ready()) {
      api.taskqueue.addTask('remove', arguments);
      return;
    }
    // If no options were given, set the callback to be the second parameter
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }

    // Delete the document
    ajax({
      headers: host.headers,
      method:'DELETE',
      url: genDBUrl(host, encodeDocId(doc._id)) + '?rev=' + doc._rev
    }, callback);
  };

  // Get the attachment
  api.getAttachment = function(docId, attachmentId, opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    if (opts.auto_encode === undefined) {
      opts.auto_encode = true;
    }
    if (opts.auto_encode) {
      docId = encodeDocId(docId);
    }
    opts.auto_encode = false;
    api.get(docId + '/' + attachmentId, opts, callback);
  };

  // Remove the attachment given by the id and rev
  api.removeAttachment = function(docId, attachmentId, rev, callback) {
    if (!api.taskqueue.ready()) {
      api.taskqueue.addTask('removeAttachment', arguments);
      return;
    }
    ajax({
      headers: host.headers,
      method: 'DELETE',
      url: genDBUrl(host, encodeDocId(docId) + '/' + attachmentId) + '?rev=' + rev
    }, callback);
  };

  // Add the attachment given by blob and its contentType property
  // to the document with the given id, the revision given by rev, and
  // add it to the database given by host.
  api.putAttachment = function(docId, attachmentId, rev, blob, type, callback) {
    if (!api.taskqueue.ready()) {
      api.taskqueue.addTask('putAttachment', arguments);
      return;
    }
    if (typeof type === 'function') {
      callback = type;
      type = blob;
      blob = rev;
      rev = null;
    }
    if (typeof type === 'undefined') {
      type = blob;
      blob = rev;
      rev = null;
    }
    var id = encodeDocId(docId) + '/' + attachmentId;
    var url = genDBUrl(host, id);
    if (rev) {
      url += '?rev=' + rev;
    }

    var opts = {
      headers: host.headers,
      method:'PUT',
      url: url,
      processData: false,
      body: blob,
      timeout: 60000
    };
    opts.headers['Content-Type'] = type;
    // Add the attachment
    ajax(opts, callback);
  };

  // Add the document given by doc (in JSON string format) to the database
  // given by host. This fails if the doc has no _id field.
  api.put = function(doc, opts, callback) {
    if (!api.taskqueue.ready()) {
      api.taskqueue.addTask('put', arguments);
      return;
    }
    // If no options were given, set the callback to be the second parameter
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    if (typeof doc !== 'object') {
      return PouchUtils.call(callback, Pouch.Errors.NOT_AN_OBJECT);
    }
    if (!('_id' in doc)) {
      return PouchUtils.call(callback, Pouch.Errors.MISSING_ID);
    }

    // List of parameter to add to the PUT request
    var params = [];

    // If it exists, add the opts.new_edits value to the list of parameters.
    // If new_edits = false then the database will NOT assign this document a
    // new revision number
    if (opts && typeof opts.new_edits !== 'undefined') {
      params.push('new_edits=' + opts.new_edits);
    }

    // Format the list of parameters into a valid URI query string
    params = params.join('&');
    if (params !== '') {
      params = '?' + params;
    }

    // Add the document
    ajax({
      headers: host.headers,
      method: 'PUT',
      url: genDBUrl(host, encodeDocId(doc._id)) + params,
      body: doc
    }, callback);
  };

  // Add the document given by doc (in JSON string format) to the database
  // given by host. This does not assume that doc is a new document (i.e. does not
  // have a _id or a _rev field.
  api.post = function(doc, opts, callback) {
    if (!api.taskqueue.ready()) {
      api.taskqueue.addTask('post', arguments);
      return;
    }
    // If no options were given, set the callback to be the second parameter
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    if (typeof doc !== 'object') {
      return PouchUtils.call(callback, Pouch.Errors.NOT_AN_OBJECT);
    }
    if (! ("_id" in doc)) {
      if (uuids.list.length > 0) {
        doc._id = uuids.list.pop();
        api.put(doc, opts, callback);
      }else {
        uuids.get(function(err, resp) {
          if (err) {
            return PouchUtils.call(callback, Pouch.Errors.UNKNOWN_ERROR);
          }
          doc._id = uuids.list.pop();
          api.put(doc, opts, callback);
        });
      }
    } else {
      api.put(doc, opts, callback);
    }
  };

  // Update/create multiple documents given by req in the database
  // given by host.
  api.bulkDocs = function(req, opts, callback) {
    if (!api.taskqueue.ready()) {
      api.taskqueue.addTask('bulkDocs', arguments);
      return;
    }
    // If no options were given, set the callback to be the second parameter
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }
    if (!opts) {
      opts = {};
    }

    // If opts.new_edits exists add it to the document data to be
    // send to the database.
    // If new_edits=false then it prevents the database from creating
    // new revision numbers for the documents. Instead it just uses
    // the old ones. This is used in database replication.
    if (typeof opts.new_edits !== 'undefined') {
      req.new_edits = opts.new_edits;
    }

    // Update/create the documents
    ajax({
      headers: host.headers,
      method:'POST',
      url: genDBUrl(host, '_bulk_docs'),
      body: req
    }, callback);
  };

  // Get a listing of the documents in the database given
  // by host and ordered by increasing id.
  api.allDocs = function(opts, callback) {
    // If no options were given, set the callback to be the second parameter
    if (!api.taskqueue.ready()) {
      api.taskqueue.addTask('allDocs', arguments);
      return;
    }
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }

    // List of parameters to add to the GET request
    var params = [];
    var body;
    var method = 'GET';

    // TODO I don't see conflicts as a valid parameter for a
    // _all_docs request (see http://wiki.apache.org/couchdb/HTTP_Document_API#all_docs)
    if (opts.conflicts) {
      params.push('conflicts=true');
    }

    // If opts.descending is truthy add it to params
    if (opts.descending) {
      params.push('descending=true');
    }

    // If opts.include_docs exists, add the include_docs value to the
    // list of parameters.
    // If include_docs=true then include the associated document with each
    // result.
    if (opts.include_docs) {
      params.push('include_docs=true');
    }

    // If opts.startkey exists, add the startkey value to the list of
    // parameters.
    // If startkey is given then the returned list of documents will
    // start with the document whose id is startkey.
    if (opts.startkey) {
      params.push('startkey=' +
                  encodeURIComponent(JSON.stringify(opts.startkey)));
    }

    // If opts.endkey exists, add the endkey value to the list of parameters.
    // If endkey is given then the returned list of docuemnts will
    // end with the document whose id is endkey.
    if (opts.endkey) {
      params.push('endkey=' + encodeURIComponent(JSON.stringify(opts.endkey)));
    }

    // If opts.limit exists, add the limit value to the parameter list.
    if (opts.limit) {
      params.push('limit=' + opts.limit);
    }

    if (typeof opts.skip !== 'undefined') {
      params.push('skip=' + opts.skip);
    }

    // Format the list of parameters into a valid URI query string
    params = params.join('&');
    if (params !== '') {
      params = '?' + params;
    }

    // If keys are supplied, issue a POST request to circumvent GET query string limits
    // see http://wiki.apache.org/couchdb/HTTP_view_API#Querying_Options
    if (typeof opts.keys !== 'undefined') {
      method = 'POST';
      body = JSON.stringify({keys:opts.keys});
    }

    // Get the document listing
    ajax({
      headers: host.headers,
      method: method,
      url: genDBUrl(host, '_all_docs' + params),
      body: body
    }, callback);
  };

  // Get a list of changes made to documents in the database given by host.
  // TODO According to the README, there should be two other methods here,
  // api.changes.addListener and api.changes.removeListener.
  api.changes = function(opts) {

    // We internally page the results of a changes request, this means
    // if there is a large set of changes to be returned we can start
    // processing them quicker instead of waiting on the entire
    // set of changes to return and attempting to process them at once
    var CHANGES_LIMIT = 25;

    if (!api.taskqueue.ready()) {
      var task = api.taskqueue.addTask('changes', arguments);
      return {
        cancel: function() {
          if (task.task) {
            return task.task.cancel();
          }
          if (Pouch.DEBUG) {
            console.log(db_url + ': Cancel Changes Feed');
          }
          task.parameters[0].aborted = true;
        }
      };
    }
    
    if (opts.since === 'latest') {
      var changes;
      api.info(function (err, info) {
        if (!opts.aborted) {
          opts.since = info.update_seq;
          changes = api.changes(opts);
        }
      });
      // Return a method to cancel this method from processing any more
      return {
        cancel: function() {
          if (changes) {
            return changes.cancel();
          }
          if (Pouch.DEBUG) {
            console.log(db_url + ': Cancel Changes Feed');
          }
          opts.aborted = true;
        }
      };
    }

    if (Pouch.DEBUG) {
      console.log(db_url + ': Start Changes Feed: continuous=' + opts.continuous);
    }

    var params = {};
    var limit = (typeof opts.limit !== 'undefined') ? opts.limit : false;
    if (limit === 0) {
      limit = 1;
    }
    //
    var leftToFetch = limit;

    if (opts.style) {
      params.style = opts.style;
    }

    if (opts.include_docs || opts.filter && typeof opts.filter === 'function') {
      params.include_docs = true;
    }

    if (opts.continuous) {
      params.feed = 'longpoll';
    }

    if (opts.conflicts) {
      params.conflicts = true;
    }

    if (opts.descending) {
      params.descending = true;
    }

    if (opts.filter && typeof opts.filter === 'string') {
      params.filter = opts.filter;
    }

    // If opts.query_params exists, pass it through to the changes request.
    // These parameters may be used by the filter on the source database.
    if (opts.query_params && typeof opts.query_params === 'object') {
      for (var param_name in opts.query_params) {
        if (opts.query_params.hasOwnProperty(param_name)) {
          params[param_name] = opts.query_params[param_name];
        }
      }
    }

    var xhr;
    var lastFetchedSeq;
    var remoteLastSeq;
    var pagingCount;

    // Get all the changes starting wtih the one immediately after the
    // sequence number given by since.
    var fetch = function(since, callback) {
      params.since = since;
      if (!opts.continuous && !pagingCount) {
        pagingCount = remoteLastSeq;
      }
      params.limit = (!limit || leftToFetch > CHANGES_LIMIT) ?
        CHANGES_LIMIT : leftToFetch;

      var paramStr = '?' + Object.keys(params).map(function(k) {
        return k + '=' + params[k];
      }).join('&');

      // Set the options for the ajax call
      var xhrOpts = {
        headers: host.headers, method:'GET',
        url: genDBUrl(host, '_changes' + paramStr),
        // _changes can take a long time to generate, especially when filtered
        timeout: null
      };
      lastFetchedSeq = since;

      if (opts.aborted) {
        return;
      }

      // Get the changes
      xhr = ajax(xhrOpts, callback);
    };

    // If opts.since exists, get all the changes from the sequence
    // number given by opts.since. Otherwise, get all the changes
    // from the sequence number 0.
    var fetchTimeout = 10;
    var fetchRetryCount = 0;

    var results = {results: []};

    var fetched = function(err, res) {
      // If the result of the ajax call (res) contains changes (res.results)
      if (res && res.results) {
        results.last_seq = res.last_seq;
        // For each change
        var req = {};
        req.query = opts.query_params;
        res.results = res.results.filter(function(c) {
          leftToFetch--;
          var ret = PouchUtils.filterChange(opts)(c);
          if (ret) {
            results.results.push(c);
            PouchUtils.call(opts.onChange, c);
          }
          return ret;
        });
      }

      // The changes feed may have timed out with no results
      // if so reuse last update sequence
      if (res && res.last_seq) {
        lastFetchedSeq = res.last_seq;
      }

      var resultsLength = res && res.results.length || 0;

      pagingCount -= CHANGES_LIMIT;

      var finished = (limit && leftToFetch <= 0) ||
        (res && !resultsLength && pagingCount <= 0) ||
        (resultsLength && res.last_seq === remoteLastSeq) ||
        (opts.descending && lastFetchedSeq !== 0);

      if (opts.continuous || !finished) {
        // Increase retry delay exponentially as long as errors persist
        if (err) {
          fetchRetryCount += 1;
        } else {
          fetchRetryCount = 0;
        }
        var timeoutMultiplier = 1 << fetchRetryCount;
        var retryWait = fetchTimeout * timeoutMultiplier;
        var maximumWait = opts.maximumWait || 30000;

        if (retryWait > maximumWait) {
          PouchUtils.call(opts.complete, err || Pouch.Errors.UNKNOWN_ERROR, null);
        }

        // Queue a call to fetch again with the newest sequence number
        setTimeout(function() { fetch(lastFetchedSeq, fetched); }, retryWait);
      } else {
        // We're done, call the callback
        PouchUtils.call(opts.complete, null, results);
      }
    };

    // If we arent doing a continuous changes request we need to know
    // the current update_seq so we know when to stop processing the
    // changes
    if (opts.continuous) {
      fetch(opts.since || 0, fetched);
    } else {
      api.info(function(err, res) {
        if (err) {
          return PouchUtils.call(opts.complete, err);
        }
        remoteLastSeq = res.update_seq;
        fetch(opts.since || 0, fetched);
      });
    }

    // Return a method to cancel this method from processing any more
    return {
      cancel: function() {
        if (Pouch.DEBUG) {
          console.log(db_url + ': Cancel Changes Feed');
        }
        opts.aborted = true;
        xhr.abort();
      }
    };
  };

  // Given a set of document/revision IDs (given by req), tets the subset of
  // those that do NOT correspond to revisions stored in the database.
  // See http://wiki.apache.org/couchdb/HttpPostRevsDiff
  api.revsDiff = function(req, opts, callback) {
    if (!api.taskqueue.ready()) {
      api.taskqueue.addTask('revsDiff', arguments);
      return;
    }
    // If no options were given, set the callback to be the second parameter
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }

    // Get the missing document/revision IDs
    ajax({
      headers: host.headers,
      method:'POST',
      url: genDBUrl(host, '_revs_diff'),
      body: req
    }, function(err, res) {
      PouchUtils.call(callback, err, res);
    });
  };

  api.close = function(callback) {
    if (!api.taskqueue.ready()) {
      api.taskqueue.addTask('close', arguments);
      return;
    }
    PouchUtils.call(callback, null);
  };

  api.replicateOnServer = function(target, opts, promise) {
    if (!api.taskqueue.ready()) {
      api.taskqueue.addTask('replicateOnServer', arguments);
      return promise;
    }
    
    var targetHost = getHost(target.id());
    var params = {
      source: host.db,
      target: targetHost.protocol === host.protocol && targetHost.authority === host.authority ? targetHost.db : targetHost.source
    };

    if (opts.continuous) {
      params.continuous = true;
    }

    if (opts.create_target) {
      params.create_target = true;
    }

    if (opts.doc_ids) {
      params.doc_ids = opts.doc_ids;
    }

    if (opts.filter && typeof opts.filter === 'string') {
      params.filter = opts.filter;
    }

    if (opts.query_params) {
      params.query_params = opts.query_params;
    }

    var result = {};
    var repOpts = {
      headers: host.headers,
      method: 'POST',
      url: host.protocol + '://' + host.host + (host.port === 80 ? '' : (':' + host.port)) + '/_replicate',
      body: params
    };
    var xhr;
    promise.cancel = function() {
      this.cancelled = true;
      if (xhr && !result.ok) {
        xhr.abort();
      }
      if (result._local_id) {
        repOpts.body = {
          replication_id: result._local_id
        };
      }
      repOpts.body.cancel = true;
      ajax(repOpts, function(err, resp, xhr) {
        // If the replication cancel request fails, send an error to the callback
        if (err) {
          return PouchUtils.call(callback, err);
        }
        // Send the replication cancel result to the complete callback
        PouchUtils.call(opts.complete, null, result, xhr);
      });
    };

    if (promise.cancelled) {
      return;
    }

    xhr = ajax(repOpts, function(err, resp, xhr) {
      // If the replication fails, send an error to the callback
      if (err) {
        return PouchUtils.call(callback, err);
      }

      result.ok = true;

      // Provided by CouchDB from 1.2.0 onward to cancel replication
      if (resp._local_id) {
        result._local_id = resp._local_id;
      }

      // Send the replication result to the complete callback
      PouchUtils.call(opts.complete, null, resp, xhr);
    });
  };

  return api;
}

// Delete the HttpPouch specified by the given name.
HttpPouch.destroy = function(name, opts, callback) {
  var host = getHost(name, opts);
  opts = opts || {};
  if (typeof opts === 'function') {
    callback = opts;
    opts = {};
  }
  opts.headers = host.headers;
  opts.method = 'DELETE';
  opts.url = genDBUrl(host, '');
  PouchUtils.ajax(opts, callback);
};

// HttpPouch is a valid adapter.
HttpPouch.valid = function() {
  return true;
};

// Set HttpPouch to be the adapter used with the http scheme.
Pouch.adapter('http', HttpPouch);
Pouch.adapter('https', HttpPouch);

/*globals PouchUtils: true, PouchMerge */

'use strict';

var PouchUtils;

if (typeof module !== 'undefined' && module.exports) {
  PouchUtils = require('../pouch.utils.js');
}

var idbError = function(callback) {
  return function(event) {
    PouchUtils.call(callback, {
      status: 500,
      error: event.type,
      reason: event.target
    });
  };
};

var IdbPouch = function(opts, callback) {

  // IndexedDB requires a versioned database structure, this is going to make
  // it hard to dynamically create object stores if we needed to for things
  // like views
  var POUCH_VERSION = 1;

  // The object stores created for each database
  // DOC_STORE stores the document meta data, its revision history and state
  var DOC_STORE = 'document-store';
  // BY_SEQ_STORE stores a particular version of a document, keyed by its
  // sequence id
  var BY_SEQ_STORE = 'by-sequence';
  // Where we store attachments
  var ATTACH_STORE = 'attach-store';
  // Where we store meta data
  var META_STORE = 'meta-store';
  // Where we detect blob support
  var DETECT_BLOB_SUPPORT_STORE = 'detect-blob-support';


  var name = opts.name;
  var req = window.indexedDB.open(name, POUCH_VERSION);

  if (Pouch.openReqList) {
    Pouch.openReqList[name] = req;
  }

  var blobSupport = null;

  var instanceId = null;
  var api = {};
  var idb = null;

  if (Pouch.DEBUG) {
    console.log(name + ': Open Database');
  }

  req.onupgradeneeded = function(e) {
    var db = e.target.result;
    var currentVersion = e.oldVersion;
    while (currentVersion !== e.newVersion) {
      if (currentVersion === 0) {
        createSchema(db);
      }
      currentVersion++;
    }
  };

  function createSchema(db) {
    db.createObjectStore(DOC_STORE, {keyPath : 'id'})
      .createIndex('seq', 'seq', {unique: true});
    db.createObjectStore(BY_SEQ_STORE, {autoIncrement : true})
      .createIndex('_doc_id_rev', '_doc_id_rev', {unique: true});
    db.createObjectStore(ATTACH_STORE, {keyPath: 'digest'});
    db.createObjectStore(META_STORE, {keyPath: 'id', autoIncrement: false});
    db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
  }

  // From http://stackoverflow.com/questions/14967647/encode-decode-image-with-base64-breaks-image (2013-04-21)
  function fixBinary(bin) {
    var length = bin.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {
      arr[i] = bin.charCodeAt(i);
    }
    return buf;
  }

  req.onsuccess = function(e) {

    idb = e.target.result;

    var txn = idb.transaction([META_STORE, DETECT_BLOB_SUPPORT_STORE],
                              'readwrite');

    idb.onversionchange = function() {
      idb.close();
    };

    // polyfill the new onupgradeneeded api for chrome. can get rid of when
    // saucelabs moves to chrome 23
    if (idb.setVersion && Number(idb.version) !== POUCH_VERSION) {
      var versionReq = idb.setVersion(POUCH_VERSION);
      versionReq.onsuccess = function(evt) {
        function setVersionComplete() {
          req.onsuccess(e);
        }
        evt.target.result.oncomplete = setVersionComplete;
        req.onupgradeneeded(e);
      };
      return;
    }

    var req = txn.objectStore(META_STORE).get(META_STORE);

    req.onsuccess = function(e) {
      var meta = e.target.result || {id: META_STORE};
      if (name + '_id' in meta) {
        instanceId = meta[name + '_id'];
      } else {
        instanceId = Pouch.uuid();
        meta[name + '_id'] = instanceId;
        txn.objectStore(META_STORE).put(meta);
      }

      // detect blob support
      try {
        txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(PouchUtils.createBlob(), "key");
        blobSupport = true;
      } catch (err) {
        blobSupport = false;
      } finally {
        PouchUtils.call(callback, null, api);
      }
    };
  };

  req.onerror = idbError(callback);

  api.type = function() {
    return 'idb';
  };

  // Each database needs a unique id so that we can store the sequence
  // checkpoint without having other databases confuse itself.
  api.id = function idb_id() {
    return instanceId;
  };

  api._bulkDocs = function idb_bulkDocs(req, opts, callback) {
    var newEdits = opts.new_edits;
    var userDocs = req.docs;
    // Parse the docs, give them a sequence number for the result
    var docInfos = userDocs.map(function(doc, i) {
      var newDoc = PouchUtils.parseDoc(doc, newEdits);
      newDoc._bulk_seq = i;
      return newDoc;
    });

    var docInfoErrors = docInfos.filter(function(docInfo) {
      return docInfo.error;
    });
    if (docInfoErrors.length) {
      return PouchUtils.call(callback, docInfoErrors[0]);
    }

    var results = [];
    var docsWritten = 0;

    function writeMetaData(e) {
      var meta = e.target.result;
      meta.updateSeq = (meta.updateSeq || 0) + docsWritten;
      txn.objectStore(META_STORE).put(meta);
    }

    function processDocs() {
      if (!docInfos.length) {
        txn.objectStore(META_STORE).get(META_STORE).onsuccess = writeMetaData;
        return;
      }
      var currentDoc = docInfos.shift();
      var req = txn.objectStore(DOC_STORE).get(currentDoc.metadata.id);
      req.onsuccess = function process_docRead(event) {
        var oldDoc = event.target.result;
        if (!oldDoc) {
          insertDoc(currentDoc);
        } else {
          updateDoc(oldDoc, currentDoc);
        }
      };
    }

    function complete(event) {
      var aresults = [];
      results.sort(sortByBulkSeq);
      results.forEach(function(result) {
        delete result._bulk_seq;
        if (result.error) {
          aresults.push(result);
          return;
        }
        var metadata = result.metadata;
        var rev = PouchMerge.winningRev(metadata);

        aresults.push({
          ok: true,
          id: metadata.id,
          rev: rev
        });

        if (PouchUtils.isLocalId(metadata.id)) {
          return;
        }

        IdbPouch.Changes.notify(name);
        IdbPouch.Changes.notifyLocalWindows(name);
      });
      PouchUtils.call(callback, null, aresults);
    }

    function preprocessAttachment(att, finish) {
      if (att.stub) {
        return finish();
      }
      if (typeof att.data === 'string') {
        var data;
        try {
          data = atob(att.data);
        } catch (e) {
          var err = Pouch.error(Pouch.Errors.BAD_ARG,
                                "Attachments need to be base64 encoded");
          return PouchUtils.call(callback, err);
        }
        att.digest = 'md5-' + PouchUtils.Crypto.MD5(data);
        if (blobSupport) {
          var type = att.content_type;
          data = fixBinary(data);
          att.data = PouchUtils.createBlob([data], {type: type});
        }
        return finish();
      }
      var reader = new FileReader();
      reader.onloadend = function(e) {
        att.digest = 'md5-' + PouchUtils.Crypto.MD5(this.result);
        if (!blobSupport) {
          att.data = btoa(this.result);
        }
        finish();
      };
      reader.readAsBinaryString(att.data);
    }

    function preprocessAttachments(callback) {
      if (!docInfos.length) {
        return callback();
      }

      var docv = 0;
      docInfos.forEach(function(docInfo) {
        var attachments = docInfo.data && docInfo.data._attachments ?
          Object.keys(docInfo.data._attachments) : [];

        if (!attachments.length) {
          return done();
        }

        var recv = 0;
        function attachmentProcessed() {
          recv++;
          if (recv === attachments.length) {
            done();
          }
        }

        for (var key in docInfo.data._attachments) {
          preprocessAttachment(docInfo.data._attachments[key], attachmentProcessed);
        }
      });

      function done() {
        docv++;
        if (docInfos.length === docv) {
          callback();
        }
      }
    }

    function writeDoc(docInfo, callback) {
      var err = null;
      var recv = 0;
      docInfo.data._id = docInfo.metadata.id;
      docInfo.data._rev = docInfo.metadata.rev;

      docsWritten++;

      if (PouchUtils.isDeleted(docInfo.metadata, docInfo.metadata.rev)) {
        docInfo.data._deleted = true;
      }

      var attachments = docInfo.data._attachments ?
        Object.keys(docInfo.data._attachments) : [];

      function collectResults(attachmentErr) {
        if (!err) {
          if (attachmentErr) {
            err = attachmentErr;
            PouchUtils.call(callback, err);
          } else if (recv === attachments.length) {
            finish();
          }
        }
      }

      function attachmentSaved(err) {
        recv++;
        collectResults(err);
      }

      for (var key in docInfo.data._attachments) {
        if (!docInfo.data._attachments[key].stub) {
          var data = docInfo.data._attachments[key].data;
          delete docInfo.data._attachments[key].data;
          var digest = docInfo.data._attachments[key].digest;
          saveAttachment(docInfo, digest, data, attachmentSaved);
        } else {
          recv++;
          collectResults();
        }
      }

      function finish() {
        docInfo.data._doc_id_rev = docInfo.data._id + "::" + docInfo.data._rev;
        var dataReq = txn.objectStore(BY_SEQ_STORE).put(docInfo.data);
        dataReq.onsuccess = function(e) {
          if (Pouch.DEBUG) {
            console.log(name + ': Wrote Document ', docInfo.metadata.id);
          }
          docInfo.metadata.seq = e.target.result;
          // Current _rev is calculated from _rev_tree on read
          delete docInfo.metadata.rev;
          var metaDataReq = txn.objectStore(DOC_STORE).put(docInfo.metadata);
          metaDataReq.onsuccess = function() {
            results.push(docInfo);
            PouchUtils.call(callback);
          };
        };
      }

      if (!attachments.length) {
        finish();
      }
    }

    function updateDoc(oldDoc, docInfo) {
      var merged = PouchMerge.merge(oldDoc.rev_tree, docInfo.metadata.rev_tree[0], 1000);
      var wasPreviouslyDeleted = PouchUtils.isDeleted(oldDoc);
      var inConflict = (wasPreviouslyDeleted &&
                        PouchUtils.isDeleted(docInfo.metadata)) ||
        (!wasPreviouslyDeleted && newEdits && merged.conflicts !== 'new_leaf');

      if (inConflict) {
        results.push(makeErr(Pouch.Errors.REV_CONFLICT, docInfo._bulk_seq));
        return processDocs();
      }

      docInfo.metadata.rev_tree = merged.tree;
      writeDoc(docInfo, processDocs);
    }

    function insertDoc(docInfo) {
      // Cant insert new deleted documents
      if ('was_delete' in opts && PouchUtils.isDeleted(docInfo.metadata)) {
        results.push(Pouch.Errors.MISSING_DOC);
        return processDocs();
      }
      writeDoc(docInfo, processDocs);
    }

    // Insert sequence number into the error so we can sort later
    function makeErr(err, seq) {
      err._bulk_seq = seq;
      return err;
    }

    function saveAttachment(docInfo, digest, data, callback) {
      var objectStore = txn.objectStore(ATTACH_STORE);
      var getReq = objectStore.get(digest).onsuccess = function(e) {
        var originalRefs = e.target.result && e.target.result.refs || {};
        var ref = [docInfo.metadata.id, docInfo.metadata.rev].join('@');
        var newAtt = {
          digest: digest,
          body: data,
          refs: originalRefs
        };
        newAtt.refs[ref] = true;
        var putReq = objectStore.put(newAtt).onsuccess = function(e) {
          PouchUtils.call(callback);
        };
      };
    }

    var txn;
    preprocessAttachments(function() {
      txn = idb.transaction([DOC_STORE, BY_SEQ_STORE, ATTACH_STORE, META_STORE],
                            'readwrite');
      txn.onerror = idbError(callback);
      txn.ontimeout = idbError(callback);
      txn.oncomplete = complete;

      processDocs();
    });
  };

  function sortByBulkSeq(a, b) {
    return a._bulk_seq - b._bulk_seq;
  }

  // First we look up the metadata in the ids database, then we fetch the
  // current revision(s) from the by sequence store
  api._get = function idb_get(id, opts, callback) {
    var doc;
    var metadata;
    var err;
    var txn;
    if (opts.ctx) {
      txn = opts.ctx;
    } else {
      txn = idb.transaction([DOC_STORE, BY_SEQ_STORE, ATTACH_STORE], 'readonly');
    }

    function finish(){
      PouchUtils.call(callback, err, {doc: doc, metadata: metadata, ctx: txn});
    }

    txn.objectStore(DOC_STORE).get(id).onsuccess = function(e) {
      metadata = e.target.result;
      // we can determine the result here if:
      // 1. there is no such document
      // 2. the document is deleted and we don't ask about specific rev
      // When we ask with opts.rev we expect the answer to be either
      // doc (possibly with _deleted=true) or missing error
      if (!metadata) {
        err = Pouch.Errors.MISSING_DOC;
        return finish();
      }
      if (PouchUtils.isDeleted(metadata) && !opts.rev) {
        err = Pouch.error(Pouch.Errors.MISSING_DOC, "deleted");
        return finish();
      }

      var rev = PouchMerge.winningRev(metadata);
      var key = metadata.id + '::' + (opts.rev ? opts.rev : rev);
      var index = txn.objectStore(BY_SEQ_STORE).index('_doc_id_rev');

      index.get(key).onsuccess = function(e) {
        doc = e.target.result;
        if(doc && doc._doc_id_rev) {
          delete(doc._doc_id_rev);
        }
        if (!doc) {
          err = Pouch.Errors.MISSING_DOC;
          return finish();
        }
        finish();
      };
    };
  };

  api._getAttachment = function(attachment, opts, callback) {
    var result;
    var txn;
    if (opts.ctx) {
      txn = opts.ctx;
    } else {
      txn = idb.transaction([DOC_STORE, BY_SEQ_STORE, ATTACH_STORE], 'readonly');
    }
    var digest = attachment.digest;
    var type = attachment.content_type;

    txn.objectStore(ATTACH_STORE).get(digest).onsuccess = function(e) {
      var data = e.target.result.body;
      if (opts.encode) {
        if (blobSupport) {
          var reader = new FileReader();
          reader.onloadend = function(e) {
            result = btoa(this.result);
            PouchUtils.call(callback, null, result);
          };
          reader.readAsBinaryString(data);
        } else {
          result = data;
          PouchUtils.call(callback, null, result);
        }
      } else {
        if (blobSupport) {
          result = data;
        } else {
          data = fixBinary(atob(data));
          result = PouchUtils.createBlob([data], {type: type});
        }
        PouchUtils.call(callback, null, result);
      }
    };
  };

  api._allDocs = function idb_allDocs(opts, callback) {
    var start = 'startkey' in opts ? opts.startkey : false;
    var end = 'endkey' in opts ? opts.endkey : false;

    var descending = 'descending' in opts ? opts.descending : false;
    descending = descending ? 'prev' : null;

    var keyRange = start && end ? window.IDBKeyRange.bound(start, end)
      : start ? window.IDBKeyRange.lowerBound(start)
      : end ? window.IDBKeyRange.upperBound(end) : null;

    var transaction = idb.transaction([DOC_STORE, BY_SEQ_STORE], 'readonly');
    transaction.oncomplete = function() {
      if ('keys' in opts) {
        opts.keys.forEach(function(key) {
          if (key in resultsMap) {
            results.push(resultsMap[key]);
          } else {
            results.push({"key": key, "error": "not_found"});
          }
        });
        if (opts.descending) {
          results.reverse();
        }
      }
      PouchUtils.call(callback, null, {
        total_rows: results.length,
        offset: opts.skip,
        rows: ('limit' in opts) ? results.slice(opts.skip, opts.limit + opts.skip) :
          (opts.skip > 0) ? results.slice(opts.skip) : results
      });
    };

    var oStore = transaction.objectStore(DOC_STORE);
    var oCursor = descending ? oStore.openCursor(keyRange, descending)
      : oStore.openCursor(keyRange);
    var results = [];
    var resultsMap = {};
    oCursor.onsuccess = function(e) {
      if (!e.target.result) {
        return;
      }
      var cursor = e.target.result;
      var metadata = cursor.value;
      // If opts.keys is set we want to filter here only those docs with
      // key in opts.keys. With no performance tests it is difficult to
      // guess if iteration with filter is faster than many single requests
      function allDocsInner(metadata, data) {
        if (PouchUtils.isLocalId(metadata.id)) {
          return cursor['continue']();
        }
        var doc = {
          id: metadata.id,
          key: metadata.id,
          value: {
            rev: PouchMerge.winningRev(metadata)
          }
        };
        if (opts.include_docs) {
          doc.doc = data;
          doc.doc._rev = PouchMerge.winningRev(metadata);
          if (doc.doc._doc_id_rev) {
              delete(doc.doc._doc_id_rev);
          }
          if (opts.conflicts) {
            doc.doc._conflicts = PouchMerge.collectConflicts(metadata);
          }
          for (var att in doc.doc._attachments) {
            doc.doc._attachments[att].stub = true;
          }
        }
        if ('keys' in opts) {
          if (opts.keys.indexOf(metadata.id) > -1) {
            if (PouchUtils.isDeleted(metadata)) {
              doc.value.deleted = true;
              doc.doc = null;
            }
            resultsMap[doc.id] = doc;
          }
        } else {
          if (!PouchUtils.isDeleted(metadata)) {
            results.push(doc);
          }
        }
        cursor['continue']();
      }

      if (!opts.include_docs) {
        allDocsInner(metadata);
      } else {
        var index = transaction.objectStore(BY_SEQ_STORE).index('_doc_id_rev');
        var mainRev = PouchMerge.winningRev(metadata);
        var key = metadata.id + "::" + mainRev;
        index.get(key).onsuccess = function(event) {
          allDocsInner(cursor.value, event.target.result);
        };
      }
    };
  };

  api._info = function idb_info(callback) {
    var count = 0;
    var update_seq = 0;
    var txn = idb.transaction([DOC_STORE, META_STORE], 'readonly');

    function fetchUpdateSeq(e) {
      update_seq = e.target.result && e.target.result.updateSeq || 0;
    }

    function countDocs(e) {
      var cursor = e.target.result;
      if (!cursor) {
        txn.objectStore(META_STORE).get(META_STORE).onsuccess = fetchUpdateSeq;
        return;
      }
      if (cursor.value.deleted !== true) {
        count++;
      }
      cursor['continue']();
    }

    txn.oncomplete = function() {
      callback(null, {
        db_name: name,
        doc_count: count,
        update_seq: update_seq
      });
    };

    txn.objectStore(DOC_STORE).openCursor().onsuccess = countDocs;
  };

  api._changes = function idb_changes(opts) {
    if (Pouch.DEBUG) {
      console.log(name + ': Start Changes Feed: continuous=' + opts.continuous);
    }

    if (opts.continuous) {
      var id = name + ':' + Pouch.uuid();
      opts.cancelled = false;
      IdbPouch.Changes.addListener(name, id, api, opts);
      IdbPouch.Changes.notify(name);
      return {
        cancel: function() {
          if (Pouch.DEBUG) {
            console.log(name + ': Cancel Changes Feed');
          }
          opts.cancelled = true;
          IdbPouch.Changes.removeListener(name, id);
        }
      };
    }

    var descending = opts.descending ? 'prev' : null;
    var last_seq = 0;

    // Ignore the `since` parameter when `descending` is true
    opts.since = opts.since && !descending ? opts.since : 0;

    var results = [], resultIndices = {}, dedupResults = [];
    var txn;

    function fetchChanges() {
      txn = idb.transaction([DOC_STORE, BY_SEQ_STORE]);
      txn.oncomplete = onTxnComplete;

      var req;

      if (descending) {
        req = txn.objectStore(BY_SEQ_STORE)
            .openCursor(window.IDBKeyRange.lowerBound(opts.since, true), descending);
      } else {
        req = txn.objectStore(BY_SEQ_STORE)
            .openCursor(window.IDBKeyRange.lowerBound(opts.since, true));
      }

      req.onsuccess = onsuccess;
      req.onerror = onerror;
    }

    if (opts.filter && typeof opts.filter === 'string') {
      var filterName = opts.filter.split('/');
      api.get('_design/' + filterName[0], function(err, ddoc) {
        /*jshint evil: true */
        var filter = eval('(function() { return ' +
                          ddoc.filters[filterName[1]] + ' })()');
        opts.filter = filter;
        fetchChanges();
      });
    } else {
      fetchChanges();
    }

    function onsuccess(event) {
      if (!event.target.result) {
        // Filter out null results casued by deduping
        for (var i = 0, l = results.length; i < l; i++ ) {
          var result = results[i];
          if (result) {
            dedupResults.push(result);
          }
        }
        return false;
      }

      var cursor = event.target.result;

      // Try to pre-emptively dedup to save us a bunch of idb calls
      var changeId = cursor.value._id;
      var changeIdIndex = resultIndices[changeId];
      if (changeIdIndex !== undefined) {
        results[changeIdIndex].seq = cursor.key;
        // update so it has the later sequence number
        results.push(results[changeIdIndex]);
        results[changeIdIndex] = null;
        resultIndices[changeId] = results.length - 1;
        return cursor['continue']();
      }

      var index = txn.objectStore(DOC_STORE);
      index.get(cursor.value._id).onsuccess = function(event) {
        var metadata = event.target.result;
        if (PouchUtils.isLocalId(metadata.id)) {
          return cursor['continue']();
        }

        if(last_seq < metadata.seq){
          last_seq = metadata.seq;
        }

        var mainRev = PouchMerge.winningRev(metadata);
        var key = metadata.id + "::" + mainRev;
        var index = txn.objectStore(BY_SEQ_STORE).index('_doc_id_rev');
        index.get(key).onsuccess = function(docevent) {
          var doc = docevent.target.result;
          delete doc['_doc_id_rev'];
          var changeList = [{rev: mainRev}];
          if (opts.style === 'all_docs') {
            changeList = PouchMerge.collectLeaves(metadata.rev_tree)
              .map(function(x) { return {rev: x.rev}; });
          }
          var change = {
            id: metadata.id,
            seq: cursor.key,
            changes: changeList,
            doc: doc
          };

          if (PouchUtils.isDeleted(metadata, mainRev)) {
            change.deleted = true;
          }
          if (opts.conflicts) {
            change.doc._conflicts = PouchMerge.collectConflicts(metadata);
          }

          // Dedupe the changes feed
          var changeId = change.id, changeIdIndex = resultIndices[changeId];
          if (changeIdIndex !== undefined) {
            results[changeIdIndex] = null;
          }
          results.push(change);
          resultIndices[changeId] = results.length - 1;
          cursor['continue']();
        };
      };
    }

    function onTxnComplete() {
      PouchUtils.processChanges(opts, dedupResults, last_seq);
    }

    function onerror(error) {
      // TODO: shouldn't we pass some params here?
      PouchUtils.call(opts.complete);
    }
  };

  api._close = function(callback) {
    if (idb === null) {
      return PouchUtils.call(callback, Pouch.Errors.NOT_OPEN);
    }

    // https://developer.mozilla.org/en-US/docs/IndexedDB/IDBDatabase#close
    // "Returns immediately and closes the connection in a separate thread..."
    idb.close();
    PouchUtils.call(callback, null);
  };

  api._getRevisionTree = function(docId, callback) {
    var txn = idb.transaction([DOC_STORE], 'readonly');
    var req = txn.objectStore(DOC_STORE).get(docId);
    req.onsuccess = function (event) {
      var doc = event.target.result;
      if (!doc) {
        PouchUtils.call(callback, Pouch.Errors.MISSING_DOC);
      } else {
        PouchUtils.call(callback, null, doc.rev_tree);
      }
    };
  };

  // This function removes revisions of document docId
  // which are listed in revs and sets this document
  // revision to to rev_tree
  api._doCompaction = function(docId, rev_tree, revs, callback) {
    var txn = idb.transaction([DOC_STORE, BY_SEQ_STORE], 'readwrite');

    var index = txn.objectStore(DOC_STORE);
    index.get(docId).onsuccess = function(event) {
      var metadata = event.target.result;
      metadata.rev_tree = rev_tree;

      var count = revs.length;
      revs.forEach(function(rev) {
        var index = txn.objectStore(BY_SEQ_STORE).index('_doc_id_rev');
        var key = docId + "::" + rev;
        index.getKey(key).onsuccess = function(e) {
          var seq = e.target.result;
          if (!seq) {
            return;
          }
          var req = txn.objectStore(BY_SEQ_STORE)['delete'](seq);

          count--;
          if (!count) {
            txn.objectStore(DOC_STORE).put(metadata);
          }
        };
      });
    };
    txn.oncomplete = function() {
      PouchUtils.call(callback);
    };
  };

  return api;
};

IdbPouch.valid = function idb_valid() {
  return typeof window !== 'undefined' && !!window.indexedDB;
};

IdbPouch.destroy = function idb_destroy(name, opts, callback) {
  if (Pouch.DEBUG) {
    console.log(name + ': Delete Database');
  }
  IdbPouch.Changes.clearListeners(name);

  //Close open request for "name" database to fix ie delay.
  if (Pouch.openReqList[name] && Pouch.openReqList[name].result) {
    Pouch.openReqList[name].result.close();
  }
  var req = window.indexedDB.deleteDatabase(name);

  req.onsuccess = function() {
    //Remove open request from the list.
    if (Pouch.openReqList[name]) {
      Pouch.openReqList[name] = null;
    }
    PouchUtils.call(callback, null);
  };

  req.onerror = idbError(callback);
};

IdbPouch.Changes = new PouchUtils.Changes();

Pouch.adapter('idb', IdbPouch);

/*globals PouchUtils: true, PouchMerge */

'use strict';

var PouchUtils;

if (typeof module !== 'undefined' && module.exports) {
  PouchUtils = require('../pouch.utils.js');
}

function quote(str) {
  return "'" + str + "'";
}

var POUCH_VERSION = 1;
var POUCH_SIZE = 5 * 1024 * 1024;

// The object stores created for each database
// DOC_STORE stores the document meta data, its revision history and state
var DOC_STORE = quote('document-store');
// BY_SEQ_STORE stores a particular version of a document, keyed by its
// sequence id
var BY_SEQ_STORE = quote('by-sequence');
// Where we store attachments
var ATTACH_STORE = quote('attach-store');
var META_STORE = quote('metadata-store');

var unknownError = function(callback) {
  return function(event) {
    PouchUtils.call(callback, {
      status: 500,
      error: event.type,
      reason: event.target
    });
  };
};

var webSqlPouch = function(opts, callback) {

  var api = {};
  var instanceId = null;
  var name = opts.name;

  var db = openDatabase(name, POUCH_VERSION, name, POUCH_SIZE);
  if (!db) {
    return PouchUtils.call(callback, Pouch.Errors.UNKNOWN_ERROR);
  }

  function dbCreated() {
    callback(null, api);
  }

  function setup(){
    db.transaction(function (tx) {
      var meta = 'CREATE TABLE IF NOT EXISTS ' + META_STORE +
        ' (update_seq, dbid)';
      var attach = 'CREATE TABLE IF NOT EXISTS ' + ATTACH_STORE +
        ' (digest, json, body BLOB)';
      var doc = 'CREATE TABLE IF NOT EXISTS ' + DOC_STORE +
        ' (id unique, seq, json, winningseq)';
      var seq = 'CREATE TABLE IF NOT EXISTS ' + BY_SEQ_STORE +
        ' (seq INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, doc_id_rev UNIQUE, json)';

      tx.executeSql(attach);
      tx.executeSql(doc);
      tx.executeSql(seq);
      tx.executeSql(meta);

      var updateseq = 'SELECT update_seq FROM ' + META_STORE;
      tx.executeSql(updateseq, [], function(tx, result) {
        if (!result.rows.length) {
          var initSeq = 'INSERT INTO ' + META_STORE + ' (update_seq) VALUES (?)';
          tx.executeSql(initSeq, [0]);
          return;
        }
      });

      var dbid = 'SELECT dbid FROM ' + META_STORE + ' WHERE dbid IS NOT NULL';
      tx.executeSql(dbid, [], function(tx, result) {
        if (!result.rows.length) {
          var initDb = 'UPDATE ' + META_STORE + ' SET dbid=?';
          instanceId = Pouch.uuid();
          tx.executeSql(initDb, [instanceId]);
          return;
        }
        instanceId = result.rows.item(0).dbid;
      });
    }, unknownError(callback), dbCreated);
  }
  if (PouchUtils.isCordova() && typeof window !== 'undefined') {
    //to wait until custom api is made in pouch.adapters before doing setup
    window.addEventListener(name + '_pouch', function cordova_init() {
      window.removeEventListener(name + '_pouch', cordova_init, false);
      setup();
    }, false);
  } else {
    setup();
  }


  api.type = function() {
    return 'websql';
  };

  api.id = function() {
    return instanceId;
  };

  api._info = function(callback) {
    db.transaction(function(tx) {
      var sql = 'SELECT COUNT(id) AS count FROM ' + DOC_STORE;
      tx.executeSql(sql, [], function(tx, result) {
        var doc_count = result.rows.item(0).count;
        var updateseq = 'SELECT update_seq FROM ' + META_STORE;
        tx.executeSql(updateseq, [], function(tx, result) {
          var update_seq = result.rows.item(0).update_seq;
          callback(null, {
            db_name: name,
            doc_count: doc_count,
            update_seq: update_seq
          });
        });
      });
    });
  };

  api._bulkDocs = function idb_bulkDocs(req, opts, callback) {

    var newEdits = opts.new_edits;
    var userDocs = req.docs;
    var docsWritten = 0;

    // Parse the docs, give them a sequence number for the result
    var docInfos = userDocs.map(function(doc, i) {
      var newDoc = PouchUtils.parseDoc(doc, newEdits);
      newDoc._bulk_seq = i;
      return newDoc;
    });

    var docInfoErrors = docInfos.filter(function(docInfo) {
      return docInfo.error;
    });
    if (docInfoErrors.length) {
      return PouchUtils.call(callback, docInfoErrors[0]);
    }

    var tx;
    var results = [];
    var fetchedDocs = {};

    function sortByBulkSeq(a, b) {
      return a._bulk_seq - b._bulk_seq;
    }

    function complete(event) {
      var aresults = [];
      results.sort(sortByBulkSeq);
      results.forEach(function(result) {
        delete result._bulk_seq;
        if (result.error) {
          aresults.push(result);
          return;
        }
        var metadata = result.metadata;
        var rev = PouchMerge.winningRev(metadata);

        aresults.push({
          ok: true,
          id: metadata.id,
          rev: rev
        });

        if (PouchUtils.isLocalId(metadata.id)) {
          return;
        }

        docsWritten++;

        webSqlPouch.Changes.notify(name);
        webSqlPouch.Changes.notifyLocalWindows(name);
      });

      var updateseq = 'SELECT update_seq FROM ' + META_STORE;
      tx.executeSql(updateseq, [], function(tx, result) {
        var update_seq = result.rows.item(0).update_seq + docsWritten;
        var sql = 'UPDATE ' + META_STORE + ' SET update_seq=?';
        tx.executeSql(sql, [update_seq], function() {
          PouchUtils.call(callback, null, aresults);
        });
      });
    }

    function preprocessAttachment(att, finish) {
      if (att.stub) {
        return finish();
      }
      if (typeof att.data === 'string') {
        try {
          att.data = atob(att.data);
        } catch (e) {
          var err = Pouch.error(Pouch.Errors.BAD_ARG,
                                "Attachments need to be base64 encoded");
          return PouchUtils.call(callback, err);
        }
        att.digest = 'md5-' + PouchUtils.Crypto.MD5(att.data);
        return finish();
      }
      var reader = new FileReader();
      reader.onloadend = function(e) {
        att.data = this.result;
        att.digest = 'md5-' + PouchUtils.Crypto.MD5(this.result);
        finish();
      };
      reader.readAsBinaryString(att.data);
    }

    function preprocessAttachments(callback) {
      if (!docInfos.length) {
        return callback();
      }

      var docv = 0;
      var recv = 0;

      docInfos.forEach(function(docInfo) {
        var attachments = docInfo.data && docInfo.data._attachments ?
          Object.keys(docInfo.data._attachments) : [];

        if (!attachments.length) {
          return done();
        }

        function processedAttachment() {
          recv++;
          if (recv === attachments.length) {
            done();
          }
        }

        for (var key in docInfo.data._attachments) {
          preprocessAttachment(docInfo.data._attachments[key], processedAttachment);
        }
      });

      function done() {
        docv++;
        if (docInfos.length === docv) {
          callback();
        }
      }
    }

    function writeDoc(docInfo, callback, isUpdate) {

      function finish() {
        var data = docInfo.data;
        var sql = 'INSERT INTO ' + BY_SEQ_STORE + ' (doc_id_rev, json) VALUES (?, ?);';
        tx.executeSql(sql, [data._id + "::" + data._rev,
                            JSON.stringify(data)], dataWritten);
      }

      function collectResults(attachmentErr) {
        if (!err) {
          if (attachmentErr) {
            err = attachmentErr;
            PouchUtils.call(callback, err);
          } else if (recv === attachments.length) {
            finish();
          }
        }
      }

      var err = null;
      var recv = 0;

      docInfo.data._id = docInfo.metadata.id;
      docInfo.data._rev = docInfo.metadata.rev;

      if (PouchUtils.isDeleted(docInfo.metadata, docInfo.metadata.rev)) {
        docInfo.data._deleted = true;
      }

      var attachments = docInfo.data._attachments ?
        Object.keys(docInfo.data._attachments) : [];

      function attachmentSaved(err) {
        recv++;
        collectResults(err);
      }

      for (var key in docInfo.data._attachments) {
        if (!docInfo.data._attachments[key].stub) {
          var data = docInfo.data._attachments[key].data;
          delete docInfo.data._attachments[key].data;
          var digest = docInfo.data._attachments[key].digest;
          saveAttachment(docInfo, digest, data, attachmentSaved);
        } else {
          recv++;
          collectResults();
        }
      }

      if (!attachments.length) {
        finish();
      }

      function dataWritten(tx, result) {
        var seq = docInfo.metadata.seq = result.insertId;
        delete docInfo.metadata.rev;

        var mainRev = PouchMerge.winningRev(docInfo.metadata);

        var sql = isUpdate ?
          'UPDATE ' + DOC_STORE + ' SET seq=?, json=?, winningseq=(SELECT seq FROM ' +
          BY_SEQ_STORE + ' WHERE doc_id_rev=?) WHERE id=?' :
          'INSERT INTO ' + DOC_STORE + ' (id, seq, winningseq, json) VALUES (?, ?, ?, ?);';
        var metadataStr = JSON.stringify(docInfo.metadata);
        var key = docInfo.metadata.id + "::" + mainRev;
        var params = isUpdate ?
          [seq, metadataStr, key, docInfo.metadata.id] :
          [docInfo.metadata.id, seq, seq, metadataStr];
        tx.executeSql(sql, params, function(tx, result) {
          results.push(docInfo);
          PouchUtils.call(callback, null);
        });
      }
    }

    function updateDoc(oldDoc, docInfo) {
      var merged = PouchMerge.merge(oldDoc.rev_tree, docInfo.metadata.rev_tree[0], 1000);
      var inConflict = (PouchUtils.isDeleted(oldDoc) &&
                        PouchUtils.isDeleted(docInfo.metadata)) ||
        (!PouchUtils.isDeleted(oldDoc) &&
         newEdits && merged.conflicts !== 'new_leaf');

      if (inConflict) {
        results.push(makeErr(Pouch.Errors.REV_CONFLICT, docInfo._bulk_seq));
        return processDocs();
      }

      docInfo.metadata.rev_tree = merged.tree;
      writeDoc(docInfo, processDocs, true);
    }

    function insertDoc(docInfo) {
      // Cant insert new deleted documents
      if ('was_delete' in opts && PouchUtils.isDeleted(docInfo.metadata)) {
        results.push(Pouch.Errors.MISSING_DOC);
        return processDocs();
      }
      writeDoc(docInfo, processDocs, false);
    }

    function processDocs() {
      if (!docInfos.length) {
        return complete();
      }
      var currentDoc = docInfos.shift();
      var id = currentDoc.metadata.id;
      if (id in fetchedDocs) {
        updateDoc(fetchedDocs[id], currentDoc);
      } else {
        // if we have newEdits=false then we can update the same
        // document twice in a single bulk docs call
        fetchedDocs[id] = currentDoc.metadata;
        insertDoc(currentDoc);
      }
    }

    // Insert sequence number into the error so we can sort later
    function makeErr(err, seq) {
      err._bulk_seq = seq;
      return err;
    }

    function saveAttachment(docInfo, digest, data, callback) {
      var ref = [docInfo.metadata.id, docInfo.metadata.rev].join('@');
      var newAtt = {digest: digest};
      var sql = 'SELECT digest, json FROM ' + ATTACH_STORE + ' WHERE digest=?';
      tx.executeSql(sql, [digest], function(tx, result) {
        if (!result.rows.length) {
          newAtt.refs = {};
          newAtt.refs[ref] = true;
          sql = 'INSERT INTO ' + ATTACH_STORE + '(digest, json, body) VALUES (?, ?, ?)';
          tx.executeSql(sql, [digest, JSON.stringify(newAtt), data], function() {
            PouchUtils.call(callback, null);
          });
        } else {
          newAtt.refs = JSON.parse(result.rows.item(0).json).refs;
          sql = 'UPDATE ' + ATTACH_STORE + ' SET json=?, body=? WHERE digest=?';
          tx.executeSql(sql, [JSON.stringify(newAtt), data, digest], function() {
            PouchUtils.call(callback, null);
          });
        }
      });
    }

    function metadataFetched(tx, results) {
      for (var j=0; j<results.rows.length; j++) {
        var row = results.rows.item(j);
        fetchedDocs[row.id] = JSON.parse(row.json);
      }
      processDocs();
    }

    preprocessAttachments(function() {
      db.transaction(function(txn) {
        tx = txn;
        var ids = '(' + docInfos.map(function(d) {
          return quote(d.metadata.id);
        }).join(',') + ')';
        var sql = 'SELECT * FROM ' + DOC_STORE + ' WHERE id IN ' + ids;
        tx.executeSql(sql, [], metadataFetched);
      }, unknownError(callback));
    });
  };

  api._get = function(id, opts, callback) {
    var doc;
    var metadata;
    var err;
    if (!opts.ctx) {
      db.transaction(function(txn) {
        opts.ctx = txn;
        api._get(id, opts, callback);
      });
      return;
    }
    var tx = opts.ctx;

    function finish() {
      PouchUtils.call(callback, err, {doc: doc, metadata: metadata, ctx: tx});
    }

    var sql = 'SELECT * FROM ' + DOC_STORE + ' WHERE id=?';
    tx.executeSql(sql, [id], function(a, results) {
      if (!results.rows.length) {
        err = Pouch.Errors.MISSING_DOC;
        return finish();
      }
      metadata = JSON.parse(results.rows.item(0).json);
      if (PouchUtils.isDeleted(metadata) && !opts.rev) {
        err = Pouch.error(Pouch.Errors.MISSING_DOC, "deleted");
        return finish();
      }

      var rev = PouchMerge.winningRev(metadata);
      var key = opts.rev ? opts.rev : rev;
      key = metadata.id + '::' + key;
      var sql = 'SELECT * FROM ' + BY_SEQ_STORE + ' WHERE doc_id_rev=?';
      tx.executeSql(sql, [key], function(tx, results) {
        if (!results.rows.length) {
          err = Pouch.Errors.MISSING_DOC;
          return finish();
        }
        doc = JSON.parse(results.rows.item(0).json);

        finish();
      });
    });
  };

  function makeRevs(arr) {
    return arr.map(function(x) { return {rev: x.rev}; });
  }

  api._allDocs = function(opts, callback) {
    var results = [];
    var resultsMap = {};
    var start = 'startkey' in opts ? opts.startkey : false;
    var end = 'endkey' in opts ? opts.endkey : false;
    var descending = 'descending' in opts ? opts.descending : false;
    var sql = 'SELECT ' + DOC_STORE + '.id, ' + BY_SEQ_STORE + '.seq, ' +
      BY_SEQ_STORE + '.json AS data, ' + DOC_STORE + '.json AS metadata FROM ' +
      BY_SEQ_STORE + ' JOIN ' + DOC_STORE + ' ON ' + BY_SEQ_STORE + '.seq = ' +
      DOC_STORE + '.winningseq';

    if ('keys' in opts) {
      sql += ' WHERE ' + DOC_STORE + '.id IN (' + opts.keys.map(function(key){
        return quote(key);
      }).join(',') + ')';
    } else {
      if (start) {
        sql += ' WHERE ' + DOC_STORE + '.id >= "' + start + '"';
      }
      if (end) {
        sql += (start ? ' AND ' : ' WHERE ') + DOC_STORE + '.id <= "' + end + '"';
      }
      sql += ' ORDER BY ' + DOC_STORE + '.id ' + (descending ? 'DESC' : 'ASC');
    }

    db.transaction(function(tx) {
      tx.executeSql(sql, [], function(tx, result) {
        for (var i = 0, l = result.rows.length; i < l; i++ ) {
          var doc = result.rows.item(i);
          var metadata = JSON.parse(doc.metadata);
          var data = JSON.parse(doc.data);
          if (!(PouchUtils.isLocalId(metadata.id))) {
            doc = {
              id: metadata.id,
              key: metadata.id,
              value: {rev: PouchMerge.winningRev(metadata)}
            };
            if (opts.include_docs) {
              doc.doc = data;
              doc.doc._rev = PouchMerge.winningRev(metadata);
              if (opts.conflicts) {
                doc.doc._conflicts = PouchMerge.collectConflicts(metadata);
              }
              for (var att in doc.doc._attachments) {
                doc.doc._attachments[att].stub = true;
              }
            }
            if ('keys' in opts) {
              if (opts.keys.indexOf(metadata.id) > -1) {
                if (PouchUtils.isDeleted(metadata)) {
                  doc.value.deleted = true;
                  doc.doc = null;
                }
                resultsMap[doc.id] = doc;
              }
            } else {
              if(!PouchUtils.isDeleted(metadata)) {
                results.push(doc);
              }
            }
          }
        }
      });
    }, unknownError(callback), function() {
      if ('keys' in opts) {
        opts.keys.forEach(function(key) {
          if (key in resultsMap) {
            results.push(resultsMap[key]);
          } else {
            results.push({"key": key, "error": "not_found"});
          }
        });
        if (opts.descending) {
          results.reverse();
        }
      }
      PouchUtils.call(callback, null, {
        total_rows: results.length,
        offset: opts.skip,
        rows: ('limit' in opts) ? results.slice(opts.skip, opts.limit + opts.skip) :
          (opts.skip > 0) ? results.slice(opts.skip) : results
      });
    });
  };

  api._changes = function idb_changes(opts) {

    if (Pouch.DEBUG) {
      console.log(name + ': Start Changes Feed: continuous=' + opts.continuous);
    }

    if (opts.continuous) {
      var id = name + ':' + Pouch.uuid();
      opts.cancelled = false;
      webSqlPouch.Changes.addListener(name, id, api, opts);
      webSqlPouch.Changes.notify(name);
      return {
        cancel: function() {
          if (Pouch.DEBUG) {
            console.log(name + ': Cancel Changes Feed');
          }
          opts.cancelled = true;
          webSqlPouch.Changes.removeListener(name, id);
        }
      };
    }

    var descending = opts.descending;

    // Ignore the `since` parameter when `descending` is true
    opts.since = opts.since && !descending ? opts.since : 0;

    var results = [];
    var txn;

    function fetchChanges() {
      var sql = 'SELECT ' + DOC_STORE + '.id, ' + BY_SEQ_STORE + '.seq, ' +
        BY_SEQ_STORE + '.json AS data, ' + DOC_STORE + '.json AS metadata FROM ' +
        BY_SEQ_STORE + ' JOIN ' + DOC_STORE + ' ON ' + BY_SEQ_STORE + '.seq = ' +
        DOC_STORE + '.winningseq WHERE ' + DOC_STORE + '.seq > ' + opts.since +
        ' ORDER BY ' + DOC_STORE + '.seq ' + (descending ? 'DESC' : 'ASC');

      db.transaction(function(tx) {
        tx.executeSql(sql, [], function(tx, result) {
          var last_seq = 0;
          for (var i = 0, l = result.rows.length; i < l; i++ ) {
            var res = result.rows.item(i);
            var metadata = JSON.parse(res.metadata);
            if (!PouchUtils.isLocalId(metadata.id)) {
              if (last_seq < res.seq) {
                last_seq = res.seq;
              }
              var doc = JSON.parse(res.data);
              var mainRev = doc._rev;
              var changeList = [{rev: mainRev}];
              if (opts.style === 'all_docs') {
                changeList = makeRevs(PouchMerge.collectLeaves(metadata.rev_tree));
              }
              var change = {
                id: metadata.id,
                seq: res.seq,
                changes: changeList,
                doc: doc
              };
              if (PouchUtils.isDeleted(metadata, mainRev)) {
                change.deleted = true;
              }
              if (opts.conflicts) {
                change.doc._conflicts = PouchMerge.collectConflicts(metadata);
              }
              results.push(change);
            }
          }
          PouchUtils.processChanges(opts, results, last_seq);
        });
      });
    }

    if (opts.filter && typeof opts.filter === 'string') {
      var filterName = opts.filter.split('/');
      api.get('_design/' + filterName[0], function(err, ddoc) {
        /*jshint evil: true */
        var filter = eval('(function() { return ' +
                          ddoc.filters[filterName[1]] + ' })()');
        opts.filter = filter;
        fetchChanges();
      });
    } else {
      fetchChanges();
    }
  };

  api._close = function(callback) {
    //WebSQL databases do not need to be closed
    PouchUtils.call(callback, null);
  };

  api._getAttachment = function(attachment, opts, callback) {
    var res;
    var tx = opts.ctx;
    var digest = attachment.digest;
    var type = attachment.content_type;
    var sql = 'SELECT body FROM ' + ATTACH_STORE + ' WHERE digest=?';
    tx.executeSql(sql, [digest], function(tx, result) {
      var data = result.rows.item(0).body;
      if (opts.encode) {
        res = btoa(data);
      } else {
        res = PouchUtils.createBlob([data], {type: type});
      }
      PouchUtils.call(callback, null, res);
    });
  };

  api._getRevisionTree = function(docId, callback) {
    db.transaction(function (tx) {
      var sql = 'SELECT json AS metadata FROM ' + DOC_STORE + ' WHERE id = ?';
      tx.executeSql(sql, [docId], function(tx, result) {
        if (!result.rows.length) {
          PouchUtils.call(callback, Pouch.Errors.MISSING_DOC);
        } else {
          var data = JSON.parse(result.rows.item(0).metadata);
          PouchUtils.call(callback, null, data.rev_tree);
        }
      });
    });
  };

  api._doCompaction = function(docId, rev_tree, revs, callback) {
    db.transaction(function (tx) {
      var sql = 'SELECT json AS metadata FROM ' + DOC_STORE + ' WHERE id = ?';
      tx.executeSql(sql, [docId], function(tx, result) {
        if (!result.rows.length) {
          return PouchUtils.call(callback);
        }
        var metadata = JSON.parse(result.rows.item(0).metadata);
        metadata.rev_tree = rev_tree;

        var sql = 'DELETE FROM ' + BY_SEQ_STORE + ' WHERE doc_id_rev IN (' +
          revs.map(function(rev){return quote(docId + '::' + rev);}).join(',') + ')';

        tx.executeSql(sql, [], function(tx, result) {
          var sql = 'UPDATE ' + DOC_STORE + ' SET json = ? WHERE id = ?';

          tx.executeSql(sql, [JSON.stringify(metadata), docId], function(tx, result) {
            callback();
          });
        });
      });
    });
  };

  return api;
};

webSqlPouch.valid = function() {
  return typeof window !== 'undefined' && !!window.openDatabase;
};

webSqlPouch.destroy = function(name, opts, callback) {
  var db = openDatabase(name, POUCH_VERSION, name, POUCH_SIZE);
  db.transaction(function (tx) {
    tx.executeSql('DROP TABLE IF EXISTS ' + DOC_STORE, []);
    tx.executeSql('DROP TABLE IF EXISTS ' + BY_SEQ_STORE, []);
    tx.executeSql('DROP TABLE IF EXISTS ' + ATTACH_STORE, []);
    tx.executeSql('DROP TABLE IF EXISTS ' + META_STORE, []);
  }, unknownError(callback), function() {
    PouchUtils.call(callback, null);
  });
};

webSqlPouch.Changes = new PouchUtils.Changes();

Pouch.adapter('websql', webSqlPouch);

/*global Pouch: true, pouchCollate: true */

"use strict";

var pouchCollate;
if (typeof module !== 'undefined' && module.exports) {
  pouchCollate = require('../pouch.collate.js');
}

// This is the first implementation of a basic plugin, we register the
// plugin object with pouch and it is mixin'd to each database created
// (regardless of adapter), adapters can override plugins by providing
// their own implementation. functions on the plugin object that start
// with _ are reserved function that are called by pouchdb for special
// notifications.

// If we wanted to store incremental views we can do it here by listening
// to the changes feed (keeping track of our last update_seq between page loads)
// and storing the result of the map function (possibly using the upcoming
// extracted adapter functions)

var MapReduce = function(db) {

  function viewQuery(fun, options) {
    if (!options.complete) {
      return;
    }

    if (!options.skip) {
      options.skip = 0;
    }

    if (!fun.reduce) {
      options.reduce = false;
    }

    function sum(values) {
      return values.reduce(function(a, b) { return a + b; }, 0);
    }

    var builtInReduce = {
      "_sum": function(keys, values){
        return sum(values);
      },

      "_count": function(keys, values, rereduce){
        if (rereduce){
          return sum(values);
        } else {
          return values.length;
        }
      },

      "_stats": function(keys, values, rereduce) {
        return {
          'sum': sum(values),
          'min': Math.min.apply(null, values),
          'max': Math.max.apply(null, values),
          'count': values.length,
          'sumsqr': (function(){
            var _sumsqr = 0;
            for(var idx in values) {
              if (typeof values[idx] === 'number') {
              _sumsqr += values[idx] * values[idx];
              }
            }
            return _sumsqr;
          })()
        };
      }
    };

    var results = [];
    var current = null;
    var num_started= 0;
    var completed= false;

    var emit = function(key, val) {
      var viewRow = {
        id: current.doc._id,
        key: key,
        value: val
      };

      if (options.startkey && pouchCollate(key, options.startkey) < 0) return;
      if (options.endkey && pouchCollate(key, options.endkey) > 0) return;
      if (options.key && pouchCollate(key, options.key) !== 0) return;

      num_started++;
      if (options.include_docs) {
        //in this special case, join on _id (issue #106)
        if (val && typeof val === 'object' && val._id){
          db.get(val._id,
              function(_, joined_doc){
                if (joined_doc) {
                  viewRow.doc = joined_doc;
                }
                results.push(viewRow);
                checkComplete();
              });
          return;
        } else {
          viewRow.doc = current.doc;
        }
      }
      results.push(viewRow);
    };

    // ugly way to make sure references to 'emit' in map/reduce bind to the
    // above emit
    eval('fun.map = ' + fun.map.toString() + ';');
    if (fun.reduce) {
      if (builtInReduce[fun.reduce]) {
        fun.reduce = builtInReduce[fun.reduce];
      }

      eval('fun.reduce = ' + fun.reduce.toString() + ';');
    }

    //only proceed once all documents are mapped and joined
    var checkComplete= function(){
      if (completed && results.length == num_started){
        results.sort(function(a, b) {
          return pouchCollate(a.key, b.key);
        });
        if (options.descending) {
          results.reverse();
        }
        if (options.reduce === false) {
          return options.complete(null, {
            total_rows: results.length,
            offset: options.skip,
            rows: ('limit' in options) ? results.slice(options.skip, options.limit + options.skip) :
              (options.skip > 0) ? results.slice(options.skip) : results
          });
        }

        var groups = [];
        results.forEach(function(e) {
          var last = groups[groups.length-1] || null;
          if (last && pouchCollate(last.key[0][0], e.key) === 0) {
            last.key.push([e.key, e.id]);
            last.value.push(e.value);
            return;
          }
          groups.push({key: [[e.key, e.id]], value: [e.value]});
        });
        groups.forEach(function(e) {
          e.value = fun.reduce(e.key, e.value);
          e.value = (typeof e.value === 'undefined') ? null : e.value;
          e.key = e.key[0][0];
        });

        options.complete(null, {
          total_rows: groups.length,
          offset: options.skip,
          rows: ('limit' in options) ? groups.slice(options.skip, options.limit + options.skip) :
            (options.skip > 0) ? groups.slice(options.skip) : groups
        });
      }
    };

    db.changes({
      conflicts: true,
      include_docs: true,
      onChange: function(doc) {
        if (!('deleted' in doc)) {
          current = {doc: doc.doc};
          fun.map.call(this, doc.doc);
        }
      },
      complete: function() {
        completed= true;
        checkComplete();
      }
    });
  }

  function httpQuery(fun, opts, callback) {

    // List of parameters to add to the PUT request
    var params = [];
    var body = undefined;
    var method = 'GET';

    // If opts.reduce exists and is defined, then add it to the list
    // of parameters.
    // If reduce=false then the results are that of only the map function
    // not the final result of map and reduce.
    if (typeof opts.reduce !== 'undefined') {
      params.push('reduce=' + opts.reduce);
    }
    if (typeof opts.include_docs !== 'undefined') {
      params.push('include_docs=' + opts.include_docs);
    }
    if (typeof opts.limit !== 'undefined') {
      params.push('limit=' + opts.limit);
    }
    if (typeof opts.descending !== 'undefined') {
      params.push('descending=' + opts.descending);
    }
    if (typeof opts.startkey !== 'undefined') {
      params.push('startkey=' + encodeURIComponent(JSON.stringify(opts.startkey)));
    }
    if (typeof opts.endkey !== 'undefined') {
      params.push('endkey=' + encodeURIComponent(JSON.stringify(opts.endkey)));
    }
    if (typeof opts.key !== 'undefined') {
      params.push('key=' + encodeURIComponent(JSON.stringify(opts.key)));
    }
    if (typeof opts.group !== 'undefined') {
      params.push('group=' + opts.group);
    }
    if (typeof opts.group_level !== 'undefined') {
      params.push('group_level=' + opts.group_level);
    }
    if (typeof opts.skip !== 'undefined') {
      params.push('skip=' + opts.skip);
    }

    // If keys are supplied, issue a POST request to circumvent GET query string limits
    // see http://wiki.apache.org/couchdb/HTTP_view_API#Querying_Options
    if (typeof opts.keys !== 'undefined') {
      method = 'POST';
      body = JSON.stringify({keys:opts.keys});
    }

    // Format the list of parameters into a valid URI query string
    params = params.join('&');
    params = params === '' ? '' : '?' + params;

    // We are referencing a query defined in the design doc
    if (typeof fun === 'string') {
      var parts = fun.split('/');
      db.request({
        method: method,
        url: '_design/' + parts[0] + '/_view/' + parts[1] + params,
        body: body
      }, callback);
      return;
    }

    // We are using a temporary view, terrible for performance but good for testing
    var queryObject = JSON.parse(JSON.stringify(fun, function(key, val) {
      if (typeof val === 'function') {
        return val + ''; // implicitly `toString` it
      }
      return val;
    }));

    db.request({
      method:'POST',
      url: '_temp_view' + params,
      body: queryObject
    }, callback);
  }

  function query(fun, opts, callback) {
    if (typeof opts === 'function') {
      callback = opts;
      opts = {};
    }

    if (callback) {
      opts.complete = callback;
    }

    if (db.type() === 'http') {
	  if (typeof fun === 'function'){
	    return httpQuery({map: fun}, opts, callback);
	  }
	  return httpQuery(fun, opts, callback);
    }

    if (typeof fun === 'object') {
      return viewQuery(fun, opts);
    }

    if (typeof fun === 'function') {
      return viewQuery({map: fun}, opts);
    }

    var parts = fun.split('/');
    db.get('_design/' + parts[0], function(err, doc) {
      if (err) {
        if (callback) callback(err);
        return;
      }

      if (!doc.views[parts[1]]) {
        if (callback) callback({ error: 'not_found', reason: 'missing_named_view' });
        return;
      }

      viewQuery({
        map: doc.views[parts[1]].map,
        reduce: doc.views[parts[1]].reduce
      }, opts);
    });
  }

  return {'query': query};
};

// Deletion is a noop since we dont store the results of the view
MapReduce._delete = function() { };

Pouch.plugin('mapreduce', MapReduce);

 })(this);;
