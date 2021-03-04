const TOKEN = 'LINEのトークンを指定(取得方法：https://arukayies.com/gas/line_bot/gettoken)';
const DEBUGID = 'LINEのユーザIDを指定(取得方法：https://arukayies.com/gas/line_bot/get-userid)';

//LINEBOTでイメージマップメッセージを送るサンプル
function pushmessage_imagemap() {
  //イメージマップメッセージを送る
  UrlFetchApp.fetch('https://api.line.me/v2/bot/message/push', {
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + TOKEN, //LINEのトークンを指定(取得方法：https://arukayies.com/gas/line_bot/gettoken)
    },
    'method': 'POST',
    'payload': JSON.stringify({
      'to': DEBUGID, //LINEのユーザIDを指定(取得方法：https://arukayies.com/gas/line_bot/get-userid)
      'messages': [
        {
          'type': 'imagemap',
          'baseUrl': 'https://arukayies.com/image/imagemap_sample',
          'altText': 'sampleImage',
          'baseSize': {
            'width': 1040,
            'height': 1040
          },
          'video': {
            'originalContentUrl': 'https://www9.nhk.or.jp/das/movie/D0002160/D0002160266_00000_V_000.mp4', //猫動画を再生
            'previewImageUrl': 'https://placehold.jp/240x240.jpg?text=test',
            'area': {
              'x': 0,
              'y': 0,
              'width': 1040,
              'height': 520
            },
            'externalLink': {
              'linkUri': 'https://www.nhk.or.jp/archives/creative/material/category-list.html?i=2',
              'label': 'See More'
            }
          },
          'actions': [
            {
              'type': 'message', //タップするとgoogleがタップされました」と返します
              'text': 'googleがタップされました',
              'area': {
                'x': 0,
                'y': 520,
                'width': 520,
                'height': 520
              }
            },
            {
              'type': 'message', //タップすると「yahooがタップされました」と返します
              'text': 'yahooがタップされました',
              'area': {
                'x': 520,
                'y': 520,
                'width': 520,
                'height': 520
              }
            }
          ]
        }
      ],
      'notificationDisabled': false // trueだとユーザーに通知されない
    }),
  });
}