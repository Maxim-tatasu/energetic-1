<template>
    <div class="Game" >
        <h2>Simon The Game</h2>
        <h3>Раунд </h3>
        <div class="panel">
        <form>
            <button id="red" ></button>
            <button id="blue" ></button>
            <button id="yellow" ></button>
            <button id="green" ></button>
        </form>
        </div>
        <input type="submit" value="Начать игру" @click="getRandomNumber()" >
        <div class="level">
        <label>Уровень сложности</label><br>
        Легкий<input type="radio" name="lev" checked >
        Средний<input type="radio" name="lev">
        Сложный<input type="radio" name="lev">
        </div>
        
       
        
    </div>
</template>

<script>
export default {
    el: '.Game',
  
  data () {
    return {
        
     // randomNumber:Number
    }
  },
  
   methods:{
    getRandomNumber: function () {		
		let num1= Math.floor(Math.random()*(5 - 1) + 1);
        let num2= Math.floor(Math.random()*(5 - 1) + 1);
       let num3= Math.floor(Math.random()*(5 - 1) + 1);
       let num4= Math.floor(Math.random()*(5 - 1) + 1);
            var audio = new Audio(); // Создаём новый элемент Audio
        var music=[];
            
            switch(num1){
                case 1:{
                    music.push("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
                    break;
                }
                case 2:{
                     music.push("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
                    break;
                }
                case 3:{
                     music.push("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
                    break;
                }
                case 4:{
                     music.push("https://s3.amazonaws.com/freecodecamp/simonSound1.mp4");
                    break;
                }
            }

            switch(num2){
                case 1:{
                    music.push("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
                    break;
                }
                case 2:{
                     music.push("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
                    break;
                }
                case 3:{
                     music.push("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
                    break;
                }
                case 4:{
                     music.push("https://s3.amazonaws.com/freecodecamp/simonSound1.mp4");
                    break;
                }
            }

            switch(num3){
                case 1:{
                    music.push("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
                    break;
                }
                case 2:{
                     music.push("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
                    break;
                }
                case 3:{
                     music.push("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
                    break;
                }
                case 4:{
                     music.push("https://s3.amazonaws.com/freecodecamp/simonSound1.mp4");
                    break;
                }
            }

            switch(num4){
                case 1:{
                    music.push("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
                    break;
                }
                case 2:{
                     music.push("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
                    break;
                }
                case 3:{
                     music.push("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
                    break;
                }
                case 4:{
                     music.push("https://s3.amazonaws.com/freecodecamp/simonSound1.mp4");
                    break;
                }
            }

            music.forEach(function (item,i,music){
        
                console.log(item);
                i;music;
                
                audio.durationchange = function(){
                    audio = new Audio(item);
                    audio.autoplay = true;
                    };
               
            }) 
              
        }
        
        
    } 

}

</script>
   
<style scoped>
    .panel{
        display: inline-flex;
        justify-content: space-between;
        width: 20rem;
        height: 20rem;
        margin: 2%;
    }

    .level{
        font: 17pt sans-serif;
    }

    #red{
       width: 10rem;
       height: 10rem;
        background-color: brown;
    }

    #blue{
        background-color:cornflowerblue;
        width: 10rem;
       height: 10rem;
    }

    #yellow{
        background-color:goldenrod;
        width: 10rem;
       height: 10rem;
    }

    #green{
        background-color:green;
        width: 10rem;
       height: 10rem;
    }
    input[type=submit]{
         background-color: rgb(43, 183, 226);
        color: rgb(247, 243, 243);
        padding: 2%;
        margin: 2%;
        font: 17pt sans-serif;
        font-weight: 700;
    }
    input[type=submit]:hover{
         background-color:mediumslateblue;
    }
</style>