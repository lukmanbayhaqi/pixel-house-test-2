import Home from '../../src/views/Home'
const { name, components } = Home;

describe('Home test', () => {
  it('Will returning Components name', () => {
    expect(name).toBe('Home')
    expect(components).toHaveProperty('Table')
    expect(components).toHaveProperty('Edit')
    expect(components).toHaveProperty('Destroy')
    expect(components).toHaveProperty('BulkEdit')
    expect(components).toHaveProperty('DescModal')
  })
})