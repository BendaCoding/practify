import { collections } from 'practify/firebase';
import { isEmpty } from 'lodash';

export const nicknameIsAvailable = (nickname: string = ''): Promise<boolean> => (
  new Promise((resolve, reject) => {
    if( !isEmpty(nickname) ) {
      collections.users
        .where('nickname', '==', nickname)
        .get()
        .then((doc: any) => resolve(!!doc.empty))
        .catch((error) => reject(error))
    }
  })
);
