let xhr = new XMLHttpRequest();

if (!xhr) {
  alert("you are not set up with a proper browser");
}

function execute() {
  if (xhr.readyState === 0 || xhr.readyState === 4) {
    // unsent or done
    let foodItem = document.getElementById("foodItem").value;
    let method = "GET";
    let url = `./foodCheck.php?item=${foodItem}`;

    xhr.open(method, url, true);
    xhr.onreadystatechange = handleServerResponse;
    xhr.send(null);
  }
}

function handleServerResponse() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let XMLResponse = xhr.responseXML;
    let XMLDocumentElement = XMLResponse.documentElement;
    let message = XMLDocumentElement.innerHTML;
    document.getElementById(
      "output"
    ).innerHTML = `<span style="color:green">${message}</span>`;
    setTimeout(() => {
      execute();
    }, 1000);
  }
}

execute();
