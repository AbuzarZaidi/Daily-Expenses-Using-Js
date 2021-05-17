console.log("Script.js");
let Data = [];
let addBtn = document.getElementById("addBtn");
let displayData = document.getElementById("displayData");

//add expenses
addBtn.addEventListener("click", (e) => {
  let addAmount = document.getElementById("addAmount").value;
  let addDate = document.getElementById("addDate").value;
  let addDetail = document.getElementById("addDetail").value;
  let type = "";
  let debit = document.getElementById("debit");
  let credit = document.getElementById("credit");
  let obj = {};
  if (debit.checked) {
    type = debit.value;
  } else {
    type = credit.value;
  }
  obj = {
    Amount: addAmount,
    Date: addDate,
    Detail: addDetail,
    Type: type,
  };
  Data.push(obj);
});
//show expenses
displayData.addEventListener("change", (e) => {
  let displayDataValue = document.getElementById("displayData").value;
  let DataValue = "";
  if (displayDataValue == "all") {
    DataValue = Data.map((i) => i);
  } else if (displayDataValue == "credit") {
    DataValue = Data.filter(function (i) {
      if (i.Type == "credit") {
        return i;
      }
    });
  } else if (displayDataValue == "debit") {
    DataValue = Data.filter(function (i) {
      if (i.Type == "debit") {
        return i;
      }
    });
  }
 
  showData(DataValue);
});

let showData = (Data) => {
  let html = "";
  let display = document.getElementById("display");
  display.innerHTML = "";
  Data.forEach((element) => {
    html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Amount: ${element.Amount}</h5>
          <h5 class="card-title">Date: ${element.Date}</h5>
          <p class="card-text">Detail: ${element.Detail}</p>
        </div>
      </div>`;
  });
  display.innerHTML += html;
};
