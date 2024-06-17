// script.js

function toggleList(element) {
    var ul = element.nextElementSibling;
    if (ul.style.display === "block") {
        ul.style.display = "none";
    } else {
        ul.style.display = "block";
    }
}

function navigateToLink(selectElement) {
    var selectedOption = selectElement.options[selectElement.selectedIndex].value;
    if (selectedOption !== "#") {
        window.location.href = selectedOption;
    }
}

// call icon //

function confirmCall() {
  var confirmation = window.confirm("Do you want to call +1(888)462-3453?");
  if (confirmation) {
      window.location.href = "tel:+18884623453";
  }
}




 //platinum 2 platinum 5 popover//


document.addEventListener('DOMContentLoaded', function () {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popovers = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl, {
        trigger: 'hover',
        delay: { show: 0, hide: 0 } // Set the delay to 0 milliseconds
      });
    });
  });
  



// platinum 5  platinum 8  platinum 9  platinum 11//

function toggleCard(cardNumber) {
  const cardContainers = document.querySelectorAll('.custom-card-container');
  cardContainers.forEach(container => container.classList.remove('active'));

  const selectedCard = document.getElementById(`card${cardNumber}`);
  selectedCard.classList.add('active');

  const forms = document.querySelectorAll('form');
  forms.forEach(form => form.classList.add('d-none'));

  const formToShow = document.getElementById(`form${cardNumber}`);
  formToShow.classList.remove('d-none');
}




