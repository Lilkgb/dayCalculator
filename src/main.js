import './styles.css';
import $ from 'jquery';
import { dateString } from './backEnd.js';
import { newConvert } from './backEnd.js';


$(document).ready(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    let month = $("#month").val();
    let date = $("#date").val();
    let year = $("#year").val();
    let stuff = dateString(month, date, year);
    let newDate = new Date(stuff).getDay();
    let day = newConvert(newDate);
    console.log(day);
    $(".output").html(day);
  });
});
