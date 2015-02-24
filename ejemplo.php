<?php
echo"Fizz";
for ($i = 0; $i <= 100; $i++) {
    
    if (($i%5)==0) {
        echo $i."<br>";
    }
    
}

echo"Buzz";
for ($i = 0; $i <= 100; $i++) {
    
    if (($i%5)==0) {
        echo $i."<br>";
    }
    
}

echo"Fizz and Buzz";
for ($i = 0; $i <= 100; $i++) {
    
    if (($i%3)==0 or ($i%5)==0) {
        echo $i."<br>";
    }
    
}

$a = 2;

function foo()
{
    $a += 3; 
  Return $a;
}
foo();
function doSomething($arg )
{
    $return = $arg;
    $arg += 1;
    return $return;
}
$a = 3;
$b = doSomething($a);
?>

