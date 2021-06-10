<template>
  <div class="Med_Form" >
    <form>
      <h1>Регистрация</h1>
      <label>Фамилия 
        <input type="text" pattern="[A-Za-zА-Яа-яЁё]" placeholder="Ваша фамилия" required >
      </label>

      <label>Имя 
        <input type="text" pattern="[A-Za-zА-Яа-яЁё]" placeholder="Ваше имя" required >
      </label>

      <label>Отчество 
        <input type="text" pattern="[A-Za-zА-Яа-яЁё]" placeholder="Ваше отчество" >
      </label>

      <label>Дата рождения 
        <input type="date" placeholder="Ваша Дата рождения" required >
      </label>

      <label>Телефон
        <input type="tel" pattern="7[0-9]{11}" placeholder="Ваш Телефон" required >
      </label>

      <label>Пол
        М <input type="radio" name="raz" > Ж <input type="radio" name="raz" >
      </label>

      <label>Группа клиентов 
              <select multiple size="2" required >
                <option>VIP</option>
                <option>Проблемные</option>
                <option>ОМС</option>
              </select>
      </label>

      <label>Лечащий врач 
              <select>
                <option value="" hidden disabled selected>Выбрать лечащего врача</option>
                <option>Иванов</option>
                <option>Захаров</option>
                <option>Чернышева</option>
              </select>
      </label>

      <label>Не отправлять СМС 
        <input type="checkbox">
      </label>

      <hr>
      <h4>Адрес</h4>

      <label>Индекс 
        <input type="number">
      </label>

      <label>Страна 
        <input type="text" pattern="[A-Za-zА-Яа-яЁё]" placeholder="Страна">
      </label>

      <label>Область 
        <input type="text" pattern="[A-Za-zА-Яа-яЁё]" placeholder="Область">
      </label>

      <label>Город 
        <input type="text" pattern="[A-Za-zА-Яа-яЁё]" placeholder="Город" required >
      </label>

      <label>Улица 
        <input type="text" pattern="[A-Za-zА-Яа-яЁё]" placeholder="Улица">
      </label>

      <label>Дом
        <input type="text" pattern="[A-Za-zА-Яа-яЁё]" placeholder="Дом">
      </label>

      <hr>
      <h4>Паспорт</h4>

      <label>Тип документа 
              <select required >
                <option value="" hidden disabled selected>Выбрать тип документа</option>
                <option>Паспорт</option>
                <option>Свидетельство о рождении</option>
                <option>Вод. удостоверение</option>
              </select>
      </label>

      <label>Серия 
        <input type="number">
      </label>

      <label>Номер 
        <input type="number">
      </label>

      <label>Кем выдан 
        <input type="text" pattern="[A-Za-zА-Яа-яЁё]" placeholder="Кем выдан">
      </label>

      <label>Дата выдачи 
        <input type="date" placeholder="Дата выдачи документа" required >
      </label>

      <input type="submit">
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
body{
  background-color: blueviolet;
}
</style>

<style scoped>

  .Med_Form{
    display: inline-block;
    background-color: white;
    width: 45%;
  }
  
    .Med_Form label{
      display: block;
      font-size: 20pt;
      margin: 5%;
    }
    .Med_Form input{
      font: 20pt Helvetica, Arial;
    }
    .Med_Form input:focus{
      border: 0.1em solid;
    }

    .Med_Form select {
      font: 15pt Helvetica, Arial;
      letter-spacing: inherit;
      appearance: none;
      border: 0.1em solid;
      padding: 0 0.2em;
  }
  .Med_Form select:not([multiple]) {
    padding-right: 1.2em;
    background-repeat: no-repeat;
    background-position: calc(100% - 0.25em) 0.35em;
    background-size: 0.55em auto;
  } 
  .Med_Form select:focus {
    outline: 0.15em solid #00f;
    box-shadow: 0 0 0.2em #00f;
  }
  .Med_Form input[type=submit]{
    background-color: blueviolet;
    color: rgb(247, 243, 243);
    padding: 5%;
    margin: 2%;
  }

</style>
