export function admin_panel(product, arr_writer) {
  


  if (localStorage.length > 1) {
    for (let i = 2; i < localStorage.length + 1; i++) {
      let product_add = JSON.parse(localStorage.getItem(i))
      product.push(product_add)
    }
  }

  let form = document.querySelector('.form')
  let input1 = document.querySelector('.sign_up1')
  let input2 = document.querySelector('.sign_up2')
  let admin_add_product = document.querySelector('.admin_add_product')
  let button_password = document.querySelector('.button_password')

  button_password.addEventListener('click', (e) => {
    if (button_password.style.backgroundImage == "" || button_password.style.backgroundImage == 'url("../img/eye1.svg")') {
      button_password.style.backgroundImage = "url('../img/eye2.svg')"
      input2.type = 'text'
    }
    else {
      button_password.style.backgroundImage = "url('../img/eye1.svg')"
      input2.type = 'password'
    }

  })


  if (!(localStorage.getItem('admin'))) {
    localStorage.setItem('admin', false)
  }



  function admin_add_product_func() {
    admin_add_product.innerHTML = `
    <input style="margin-bottom: 10px;" placeholder="Product title" class="admin_add_inputs admin_add_inputs_title" name="title" type="text">
    <input style="margin-bottom: 10px;" placeholder="Product count" class="admin_add_inputs admin_add_inputs_count" name="count" type="number">
    <input style="margin-bottom: 10px;" placeholder="Product money" class="admin_add_inputs admin_add_inputs_money" name="money" type="number">
    <input style="margin-bottom: 10px;" placeholder="Product img(link)" class="admin_add_inputs admin_add_inputs_img" name="img" type="text">
    <button style="margin-bottom: 80px;" class="add_product_button" type="button">Add Product</button>
    `

    let add_product_button = document.querySelector('.add_product_button')
    let admin_add_inputs = document.querySelector('.admin_add_inputs')
    let admin_add_inputs_title = document.querySelector('.admin_add_inputs_title')
    let admin_add_inputs_count = document.querySelector('.admin_add_inputs_count')
    let admin_add_inputs_money = document.querySelector('.admin_add_inputs_money')
    let admin_add_inputs_img = document.querySelector('.admin_add_inputs_img')


    // window.scroll({
    //   top: 200,
    //   behavior: 'smooth',
    //   borderRadius:5,
    // });

    add_product_button.addEventListener('click', () => {

      if (admin_add_inputs_title.value.length > 0 && admin_add_inputs_count.value.length > 0 && admin_add_inputs_money.value.length > 0 && admin_add_inputs_img.value.length > 0) {
        product.push({
          title: `${admin_add_inputs_title.value}`,
          img: `<img class="img-fluid rounded-start" src="${admin_add_inputs_img.value}" alt="img">`,
          count: admin_add_inputs_count.value,
          money: admin_add_inputs_money.value,
          all_money: 0,
          id: Math.round(Math.random() * 1000000000000),
          like: false,
        })



        let product_add_by_admin = {
          title: `${admin_add_inputs_title.value}`,
          img: `<img class="img-fluid rounded-start" src="${admin_add_inputs_img.value}" alt="img">`,
          count: admin_add_inputs_count.value,
          money: admin_add_inputs_money.value,
          all_money: 0,
          id: Math.round(Math.random() * 1000000000000),
          like: false,
        }
        localStorage.setItem(localStorage.length + 1, JSON.stringify(product_add_by_admin))
        admin_add_inputs_title.value = ''
        admin_add_inputs_count.value = ''
        admin_add_inputs_money.value = ''
        admin_add_inputs_img.value = ''
        arr_writer(product)
      }


      else {
        admin_add_inputs_title.classList.add("password_error")
        admin_add_inputs_count.classList.add("password_error")
        admin_add_inputs_money.classList.add("password_error")
        admin_add_inputs_img.classList.add("password_error")
        admin_add_inputs_title.value = ""
        admin_add_inputs_count.value = ""
        admin_add_inputs_money.value = ""
        admin_add_inputs_img.value = ""
        admin_add_inputs_title.placeholder = "Hammasini to'ldiring"
        admin_add_inputs_count.placeholder = "Hammasini to'ldiring"
        admin_add_inputs_money.placeholder = "Hammasini to'ldiring"
        admin_add_inputs_img.placeholder = "Hammasini to'ldiring"
        setTimeout(() => {
          admin_add_inputs_title.classList.remove("password_error")
          admin_add_inputs_count.classList.remove("password_error")
          admin_add_inputs_money.classList.remove("password_error")
          admin_add_inputs_img.classList.remove("password_error")
        }, 800)
      }




    })
  }
  if (localStorage.getItem('admin') == 'true') {
    form.style.display = 'none';
    admin_add_product_func()
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (localStorage.getItem('admin') == "false") {
      if (input2.value * 1 == 3333) {
        form.style.display = 'none'
        localStorage.setItem('admin', true)
        admin_add_product_func();
        arr_writer(product)
      }
      else {
        input2.classList.add('password_error')
        input2.value = ''
        input2.placeholder = 'Kod 4 ta uch(3333)'
        setTimeout(() => {
          input2.classList.remove('password_error')
        }, 500)

      }

    }


  })
}