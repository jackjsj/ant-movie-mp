import {request} from '../request.js';
import { top25Api} from './urls.js';

export async function getTop250Movies(){
  const {data} = await request({
    url: top25Api,
  });
  console.log(data);
}