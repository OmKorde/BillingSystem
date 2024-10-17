let companyNameView = document.querySelector(".companyNameView");
let companyTagLineView = document.querySelector(".companyTagLineView");
let companyAddressView = document.querySelector(".companyAddressView");
let billerNameView = document.querySelector(".billerNameView");
let startDateView = document.querySelector(".startDateView");
let endDateView = document.querySelector(".endDateView");
let vehicleNumberView = document.querySelector(".vehicleNumberView");
let descriptionsView = document.querySelector(".descriptionsView");
let netWeightView = document.querySelector(".netWeightView");
let totalAmountView = document.querySelector(".totalAmountView");

function toPreviewInputData() {
    let companyNameInput = document.querySelector(".companyNameInput").value;
    let companyTagLineInput = document.querySelector(".companyTagLineInput").value;
    let companyAddressInput = document.querySelector(".companyAddressInput").value;
    let billerNameInput = document.querySelector(".billerNameInput").value;
    let startDateInput = document.querySelector(".startDateInput").value;
    let endDateInput = document.querySelector(".endDateInput").value;
    let vehicleNumberInput = document.querySelector(".vehicleNumberInput").value;
    let descriptionsInput = document.querySelector(".descriptionsInput").value;
    let netWeightInput = document.querySelector(".netWeightInput").value;
    let totalAmountInput = document.querySelector(".totalAmountInput").value;

    companyNameView.innerHTML = companyNameInput;
    companyTagLineView.innerHTML = companyTagLineInput;
    companyAddressView.innerHTML = companyAddressInput;
    billerNameView.innerHTML = billerNameInput;
    startDateView.innerHTML = startDateInput;
    endDateView.innerHTML = endDateInput;
    vehicleNumberView.innerHTML = vehicleNumberInput;
    descriptionsView.innerHTML = descriptionsInput;
    netWeightView.innerHTML = netWeightInput;
    totalAmountView.innerHTML = totalAmountInput;
}
toPreviewInputData();