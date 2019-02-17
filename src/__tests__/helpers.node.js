/**
 * @jest-environment node
 */

import {guessMaxImageWidth, fallbackParams} from '../components/helpers'

describe('guessMaxImageWidth', () => {
  const expected = 0
  it(`Should return ${expected} when run in the node environment`, () => {
    const result = guessMaxImageWidth({width: 100})
    expect(result).toEqual(expected)
  })
})

describe('FallbackParams', () => {
  const props = {
    srcSet: [
      {
        format: 'webp',
      },
      {
        format: 'jpeg',
      },
      {
        format: 'png',
      },
    ],
    getUrl: jest.fn(),
  }

  it('Should return an object when run in the node environment', () => {
    const result = fallbackParams(props)
    expect(props.getUrl).toHaveBeenCalled()
    expect(result.ssr).toEqual(true)
  })
})
