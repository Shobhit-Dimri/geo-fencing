<?php

    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    // connect to mongodb
    $m = new MongoClient();
    echo "Connection to database successfully";
   
    // select a database
    $db = $m->test;
    echo "Database mydb selected";
    $collection = $db->restaurants;
    echo "Collection selected succsessfully";

    echo "<pre>";
    print_r($_POST);
    exit;
    
    
    // $fences = $_POST['fences'];
    //   echo "<pre>"; 
    //   print_r($fences); 
    //   exit;
  
    // foreach($fences as $key=>$array){
    //     $aFences = [];
    //     $aFences["location"]['coordinates'][0] =  floatval($array['long']);
    //     $aFences["location"]['coordinates'][1] =  floatval($array['lat']);
    //     $aFences["location"]['type'] = "Point";
    //     $aFences["location"]['radius'] = floatval($array['radius']);
    //     $aFences["location"]['city'] = $array['city'];
    //     $aFences["location"]['state'] = $array['state'];
    //     $aFences["location"]['country'] = $array['country'];

    //     $collection->insert($aFences);
    // }

    echo json_encode($aFences);
?>