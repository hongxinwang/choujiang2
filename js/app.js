// var app = {
//     _animated: false,
//     _timer: null,
//     _index:0,
//     init: function() {
//         lottery.setInitialNumbers([0, 0, 0]).setNumberNodes($('.number div'));
//         this.getUrl();    
//     },
//     getProgress:function(){
//         var progress=parseInt(localStorage.getItem(this._activityid+'-'+this._roundid));
//         if(progress!=progress)progress=0;
//         return progress?progress:0;

//     },
//     initProgress:function(){
//         var progress=this.getProgress();
//         if(progress==-1){
//             this.disabled();
//         }else{
//             this.enabled();
//         }
//         return this._index=progress;
//     },
//     setLogo:function(){
//         $('.title span').html("一猫买车帮");
//     },
//     setProgress:function(){
//         ++this._index;
//         if(this._index>=this._numbers.length){
//             localStorage.setItem(this._activityid+'-'+this._roundid,'-1');
//             this.disabled();
//         }else{
//             localStorage.setItem(this._activityid+'-'+this._roundid,this._index);
//         }
//     },
//     beginEffect:function(){
//         $('.number div').addClass('animated');
//     },
//     removeEffect:function(){
//         $('.number div').removeClass('animated');
//     },
//     getUrl: function() {
//         http.getUrl().
//         done(_y.bind(this.done, this)).
//         done(_y.bind(this.getProgress,this)).
//         done(_y.bind(this.initProgress,this)).
//         done(_y.bind(this.setLogo,this)).
//         // done(_y.bind(this.beginEffect,this)).
//         fail(_y.bind(this.fail, this));
//     },
//     postUrl:function(){
//         http.postUrl();
//     },
//     done: function win(source) {
//         if (source.status != 1) {
//             this.error(source.msg);
//             return;
//         }
//         this.success(source);
//     },
//     fail: function() {
//         alert('请求后台数据，请求失败了，请检查您的网络是否通畅！')
//     },
//     getRealNumbers:function(data){
//      return _y.map(data,function(number,index,numbers){
//          if(number<10){
//              return [0,0,number];
//          }
//          if(number>=10&&number<100){
//              number=number+'';
//              return [0,number.charAt(0),number.charAt(1)];
//          }
//          if(number>=100){
//              number=number+'';
//              return [number.charAt(0),number.charAt(1),number.charAt(2)];
//          }
//      })
//     },
//     success:function(source){
//      this._numbers=this.getRealNumbers(source.data.number);
//         this._activityid=config.activetyid;
//         this._roundid=source.data.roundid;
//         this._logo=source.data.logo;
//         config.roundid=source.data.roundid;
//     },
//     disabled:function(){
//         $('.button').addClass('disabled').removeClass('enabled').off('click');

//     },
//     enabled:function(){
//         $('.button').addClass('enabled').removeClass('disabled').
//             on('click', _y.bind(this.lottery, this));

//     },
//     lottery: function() {
//         var that = this;
//         if (this._animated) return;
//         this._animated = true;
//         clearInterval(this._timer);
//         if(that._index>=that._numbers.length||that._index==-1){
//             that.postUrl();
//             that.setProgress();
//             return;
//         }
//         var count = 0;
//         this._timer = setInterval(function() {
//             if (count <= 66) {
//                 lottery.run([-1,-1,-1]);

//                 ++count;
//                 return;
//             }
//             lottery.run(that._numbers[that._index])
//             that.setProgress();
//             if(that._index>=that._numbers.length||that._index==-1){
//                 that.postUrl();
//                 that.setProgress();
//             }

//             clearInterval(that._timer);
//             $('.machine .number').addClass('f-hide');
//             that.beginEffect();
//             setTimeout(function() {
//                 setTimeout(function() {
//                     that._animated = false;
//                 }, 1000);
//                 $('.machine .number').removeClass('f-hide');
//                 setTimeout(function(){
//                     that.removeEffect();
//                 },2000);
//             }, 30);
//         }, 30);
//         return 'game over!'
//     },
//     error: function(error) {
//         alert(error);
//     }
// };


// app.
// init
// ();
var timer;
var animating=false;
$('.run').on('click', function() {
    lottery($('.mask'), 5);
});

function lottery(jq,end) {
    var now = 1;
    var j = 0;
    var time=200;

    var loop = function() {

        animating=true;
        timer=setTimeout(animate, time);
        function animate() {
            jq.removeClass('luck' + now);
            now++;
            if (now == 11) {
                j++;
                now = 1;
            }
            if(j<=4){
                time-=3;
            }else{
                time+=20;
            }
            if (j==6&&now==end) {
                jq.addClass('luck' + now);
                j=0;
                animating=false;
                
            }else{
                jq.addClass('luck' + now);
                loop();
            }
            console.log(time)
        }
    };
    (!animating)&&loop();
}
