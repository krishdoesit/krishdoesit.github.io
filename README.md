# krishdoesit.github.io
web222 final assessment
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />    
    <title>Profile</title>
</head>
    <link rel="stylesheet" href="style.css" type="text/css">
    <script src="script.js"></script>
    <link href='https://fonts.googleapis.com/css?family=Monoton' rel='stylesheet'>
    <link rel="stylesheet" href="css/style.css" type="text/css" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <link href="https://fonts.googleapis.com/css?family=Martel Sans" rel='stylesheet'>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia&effect=neon|outline|emboss|shadow-multiple">
<body>
    <section id="Flex">
     <section class="poster" id="about">
         <div id="imgbox">
        <img id ="krishimg" src="pic.jpeg"/>
         </div>
         <div id="nameDesign">KRISH &nbsp;PATEL</div>
        <div id="profession">Web Developer, Softare Developer</div>
        
        <div id="btnAlign">
            <button class="but1"><a href="resume.pdf"></b>&nbsp;<strong style="font-family: Martel Sans;">Resume</strong></a></button>
            <button class="but2"><a href="#form"><strong style="font-family: Martel Sans;">Contact</a></strong></a></button>
        </div>
        
     </section>
    </section>
    
    <div id="infographic">
    <section class="information">
        <div id="section1" class="sofia" ><p style="margin-left:30px; font-size: 30px;text-decoration-line: underline;
            text-decoration-style: wavy;">
            <strong>About Me and Academic Honesty</strong></p>
        
            <div style="width:80%; margin-left: 30px;"><p>
                My name is krish patel, from <strong>India.</strong>I completed my 12th from sahajanand school and having interest and curiosity about programming and i am pursuing my studies from seneca college.Apart from academics,my hobbies are playing football, doing skating and reading books about life and financial education.<br>I declare that my assessment is wholly my own work in accordance with Seneca Academic
                Policy. No part of this assessment has been copied manually or electronically from any other
                source (including web sites) except for the information supplied by the WEB222 instructors and /
                or made available in this assessment for my use. I also declare that no part of this assignment
                has been distributed to other students.</br>

                <p class="date">
                    <b>Date:</b> 
                    <span id="current_date"></span>
                </p>
                <script>
                date = new Date();
                year = date.getFullYear();
                month=date.getMonth();
                monthArr = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
                month = monthArr[month];
                day = date.getDate();
                document.getElementById("current_date").innerHTML=month+" "+day+", "+year;                 
                </script>
                 
          </p></div>
          
        
        </div>
    </section>
</div>

<div id="Basic" class="sofia"><p style="margin-left:30px; font-size: 30px;text-decoration-line: underline;
    text-decoration-style: wavy;"><strong>Basic Information</strong></p>

<div style="width:60%; margin-left: 30px;">

  <div>

    <div style="width:40%; float: left;">AGE:</div>

    <div style="width:60%; float: right;">19</div>

  </div>

      <div style="padding-top:45px;">

        <div style="width:40%; float: left;">Email:</div>

        <div style="width:60%; float: right;"><a href="mailto:krishpatidar2211@gmail.com">krishpatidar2211@gmail.com</a></div>
        </div>

        <div style="padding-top:45px;">

          <div style="width:40%; float: left;">LANGUAGE</div>

          <div style="width:60%; float: right;">English, Gujarati, Hindi</div>
          </div>

          <div style="padding-top:45px;">

            <div style="width:40%; float: left;">CLASS SECTION</div>
  
            <div style="width:60%; float: right;">NEE</div>
            </div>

            <div style="padding-top:45px;">

                <div style="width:40%; float: left;">STUDENT ID:</div>
      
                <div style="width:60%; float: right;">123898215</div>
                </div>                
         
          <div style="padding-top:45px;">

            <div style="width:40%; float: left;">INSTRUCTOR:</div>
  
            <div style="width:60%; float: right;">Mr. Navreet lehal</div>
            </div>

        </div>

      </div>
