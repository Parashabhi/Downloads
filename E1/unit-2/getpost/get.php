<html>
   <body>
  <!--
 The $_SERVER["PHP_SELF"] is a super global variable that returns the filename of the 
   currently executing script. So, the $_SERVER["PHP_SELF"] sends the submitted form data 
   to the page itself, instead of jumping to a different page. 
   This way, the user will get error messages on the same page as the form.-->
      <form action = "<?php $_PHP_SELF ?>" method = "GET">
         Name: <input type = "text" name = "name" />
         Age: <input type = "text" name = "age" />
         <input type = "submit" />
      </form>
      
   </body>
</html>
<?php
   if( $_GET["name"] || $_GET["age"]) {
      echo "Welcome ". $_GET['name']. "<br />";
      echo "You are ". $_GET['age']. " years old.";
      
      exit();
   }
?>

