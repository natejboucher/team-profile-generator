const Intern = require('../lib/Intern');

test('creates Intern object', () => {
    const intern = new Intern('Nate', 'h1n1', 'subjectnate', 'UR');

    expect(intern.name).toBe('Nate');
    expect(intern.id).toBe('h1n1');
    expect(intern.email).toBe('subjectnate');
    expect(intern.school).toBe('UR')
})

test('gets Intern information', () => {
    const intern = new Intern('Nate', 'h1n1', 'subjectnate', 'UR');

    expect(intern.getName()).toBe('Nate');
    expect(intern.getId()).toBe('h1n1');
    expect(intern.getEmail()).toBe('subjectnate');
    expect(intern.getSchool()).toBe(`UR`);
    expect(intern.getRole()).toBe('Intern');
})