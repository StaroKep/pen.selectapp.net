import { Express } from 'express';

import constants from 'src/constants';

import get from './get';
import post from './post';
import patch from './patch';

const { paths } = constants;

export default (app: Express) => {
    app.get(paths.user, get);
    app.post(paths.user, post);
    app.patch(paths.user, patch);
};
