const helloWorld = require('./src/app');

describe('testing ./src/app.js', ()=>{
  it('testing that helloWorld.phrase is a string',()=>{
    expect( typeof helloWorld.phrase).toBe('string')
  })

  it('testing that helloWorld.phrase has length',()=>{
    expect(Boolean(helloWorld.phrase.length)).toBeTruthy();
  })
  
})

