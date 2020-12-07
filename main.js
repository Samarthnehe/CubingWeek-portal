
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
          if(arr1[i]=="DNF"){
            arr1[i]=parseFloat(100000.00);
            count1++;
          }
        }
        console.log(arr1);
        arr1.sort(function(a, b){
          return a - b;
        });
        var count2=0;
        var arr2=[]
        arr2.push(p2s1,p2s2,p2s3,p2s4,p2s5);
        for(i=0;i<arr2.length;i++){
          if(arr2[i]=="DNF"){
            arr2[i]=parseFloat(100000.00);
            count2++;
          }
        }
        arr2.sort(function(a, b){
          return a - b;
        });
        console.log(arr1);

        var avg1= (parseFloat(arr1[1])+parseFloat(arr1[2])+parseFloat(arr1[3]))/3;
        
        var avg2= (parseFloat(arr2[1])+parseFloat(arr2[2])+parseFloat(arr2[3]))/3;
        
          if(count1>1){
            document.getElementById("player1").innerHTML="DNF";
        }
        else{
            
          if(p1s1!='' && p1s2!='' && p1s3!='' && p1s4!='' && p1s5!='' ){
            document.getElementById("player1").innerHTML=avg1.toFixed(2);
        }
        else{
          document.getElementById("player1").innerHTML="-";
        }
        }
        if(count2>1){
          document.getElementById("player2").innerHTML="DNF";
        }
        else{
            if(p2s1!='' && p2s2!='' && p2s3!='' && p2s4!='' && p2s5!='' ){
                document.getElementById("player2").innerHTML=avg2.toFixed(2);
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
        
        if(avg2.toFixed(2)<avg1.toFixed(2)){
          document.getElementById("avgname").innerHTML=document.getElementById("p2").innerHTML.toUpperCase();
          document.getElementById("avgwin").innerHTML=avg2.toFixed(2);
          for(i=0;i<userDataObject.length;i++){
            
              if(userDataObject[i].name==document.getElementById("p2").innerHTML){
                  userDataObject[i].Played++;
                  userDataObject[i].Won++;
                  userDataObject[i].points+=2;
                  if(parseFloat(avg2.toFixed(2))<parseFloat(userDataObject[i].Bestavg)){
                      console.log("heya");
                    userDataObject[i].Bestavg=avg2.toFixed(2);
                  }
              }
              if(userDataObject[i].name==document.getElementById("p1").innerHTML){
                  userDataObject[i].Played++;
                  userDataObject[i].Lost++;
                  if(parseFloat(avg1.toFixed(2))<parseFloat(userDataObject[i].Bestavg)){
                    console.log("heya");
                    userDataObject[i].Bestavg=avg1.toFixed(2);
                  }
              }

          }
        }
        if(avg1.toFixed(2)<avg2.toFixed(2)){
          document.getElementById("avgname").innerHTML=document.getElementById("p1").innerHTML.toUpperCase();
          document.getElementById("avgwin").innerHTML=avg1.toFixed(2);
          for(i=0;i<userDataObject.length;i++){
              if(userDataObject[i].name==document.getElementById("p1").innerHTML){
                  userDataObject[i].Played++;
                  userDataObject[i].Won++;
                  userDataObject[i].points+=2;
             
                  if(parseFloat(avg1.toFixed(2))<parseFloat(userDataObject[i].Bestavg)){
                      
                    userDataObject[i].Bestavg=avg1.toFixed(2);
                  }
              }
              if(userDataObject[i].name==document.getElementById("p2").innerHTML){
                  userDataObject[i].Played++;
                  userDataObject[i].Lost++;
                  
                  if(parseFloat(avg2.toFixed(2))<parseFloat(userDataObject[i].Bestavg)){
                  
                    userDataObject[i].Bestavg=avg2.toFixed(2);
                  }
                  
              }

          }
        }
    
        
