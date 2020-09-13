
function fibonacci(num) 
    { 
        if(num === 1) 
            return 0; 
        if(num === 2) 
            return 1; 
        var num1=0; 
        var num2=1; 
        var temp = 0; 
        var i=2; 
        while (temp < num)   
        { 
            
            
            num1=num2; 
            num2=temp; 
            temp=num1+num2;
           document.write(`${num2},`);
        } 
        
    } 
  
fibonacci(Number(5));

