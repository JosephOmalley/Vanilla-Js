function grey_Button() {                                        //def function
    var str = "can you see me\,";                               //define str
    str += " even more now that I concatenated the string\?"    //add to str
    var result = str.fontcolor("grey");                         //makes font color grey

    document.getElementById("greyButton").innerHTML = result;   //declare id and result
}