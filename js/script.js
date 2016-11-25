function buyNow() {
    /*
        to set CSS for buy-now-box
    */

    var x = document.querySelector('body').innerHTML;
    x = '<div class="buy-now-form"></div>' + x;
    document.querySelector('body').innerHTML = x;
    var buyNowForm = document.querySelector('.buy-now-form').style;
    buyNowForm.position = 'fixed';
    buyNowForm.zIndex = '3';
    buyNowForm.height = '500px';
    buyNowForm.width = '80vw';
    buyNowForm.left = '10vw';
    buyNowForm.top = '80px';
    buyNowForm.borderRadius = '40px';
    buyNowForm.border = '1px solid blue';
    buyNowForm.boxShadow = '3px 3px 3px lightblue';
    buyNowForm.background = 'rgba(255,255,255,0.95)';
    createForm();
}

function createForm() {
    var x = document.querySelector('.buy-now-form').innerHTML;
    x = '<span style="font-size: 2em; position: absolute; right: 20px;" class="cross" onmouseover="cursor: pointer" onclick="closeBuyNowForm();">&times;</span><h2 style="margin-left: 20px;font-family: sans-serif; font-weight: 300">Buy now | JAM 12</h2><form><label for="fname">First Name</label><input type="text" id="fname" placeholder="First Name"><label for="lname">Last Name</label><input type="text" id="lname" placeholder="Last Name"></form>' + x;
    document.querySelector('.buy-now-form').innerHTML = x;
    document.querySelector('.cross').style.cursor = 'pointer';
}

function closeBuyNowForm() {
    console.log('reached here');
    document.querySelector('.buy-now-form').style.display = 'none';
}

/*<form>
  <label for="fname">First Name</label>
  <input type="text" id="fname" name="fname" value="John">
  <label for="lname">Last Name</label>
  <input type="text" id="lname" name="lname" value="Doe">
</form>*/