import { itemsList } from './module.js';
window.onload = showItem;

const delBtn = document.querySelector('#drop');
const addTotalBtn = document.querySelector('#addTotalBtn');

addTotalBtn.addEventListener('click', () => {
  let view = document.querySelector('.view');
  let sum = 0;
  for (let i = 0; i < itemsList.length; i++) {
    sum += itemsList[i].productPrice * itemsList[i].cart_qty;
  }
  view.innerHTML = `총 금액 ${sum}원`;
});

delBtn.addEventListener('click', () => {
  let frm = document.querySelector('#frm');
  let checkboxList = frm.querySelectorAll('input[name="del"]');

  for (let i = 0; i < checkboxList.length; i++) {
    if (checkboxList[i].checked) {
      checkboxList[i].closest('tr').remove();
    }
  }
});

function showItem() {
  let tbody = document.querySelector('tbody');
  tbody.innerHTML = '';
  if (itemsList.length == 0) {
    console.log('아이템이 없습니다');
    return;
  }
  for (let i = 0; i < itemsList.length; i++) {
    tbody.innerHTML += `
                <tr>
                    <td><input id="selectDel" type="checkbox" name="del"></td>
                    <td><img src="${itemsList[i].imgUrl}" alt="Product Image"></td>
                    <td>${itemsList[i].productName}</td>
                    <td><input type="number" min="0" max="99" placeholder="1" /></td>
                    <td>${itemsList[i].productPrice}</td>
                </tr>
            `;
  }
}

// function getCartItem() {}
// function delCartItem() {}
