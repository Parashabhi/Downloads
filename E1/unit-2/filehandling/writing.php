<?php   
$filename = "newfile.txt";   
$file = fopen( $filename, "w" );     
 if( $file == false ) 
{      
echo ( "Error in opening new file" );     
 exit(); 
  }   
fwrite( $file, "This is  a simple test,you can readd and write inte into this file\n" );   
fclose( $file );
echo "Successfully created";
?>
