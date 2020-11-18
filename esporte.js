Função_Botao: {
  window.onload = () => {
    const Key = "4049310bf06f4ab58a11f7b4b108928a";
    // let query = pesquisa.value;
    let requestShow = new XMLHttpRequest();

    requestShow.onload = showNews;
    requestShow.open(
      "GET",
      `https://newsapi.org/v2/top-headlines?country=br&apiKey=${Key}&q=esporte`
    );
    requestShow.send();
  };
}

Função_Formatar_Datas: {
  function dateFormat(date) {
    let ano = date.slice(0, 4);
    let mes = date.slice(5, 7);
    let dia = date.slice(8, 10);
    return `${dia}/${mes}/${ano}`;
  }
}

Função_Mostrar_Noticias: {
  function showNews() {
    console.log(JSON.parse(this.response));
    let divTela = document.getElementsByClassName("news-api");
    let textoAdd = "";

    // Montando texto html das noticias
    let dados = JSON.parse(this.responseText);
    console.log(dados);
    for (i = 0; i < dados.articles.length; i++) {
      textoAdd = ` 
      <div class="col-lg-4">
            <div class=" img_grande_esporte">
                <a href="#"><img src="${dados.articles[i].urlToImage}" alt=""></a>
            </div>
            <div class=" txt_pequena_collum">
                <h1>News Api!</h1>
                <h3>${dados.articles[i].title}</h3>
                <p>
                ${dados.articles[i].description}
                </p>
            </div>
      </div>`;
        document.getElementsByClassName("news-api")[i].innerHTML = textoAdd;
        console.log(divTela);
    }

    // Preencher a div com o texto html
  }
}
