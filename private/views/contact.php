
<?php include __DIR__ . "/../templates/header.php"; ?>
<main class="contact__main">
<h1 class="header__titel">Contact</h1>
<h3 class="header__text">If you’d like to get in touch with us you can email us at info@invsion.nl, send us a message via our online form below.</h3>
<form name="contactform" method="post" action="">
  <div class="form--full-name"><label class="form__label--full-name" for="first_name">Full Name</label>
  <input class="form__input--full-name"  type="text" name="first_name" maxlength="50" size="30"></div>
  
  <div class="form--email"><label class="form__label--email" for="email">Email</label><br>
  <input class="form__input--email" type="text" name="email" maxlength="80" size="30"></div>
  
  <div class="form--phone"><label class="form__label--phone" for="telephone">Phone Number</label><br>
  <input class="form__input--phone" type="text" name="telephone" maxlength="30" size="30"></div>
  
  <div class="form--city"><label class="form__label--city" for="city_country">City, Country</label><br>
  <input class="form__input--city" type="text" name="city_country" maxlength="50" size="30"></div>
  
  <div class="form--budget"><label class="form__label--budget" for="budget">Your Budget</label><br>
  <input class="form__input--budget" type="text" name="budget" maxlength="50" size="30"></div>
  
  <label class="form__label--message" for="comments">Message</label><br>
  <textarea class="form__input--message" name="comments" maxlength="1000" cols="25" rows="6"></textarea>
 
  <br>

  <input class="form__button" type="submit" value="Send"> 
</form>
</main>
<?php require __DIR__ . "/../templates/footer.php"; ?>