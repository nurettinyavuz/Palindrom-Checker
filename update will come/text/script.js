const txtInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button"),
infoTxt = document.querySelector(".info-txt");//Metin girdiğimiz kısım
let filterInput;//kullanıcının girdiği verileri filtrelemek için kullanılır

//Butonu etkinleştirdik
checkBtn.addEventListener("click", () =>{     
    let reverseInput = filterInput.split("").reverse().join("");//split("").reverse().join(""); ters çevirmek için kullanılır ve reverseInpu'a atadık
    /*
    split("") yöntemi, filterInput değişkeninin karakterlerini diziye ayırır, 
    reverse() yöntemi bu diziyi ters çevirir ve 
    join("") yöntemi de ters çevrilen karakter dizisini birleştirerek orijinal metnin ters çevrilmiş halini oluşturur.
    */
    infoTxt.style.display = "block";
    if(filterInput != reverseInput) {//Kullanıcının girdiği ile ters çevirilmiş olan kıyaslanır eşit değilse olumsuz bildirim gider
        return infoTxt.innerHTML = `<span>'${txtInput.value}'</span> isn't a palindrome!`;
    }
    infoTxt.innerHTML = `<span>'${txtInput.value}'</span> is a palindrome!`;
});

txtInput.addEventListener("keyup", () => {
    //Kullanıcının girdiği herhangi bir +*/ işareti tarzı işaretleri girmemesi için filtre
    filterInput = txtInput.value.replace(/[^A-Z0-9]/ig, ""); //replace özel karakterleri filtreler ve filterInput'a atanır
    if(filterInput) {//filterInput dolu mu değil mi check ederiz
        return checkBtn.classList.add("active");//Dolu ise aktif hale geliyor
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");//Buton aktif halden çıkar mesela kullanıcı veri girmedi o zaman aktif olarak çalışır
});