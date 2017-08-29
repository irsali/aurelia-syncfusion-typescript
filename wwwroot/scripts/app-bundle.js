define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
        }
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1lBQ0UsWUFBTyxHQUFHLGNBQWMsQ0FBQztRQUMzQixDQUFDO1FBQUQsVUFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFwcCB7XG4gIG1lc3NhZ2UgPSAnSGVsbG8gV29ybGQhJztcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('chart',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Chart = (function () {
        function Chart() {
            this.EfficiencyList = [{ 'Year': '2005', 'yName': 28, 'yName1': 31, 'yName2': 36, 'yName3': 39 }, { 'Year': '2006', 'yName': 25, 'yName1': 28, 'yName2': 32, 'yName3': 36 }, { 'Year': '2007', 'yName': 26, 'yName1': 30, 'yName2': 34, 'yName3': 40 }, { 'Year': '2008', 'yName': 27, 'yName1': 36, 'yName2': 41, 'yName3': 44 }, { 'Year': '2009', 'yName': 32, 'yName1': 36, 'yName2': 42, 'yName3': 45 }, { 'Year': '2010', 'yName': 35, 'yName1': 39, 'yName2': 42, 'yName3': 48 }, { 'Year': '2011', 'yName': 30, 'yName1': 37, 'yName2': 43, 'yName3': 46 }];
            this.commonSeries = { type: 'line', enableAnimation: true, tooltip: { visible: true }, marker: { shape: 'circle', size: { height: 10, width: 10 }, visible: true }, border: { width: 2 } };
            this.size = { width: '900px', height: '550px' };
            this.title = { text: 'Efficiency of oil-fired power production' };
            this.primaryXAxis = {};
            this.primaryYAxis = { labelFormat: '{value}%', range: { min: 25, max: 50, interval: 5 } };
        }
        Chart.prototype.onchartload = function (sender) {
        };
        return Chart;
    }());
    exports.Chart = Chart;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUVBO1FBNENJO1lBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNwaUIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDM0wsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxJQUFJLEVBQUUsMENBQTBDLEVBQUUsQ0FBQztZQUNsRSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDOUYsQ0FBQztRQUNELDJCQUFXLEdBQVgsVUFBWSxNQUFNO1FBRWxCLENBQUM7UUFDTCxZQUFDO0lBQUQsQ0F2REEsQUF1REMsSUFBQTtJQXZEWSxzQkFBSyIsImZpbGUiOiJjaGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHtlakNoYXJ0fSBmcm9tICdhdXJlbGlhLXN5bmNmdXNpb24tYnJpZGdlJztcblxuZXhwb3J0IGNsYXNzIENoYXJ0IHtcbiAgICBwcmltYXJ5WUF4aXM6IHtcclxuICAgICAgICBsYWJlbEZvcm1hdDogc3RyaW5nO1xyXG4gICAgICAgIHJhbmdlOiB7XHJcbiAgICAgICAgICAgIG1pbjogbnVtYmVyO1xyXG4gICAgICAgICAgICBtYXg6IG51bWJlcjtcclxuICAgICAgICAgICAgaW50ZXJ2YWw6IG51bWJlcjtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIHByaW1hcnlYQXhpczoge1xyXG4gICAgfTtcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgICAgdGV4dDogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIHNpemU6IHtcclxuICAgICAgICB3aWR0aDogc3RyaW5nO1xyXG4gICAgICAgIGhlaWdodDogc3RyaW5nO1xyXG4gICAgfTtcclxuICAgIGNvbW1vblNlcmllczoge1xyXG4gICAgICAgIHR5cGU6IHN0cmluZztcclxuICAgICAgICBlbmFibGVBbmltYXRpb246IGJvb2xlYW47XHJcbiAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICB2aXNpYmxlOiBib29sZWFuO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWFya2VyOiB7XHJcbiAgICAgICAgICAgIHNoYXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIHNpemU6IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IG51bWJlcjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmlzaWJsZTogYm9vbGVhbjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJvcmRlcjoge1xyXG4gICAgICAgICAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgRWZmaWNpZW5jeUxpc3Q6IHtcclxuICAgICAgICAnWWVhcic6IHN0cmluZztcclxuICAgICAgICAneU5hbWUnOiBudW1iZXI7XHJcbiAgICAgICAgJ3lOYW1lMSc6IG51bWJlcjtcclxuICAgICAgICAneU5hbWUyJzogbnVtYmVyO1xyXG4gICAgICAgICd5TmFtZTMnOiBudW1iZXI7XHJcbiAgICB9W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5FZmZpY2llbmN5TGlzdCA9IFt7ICdZZWFyJzogJzIwMDUnLCAneU5hbWUnOiAyOCwgJ3lOYW1lMSc6IDMxLCAneU5hbWUyJzogMzYsICd5TmFtZTMnOiAzOSB9LCB7ICdZZWFyJzogJzIwMDYnLCAneU5hbWUnOiAyNSwgJ3lOYW1lMSc6IDI4LCAneU5hbWUyJzogMzIsICd5TmFtZTMnOiAzNiB9LCB7ICdZZWFyJzogJzIwMDcnLCAneU5hbWUnOiAyNiwgJ3lOYW1lMSc6IDMwLCAneU5hbWUyJzogMzQsICd5TmFtZTMnOiA0MCB9LCB7ICdZZWFyJzogJzIwMDgnLCAneU5hbWUnOiAyNywgJ3lOYW1lMSc6IDM2LCAneU5hbWUyJzogNDEsICd5TmFtZTMnOiA0NCB9LCB7ICdZZWFyJzogJzIwMDknLCAneU5hbWUnOiAzMiwgJ3lOYW1lMSc6IDM2LCAneU5hbWUyJzogNDIsICd5TmFtZTMnOiA0NSB9LCB7ICdZZWFyJzogJzIwMTAnLCAneU5hbWUnOiAzNSwgJ3lOYW1lMSc6IDM5LCAneU5hbWUyJzogNDIsICd5TmFtZTMnOiA0OCB9LCB7ICdZZWFyJzogJzIwMTEnLCAneU5hbWUnOiAzMCwgJ3lOYW1lMSc6IDM3LCAneU5hbWUyJzogNDMsICd5TmFtZTMnOiA0NiB9XTtcclxuICAgICAgICB0aGlzLmNvbW1vblNlcmllcyA9IHsgdHlwZTogJ2xpbmUnLCBlbmFibGVBbmltYXRpb246IHRydWUsIHRvb2x0aXA6IHsgdmlzaWJsZTogdHJ1ZSB9LCBtYXJrZXI6IHsgc2hhcGU6ICdjaXJjbGUnLCBzaXplOiB7IGhlaWdodDogMTAsIHdpZHRoOiAxMCB9LCB2aXNpYmxlOiB0cnVlIH0sIGJvcmRlcjogeyB3aWR0aDogMiB9IH07XHJcbiAgICAgICAgdGhpcy5zaXplID0geyB3aWR0aDogJzkwMHB4JywgaGVpZ2h0OiAnNTUwcHgnIH07XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHsgdGV4dDogJ0VmZmljaWVuY3kgb2Ygb2lsLWZpcmVkIHBvd2VyIHByb2R1Y3Rpb24nIH07XHJcbiAgICAgICAgdGhpcy5wcmltYXJ5WEF4aXMgPSB7fTtcclxuICAgICAgICB0aGlzLnByaW1hcnlZQXhpcyA9IHsgbGFiZWxGb3JtYXQ6ICd7dmFsdWV9JScsIHJhbmdlOiB7IG1pbjogMjUsIG1heDogNTAsIGludGVydmFsOiA1IH0gfTtcclxuICAgIH1cclxuICAgIG9uY2hhcnRsb2FkKHNlbmRlcikge1xyXG5cclxuICAgIH1cclxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources')
            .plugin('aurelia-syncfusion-bridge', function (plugin) { return plugin.useAll(); })
            .plugin('aurelia-resize');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDckIsT0FBTyxDQUFDLFdBQVcsQ0FBQzthQUNwQixNQUFNLENBQUMsMkJBQTJCLEVBQUUsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQzlELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTlCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBaEJELDhCQWdCQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXJlbGlhfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yaydcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhOiBBdXJlbGlhKSB7XG4gIGF1cmVsaWEudXNlXG4gICAgLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpXG4gICAgICAuZmVhdHVyZSgncmVzb3VyY2VzJylcbiAgICAgIC5wbHVnaW4oJ2F1cmVsaWEtc3luY2Z1c2lvbi1icmlkZ2UnLCBwbHVnaW4gPT4gcGx1Z2luLnVzZUFsbCgpKVxuICAgICAgLnBsdWdpbignYXVyZWxpYS1yZXNpemUnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('widget',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Widget = (function () {
        function Widget() {
        }
        Widget.prototype.resize = function (data) {
            this.elmt.width = data.width;
            this.elmt.height = data.height;
        };
        Widget = __decorate([
            aurelia_framework_1.customElement("widget"),
            __metadata("design:paramtypes", [])
        ], Widget);
        return Widget;
    }());
    exports.Widget = Widget;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFHQTtRQUVJO1FBQ0EsQ0FBQztRQUlELHVCQUFNLEdBQU4sVUFBTyxJQUFJO1lBQ1AsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ25DLENBQUM7UUFWUSxNQUFNO1lBRGxCLGlDQUFhLENBQUMsUUFBUSxDQUFDOztXQUNYLE1BQU0sQ0FXbEI7UUFBRCxhQUFDO0tBWEQsQUFXQyxJQUFBO0lBWFksd0JBQU0iLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUVsZW1lbnQoXCJ3aWRnZXRcIilcbmV4cG9ydCBjbGFzcyBXaWRnZXQge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIGVsbXQ6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cbiAgICByZXNpemUoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuZWxtdC53aWR0aCA9IGRhdGEud2lkdGg7XHJcbiAgICAgICAgdGhpcy5lbG10LmhlaWdodCA9IGRhdGEuaGVpZ2h0O1xyXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('app.html!text', ['module'], function(module) { module.exports = "<template>\n\n  <require from=\"./chart\"></require>\r\n  <!--<require from=\"./widget\" ></require>-->\n\n  <h1>${message}</h1>\n\n  <chart></chart>\n  <!--<widget></widget>-->\n</template>\n"; });
define('widget.css!text', ['module'], function(module) { module.exports = "widget div {\n  padding: 0;\n  margin: 0;\n  display: block; }\n\nwidget canvas {\n  padding: 0;\n  margin: 0;\n  display: block; }\n"; });
define('chart.html!text', ['module'], function(module) { module.exports = "<template>\r\n  <div>\r\n    <ej-chart id=\"container\" e-on-load.trigger=\"onchartload($event)\" e-legend-visible=true e-size.bind=\"size\" e-title.bind=\"title\" e-primary-x-axis.bind=\"primaryXAxis\"\r\n              e-primary-y-axis.bind=\"primaryYAxis\" e-common-series-options.bind=\"commonSeries\">\r\n      <ej-series e-data-source.bind=\"EfficiencyList\" e-x-name=\"Year\" e-y-name=\"yName\" e-name=\"India\">\r\n      </ej-series>\r\n      <ej-series e-data-source.bind=\"EfficiencyList\" e-x-name=\"Year\" e-y-name=\"yName1\" e-name=\"Germany\">\r\n      </ej-series>\r\n      <ej-series e-data-source.bind=\"EfficiencyList\" e-x-name=\"Year\" e-y-name=\"yName2\" e-name=\"England\">\r\n      </ej-series>\r\n      <ej-series e-data-source.bind=\"EfficiencyList\" e-x-name=\"Year\" e-y-name=\"yName3\" e-name=\"France\">\r\n      </ej-series>\r\n    </ej-chart>\r\n  </div>\r\n</template>\r\n"; });
define('widget.html!text', ['module'], function(module) { module.exports = "<template>\r\n\r\n  <require from=\"./widget.css\"></require>\n\r\n  <div id=\"host\" resizeable resize.trigger=\"resize($event.detail) & throttle:500\">\r\n    <canvas ref=elmt></canvas>\r\n  </div>\r\n  <h2>width: ${elmt.width}</h2>\r\n  <h2>height: ${elmt.height}</h2>\r\n</template>\r\n"; });
//# sourceMappingURL=app-bundle.js.map