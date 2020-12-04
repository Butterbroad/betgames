const url = 'https://maxline.by/api/TvBetLanding/getUsersForLanding?cors=1';

let data = fetch(url)
  .then(response => response.json())
  .then(item => {
    tableOne(item);
    tableTwo(item);
    tableThree(item);
    console.log(item)
  });

//table 1
function tableOne(item) {
  const firstTableItems = item.data[0].firstTable;
  const firstTableWrapper = document.querySelector('.table__column_1');
  let imgSrc;
  let modClass;
  const tableItems = firstTableItems.map(item => {
    if (item.place === '1') {
      imgSrc = './img/screen3/table1.svg';
      modClass = 'table__item_1';
    } else if (item.place === '2') {
      imgSrc = './img/screen3/table2.svg';
      modClass = 'table__item_2';
    } else if (item.place === '3') {
      imgSrc = './img/screen3/table3.svg';
      modClass = 'table__item_3';
    } else if (item.place === '4') {
      imgSrc = './img/screen3/table4.svg';
      modClass = 'table__item_4';
    } else {
      null
    }
    //make bet item
    let tableItem = `
    <div class="table__item ${modClass}">
    <div class="table__item-num">
      <img src="${imgSrc}" alt="">
    </div>
    <div class="table__item-id">
      <div class="table__item-id-title">
        № Счета
      </div>
      <div class="table__item-id-num">
        ${item.id}
      </div>
    </div>
    <div class="table__item-points">
      <div class="table__item-points-title">
        Очки
      </div>
      <div class="table__item-points-num">
        ${item.points}
      </div>
    </div>
    <div class="table__item-win">
        ${item.prize} BYN
    </div>
  </div>`
    return firstTableWrapper.innerHTML += tableItem;
  });
}

//table 2
function tableTwo(item) {
  const secondTableItems = item.data[0].secondTable.slice(0, 6);
  const secondTableWrapper = document.querySelector('.table__column-wrapper_1');
  const tableItems = secondTableItems.map(item => {

    //make bet item
    let tableItem = `
    <div class="table__item">
    <div class="table__item-num">
      ${item.place}.
    </div>
    <div class="table__item-id">
      <div class="table__item-id-num">
      ${item.id}
      </div>
    </div>
    <div class="table__item-points">
      <div class="table__item-points-num">
      ${item.points}
      </div>
    </div>
    <div class="table__item-win">
      50 BYN
    </div>
  </div>`
    return secondTableWrapper.innerHTML += tableItem;
  });
}

//table 3
function tableThree(item) {
  const thirdTableItems = item.data[0].thirdTable.slice(0, 6);
  const thirdTableWrapper = document.querySelector('.table__column-wrapper_2');
  const tableItems = thirdTableItems.map(item => {

    //make bet item
    let tableItem = `
    <div class="table__item">
    <div class="table__item-num">
      ${item.place}.
    </div>
    <div class="table__item-id">
      <div class="table__item-id-num">
      ${item.id}
      </div>
    </div>
    <div class="table__item-points">
      <div class="table__item-points-num">
      ${item.points}
      </div>
    </div>
  </div>`
    return thirdTableWrapper.innerHTML += tableItem;
  });
}