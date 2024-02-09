/* Main Settings JS file */
const settings = {
  config: {
    host: "if8curbxh42bxu7.sg.qlikcloud.com",
    prefix: "/",
    port: "",
    isSecure: true,
    webIntegrationId: "tJ8Rr5iRiQz27JYRVxAMvNzZEFlb5cun",
  },
  app_id: "d8eee684-ff7d-4f9f-80b2-fe5e2009a933",
  scriptsUrlLocal: "http://localhost/pnl-model/",
  scriptsUrl: "https://gfoodapi.github.io/pnl-model/",
  objects: {
    pivot: "500f6369-ee50-41eb-9d89-9082fcdbd2d7",
    filters: [
      "zLtGdC", //חטיבות
      "pkcvDsd", //מרכז רווח
      "hAmCy", //סניף
      "NjGjC", //שנה
      "JYKrQmR", //רבעון
      "MjjgUXK", //חודש
      "752f7cff-8d51-4d79-be6f-13e35f385f49", //datepicker
    ],
    charts: [
      "EuksQv", // סה"כ הכנסות
      "zzK", // סה"כ הוצאות
      "vXwDxk", // סה"כ רווח
      "mSmJz", // % רווח
    ],
    buttons: [
      "fa8e1756-72c2-4cd0-95f7-ff09921f27e9", // צפי הכנסות
      "c0509e5c-bcc1-4872-b89a-1bf2ccf75803", // כולל הזמנות פתוחות/קבלות סחורה
      "730991df-b03c-4abb-9d0f-79db46a41fc2", // YTD
    ],
  },
  selectedFields: [
    {
      name: "Year",
      value: new Date().getFullYear(),
    },
    {
      name: "YTD",
      value: "YTD",
    },
  ],
  measures: [
    //סה"כ הכנסות
    {
      qLabel: 'סה"כ הכנסות 2024',
      qLibraryId: "nyezVP",
    },
    {
      qLabel: 'סה"כ הכנסות 2023',
      qLibraryId: "PWcrrP",
    },
    {
      qLabel: 'סה"כ הכנסות % שינוי',
      qLibraryId: "PppNzu",
    },
    //סה"כ הוצאות
    {
      qLabel: 'סה"כ הוצאות 2024',
      qLibraryId: "AJMdGbT",
    },
    {
      qLabel: 'סה"כ הוצאות 2023',
      qLibraryId: "dc2fca6f-5206-4c14-99cf-f27d533f2f8c",
    },
    {
      qLabel: 'סה"כ הוצאות % שינוי',
      qLibraryId: "39b354df-04e6-413d-b65c-da2fc2b593bf",
    },
    //רווח
    {
      qLabel: 'סה"כ רווח 2024',
      qLibraryId: "1a381fe3-4ebe-4ac6-b3e6-dc1a01c10f0b",
    },
    {
      qLabel: 'סה"כ רווח 2023',
      qLibraryId: "9e8a7313-9509-46a9-9120-629abf0eba72",
    },
    {
      qLabel: 'סה"כ רווח % שינוי',
      qLibraryId: "3b04f418-71ed-4204-b686-f23a30f0449b",
    },
    //% שינוי רווח
    {
      qLabel: "% רווח 2024",
      qLibraryId: "NxQTj",
    },
    {
      qLabel: "% רווח 2023",
      qLibraryId: "b2d81876-4060-4910-93b8-6b1edd5d9349",
    },
    {
      qLabel: "שינוי רווח %",
      qLibraryId: "5eadd787-be3e-4d18-a005-6ab8a4274d39",
    }
  ]
};
/* 
app_id: "d8eee684-ff7d-4f9f-80b2-fe5e2009a933"
selected fields: Year - 2024, YTD - YTD

kpis-mesures:
data-id="rnRhwFc"  -  סה"כ הכנסות 2024
data-id="qtdEQ" -  סה"כ הכנסות 2023
data-id="" - % שינוי הכנסות

data-id="MaKVGJ" - סה"כ הוצאות 2024
data-id="pzfSUF" - סה"כ הוצאות 2023
data-id="" - % שינוי הוצאות

*/
