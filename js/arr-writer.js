export function arr_writer(product) {
  const box = document.querySelector('.box')
  const all_money_span = document.querySelector('.all_money-span')
  let for_admin = localStorage.getItem('admin')
  function for_admin_func(id){
    if (for_admin == 'true') {
      return `<button id="${id}" class="delete_button" type="button">Delete product</button>`
    }
    else{
      return ''
    }
  }
  function render() {
    box.textContent = ''
    for (const i of product) {
      box.innerHTML += `
    <li id="${i.id}" class="card" style="max-width: 600px; height: 280px; position:relative;">
    <input class="input" id="${i.title}" hidden type="checkbox">
    <label style="min-width: none;" class="label" for="${i.title}">
      <img id="${i.id}" class="like1" src="./img/like1.svg" alt="like">
      <img id="${i.id}" class="like2" src="./img/like2.svg" alt="like2">
    </label>
      <div class="item_li">
      <div class="img_box">
        ${i.img}
      </div>
      <div>
        <div>
          <h2>${i.title}</h2>
          <p>${i.money}$</p>
          
          <div class="box_kg"><p id="${i.id}" class="text-muted">${i.count}</p><p>kg</p></div>
          <p>All money: <span id="${i.id}" class="all_money">0</span>$</p>
          <div class="btn_box" style="display:flex; align-items:center;justify-content:start;">
          <button id="${i.id}" style="border:none; padding:10px; border-radius:2px; background-color: aqua; margin-bottom:5px; margin-right:4px;" class="btn-minus" type="button">-</button>
          <p id="${i.id}" class="count">0</p>
          <button id="${i.id}" style="border:none; padding:10px; border-radius:2px; background-color: aqua; margin-bottom:5px; margin-left:4px; " class="btn-plus" type="button">+</button>
          </div>
         ${for_admin_func(i.id)}
          
        </div>
      </div>
    </li>
  `
  


    }
  }
  render()
  const btn_minus = document.querySelectorAll('.btn-minus')
  const btn_plus = document.querySelectorAll('.btn-plus')
  const count = document.querySelectorAll('.count');
  const card = document.querySelectorAll('.card')
  const btn_box = document.querySelectorAll('.btn_box')
  const text_count = document.querySelectorAll('.text-muted')
  const all_money = document.querySelectorAll('.all_money')

  let delete_button = document.querySelectorAll('.delete_button')

  for (const i of card) {
    i.addEventListener('click', (e)=> {
      if(e.target.className == 'delete_button'){
        for (let j = 0; j < product.length; j++) {
          if (product[j].id == i.id) {
            product.splice(j,1);
            arr_writer(product);
          }
        }
      }
    })
  }

  for (const k of card) {
    k.addEventListener('click', (e) => {
      let alll = 1;
      for (const r of all_money) {
        if (r.textContent * 1 > 0) {
          alll += r.textContent * 1;
        }
      }
      alll--;
      all_money_span.textContent = alll;

      if (e.target.className == 'btn-plus') {
        let alll = 1;
        for (const r of all_money) {
          if (r.textContent * 1 > 0) {
            alll += r.textContent * 1;
          }
        }
        alll--;
        all_money_span.textContent = alll;
        for (const i of count) {
          if (i.id == e.target.id) {
            for (const j of product) {
              if (j.id == e.target.id) {
                if (j.count > 0) {
                  for (const l of text_count) {
                    if (l.id == e.target.id) {
                      for (const f of all_money) {
                        if (e.target.id == f.id) {
                          j.all_money = j.money
                          i.textContent = i.textContent * 1 + 1;
                          j.count -= 1;
                          l.textContent = j.count;
                          j.all_money = i.textContent * j.money;
                          f.textContent = j.all_money;
                          let alll = 1;
                          for (const r of all_money) {
                            if (r.textContent * 1 > 0) {
                              alll += r.textContent * 1;
                            }
                          }
                          alll--;
                          all_money_span.textContent = alll;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      else if (e.target.className == 'btn-minus') {
        let alll = 1;
        for (const r of all_money) {
          if (r.textContent * 1 > 0) {
            alll += r.textContent * 1;
          }
        }
        alll--;
        all_money_span.textContent = alll;
        for (const i of count) {
          let alll = 1;
          for (const r of all_money) {
            if (r.textContent * 1 > 0) {
              alll += r.textContent * 1;
            }
          }
          alll--;
          all_money_span.textContent = alll;
          if (i.id == e.target.id) {
            if (i.textContent > 0) {
              for (const j of product) {
                if (j.id == e.target.id) {
                  for (const l of text_count) {
                    if (l.id == e.target.id) {
                      for (const f of all_money) {
                        if (e.target.id == f.id) {
                          j.all_money = j.money

                          i.textContent = i.textContent * 1 - 1;

                          j.count += 1;

                          l.textContent = j.count;

                          j.all_money = i.textContent * 1 * j.money

                          f.textContent = j.all_money;
                          for (const r of all_money) {
                            if (r.textContent * 1 > 0) {
                              alll += r.textContent * 1;
                            }
                          }
                          alll--;
                          all_money_span.textContent = alll;
                        }
                      }
                    }
                  }
                }
              }

            }
          }

        }

      }
    })
  }
}