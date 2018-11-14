
// const objectWithThis = {
//     name: 'I am the object',   
//     log: function () {
//       this.name = 'Update current object name'
//       console.log(this); 
//       function setNameWithFunction(newName) {
//         var self = this;
//         self.name = newName;
//       }    
//       setNameWithFunction('Update object name to "NEW NAME"');
//       console.log(this);  
//     }
//   }

// objectWithThis.log();

var name = 'global';

var andy = {
  name : 'andy',
  printMyName : function(){console.log(this.name);},
  cat:{
    name : 'AMeiw',
    printMyName : function(){
      console.log(this.name);
      
      var SayMyName = () => {
        console.log(this)
        console.log(`My Name is ${this.name}`);

        console.log(words);
      };
      SayMyName();

    },
  },
};

var printMyName = function(){
  console.log(this.name);
}

printMyName();

printMyName.bind(andy)();

console.log(this);

andy.printMyName();

andy.cat.printMyName();
