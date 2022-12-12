import { users } from './data/users';
import { calculateDistance } from './calculation/distanceCalculation';
import { coordinates } from './data/office';

test('Do the user object keys match and distance is positive', () => {
   const expectedObjectKeys = [
      "latitude",
      "partner_id",
      "name",
      "longitude"
  ];
  users.map(item => {
    expect(expectedObjectKeys).toMatchObject(Object.keys(item));
    let distance = calculateDistance(coordinates.latitude,coordinates.longitude,item.latitude,item.longitude);
    expect(distance).not.toBeNaN();
    expect(distance).not.toBeLessThan(0);
  });
});