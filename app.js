function save() {
  var read = document.getElementById("inputConfirmation");
  if (read.checked == true) {
    bookList2 = JSON.parse(localStorage.getItem("listItem4")) ?? [];
    var id;
    bookList2.length != 0
      ? bookList.findLast((item) => (id = item.id))
      : (id = 0);
    if (document.getElementById("inputAnimeId").value) {
      bookList2.forEach((value) => {
        if (document.getElementById("inputAnimeId").value == value.id) {
          (value.title = document.getElementById("inputAnimeTitle").value),
            (value.date = document.getElementById("inputReleaseDate").value),
            (value.summary = document.getElementById("inputSummary").value),
            (value.isComplete = 0);
        }
      });
      document.getElementById("inputAnimeId").value = "";
    } else {
      var item = {
        id: id + 1,
        title: document.getElementById("inputAnimeTitle").value,
        date: document.getElementById("inputReleaseDate").value,
        summary: document.getElementById("inputSummary").value,
        isComplete: 0,
      };
      bookList2.push(item);
    }
    localStorage.setItem("listItem4", JSON.stringify(bookList2));
  } else {
    alert("Need to agree to Term and Condition");
    return;
  }
  allData();
  document.getElementById("form").reset();
}

function allData() {
  table.innerHTML = ``;
  bookList = JSON.parse(localStorage.getItem("listItem4")) ?? [];
  bookList.forEach(function (value, i) {
    var table = document.getElementById("table");
    // if(value.isComplete == 0){
    table.innerHTML += `
          <tr>
              <td>${i + 1}</td>
              <td>${value.title}</td>
              <td>${value.date}</td>
              <td>${value.summary}</td>
              <td>
                  <button class="btn btn-sm btn-success" onclick="find(${
                    value.id
                  })">
                      <i class="fa fa-edit"></i>
                  </button>
              </td>
              <td>
                  <button class="btn btn-sm btn-danger" onclick="removeData4(${
                    value.id
                  })">
                      <i class="fa fa-trash"></i>
                  </button>
              </td>
          </tr>`;
    // }
  });
}

function removeData3(id) {
  bookList = JSON.parse(localStorage.getItem("listItem3")) ?? [];
  bookList = bookList.filter(function (value) {
    return value.id != id;
  });
  // localStorage.clear();
  localStorage.setItem("listItem3", JSON.stringify(bookList));
  allData();
}
function removeData4(id) {
  bookList = JSON.parse(localStorage.getItem("listItem4")) ?? [];
  bookList = bookList.filter(function (value) {
    return value.id != id;
  });
  localStorage.setItem("listItem4", JSON.stringify(bookList));
  allData();
}

function find(id) {
  bookList = JSON.parse(localStorage.getItem("listItem4")) ?? [];
  bookList.forEach(function (value) {
    if (value.id == id) {
      console.log(id);
      document.getElementById("inputAnimeId").value = id;
      document.getElementById("inputAnimeTitle").value = value.title;
      document.getElementById("inputReleaseDate").value = value.date;
      document.getElementById("inputSummary").value = value.summary;
    }
  });
}

function read(id1, title1, date1, summary1) {
  if (id1) {
    var item = [
      {
        id: id1,
        title: title1,
        date: date1,
        summary: summary1,
        isComplete: 1,
      },
    ];
    bookList = JSON.parse(localStorage.getItem("listItem3")) ?? [];
    books = item.concat(bookList);
    var itemString = JSON.stringify(books);
    localStorage.setItem("listItem3", itemString);
  }

  bookList4 = JSON.parse(localStorage.getItem("listItem4")) ?? [];
  bookList4 = bookList4.filter(function (value) {
    return value.id != id1;
  });
  localStorage.setItem("listItem4", JSON.stringify(bookList4));
  allData();
}
function read2(id1, title1, date1, summary1) {
  if (id1) {
    var item = [
      {
        id: id1,
        title: title1,
        date: date1,
        summary: summary1,
        isComplete: 1,
      },
    ];
    bookList = JSON.parse(localStorage.getItem("listItem4")) ?? [];
    books = item.concat(bookList);
    var itemString = JSON.stringify(books);
    localStorage.setItem("listItem4", itemString);
  }

  bookList3 = JSON.parse(localStorage.getItem("listItem3")) ?? [];
  bookList3 = bookList3.filter(function (value) {
    return value.id != id1;
  });
  localStorage.setItem("listItem3", JSON.stringify(bookList3));
  allData();
}
