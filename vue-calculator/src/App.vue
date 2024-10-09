<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <br>
    <br>
    <div class="container calc-heading p-0">
      <p class="mb-0">calc</p>
    </div>
    <div class="container container-screen">
      <input type="" v-model="myResult">
    </div>

    <div class="container calculator">
      <div class="d-flex flex-row bd-highlight mb-1">
        <div class="p-2 bd-highlight">
          <button @click="buttonvalue(7)" class="btn">7</button>
        </div>
        <div class="p-2 bd-highlight">
          <button @click="buttonvalue(8)" class="btn">8</button>
        </div>
        <div class="p-2 bd-highlight">
          <button @click="buttonvalue(9)" class="btn">9</button>
        </div>
        <div class="p-2 bd-highlight">
          <button @click="dellBtn()" class="btn btn-dell">DEL</button>
        </div>
      </div>

      <div class="d-flex flex-row bd-highlight mb-1">
        <div class="p-2 bd-highlight">
          <button @click="buttonvalue(4)" class="btn">4</button>
        </div>
        <div class="p-2 bd-highlight">
          <button @click="buttonvalue(5)" class="btn">5</button>
        </div>
        <div class="p-2 bd-highlight">
          <button @click="buttonvalue(6)" class="btn">6</button>
        </div>
        <div class="p-2 bd-highlight">
          <button @click="buttonvalue('+')" class="btn">+</button>
        </div>
      </div>

      <div class="d-flex flex-row bd-highlight mb-1">
        <div class="p-2 bd-highlight">
          <button @click="buttonvalue(1)" class="btn">1</button>
        </div>
        <div class="p-2 bd-highlight">
          <button @click="buttonvalue(2)" class="btn">2</button>
        </div>
        <div class="p-2 bd-highlight">
          <button @click="buttonvalue(3)" class="btn">3</button>
        </div>
        <div class="p-2 bd-highlight">
          <button @click="buttonvalue('-')" class="btn">-</button>
        </div>
      </div>

      <div class="d-flex flex-row bd-highlight mb-1">
        <div class="p-2 bd-highlight">
          <button @click="buttonvalue('.')" class="btn">.</button>
        </div>
        <div class="p-2 bd-highlight">
          <button class="btn" @click="buttonvalue(0)">0</button>
        </div>
        <div class="p-2 bd-highlight">
          <button @click="buttonvalue('/')" class="btn">/</button>
        </div>
        <div class="p-2 bd-highlight">
          <button @click="buttonvalue('*')" class="btn">X</button>
        </div>
      </div>
      <div class="d-flex flex-row bd-highlight mb-1">
        <div class="p-2 bd-highlight">
          <button @click="resetbtn()" class="btn btn-reset">RESET</button>
        </div>
        <div class="p-2 bd-highlight">
          <button @click="equalBtn()" class="btn btn-equal">=</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'App',
    data(){
      return{
        input1: '',
        input2: '',
        opratorIndex: '',
        myResult:'',
        symbols:'',

        inputData:[],
        
      };

    },
    components: {
      HelloWorld
    },
    methods: {

      buttonvalue(a){
       this.myResult='';
       this.inputData.push(a);
       for (var j = 0; j < this.inputData.length; j++) {

        this.myResult += this.inputData[j];
        
      }

    },

    resetbtn(){
      this.myResult = '';
    },

    dellBtn(){

      this.inputData.splice(-1);
      this.myResult = '';
      for (var j = 0; j < this.inputData.length; j++) {
        this.myResult += this.inputData[j];

      }
    },

    equalBtn(){

      this.input1='';
      this.input2='';


      for (var i = 0; i < this.inputData.length; i++) {
        if(this.inputData[i] == '+'){
          this.opratorIndex = [i];
        }   
        else if (this.inputData[i] == '-') {
         this.opratorIndex = [i];
       }
       else if (this.inputData[i] == '*') {
         this.opratorIndex = [i];
       }
       else if (this.inputData[i] == '/') {
         this.opratorIndex = [i];
       }
     }


     for (var j = 0; j < this.inputData.length; j++) {

      if ([j] < this.opratorIndex) {

        this.input1 += this.inputData[j];
      }

    }
    for (var k = 0; k < this.inputData.length; k++) {

      if ([k] > this.opratorIndex) {

        this.input2  += this.inputData[k];
      }

    }
    this.symbols = this.inputData[this.opratorIndex];
    if(this.symbols == '+'){

      this.myResult = parseInt(this.input1) + parseInt(this.input2);
    }
    if(this.symbols == '-'){

      this.myResult = parseInt(this.input1) - parseInt(this.input2);
    }
    if(this.symbols == '*'){

      this.myResult = parseInt(this.input1) * parseInt(this.input2);
    }
    if(this.symbols == '/'){

      this.myResult = parseInt(this.input1) / parseInt(this.input2);
    }
  },
},
};
</script>

<style>
@import'~bootstrap/dist/css/bootstrap.css';
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');
#app{
  background: #E6E6E6;
  height: 100vh;
}
.calc-heading{
  width: 290px;
  font-family: 'Spartan', sans-serif;

}
.container-screen {
  flex-direction: row;
  align-items: last-baseline;
  width: 290px;
  padding-left: 0px;

}
.container-screen input{
  background: #EEEEEE;
  flex-direction: row;
  text-align: right;
  border-radius: 7px;
  width: 290px;
  padding: 15px;
  font-size: 30px;
  border: none;
  font-weight: bold;
}


.calculator {
  background: #D3CDCD;
  flex-direction: row;
  align-items: last-baseline;
  border-radius: 7px;
  width: 290px;

}
.container button{

  color: black;
  width: 50px;
  background: #E5E4E0;
  border-radius: 8px;
  outline: none;
  box-shadow: 0 3px #999;
  border: none;
  font-family: 'Spartan', sans-serif;




}

.calculator  .btn-dell{
  background: #388187;
  box-shadow: 0 3px #1A5B63;
  color: white;
  font-family: sans-serif;
}
.calculator  .btn-reset{
  width: 115px;
  background: #388187;
  box-shadow: 0 3px #1A5B63;
  color: white;
  font-family: sans-serif;
  margin-bottom: 10px;
}
.calculator  .btn-equal{
  width: 115px;
  background: #C85401;
  box-shadow: 0 3px #843601;
  color: white;
  font-weight: 500;
  font-family: sans-serif;
}
.container button:hover {background-color: #3e8e41}

.container button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.container button:focus {
  outline: none;
  box-shadow: none;

}
</style>
