import { describe, expect, it, assert } from 'vitest';
import ravintola from '../ravintola/ravintola.js';

describe('Ravintolasovelluksen testaus', function () {
  it('Should return correct sum from laskelasku when customer picks main course, starter, dessert and no drink', function () {
    expect(ravintola.laskeLasku(true, true, false)).toBe(14);
  });
  it('Should retunr a value from one of the arrays in Ravintola (alkuruoat, paaruoat, jalkiruoat tai juomat.)', () => {
    const testiArvoTaulukosta = ravintola.palautaTaulukonSatunnainenArvo(
      ravintola.juomat
    );
    const taulukkoTestattavaksi = ravintola.juomat;
    assert.include(
      taulukkoTestattavaksi,
      testiArvoTaulukosta,
      'Taulukko ei sisällä arvoa'
    );
  });
});
