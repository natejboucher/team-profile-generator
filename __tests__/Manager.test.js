const Manager = require('../lib/Manager');

test('creates Manager object', () => {
    const manager = new Manager('Nate', 'h1n1', 'subjectnate', '4');

    expect(manager.name).toBe('Nate');
    expect(manager.id).toBe('h1n1');
    expect(manager.email).toBe('subjectnate');
    expect(manager.officeNumber).toBe('4')
})

test('gets Manager information', () => {
    const manager = new Manager('Nate', 'h1n1', 'subjectnate', '4');

    expect(manager.getName()).toBe('Nate');
    expect(manager.getId()).toBe('h1n1');
    expect(manager.getEmail()).toBe('subjectnate');
    expect(manager.getOfficeNum()).toBe('4');
    expect(manager.getRole()).toBe('Manager');
    console.log(manager);
})