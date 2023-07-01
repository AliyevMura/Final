/*!
 * Author:  Mark Allan B. Meriales
 * Name:    Mark Your Calendar v0.0.1
 * License: MIT License
 */ !function(e){Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t},e.fn.markyourcalendar=function(t){var a,s={availability:[[],[],[],[],[],[],[]],isMultiple:!1,months:["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],prevHtml:`
            <div id="myc-prev-week">
                <
            </div>
        `,nextHtml:'<div id="myc-next-week">></div>',selectedDates:[],startDate:new Date,weekdays:["sun","mon","tue","wed","thurs","fri","sat"]},d=e.extend({},s,t),n=d.onClick,c=d.onClickNavigator,l=this;this.getMonthName=function(e){return d.months[e]};var r=function(e){var t=""+e.getDate(),a=""+(e.getMonth()+1),s=e.getFullYear();return t.length<2&&(t="0"+t),a.length<2&&(a="0"+a),s+"-"+a+"-"+t};this.getNavControl=function(){var e='<div id="myc-prev-week-container">'+d.prevHtml+"</div>",t='<div id="myc-prev-week-container">'+d.nextHtml+"</div>";return`
                <div id="myc-nav-container">
                    `+e+`
                    `+(`
                <div id="myc-current-month-year-container">
                    `+this.getMonthName(d.startDate.getMonth())+" "+d.startDate.getFullYear())+`
                </div>
            `+`
                    `+t+`
                    <div style="clear:both;"></div>
                </div>
            `},this.getDatesHeader=function(){var e="";for(i=0;i<7;i++){var t=d.startDate.addDays(i);e+=`
                    <div class="myc-date-header" id="myc-date-header-`+i+`">
                        <div class="myc-date-number">`+t.getDate()+`</div>
                        <div class="myc-date-display">`+d.weekdays[t.getDay()]+`</div>
                    </div>
                `}return'<div id="myc-dates-container">'+e+"</div>"},this.getAvailableTimes=function(){var t="";for(i=0;i<7;i++){var a="";e.each(d.availability[i],function(){a+=`
                        <a href="javascript:;" class="myc-available-time" data-time="`+this+'" data-date="'+r(d.startDate.addDays(i))+`">
                            `+this+`
                        </a>
                    `}),t+=`
                    <div class="myc-day-time-container" id="myc-day-time-container-`+i+`">
                        `+a+`
                        <div style="clear:both;"></div>
                    </div>
                `}return t},this.setAvailability=function(e){d.availability=e,v()},this.clearAvailability=function(){d.availability=[[],[],[],[],[],[],[]]},this.on("click","#myc-prev-week",function(){d.startDate=d.startDate.addDays(-7),l.clearAvailability(),v(l),e.isFunction(c)&&c.call(this,...arguments,l)}),this.on("click","#myc-next-week",function(){d.startDate=d.startDate.addDays(7),l.clearAvailability(),v(l),e.isFunction(c)&&c.call(this,...arguments,l)}),this.on("click",".myc-available-time",function(){var t=e(this).data("date"),a=e(this).data("time"),s=t+" "+a;if(e(this).hasClass("selected")){e(this).removeClass("selected");var c=d.selectedDates.indexOf(s);-1!==c&&d.selectedDates.splice(c,1)}else d.isMultiple?(e(this).addClass("selected"),d.selectedDates.push(s)):(d.selectedDates.pop(),d.selectedDates.length||(e(".myc-available-time").removeClass("selected"),e(this).addClass("selected"),d.selectedDates.push(s)));e.isFunction(n)&&n.call(this,...arguments,d.selectedDates)});var v=function(){ret=`
                <div id="myc-container">
                    <div id="myc-nav-container">`+l.getNavControl()+`</div>
                    <div id="myc-week-container">
                        <div id="myc-dates-container">`+l.getDatesHeader()+`</div>
                        <div id="myc-available-time-container">`+l.getAvailableTimes()+`</div>
                    </div>
                </div>
            `,l.html(ret)};v()}}(jQuery);