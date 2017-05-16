chrome.browserAction.onClicked.addListener(function(tab) {

  // plantuml server のページ以外でクリックすると遷移
  if ( !tab.url.match( /http:\/\/www\.plantuml\.com\/plantuml\/uml\/*/ ) ) {
    chrome.tabs.create({ url: 'http://www.plantuml.com/plantuml' }, function(tab){});
    return;
  }

  // dom を作る
  var dom = document.createElement('input');

  // url を作る
  var uml = tab.url;
  var svg = tab.url.replace(/\/uml\//, '/svg/');
  dom.value = '[![](' + svg +')](' + uml + ')';

  // clipboard にコピー
  document.body.appendChild(dom);
  dom.select();
  document.execCommand('copy');

  // バッジを表示
  chrome.browserAction.setBadgeText({ text: "cp" });
  setTimeout(function(){
    chrome.browserAction.setBadgeText({ text: "" });
  }, 3000);

});
