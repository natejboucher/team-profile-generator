const Engineer = require('../lib/Engineer');

test('creates Engineer object', () => {
    const engineer = new Engineer('Nate', 'h1n1', 'subjectnate', 'natejboucher');

    expect(engineer.name).toBe('Nate');
    expect(engineer.id).toBe('h1n1');
    expect(engineer.email).toBe('subjectnate');
    expect(engineer.github).toBe('natejboucher')
})

test('gets Engineer information', () => {
    const engineer = new Engineer('Nate', 'h1n1', 'subjectnate', 'natejboucher');

    expect(engineer.getName()).toBe('Nate');
    expect(engineer.getId()).toBe('h1n1');
    expect(engineer.getEmail()).toBe('subjectnate');
    expect(engineer.getGithub()).toBe(`https://github.com/natejboucher`);
    expect(engineer.getRole()).toBe('Engineer');
})