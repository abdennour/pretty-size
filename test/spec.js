import 'jsdom-global/register';
import expect from 'expect';
import sinon from 'sinon';

import {
 prettySize
} from '../src';
describe(`pretty-size`, () => {

  it(`unit tests framework is working`, () => {
     expect(true).toEqual(true);
  });

  it(`gives a pretty size from binary bytes`, () => {
    const bytes = 1024;
    expect(prettySize(bytes)).toEqual('1.0 KiB');
  })

  it(`gives a pretty size from decimal bytes`, () => {
    const bytes = 1024;
    expect(prettySize(bytes, true)).toEqual('1.0 KB');
  });

  it(`gives a pretty size in Megabyte`, () => {
    const bytes = 1000 ** 2;
    expect(prettySize(bytes, true)).toEqual('1.0 MB');
  });

  it(`gives a pretty size in Mebibyte`, () => {
    const bytes = 1024 ** 2;
    expect(prettySize(bytes)).toEqual('1.0 MiB');
  });

  it(`gives a pretty size in Gigabyte`, () => {
    const bytes = 1000 ** 3;
    expect(prettySize(bytes, true)).toEqual('1.0 GB');
  });

  it(`gives a pretty size in Gibibyte`, () => {
    const bytes = (1024 ** 3) * 2;
    expect(prettySize(bytes)).toEqual('2.0 GiB');
  });

})
