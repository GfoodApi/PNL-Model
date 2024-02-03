/* Main Settings JS file */
const settings = {
  config: {
    host: "if8curbxh42bxu7.sg.qlikcloud.com",
    prefix: "/",
    port: "",
    isSecure: true,
    webIntegrationId: "p39g8z6OSm3dBDntVhfx8_Kr5-VsEXKQ",
  },
  app_id: "d8eee684-ff7d-4f9f-80b2-fe5e2009a933",
  scriptsUrlLocal: "http://localhost/pnl-model/",
  scriptsUrl: "https://g-food.sg.qlikcloud.com/",
  objects: {
    top_filters: [
      "QETpfj", //PC
      "gEEqtYe", //Domestic
      "mTbNvw", //Dealer
    ],
    datetime: "nCNhwqx",
  },
  measures: [
    {
      qLabel: 'סה"כ הכנסות 2024',
      qLibraryId: 'rnRhwFc',
    },
    {
      qLabel: 'סה"כ הכנסות 2023',
      qLibraryId: 'qtdEQ',
    },
    {
      qLabel: 'סה"כ הוצאות 2024',
      qLibraryId: 'KyMbj',
    },
    {
        qLabel: 'סה"כ הוצאות 2023',
        qLibraryId: 'KyMbj',
      }
  ],
};
/* 
app_id: "d8eee684-ff7d-4f9f-80b2-fe5e2009a933"
selected fields: Year - 2024, YTD - YTD
table:500f6369-ee50-41eb-9d89-9082fcdbd2d7

filters:
5859b4da-1e88-4363-b359-35d99f132cd3  - חטיבות
0bbbc6cf-ba74-44fe-9fab-df7fefaeb28b - מרכז רווח
4f607383-278c-4be8-9650-4d0556905ab6 - סניף

f46106de-c005-42fe-b9ec-fa1ca30939e8 - שנה
82b6dd64-fd20-49e7-a8e7-bcb54b198b56 - רבעון
20ccf702-6da3-405f-a2ac-4b23b4630079 - חודש

42da43b2-b960-4b4e-862d-911be6ceba08  - datepicker

charts:
f66541e8-99c3-4f31-869d-4861cdca862a - סה"כ הכנסות
7d500cc6-ae80-442c-ae43-ed96f756c4e0- סה"כ הוצאות
6315d013-a8ce-4743-8d16-af49f08f8df8 - סה"כ רווח
10bebab2-8f99-43a6-a8c9-f86e70721a7b - % רווח

Buttons:
fa8e1756-72c2-4cd0-95f7-ff09921f27e9 - צפי הכנסות
c0509e5c-bcc1-4872-b89a-1bf2ccf75803 - כולל הזמנות פתוחות/קבלות סחורה
730991df-b03c-4abb-9d0f-79db46a41fc2 - YTD

kpis-mesures:
data-id="rnRhwFc"  -  סה"כ הכנסות 2024
data-id="qtdEQ" -  סה"כ הכנסות 2023
data-id="" - % שינוי הכנסות

data-id="MaKVGJ" - סה"כ הוצאות 2024
data-id="pzfSUF" - סה"כ הוצאות 2023
data-id="" - % שינוי הוצאות





*/
