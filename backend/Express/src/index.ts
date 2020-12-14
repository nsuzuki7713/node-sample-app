import { createConnection, getRepository, Repository } from 'typeorm';
import { UserSample } from './entity/UserSample';

const createUser = async (userRepository: Repository<UserSample>) => {
  console.log('### Create ###');

  await userRepository.insert({
    firstName: 'Taro',
    lastName: 'Yamada',
    age: 25,
  });

  await userRepository.save({
    firstName: 'Saki',
    lastName: 'Suzuki',
    age: 40,
  });
};

const readUser = async (userRepository: Repository<UserSample>) => {
  console.log('### Read ###');

  const users = await userRepository.find();
  console.log(`All Users: ${JSON.stringify(users)}`);

  const user = await userRepository.findOne({ firstName: 'Taro' });
  console.log(`Select User: ${JSON.stringify(user)}`);
};

const updateUser = async (userRepository: Repository<UserSample>) => {
  console.log('### Update ###');

  await userRepository.update({ lastName: 'Suzuki' }, { age: 23 });

  const userTaro = await userRepository.findOne({ firstName: 'Taro' });
  if (!userTaro) {
    return;
  }
  userTaro.age = 30;
  await userRepository.save(userTaro);

  const users = await userRepository.find();
  console.log(`All Users: ${JSON.stringify(users)}`);
};

const deleteUser = async (userRepository: Repository<UserSample>) => {
  console.log('### Delete ###');

  const userTaro = await userRepository.findOne({ firstName: 'Taro' });
  if (!userTaro) {
    return;
  }
  await userRepository.remove(userTaro);

  const users = await userRepository.find();
  console.log(`All Users: ${JSON.stringify(users)}`);
};

(async () => {
  const connection = await createConnection();

  const userRepository = getRepository(UserSample);
  await createUser(userRepository);
  await readUser(userRepository);
  await updateUser(userRepository);
  await deleteUser(userRepository);

  await connection.close();
})();
