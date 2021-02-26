module.exports = function toReadable (a) {
    let strA = String(a);
    let ret = "";
    let one = function(strA){
        switch(Number(strA)){
            case 1:
                ret += "one";
                break;
            case 2:
                ret += "two";
                break;
            case 3:
                ret += "three";
                break;
            case 4:
                ret += "four";
                break;
            case 5:
                ret += "five";
                break; 
            case 6:
                ret += "six";
                break;
            case 7:
                ret += "seven";
                break;
            case 8:
                ret += "eight";
                break;
            case 9:
                ret += "nine";
                break;
            case 0
                break;       
        }    
    }
    let two = function(strA){
        strA = Number(strA);
        if(strA <20){
            switch(Number(strA)){
                case 10:
                    ret += "ten";
                    break;
                case 11:
                    ret += "eleven";
                    break;
                case 12:
                    ret += "twelve";
                    break;
                case 13:
                    ret += "thirteen";
                    break;
                case 14:
                    ret += "fourteen";
                    break; 
                case 15:
                    ret += "fifteen";
                    break;
                case 16:
                    ret += "sixteen";
                    break;
                case 17:
                    ret += "seventeen";
                    break;
                case 18:
                    ret += "eighteen";
                    break;
                case 19:
                    ret += "nineteen";
                    break;
            }
        }else if(strA >= 20 && strA <30){
            if(strA == 20){
                ret += "twenty";
            }else{
                ret += "twenty ";
                strA = String(strA);
                one(strA[1]);
            }    
        }else if(strA >= 30 && strA <40){
            if(strA == 30){
                ret += "thirty";
            }else{
                ret += "thirty ";
                strA = String(strA);
                one(strA[1]);
            }
        }else if(strA >= 40 && strA <50){
            if(strA == 40){
                ret += "forty";
            }else{
                ret += "forty ";
                strA = String(strA);
                one(strA[1]);
            }    
        }else if(strA >= 50 && strA <60){
            if(strA == 50){
                ret += "fifty";
            }else{
                ret += "fifty ";
                strA = String(strA);
                one(strA[1]);
            }    
        }else if(strA >= 60 && strA <70){
            if(strA == 60){
                ret += "sixty";
            }else{
                ret += "sixty ";
                strA = String(strA);
                one(strA[1]);
            }    
        }else if(strA >= 70 && strA <80){
            if(strA == 70){
                ret += "seventy";
            }else{
                ret += "seventy ";
                strA = String(strA);
                one(strA[1]);
            }    
        }else if(strA >= 80 && strA <90){
            if(strA == 80){
                ret += "eighty";
            }else{
                ret += "eighty ";
                strA = String(strA);
                one(strA[1]);
            }    
        }else if(strA >= 90 && strA <100){
            if(strA == 90){
                ret += "ninety";
            }else{
                ret += "ninety ";
                strA = String(strA);
                one(strA[1]);
            }    
        }          
    }
    let three = function(strA){
        strA = String(strA);
        if(strA[0] == "1"){
            ret = "one hundred ";
            if(strA[1] != "0"){
                two(strA[1]+strA[2]);
            }else if(strA[1] == "0" && strA[2] == "0"){
                ret = "one hundred";
            }else{
                one(strA[2]);
            }     
        }else if(strA[0] == "2"){
            ret = "two hundred ";
            if(strA[1] != "0"){
                two(strA[1]+strA[2]);
            }else if(strA[1] == "0" && strA[2] == "0"){
                ret = "two hundred";
            }else{
                one(strA[2]);
            } 
        }else if(strA[0] == "3"){
            ret = "three hundred ";
            if(strA[1] != "0"){
                two(strA[1]+strA[2]);
            }else if(strA[1] == "0" && strA[2] == "0"){
                ret = "three hundred";
            }else{
                one(strA[2]);
            } 
        }else if(strA[0] == "4"){
            ret = "four hundred ";
            if(strA[1] != "0"){
                two(strA[1]+strA[2]);
            }else if(strA[1] == "0" && strA[2] == "0"){
                ret = "four hundred";
            }else{
                one(strA[2]);
            } 
        }else if(strA[0] == "5"){
            ret = "five hundred ";
            if(strA[1] != "0"){
                two(strA[1]+strA[2]);
            }else if(strA[1] == "0" && strA[2] == "0"){
                ret = "five hundred";
            }else{
                one(strA[2]);
            } 
        }else if(strA[0] == "6"){
            ret = "six hundred ";
            if(strA[1] != "0"){
                two(strA[1]+strA[2]);
            }else if(strA[1] == "0" && strA[2] == "0"){
                ret = "six hundred";
            }else{
                one(strA[2]);
            } 
        }else if(strA[0] == "7"){
            ret = "seven hundred ";
            if(strA[1] != "0"){
                two(strA[1]+strA[2]);
            }else if(strA[1] == "0" && strA[2] == "0"){
                ret = "seven hundred";
            }else{
                one(strA[2]);
            } 
        }else if(strA[0] == "8"){
            ret = "eight hundred ";
            if(strA[1] != "0"){
                two(strA[1]+strA[2]);
            }else if(strA[1] == "0" && strA[2] == "0"){
                ret = "eight hundred";
            }else{
                one(strA[2]);
            } 
        }else if(strA[0] == "9"){
            ret = "nine hundred ";
            if(strA[1] != "0"){
                two(strA[1]+strA[2]);
            }else if(strA[1] == "0" && strA[2] == "0"){
                ret = "nine hundred";
            }else{
                one(strA[2]);
            } 
        }
    }                       
    if(strA.length == 1 && strA != "0"){
        one(Number(strA));  
    }else if(strA.length == 2 && strA != "0"){
        two(Number(strA));
    }else if(strA == "0"){
        ret = "zero";
    }else{
        three(Number(strA));
    }
    return ret;
}
