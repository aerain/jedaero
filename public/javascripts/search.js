function search() {
        string = document.getElementById('keystr').value;
        
        if(string === "") {
            alert('검색어를 입력해 주세요.');
        } else {
            document.getElementById('search').submit();
        }
    }