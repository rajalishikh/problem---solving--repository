// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
let graphInformation='The coordinates (x, y) lie on the X-axis of the graph.'


if(graphInformation.includes('x') || graphInformation.includes("X")){
    console.log(graphInformation.replace('x','X',),graphInformation.replace('X','Y'))
}


else{
    console.log("Here is no value for existing ")
}
