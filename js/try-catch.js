function checkAge (){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error')

    try{
        const age = parseInt(ageText);
        if(isNaN(age)){
            throw"Please enter a number";
        }
        else if(age< 18){
            throw"bachakacha not allowed";
        }
        else if(age>30){
            throw"murobbi ra aikane asben na";
        }
        errorTag.innerHTML= "";
    }
    catch(err){
        console.log('error',err);
        errorTag.innerHTML = 'error'+ err;
    }
    finally{
        console.log('All done inside try catch');
    }
    console.log(11111);
}