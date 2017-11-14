var API_KEY = "62dfcf5f768c4f57b4fc9014ba2b8c81";
var PAGE_READY = false;
var UNRENDERED_SOURCES = false;

function menuClick(e){
  $('.ui.menu .active').removeClass('active');
  $(e.target).addClass('active');
  renderNews($(e.target).data('value'));
}

function renderSources(sources) {
  $('.ui.menu').removeClass('loading');
  for(var source of sources){
    $('.ui.menu')
      .append(`
        <a class="item" data-value="${source.id}">${source.name}</a>
      `);
  }
  $('.ui.menu .item').on('click', menuClick);
}

function renderNews(sourceId){
  $('.ui.cards').empty();
  $('.loaders').show();
  $.ajax({
    url: 'http://beta.newsapi.org/v2/top-headlines?sortBy=top&language=en&country=us&sources='+sourceId,
    headers: {
      'X-API-KEY': API_KEY
    }
  })
  .done(data => {
    $('.loaders').hide();
    for(article of data.articles){
      $('.ui.cards').append(`
        <a class="card" href="${article.url}" target="_blank">
          <div class="image">
            <img src="${article.urlToImage}">
          </div>
          <div class="content">
            <div class="header">${article.title}</div>
            ${ article.author ? `<div class="meta">${article.author}</div>` : '' }
            <div class="description">${article.description}</div>
          </div>
          <div class="extra content">
            <span class="right floated">
              ${ moment(article.publishedAt).format("MMM DD, h:mm a") }
            </span>
          </div>
        </a>
      `);
    }
  });
}


$.ajax({
  url: 'http://beta.newsapi.org/v2/sources?language=en&country=us',
  headers: {
    'X-API-KEY': API_KEY
  }
})
.done(data => {
  if(PAGE_READY) renderSources(data.sources);
  else UNRENDERED_SOURCES = data.sources;
  $('.ui.menu .item[data-value="abc-news"]').click();
});

$(document).ready(() => {
  PAGE_READY = true;
  if(UNRENDERED_SOURCES) renderSources(UNRENDERED_SOURCES);
});
