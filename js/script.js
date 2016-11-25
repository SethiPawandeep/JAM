function createForm() {
    var x = document.querySelector('.buy-now-form').innerHTML;
    x = '<span style="font-size: 2em; position: absolute; right: 20px; top:15px;" class="cross" onmouseover="cursor: pointer" onclick="closeBuyNowForm();">&times;</span><h2 style="margin-left: 20px;font-family: sans-serif; font-weight: 300">Buy now | JAM 12</h2><hr/><form><label for="fname">First Name</label><input type="text" id="fname" placeholder="First Name"><label for="lname">Last Name</label><input type="text" id="lname" placeholder="Last Name"><label for="hostelNumber">Hostel Number: </label><input type="text" id="hostel-number" placeholder="Hostel Number, Bhawan"><label for="phoneNumber">Phone Number: </label><input type="text" id="phone-number" placeholder="Phone Number"></form>' + x;
    document.querySelector('.buy-now-form').innerHTML = x;
    document.querySelector('.cross').style.cursor = 'pointer';
}

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
    buyNowForm.height = '70vh';
    buyNowForm.width = '80vw';
    buyNowForm.left = '10vw';
    buyNowForm.overflowY = 'scroll';
    buyNowForm.overflowX = 'hidden';
    buyNowForm.top = '80px';
    buyNowForm.borderRadius = '10px';
    buyNowForm.border = '2px solid lightblue';
    buyNowForm.boxShadow = '3px 3px 3px lightblue';
    buyNowForm.transition = "ease .5s";
    buyNowForm.background = 'rgba(255,255,255,0.95)';
    createForm();
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