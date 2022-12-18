export function search(product) {


  let search_label = document.querySelector('.search_label')
  let searche_input = document.querySelector('.searche_input')
  let searche_button = document.querySelector('.search_button')
  let search_box = document.querySelector('.search')
  let box = document.querySelector('.box')
  let like = document.querySelector('.like')
  let arr = []

  let search_box2 = document.querySelector('.search_box')
  let favorites_box = document.querySelector('.favorites_box')

  search_label.addEventListener('click', () => {
    search_box2.style.display = 'block'
    favorites_box.style.display = 'none'
    box.style.display = 'none'
    like.style.display = 'none'
    searche_input.style.display = 'block'
    searche_button.style.display = 'block'
  })

  searche_button.addEventListener('click', () => {

    for (const i of product) {
      let str = i.title + ''
      let str2 = searche_input.value + ''
      if (searche_input.value.length == 1) {
        if (str[0].toLowerCase() == str2[0].toLowerCase()) {
          arr[arr.length] = i;
        }
      }
      else {
        for (let k = 0; k < str.length; k++) {
          for (let j = 0; j < str2.length; j++) {
            if (str[k].toLowerCase() == str2[j].toLowerCase()) {
              if (str[k + 1]) {
                if (str2[j + 1]) {
                  if (str[k + 1].toLowerCase() == str2[j + 1].toLowerCase()) {
                    arr[arr.length] = i;
                  }
                }
              }
            }
          }
        }
      }
    }
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i].id == arr[j].id) {
          arr.splice(i, 1);
        }
      }
    }
    function arr_writer(product) {
      const box = document.querySelector('.search_box')
      box.innerHTML = ''
      searche_input.value = ''
      const all_money_span = document.querySelector('.all_money-span')
      function render() {
        box.textContent = ''
        box.style.listStyle = 'none'
        for (const i of product) {
          box.innerHTML += `
        <li id="${i.id}" class="card card5" style="cursor: pointer;max-width: 400px; height: 80px; position:relative; background-color: #fff;">
          <div style="display:flex; align-items: center; justify-content; center;" class="item_li">
          <div style="width: 80px;height: 70px;">
          ${i.img}
          </div>
            <h2>${i.title}</h2>
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
      const card5 = document.querySelectorAll('.card5')
      for (const i of card5) {
        i.addEventListener('click', () => {
          let box = document.querySelector('.box')
          let notification_label = document.querySelector('.notification_label');
          let search_label = document.querySelector('.search_label');
          let home_label = document.querySelector('.home_label');
          let buy_all = document.querySelector('.buy_all');
          let favorites_label = document.querySelector('.favorites_label');
          let favorites_box = document.querySelector('.favorites_box');
          let search_box = document.querySelector('.search_box');
          let profile_label = document.querySelector('.profile_label');
          let selector = document.querySelector('.selector');
          let searche_input = document.querySelector('.searche_input');
          let searche_button = document.querySelector('.search_button');
          let search = document.querySelector('.search');
          let card5 = document.querySelector('.card5');
          let search_box2 = document.querySelector('.search_box');
          search_box2.textContent = '';
          search_box2.style.display = 'block';
          favorites_box.style.display = 'none';
          box.style.display = 'flex';
          like.style.display = 'none';
          searche_input.style.display = 'none';
          searche_button.style.display = 'none';


          window.scroll({
            top: 4500,
            behavior: 'smooth',
            borderRadius: 5,
          });


          search_box2.style.display = 'none'
          box.style.display = 'flex'

          selector.classList = 'selector checked_color selector_after home_label_selector';
          home_label.classList.add('top30', 'checked_color')
          search_label.classList.remove('top30')
          notification_label.classList.remove('top30')
          favorites_label.classList.remove('top30')
          profile_label.classList.remove('top30')
          buy_all.classList.remove('top30')




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

    arr_writer(arr)

  })
}