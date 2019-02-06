function getCategoryList(callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = (e) => {
    if (xhr.readyState !== 4) {
      return;
    }

    if (xhr.status === 200) {
      console.log('SUCCESS', xhr.responseText);
      callback(JSON.parse(xhr.responseText));
    } else {
      console.warn('request_error');
    }
  };

  xhr.open('GET', 'https://httpbin.org/user-agent');
  xhr.send();
}

getCategoryList(data => console.log("The data is:", data));