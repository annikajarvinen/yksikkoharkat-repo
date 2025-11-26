import { describe, expect, it, beforeEach } from 'vitest';
import ravintola from '../ravintola/ravintola_updated.js';

describe('Ravintola-testit', () => {
  beforeEach(() => {
    ravintola.paikat = undefined;
  });

  it('Testitapaus 1: syoRavintolassa toimii kun asiakasmäärä ≤ paikkojen määrä', () => {
    const tulos = ravintola.syoRavintolassa(5);
    expect(tulos).toBeTruthy();
    expect(Array.isArray(tulos)).toBe(true);
    expect(tulos.length).toBe(5);
  });

  it('Testitapaus 2: Paikat täyttyvät kahdella peräkkäisellä kutsulla', () => {
    const eka = ravintola.syoRavintolassa(10);
    expect(eka).toBeTruthy();

    const toka = ravintola.syoRavintolassa(6);
    expect(toka).toBeUndefined();
  });

  it('Testitapaus 3: laskeLasku laskee ruokaobjektien hinnat oikein', () => {
    const ruoat = [
      { ruoka: 'Testi1', hinta: 4 },
      { ruoka: 'Testi2', hinta: 7 },
      { ruoka: 'Testi3', hinta: 3 },
    ];

    const summa = ravintola.laskeLasku(ruoat);
    expect(summa).toBe(14);
  });
});
