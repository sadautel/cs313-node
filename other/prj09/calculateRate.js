function getRate(weight, type) {
    switch(type) {
        case "Letters (Stamped)":
           if(weight == 1){
              return .55;
           }
           else if(weight == 2){
              return .70;
           }
           else if(weight == 2){
              return .85;
           }
           else{
            return 1.00;
           }
           
        case "Letters (Metered)":
            if(weight == 1){
               return .50;
            }
            else if(weight == 2){
               return .65;
            }
            else if(weight == 2){
               return .80;
            }
            else{
            return .95;
            }
        case "Large Envelopes (Flats)":
         if(weight == 1){
            return 1.00;
         }
         else if(weight == 2){
            return 1.20;
         }
         else if(weight == 3){
            return 1.40;
         }
         else if(weight == 4){
            return 1.60;
         }
         else if(weight == 5){
            return 1.80;
         }
         else if(weight == 6){
            return 2.00;
         }
         else if(weight == 7){
            return 2.20;
         }
         else if(weight == 8){
            return 2.40;
         }
         else if(weight == 9){
            return 2.60;
         }
         else if(weight == 10){
            return 2.80;
         }
         else if(weight == 11){
            return 3.00;
         }
         else if(weight == 12){
            return 3.20;
         }
         else{
          return 3.40;
         }
         case "First-Class Package Service—Retail":
            if(weight == 1){
               return 3.80;
            }
            else if(weight == 2){
               return 3.80;
            }
            else if(weight == 3){
               return 3.80;
            }
            else if(weight == 4){
               return 3.80;
            }
            else if(weight == 5){
               return 4.60;
            }
            else if(weight == 6){
               return 4.60;
            }
            else if(weight == 7){
               return 4.60;
            }
            else if(weight == 8){
               return 4.60;
            }
            else if(weight == 9){
               return 5.30;
            }
            else if(weight == 10){
               return 5.30;
            }
            else if(weight == 11){
               return 5.30;
            }
            else if(weight == 12){
               return 5.30;
            }
            else{
             return 5.90;
            }  
    }
}


function calculate(req, res) { 
    var weight = req.query.weight;
    var type = req.query.type;
 
    var price = getRate(weight, type).toFixed(2);
 
    var stuff = {weight: weight, type: type, price: price};
 
    res.render('price', stuff);
 }

 module.exports = {calculate: calculate};