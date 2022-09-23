function transform(line) {
    var values = line.split(',');
    var obj = new Object();
        obj.uf = values[0];
        obj.a_2016 = values[1];
        obj.a_2017 = values[2];
        obj.a_2018 = values[3];
        obj.a_2019 = values[4];
        obj.a_2020 = values[5];
    
        var jsonString = JSON.stringify(obj);
    return jsonString;
    }