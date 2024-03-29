let xhr = new XMLHttpRequest();

function execute() {
  if (xhr.readyState === 0 || xhr.readyState === 4) {
    // unsent or done
    let foodItem = document.getElementById("foodItem").value;
    let method = "GET";
    let url = `http://localhost:5000/${foodItem}`;

    xhr.open(method, url, true);
    xhr.onreadystatechange = handleServerResponse;
    xhr.send();
  }
}

function handleServerResponse() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    document.getElementById(
      "output"
    ).innerHTML = `<span style=color:blue>${xhr.responseText}</span>`;

    console.log("what is xhr: ", xhr.responseText);
    setTimeout(() => {
      execute();
    }, 1000);
  }
}

execute();
