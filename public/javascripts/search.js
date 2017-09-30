function nodap() {
        string = document.getElementById('keystr').value;
        
        if(string === "") {
            alert('노답 ㅡㅡ');
        } else {
            document.getElementById('search').submit();
        }
    }