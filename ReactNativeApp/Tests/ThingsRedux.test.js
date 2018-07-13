import {parseThingsResponse} from '../App/Redux/reducers/things.reducer';
import {item} from './mocks';

test('things parsing', () => {
    const parsed = parseThingsResponse(item);
    expect(parsed.result[0]).toEqual('5ae70018b9797d1c51023dae');
});