import { product } from "./arr.js";
export function nav_menu() {
  let notification_label = document.querySelector('.notification_label');
  let search_label = document.querySelector('.search_label');
  let home_label = document.querySelector('.home_label');
  let buy_all = document.querySelector('.buy_all');
  let favorites_label = document.querySelector('.favorites_label');
  let favorites_box = document.querySelector('.favorites_box');
  let search_box = document.querySelector('.search_box');
  let profile_label = document.querySelector('.profile_label');
  let selector = document.querySelector('.selector');
  let searche_input = document.querySelector('.searche_input')
  let searche_button = document.querySelector('.search_button')
  let search = document.querySelector('.search')
  let card5 = document.querySelector('.card5')

  notification_label.addEventListener('click', () => {

    let corusel = document.querySelector('.corusel')
    corusel.style.marginBottom = '500px'

    let slide = document.querySelector('.slide')
    slide.style.display = 'block'
    searche_input.style.display = 'none'
    searche_button.style.display = 'none'
    search.style.display = 'none'
    favorites_box.style.display = 'none'
    search_box.style.display = 'none'
    let logup = document.querySelector('.logup')
    logup.style.display = 'none'
  })
  home_label.addEventListener('click', () => {

    let corusel = document.querySelector('.corusel')
    corusel.style.marginBottom = '500px'

    let slide = document.querySelector('.slide')
    slide.style.display = 'block'
    searche_input.style.display = 'none'
    searche_button.style.display = 'none'
    search.style.display = 'none'
    favorites_box.style.display = 'none'
    search_box.style.display = 'none'
    let logup = document.querySelector('.logup')
    logup.style.display = 'none'
  })
  favorites_label.addEventListener('click', () => {

    let corusel = document.querySelector('.corusel')
    corusel.style.marginBottom = '500px'

    let slide = document.querySelector('.slide')
    slide.style.display = 'block'
    searche_input.style.display = 'none'
    searche_button.style.display = 'none'
    search.style.display = 'none'
    favorites_box.style.display = 'none'
    search_box.style.display = 'none'

    let logup = document.querySelector('.logup')
    logup.style.display = 'none'

  })
  profile_label.addEventListener('click', () => {

    let corusel = document.querySelector('.corusel')
    corusel.style.marginBottom = '0'

    let slide = document.querySelector('.slide')
    let box = document.querySelector('.box')
    let favorites_box = document.querySelector('.favorites_box')
    let like = document.querySelector('.like')
    let search_box = document.querySelector('.search_box')
    box.style.display = 'none'
    favorites_box.style.display = 'none'
    like.style.display = 'none'
    search_box.style.display = 'none'
    searche_input.style.display = 'none'
    searche_button.style.display = 'none'
    search.style.display = 'none'
    favorites_box.style.display = 'none'
    search_box.style.display = 'none'
    let logup = document.querySelector('.logup')
    logup.style.display = 'block'
    slide.style.display = 'none'
  })
  selector.classList = 'selector home_label_selector'
  home_label.classList += ' top30'

  notification_label.addEventListener('click', () => {
    let corusel = document.querySelector('.corusel')
    corusel.style.marginBottom = '500px'
    let slide = document.querySelector('.slide')
    slide.style.display = 'block'
    notification_label.after.filter = 'brightness(1.5) drop-shadow(0px 0px 2px var(--sel))'
    notification_label.after.transition = 'all 0.5s ease 0s'
    selector.classList = 'selector checked_color notification_label_selecter';
    notification_label.classList.add('top30', 'checked_color')
    search_label.classList.remove('top30')
    home_label.classList.remove('top30')
    favorites_label.classList.remove('top30')
    profile_label.classList.remove('top30')
    buy_all.classList.remove('top30')
    let logup = document.querySelector('.logup')
    logup.style.display = 'none'
  })

  search_label.addEventListener('click', () => {
    let corusel = document.querySelector('.corusel')
    corusel.style.marginBottom = '500px'
    let slide = document.querySelector('.slide')
    slide.style.display = 'block'
    selector.classList = 'selector checked_color selector_after search_label_selector';
    search_label.classList.add('top30', 'checked_color')

    search_label.after.filter = 'brightness(1.5) drop-shadow(0px 0px 2px var(--sel))'
    search_label.after.transition = 'all 0.5s ease 0s'

    notification_label.classList.remove('top30')
    home_label.classList.remove('top30')
    favorites_label.classList.remove('top30')
    profile_label.classList.remove('top30')
    buy_all.classList.remove('top30')
    let logup = document.querySelector('.logup')
    logup.style.display = 'none'
  })

  home_label.addEventListener('click', () => {
    let corusel = document.querySelector('.corusel')
    corusel.style.marginBottom = '500px'
    let slide = document.querySelector('.slide')
    slide.style.display = 'block'
    let logup = document.querySelector('.logup')
    logup.style.display = 'none'
    selector.classList = 'selector checked_color selector_after home_label_selector';
    home_label.classList.add('top30', 'checked_color')
    search_label.classList.remove('top30')
    notification_label.classList.remove('top30')
    favorites_label.classList.remove('top30')
    profile_label.classList.remove('top30')
    buy_all.classList.remove('top30')
  })

  favorites_label.addEventListener('click', () => {
    let corusel = document.querySelector('.corusel')
    corusel.style.marginBottom = '500px'
    let slide = document.querySelector('.slide')
    slide.style.display = 'block'
    let logup = document.querySelector('.logup')
    logup.style.display = 'none'
    favorites_label.after.filter = 'brightness(1.5) drop-shadow(0px 0px 2px var(--sel))'
    favorites_label.after.transition = 'all 0.5s ease 0s'

    selector.classList = 'selector checked_color selector_after favorite_label_selecter';
    favorites_label.classList.add('top30', 'checked_color')
    search_label.classList.remove('top30')
    home_label.classList.remove('top30')
    notification_label.classList.remove('top30')
    profile_label.classList.remove('top30')
    buy_all.classList.remove('top30')
  })
  profile_label.addEventListener('click', () => {
    let corusel = document.querySelector('.corusel')
    corusel.style.marginBottom = '0'
    

    profile_label.after.filter = 'brightness(1.5) drop-shadow(0px 0px 2px var(--sel))'
    profile_label.after.transition = 'all 0.5s ease 0s'

    selector.classList = 'selector checked_color selector_after profile_label_selecter'
    profile_label.classList.add('top30', 'checked_color')
    search_label.classList.remove('top30')
    home_label.classList.remove('top30')
    favorites_label.classList.remove('top30')
    notification_label.classList.remove('top30')
    buy_all.classList.remove('top30')
  })

  buy_all.addEventListener('click', () => {
    let corusel = document.querySelector('.corusel')
    corusel.style.marginBottom = '500px'
    let slide = document.querySelector('.slide')
    slide.style.display = 'block'
    let logup = document.querySelector('.logup')
    logup.style.display = 'none'
    notification_label.after.filter = 'brightness(1.5) drop-shadow(0px 0px 2px var(--sel))';
    notification_label.after.transition = 'all 0.5s ease 0s';
    notification_label.before.filter = 'brightness(1.5) drop-shadow(0px 0px 2px var(--sel))';
    notification_label.before.transition = 'all 0.5s ease 0s';

    search_box.style.display = 'none'
    search_label.classList.remove('top30')
    home_label.classList.remove('top30')
    favorites_label.classList.remove('top30')
    profile_label.classList.remove('top30')
    selector.classList = 'selector checked_color selector_after notification_label_selecter';
    notification_label.classList.add('top30', 'checked_color')
    const favorites = document.querySelector('.notification');
    const home = document.querySelector('.home');
    const box1 = document.querySelector('.box');
    const count3 = document.querySelectorAll('.count');
    const box = document.querySelector('.favorites_box');

    box.innerHTML = "Bo'm-bo'sh"
    let favorites_product = [];
    for (const i of product) {
      if (i.all_money > 0) {
        for (const j of count3) {
          if (j.id == i.id) {
            i.doc_count = j.textContent
            favorites_product.push(i)
            render();
          }
        }
      }
    }

    box1.style.display = 'none';
    box.style.listStyle = 'none';
    box.style.display = 'block'

    function render() {
      box.textContent = '';

      for (const i of favorites_product) {
        box.innerHTML += `
        <li id="${i.id}" class="card card2 favorite_box" style="width: 1100px;margin: 0 auto;margin-bottom:120px;">
          <div class="card card-top">
           ${i.img}
          </div>
          <div class="img_box">
           
          </div>
          <div>
            <div>
              <h2>${i.title}</h2>
              <p style="margin-top: 10px;margin-bottom: 10px;">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quae officia architecto ipsam voluptatem
              veritatis, repellendus velit deserunt cum, unde iusto sequi, perferendis alias laborum error id autem. Animi eum
              quos tenetur amet expedita repellendus unde a velit ullam accusamus? Eaque quam vero expedita quibusdam quo
              asperiores nisi, iure fugiat sed, magni reiciendis eos quas quis adipisci fugit odio rerum aliquid? Necessitatibus
              perferendis quasi hic quibusdam ad dolorum in quos quidem incidunt, vitae recusandae ex, iusto culpa impedit
              explicabo commodi a quam quisquam voluptatum. Nihil, quibusdam eaque? Repellat, exercitationem, eos officia
              consectetur explicabo, nihil recusandae autem quae perspiciatis eveniet a?</p>
              <p>${i.money}$</p>
              <div class="box_kg"><p id="${i.id}" class="text-muted2">${i.count}</p><p>kg</p></div>
              <p>All money: <span id="${i.id}" class="all_money2">${i.all_money}</span>$</p>
              <div class="btn_box" style="display:flex; align-items:center;justify-content:start;">
              <button id="${i.id}" style="border:none; padding:10px; border-radius:2px; background-color: aqua; margin-bottom:5px; margin-right:4px;" class="btn-minus" type="button">-</button>
              <p id="${i.id}" class="count2">${i.doc_count}</p>
              <button id="${i.id}" style="border:none; padding:10px; border-radius:2px; background-color: aqua; margin-bottom:5px; margin-left:4px; " class="btn-plus" type="button">+</button>
              </div>
            </div>      
        </li>
      `
      }
    }
    render()
    const count = document.querySelectorAll('.count2');
    const card2 = document.querySelectorAll('.card2')
    const text_count = document.querySelectorAll('.text-muted2')
    const all_money = document.querySelectorAll('.all_money2')
    for (const k of card2) {
      k.addEventListener('click', (e) => {
        if (e.target.className == 'btn-plus') {
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
          for (const i of count) {
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




    home.addEventListener('click', () => {
      box.style.display = 'none';
      box1.style.display = 'flex'
    })




  })
  let like_all = document.querySelector('.like_all')
  let like = document.querySelector('.like')
  like_all.addEventListener('click', () => {


    let search_box2 = document.querySelector('.search_box')
    search_label.classList.remove('top30')
    home_label.classList.remove('top30')
    favorites_label.classList.remove('top30')
    profile_label.classList.remove('top30')
    selector.classList = 'selector checked_color selector_after favorite_label_selecter';
    favorites_label.classList.add('top30', 'checked_color')
    const home = document.querySelector('.home');
    const box1 = document.querySelector('.box');
    const count3 = document.querySelectorAll('.count');
    const box = document.querySelector('.favorites_box');
    let cards = document.querySelectorAll('.card');

    box1.style.display = 'none';
    search_box.style.display = 'none';
    like.style.display = 'none';
    box.style.listStyle = 'none';
    box.style.display = 'block'
    for (const i of cards) {
      for (const j of product) {
        if (j.like) {
          box.innerHTML = "Bo'm-bo'sh"
          let favorites_product2 = [];
          for (let i of product) {
            i.doc_count = 0;
            if (i.like) {
              i.doc_count = j.textContent;
              favorites_product2.push(i);
              render();
            }
          }

          function render() {
            box.textContent = '';
            for (let i of favorites_product2) {
              if (!(i.doc_count)) {
                i.doc_count = 0;
              }
              box.innerHTML += `
                    <li id="${i.id}" class="card card3 favorite_box" style="width: 1100px;margin: 0 auto;margin-bottom:120px;flex-direction: column; margin-top:70px;">
                      <div class="card card-top2">
                       ${i.img}
                      </div>
                      <div class="img_box">
                      </div>
                      <div>
                        <div>
                          <h2>${i.title}</h2>
                          <p style="margin-top: 10px;margin-bottom: 10px;">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quae officia architecto ipsam voluptatem
                          veritatis, repellendus velit deserunt cum, unde iusto sequi, perferendis alias laborum error id autem. Animi eum
                          quos tenetur amet expedita repellendus unde a velit ullam accusamus? Eaque quam vero expedita quibusdam quo
                          asperiores nisi, iure fugiat sed, magni reiciendis eos quas quis adipisci fugit odio rerum aliquid? Necessitatibus
                          perferendis quasi hic quibusdam ad dolorum in quos quidem incidunt, vitae recusandae ex, iusto culpa impedit
                          explicabo commodi a quam quisquam voluptatum. Nihil, quibusdam eaque? Repellat, exercitationem, eos officia
                          consectetur explicabo, nihil recusandae autem quae perspiciatis eveniet a?</p>
                          <p>${i.money}$</p>
                          <div class="box_kg"><p id="${i.id}" class="text-muted2">${i.count}</p><p>kg</p></div>
                          <p>All money: <span id="${i.id}" class="all_money2">${i.all_money}</span>$</p>
                          <div class="btn_box" style="display:flex; align-items:center;justify-content:start;">
                          <button id="${i.id}" style="border:none; padding:10px; border-radius:2px; background-color: aqua; margin-bottom:5px; margin-right:4px;" class="btn-minus" type="button">-</button>
                          <p id="${i.id}" class="count2">${i.doc_count}</p>
                          <button id="${i.id}" style="border:none; padding:10px; border-radius:2px; background-color: aqua; margin-bottom:5px; margin-left:4px; " class="btn-plus" type="button">+</button>
                          </div>
                        </div>
                    </li>
                  `
            }
          }
          render()
          let count = document.querySelectorAll('.count2');
          let card3 = document.querySelectorAll('.card3')
          let text_count = document.querySelectorAll('.text-muted2')
          let all_money = document.querySelectorAll('.all_money2')
          for (let k of card3) {
            k.addEventListener('click', (e) => {
              if (e.target.className == 'btn-plus') {
                for (let i of count) {
                  if (i.id == e.target.id) {
                    for (let j of product) {
                      if (j.id == e.target.id) {
                        if (j.count > 0) {
                          for (let l of text_count) {
                            if (l.id == e.target.id) {
                              for (let f of all_money) {
                                if (e.target.id == f.id) {
                                  j.all_money = j.money
                                  i.textContent = i.textContent * 1 + 1;
                                  j.count -= 1;
                                  l.textContent = j.count;
                                  j.all_money = i.textContent * j.money;
                                  f.textContent = j.all_money;
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
                for (let i of count) {
                  if (i.id == e.target.id) {
                    if (i.textContent > 0) {
                      for (let j of product) {
                        if (j.id == e.target.id) {
                          for (let l of text_count) {
                            if (l.id == e.target.id) {
                              for (let f of all_money) {
                                if (e.target.id == f.id) {
                                  j.all_money = j.money
                                  i.textContent = i.textContent * 1 - 1;
                                  j.count += 1;
                                  l.textContent = j.count;
                                  j.all_money = i.textContent * 1 * j.money
                                  f.textContent = j.all_money;
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

          home.addEventListener('click', () => {
            box.style.display = 'none';
            box1.style.display = 'flex'
          })
        }
      }

    }
    home.addEventListener('click', () => {
      box.style.display = 'none';
      box1.style.display = 'flex'
      like.style.display = 'none'
    })

  })

}