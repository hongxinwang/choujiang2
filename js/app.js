function Lottery() {
    var state = {
        timer: null,
        animating: false,
        canIrequest: true
    }
    var jqPrize = $('.run');
    function run(jq, end, prize) {
        var now = 1;
        var j = 0;
        var time = 200;

        var loop = function() {

            state.animating = true;
            state.timer = setTimeout(animate, time);
            state.canIrequest=false;
            function animate() {
                jq.removeClass('luck' + now);
                now++;
                if (now == 11) {
                    j++;
                    now = 1;
                }
                if (j <= 5) {
                    // time -= 3;
                } else {
                    time += 40;
                }
                if (j == 6 && now == end) {
                    jq.addClass('luck' + now);
                    j = 0;
                    state.animating = false;
                    jqPrize.html(prize);
                    setTimeout(function() {
                        state.canIrequest = true;
                        jqPrize.html('立即抽奖');
                    }, 4000);

                } else {
                    jq.addClass('luck' + now);
                    loop();
                }
            }
        };
        (!state.animating) && loop();
        return state;
    }
    return {
        run:run,
        state:state
    }
}

function bindEvent() {
    var lottery = new Lottery;
    $('.run').on('click', function() {
        if (!lottery.state.animating&&!lottery.state.canIrequest) {
            alert('抽奖冷却时间为一分钟，请等待一下。');
            return;
        }
        var id = parseInt(10 * Math.random() + 1);
        lottery.run($('.mask'), id, '吃饭啦');
    });
}

function main() {
    bindEvent();
}

main();
