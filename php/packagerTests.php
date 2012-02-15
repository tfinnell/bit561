<?php

/**
 * Description of packagerTests
 *
 * @author Edwin-Lap
 */

/*+ 
 * AUTHOR::name=Ed Anderson::created=02/02/2012;;
 * TRACE::requirement=METADATA.PLANGUAGE::location=myjsPacakger.php::
 *     description=Packager object for wrapping Javascript code in HTML;;
 */
class PackagerTests {
   
   private $tests = array();
   
   function __construct() {
      
      $block = false;
      $wrapper = false;
      $functionmarker = 0;
      
      $this->tests['comment'] = function($fileLine, &$bracecount) use (&$block, &$wrapper) {
         $fileLine = trim($fileLine);
         if ((preg_match('/^(\/\/)|^(\/\*)|^(\*\/)/', $fileLine) || $block) && !$wrapper) {
            $fileLine = '<span class="comment">'.$fileLine.'</span><br />';
            if (strpos($fileLine, '/*') > -1) {
               $block = true;
            }
            if (strpos($fileLine, '*/') > -1) {
               $block = false;
            }
            $wrapper = true;
         }
         return $fileLine;
      };
      
      $this->tests['class'] = function($fileLine, &$bracecount) use (&$block, &$wrapper) {
         if (preg_match('/class/', $fileLine)
               && !$wrapper
               && !$block) {
            $fileLine = '<span class="classDefinition">'.$fileLine.'</span><div class="class body">';
            $bracecount++;
            $wrapper = true;
         }
         return $fileLine;
      };
      
      $this->tests['function'] = function($fileLine, &$bracecount) use (&$block, &$wrapper, &$functionmarker) {
         if (preg_match('/function/', $fileLine)
               && !$wrapper
               && !$block) {
            $fileLine = '<span class="functionDefinition">'.$fileLine.'</span><div class="function body">';
            if ( $functionmarker === 0 ) {
               $fileLine = '<div class="functionDeclaration">'
                           .'<span class="expandFunction">++</span>'.$fileLine;
               $bracecount++;
               $functionmarker = $bracecount;
            }
            $wrapper = true;
         }
         return $fileLine;
      };
      
      $this->tests['codeline'] = function($fileLine, &$bracecount) use (&$block, &$wrapper, &$functionmarker) {
         if (!$wrapper && !$block) {
            $fileLine = trim($fileLine);
            if ( strpos($fileLine, '//') > -1 && strpos($fileLine, ';') < strpos($fileLine, '//') ) {
               $parts = explode('//', $fileLine);
               $parts[1] = '<span class="comment">//'.$parts[1].'</span>';
               $fileLine = implode('', $parts);
            }
            $fileLine = '<span class="codeline">'.$fileLine.'</span><br />';
            $wrapper = true;
            if (strpos($fileLine, '{') > -1) {
                $bracecount++;
                $fileLine = '<div class="declaration"'.$fileLine.'<div class="body">';
            }
            if ( $bracecount > 0 && strpos($fileLine, '}') > -1) {
               $fileLine = '</div>' . $fileLine . '</div>';
               $bracecount === $functionmarker ? $functionmarker = 0 : FALSE;
               $bracecount--;
            }
         }
         return $fileLine;
      };
      
      // Mike and shawn's code for CSS packager testing
      // Looking for selectors.
      $this->tests['selector'] = function($fileLine, $bracecount) use (&$block, &$wrapper, &$div){
          if (!$wrapper && !$block) {
            $fileLine = trim($fileLine);
            if (( strpos($fileLine, '{') > -1 ) ||  (strpos($fileLine, '}') > -1))  {
               $fileLine = '<span class="selector">'.$fileLine.'</span>';
            }
              $wrapper = true;
          }
          return $fileLine;
      };
      
      // testing for css rules
      
      $this->tests['rule'] = function($fileLine, $bracecount) use (&$block, &$wrapper, &$div){
          if (!$wrapper || !$block) {
            $fileLine = trim($fileLine);
            if ( strpos($fileLine, ';') > -1 ) {
               $fileLine = '<span class="rule">'.$fileLine.'</span>';
            }
               $wrapper = true;
          }
          return $fileLine.'<br />';
      };
      
      // Closing of Mike and Shawns testing packager.
      
      $this->tests['setFlags'] = function() use (&$wrapper) {
         $wrapper = false;
         $block = false;
      };
      
   }
   
   public function getTests() {
      return $this->tests;
   }
   

}

?>