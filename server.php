<?php
  // connect to mongodb
  $m = new MongoClient();
  echo "Connection to database successfully";
   
  // select a database
  $db = $m->test;
  echo "Database mydb selected";
  $collection = $db->geo_fences;
  echo "Collection selected succsessfully";


  $fences = $_POST['fences'];
//   echo "<pre>"; 
//   print_r($fences); 
//   exit;
  
    foreach($fences as $key=>$array){
        $aFences = [];
        $aFences["location"]['coordinates'][0] =  $array['long'];
        $aFences["location"]['coordinates'][1] =  $array['lat'];
        $aFences["location"]['type'] = "Point";
        $aFences["location"]['radius'] = $array['radius'];
        $aFences["location"]['city'] = $array['city'];
        $aFences["location"]['state'] = $array['state'];
        $aFences["location"]['country'] = $array['country'];

        $collection->insert($aFences);
    }

    echo json_encode($aFences);
?>