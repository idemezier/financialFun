// fires when 'expand' button is clicked, expands game

let theStatus = 'closed'

function onClick() {

    console.log('test222')

    if (theStatus == 'open') {
        document.getElementById('sidediv').style.left = "198vh";
        document.getElementById('maindiv').style.marginLeft = "55vh"
        theStatus = 'closed'
    } else if (theStatus == 'closed') {
        document.getElementById('sidediv').style.left = "150vh";
        document.getElementById('maindiv').style.marginLeft = "45vh"
        theStatus = 'open'
    }


}