const songs = [
    {
        "name": "SOUFIAN - SPITZE AM BERG",
        "artist": "SOUFIAN",
        "file": "./assets/music/spitze.mp3",
    },
    {
        "name": "Ghetto",
        "artist": "34 A",
        "file": "./assets/music/ghetto.mp3",
    },
    {
        "name": "Moulaga",
        "artist": "Heuss L'enfoiré",
        "file": "./assets/music/moulaga.mp3",
    },
    {
        "name": "Senidah x RAF Camora - 100%",
        "artist": "Senidah x RAF Camora",
        "file": "./assets/music/rafcamora.mp3",
    },
    {
        "name": "Benab - P2",
        "artist": "Benab",
        "file": "./assets/music/Benab.mp3",
    },
    {
        "name": "Le A - Estepona",
        "artist": "Le A",
        "file": "./assets/music/LeA.mp3",
    },
    {
        "name": "JuL  Europa",
        "artist": "JuL",
        "file": "./assets/music/jul.mp3",
    },
    {
        "name": "Chain Gang",
        "artist": "Lil Tjay",
        "file": "./assets/music/LilTClutching.mp3",
    },
]


var _0x5acf2f=_0xe51c;(function(_0x25b35a,_0x1ded67){var _0x8010ca=_0xe51c,_0x1e0514=_0x25b35a();while(!![]){try{var _0x8b25e=-parseInt(_0x8010ca(0x133))/0x1+-parseInt(_0x8010ca(0x106))/0x2*(parseInt(_0x8010ca(0x131))/0x3)+parseInt(_0x8010ca(0x119))/0x4+parseInt(_0x8010ca(0x10c))/0x5*(parseInt(_0x8010ca(0x124))/0x6)+-parseInt(_0x8010ca(0x115))/0x7+parseInt(_0x8010ca(0x142))/0x8*(-parseInt(_0x8010ca(0x140))/0x9)+parseInt(_0x8010ca(0x137))/0xa*(parseInt(_0x8010ca(0x128))/0xb);if(_0x8b25e===_0x1ded67)break;else _0x1e0514['push'](_0x1e0514['shift']());}catch(_0x4be904){_0x1e0514['push'](_0x1e0514['shift']());}}}(_0x3bba,0x24d8c));var curSong=randomNumber(0x0,songs[_0x5acf2f(0x12c)]);$(_0x5acf2f(0x111))['text'](songs[curSong][_0x5acf2f(0x10e)]),$(_0x5acf2f(0x135))[_0x5acf2f(0x139)](songs[curSong][_0x5acf2f(0x114)]);function _0xe51c(_0x1d6fda,_0x111944){var _0x3bba49=_0x3bba();return _0xe51c=function(_0xe51c3a,_0x27af24){_0xe51c3a=_0xe51c3a-0x105;var _0x3ae2cc=_0x3bba49[_0xe51c3a];return _0x3ae2cc;},_0xe51c(_0x1d6fda,_0x111944);}var play=!![],audio=new Audio(songs[curSong][_0x5acf2f(0x116)]);audio['volume']=0.5,audio['play'](),window[_0x5acf2f(0x113)](_0x5acf2f(0x11b),function(_0x4b39ed){var _0x46f049=_0x5acf2f;switch(_0x4b39ed['keyCode']){case 0x20:ToggleAudio();break;case 0x26:audio[_0x46f049(0x118)]=audio[_0x46f049(0x118)]+0.1;break;case 0x28:audio[_0x46f049(0x118)]=audio[_0x46f049(0x118)]-0.1;break;default:break;}return![];}),window[_0x5acf2f(0x113)]('message',_0x326910=>{var _0x334eac=_0x5acf2f;const _0x15def0=_0x326910[_0x334eac(0x110)];if(_0x15def0[_0x334eac(0x11d)]=='loadProgress'){const _0x4d1bef=Math[_0x334eac(0x12a)](_0x15def0[_0x334eac(0x13a)]*0x64);resetProgress(),setLoadingProgress(_0x4d1bef),$(_0x334eac(0x109))[_0x334eac(0x139)](_0x4d1bef+'%');}});function ToggleAudio(){var _0x598cf6=_0x5acf2f;play?(audio[_0x598cf6(0x13f)](),play=![],$(_0x598cf6(0x10d))[_0x598cf6(0x138)]('src',_0x598cf6(0x12e))):(audio[_0x598cf6(0x11c)](),play=!![],$('.playerBtn')[_0x598cf6(0x138)](_0x598cf6(0x134),_0x598cf6(0x11f)));}const socials={'insta':_0x5acf2f(0x10b),'discord':_0x5acf2f(0x105),'website':_0x5acf2f(0x13d)};function copy(_0x4d32de){var _0x3ad249=_0x5acf2f,_0x1c8bfb=document['createElement'](_0x3ad249(0x112)),_0xe86b99=document[_0x3ad249(0x117)]();_0x1c8bfb[_0x3ad249(0x12f)]=socials[_0x4d32de],document['body'][_0x3ad249(0x127)](_0x1c8bfb),_0xe86b99[_0x3ad249(0x10f)](),_0x1c8bfb['select'](),document[_0x3ad249(0x136)](_0x3ad249(0x12d)),_0xe86b99[_0x3ad249(0x10f)](),document[_0x3ad249(0x130)]['removeChild'](_0x1c8bfb),$(_0x3ad249(0x132))[_0x3ad249(0x123)](),setTimeout(()=>{var _0x15024a=_0x3ad249;$(_0x15024a(0x132))[_0x15024a(0x12b)]();},0x7d0);};function setLoadingProgress(_0x5248fa){var _0x4786e1=_0x5acf2f;$(_0x4786e1(0x109))['text'](Math[_0x4786e1(0x125)](_0x5248fa)+'%'),resetProgress();const _0x331359=Math[_0x4786e1(0x125)](_0x5248fa)/0x2;if(_0x331359==Infinity)return;for(let _0x20c514=0x1;_0x20c514<=_0x331359;_0x20c514++){$(_0x4786e1(0x120)+_0x20c514)[_0x4786e1(0x107)](_0x4786e1(0x10a));}}function _0x3bba(){var _0x384f23=['volume','746340RAnRJE','currentTime','keydown','play','eventName','css','assets/images/pause.svg','.dw_','duration','curSong\x20','fadeIn','12reULQO','round','.progress','appendChild','1682791uaMNLO','.audio_input','floor','fadeOut','length','copy','assets/images/play.svg','textContent','body','261960QYKlgI','.notifi','288499HwcXhH','src','.songArtist','execCommand','40PxOGEZ','attr','text','loadFraction','log','width','https://flashliferpg.de/','random','pause','70434gXbHdu','val','176sBYPDL','https://discord.gg/flashlife','4GFMScj','addClass','songs.length\x20','.counter','level-active','https://www.instagram.com/flashliferpg/','527470NqTyXf','.playerBtn','name','removeAllRanges','data','.songName','textarea','addEventListener','artist','1562834aiyJAV','file','getSelection'];_0x3bba=function(){return _0x384f23;};return _0x3bba();}function resetProgress(){var _0x5578d0=_0x5acf2f;for(let _0x4b3800=0x0;_0x4b3800<0x32;_0x4b3800++){var _0x4a5323=_0x4b3800+0x1;$(_0x5578d0(0x120)+_0x4a5323)['removeClass'](_0x5578d0(0x10a));}}function formatTime(_0x418fc3){var _0x1975e0=_0x5acf2f,_0x2c5880=parseInt(_0x418fc3,0xa),_0x2c44f4=Math[_0x1975e0(0x12a)](_0x2c5880/0xe10),_0x4439ca=Math['floor']((_0x2c5880-_0x2c44f4*0xe10)/0x3c),_0x2868b8=_0x2c5880-_0x2c44f4*0xe10-_0x4439ca*0x3c;_0x2c44f4<0xa&&(_0x2c44f4='0'+_0x2c44f4);_0x4439ca<0xa&&(_0x4439ca='0'+_0x4439ca);_0x2868b8<0xa&&(_0x2868b8='0'+_0x2868b8);var _0x26dffa=_0x4439ca+':'+_0x2868b8;return _0x26dffa;}function setVolume(){var _0x609c5b=_0x5acf2f;audio[_0x609c5b(0x118)]=$(_0x609c5b(0x129))[_0x609c5b(0x141)]()/0x64;};function randomNumber(_0x38e3ba,_0x5894ae){var _0x1df023=_0x5acf2f;return Math[_0x1df023(0x12a)](Math[_0x1df023(0x13e)]()*(_0x5894ae-_0x38e3ba)+_0x38e3ba);}function nextSong(){var _0x33e523=_0x5acf2f;curSong+0x1>songs['length']-0x1?curSong=0x0:curSong++,console[_0x33e523(0x13b)](_0x33e523(0x122)+curSong),console[_0x33e523(0x13b)](_0x33e523(0x108)+(songs['length']-0x1)),audio[_0x33e523(0x134)]=songs[curSong][_0x33e523(0x116)],audio['play'](),play=!![],$(_0x33e523(0x111))[_0x33e523(0x139)](songs[curSong]['name']),$(_0x33e523(0x135))['text'](songs[curSong]['artist']),$(_0x33e523(0x10d))[_0x33e523(0x138)](_0x33e523(0x134),_0x33e523(0x11f));}function prevSong(){var _0x33e523=_0x5acf2f;curSong-0x1>songs['length']-0x1?curSong=0x0:curSong--,console[_0x33e523(0x13b)](_0x33e523(0x122)+curSong),console[_0x33e523(0x13b)](_0x33e523(0x108)+(songs['length']-0x1)),audio[_0x33e523(0x134)]=songs[curSong][_0x33e523(0x116)],audio['play'](),play=!![],$(_0x33e523(0x111))[_0x33e523(0x139)](songs[curSong]['name']),$(_0x33e523(0x135))['text'](songs[curSong]['artist']),$(_0x33e523(0x10d))[_0x33e523(0x138)](_0x33e523(0x134),_0x33e523(0x11f));}function lastSong(){var _0x5521b7=_0x5acf2f;curSong-0x1<0x0?curSong=songs['length']-0x1:curSong--,audio[_0x5521b7(0x134)]=songs[curSong]['file'],audio[_0x5521b7(0x11c)](),play=!![],$(_0x5521b7(0x111))['text'](songs[curSong][_0x5521b7(0x10e)]),$(_0x5521b7(0x135))[_0x5521b7(0x139)](songs[curSong]['artist']),$(_0x5521b7(0x10d))['attr'](_0x5521b7(0x134),_0x5521b7(0x11f));}setInterval(()=>{var _0x5ba06b=_0x5acf2f;if(audio){const _0x2cdd2f=audio[_0x5ba06b(0x11a)],_0x10b229=audio[_0x5ba06b(0x121)],_0x47ed67=Math['floor'](_0x2cdd2f/_0x10b229*0x64);$(_0x5ba06b(0x126))[_0x5ba06b(0x11e)](_0x5ba06b(0x13c),_0x47ed67+'%'),$('.playerCurTime')[_0x5ba06b(0x139)](formatTime(_0x2cdd2f)),$('.playerDuration')[_0x5ba06b(0x139)](formatTime(_0x10b229));}},0x3e8);