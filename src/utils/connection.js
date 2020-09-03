import { uid } from 'react-uid';

const tempRow = (id) => ({PRODUKT: `Produkt ${id}`,REALIZACJA_JEDN: Math.random()*10000/100 + 50,REALIZACJA_BANK: Math.random()*10000/100 + 50, LINIA_CZASU: 100});

export async function getDataMOBILE(type) {
    switch (type) {
      case 'value':
        return Math.random()*10000/100 + 50;
      case 'ChartData':
        const temp = [];
        for (let index = 0; index < Math.floor(Math.random() * 5) + 4; index++) {
          temp.push(tempRow(uid(index)));
        }
        return temp;

      default:
        break;
    }
}