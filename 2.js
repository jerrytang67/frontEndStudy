
this.obj = {
    x: 42,
    func: function(y) {
      console.log(this.x + y);
    }
  };
  
  var newObj = { x: 84 };
  
  // 将新函数作为参数传递给 setTimeout
  setTimeout(function(){
    console.log(this);
    // obj.func.bind(this)(1);
  }, 1000);