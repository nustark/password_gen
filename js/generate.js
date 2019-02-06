function generate(path) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET',path,true);
    xhr.responseType = 'blob';
    xhr.onload = function(e) {
        if (this.status == 200) {
            var file = new File([this.response], 'temp');
            var fileReader = new FileReader();
            fileReader.addEventListener('load',function() {
                var obj = JSON.parse(fileReader.result);

                var res = "";
                var index = 2;
                for (i = 0; i < index; i++) {
                    const keys = Object.keys(obj);
                    const index = Math.floor(Math.random() * keys.length);
                    const randKey = keys[index];
                    const name = obj[randKey];
                    var newKey = randKey.replace(/^./, str => str.toUpperCase());
                    res += newKey;
                }

                var symbols = ['@','!','#','$','%','&','*'];
                const index2 = Math.floor(Math.random() * 7);
                const index3 = Math.floor(Math.random() * 10);
                res += symbols[index2];
                res += index3;
                document.getElementById('pass').innerHTML = res;
            });
            fileReader.readAsText(file);
        }
    }
    xhr.send();
}


document.getElementById('click').onclick = function() {
    generate('words_alpha.json');
};