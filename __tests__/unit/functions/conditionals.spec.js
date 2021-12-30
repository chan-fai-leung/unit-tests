import {complexAddition, simpleAddition} from '../../../src/functions/conditionals'

describe('Conditionals', () => {
    describe('Given the simple addition', () => {
        test('should add the two value', () => {
            expect(simpleAddition(1, 2)).toStrictEqual(3)
        })
    })

    describe('Given the complex addition', () => {
        test('should add the two value', () => {
            expect(complexAddition(1, 2)).toStrictEqual(3)
        })

        test('should check the value pass is a number', () => {})

        test('should be able to pass a string number value', () => {})

        test('should return an error message stating "Invalid {value*} is passed"', () => {})
    })
})