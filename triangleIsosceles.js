function heightIsosceles(height1, height2, base){
    
    
    if(height1 === height2 && height1 != base){
        alert('is triangle isosceles');
        const height = Math.sqrt(height1**2 - base**2/4);

        alert(height);
    }else{
        alert('no es isosceles');
    }

    function calculateHeightIsosceles(){
        const base = Number(document.getElementById("base").value);
        const height1 = Number(document.getElementById("height1").value);
        const height2 = Number(document.getElementById("height2").value);
    }

    }
