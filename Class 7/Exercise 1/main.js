function redundantReturn(){
    const str = "Goodnight!";

    function inner(){
        console.log("Here is a message:", str);
    }

    inner();

}

redundantReturn();