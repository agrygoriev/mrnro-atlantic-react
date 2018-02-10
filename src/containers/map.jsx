import React, { Component } from 'react';
import Description from './components/description';
import GoogleMap from 'google-map-react';
const InfoWindow = ({text}) => {
    return (
        <div style={{
            position: 'relative', color: 'white', background: '#00a9db',
            height: 40, width: 100, top: -20, left: -30, padding: 15,
            borderRadius: 5
          }}>
              {text}
        </div>
    )
};
const Map = props => {
    return (
        <section className="map">
            <Description paragraph="Наше грандиозное путешествие состоит из 10 этапов, присоединяйтесь к нам на любом из них. Но помните, что мы возьмем с собой не больше 8 участников."/>
            <Description paragraph="Наше путешествие состоит из 10 этапов, каждый из которых отличается уровнем сложности, благодаря чему принять участие в грандиозном путешествии могут как опытные яхтсмены, так и новички. Некоторые из этапов из-за возможных суровых погодных условий больше подойдут яхтсменам с опытом, в частности, это этапы 2, 6 и 7. Участие в остальных – это отличная возможность хорошо провести время с друзьями или семьей." />
            <GoogleMap />
        </section>
    )
}

export default Map;