</div>


           <div id = "education">
            <div style="text-align:center;margin:25px;margin-left:30px; font-size: 30px; font-family:'Sofia', sans-serif;text-decoration-line: underline;
  text-decoration-style: wavy;"><strong>Education</strong></div>

<div class="edu1">
    <div id="eduinfo1" class="sofia">
 
        <h2 style="text-align: center;margin-top:50px;">2018 - 2020 (Completed) </h2>
     
        <h1 style="text-align: center; "><u>High School</u></h1>
    </div>

    <div id=eduinfo2 class="sofia">
        <h1 style="margin-left: 30px"><u>High School</u></h1>
        <h2 style="margin-left: 30px">sahajanand School</h2>
        <h3 style="margin-left: 30px">Under the supervision of Udayan Maharaja.</h3>
        <h3 style="margin-left:30px">Awarded with high school completion certificate.</h3>
    </div>
</div>
    <div class="edu2">
 
        <div id="eduinfo3" class="sofia">
        <h2 style="text-align: center; margin-top:90px;">2021 - 2024 (Expected) </h2>
        <h1 style="text-align: center;"><u>Advance Diploma Degree</u></h1>
          
        </div>
     
        <div id="eduinfo4" class="sofia">
          <h1 style="margin-left: 30px"><u>Advance Diploma Degree</u></h1>
          <h2 style="margin-left: 30px">Seneca College</h2>
          <h3 style="margin-left: 30px">Under the supervision of Mr. Navreet lehal</h3>
          <h3 style="margin-left:30px">Awarded with Advance Diploma completion certificate.</h3>
        </div>
     
      </div>    
</div> 
           
           
<
    <section class="form">
         <h2 class="main-heading ">Contact Form</h2> <br>

         <form action="https://formspree.io/f/mnqwgdkw" method="post">
             <label><strong>Name</strong></label>
             <input type="text" name="name" placeholder="Please enter your Full Name" required>
             
             <label for="email"><strong>E-mail</strong></label>
             <input type="text" id="email" name="lastname" placeholder="Please enter your name E-mail address" required>
             
             <label for="address"><strong>Current Address</strong></label>
             <input type="text" id="email" name="address" placeholder="Please enter your current address">
            
             <label for="city"><strong>City</strong></label>                    
                 <input type="text" list="cities" name="canada cities" class="textInside" placeholder="please select your city">
                 <datalist id="cities">
                     <option value="Toronto">
                     <option value="Milton">
                     <option value="Hamilton">
                     <option value="Saskatoon">
                     <option value="London">
                     <option value="Ottawa">
                     <option value="Whitehorse">
                     <option value="Victoria">
                     <option value="Edmonton">
                     <option value="Scarborough">
                     <option value="Quebec">
                     <option value="Calgary">
                     <option value="Winnipeg">
                     <option value="Halifax">
                     <option value="Montreal">
                     <option value="Vancouver">
                   </datalist>
                   <br><br>
             </select>
             
             <label for="address"><strong>Postal Code</strong> (Required Form: M3M 2X1)</label>
             <input name="postal" type="text" pattern="^[A-Za-z]\d[A-Za-z]+\s+\d[A-Za-z]\d$"  required>
              
             <label><strong>Current Occupation</strong></label>
             <input name="Occupation" type="text" placeholder="Please enter your current Occupation">

             <label class="rb">Comment
                 <input type="radio" value="0" id="comment"  name="question" >
                 <span class="newbtn"></span>
             </label>

             <label class="rb">Hiring
                 <input type="radio" value="1" id="hiring"  name="question" >
                 <span class="newbtn"></span>
                 
             </label>

             <label class="rb">Question
                 <input type="radio" value="2" id="question"  name="question" >
                 <span class="newbtn"></span>
             </label>
             <input type="text" id="ndd" name="rate"  placeholder="Enter your hourly rate">
          
             <label for="subject"><strong>Message</strong></label>
             <textarea id="subject" name="message" placeholder="Enter message for us"></textarea>

             <input class="submit" type="submit" value="Submit">
         </form>

         <img src="contact.jpg" alt="">

    </section>

 </div>
</section>
<script src="script.js"></script>
</body>
</html>
