const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('Nate', 'h1n1', 'subjectnate');

    expect(employee.name).toBe('Nate');
    expect(employee.id).toBe('h1n1');
    expect(employee.email).toBe('subjectnate');
})

test('gets employee information', () => {
    const employee = new Employee('Nate', 'h1n1', 'subjectnate');

    expect(employee.getName()).toBe('Nate');
    expect(employee.getId()).toBe('h1n1');
    expect(employee.getEmail()).toBe('subjectnate');
    expect(employee.getRole()).toBe('Employee');
})