import React, { FunctionComponent, useState } from 'react';
import { useParams } from 'react-router';
import cn from 'classnames/bind';

import axios from 'axios';

import * as styles from './Article.scss';

const cx = cn.bind(styles);

export const Article: FunctionComponent = () => {
    const { id } = useParams();

    const [article, setArticle] = useState({});

    const makeRequest = () => {
        axios({
            method: 'get',
            url: `http://localhost:3000/article?id=${id}`,
        }).then(({ data }) => {
            setArticle(data[0] || { title: 'No such article' });
        });
    };

    if (!Object.keys(article).length) {
        makeRequest();
    }

    const { title, subtitle, pre_text, body } = article;

    return (
        <div className={cx('root')}>
            <div>{title}</div>
            <div>{subtitle}</div>
            <div>{pre_text}</div>
            <div>{body}</div>
        </div>
    );
};

export default Article;
