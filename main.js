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


{/* <div id="landingdiv2">
    <div id="landingdivleft2">
        <p id="landingheader2">Learn while you play</p>
        <p id="landingheadersubtext2">Educate yourself on financial topics through interactive games for free</p>
    </div>
    <div id="landingdivright2">
        <div id="leftimage2"><img id="actualleftimage"src="https://i.ibb.co/YTv0vkJ/image-6.png" alt=""></div>
    </div>
</div>
  </div></div> */}