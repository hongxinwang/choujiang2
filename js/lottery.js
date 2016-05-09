var lottery={
	_numbers:null,
	_numberNodes:null,
	setInitialNumbers:function(numbers){
		lottery._numbers=numbers;
		return lottery;
	},
	setNumberNodes:function(nodes){
		lottery._numberNodes=nodes;
		return lottery;
	},
	getRandom:function(start,end){
		return _.partial(_.random,start,end);
	},
	getNewNumbers:_y.lift(
		function(numbers){
			if(numbers[0]<0){
				return _y.map(numbers,function(number){
					return lottery.getRandom(0,9)();
				})
			}else{
				return numbers;
			}
			
		}
	),
	hideNumbers:_y.lift(
		function(numbers){
			_y.each(numbers,function(number,index,numbers){
				lottery._numberNodes.eq(index).removeClass('n'+lottery._numbers[index]);
			})
		},
		function(numbers){
			return numbers
		}
	),
	checkNumbers:_y.lift(
		function(numbers){
			return _y.map(numbers,function(number,index,numbers){
				number=parseInt(number);
				number=number!=number?0:number;
				return _y.isNumber(number)&&number<=9&&number>=0?number:0
			})
		}
	),
	showNumbers:_y.lift(
		function(numbers){
			_y.each(numbers,function(number,index,numbers){
				lottery._numberNodes.eq(index).addClass('n'+number);
			})
			return numbers;
		}
	)
};
lottery.run=_y.
		actions
		(
			lottery.hideNumbers,
			lottery.getNewNumbers,
			lottery.checkNumbers,
			lottery.showNumbers
		).
		done
		(
			function(values,state){
				lottery._numbers=state;
			}
		);