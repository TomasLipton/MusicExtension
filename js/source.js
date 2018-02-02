console.log('Main script is loaded.');

let box = document.createElement('div');
box.setAttribute('style', 'width: 350px;height: 30px;border: solid 1px grey;position: fixed;top: 5px;right: 5px;background: white;');
box.setAttribute('id', 'avgust_box');
box.innerText = 'My music is always with me!';
page_header_cont.appendChild(box);


let script = document.createElement("script");
script.setAttribute('src', chrome.extension.getURL("js/main.js"));
script.setAttribute('type', 'text/javascript');
document.documentElement.appendChild(script);

// let _Audio_prototype_play = Audio.prototype.play;
//
// let _PrevAudio = null;
//
//
// let div = document.createElement('div');
// div.style = "position:fixed;left:0;top:0;right:auto;bottom:auto;z-index:2000000000;border:5px solid black;background:white;color:black";
//
// let a = document.createElement('a');
// a.appendChild(document.createTextNode('?'));
// a.style = "display:block;color:inherit;padding:.1em;max-height:1.2em;line-height:1.2em;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;";
//
// div.appendChild(a);
//
// let audioPlacement = document.createElement('div');
//
// div.appendChild(audioPlacement);
//
// let input = document.createElement('input');
//
// input.onfocus = function () {
//     input.select();
// };
//
// div.appendChild(input);
//
// Audio.prototype.play = function () {
//     document.body.appendChild(div);
//     if (_PrevAudio && _PrevAudio.parentNode) {
//         _PrevAudio.parentNode.removeChild(_PrevAudio);
//     }
//     _PrevAudio = this;
//     audioPlacement.appendChild(_PrevAudio);
//     _PrevAudio.setAttribute('style', "display:block!important");
//     _PrevAudio.setAttribute('controls', 'controls');
//     a.style.width = _PrevAudio.clientWidth + 'px';
//     input.style.width = _PrevAudio.clientWidth + 'px';
//     a.download = '';
//     let src = _PrevAudio.src;
//     alert(src);
//     if (!src) {
//         src = _PrevAudio.querySelector('source[type="audio/mp3"]') || _PrevAudio.querySelector('source["type=audio/mpeg"]') || _PrevAudio.querySelector('source["type=audio/mp4"]') || _PrevAudio.querySelector('source]');
//         if (src) {
//             src = src.src;
//         }
//     }
//     a.firstChild.data = src;
//     a.href = src;
//     input.value = '';
//     setTimeout(getTitle, 100);
//     return _Audio_prototype_play.apply(this, arguments);
// };
//
// let getText = function (el, txt) {
//     txt = txt || [];
//     for (let i = 0; i < el.childNodes.length; i++) {
//         switch (el.childNodes[i].nodeType) {
//             case Node.ELEMENT_NODE:
//                 getText(el.childNodes[i], txt);
//                 break;
//             case Node.TEXT_NODE:
//                 txt.push(el.childNodes[i].data);
//                 break;
//         }
//     }
//     return txt.join('');
// };
//
// let getTitleFromElements = function (artistSelector, titleSelector) {
//     let p = document.querySelector(artistSelector);
//     if (p) {
//         p = getText(p).replace(/^\s*[-–]\s*|\s*[-–]\s*$/g, '').trim();
//     }
//     let t = document.querySelector(titleSelector);
//     if (t) {
//         t = getText(t).replace(/^\s*[-–]\s*|\s*[-–]\s*$/g, '').trim();
//     }
//     return (p ? p : 'Unknown Artist') + ' - ' + (t ? t : 'Unknown Song');
// };
//
// let getTitle = function () {
//     let title = 'Unknown Artist - Unknown Song';
//     if (/(\.|^)yandex\.ru$/.test(document.location.host)) {
//         title = getTitleFromElements('.player-controls__track-container .track__artists', '.player-controls__track-container .track__title');
//     } else if (/(\.|^)vk\.com$/.test(document.location.host)) {
//         title = getTitleFromElements('.audio_page_player_title_performer', '.audio_page_player_title_song');
//     } else if (/(\.|^)ok\.ru$/.test(document.location.host)) {
//         title = getTitleFromElements('.mus_player_artist', '.mus_player_song');
//     } else if (/(\.|^)zvooq\.com$/.test(document.location.host)) {
//         title = getTitleFromElements('.topPanelTimeline-intitleArtist', '.topPanelTimeline-intitleRelease');
//     } else if (/(\.|^)karaoke\.ru$/.test(document.location.host)) {
//         title = getTitleFromElements('.player-karaoke-ru-copyrights-artists, .select-song .player-song-authors', '.player-karaoke-ru-copyrights-title, .select-song .player-song-title');
//         title += ' (караоке)';
//     } else if (/(\.|^)itunes\.apple\.com$/.test(document.location.host)) {
//         title = getTitleFromElements('.is-now-playing .bordered-list__subtitle, .product-hero-gutter .t-hero-headline', '.is-now-playing .bordered-list__title, .product-hero-gutter .is-active .table__row__name');
//     }
//     input.value = title;
//     _PrevAudio.download = a.download = title + '.mp3';
// };