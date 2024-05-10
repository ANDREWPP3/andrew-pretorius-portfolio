import React from 'react';
import { BulletItem } from '../../styled/bullet-item';
import { BulletContainer } from '../../styled/bull-container';
import { TypeWriterMulti } from '../../styled/type-writer-multi';

export default function BulletPointData({theme,data,aligndata}){

    if(!data)
        return null;
    let bulletPoints = [];
    for(let i=0;i<data.length;i++){
        bulletPoints.push(
            <BulletItem nomargintop={i===0} key={data[i]+"_"+i}>{data[i]}</BulletItem>
        )
    }

    return (
        <BulletContainer aligndata={aligndata}>
            {bulletPoints}
        </BulletContainer>
    )
}