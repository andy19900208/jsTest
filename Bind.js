var v = {
    first : 'mark',
    a : function (second, third){
        console.log(this.first + ' ' + second + ' ' + third);
        
       

        var f = function (){
            return this.first;
        };

        var ff = function (){
           return this;
        }.bind(this);
        
        var fff = ()=>{
            return this;
        }

        console.log(f() === this);
        console.log(ff() === this);
        console.log(fff() === this);
        console.log();
    }
};

var o = {
    first : 'andy'
}

v.a('yao', '!');
v.a.bind(o)('ding', '?');
v.a.bind(o, 'ding')('?');

var b = v.a.bind(o);
var c = v.a.bind(o, 'ding');

b('ding', '?');
c('?');