
        var result={
            score:[
            {
                name:"Aryan Chabbra",
                Played:0,
                Won:0,
                Lost:0,
                points:0,
                Bestavg:100000
            },
            {
                name:"Akshaansh Chilakpati",
                Played:0,
                Won:0,
                Lost:0,
                points:0,
                Bestavg:100000
            },
            {
                name:"Arnav Arora",
                Played:0,
                Won:0,
                Lost:0,
                points:0,
                Bestavg:100000
            },
            {
                name:"Kunal Oak",
                Played:0,
                Won:0,
                Lost:0,
                points:0,
                Bestavg:100000
            },
            {
                name:"Nikhil Soares",
                Played:0,
                Won:0,
                Lost:0,
                points:0,
                Bestavg:100000
            },

            ]
           
        }
   
        var p1s1=document.getElementById("p1s1").innerHTML;
        var p1s2=document.getElementById("p1s2").innerHTML;
        var p1s3=document.getElementById("p1s3").innerHTML;
        var p1s4=document.getElementById("p1s4").innerHTML;
        var p1s5=document.getElementById("p1s5").innerHTML;

        var p2s1=document.getElementById("p2s1").innerHTML;
        var p2s2=document.getElementById("p2s2").innerHTML;
        var p2s3=document.getElementById("p2s3").innerHTML;
        var p2s4=document.getElementById("p2s4").innerHTML;
        var p2s5=document.getElementById("p2s5").innerHTML;
        var count1=0;
        var arr1=[];
        arr1.push(p1s1,p1s2,p1s3,p1s4,p1s5);
       
        for(i=0;i<arr1.length;i++){
          
          if(arr1[i].includes(":")){
            for(j=0;j<arr1[i].length;j++){
              if(arr1[i][j]==":"){
                break
              }

            }
            var min=parseFloat(arr1[i].slice(0,j));
            
            var secs=parseFloat(arr1[i].slice(j+1));
            var tot=min*60+secs;
            arr1[i]=tot;
          }
          if(arr1[i]=="DNF"){
            arr1[i]=parseFloat(100000.00);
            count1++;
          }
        }
        
        arr1.sort(function(a, b){
          return a - b;
        });
        console.log(arr1);
        var count2=0;
        var arr2=[]
        arr2.push(p2s1,p2s2,p2s3,p2s4,p2s5);
        for(i=0;i<arr2.length;i++){
          if(arr2[i].includes(":")){
            for(j=0;j<arr2[i].length;j++){
              if(arr2[i][j]==":"){
                break
              }

            }
            var min=parseFloat(arr2[i].slice(0,j));
            
            var secs=parseFloat(arr2[i].slice(j+1));
            var tot=min*60+secs;
            arr2[i]=tot;
          }
          if(arr2[i]=="DNF"){
            arr2[i]=parseFloat(100000.00);
            count2++;
          }
        }
        arr2.sort(function(a, b){
          return a - b;
        });
        console.log(arr2);

        var avg1= ((parseFloat(arr1[1])+parseFloat(arr1[2])+parseFloat(arr1[3]))/3).toFixed(2);
        var avg1real=avg1;
        if(avg1>60){
          avg1=Math.floor(avg1 / 60)+':'+(avg1 % 60).toFixed(2);

        }
        
        
        var avg2= ((parseFloat(arr2[1])+parseFloat(arr2[2])+parseFloat(arr2[3]))/3).toFixed(2);
        var avg2real=avg2;
          if(avg2>60){
          avg2=Math.floor(avg2 / 60)+':'+(avg2 % 60).toFixed(2);
        }
          if(count1>1){
            document.getElementById("player1").innerHTML="DNF";
            avg1real=100000;
        }
        else{
            
          if(p1s1!='' && p1s2!='' && p1s3!='' && p1s4!='' && p1s5!='' ){
            document.getElementById("player1").innerHTML=avg1;
        }
        else{
          document.getElementById("player1").innerHTML="-";
        }
        }
        if(count2>1){
          document.getElementById("player2").innerHTML="DNF";
          avg2real=100000;
        }
        else{
            if(p2s1!='' && p2s2!='' && p2s3!='' && p2s4!='' && p2s5!='' ){
                document.getElementById("player2").innerHTML=avg2;
              }
              else{
                document.getElementById("player2").innerHTML="-";
              }
        }
        
        
       
        
        var data = {
            getUserDataFromSession: function() {
                var userData = window.sessionStorage.getItem('userObject');
                
                return JSON.parse(userData);
            }
        }
        var userDataObject=data.getUserDataFromSession();

        if(parseFloat(avg2real)<parseFloat(avg1real)){
          document.getElementById("avgname").innerHTML=document.getElementById("p2").innerHTML.toUpperCase();
          document.getElementById("avgwin").innerHTML=avg2;
          for(i=0;i<userDataObject.length;i++){
            
              if(userDataObject[i].name==document.getElementById("p2").innerHTML){
                  userDataObject[i].Played++;
                  userDataObject[i].Won++;
                  userDataObject[i].points+=2;
                  if(parseFloat(avg2real)<parseFloat(userDataObject[i].Bestavg)){
                      console.log("heya");
                    userDataObject[i].Bestavg=avg2real;
                  }
              }
              if(userDataObject[i].name==document.getElementById("p1").innerHTML){
                  userDataObject[i].Played++;
                  userDataObject[i].Lost++;
                  if(parseFloat(avg1real)<parseFloat(userDataObject[i].Bestavg)){
                    console.log("heya");
                    userDataObject[i].Bestavg=avg1real;
                  }
              }

          }
        }
        if(parseFloat(avg1real)<parseFloat(avg2real)){
          console.log(document.getElementById("p1").innerHTML);
          document.getElementById("avgname").innerHTML=document.getElementById("p1").innerHTML.toUpperCase();
          document.getElementById("avgwin").innerHTML=avg1;
          for(i=0;i<userDataObject.length;i++){
              if(userDataObject[i].name==document.getElementById("p1").innerHTML){
                  userDataObject[i].Played++;
                  userDataObject[i].Won++;
                  userDataObject[i].points+=2;
             
                  if(parseFloat(avg1real)<parseFloat(userDataObject[i].Bestavg)){
                      
                    userDataObject[i].Bestavg=avg1real;
                  }
              }
              if(userDataObject[i].name==document.getElementById("p2").innerHTML){
                  userDataObject[i].Played++;
                  userDataObject[i].Lost++;
                  
                  if(parseFloat(avg2real)<parseFloat(userDataObject[i].Bestavg)){
                  
                    userDataObject[i].Bestavg=avg2real;
                  }
                  
              }

          }
        }
    
        
