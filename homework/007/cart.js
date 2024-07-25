import { items } from './module.js';

window.onload = showItem;

const delBtn = document.querySelector('#drop');
const addTotalBtn = document.querySelector('#addTotalBtn');

addTotalBtn.addEventListener('click', () => {
  let sum = 0;
  const priceLIst = items.productPrice;
  const qtyList = items.productId;
  priceLIst.forEach((e, j) => {
    sum = priceLIst[e] * qtyList[j];
  });
  console.log(sum);
  //   console.log(priceLIst);
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

// 객체에 있는 정보를 빼서 카트안에 집어 넣는 기능
function showItem() {
  let tbody = document.querySelector('tbody');
  tbody.innerHTML = '';
  if (items.productId.length == 0) {
    console.log('아이템이 없습니다');
    return;
  }
  for (let i = 0; i < items.productId.length; i++) {
    tbody.innerHTML += `
                <tr>
                    <td><input id="selectDel" type="checkbox" name="del"></td>
                    <td><img src="${items.imgUrl[i]}" alt="Product Image" width="50" height="50"></td>
                    <td>${items.productName[i]}</td>
                    <td><input type="number" min="0" max="99" placeholder="1" /></td>
                    <td>${items.productPrice[i]}</td>
                </tr>
            `;
  }
}

// Placeholder functions for future development
// function getCartItem() {}
// function delCartItem() {}
